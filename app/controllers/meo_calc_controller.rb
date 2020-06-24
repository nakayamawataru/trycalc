class MeoCalcController < ApplicationController
    
    def index
        @plans = Plan.where(service_id: 3)
    end
end
