        #     name: @
        #     month_price
        #     price_half_year
        #     price_one_year
        #     init_price
        #     credit_discount_month_price
        #     credit_discount_init_price
        #     calendar_restricted
        #     chart_restricted
        #     insight_restricted
        #     export_csv_restricted
        #     post_restricted
        #     auto_post_restricted
        #     memo_restricted
        #     reviews_restricted
        #     auto_reply_reviews_restricted
        #     business_restricted
        #     hoshikakutokun_restricted
        #     provider_type　1:google, 2=yahoo, 3=両方
        #     max_keywords
        #     max_sms_by_month
        #     business_limit
        #     time_crawler_limit
        #     time_crawler_price
        #     base_location_limit
        #     base_location_price
        #     service_type 1:MEOチェキ, 2：レンタルプラン, 3:MEO対策, 4：星カクトくん

class Plan < ApplicationRecord
        
        enum service_id: [:no_plan, :meocheki, :rental, :meo, :hosikakutokun]
end
