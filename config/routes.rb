Rails.application.routes.draw do

  namespace :api do
    resources :workers do
      resources :services
    end
  end

end
