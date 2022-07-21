Rails.application.routes.draw do
    require 'sidekiq/web'
    mount Sidekiq::Web => '/sidekiq'
 root to: "homes#index"
  devise_for :users , controllers: {registrations: "registrations" ,sessions: "sessions"}
   
    # authenticate :user do 
    # mount Sidekiq::Web => '/sidekiq'
    # end

   get 'homes/index'

   resources :homes
   resources :colleges
   resources :events
   resources :products
   resources :orders
  


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
