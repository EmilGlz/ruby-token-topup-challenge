require 'json'

def load_json(file)
  raise "File not found: #{file}" unless File.exist?(file)
  JSON.parse(File.read(file), symbolize_names: true)
rescue JSON::ParserError => e
  puts "Error parsing #{file}: #{e.message}"
  exit
rescue StandardError => e
  puts "Error loading #{file}: #{e.message}"
  exit
end

def process_user(user, company)
  new_token_balance = user[:tokens] + company[:top_up]
  <<~USERINFO
    \t#{user[:last_name]}, #{user[:first_name]}, #{user[:email]}
    \t  Previous Token Balance: #{user[:tokens]}
    \t  New Token Balance: #{new_token_balance}
  USERINFO
end

def process_and_generate_output(users_file, companies_file, output_file)
  users = load_json(users_file)
  companies = load_json(companies_file)

  File.open(output_file, 'w') do |file|
    companies.sort_by { |company| company[:id] }.each do |company|
      file.puts "Company Id: #{company[:id]}"
      file.puts "Company Name: #{company[:name]}"
      file.puts "Users Emailed:"

      active_users = users.select { |user| user[:company_id] == company[:id] && user[:active_status] }
      sorted_users = active_users.sort_by { |user| user[:last_name] }

      total_top_up = 0
      emailed_users = []
      not_emailed_users = []

      sorted_users.each do |user|
        user_info = process_user(user, company)
        total_top_up += company[:top_up]

        if company[:email_status] && user[:email_status]
          emailed_users << user_info
        else
          not_emailed_users << user_info
        end
      end

      file.print emailed_users.empty? ? "" : emailed_users.join("")
      file.puts "Users Not Emailed:"
      file.print not_emailed_users.empty? ? "" : not_emailed_users.join("")
      file.puts "Total amount of top ups for #{company[:name]}: #{total_top_up}\n\n"
    end
  end
end

process_and_generate_output('users.json', 'companies.json', 'output_mine.txt')