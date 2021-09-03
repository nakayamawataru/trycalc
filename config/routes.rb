Rails.application.routes.draw do

  get 'inquiry/new'

  root "meocheki_calc#index"

  get 'admin/index',to: 'admin#index'
  get 'rental_plans',to: 'rental_plans#index'
  get 'meo' ,to: 'meo_calc#index'
  get 'hosikakutokun',to: 'hosikakutokun_calc#index'
  get 'thanks',to: 'meocheki_calc#thanks_page'
  get 'multiple_stores', to: 'multiple_stores#index'
  
  post 'download_meocheki',to: 'download_pdf#meocheki_quotation'
  post 'download_rental',to: 'download_pdf#rental_quotation'
  post 'download_meo',to: 'download_pdf#meo_quotation'
  post 'download_hoshikakutokun',to: 'download_pdf#hoshikakutokun_quotation'
  
  resources :plans do
  end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
