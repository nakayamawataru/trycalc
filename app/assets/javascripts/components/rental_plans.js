let planPrice = 0;
let firstMonthPrice = 0;

let priceForPost = 0;
let priceForReport = 0;
let priceForReviewManagement = 0;
let priceForBulkEdit = 0;
let priceForAnalysis = 0;
let priceForLicense = 0;
let priceForBulkRegistration = 0;


$(function () {
	//セレクトボックスが切り替わったら発動
	$('select').change(function () {
		//選択したvalue値を変数に格納
		var keywords = $(this).val();
		console.log('キーワード数は' + keywords + "です")

		switch (keywords) {
			case "5,000":
				console.log("もう一回キーワードは" + keywords + "です");
				planPrice = 60500;
				break;
			case "10,000":
				planPrice = 82500;
				break;
			case "15,000":
				planPrice = 104500;
				break;
			case "20,000":
				planPrice = 115500;
				break;
			case "25,000":
				planPrice = 121000;
				break;
			case "30,000":
				planPrice = 126500;
				break;
			case "35,000":
				planPrice = 132000;
				break;
			case "40,000":
				planPrice = 137500;
				break;
			case "45,000":
				planPrice = 143000;
				break;
			case "50,000":
				planPrice = 148500;
				break;
			case "55,000":
				planPrice = 154000;
				break;
			case "60,000":
				planPrice = 159500;
				break;
			case "65,000":
				planPrice = 165000;
				break;
			case "70,000":
				planPrice = 176000;
				break;
			case "80,000":
				planPrice = 198000;
				break;
			case "90,000":
				planPrice = 209000;
				break;
			case "100,000":
				planPrice = 220000;
				break;
			case "150,000":
				planPrice = 236500;
				break;
			case "200,000":
				planPrice = 253000;
				break;
		};
		console.log("基本料金は" + planPrice + "です");
		firstMonthPrice = Number(planPrice) + 50000;
		document.getElementById('plan-value').innerHTML = Number(planPrice).toLocaleString();
		document.getElementById('first-month-price').innerHTML = Number(firstMonthPrice).toLocaleString();
		document.getElementById('plan-value2').innerHTML = Number(planPrice).toLocaleString();
		document.getElementById('keywords1').value = Number(planPrice).toLocaleString();
		document.getElementById('keywords2').value = Number(planPrice).toLocaleString();
		document.getElementById('plan-value3').value = Number(planPrice).toLocaleString();
		// let PriceForPost = "料金選択されてない状態";
		if (planPrice > 148500) {
			console.log("planPriceは148500より大きいです。");
			priceForPost = 55000;
			priceForReport = 55000;
			priceForReviewManagement = 82500;
			priceForBulkEdit = 110000;
			priceForAnalysis = 220000;
			priceForLicense = 11000;
			priceForBulkRegistration = 16500;
		} else {
			console.log("planPriceは148500より小さいです。");
			priceForPost = 27500;
			priceForReport = 27500;
			priceForReviewManagement = 55000;
			priceForBulkEdit = 55000;
			priceForAnalysis = 110000;
			priceForLicense = 11000;
			priceForBulkRegistration = 16500;
		};

		document.getElementById('post_price').innerText = Number(priceForPost).toLocaleString();
		document.getElementById('report_price').innerText = Number(priceForReport).toLocaleString();
		document.getElementById('review_management_price').innerText = Number(priceForReviewManagement).toLocaleString();
		document.getElementById('bulk_edit_price').innerText = Number(priceForBulkEdit).toLocaleString();
		document.getElementById('analysis_price').innerText = Number(priceForAnalysis).toLocaleString();
		document.getElementById('license_price').innerText = Number(priceForLicense).toLocaleString();
		document.getElementById('bulk_registration_price').innerText = Number(priceForBulkRegistration).toLocaleString();
		document.getElementById('keywords1').value = keywords;
		document.getElementById('keywords2').value = keywords;

	});
});

