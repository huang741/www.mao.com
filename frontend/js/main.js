/**
 * Created by Administrator on 2015/12/15.
 */
/*��ҵע������չʾ������*/
var registerShow=function(){
 $("#next").click(function () {
     $("#recon").removeClass("active");
     $("#recon1").addClass("active");
     $(".register .type a").addClass("active");
 })
}
/*��ҵע������չʾ������*/

/*�����г�����չʾ������*/
var marketShow=function(){
   $("#head li").mouseenter(function(){
       $("#head li").removeClass("active");
       $(this).addClass("active");
       var index = $(this).index();
       $(".projectlist").removeClass("active");
       $("#con"+index).addClass("active");
   })
}
/*�����г�����չʾ������*/

/*���������г�����չʾ������*/
var skillShow=function(){
    $("#shillHead li").click(function(){
        $("#shillHead li").removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $(".t-detail .con").removeClass("active");
        $("#skillCon"+index).addClass("active");
    })
}
/*���������г�����չʾ������*/
