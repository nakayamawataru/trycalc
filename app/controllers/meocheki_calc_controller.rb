class MeochekiCalcController < ApplicationController
    def index
        @plans = Plan.where(service_id: 1)
    end
end
