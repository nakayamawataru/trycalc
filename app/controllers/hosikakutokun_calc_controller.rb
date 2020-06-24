class HosikakutokunCalcController < ApplicationController
  def index
    @plans = Plan.where(service_id: 4)
  end
end
