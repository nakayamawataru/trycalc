function hideForHosikakutokun(){$.when($("#hoshikakutokun-plus").hide(),$("#hoshikakutokun-gmb").hide()).done(function(){$("#hoshikakutokun").fadeIn()})}function hideForHosikakutokunPlus(){$.when($("#hoshikakutokun").hide(),$("#hoshikakutokun-gmb").hide()).done(function(){$("#hoshikakutokun-plus").fadeIn()})}function hideForHosikakutokunGmb(){$.when($("#hoshikakutokun").hide(),$("#hoshikakutokun-plus").hide()).done(function(){$("#hoshikakutokun-gmb").fadeIn()})}function disableAddition(){$(".gmb-addition").prop("disabled",!0),document.getElementById("crawl_time").value=0,document.getElementById("crawl_loc").value=0,document.getElementById("additional-value").innerText=0}$(document).on("turbolinks:load",function(){$("#credit-calc.hoshikakutokun").change(function(){$("#credit-calc")[0].checked?$.when($("#plan-value").fadeOut(),$("#total-value").fadeOut()).done(function(){$(".credit-value").fadeIn()}):$.when($(".credit-value").fadeOut()).done(function(){$("#plan-value").fadeIn(),$("#total-value").fadeIn()})}),$("#plans.hoshikakutokun").change(function(){var e=$("#plans")[0].value;"7000"==e?(disableAddition(),hideForHosikakutokun()):"9000"==e?(hideForHosikakutokunPlus(),disableAddition()):"12000"==e&&(hideForHosikakutokunGmb(),$(".addition.hoshikakutokun").prop("disabled",!1))}),$(".price.hoshikakutokun").change(function(){var e=document.getElementById("plans").value,t=0,n=0;if(7e3==e)var u=document.getElementById("credit_price_hoshikakutokun").value,a=document.getElementById("half_year_hoshikakutokun").value,o=document.getElementById("year_hoshikakutokun").value;else if(9e3==e)u=document.getElementById("credit_price_hoshikakutokun_plus").value,a=document.getElementById("half_year_hoshikakutokun_plus").value,o=document.getElementById("year_hoshikakutokun_plus").value;else if(12e3==e){u=document.getElementById("credit_price_hoshikakutokun_gmb").value,a=document.getElementById("half_year_hoshikakutokun_gmb").value,o=document.getElementById("year_hoshikakutokun_gmb").value,t=150*document.getElementById("crawl_time").value,n=300*document.getElementById("crawl_loc").value;var d=parseInt(t)+parseInt(n)}else u=0,a=0,o=0;d=parseInt(t)+parseInt(n);var i=parseInt(e)+parseInt(d),l=parseInt(u)+parseInt(d),k=parseInt(a)+parseInt(d),h=parseInt(o)+parseInt(d);document.getElementById("plan-value").innerText=e,document.getElementById("credit-value").innerText=u,document.getElementById("half-year-value").innerText=a,document.getElementById("year-value").innerText=o,document.getElementById("additional-value").innerText=d,document.getElementById("total-value").innerText=i,document.getElementById("credit-total-value").innerText=l,document.getElementById("half-year-total-value").innerText=k,document.getElementById("year-total-value").innerText=h})});