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

/*��Ʒ�б�����չʾ������*/
var productShow=function(){
    $(".product-side .p-side-ul li").mouseenter(function(){
        var index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(this).closest(".panel").find(".p-side-con").removeClass("active");
        $(this).closest(".panel").find(".panel-body > ul").eq(index).addClass("active");
    });
}
/*��Ʒ�б�����չʾ������*/

/*����֧��ѡ��ƽ̨*/
var paySelect=function(){
    $("#terraceUl li").click(function(){
        $("#terraceUl li i").removeClass("fa-check-circle");
        $("#terraceUl li i").addClass("fa-circle-o");
        $(this).children("i").removeClass("fa-circle-o");
        $(this).children("i").addClass("fa-check-circle");
        $(this).addClass("active").siblings().removeClass("active");
    });
}
/*����֧��ѡ��ƽ̨*/
