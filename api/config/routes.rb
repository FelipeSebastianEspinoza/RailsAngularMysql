Rails.application.routes.draw do
  devise_for :users, skip: %i[registrations sessions password]
  devise_scope :user do
    post '/signup', to: 'registrations#create'
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'
  end
end
