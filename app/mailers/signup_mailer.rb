class SignupMailer < ApplicationMailer
    default from: "simulation@ranktoolap.com"

    def signup_email(signup, service, plan)
        
        @signup = signup
        @service = service
        @plan = plan
        mail(:to => signup.email, :subject => 'お申し込みを承りました')
    end
end
