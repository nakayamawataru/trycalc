class CreateInquiries < ActiveRecord::Migration[5.0]
  def change
    create_table :inquiries do |t|
      t.string :last_name
      t.string :first_name
      t.string :company_name
      t.string :department
      t.string :email
      t.integer :phone_number
      t.integer :numbers_of_store
      t.integer :type_of_business
      t.text :content
      t.boolean :meo_cheki
      t.boolean :meo_support
      t.boolean :hoshikakutokun

      t.timestamps
    end
  end
end
 