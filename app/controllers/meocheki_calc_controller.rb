class MeochekiCalcController < ApplicationController
    require 'yaml'
    def index
        # data = YAML.load_file('config/plan.yml')
        # @entry_plan = data["entry_plan"]
        # @premium_plan = data["premium_plan"]
        @plans = Plan.where(service_id: 1)
    end
    
    def thanks_page
    end
end
