/**
 *  哐哐智造 自定义模版
 */

let kit = {

}

 /* 弹出层  带表单的 */

kit.open_window = function (id, option) {
    $('.kitwee-window' + id).addClass('show').find('.kitwee-window-title').text(option.title || '信息');

    $('.kitwee-window' + id).find('.kitwee-window-close').click(function(){
        kit.close_window();
    })
}
kit.close_window = function () {
    $('.kitwee-window').removeClass('show')
}