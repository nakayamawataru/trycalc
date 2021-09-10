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
		planPrice = $(this).val();
		firstMonthPrice = Number(planPrice) + 50000;
		document.getElementById('plan-value').innerHTML = Number(planPrice).toLocaleString();
		document.getElementById('first-month-price').innerHTML = Number(firstMonthPrice).toLocaleString();
		document.getElementById('plan-value2').innerHTML = Number(planPrice).toLocaleString();
		// let PriceForPost = "料金選択されてない状態";
		;
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

			console.log(priceForPost + "投稿機能")
			console.log(feature)
			if (feature.includes('<li> >> 投稿</li>')) {
				optionPrice += priceForPost
				console.log("投稿予約はありますよ");
			} else {
				console.log("投稿予約はありませんよ");
			}
			if (feature.includes('<li> >> レポート</li>')) {
				optionPrice += priceForReport
				console.log("レポートはありますよ");
			} else {
				console.log("レポートはありませんよ");

			}
			if (feature.includes('<li> >> レビュー管理・分析</li>')) {
				optionPrice += priceForReviewAnalysis
				console.log("レビュー管理・分析はありますよ");
			} else {
				console.log("レビュー管理・分析はありませんよ");
			}

			if (feature.includes('<li> >> レビューネガポジ判定</li>')) {
				optionPrice += priceForReviewJudging
				console.log("レビューネガポジ判定はありますよ");
			} else {
				console.log("レビューネガポジ判定はありませんよ");
			}

			if (feature.includes('<li> >> クチコミ管理・自動返信</li>')) {
				optionPrice += priceForReviewManagement
				console.log("クチコミ管理・自動返信はありますよ");
			} else {
				console.log("クチコミ管理・自動返信はありませんよ");
			}

			if (feature.includes('<li> >> 一括編集・改ざん防止</li>')) {
				optionPrice += priceForBulkEdit
				console.log("一括編集・改ざん防止はありますよ");
			} else {
				console.log("一括編集・改ざん防止はありませんよ");
			}

			if (feature.includes('<li> >> 内部分析・競合分析</li>')) {
				optionPrice += priceForAnalysis
				console.log("内部分析・競合分析はありますよ");
			} else {
				console.log("内部分析・競合分析はありませんよ");
			}

			if (feature.includes('<li> >> ツール名変更・ライセンス</li>')) {
				optionPrice += priceForLicense
				console.log("ツール名変更・ライセンスはありますよ");
			} else {
				console.log("ツール名変更・ライセンスはありませんよ");
			}

			if (feature.includes('<li> >> 一括店舗登録</li>')) {
				optionPrice += priceForBulkRegistration
				console.log("一括店舗登録はありますよ");
			} else {
				console.log("一括店舗登録はありませんよ");
			}

		}
		totalPrice = Number(planPrice) + Number(optionPrice);
		document.getElementById('price-for-options1').innerHTML = Number(optionPrice).toLocaleString();
		document.getElementById('price-for-options2').innerHTML = Number(optionPrice).toLocaleString();
		document.getElementById('total-price').innerHTML = Number(totalPrice).toLocaleString();
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

			console.log(feature)
			if (feature.includes('<li> >> 投稿</li>')) {
				optionPrice += priceForPost
				console.log("投稿予約はありますよ");
			} else {
				console.log("投稿予約はありませんよ");
			}
			if (feature.includes('<li> >> レポート</li>')) {
				optionPrice += priceForReport
				console.log("レポートはありますよ");
			} else {
				console.log("レポートはありませんよ");

			}
			if (feature.includes('<li> >> レビュー管理・分析</li>')) {
				optionPrice += priceForReviewAnalysis
				console.log("レビュー管理・分析はありますよ");
			} else {
				console.log("レビュー管理・分析はありませんよ");
			}

			if (feature.includes('<li> >> レビューネガポジ判定</li>')) {
				optionPrice += priceForReviewJudging
				console.log("レビューネガポジ判定はありますよ");
			} else {
				console.log("レビューネガポジ判定はありませんよ");
			}

			if (feature.includes('<li> >> クチコミ管理・自動返信</li>')) {
				optionPrice += priceForReviewManagement
				console.log("クチコミ管理・自動返信はありますよ");
			} else {
				console.log("クチコミ管理・自動返信はありませんよ");
			}

			if (feature.includes('<li> >> 一括編集・改ざん防止</li>')) {
				optionPrice += priceForBulkEdit
				console.log("一括編集・改ざん防止はありますよ");
			} else {
				console.log("一括編集・改ざん防止はありませんよ");
			}

			if (feature.includes('<li> >> 内部分析・競合分析</li>')) {
				optionPrice += priceForAnalysis
				console.log("内部分析・競合分析はありますよ");
			} else {
				console.log("内部分析・競合分析はありませんよ");
			}

			if (feature.includes('<li> >> ツール名変更・ライセンス</li>')) {
				optionPrice += priceForLicense
				console.log("ツール名変更・ライセンスはありますよ");
			} else {
				console.log("ツール名変更・ライセンスはありませんよ");
			}

			if (feature.includes('<li> >> 一括店舗登録</li>')) {
				optionPrice += priceForBulkRegistration
				console.log("一括店舗登録はありますよ");
			} else {
				console.log("一括店舗登録はありませんよ");
			}
			console.log("機能の料金は" + optionPrice);
		}
		var totalPrice = Number(planPrice) + Number(optionPrice);
		document.getElementById('price-for-options1').innerHTML = Number(optionPrice).toLocaleString();
		document.getElementById('price-for-options2').innerHTML = Number(optionPrice).toLocaleString();
		document.getElementById('total-price').innerHTML = Number(totalPrice).toLocaleString();
	});
});
// ========================================================







