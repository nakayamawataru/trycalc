class MeochekiCalcController < ApplicationController
    require 'yaml'
    
    def index
        data = YAML.load_file('config/data/plans.yml')
        @plans = data["meocheki"]
        @entry_plan = @plans["entry_plan"]
        @premium_plan = @plans["premium_plan"]
        @highend_plan = @plans["highend_plan"]
        
        # @plans = Plan.where(service_id: 1)
        
        
    end
    
    def thanks_page
    end
end
