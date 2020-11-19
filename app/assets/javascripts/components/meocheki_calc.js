/*global $*/
$(document).on('turbolinks:load', function() {
    // クレジット料金表示
    $('#credit_calc').change(function () {
        var creditCheck = $('#credit_calc')[0];
        if (creditCheck.checked){
            $('#select-payment-type').fadeIn();
            $('#one_month').prop('checked', true);
            $('#half_year').prop('checked', false);
            $('#one_year').prop('checked', false);
            $('.credit-value').fadeIn();
        }else{
            $('#select-payment-type').fadeOut();
            $('#one_month').prop('checked', false);
            $('.credit-value').fadeOut()
        }
    });
    // プラン料金変更・機能一覧変更
    $('#plans.meocheki').change(function () {
        var planValue = $('#plans')[0].value;
        if (planValue == '5000') {
            hideForEntryPlan();
            $('.addition').prop('disabled', false);
        } else if (planValue == '8800') {
            hideForPremiumPlan();
            $('.addition').prop('disabled', false);
        } else if (planValue == '16000') {
            hideForHighendPlan();
            $('.addition').prop('disabled', false);
        } else {
            $('.addition').prop('disabled', true);
            $('.function').fadeOut()
            document.getElementById('crawl_time').value = 0;
            document.getElementById('crawl_loc').value =0;
            document.getElementById('additional-value').innerText = 0;
        }
        $('#plan-value').innerText = planValue;
    });
    
    //金額変更
    $('.price.meocheki').change(function () {
        var planPrice = document.getElementById('plans').value;
        
        if (planPrice == 16000){
            var creditPrice = document.getElementById('credit_price_highend').value;
            var halfYearPrice = document.getElementById('half_year_price_highend').value;
            var oneYearPrice = document.getElementById('year_price_highend').value;
        }else if(planPrice == 5000){
            var creditPrice = document.getElementById('credit_price_entry').value;
            var halfYearPrice = document.getElementById('half_year_price_entry').value;
            var oneYearPrice = document.getElementById('year_price_entry').value;
        }else if(planPrice == 8800){
            var creditPrice = document.getElementById('credit_price_premium').value;
            var halfYearPrice = document.getElementById('half_year_price_premium').value;
            var oneYearPrice = document.getElementById('year_price_premium').value;
        }else{
            var creditPrice = 0;
            var halfYearPrice = 0;
            var oneYearPrice = 0;
        }
        
        var timePrice = document.getElementById('crawl_time').value * 150;
        var locPrice = document.getElementById('crawl_loc').value * 300;
        var additionalPrice = parseInt(timePrice) + parseInt(locPrice);
        
        var totalPrice = parseInt(planPrice) + parseInt(additionalPrice);
        var creditTotalPrice = parseInt(creditPrice) + parseInt(additionalPrice);
        var halfYearTotalPrice = parseInt(halfYearPrice) + parseInt(additionalPrice) * 6;
        var yearTotalPrice = parseInt(oneYearPrice) + parseInt(additionalPrice) * 12;
        
        document.getElementById('plan-value').innerText = Number(planPrice).toLocaleString();
        document.getElementById('credit-value').innerText = Number(creditPrice).toLocaleString();
        document.getElementById('half-year-value').innerText = Number(halfYearPrice).toLocaleString();
        document.getElementById('year-value').innerText = Number(oneYearPrice).toLocaleString();
        document.getElementById('additional-value').innerText = additionalPrice.toLocaleString();
        
        document.getElementById('total-value').innerText = totalPrice.toLocaleString();
        document.getElementById('credit-total-value').innerText = creditTotalPrice.toLocaleString();
        document.getElementById('half-year-total-value').innerText = halfYearTotalPrice.toLocaleString();
        document.getElementById('year-total-value').innerText = yearTotalPrice.toLocaleString();
    });
    
    // 支払い切り替え
    $('#one_month').change(function(){
        $('#half_year').prop('checked', false);
        $('#one_year').prop('checked', false);
    });
    
    $('#half_year').change(function(){
        $('#one_month').prop('checked', false);
        $('#one_year').prop('checked', false);
    });
    
    $('#one_year').change(function(){
        $('#one_month').prop('checked', false);
        $('#half_year').prop('checked', false);
    });
    

});

function hideForEntryPlan(){
            $.when(
                $('#premium-plan').hide(),
                $('#highend-plan').hide()
            ).done(function () {
                $('#entry-plan').fadeIn();
            });
}
function hideForPremiumPlan(){
            $.when(
                $('#entry-plan').hide(),
                $('#highend-plan').hide()
            ).done(function () {
                $('#premium-plan').fadeIn();
            });
}
function hideForHighendPlan(){
            $.when(
                $('#entry-plan').hide(),
                $('#premium-plan').hide()
            ).done(function () {
                $('#highend-plan').fadeIn();
            });
}