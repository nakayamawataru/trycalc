class MeochekiCalcController < ApplicationController
    def index
        @plans = Plan.where(service_id: 1)
        # gon.push({
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
        #     provider_type
        #     max_keywords
        #     max_sms_by_month
        #     business_limit
        #     time_crawler_limit
        #     time_crawler_price
        #     base_location_limit
        #     base_location_price
        # })
    end
end
