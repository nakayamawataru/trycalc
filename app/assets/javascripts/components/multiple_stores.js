// rental_plans.jsから移植
$(function() {

    //セレクトボックスが切り替わったら発動
    $('select').change(function() {
      //選択したvalue値を変数に格納
      numberOfBusinesses = Number($(this).val());
      console.log(numberOfBusinesses + "店舗数")
    // let firstMonthPrice = Number(planPrice) + 50000;
    // document.getElementById('plan-value').childNodes[0].innerHTML =  Number(planPrice).toLocaleString();
    // document.getElementById('first-month-price').childNodes[0].innerHTML =  Number(firstMonthPrice).toLocaleString();
    // document.getElementById('plan-value2').childNodes[0].innerHTML =  Number(planPrice).toLocaleString();

      // switch文で機能別の単価を変更
        switch (numberOfBusinesses) {
          case 20:
            console.log("店舗数は20です");
            PriceForBulkManagement = 24000;
            meo= 26000;
            PriceForMeoAnalysis= 32000;
            PriceForSnsPackage= 15000;
            PriceForAdvancedRankingInformation= 30000;
            PriceForReviewPackage= 30000;
            support= 50000;
            initialRegistration= 100000;
            break;
          case 30:
            console.log("店舗数は30です");
            PriceForBulkManagement= 36000;
            meo= 39000;
            PriceForMeoAnalysis= 48000;
            PriceForSnsPackage= 17500;
            PriceForAdvancedRankingInformation= 43000;
            PriceForReviewPackage= 35000;
            support= 50000;
            initialRegistration= 100000;
            break;
          case 40:
            console.log("店舗数は40です");
            PriceForBulkManagement= 40000;
            meo= 44000;
            PriceForMeoAnalysis= 60000;
            PriceForSnsPackage= 20000;
            PriceForAdvancedRankingInformation= 48000;
            PriceForReviewPackage= 40000;
            support= 50000;
            initialRegistration= 100000;
            break;
          case 50:
            console.log("店舗数は50です");
            PriceForBulkManagement= 40000;
            meo= 45000;
            PriceForMeoAnalysis= 70000;
            PriceForSnsPackage= 22500;
            PriceForAdvancedRankingInformation= 49000;
            PriceForReviewPackage= 45000;
            support= 50000;
            initialRegistration= 100000;
            break;
          case 100:
            console.log("店舗数は100です");
            PriceForBulkManagement= 60000;
            meo= 70000;
            PriceForMeoAnalysis= 130000;
            PriceForSnsPackage= 25000;
            PriceForAdvancedRankingInformation= 65000;
            PriceForReviewPackage= 65000;
            support= 50000;
            initialRegistration= 100000;
            break;
          case 150:
            console.log("店舗数は150です");
            PriceForBulkManagement= 82500;
            meo= 97500;
            PriceForMeoAnalysis= 187500;
            PriceForSnsPackage= 27500;
            PriceForAdvancedRankingInformation= 120000;
            PriceForReviewPackage= 90000;
            support= 50000;
            initialRegistration= 100000;
            break;
          case 200:
            console.log("店舗数は200です");
            PriceForBulkManagement= 100000;
            meo= 120000;
            PriceForMeoAnalysis= 240000;
            PriceForSnsPackage= 30000;
            PriceForAdvancedRankingInformation= 135000;
            PriceForReviewPackage= 130000;
            support= 50000;
            initialRegistration= 100000;
            break;
          case 300:
            console.log("店舗数は300です");
            PriceForBulkManagement= 135000;
            meo= 165000;
            PriceForMeoAnalysis= 345000;
            PriceForSnsPackage= 32500;
            PriceForAdvancedRankingInformation= 180000;
            PriceForReviewPackage= 180000;
            support= 50000;
            initialRegistration= 100000;
            break;
          case 400:
            console.log("店舗数は400です");
            PriceForBulkManagement= 160000;
            meo= 200000;
            PriceForMeoAnalysis= 440000;
            PriceForSnsPackage= 35000;
            PriceForAdvancedRankingInformation= 220000;
            PriceForReviewPackage= 210000;
            support= 50000;
            initialRegistration= 100000;
            break;
          case 500:
            console.log("店舗数は500です");
            PriceForBulkManagement= 175000;
            meo= 225000;
            PriceForMeoAnalysis= 525000;
            PriceForSnsPackage= 37500;
            PriceForAdvancedRankingInformation= 250000;
            PriceForReviewPackage= 300000;
            support= 50000;
            initialRegistration= 100000;
            break;
          case 1000:
            console.log("店舗数は1000です");
            PriceForBulkManagement= 300000;
            meo= 400000;
            PriceForMeoAnalysis= 1000000;
            PriceForSnsPackage= 40000;
            PriceForAdvancedRankingInformation= 500000;
            PriceForReviewPackage= 450000;
            support= 50000;
            initialRegistration= 100000;
            break;
        };
  
          document.getElementById('bulk_management_price').innerText =  Number(PriceForBulkManagement).toLocaleString();
          document.getElementById('meo_price').innerText =  Number(meo).toLocaleString();
          document.getElementById('meo_analysis_price').innerText =  Number(PriceForMeoAnalysis).toLocaleString();
          document.getElementById('sns_package_price').innerText =  Number(PriceForSnsPackage).toLocaleString();
          document.getElementById('advanced_ranking_information_price').innerText =  Number(PriceForAdvancedRankingInformation).toLocaleString();
          document.getElementById('review_package_price').innerText =  Number(PriceForReviewPackage).toLocaleString();
          document.getElementById('support_price').innerText =  Number(support).toLocaleString();
          document.getElementById('initial_registration_price').innerText =  Number(initialRegistration).toLocaleString();
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
          if (feature.includes('<li> - 一元管理機能</li>')) {
              optionPrice += PriceForBulkManagement
              console.log("一元管理機能はありますよ");
          } else {
              console.log("一元管理機能はありませんよ");
          }
          if (feature.includes('<li> - MEO機能</li>')) {
              optionPrice += PriceForMeo
              console.log("MEO機能はありますよ");
          } else {
              console.log("MEO機能はありませんよ");
  
          }if (feature.includes('<li> - MEO分析機能</li>')) {
              optionPrice += PriceForMeoAnalysis
              console.log("MEO分析機能はありますよ");
          } else {
              console.log("MEO分析機能はありませんよ");
          }
  
          if (feature.includes('<li> - SNS連携パック</li>')) {
              optionPrice += PriceForSnsPackage
              console.log("SNS連携パックはありますよ");
          } else {
              console.log("SNS連携パックはありませんよ");
          }
          
          if (feature.includes('<li> - 順位計測拡張</li>')) {
              optionPrice += PriceForAdvancedRankingInformation
              console.log("順位計測拡張はありますよ");
          } else {
              console.log("順位計測拡張はありませんよ");
          }
  
          if (feature.includes('<li> - クチコミ促進パック</li>')) {
              optionPrice += PriceForReviewPackage
              console.log("クチコミ促進パックはありますよ");
          } else {
              console.log("クチコミ促進パックはありませんよ");
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
/*global $*/
/*global gon*/
/*global Chart*/
$(document).on('turbolinks:load', function() {
    var gonData = typeof gon;
    if (gonData != 'undefined'){
        var costData = {
            labels: ["現在のコスト", "導入後のコスト"],
            datasets: [{
                label: 'コスト',
                backgroundColor: "#7BD0DB",
                borderColor: "#7BD0DB",
                borderWidth: 1,
                data: gon.cost
            }]
        };
        
        var costConfig = {
            type: 'bar',
            data: costData,
            options: {
                responsive: false,
                legend: {
                    display: false,
                },
                title: {
                    display: false
                },
                tooltips: {
                    callbacks: {
                        label: function(tooltipItem, data){
                            return tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') +' 円';
                        },
                        mode: 'index',
                        intersect: false
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            min: 0,
                            callback: function(value) {return '¥' + value.toLocaleString();}
                        }
                    }]
                },
                animation: {
                    animateRotate: true
                }
            }
        };
        
        var timeCostData = {
            labels: ["現在の所要時間", "導入後の所要時間"],
            datasets: [{
                label: '時間',
                backgroundColor: "#7BD0DB",
                borderColor: "#7BD0DB",
                borderWidth: 1,
                data: gon.time_cost
            }]
        };
        
        var timeCostConfig = {
            type: 'bar',
            data: timeCostData,
            options: {
                responsive: false,
                legend: {
                    display: false,
                },
                title: {
                    display: false
                },
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            min: 0,
                            callback: function(value) {return value + "時間"}
                        }
                    }]
                },
                animation: {
                    animateRotate: true
                }
            }
        };
        
        window.onload = function () {
            var ctx = document.getElementById("cost-chart").getContext("2d");
            window.bar = new Chart(ctx, costConfig);
            var ctx = document.getElementById("time-cost-chart").getContext("2d");
            window.bar = new Chart(ctx, timeCostConfig);
        };
    }
});