class SignupMailer < ApplicationMailer
    default from: "simulation@ranktoolap.com"

    def signup_email(signup, service, plan)
        
        @signup = signup
        @service = service
        @plan = plan
        mail(:to => 'n.yoshioka@tryhatch.co.jp', :subject => '<重要>料金シミュレーションサイトからのお申し込みがありました')
        # mail(:to => signup.email, :subject => 'お申し込みを承りました')
    end
end
