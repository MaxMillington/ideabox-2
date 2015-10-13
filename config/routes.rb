Rails.application.routes.draw do
  root 'ideas#index'

  get "monkey", to: 'ideas#monkey'


  resources :ideas do
    member do
      get "upvote", to: 'ideas#thumbs_up'
      get "downvote", to: 'ideas#thumbs_down'
    end
  end

end
