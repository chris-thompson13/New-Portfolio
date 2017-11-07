require 'sinatra'
require 'sinatra/reloader'
require 'sendgrid-ruby'
include SendGrid
require 'json'

get '/' do
  erb :index
end

get '/sounds/views/content.erb' do
  erb :content
end

get '/sounds/views/contact.erb' do
  erb :contact
end

post '/' do

require 'sendgrid-ruby'
include SendGrid
require 'json'

from = Email.new(email: 'test@example.com')
to = Email.new(email: 'test@example.com')
subject = 'Sending with SendGrid is Fun'
content = Content.new(type: 'text/plain', value: 'and easy to do anywhere, even with Ruby')
mail = Mail.new(from, subject, to, content)

sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
response = sg.client.mail._('send').post(request_body: mail.to_json)
puts response.status_code
puts response.body
puts response.headers
  erb :index

end
