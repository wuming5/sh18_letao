$(function() {
    // 1. 校验表单
    $("form").bootstrapValidator({
        //要求：用户名不能为空  2-6
        //     密码不能为空  密码的长度在6-12为
        //配置需要校验的字段
        fields: {
            //对应了form中的name属性
            username:{
                //给username配置校验规则
                validators:{
                    // 不为空的验证规则
                    notEmpty:{
                        message:'用户名不能为空'
                    },
                    // 长度限制规则 
                    stringLength:{
                        min:2,
                        max:8,
                        message:'长度应该在2~8位之间'
                    },
                    //专门用来提示信息
                    callback: {
                        message:'用户名错误'
                    }
                }
            },
            password:{
                //给username配置校验规则
                validators:{
                    // 不为空的验证规则
                    notEmpty:{
                        message:'密码不能为空'
                    },
                    // 长度限制规则 
                    stringLength:{
                        min:6,
                        max:11,
                        message:'长度应该在6~11位之间'
                    },
                    callback:{
                        message:'密码错误'
                    }
                }
            }
        },
        //配置小图标, 成功 失败  校验中
        feedbackIcons:{
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        }
    })

    // 2.给表单注册一个校验成功的事件， 成功的时候阻止表单的默认提交，使用ajax进行。
    $('form').on('success.form.bv',)

});