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
