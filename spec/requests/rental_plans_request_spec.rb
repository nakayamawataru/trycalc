require 'rails_helper'

RSpec.describe "RentalPlans", type: :request do

  describe "GET /index" do
    it "returns http success" do
      get "/rental_plans/index"
      expect(response).to have_http_status(:success)
    end
  end

end
