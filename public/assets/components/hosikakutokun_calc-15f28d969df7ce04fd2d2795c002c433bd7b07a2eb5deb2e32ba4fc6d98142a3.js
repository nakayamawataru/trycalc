// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
/*global $*/

$(document).on('turbolinks:load', function() {
        
    $('#credit-calc.hoshikakutokun').change(function () {
        var creditCheck = $('#credit-calc')[0];
        if (creditCheck.checked){
            $.when(
                $('#plan-value').fadeOut(),
                $('#total-value').fadeOut()
            ).done(function () {
                $('.credit-value').fadeIn();
            });
        }else{
            $.when(
                $('.credit-value').fadeOut()
            ).done(function () {
               $('#plan-value').fadeIn();
               $('#total-value').fadeIn();
            });
        }
    });
    
    // プラン料金変更・機能一覧変更
    $('#plans.hoshikakutokun').change(function () {
        var planValue = $('#plans')[0].value;
        if (planValue == '10000') {
             hideForHosikakutokun();
        } else if (planValue == '15000') {
             hideForHosikakutokunPlus();
        } else {}
    });
    
    //金額変更
    $('.price.hoshikakutokun').change(function () {
        var planPrice = document.getElementById('plans').value;
        var message_price = document.getElementById('message_count').value / 50 * 1000;
        
        var initCheck = $('#init_price')[0];
        if (initCheck.checked){
            var initPrice = document.getElementById('init_value').value;
        }else{
            var initPrice = 0
        }
        
        if (planPrice == 10000){
            var creditPrice = document.getElementById('credit_price_hoshikakutokun').value;
            var halfYearPrice = document.getElementById('half_year_hoshikakutokun').value;
            var oneYearPrice = document.getElementById('year_hoshikakutokun').value;
        }else if(planPrice == 15000){
            var creditPrice = document.getElementById('credit_price_hoshikakutokun_plus').value;
            var halfYearPrice = document.getElementById('half_year_hoshikakutokun_plus').value;
            var oneYearPrice = document.getElementById('year_hoshikakutokun_plus').value;
        }else{
            var creditPrice = 0;
            var halfYearPrice = 0;
            var oneYearPrice = 0;
        }
        
        var additionalPrice = message_price;
        var totalPrice = parseInt(planPrice) + parseInt(additionalPrice) + parseInt(initPrice);
        var creditTotalPrice = parseInt(creditPrice) + parseInt(additionalPrice) + parseInt(initPrice);
        var halfYearTotalPrice = parseInt(halfYearPrice) + parseInt(additionalPrice) + parseInt(initPrice);
        var yearTotalPrice = parseInt(oneYearPrice) + parseInt(additionalPrice) + parseInt(initPrice);
        
        document.getElementById('plan-value').innerText = Number(planPrice).toLocaleString();
        document.getElementById('credit-value').innerText = Number(creditPrice).toLocaleString();
        document.getElementById('half-year-value').innerText = Number(halfYearPrice).toLocaleString();
        document.getElementById('year-value').innerText = Number(oneYearPrice).toLocaleString();
        document.getElementById('additional-value').innerText = additionalPrice.toLocaleString();
        document.getElementById('init-value').innerText = Number(initPrice).toLocaleString();
        
        document.getElementById('total-value').innerText = totalPrice.toLocaleString();
        document.getElementById('credit-total-value').innerText = creditTotalPrice.toLocaleString();
        document.getElementById('half-year-total-value').innerText = halfYearTotalPrice.toLocaleString();
        document.getElementById('year-total-value').innerText = yearTotalPrice.toLocaleString();
    });
});

function hideForHosikakutokun(){
            $.when(
                $('#hoshikakutokun-plus').hide()
            ).done(function () {
                $('#hoshikakutokun').fadeIn();
            });
}

function hideForHosikakutokunPlus(){
            $.when(
                $('#hoshikakutokun').hide()
            ).done(function () {
                $('#hoshikakutokun-plus').fadeIn();
            })
}
;
