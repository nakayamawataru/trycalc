// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

/*global $*/
$(document).on('turbolinks:load', function() {
    var path = location.pathname
    if (path == "/meo"){
        $('#select-payment-type').fadeIn();
        $('#one_month').css('display','none');
        $('#half_year').prop('checked', true);
    }else{
        $('#select-payment-type').fadeOut();
        $('#one_month').css('display','');
        $('#half_year').prop('checked', false);
    }

})