class DownloadPdfController < ActionController::Base
	
	def generate_quotation
	@signup = Signup.new(params[:signup].permit(:company_name, :department,
																				:name, :email, :phone_number, :content))   
	@service = params[:service]
	@plan = params[:plan]
	@number_of_business = params[:number_of_business]
	@keywords = params[:keywords]
	@feature = params[:feature]
	@init_support_options = params[:init_support_options]
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
	@price_for_post = params[:price_for_post]
	@price_for_report = params[:price_for_report]
	@price_for_review_management = params[:price_for_review_management]
	@price_for_bulk_edit = params[:price_for_bulk_edit]
	@price_for_analysis = params[:price_for_analysis]
	@price_for_license = params[:price_for_license]
	@price_for_bulk_registration = params[:price_for_bulk_registration]
	
	
	sumup_initial_cost
	
	if @first_month_price.present?
		@subtotal = @first_month_price.delete(',').to_i
		@sales_tax = @first_month_price.delete(',').to_i * 0.1
		@total_price = @first_month_price.delete(',').to_i + @sales_tax
	else
		@subtotal = @monthly_price.delete(',').to_i
		@sales_tax = @monthly_price.delete(',').to_i * 0.1
		@total_price = @monthly_price.delete(',').to_i + @sales_tax
	end
	
	@monthly_price = @monthly_price.delete(',').to_i
	@monthly_cost_with_sales_tax = @monthly_price *= 1.1

	pdf_file = generate_pdf_file
			
	# render  pdf: 'file_name', #デバッグ用
	# 				title: 'sample.pdf',
	# 				layout: 'pdf', #レイアウトファイルの指定。views/layoutsが読まれます。
	# 				template: 'pdf/quotation',
	# 				show_as_html: params[:debug].present?
	
	
	ContractMailer.download_notification(@signup, @service, @plan, @number_of_business, @keywords, pdf_file).deliver
	send_data pdf_file, filename: "トライハッチお見積り-#{Time.zone.now.strftime('%Y-%m-%d')}.pdf" and return
	render :action => 'thanks'
	
				
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

	def thnaks
		
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
	
end

