require 'sinatra/base'
require 'json'
class Thermometer < Sinatra::Base

	enable :sessions

  get '/' do
    erb :index;
  end

  get '/temperature' do
  	
  end

  post '/temperature' do
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
