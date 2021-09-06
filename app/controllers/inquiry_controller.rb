class InquiryController < ApplicationController
  def new
    @inquiry = Inquiry.new
  end

  def create
    @inquiry = Inquiry.new(inquiry_params)
    if @inquiry.save
      InquiryMailer.inquiry_mail(@inquiry).deliver
      # サンキューページを新規作成or改造して、そちらに飛ばす
      redirect_to thanx_page_path
    else
      # 画面遷移せずにJSでエラーの表示をするようにする
      render 
    end
    
  end
  

end
