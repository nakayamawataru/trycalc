Rails.application.routes.draw do

  get 'signups/new'
  get 'signups/quotation'
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

  post 'download_pdf/generate_quotation'

  resources :plans do
  end
  
  resources :inquiries 
  post  'inquiry/confirm' => 'inquiry#confirm'   # 確認画面
  post  'inquiry/thanks'  => 'inquiry#thanks'    # 送信完了画面

  resources :signups
  post  'signups/confirm' => 'signups#confirm'   # 確認画面
  post  'signups/confirm2' => 'signups#confirm2'   # 確認画面
  post  'signups/thanks'  => 'signups#thanks'    # 送信完了画面
  post  'signups/thanks2'  => 'signups#thanks2'    # 送信完了画面


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
