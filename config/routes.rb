Rails.application.routes.draw do
  root to: 'pages#home'
  get "/antivol" => "pages#antivol"
end
