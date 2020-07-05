class DownloadPdfController < ActionController::Base
    
    def meocheki_quotation
        @plan = Plan.find_by(month_price: params[:plans])
        if params[:credit_calc].present?
            @payment_type = params[:payment_type]
            if @payment_type == "credit_discount_month_price"
                @plan_price = @plan.credit_discount_month_price
                @pran_period = "1ヶ月"
            elsif @payment_type == "price_half_year"
                @plan_price = @plan.price_half_year
                @pran_period = "6ヶ月"
            elsif @payment_type == "price_one_year"
                @plan_price = @plan.price_one_year
                @pran_period = "12ヶ月"
            end
        else
            @plan_price = @plan.month_price
            @pran_period = "1ヶ月"
        end

        @plan_name = @plan.name
        @business_name = params[:business_name]
        @add_time_count = params[:crawl_time].to_i
        @add_time_price = @add_time_count * 150
        @add_loc_count = params[:crawl_loc].to_i
        @add_loc_price = @add_loc_count * 300
        @total_price = @plan_price + @add_time_price + @add_loc_price
        @tax = (@total_price * 0.1).to_i
        @in_tax_price = @total_price + @tax
        @email = params[:email]
        
        #binding.pry
            
        pdf_file = render_to_string pdf: '',
            template: 'pdf/quotation',
            encoding: 'UTF-8',
            layout: 'pdf'
            #format: :html
            #page_size: 'A4'
            
        render pdf: 'file_name', #pdfファイルの名前。これがないとエラーが出ます
               layout: 'pdf', #レイアウトファイルの指定。views/layoutsが読まれます。
               template: 'pdf/quotation' 
               
        if params[:contract].present?
            ContractMailer.send_contract(@email, @business_name, @plan_name, pdf_file).deliver_later
        end
               
        #if params[:download].present?
        #   send_data pdf_file, filename: 'caluculation.pdf'
        #end
    end
    
    def rental_quotation
        @plan = Plan.find_by(service_id: 2)
        @plan_name = @plan.name
        @init_price = @plan.init_price
        
        @price_model = RentalPlanPrice.find_by(price:params[:plans])
        @plan_price = params[:plans].to_i
        
        if  @plan_price < 140000
            params[:post].present? ? @post_price = 25000 : 0
            params[:auto_reply_reviews].present? ? @auto_reply_reviews_price = 20000 : 0
            params[:report].present? ? @report_price = 25000 : 0 
        elsif 140000 <= @plan_price &&  @plan_price <= 230000
            params[:post].present? ? @post_price = 50000 : 0
            params[:auto_reply_reviews].present? ? @auto_reply_reviews_price = 40000 : 0
            params[:report].present? ? @report_price = 50000 : 0 
        else
            params[:post].present? ? @post_price = 75000 : 0
            params[:auto_reply_reviews].present? ? @auto_reply_reviews_price = 55000 : 0
            params[:report].present? ? @report_price = 75000 : 0 
        end
        
        if params[:license].present?
            @license_price = 5000
        end
        
        
        @pran_period = "12ヶ月"
        @business_name = params[:business_name]
        @total_price = @plan_price + @post_price.to_i + @auto_reply_reviews_price.to_i + @report_price.to_i + @license_price.to_i
        @in_init_price = @total_price + @init_price.to_i
        @tax = (@total_price * 0.1).to_i
        @in_tax_price = @total_price + @tax
        @in_init_tax = (@in_init_price * 0.1).to_i
        @in_init_tax_price = @in_init_price + @in_init_tax
        @email = params[:email]
        
        binding.pry
        
        pdf_file = render_to_string pdf: '',
            template: 'pdf/quotation',
            encoding: 'UTF-8',
            layout: 'pdf'
            #format: :html
            #page_size: 'A4'
            
        render pdf: 'file_name', #pdfファイルの名前。これがないとエラーが出ます
               layout: 'pdf', #レイアウトファイルの指定。views/layoutsが読まれます。
               template: 'pdf/quotation' 
               
        if params[:contract].present?
            ContractMailer.send_contract(@email, @business_name, @plan_name, pdf_file).deliver_later
        end
        
    end

end