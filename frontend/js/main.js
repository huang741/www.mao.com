/**
 * Created by Administrator on 2015/12/15.
 */
/*企业注册内容展示与隐藏*/
var registerShow=function(){
 $("#next").click(function () {
     $("#recon").removeClass("active");
     $("#recon1").addClass("active");
     $(".register .type a").addClass("active");
 })
}
/*企业注册内容展示与隐藏*/

/*开发市场内容展示与隐藏*/
var marketShow=function(){
   $("#head li").mouseenter(function(){
       $("#head li").removeClass("active");
       $(this).addClass("active");
       var index = $(this).index();
       $(".projectlist").removeClass("active");
       $("#con"+index).addClass("active");
   })
}
/*开发市场内容展示与隐藏*/

/*技术服务市场内容展示与隐藏*/
var skillShow=function(){
    $("#shillHead li").click(function(){
        $("#shillHead li").removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $(".t-detail .con").removeClass("active");
        $("#skillCon"+index).addClass("active");
    })
}
/*技术服务市场内容展示与隐藏*/
