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
    
    def download_notification(email, business_name, plan, pdf_file)
        @email = email
        @business_name = business_name
        @plan = plan
        
        attachments['見積書.pdf'] = pdf_file
        mail(
        to: "sales@tryhatch.co.jp",
        subject: '見積書をダウンロードされたお客様がいらっしゃいます'
      )
    end
    
    def test_mail
        emails = ['w.nakayama@tryhatch.co.jp'] << 'nakayama.wataru.GP01@gmail.com'
        mail(
        to: emails,
        subject: 'お申し込み通知'
      )
    end
end
