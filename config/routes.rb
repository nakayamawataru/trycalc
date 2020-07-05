Rails.application.routes.draw do
  get 'hosikakutokun_calc/index'

  root "meocheki_calc#index"

  get 'admin/index',to: 'admin#index'
  get 'rental_plans',to: 'rental_plans#index'
  get 'meo' ,to: 'meo_calc#index'
  get 'hosikakutokun',to: 'hosikakutokun_calc#index'
  
  post 'download_meocheki',to: 'download_pdf#meocheki_quotation'
  post 'download_rental',to: 'download_pdf#rental_quotation'
  
  resources :plans do
  end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
