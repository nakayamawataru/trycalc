/*global $*/
$(function() {

  //セレクトボックスが切り替わったら発動
    $('select').change(function() {
    //選択したvalue値を変数に格納
    planPrice = $(this).val();
    let firstMonthPrice = Number(planPrice) + 50000;
    document.getElementById('plan-value').childNodes[0].innerHTML =  Number(planPrice).toLocaleString();
    document.getElementById('first-month-price').childNodes[0].innerHTML =  Number(firstMonthPrice).toLocaleString();
    document.getElementById('plan-value2').childNodes[0].innerHTML =  Number(planPrice).toLocaleString();
    // let PriceForPost = "料金選択されてない状態";
        if(planPrice > 148500 ){
            console.log("planPriceは148500より大きいです。");
            PriceForPost = 55000;
            PriceForReport = 55000;
            PriceForReviewAnalysis = 82500;
            PriceForReviewJudging = 82500;
            PriceForReviewManagement = 82500;
            PriceForBulkEdit = 110000;
            PriceForAnalysis = 220000;
            PriceForLicense = 11000;
            PriceForBulkRegistration = 16500;
        } else {
            console.log("planPriceは148500より小さいです。");
            PriceForPost = 27500;
            PriceForReport = 27500;
            PriceForReviewAnalysis = 55000;
            PriceForReviewJudging = 55000;
            PriceForReviewManagement = 55000;
            PriceForBulkEdit = 55000;
            PriceForAnalysis = 110000;
            PriceForLicense = 11000;
            PriceForBulkRegistration = 16500;
        };

        document.getElementById('post_price').innerText =  Number(PriceForPost).toLocaleString();
        document.getElementById('report_price').innerText =  Number(PriceForReport).toLocaleString();
        document.getElementById('review_analysis_price').innerText =  Number(PriceForReviewAnalysis).toLocaleString();
        document.getElementById('review_judging_price').innerText =  Number(PriceForReviewJudging).toLocaleString();
        document.getElementById('review_management_price').innerText =  Number(PriceForReviewManagement).toLocaleString();
        document.getElementById('bulk_edit_price').innerText =  Number(PriceForBulkEdit).toLocaleString();
        document.getElementById('analysis_price').innerText =  Number(PriceForAnalysis).toLocaleString();
        console.log(PriceForLicense);
        document.getElementById('license_price').innerText =  Number(PriceForLicense).toLocaleString();
        console.log(PriceForBulkRegistration);
        document.getElementById('bulk_registration_price').innerText =  Number(PriceForBulkRegistration).toLocaleString();
    });
});

