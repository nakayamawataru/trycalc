class RentalPlansController < ApplicationController
  def index
      @plans = Plan.find_by(service_id: 2)
      @rental_plan_prices = RentalPlanPrice.all
  end
end
