
/// <reference path="jquery-1.8.1.js" />
/// gol fn lib for htb

//扩展jq.fn

$.extend($.fn, {
	
// ipt焦点
	inputTxt : function(opts){
		var def = {
			   val : "",
			fColor : "#333",
		    BColor : "#929292"
		};
		var setting = $.extend(def,opts);
		
		$(this).attr("value",setting.val).css("color",setting.BColor);
		$(this).bind({
			"focus" : function(){ if ( $(this).val() == setting.val ){ $(this).attr("value","").css("color",setting.fColor)}},
			"blur" : function(){ if ( $(this).val() == "" ){ $(this).attr("value",setting.val).css("color",setting.BColor)}}
		})
	},	
//  选项卡 ***
	tab : function(opts){
		var def = {
			tabBd : "",
			  cls :"cur",
		   _event :"mouseover"
		};
		var setting = $.extend(def,opts);	
		$(this).bind(setting._event ,fn).eq(0).trigger(setting._event);
		
		function fn(){
			var index = $(this).index();
			$(this).addClass(setting.cls).siblings().removeClass(setting.cls);
			$(setting.tabBd).eq(index).show().siblings().hide();			
		};
	},
//  点击样式 ***
	tabcur : function(opts){
		var def = {
			  cls :"cur",
		   _event :"click"
		};
		var setting = $.extend(def,opts);	
		$(this).bind(setting._event ,fn).eq(0).trigger(setting._event);
		
		function fn(){
			$(this).addClass(setting.cls).siblings().removeClass(setting.cls);			
		};
	}				
});






