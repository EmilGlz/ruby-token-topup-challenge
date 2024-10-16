class CreateUsers < ActiveRecord::Migration[7.2]
  def change
    create_table :users do |t|
      t.integer :company_id
      t.string :last_name
      t.string :first_name
      t.string :email
      t.integer :tokens
      t.boolean :active_status
      t.boolean :email_status

      t.timestamps
    end
  end
end
