User.destroy_all
Company.destroy_all

users_file = File.read(Rails.root.join('db', 'users.json'))
companies_file = File.read(Rails.root.join('db', 'companies.json'))

users_data = JSON.parse(users_file)
companies_data = JSON.parse(companies_file)

companies_data.each do |company|
  Company.create!(
    id: company['id'],
    name: company['name'],
    top_up: company['top_up'],
    email_status: company['email_status']
  )
end

puts "Seeded #{Company.count} companies."

# Seed users
users_data.each do |user|
  User.find_or_create_by!(id: user['id']) do |u|
    u.first_name = user['first_name']
    u.last_name = user['last_name']
    u.email = user['email']
    u.company_id = user['company_id']
    u.email_status = user['email_status']
    u.active_status = user['active_status']
    u.tokens = user['tokens']
  end
end

puts "Seeded #{User.count} users."
