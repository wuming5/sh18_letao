$(function(){
    // // 禁用进度环
    // NProgress.configure({ showSpinner: false });
    // // 用插件实现进度条功能
    // NProgress.start();

    // // 结束进度条
    // setTimeout(function(){
    //     NProgress.done();
    // },500)
   


    //注册了全局事件，所有的ajax只要开始就会开启进度条
    $(document).ajaxStart(function () {
        NProgress.start();
    });
    
    //所有的ajax只要结束，延迟500毫秒，结束进度条
    $(document).ajaxStop(function () {
        setTimeout(function () {
            NProgress.done();
        }, 500);
    
    });

})