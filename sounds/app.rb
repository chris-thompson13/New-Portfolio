require 'sinatra'
require 'sinatra/reloader'
require 'sendgrid-ruby'
include SendGrid


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


from = Email.new(email: params['email'])
to = Email.new(email: 'chris@hianswering.com')
subject = 'new message from portfolio'
content = Content.new(type: 'text/plain', value: params['work'])
mail = Mail.new(from, subject, to, content)

sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
response = sg.client.mail._('send').post(request_body: mail.to_json)
puts response.status_code
puts response.body
puts response.headers
  erb :index

end
