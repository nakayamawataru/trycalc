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
        if (planValue == '7000') {
             disableAddition()
             hideForHosikakutokun();
        } else if (planValue == '9000') {
             hideForHosikakutokunPlus();
             disableAddition()
        } else if (planValue == '12000') {
             hideForHosikakutokunGmb();
            $('.addition.hoshikakutokun').prop('disabled', false);
        } else {}
    });
    
    //金額変更
    $('.price.hoshikakutokun').change(function () {
        var planPrice = document.getElementById('plans').value;
        var timePrice = 0;
        var locPrice = 0;
        
        if (planPrice == 7000){
            var creditPrice = document.getElementById('credit_price_hoshikakutokun').value;
            var halfYearPrice = document.getElementById('half_year_hoshikakutokun').value;
            var oneYearPrice = document.getElementById('year_hoshikakutokun').value;
        }else if(planPrice == 9000){
            var creditPrice = document.getElementById('credit_price_hoshikakutokun_plus').value;
            var halfYearPrice = document.getElementById('half_year_hoshikakutokun_plus').value;
            var oneYearPrice = document.getElementById('year_hoshikakutokun_plus').value;
        }else if(planPrice == 12000){
            var creditPrice = document.getElementById('credit_price_hoshikakutokun_gmb').value;
            var halfYearPrice = document.getElementById('half_year_hoshikakutokun_gmb').value;
            var oneYearPrice = document.getElementById('year_hoshikakutokun_gmb').value;
            var timePrice = document.getElementById('crawl_time').value * 150;
            var locPrice = document.getElementById('crawl_loc').value * 300;
            var additionalPrice = parseInt(timePrice) + parseInt(locPrice);
        }else{
            var creditPrice = 0;
            var halfYearPrice = 0;
            var oneYearPrice = 0;
        }
        
        var additionalPrice = parseInt(timePrice) + parseInt(locPrice);
        var totalPrice = parseInt(planPrice) + parseInt(additionalPrice);
        var creditTotalPrice = parseInt(creditPrice) + parseInt(additionalPrice);
        var halfYearTotalPrice = parseInt(halfYearPrice) + parseInt(additionalPrice);
        var yearTotalPrice = parseInt(oneYearPrice) + parseInt(additionalPrice);
        
        document.getElementById('plan-value').innerText = planPrice;
        document.getElementById('credit-value').innerText = creditPrice;
        document.getElementById('half-year-value').innerText = halfYearPrice;
        document.getElementById('year-value').innerText = oneYearPrice;
        document.getElementById('additional-value').innerText = additionalPrice;
        
        document.getElementById('total-value').innerText = totalPrice;
        document.getElementById('credit-total-value').innerText = creditTotalPrice;
        document.getElementById('half-year-total-value').innerText = halfYearTotalPrice;
        document.getElementById('year-total-value').innerText = yearTotalPrice;
    });
});

function hideForHosikakutokun(){
            $.when(
                $('#hoshikakutokun-plus').hide(),
                $('#hoshikakutokun-gmb').hide()
            ).done(function () {
                $('#hoshikakutokun').fadeIn();
            });
}

function hideForHosikakutokunPlus(){
            $.when(
                $('#hoshikakutokun').hide(),
                $('#hoshikakutokun-gmb').hide()
            ).done(function () {
                $('#hoshikakutokun-plus').fadeIn();
            })
}

function hideForHosikakutokunGmb(){
            $.when(
                $('#hoshikakutokun').hide(),
                $('#hoshikakutokun-plus').hide()
            ).done(function () {
                $('#hoshikakutokun-gmb').fadeIn();
            })
}
function disableAddition(){
            $('.gmb-addition').prop('disabled', true);
            document.getElementById('crawl_time').value = 0;
            document.getElementById('crawl_loc').value =0;
            document.getElementById('additional-value').innerText = 0;
}