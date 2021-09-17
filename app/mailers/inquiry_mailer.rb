class InquiryMailer < ApplicationMailer
    default from: "simulation@ranktoolap.com"

    def inquiry_email(inquiry)
        @inquiry = inquiry
        mail(:to => 'n.yoshioka@tryhatch.co.jp', :subject => '<重要>料金シミュレーションサイトからのお問い合わせがありました')
        # mail(:to => inquiry.email, :subject => 'お問い合わせを承りました')
    end
end