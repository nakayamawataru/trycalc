# Preview all emails at http://localhost:3000/rails/mailers/inquiry
class InquiryPreview < ActionMailer::Preview
    def inquiry_email
        InquiryMailer.inquiry_email
        
    end
    
end