$(function() {
    // チェックボックスをチェックしたら発動
    $('input[name="check"]').change(function() {
        var optionPrice = 0
    // eachでvalueを配列にする
        feature = [];
        $('input[name="check"]:checked').each(function(){ feature.push('<li> - '+ $(this).val() + '</li>');});

    if (feature) {
        document.getElementById('feature').innerHTML = feature.join('');
       
        console.log(feature)
        if (feature.includes('<li> - 投稿予約</li>')) {
            optionPrice += PriceForPost
            console.log("投稿予約はありますよ");
        } else {
            console.log("投稿予約はありませんよ");
        }
        if (feature.includes('<li> - レポート</li>')) {
            optionPrice += PriceForReport
            console.log("レポートはありますよ");
        } else {
            console.log("レポートはありませんよ");

        }if (feature.includes('<li> - レビュー管理・分析</li>')) {
            optionPrice += PriceForReviewAnalysis
            console.log("レビュー管理・分析はありますよ");
        } else {
            console.log("レビュー管理・分析はありませんよ");
        }

        if (feature.includes('<li> - レビューネガポジ判定</li>')) {
            optionPrice += PriceForReviewJudging
            console.log("レビューネガポジ判定はありますよ");
        } else {
            console.log("レビューネガポジ判定はありませんよ");
        }
        
        if (feature.includes('<li> - クチコミ管理・自動返信</li>')) {
            optionPrice += PriceForReviewManagement
            console.log("クチコミ管理・自動返信はありますよ");
        } else {
            console.log("クチコミ管理・自動返信はありませんよ");
        }

        if (feature.includes('<li> - 一括編集・改ざん防止</li>')) {
            optionPrice += PriceForBulkEdit
            console.log("一括編集・改ざん防止はありますよ");
        } else {
            console.log("一括編集・改ざん防止はありませんよ");
        }

        if (feature.includes('<li> - 内部分析・競合分析</li>')) {
            optionPrice += PriceForAnalysis
            console.log("内部分析・競合分析はありますよ");
        } else {
            console.log("内部分析・競合分析はありませんよ");
        }

        if (feature.includes('<li> - ツール名変更・ライセンス</li>')) {
            optionPrice += PriceForLicense
            console.log("ツール名変更・ライセンスはありますよ");
        } else {
            console.log("ツール名変更・ライセンスはありませんよ");
        }

        if (feature.includes('<li> - 一括店舗登録</li>')) {
            optionPrice += PriceForBulkRegistration
            console.log("一括店舗登録はありますよ");
        } else {
            console.log("一括店舗登録はありませんよ");
        }

        console.log("機能の料金は"+ optionPrice);
    }
    var totalPrice = Number(planPrice) + Number(optionPrice);
    document.getElementById('price-for-options').innerHTML = Number(optionPrice).toLocaleString();
    document.getElementById('total-price').innerHTML = Number(totalPrice).toLocaleString();
      // もしreportがチェック状態だったら
    if (report) {
        // 出力
        var text = $(this).val();
        $(".list").after('<div class="report_price"></div>');
        $(".report_price").append(text);

        console.log(text);
      } else {
        // 投稿予約機能のタイトルとプライスを消す
        $(".report_price").remove();
        // $('.list').text('');
        console.log("その6");
      }
    });
});
$(function() {
    $('select').change(function() {
        var optionPrice = 0
        // eachでvalueを配列にする
            feature = [];
            $('input[name="check"]:checked').each(function(){ feature.push('<li> - '+ $(this).val() + '</li>');});

        if (feature) {
            document.getElementById('feature').innerHTML = feature.join('');
            
            console.log(feature)
            if (feature.includes('<li> - 投稿予約</li>')) {
                optionPrice += PriceForPost
                console.log("投稿予約はありますよ");
            } else {
                console.log("投稿予約はありませんよ");
            }
            if (feature.includes('<li> - レポート</li>')) {
                optionPrice += PriceForReport
                console.log("レポートはありますよ");
            } else {
                console.log("レポートはありませんよ");

            }if (feature.includes('<li> - レビュー管理・分析</li>')) {
                optionPrice += PriceForReviewAnalysis
                console.log("レビュー管理・分析はありますよ");
            } else {
                console.log("レビュー管理・分析はありませんよ");
            }

            if (feature.includes('<li> - レビューネガポジ判定</li>')) {
                optionPrice += PriceForReviewJudging
                console.log("レビューネガポジ判定はありますよ");
            } else {
                console.log("レビューネガポジ判定はありませんよ");
            }
            
            if (feature.includes('<li> - クチコミ管理・自動返信</li>')) {
                optionPrice += PriceForReviewManagement
                console.log("クチコミ管理・自動返信はありますよ");
            } else {
                console.log("クチコミ管理・自動返信はありませんよ");
            }

            if (feature.includes('<li> - 一括編集・改ざん防止</li>')) {
                optionPrice += PriceForBulkEdit
                console.log("一括編集・改ざん防止はありますよ");
            } else {
                console.log("一括編集・改ざん防止はありませんよ");
            }

            if (feature.includes('<li> - 内部分析・競合分析</li>')) {
                optionPrice += PriceForAnalysis
                console.log("内部分析・競合分析はありますよ");
            } else {
                console.log("内部分析・競合分析はありませんよ");
            }

            if (feature.includes('<li> - ツール名変更・ライセンス</li>')) {
                optionPrice += PriceForLicense
                console.log("ツール名変更・ライセンスはありますよ");
            } else {
                console.log("ツール名変更・ライセンスはありませんよ");
            }
    
            if (feature.includes('<li> - 一括店舗登録</li>')) {
                optionPrice += PriceForBulkRegistration
                console.log("一括店舗登録はありますよ");
            } else {
                console.log("一括店舗登録はありませんよ");
            }
            console.log("機能の料金は"+ optionPrice);
        }
        var totalPrice = Number(planPrice) + Number(optionPrice);
        document.getElementById('price-for-options').innerHTML = Number(optionPrice).toLocaleString();
        document.getElementById('total-price').innerHTML = Number(totalPrice).toLocaleString();
        });
});
// ========================================================







$(document).on('turbolinks:load', function() {
    var businessCountByKey = {5000: 40, 10000: 85, 15000: 125, 20000: 165, 25000: 200, 30000: 240, 35000: 275, 40000: 325, 45000: 360, 50000: 400,55000: 450,60000: 480,65000: 525,70000: 560,75000: 600,80000: 650,90000: 750,100000: 800,150000: 1125,200000: 1500};
    $('.price.rental').change(function () {
        // var restrectedCheck = $('#restricted_switch')[0]
        //  if (restrectedCheck.checked) {
        //     var planPrice = document.getElementById('restricted_plan').value;
        //  }else{
        //     var planPrice = document.getElementById('plans').value;
        //  }
        // var additionalPrice = calcAdditionalPrice();
        // var totalPrice = parseInt(planPrice) + parseInt(additionalPrice);
        // var totalInitPrice = totalPrice + 50000;
        
        // var keywordCount = $('#plans option:selected')[0].text
        // var keywordCount = parseInt(keywordCount)
        // var businessCount = businessCountByKey[keywordCount];
        
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