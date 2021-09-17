var priceForBulkManagement = 0;
var priceForMeo = 0;
var priceForMeoAnalysis = 0;
var priceForSnsPackage = 0;
var priceForAdvancedRankingInformation = 0;
var priceForReviewPackage = 0;
var priceForSupport = 0;
var priceForInitialRegistration = 0;

// rental_plans.jsから移植
$(function () {
	//セレクトボックスが切り替わったら発動
	$('select').change(function () {
		//選択したvalue値を変数に格納
		var numberOfBusinesses = Number($(this).val());
		console.log(numberOfBusinesses + "店舗数")

		// switch文で機能別の単価を変更
		switch (numberOfBusinesses) {
			case 20:
				console.log("店舗数は20です");
				priceForBulkManagement = 24000;
				priceForMeo = 26000;
				priceForMeoAnalysis = 32000;
				priceForSnsPackage = 15000;
				priceForAdvancedRankingInformation = 30000;
				priceForReviewPackage = 30000;
				priceForSupport = 50000;
				priceForInitialRegistration = 100000;
				break;
			case 30:
				console.log("店舗数は30です");
				priceForBulkManagement = 36000;
				priceForMeo = 39000;
				priceForMeoAnalysis = 48000;
				priceForSnsPackage = 17500;
				priceForAdvancedRankingInformation = 43000;
				priceForReviewPackage = 35000;
				priceForSupport = 50000;
				priceForInitialRegistration = 100000;
				break;
			case 40:
				console.log("店舗数は40です");
				priceForBulkManagement = 40000;
				priceForMeo = 44000;
				priceForMeoAnalysis = 60000;
				priceForSnsPackage = 20000;
				priceForAdvancedRankingInformation = 48000;
				priceForReviewPackage = 40000;
				priceForSupport = 50000;
				priceForInitialRegistration = 100000;
				break;
			case 50:
				console.log("店舗数は50です");
				priceForBulkManagement = 40000;
				priceForMeo = 45000;
				priceForMeoAnalysis = 70000;
				priceForSnsPackage = 22500;
				priceForAdvancedRankingInformation = 49000;
				priceForReviewPackage = 45000;
				priceForSupport = 50000;
				priceForInitialRegistration = 100000;
				break;
			case 100:
				console.log("店舗数は100です");
				priceForBulkManagement = 60000;
				priceForMeo = 70000;
				priceForMeoAnalysis = 130000;
				priceForSnsPackage = 25000;
				priceForAdvancedRankingInformation = 65000;
				priceForReviewPackage = 65000;
				priceForSupport = 50000;
				priceForInitialRegistration = 100000;
				break;
			case 150:
				console.log("店舗数は150です");
				priceForBulkManagement = 82500;
				priceForMeo = 97500;
				priceForMeoAnalysis = 187500;
				priceForSnsPackage = 27500;
				priceForAdvancedRankingInformation = 120000;
				priceForReviewPackage = 90000;
				priceForSupport = 50000;
				priceForInitialRegistration = 100000;
				break;
			case 200:
				console.log("店舗数は200です");
				priceForBulkManagement = 100000;
				priceForMeo = 120000;
				priceForMeoAnalysis = 240000;
				priceForSnsPackage = 30000;
				priceForAdvancedRankingInformation = 135000;
				priceForReviewPackage = 130000;
				priceForSupport = 50000;
				priceForInitialRegistration = 100000;
				break;
			case 300:
				console.log("店舗数は300です");
				priceForBulkManagement = 135000;
				priceForMeo = 165000;
				priceForMeoAnalysis = 345000;
				priceForSnsPackage = 32500;
				priceForAdvancedRankingInformation = 180000;
				priceForReviewPackage = 180000;
				priceForSupport = 50000;
				priceForInitialRegistration = 100000;
				break;
			case 400:
				console.log("店舗数は400です");
				priceForBulkManagement = 160000;
				priceForMeo = 200000;
				priceForMeoAnalysis = 440000;
				priceForSnsPackage = 35000;
				priceForAdvancedRankingInformation = 220000;
				priceForReviewPackage = 210000;
				priceForSupport = 50000;
				priceForInitialRegistration = 100000;
				break;
			case 500:
				console.log("店舗数は500です");
				priceForBulkManagement = 175000;
				priceForMeo = 225000;
				priceForMeoAnalysis = 525000;
				priceForSnsPackage = 37500;
				priceForAdvancedRankingInformation = 250000;
				priceForReviewPackage = 300000;
				priceForSupport = 50000;
				priceForInitialRegistration = 100000;
				break;
			case 1000:
				console.log("店舗数は1000です");
				priceForBulkManagement = 300000;
				priceForMeo = 400000;
				priceForMeoAnalysis = 1000000;
				priceForSnsPackage = 40000;
				priceForAdvancedRankingInformation = 500000;
				priceForReviewPackage = 450000;
				priceForSupport = 50000;
				priceForInitialRegistration = 100000;
				break;
		};

		document.getElementById('bulk_management_price').innerText = Number(priceForBulkManagement).toLocaleString();
		document.getElementById('meo_price').innerText = Number(priceForMeo).toLocaleString();
		document.getElementById('meo_analysis_price').innerText = Number(priceForMeoAnalysis).toLocaleString();
		document.getElementById('sns_package_price').innerText = Number(priceForSnsPackage).toLocaleString();
		document.getElementById('advanced_ranking_information_price').innerText = Number(priceForAdvancedRankingInformation).toLocaleString();
		document.getElementById('review_package_price').innerText = Number(priceForReviewPackage).toLocaleString();
		document.getElementById('support_price').innerText = Number(priceForSupport).toLocaleString();
		document.getElementById('initial_registration_price').innerText = Number(priceForInitialRegistration).toLocaleString();
		document.getElementById('number_of_business1').value = Number(numberOfBusinesses).toLocaleString();
		document.getElementById('number_of_business2').value = Number(numberOfBusinesses).toLocaleString();
	});
});

