class SignupMailer < ApplicationMailer
    default from: "simulation@ranktoolap.com"

    def signup_email(signup, service, plan, number_of_business, keywords, feature)
        
        @signup = signup
        @service = service
        @plan = plan
        @number_of_business = number_of_business
        @keywords = keywords
        @feature = feature
        
        mail(
            to: @signup.email ,
            subject: '【トライハッチ】料金シミュレーションサイトからのお申し込みありがとうございます',
            bcc: 'n.yoshioka@tryhatch.co.jp'
        )
    end
end
