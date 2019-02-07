require 'sinatra/base'
class ThermostatServer < Sinatra::Base
    run! if app_file == $0
end