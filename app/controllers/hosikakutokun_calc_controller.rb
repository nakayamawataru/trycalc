class HosikakutokunCalcController < ApplicationController
  require 'yaml'
    
    def index
        data = YAML.load_file('config/data/plans.yml')
        @plans = data["hoshikakutokun"]
        @alpha = @plans["alpha"]
        @plus_alpha = @plans["plus_alpha"]

        
  #       # binding.pry
        
    end
  
  
  # def index
  #   #@plans = Plan.where(service_id: 4)
  #   @plans = [
  #     {
  #       id: 1,
  #       name: "星カクトくんα",
  #       month_price: 10000,
  #       price_half_year: 60000,
  #       price_one_year: 120000,
  #       init_price: 0,
  #       credit_discount_month_price: 10000,
  #       credit_discount_init_price: 0,
  #       service_type:4
  #     },
  #     {
  #       id: 2,
  #       name: "星カクトくん+α",
  #       month_price: 15000,
  #       price_half_year: 90000,
  #       price_one_year: 180000,
  #       init_price: 0,
  #       credit_discount_month_price: 15000,
  #       credit_discount_init_price: 0,
  #       service_type:4
  #     }
  #   ]
  # end
end
