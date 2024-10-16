class CreateCompanies < ActiveRecord::Migration[7.2]
  def change
    create_table :companies do |t|
      t.string :name
      t.integer :top_up
      t.boolean :email_status

      t.timestamps
    end
  end
end
