require 'rails_helper'

RSpec.describe "HosikakutokunCalcs", type: :request do

  describe "GET /index" do
    it "returns http success" do
      get "/hosikakutokun_calc/index"
      expect(response).to have_http_status(:success)
    end
  end

end
