// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
/*global $*/
$(document).ready(function () {
    // プラン料金変更・機能一覧変更
    $('#plans.meo').change(function () {
        var planValue = $('#plans')[0].value;
        var totalValue = oneYearPrice()
        if (planValue == '148800') {
             hideForFixedPlan();
        } else if (planValue == '178800') {
             hideForFullPlan();
        } else if (planValue == '238800') {
            hideForMeoPremiumPlan();
        }else{}
        $('#plan-value-meo')[0].innerText = planValue;
        $('#total-value-meo')[0].innnerText = totalValue;
    });
});

function hideForFixedPlan(){
            $.when(
                $('#full-plan').hide(),
                $('#meo-premium-plan').hide()
            ).done(function () {
                $('#fixed-plan').fadeIn();
            });
}

function hideForFullPlan(){
            $.when(
                $('#fixed-plan').hide(),
                $('#meo-premium-plan').hide()
            ).done(function () {
                $('#full-plan').fadeIn();
            })
}

function hideForMeoPremiumPlan(){
            $.when(
                $('#fixed-plan').hide(),
                $('#full-plan').hide()
            ).done(function () {
                $('#meo-premium-plan').fadeIn();
            })
}

function oneYearPrice(){
    var planPrice = $('#plans')[0].value;
    if (planPrice == 148800){
        return 267800
    }else if (planPrice == 178800){
        return 300000
    }else if(planPrice == 238800){
        return 430000
    }
}