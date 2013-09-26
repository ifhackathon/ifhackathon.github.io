$(document).ready(function() {
	$('.slide2 h3, .slide2 .first-line, .slide2 .second-line, .slide2 .third-line, .slide2 .highlight, .slide2 .fifth-line, .slide2 .time-left-label').css('position', 'relative');
	
	TweenMax.fromTo($('.logo-wrapper'),2,{css:{opacity:0, right: '-100%', bottom: '-100%'}}, {css:{opacity:1, right: '0', bottom: '0'}});


	var controller = $.superscrollorama({
		// triggerAtCenter: false,
		// playoutAnimations: true
	});

	
	controller.addTween('.slide2 h3', 
	  TweenMax.from($('.slide2 h3'),1,{
	    css:{right: '-200%', opacity: 0}})); 
	controller.addTween('.slide2 h3', 
	  TweenMax.from($('.slide2 .first-line'),1.2,{
	    css:{left: '-200%', opacity: 0}}));
	controller.addTween('.slide2 h3', 
	  TweenMax.from($('.slide2 .second-line'),1.4,{
	    css:{right: '-200%', opacity: 0}})); 
	controller.addTween('.slide2 h3', 
	  TweenMax.from($('.slide2 .third-line'),1.6,{
	    css:{left: '-200%', opacity: 0}})); 
	controller.addTween('.slide2 h3', 
	  TweenMax.from($('.slide2 .highlight'),1.8,{
	    css:{right: '-200%', opacity: 0}})); 
	controller.addTween('.slide2 h3', 
	  TweenMax.from($('.slide2 .fifth-line'),2,{
	    css:{left: '-200%', opacity: 0}}));
	controller.addTween('.slide2 h3', 
	  TweenMax.from($('.slide2 .time-left-label'),2.2,{
	    css:{right: '-200%', opacity: 0}}));

	controller.addTween('.mackbook', 
	  TweenMax.from($('.mackbook'),1,{
	    css:{left: '-200%'}}));
});