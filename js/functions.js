// JavaScript Document
$(document).on('pagecreate','#page1',function(){

	/*
	$('p').on('tap',function(){
		$(this).hide();
	});
	$('p').on('taphold',function(){
		$(this).hide();
	});
	*/
	$('.a').on('swipe',function(){
  		alert("You swiped!");
	});
	$('p').on('swipeleft',function(){
  		alert("You swiped left!");
	});
	$('p').on('swiperight',function(){
  		alert("You swiped right!");
	});
var screen = $.mobile.getScreenHeight();

var header = $(".ui-header").hasClass("ui-header-fixed") ? $(".ui-header").outerHeight()  - 1 : $(".ui-header").outerHeight();

var footer = $(".ui-footer").hasClass("ui-footer-fixed") ? $(".ui-footer").outerHeight() - 1 : $(".ui-footer").outerHeight();

/* content div has padding of 1em = 16px (32px top+bottom). This step
   can be skipped by subtracting 32px from content var directly. */
var contentCurrent = $(".ui-content").outerHeight() - $(".ui-content").height();

var content = screen - header - footer - contentCurrent;

$(".ui-content").height(content);
});

