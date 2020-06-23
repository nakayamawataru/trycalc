class AdminController < ApplicationController
  def index
      @plans = Plan.all
  end
end
