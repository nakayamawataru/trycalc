/*global $*/
$(document).on('turbolinks:load', function() {
    var businessCountByKey = {5000: 40, 10000: 85, 15000: 125, 20000: 165, 25000: 200, 30000: 240, 35000: 275, 40000: 325, 45000: 360, 50000: 400,55000: 450,60000: 480,65000: 525,70000: 560,75000: 600,80000: 650,90000: 750,100000: 800,150000: 1125,200000: 1500};
    $('.price.rental').change(function () {
        var planPrice = document.getElementById('plans').value;
        var additionalPrice = calcAdditionalPrice();
        var totalPrice = parseInt(planPrice) + parseInt(additionalPrice);
        var totalInitPrice = totalPrice + 50000;
        
        var keywordCount = $('#plans option:selected')[0].text
        var keywordCount = parseInt(keywordCount)
        var businessCount = businessCountByKey[keywordCount];
        
        document.getElementById('plan-value').innerText = planPrice;
        document.getElementById('additional-value').innerText = additionalPrice;
        document.getElementById('total-value').innerText = totalPrice;
        document.getElementById('total-init-value').innerText = totalInitPrice;
        document.getElementById('business-count-key').innerText = businessCount;
    });
    
    $('.addition .rental').change(function (){
        var additionalValue = calcAdditionalPrice();
        $('#additional-value')[0].innerText = additionalValue;
    })
    
});

// 追加料金計算　テーブルに持たせるべきだった・・・
function calcAdditionalPrice(){
    var planPrice = document.getElementById('plans').value;
    var post = document.getElementById('post');
    var auto_reply_reviews = document.getElementById('auto_reply_reviews');
    var report = document.getElementById('report');
    var license = document.getElementById('license');
    
    if (post.checked){
        if(planPrice < 140000){
            var postPrice = 25000;
        }else if(140000 <= planPrice <= 230000){
            var postPrice = 50000;
        }else{
            var postPrice = 75000;
        }
    }else{
        var postPrice = 0;
    }
            
    if (auto_reply_reviews.checked){
        if(planPrice < 140000){
            var replyPrice = 20000
        }else if(140000 <= planPrice <= 230000){
            var replyPrice = 40000
        }else{
            var replyPrice = 55000
        }
    }else{
        var replyPrice = 0;
    }    
    
    if (report.checked){
        if(planPrice < 140000){
            var reportPrice = 25000
        }else if(140000 <= planPrice <= 230000){
            var reportPrice = 50000
        }else{
            var reportPrice = 75000
        }
    }else{
        var reportPrice = 0;
    }
    
    if (license.checked){
        var licensePrice = 5000;
    }else{
        var licensePrice = 0;
    }
    
    var additionalPrice = parseInt(postPrice) + parseInt(replyPrice) + parseInt(reportPrice) +parseInt(licensePrice);
    return additionalPrice;
}