$(function () {
	// チェックボックスをチェックしたら発動
	$('input[name="check"]').change(function () {
		let feature = [];
		let optionPrice = 0;
		let totalPrice = 0;
		// eachでvalueを配列にする
		$('input[name="check"]:checked').each(function () {
			feature.push('<li> >> ' + $(this).val() + '</li>');
		});

		if (feature) {
			document.getElementById('feature').innerHTML = feature.join('');
			document.getElementById('feature1').value = feature.join('');
			document.getElementById('feature2').value = feature.join('');

			console.log(feature)
			if (feature.includes('<li> >> 投稿</li>')) {
				optionPrice += priceForPost
				document.getElementById('post_price1').value = Number(priceForPost);
			} else {
				document.getElementById('post_price1').value = "";
			}
			if (feature.includes('<li> >> レポート</li>')) {
				optionPrice += priceForReport
				document.getElementById('report_price1').value = Number(priceForReport);
			} else {
				document.getElementById('report_price1').value = "";
			}

			if (feature.includes('<li> >> クチコミ管理・自動返信</li>')) {
				optionPrice += priceForReviewManagement
				document.getElementById('review_management_price1').value = Number(priceForReviewManagement);
			} else {
				document.getElementById('review_management_price1').value = "";

			}

			if (feature.includes('<li> >> 一括編集・改ざん防止</li>')) {
				optionPrice += priceForBulkEdit
				document.getElementById('bulk_edit_price1').value = Number(priceForBulkEdit);
			} else {
				document.getElementById('bulk_edit_price1').value = "";
			}

			if (feature.includes('<li> >> 内部分析・競合分析</li>')) {
				optionPrice += priceForAnalysis
				document.getElementById('analysis_price1').value = Number(priceForAnalysis);
			} else {
				document.getElementById('analysis_price1').value = "";
			}

			if (feature.includes('<li> >> ツール名変更・ライセンス</li>')) {
				optionPrice += priceForLicense
				document.getElementById('license_price1').value = Number(priceForLicense);
			} else {
				document.getElementById('license_price1').value = "";
			}

			if (feature.includes('<li> >> 一括店舗登録</li>')) {
				optionPrice += priceForBulkRegistration
				document.getElementById('bulk_registration_price1').value = Number(priceForBulkRegistration);
			} else {
				document.getElementById('bulk_registration_price1').value = "";
			}
		}
		totalPrice = Number(planPrice) + Number(optionPrice);
		document.getElementById('price-for-options1').innerHTML = Number(optionPrice).toLocaleString();
		document.getElementById('price-for-options2').innerHTML = Number(optionPrice).toLocaleString();
		document.getElementById('total-price').innerHTML = Number(totalPrice).toLocaleString();
		document.getElementById('total-price1').value = Number(totalPrice).toLocaleString();
	});
});
$(function () {
	$('select').change(function () {
		var optionPrice = 0;
		// eachでvalueを配列にする
		feature = [];
		$('input[name="check"]:checked').each(function () {
			feature.push('<li> >> ' + $(this).val() + '</li>');
		});

		if (feature) {
			document.getElementById('feature').innerHTML = feature.join('');
			document.getElementById('feature1').value = feature.join('');
			document.getElementById('feature2').value = feature.join('');

			console.log(feature)
			if (feature.includes('<li> >> 投稿</li>')) {
				optionPrice += priceForPost
				document.getElementById('post_price1').value = Number(priceForPost);
			} else {
				document.getElementById('post_price1').value = "";
			}
			if (feature.includes('<li> >> レポート</li>')) {
				optionPrice += priceForReport
				document.getElementById('report_price1').value = Number(priceForReport);
			} else {
				document.getElementById('report_price1').value = "";
			}

			if (feature.includes('<li> >> クチコミ管理・自動返信</li>')) {
				optionPrice += priceForReviewManagement
				document.getElementById('review_management_price1').value = Number(priceForReviewManagement);
			} else {
				document.getElementById('review_management_price1').value = "";
			}

			if (feature.includes('<li> >> 一括編集・改ざん防止</li>')) {
				optionPrice += priceForBulkEdit
				document.getElementById('bulk_edit_price1').value = Number(priceForBulkEdit);
			} else {
				document.getElementById('bulk_edit_price1').value = "";
			}

			if (feature.includes('<li> >> 内部分析・競合分析</li>')) {
				optionPrice += priceForAnalysis
				document.getElementById('analysis_price1').value = Number(priceForAnalysis);
			} else {
				document.getElementById('analysis_price1').value = "";
			}

			if (feature.includes('<li> >> ツール名変更・ライセンス</li>')) {
				optionPrice += priceForLicense
				document.getElementById('license_price1').value = Number(priceForLicense);
			} else {
				document.getElementById('license_price1').value = "";
			}

			if (feature.includes('<li> >> 一括店舗登録</li>')) {
				optionPrice += priceForBulkRegistration
				document.getElementById('bulk_registration_price1').value = Number(priceForBulkRegistration);
			} else {
				document.getElementById('bulk_registration_price1').value = "";
			}
			console.log("機能の料金は" + optionPrice);
		}
		var totalPrice = Number(planPrice) + Number(optionPrice);
		document.getElementById('price-for-options1').innerHTML = Number(optionPrice).toLocaleString();
		document.getElementById('price-for-options2').innerHTML = Number(optionPrice).toLocaleString();
		document.getElementById('total-price').innerHTML = Number(totalPrice).toLocaleString();
		document.getElementById('total-price1').value = Number(totalPrice).toLocaleString();
	});
});