class Api::UsersController < ApplicationController
  def index
    users = User.order(:last_name)
    render json: users
  end

  def process_users
    users = User.active_with_companies.order(last_name: :asc)
    result = ProcessUsersService.new(users).process_and_generate_output
    render json: result
  end
end
