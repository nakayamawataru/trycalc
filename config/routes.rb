Rails.application.routes.draw do
  root "meocheki_calc#index"

  get 'admin/index',to: 'admin#index'
  get 'rental_plans',to: 'rental_plans#index'
  
  resources :plans do
  end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
