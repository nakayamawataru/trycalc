class InquiryMailer < ApplicationMailer
    default from: "simulation@ranktoolap.com"

    def inquiry_email(inquiry)
        @inquiry = inquiry
        mail(:to => inquiry.email, :subject => 'お問い合わせを承りました')
    end
end
