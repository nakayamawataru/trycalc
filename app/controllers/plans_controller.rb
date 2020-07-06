class PlansController < ApplicationController
    
    def index
        @plans=Plan.all
    end
    
    def show
    end
    
    def new
        @plan=Plan.new
    end
    
    def update
         @plan = Plan.find params[:id]
        if @plan.update(set_params)
          flash[:success] = '作成に成功しました'
          redirect_to "/plans"
        else
          flash.now[:danger] = '作成に失敗しました'
          render :new
        end
    end
    
    def create
        @plan = set_params
        if Plan.create(@plan)
          flash[:success] = '作成に成功しました'
          redirect_to "/plans"
        else
          flash.now[:danger] = '作成に失敗しました'
          render :new
        end
    end
    
    def edit
        @plan = Plan.find params[:id]
    end
    
    def destroy
        @plan = Plan.find params[:id]
        if @plan.destroy
          flash[:success] = '削除しました'
        else
          flash[:danger] = '削除できませんでした'
        end
        redirect_to plans_path
    end
    
    private
    
    def set_params
        params[:plan].permit(
            :name,
            :max_keywords,
            :business_limit,
            :init_price,
            :month_price,
            :credit_discount_init_price,
            :credit_discount_month_price,
            :price_half_year,
            :price_one_year,
            :time_crawler_limit,
            :time_crawler_price,
            :base_location_limit,
            :base_location_price,
            :business_restricted,
            :calendar_restricted,
            :chart_restricted,
            :insight_restricted,
            :export_csv_restricted,
            :post_restricted,
            :memo_restricted,
            :auto_post_restricted,
            :reviews_restricted,
            :auto_reply_reviews_restricted,
            :hoshikakutokun_restricted,
            :service_id
            )
    end
end
