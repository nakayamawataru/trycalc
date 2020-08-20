/*global $*/
$(document).on('turbolinks:load', function() {
    var businessCountByKey = {5000: 40, 10000: 85, 15000: 125, 20000: 165, 25000: 200, 30000: 240, 35000: 275, 40000: 325, 45000: 360, 50000: 400,55000: 450,60000: 480,65000: 525,70000: 560,75000: 600,80000: 650,90000: 750,100000: 800,150000: 1125,200000: 1500};
    $('.price.rental').change(function () {
        var restrectedCheck = $('#restricted_switch')[0]
         if (restrectedCheck.checked) {
            var planPrice = document.getElementById('restricted_plan').value;
         }else{
            var planPrice = document.getElementById('plans').value;
         }
        var additionalPrice = calcAdditionalPrice();
        var totalPrice = parseInt(planPrice) + parseInt(additionalPrice);
        var totalInitPrice = totalPrice + 50000;
        
        var keywordCount = $('#plans option:selected')[0].text
        var keywordCount = parseInt(keywordCount)
        var businessCount = businessCountByKey[keywordCount];
        
        document.getElementById('plan-value').innerText =  Number(planPrice).toLocaleString();
        document.getElementById('additional-value').innerText = additionalPrice.toLocaleString();
        document.getElementById('total-value').innerText =  Number(totalPrice).toLocaleString();
        document.getElementById('total-init-value').innerText =  Number(totalInitPrice).toLocaleString();
        document.getElementById('business-count-key').innerText =  Number(businessCount).toLocaleString();
    });
    
    $('.addition .rental').change(function (){
        var additionalValue = calcAdditionalPrice();
        $('#additional-value')[0].innerText = additionalValue;
    });
    
     $('#restricted_switch').change(function () {
         var restrectedCheck = $('#restricted_switch')[0]
         if (restrectedCheck.checked) {
             $('.restricted_container').removeClass('hide_container');
             $('.non_restricted_container').addClass('hide_container');
             $('#plans')[0].value = "";
         }else{
             $('.restricted_container').addClass('hide_container');
             $('.non_restricted_container').removeClass('hide_container');
             $('#restricted_plan')[0].value = "";
         }
         
     });
    
});

// 追加料金計算　テーブルに持たせるべきだった・・・
function calcAdditionalPrice(){
    var restrectedCheck = $('#restricted_switch')[0];
    
    if(restrectedCheck.checked){
        var planPrice = document.getElementById('restricted_plan').value;
        var firstPrice = 75000;
        var secondPrice = 149999;
    }else{
        var planPrice = document.getElementById('plans').value;
        var firstPrice = 140000;
        var secondPrice = 230000;
    }
    var post = document.getElementById('post');
    var auto_reply_reviews = document.getElementById('auto_reply_reviews');
    var report = document.getElementById('report');
    var bulkEdit = document.getElementById('bulk_edit');
    var license = document.getElementById('license');

    if (post.checked){
        if(planPrice < firstPrice){
            var postPrice = 25000;
        }else if(firstPrice <= planPrice && planPrice <= secondPrice){
            var postPrice = 50000;
        }else{
            var postPrice = 75000;
        }
    }else{
        var postPrice = 0;
    }
            
    if (auto_reply_reviews.checked){
        if(planPrice < firstPrice){
            var replyPrice = 50000;
        }else if(firstPrice <= planPrice && planPrice <= secondPrice){
            var replyPrice = 75000;
        }else{
            var replyPrice = 100000;
        }
    }else{
        var replyPrice = 0;
    }    
    
    if (report.checked){
        if(planPrice < firstPrice){
            var reportPrice = 25000;
        }else if(firstPrice <= planPrice && planPrice <= secondPrice){
            var reportPrice = 50000;
        }else{
            var reportPrice = 75000;
        }
    }else{
        var reportPrice = 0;
    }
    
    if (bulkEdit.checked){
        if(planPrice < firstPrice){
            var bulkEditPrice = 50000;
        }else if(firstPrice <= planPrice && planPrice <= secondPrice){
            var bulkEditPrice = 100000;
        }else{
            var bulkEditPrice = 150000;
        }
    }else{
        var bulkEditPrice = 0;
    }
    
    if (license.checked){
        var licensePrice = 5000;
    }else{
        var licensePrice = 0;
    }
    
    var additionalPrice = parseInt(postPrice) + parseInt(replyPrice) + parseInt(reportPrice) + parseInt(licensePrice) + parseInt(bulkEditPrice);
    return additionalPrice;
}