class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  
  before_action :set_cors_headers
  
  private

  def set_cors_headers
    response.set_header 'Access-Control-Allow-Origin', origin
    response.set_header 'X-Frame-Options', 'ALLOWALL'
  end

  def origin
    request.headers["Origin"] || "*"
  end
end
