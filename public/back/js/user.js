/**
 * Created by Administrator on 2018/3/4.
 */
$(function(){
    var currentPage = 1;
    var pageSize = 5;
    function render(){
        $.ajax({
            type:'GET',
            ulr:'/user/queryUser',
            data:{
                page:currentPage,
                pageSize:pageSize
            },
            success:function(info){
                console.log(info);
            }
        })
    }

});