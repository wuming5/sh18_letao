$(function(){
    //禁用进度环
    NProgress.configure({ showSpinner: false });



    // 用插件实现进度条功能
    //注册一个全局的ajaxStart事件，所有的ajax在开启的时候，会触发这个事件
    $(document).ajaxStart(function () {
        //开启进度条
        NProgress.start();
    });
    
    //所有的ajax只要结束，延迟500毫秒，结束进度条
    $(document).ajaxStop(function () {
        setTimeout(function () {
            NProgress.done();
        }, 500);
    
    });




    //二级菜单的显示与隐藏
    //思路： 找到二级分类的a标签
    $(".second").prev().on("click", function () { // prev 找前一个兄弟  next找下一个兄弟元素


        //slideToggle
        //fadeToggle
        //toggleClass()
        //toggle()
        $(this).next().slideToggle();

    })

    //找到icon_menu注册点击事件
    $(".icon_menu").on("click", function () {

        //让侧边栏隐藏
        $(".lt_aside").toggleClass("now");
        //让main的padding-left:0
        $(".lt_main").toggleClass("now");

    });


    //退出按钮
    $(".icon_logout").on("click",function(){
        $("#logoutModal").modal('show');
    })

    //点击退出清除登录保持状态
    $(".btn_logout").on("click",function(){
        $.ajax({
            type:'GET',
            url:'/employee/employeeLogout',
            success:function(info){
                if(info.success){
                    location.href='login.html';
                }else {
                    alert("退出出现错误");
                }
            }
        })
    })


    //如果不是登录页，发送ajax请求，查询管理员是否登录
    if(location.href.indexOf("login.html")==-1) {
        $.ajax({
            type:"GET",
            url:"/employee/checkRootLogin",
            success:function(info){
                console.log(info);
                if(info.error ===400) {
                    location.href="login.html";
                }
            }
        })
    }



})