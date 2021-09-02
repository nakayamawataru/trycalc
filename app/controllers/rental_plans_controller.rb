class RentalPlansController < ApplicationController

  require 'yaml'
    
    def index
        plan_data = YAML.load_file('config/data/plans.yml')
        @plans = plan_data["meocheki"]
        @rental = @plans["rental"]

        @keyword_option = YAML.load_file('config/data/rental_plan_price.yml')
        
        # @plans = Plan.where(service_id: 1)
  # @rental_plan_prices = RentalPlanPrice.all
        # binding.pry
        
    end
end