$(document).on('turbolinks:load', function () {
	var businessCountByKey = {
		5000: 40,
		10000: 85,
		15000: 125,
		20000: 165,
		25000: 200,
		30000: 240,
		35000: 275,
		40000: 325,
		45000: 360,
		50000: 400,
		55000: 450,
		60000: 480,
		65000: 525,
		70000: 560,
		75000: 600,
		80000: 650,
		90000: 750,
		100000: 800,
		150000: 1125,
		200000: 1500
	};
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

		document.getElementById('plan-value').innerText = Number(planPrice).toLocaleString();
		document.getElementById('additional-value').innerText = additionalPrice.toLocaleString();
		document.getElementById('total-value').innerText = Number(totalPrice).toLocaleString();
		document.getElementById('total-init-value').innerText = Number(totalInitPrice).toLocaleString();
		document.getElementById('business-count-key').innerText = Number(businessCount).toLocaleString();
	});

	$('.addition .rental').change(function () {
		var additionalValue = calcAdditionalPrice();
		$('#additional-value')[0].innerText = additionalValue;
	});

	$('#restricted_switch').change(function () {
		var restrectedCheck = $('#restricted_switch')[0]
		if (restrectedCheck.checked) {
			$('.restricted_container').removeClass('hide_container');
			$('.non_restricted_container').addClass('hide_container');
			$('#plans')[0].value = "";
		} else {
			$('.restricted_container').addClass('hide_container');
			$('.non_restricted_container').removeClass('hide_container');
			$('#restricted_plan')[0].value = "";
		}

	});

});

// 追加料金計算　テーブルに持たせるべきだった・・・
function calcAdditionalPrice() {
	var restrectedCheck = $('#restricted_switch')[0];

	if (restrectedCheck.checked) {
		var planPrice = document.getElementById('restricted_plan').value;
		var firstPrice = 75000;
		var secondPrice = 149999;
	} else {
		var planPrice = document.getElementById('plans').value;
		var firstPrice = 140000;
		var secondPrice = 230000;
	}
	var post = document.getElementById('post');
	var auto_reply_reviews = document.getElementById('auto_reply_reviews');
	var report = document.getElementById('report');
	var bulkEdit = document.getElementById('bulk_edit');
	var license = document.getElementById('license');

	if (post.checked) {
		if (planPrice < firstPrice) {
			var postPrice = 25000;
		} else if (firstPrice <= planPrice && planPrice <= secondPrice) {
			var postPrice = 50000;
		} else {
			var postPrice = 75000;
		}
	} else {
		var postPrice = 0;
	}

	if (auto_reply_reviews.checked) {
		if (planPrice < firstPrice) {
			var replyPrice = 50000;
		} else if (firstPrice <= planPrice && planPrice <= secondPrice) {
			var replyPrice = 75000;
		} else {
			var replyPrice = 100000;
		}
	} else {
		var replyPrice = 0;
	}

	if (report.checked) {
		if (planPrice < firstPrice) {
			var reportPrice = 25000;
		} else if (firstPrice <= planPrice && planPrice <= secondPrice) {
			var reportPrice = 50000;
		} else {
			var reportPrice = 75000;
		}
	} else {
		var reportPrice = 0;
	}

	if (bulkEdit.checked) {
		if (planPrice < firstPrice) {
			var bulkEditPrice = 50000;
		} else if (firstPrice <= planPrice && planPrice <= secondPrice) {
			var bulkEditPrice = 100000;
		} else {
			var bulkEditPrice = 150000;
		}
	} else {
		var bulkEditPrice = 0;
	}

	if (license.checked) {
		var licensePrice = 5000;
	} else {
		var licensePrice = 0;
	}

	var additionalPrice = parseInt(postPrice) + parseInt(replyPrice) + parseInt(reportPrice) + parseInt(licensePrice) + parseInt(bulkEditPrice);
	return additionalPrice;
}