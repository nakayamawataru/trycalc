class ContractMailer < ApplicationMailer
    def send_contract(email, business_name, plan, pdf_file)
        attachments['見積書.pdf'] = pdf_file
        mail(
        to:   email,
        subject: 'お申し込み通知'
      )
    end
    
    def test_mail
        mail(
        to:   'nakayama.wataru.GP01@gmail.com',
        subject: 'お申し込み通知'
      )
    end
end
