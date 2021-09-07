class InquiryController < ApplicationController
  def new
    @inquiry = Inquiry.new
    render :action => 'new'
  end

  def confirm
    # 入力値のチェック
    @inquiry = Inquiry.new(params[:inquiry].permit(:company_name, :department, 
      :name, :email, :email, :phone_number, :type_of_business, :numbers_of_store,
      :meo_cheki, :meo_support, :hoshikakutokun, :content))
    if @inquiry.valid?
      # OK。確認画面を表示
      render :action => 'confirm'
    else
      # NG。入力画面を再表示
      render :action => 'new'
    end
  end

  def thanks
    # メール送信
    @inquiry = Inquiry.new(params[:inquiry].permit(:company_name, :department, 
      :name, :email, :email, :phone_number, :type_of_business, :numbers_of_store,
      :meo_cheki, :meo_support, :hoshikakutokun, :content))    
    InquiryMailer.inquiry_email(@inquiry).deliver

    # 完了画面を表示
    render :action => 'thanks'
  end


end
