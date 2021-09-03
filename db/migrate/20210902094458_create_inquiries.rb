class CreateInquiries < ActiveRecord::Migration[5.0]
  def change
    create_table :inquiries do |t|
      t.string :last_name_kanji
      t.string :first_name_kanji
      t.string :last_name_kana
      t.string :first_name_kana
      t.string :company_name
      t.string :email
      t.integer :phone_number
      t.integer :numbers_of_store
      t.integer :type_of_business
      t.integer :deseired_contact_method

      t.timestamps
    end
  end
end
