//<!--让屏幕结束后消失-->
function f1(){
    var a=document.getElementById("opening");
    a.style.display="none";
}
setTimeout("f1()",3000);
function f2(){
    var b=document.getElementById("opening_center");
    b.style.display="none";
}
setTimeout("f2()",2000);

//<!--swiper样式-->
var mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
          //分页器
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    }
});
//滚轮事件 监听导航
var body= document.querySelector("#body");
body.onmousewheel=function(){
    var span= document.querySelectorAll("#Paging>span");
    var li =document.querySelectorAll(".navList");
    for(var i = 0 ; i<li.length;i++){
//        console.log(li[i]);
        li[i].style.background = "";
        
    }
    
    for(var i = 0 ; i<span.length;i++){
        if(span[i].className=="swiper-pagination-bullet swiper-pagination-bullet-active"){
            li[i].style.background = "#0F698A";
        }
    }
};



