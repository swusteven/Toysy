Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
      resources :users, only:[:create, :show] do 
        resources :carts, only:[:index]
      end

      resources :products, only:[:index, :show] do 
        resources :reviews, only:[:index]
      end
      
      resource :session, only:[:create, :destroy]
      resources :reviews, only:[:create]
      resources :carts, only:[:create]
      resources :cart_items, only:[:create, :update, :destroy]

  end


  
 
  # static page for React
  root to: 'root#root'
end