$(function () {
	// チェックボックスをチェックしたら発動
	$('input[name="check"]').change(function () {
		let optionPrice = 0
		// eachでvalueを配列にする
		feature = [];
		$('input[name="check"]:checked').each(function () {
			feature.push('<li> - ' + $(this).val() + '</li>');
		});

		if (feature) {
			document.getElementById('feature').innerHTML = feature.join('');
			document.getElementById('feature1').value = feature.join('');
			document.getElementById('feature2').value = feature.join('');

			if (feature.includes('<li> - 一元管理機能</li>')) {
				optionPrice += priceForBulkManagement
				document.getElementById('bulk_management1').value = Number(priceForBulkManagement);
			} else {
				document.getElementById('bulk_management1').value = "";
			}

			if (feature.includes('<li> - MEO機能</li>')) {
				optionPrice += priceForMeo
				document.getElementById('meo1').value = Number(priceForMeo);
			} else {
				document.getElementById('meo1').value = "";
			}

			if (feature.includes('<li> - MEO分析機能</li>')) {
				optionPrice += priceForMeoAnalysis
				document.getElementById('meo_analysis1').val = Number(priceForMeoAnalysis);
			} else {
				document.getElementById('meo_analysis1').val = "";
			}

			if (feature.includes('<li> - SNS連携パック</li>')) {
				optionPrice += priceForSnsPackage
				document.getElementById('sns_package1').value = Number(priceForSnsPackage);
			} else {
				document.getElementById('sns_package1').value = "";
			}

			if (feature.includes('<li> - 順位計測拡張</li>')) {
				optionPrice += priceForAdvancedRankingInformation
				document.getElementById('advanced_ranking_information1').value = Number(priceForAdvancedRankingInformation);
			} else {
				document.getElementById('advanced_ranking_information1').value = "";
			}

			if (feature.includes('<li> - クチコミ促進パック</li>')) {
				optionPrice += priceForReviewPackage
				document.getElementById('review_package1').value = Number(priceForReviewPackage);
			} else {
				document.getElementById('review_package1').value = "";
			}

			if (feature.includes('<li> - 初回導入・優先サポート</li>')) {
				optionPrice += priceForSupport
				document.getElementById('support1').value = Number(priceForSupport);
			} else {
				document.getElementById('support1').value = "";
			}

			if (feature.includes('<li> - 初回登録代行サポート</li>')) {
				optionPrice += priceForInitialRegistration
				document.getElementById('initial_registration1').value = Number(priceForInitialRegistration);
			} else {
				document.getElementById('initial_registration1').value = "";
			}

			console.log("機能の料金は" + optionPrice);
		}
		var totalPrice = Number(optionPrice);
		var firstMonthPrice = 110000 + Number(optionPrice);
		document.getElementById('price-for-options1').innerText = Number(optionPrice).toLocaleString();
		document.getElementById('price-for-options2').value = Number(optionPrice).toLocaleString();
		document.getElementById('total-price').innerHTML = Number(totalPrice).toLocaleString();
		document.getElementById('total-price1').value = Number(totalPrice).toLocaleString();
		document.getElementById('first-month-price').innerHTML = Number(firstMonthPrice).toLocaleString();
		document.getElementById('first-month-price1').value = Number(firstMonthPrice).toLocaleString();
	});
});
$(function () {
	$('select').change(function () {
		let optionPrice = 0;
		let feature = [];
		// eachでvalueを配列にする
		$('input[name="check"]:checked').each(function () {
			feature.push('<li> - ' + $(this).val() + '</li>');
		});

		if (feature) {
			document.getElementById('feature').innerHTML = feature.join('');
			document.getElementById('feature1').value = feature.join('');
			document.getElementById('feature2').value = feature.join('');

			if (feature.includes('<li> - 一元管理機能</li>')) {
				optionPrice += priceForBulkManagement
				document.getElementById('bulk_management1').value = Number(priceForBulkManagement);
			} else {
				document.getElementById('bulk_management1').value = "";
			}

			if (feature.includes('<li> - MEO機能</li>')) {
				optionPrice += priceForMeo
				document.getElementById('meo1').value = Number(priceForMeo);
			} else {
				document.getElementById('meo1').value = "";
			}

			if (feature.includes('<li> - MEO分析機能</li>')) {
				optionPrice += priceForMeoAnalysis
				document.getElementById('meo_analysis1').value = Number(priceForMeoAnalysis);
			} else {
				document.getElementById('meo_analysis1').value = "";
			}

			if (feature.includes('<li> - SNS連携パック</li>')) {
				optionPrice += priceForSnsPackage
				document.getElementById('sns_package1').value = Number(priceForSnsPackage);
			} else {
				document.getElementById('sns_package1').value = "";
			}

			if (feature.includes('<li> - 順位計測拡張</li>')) {
				optionPrice += priceForAdvancedRankingInformation
				document.getElementById('advanced_ranking_information1').value = Number(priceForAdvancedRankingInformation);
			} else {
				document.getElementById('advanced_ranking_information1').value = "";
			}

			if (feature.includes('<li> - クチコミ促進パック</li>')) {
				optionPrice += priceForReviewPackage
				document.getElementById('review_package1').value = Number(priceForReviewPackage);
			} else {
				document.getElementById('review_package1').value = "";
			}

			if (feature.includes('<li> - 初回導入・優先サポート</li>')) {
				optionPrice += priceForSupport
				document.getElementById('support1').value = Number(priceForSupport);
			} else {
				document.getElementById('support1').value = "";
			}

			if (feature.includes('<li> - 初回登録代行サポート</li>')) {
				optionPrice += priceForInitialRegistration
				document.getElementById('initial_registration1').value = Number(priceForInitialRegistration);
			} else {
				document.getElementById('initial_registration1').value = "";
			}

			console.log("機能の料金は" + optionPrice);
		}
		var totalPrice = Number(optionPrice);
		var firstMonthPrice = 110000 + Number(optionPrice);
		document.getElementById('price-for-options1').innerText = Number(optionPrice).toLocaleString();
		document.getElementById('price-for-options2').value = Number(optionPrice).toLocaleString();
		document.getElementById('total-price').innerHTML = Number(totalPrice).toLocaleString();
		document.getElementById('total-price1').value = Number(totalPrice).toLocaleString();
		document.getElementById('first-month-price').innerHTML = Number(firstMonthPrice).toLocaleString();
		document.getElementById('first-month-price1').value = Number(firstMonthPrice).toLocaleString();
	});
});
// ========================================================
/*global $*/
/*global gon*/
/*global Chart*/
$(document).on('turbolinks:load', function () {
	var gonData = typeof gon;
	if (gonData != 'undefined') {
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
						label: function (tooltipItem, data) {
							return tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' 円';
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
							callback: function (value) {
								return '¥' + value.toLocaleString();
							}
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
							callback: function (value) {
								return value + "時間"
							}
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