class MeoCalcController < ApplicationController
    require 'yaml'
    
    def index
        data = YAML.load_file('config/data/plans.yml')
        @plans = data["meo"]
        @bronze = @plans["bronze"]
        @silver = @plans["silver"]
        @gold = @plans["gold"]
        
        # @plans = Plan.where(service_id: 1)
        
        
    end
end
