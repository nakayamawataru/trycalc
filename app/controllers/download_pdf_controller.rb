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
	
	
	sumup_initial_cost

	if @first_month_price.present?
		@sales_tax = @first_month_price.delete(',').to_i * 0.1
		@total_price = @first_month_price.delete(',').to_i + @sales_tax
	else
		@sales_tax = @monthly_price.delete(',').to_i * 0.1
		@total_price = @monthly_price.delete(',').to_i + @sales_tax
	end

	@total_of_initial_price.present? ? @monthly_cost_without_initial_cost = @monthly_price.delete(',').to_i - @total_of_initial_price : @monthly_cost_without_initial_cost = @monthly_price.delete(',').to_i
	@monthly_cost_without_initial_cost = @monthly_cost_without_initial_cost *= 1.1

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
	
	def sumup_initial_cost
		@total_of_initial_price = 0
		@init_price.present? ? @total_of_initial_price += @init_price.delete(',').to_i : @total_of_initial_price
		@price_for_support.present? ? @total_of_initial_price += @price_for_support.delete(',').to_i : @total_of_initial_price
		@price_for_initial_registration.present? ? @total_of_initial_price += @price_for_initial_registration.delete(',').to_i : @total_of_initial_price
		@total_of_initial_price *= 1.1
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

