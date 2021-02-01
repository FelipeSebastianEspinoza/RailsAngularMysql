Rails.application.routes.draw do
  resources :extinguishers
  devise_for :users, skip: %i[registrations sessions password]
  devise_scope :user do
    post '/signup', to: 'registrations#create'
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'
    get '/user', to: 'sessions#show'
  end

  get 'extinguishers', to: 'extinguishers#show'
  get 'extinguishers/:id', to: 'extinguishers#show'
  post 'extinguishers', to: 'extinguishers#create'
  patch 'extinguishers/:id', to: 'extinguishers#update'
  delete 'extinguishers/:id', to: 'extinguishers#delete'
 
end
