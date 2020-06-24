class CreatePlans < ActiveRecord::Migration[5.0]
  def change
    create_table :plans do |t|
      t.string :name, null: false
      
      t.integer :month_price, default: 0, null: false
      t.integer :price_half_year, default: 0
      t.integer :price_one_year, default: 0
      t.integer :init_price, default: 0, null: false
      
      t.integer :credit_discount_month_price, default: 0
      t.integer :credit_discount_init_price, default: 0
      
      t.boolean :calendar_restricted, default: true
      t.boolean :chart_restricted, default: true
      t.boolean :insight_restricted, default: true
      t.boolean :export_csv_restricted, default: true
      t.boolean :post_restricted, default: true
      t.boolean :auto_post_restricted, default: true
      t.boolean :memo_restricted, default: true
      t.boolean :reviews_restricted, default: true
      t.boolean :auto_reply_reviews_restricted, default: true
      t.boolean :business_restricted, default: true
      t.boolean :hoshikakutokun_restricted, default: true
      
      t.integer :provider_type, default: nil
      
      t.integer :max_keywords
      t.integer :max_sms_by_month, default: 50
      t.integer :business_limit, default: 1
      
      t.integer :time_crawler_limit, default: 1
      t.integer :time_crawler_price, default: 0
      t.integer :base_location_limit, default: 1
      t.integer :base_location_price, default: 0
      
      t.integer :service_id, null: false

      t.timestamps
    end
  end
end
