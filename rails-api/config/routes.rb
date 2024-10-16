Rails.application.routes.draw do
  namespace :api do
    resources :companies
    resources :users, only: [:index] do
      collection do
        post :process_users
        post :replace
      end
    end
  end
end