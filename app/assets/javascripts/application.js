// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

var angle = 0.0;
setInterval(function() {
    console.log(angle);
    $("#clownpenis")
        .css('-webkit-transform', 'rotate('+angle+'deg)')
        .css('-moz-transform', 'rotate('+angle+'deg)')
        .css('-ms-transform', 'rotate('+angle+'deg)');
    angle=angle+.1;
}, 50);

var angle1 = 0.0;
setInterval(function() {
    console.log(angle1);
    $(".gear_1")
        .css('-webkit-transform', 'rotate('+angle1+'deg)')
        .css('-moz-transform', 'rotate('+angle1+'deg)')
        .css('-ms-transform', 'rotate('+angle1+'deg)');
    angle1=angle1+.1;
}, 25);

var angle2 = 0.0;
setInterval(function() {
    console.log(angle2);
    $(".gear_2")
        .css('-webkit-transform', 'rotate('+angle2+'deg)')
        .css('-moz-transform', 'rotate('+angle+'deg)')
        .css('-ms-transform', 'rotate('+angle2+'deg)');
    angle2=angle2-.1;
}, 25);

var angle3 = 0.0;
setInterval(function() {
    console.log(angle3);
    $(".gear_3")
        .css('-webkit-transform', 'rotate('+angle3+'deg)')
        .css('-moz-transform', 'rotate('+angle3+'deg)')
        .css('-ms-transform', 'rotate('+angle3+'deg)');
    angle3=angle3+.1;
}, 1);

var angle4 = 0.0;
setInterval(function() {
    console.log(angle4);
    $(".gear_4")
        .css('-webkit-transform', 'rotate('+angle4+'deg)')
        .css('-moz-transform', 'rotate('+angle4+'deg)')
        .css('-ms-transform', 'rotate('+angle4+'deg)');
    angle4=angle4+.1;
}, 1);

var angle5 = 0.0;
setInterval(function() {
    console.log(angle5);
    $(".gear_5")
        .css('-webkit-transform', 'rotate('+angle5+'deg)')
        .css('-moz-transform', 'rotate('+angle5+'deg)')
        .css('-ms-transform', 'rotate('+angle5+'deg)');
    angle5=angle5-.1;
}, 1);

var angle6 = 0.0;
setInterval(function() {
    console.log(angle6);
    $(".gear_6")
        .css('-webkit-transform', 'rotate('+angle6+'deg)')
        .css('-moz-transform', 'rotate('+angle6+'deg)')
        .css('-ms-transform', 'rotate('+angle6+'deg)');
    angle6=angle6-1;
}, 1);

var angle7 = 0.0;
setInterval(function() {
    console.log(angle7);
    $(".gear_7")
        .css('-webkit-transform', 'rotate('+angle7+'deg)')
        .css('-moz-transform', 'rotate('+angle7+'deg)')
        .css('-ms-transform', 'rotate('+angle7+'deg)');
    angle7=angle7+1;
}, 1);