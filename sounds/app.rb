require 'sinatra'
require 'sinatra/reloader'

get '/' do
  erb :index
end

get '/sounds/views/content.erb' do
  erb :content
end

get '/sounds/views/contact.erb' do
  erb :contact
end
