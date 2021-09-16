class DownloadPdfController < ActionController::Base
	before_action :set_plan,  only: [:meocheki_quotation, :hoshikakutokun_quotation]
	before_action:set_customer    
	
	def generate_quotation
	@signup = Signup.new(params[:signup].permit(:company_name, :department,
																				:name, :email, :phone_number, :content))   
	@service = params[:service]
	@plan = params[:plan]
	@number_of_business = params[:number_of_business]
	@keywords = params[:keywords]
	@feature = params[:feature]
	@init_price = params[:init_price]
	@price_for_options = params[:price_for_options]
	@first_month_price = params[:first_month_price]
	@monthly_price = params[:monthly_price]
	@plan_price = params[:plan_price]
	@price_for_bulk_management = params[:price_for_bulk_management]
	@price_for_meo = params[:price_for_meo]
	@price_for_meo_analysis = params[:price_for_meo_analysis]
	@price_for_sns_package = params[:price_for_sns_package]
	@price_for_advanced_ranking_information = params[:price_for_advanced_ranking_information]
	@price_for_review_package = params[:price_for_review_package]
	@price_for_support = params[:price_for_support]
	@price_for_initial_registration = params[:price_for_initial_registration]

	
	# 税金計算どうする
	pdf_file = generate_pdf_file
			
	render  pdf: 'file_name', #デバッグ用
					title: 'sample.pdf',
					layout: 'pdf', #レイアウトファイルの指定。views/layoutsが読まれます。
					template: 'pdf/quotation',
					show_as_html: params[:debug].present?
				
	#開発中にEメールが飛ばないようにコメントアウト、本番環境ではコメントアウトを外すこと
	# if params[:contract].present?
	#     if ContractMailer.send_contract(@email, @business_name, @plan_name, pdf_file).deliver_later
	#         flash[:success] = 'お申し込みを承りました。'
	#     else
	#         flash[:alert] = '申し込みメールの送信に失敗しました。'
	#     end
	#     redirect_to thanks_path
	# end
		# if params[:download].present?
		#     send_data pdf_file, filename: "caluculation#{Time.zone.now.strftime('%Y-%m-%d')}.pdf"
		#     ContractMailer.download_notification(@email, @business_name, @plan_name, pdf_file).deliver_later
		# end
	
	end
	
	def rental_quotation
		@plan = Plan.find_by(service_id: 2)
		@plan_name = @plan.name
		@init_price = @plan.init_price
		@init_price_in_tax = @plan.init_price * 1.1
		
		@post_price = 0
		@auto_reply_reviews_price = 0
		@report_price = 0 
		@bulk_edit_price = 0
		
		@price_model = RentalPlanPrice.find_by(price:params[:plans])
		
		if params[:restricted]
			@plan_price = params[:restricted_plan].to_i
			first_price = 75000
			second_price = 149999
		else
			@plan_price = params[:plans].to_i
			first_price = 140000
			second_price = 230000
		end
			
			
		if  @plan_price < first_price
			@post_price               = 25000 if params[:post].present?
			@auto_reply_reviews_price = 50000 if params[:auto_reply_reviews].present?
			@report_price             = 25000 if params[:report].present?
			@bulk_edit_price          = 50000 if params[:bulk_edit].present?
		elsif first_price <= @plan_price &&  @plan_price <= second_price
			@post_price               = 50000 if params[:post].present?
			@auto_reply_reviews_price = 75000 if params[:auto_reply_reviews].present?
			@report_price             = 50000 if params[:report].present?
			@bulk_edit_price          = 100000 if params[:bulk_edit].present?
		else
			@post_price               = 75000 if params[:post].present?
			@auto_reply_reviews_price = 100000 if params[:auto_reply_reviews].present?
			@report_price             = 75000 if params[:report].present?
			@bulk_edit_price          = 150000 if params[:bulk_edit].present?
		end
			
		if params[:license].present?
			@license_price = 5000
		end
			
		@pran_period = 12
		@total_price = @plan_price + @post_price.to_i + @auto_reply_reviews_price.to_i + @report_price.to_i + @license_price.to_i + @bulk_edit_price.to_i
		@in_init_price = @total_price + @init_price.to_i
		@tax = (@total_price * 0.1).to_i
		@in_tax_price = @total_price + @tax
		@in_init_tax = (@in_init_price * 0.1).to_i
		@in_init_tax_price = @in_init_price + @in_init_tax
		
		pdf_file = render_to_string pdf: '',
				template: 'pdf/quotation',
				encoding: 'UTF-8',
				layout: 'pdf',
				#format: :html
				page_size: 'A4'
				
		# render pdf: 'file_name', #pdfファイルの名前。これがないとエラーが出ます
		#       layout: 'pdf', #レイアウトファイルの指定。views/layoutsが読まれます。
		#       template: 'pdf/quotation' 
							
		if params[:contract].present?
			if ContractMailer.send_contract(@email, @business_name, @plan_name, pdf_file).deliver_later
					flash[:success] = 'お申し込みを承りました。'
			else
					flash[:alert] = '申し込みメールの送信に失敗しました。'
			end
			redirect_to thanks_path
		end
		if params[:download].present?
			send_data pdf_file, filename: "caluculation#{Time.zone.now.strftime('%Y-%m-%d')}.pdf"
			ContractMailer.download_notification(@email, @business_name, @plan_name, pdf_file).deliver_later
		end
			
	end
	
	def meo_quotation
		@payment_type = params[:payment_type]

		@plan = Plan.find_by(price_half_year: params[:plans])
		if @payment_type == "price_half_year"
			@plan_price = @plan.price_half_year
			@pran_period = 6
		elsif @payment_type == "price_one_year"
			@plan_price = @plan.price_one_year
			@pran_period = 12
		end
				
		@plan_name = @plan.name
		@total_price = @plan_price
		@tax = (@total_price * 0.1).to_i
		@in_tax_price = @total_price + @tax

		pdf_file = generate_pdf_file
				
		# render pdf: 'file_name', #pdfファイルの名前。これがないとエラーが出ます
		#       layout: 'pdf', #レイアウトファイルの指定。views/layoutsが読まれます。
		#       template: 'pdf/quotation' 
						
		if params[:contract].present?
				if ContractMailer.send_contract(@email, @business_name, @plan_name, pdf_file).deliver_later
						flash[:success] = 'お申し込みを承りました。'
				else
						flash[:alert] = '申し込みメールの送信に失敗しました。'
				end
				redirect_to thanks_path
		end
						
		if params[:download].present?
			send_data pdf_file, filename: "caluculation#{Time.zone.now.strftime('%Y-%m-%d')}.pdf"
			ContractMailer.download_notification(@email, @business_name, @plan_name, pdf_file).deliver_later
		end
			
	end
	
	def hoshikakutokun_quotation
		@message_count = (params[:message_count]&.to_i || 0).to_i
		@message_price = @message_count / 50 * 1000
		@init_price = 25000
		@init_price_in_tax =  @init_price * 1.1
		
		@plan_price = params[:plans].to_i
		if @plan_price == 10000
			@plan_name = "星カクトくんα"
		else
			@plan_name = "星カクトくん+α"
		end

		if params[:credit_calc].present?
				@payment_type = params[:payment_type]
				
				case @payment_type
				when "credit_discount_month_price"
						@pran_period = 1
						@plan_price = @plan_price
				when "price_half_year"
						@pran_period = 6
						@plan_price = @plan_price * @pran_period
				when "price_one_year"
						@pran_period = 12
						@plan_price = @plan_price * @pran_period
				else
						raise "unknown payment type"
				end
				
		else
				@pran_period = 1
		end

			@total_price = @plan_price.to_i + @message_price.to_i
			@in_init_price = @total_price + @init_price.to_i
			@tax = (@total_price * 0.1).to_i
			@in_tax_price = @total_price + @tax
			@in_init_tax = (@in_init_price * 0.1).to_i
			@in_init_tax_price = @in_init_price + @in_init_tax

			pdf_file = generate_pdf_file
					
			# render pdf: 'file_name', #pdfファイルの名前。これがないとエラーが出ます
			#       layout: 'pdf', #レイアウトファイルの指定。views/layoutsが読まれます。
			#       template: 'pdf/quotation' 
			
			if params[:contract].present?
					if ContractMailer.send_contract(@email, @business_name, @plan_name, pdf_file).deliver_later
							flash[:success] = 'お申し込みを承りました。'
					else
							flash[:alert] = '申し込みメールの送信に失敗しました。'
					end
					redirect_to thanks_path
			end
			
			if params[:download].present?
				send_data pdf_file, filename: "caluculation#{Time.zone.now.strftime('%Y-%m-%d')}.pdf"
				ContractMailer.download_notification(@email, @business_name, @plan_name, pdf_file).deliver_later
			end
	end
	
	def generate_pdf_file
		render_to_string pdf: '',
			template: 'pdf/quotation.html.erb',
			encoding: 'UTF-8',
			layout: 'pdf',
			#format: :html
			page_size: 'A4'
	end
	
	def set_plan
			@plan = Plan.find_by(month_price: params[:plans])
	end
	
	def set_customer
			@business_name = params[:business_name]
			@email = params[:email]
	end

end

