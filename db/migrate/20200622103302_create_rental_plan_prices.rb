class CreateRentalPlanPrices < ActiveRecord::Migration[5.0]
  def change
    create_table :rental_plan_prices do |t|
      t.integer :keyword_count, null: false
      t.integer :price, default: 0, null: false

      t.timestamps
    end
  end
end
