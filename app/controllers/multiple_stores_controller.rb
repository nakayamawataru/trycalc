class MultipleStoresController < ApplicationController
    before_action :calc_costs, only: :index
    require 'yaml'
    
    def index
    end
    
    private
    
    def calc_costs
        return unless params[:businesses_count]
        
        @business_count = params[:businesses_count].to_i
        
        data = YAML.load_file('config/multiple_stores.yml')
        works = data["works"]
        @phot_min = works["photo"]
        @business_hours_min = works["business_hours"]
        @post_min = works["post"]
        @menu_min = works["menu"]
        @all_min = works["all"]
        @time_reduction_rate = data["time_reduction_rate"]
        @meo_price = @business_count.to_i < 500 ? data["meo_price"]["under_500"] : data["meo_price"]["under_1000"]
        @salary = data["salary"]
        
        @time_cost_min = @business_count *  @all_min
        @time_cost_hour = @time_cost_min / 60
        @man_cost = (@time_cost_hour / 160.to_f * @salary).to_i
        @reduction_time_cost_hour =(@time_cost_hour * 0.95).round
        @reductioned_time_cost_hour = @time_cost_hour - @reduction_time_cost_hour
        @reductioned_cost = ((@reductioned_time_cost_hour / 160.to_f ) * @salary).to_i  
        @reduction_cost = @man_cost - @reductioned_cost - @meo_price
        @reduce_cost_rate = (@reduction_cost / @man_cost.to_f * 100).to_i
        
        gon.push({
            cost: [@man_cost, @reductioned_cost],
            time_cost: [@time_cost_hour, @reductioned_time_cost_hour]
        })
    end
end