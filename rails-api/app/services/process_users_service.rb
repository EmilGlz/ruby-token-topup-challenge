class ProcessUsersService
  def initialize(users)
    @users = users
  end

  def process_and_generate_output
    result = []
    companies = @users.map(&:company).uniq.sort_by(&:id)
  
    companies.each do |company|
      company_data = {
        company_id: company.id,
        company_name: company.name,
        users_emailed: [],
        users_not_emailed: [],
        total_top_up: 0
      }
  
      active_users = @users.select { |user| user.company_id == company.id && user.active_status }
      sorted_users = active_users.sort_by(&:last_name)
  
      sorted_users.each do |user|
        previous_token_balance = user.tokens
        new_token_balance = previous_token_balance + company.top_up
        company_data[:total_top_up] += company.top_up
  
        user_info = {
          last_name: user.last_name,
          first_name: user.first_name,
          email: user.email,
          previous_token_balance: previous_token_balance,
          new_token_balance: new_token_balance
        }

        if(company[:id] == 3)
          puts "User: #{user_info[:first_name]} #{user_info[:last_name]} has been processed"
        end
  
        if company.email_status && user.email_status
          company_data[:users_emailed] << user_info
        else
          company_data[:users_not_emailed] << user_info
        end
      end
  
      result << company_data
    end
  
    result
  end

end
