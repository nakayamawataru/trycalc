class ContractMailer < ApplicationMailer
    def send_contract(email, business_name, plan, pdf_file)
        @email = email
        emails = ['sales@tryhatch.co.jp'] << @email
        @business_name = business_name
        @plan = plan
        
        attachments['見積書.pdf'] = pdf_file
        mail(
        to: emails,
        subject: 'お申し込み通知'
      )
    end
    
    def download_notification(signup, service, plan, number_of_business, keywords, pdf_file)
      @signup = signup
      @service = service
      @plan = plan
      @number_of_business = number_of_business
      @keywords = keywords
        
        attachments['見積書.pdf'] = pdf_file
        mail(
        to: "@signup.email",
        subject: => '【トライハッチ】料金シミュレーションサイトからのお申し込みありがとうございます',
        bcc: 'n.yoshioka@tryhatch.co.jp'
      )
    end
    
    def test_mail
        # emails = ['w.nakayama@tryhatch.co.jp'] << 'nakayama.wataru.GP01@gmail.com'
        emails = ['n.yoshioka@tryhatch.co.jp']
        mail(
        to: emails,
        subject: '料金シミュレーションのテストメール'
      )
    end
end
