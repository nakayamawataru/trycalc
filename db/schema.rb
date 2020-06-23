# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20200622103302) do

  create_table "plans", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "name",                                         null: false
    t.integer  "month_price",                   default: 0,    null: false
    t.integer  "price_half_year",               default: 0
    t.integer  "price_one_year",                default: 0
    t.integer  "init_price",                    default: 0,    null: false
    t.integer  "credit_discount_month_price",   default: 0
    t.integer  "credit_discount_init_price",    default: 0
    t.boolean  "calendar_restricted",           default: true
    t.boolean  "chart_restricted",              default: true
    t.boolean  "insight_restricted",            default: true
    t.boolean  "export_csv_restricted",         default: true
    t.boolean  "post_restricted",               default: true
    t.boolean  "auto_post_restricted",          default: true
    t.boolean  "memo_restricted",               default: true
    t.boolean  "reviews_restricted",            default: true
    t.boolean  "auto_reply_reviews_restricted", default: true
    t.boolean  "business_restricted",           default: true
    t.boolean  "hoshikakutokun_restricted",     default: true
    t.integer  "provider_type"
    t.integer  "max_keywords"
    t.integer  "max_sms_by_month",              default: 50
    t.integer  "business_limit",                default: 1
    t.integer  "time_crawler_limit",            default: 1
    t.integer  "time_crawler_price",            default: 0
    t.integer  "base_location_limit",           default: 1
    t.integer  "base_location_price",           default: 0
    t.integer  "service_id",                                   null: false
    t.datetime "created_at",                                   null: false
    t.datetime "updated_at",                                   null: false
  end

  create_table "rental_plan_prices", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "keyword_count",             null: false
    t.integer  "price",         default: 0, null: false
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
  end

end
