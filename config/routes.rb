Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
      resources :users, only:[:create, :show]
      resource :session, only:[:create, :destroy]
      resources :products, only:[:index, :show] do 
          resources :reviews, only:[:index]
      end
  end

  resources :reviews, only:[:create]

  
 
  # static page for React
  root to: 'root#root'
end
