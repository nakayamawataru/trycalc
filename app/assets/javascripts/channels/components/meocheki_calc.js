/*global $*/
$(document).ready(function () {
    // プラン料金変更・機能一覧変更
    $('#plans').change(function () {
        var planValue = $('#plans')[0].value;
        if (planValue == '1500') {
            $('.addition').prop('disabled', false);
             hideForEntryPlan();
        } else if (planValue == '5000') {
             hideForEntryPlan();
            $('.addition').prop('disabled', false);
        } else if (planValue == '8800') {
            hideForEntrPremiumPlan();
            $('.addition').prop('disabled', false);
        } else {
            $('.addition').prop('disabled', true);
            document.getElementById('crawl-time').value = 0;
            document.getElementById('crawl-loc').value =0;
            document.getElementById('additional-value').innerText = 0;
            hideForFreePlan();
        }
        $('#plan-value')[0].innerText = planValue;
    });
    
    //金額変更
    $('.price').change(function () {
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

function hideForFreePlan(){
            $.when(
                $('#right-plan').hide(),
                $('#entry-plan').hide(),
                $('#premium-plan').hide()
            ).done(function () {
                $('#free-plan').fadeIn();
            });
}

function hideForRightPlan(){
            $.when(
                $('#free-plan').hide(),
                $('#entry-plan').hide(),
                $('#premium-plan').hide()
            ).done(function () {
                $('#right-plan').fadeIn();
            })
}

function hideForEntryPlan(){
            $.when(
                $('#free-plan').hide(),
                $('#right-plan').hide(),
                $('#premium-plan').hide()
            ).done(function () {
                $('#entry-plan').fadeIn();
            })
}
function hideForEntrPremiumPlan(){
            $.when(
                $('#free-plan').hide(),
                $('#right-plan').hide(),
                $('#entry-plan').hide()
            ).done(function () {
                $('#premium-plan').fadeIn();
            })
}