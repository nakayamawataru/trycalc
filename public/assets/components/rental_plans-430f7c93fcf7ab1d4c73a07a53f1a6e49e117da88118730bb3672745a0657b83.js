/*global $*/

$(document).ready(function () {
    $('#price').change(function () {
        var planPrice = document.getElementById('plans').value;
        var additionalPrice = calcAdditionalPrice();
        var totalPrice = parseInt(planPrice) + parseInt(additionalPrice);
        
        document.getElementById('plan-value').innerText = planPrice;
        document.getElementById('additional-value').innerText = additionalPrice;
        document.getElementById('total-value').innerText = totalPrice;
    });
    
    $('.addition').change(function (){
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
;
