class SignupsController < ApplicationController
  def new
    @signup = Signup.new
    @service = params[:service]
    @plan = params[:plan]
    @feature = params[:feature]
    @number_of_business = params[:number_of_business]
    @keywords = params[:keywords]

    render :action => 'new'
  end
  
  def confirm
    # 入力値のチェック
    @signup = Signup.new(params[:signup].permit(:company_name, :department,
      :name, :email, :phone_number, :content))
    @service = params[:service]
    @plan = params[:plan]
    @number_of_business = params[:number_of_business]
    @keywords = params[:keywords]
    @feature = params[:feature]

      if @signup.valid?
        # OK。確認画面を表示
        render :action => 'confirm'
      else
        # NG。入力画面を再表示
      render :action => 'new'
    end
  end

  def quotation
    @signup = Signup.new
    @service = params[:service]
    @plan = params[:plan]
    @feature = params[:feature]
    @number_of_business = params[:number_of_business]
    @keywords = params[:keywords]
    @init_price = params[:init_price]
    @price_for_options = params[:price_for_options]
    @first_month_price = params[:first_month_price]
    @monthly_price = params[:monthly_price]

    render :action => 'quotation'
  end

  def confirm2
    # 入力値のチェック
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

      if @signup.valid?
        # OK。確認画面を表示
        render :action => 'confirm2'
      else
        # NG。入力画面を再表示
      render :action => 'quotation'
    end
  end

  def thanks
    # メール送信
    @signup = Signup.new(params[:signup].permit(:company_name, :department,
      :name, :email, :phone_number, :content))   
    @service = params[:service]
    @plan = params[:plan]
    @number_of_business = params[:number_of_business]
    @keywords = params[:keywords]
    @feature = params[:feature]
    
    SignupMailer.signup_email(@signup, @service, @plan, @number_of_business, @keywords, @feature).deliver

    # 完了画面を表示
    render :action => 'thanks'
  end
end
