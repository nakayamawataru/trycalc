// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
/*global $*/
$(document).ready(function () {
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
        $('#plan-value')[0].innerText = planValue;
    });
    
    //金額変更
    $('.price.hoshikakutokun').change(function () {
        var planPrice = document.getElementById('plans').value;
        var timePrice = document.getElementById('crawl-time').value * 150;
        var locPrice = document.getElementById('crawl-loc').value * 300;
        var additionalPrice = parseInt(timePrice) + parseInt(locPrice);
        var totalPrice = parseInt(planPrice) + parseInt(additionalPrice);
        document.getElementById('plan-value').innerText = planPrice;
        document.getElementById('additional-value').innerText = additionalPrice;
        document.getElementById('total-value').innerText = totalPrice;
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
            $('.addition').prop('disabled', true);
            document.getElementById('crawl-time').value = 0;
            document.getElementById('crawl-loc').value =0;
            document.getElementById('additional-value').innerText = 0;
}