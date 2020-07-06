/*global $*/
$(document).on('turbolinks:load', function() {
    // クレジット料金表示
    $('#credit_calc').change(function () {
        var creditCheck = $('#credit_calc')[0];
        if (creditCheck.checked){
            $('#select-payment-type').fadeIn();
            $('#one_month').prop('checked', true);
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
        if (planValue == '1500') {
            $('.addition').prop('disabled', false);
             hideForEntryPlan();
        } else if (planValue == '5000') {
             hideForLightPlan();
            $('.addition').prop('disabled', false);
        } else if (planValue == '8800') {
            hideForPremiumPlan();
            $('.addition').prop('disabled', false);
        } else {
            $('.addition').prop('disabled', true);
            document.getElementById('crawl_time').value = 0;
            document.getElementById('crawl_loc').value =0;
            document.getElementById('additional-value').innerText = 0;
            hideForFreePlan();
        }
        $('#plan-value').innerText = planValue;
    });
    
    //金額変更
    $('.price.meocheki').change(function () {
        var planPrice = document.getElementById('plans').value;
        
        if (planPrice == 1500){
            var creditPrice = document.getElementById('credit_price_light').value;
            var halfYearPrice = document.getElementById('half_year_price_light').value;
            var oneYearPrice = document.getElementById('year_price_light').value;
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
    

    })


function hideForFreePlan(){
            $.when(
                $('#light-plan').hide(),
                $('#entry-plan').hide(),
                $('#premium-plan').hide()
            ).done(function () {
                $('#free-plan').fadeIn();
            });
}

function hideForLightPlan(){
            $.when(
                $('#free-plan').hide(),
                $('#entry-plan').hide(),
                $('#premium-plan').hide()
            ).done(function () {
                $('#light-plan').fadeIn();
            })
}

function hideForEntryPlan(){
            $.when(
                $('#free-plan').hide(),
                $('#light-plan').hide(),
                $('#premium-plan').hide()
            ).done(function () {
                $('#entry-plan').fadeIn();
            })
}
function hideForPremiumPlan(){
            $.when(
                $('#free-plan').hide(),
                $('#light-plan').hide(),
                $('#entry-plan').hide()
            ).done(function () {
                $('#premium-plan').fadeIn();
            })
}