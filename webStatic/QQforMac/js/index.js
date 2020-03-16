$(function () {
    var index = 0, timer = null;

    showAndHideEle(index);

    /**
     *   1. 监听GPS点击
     */
      $('.gps li').on('click', function () {
           // 1.1 获取点击的索引
           index = $(this).index();

          // 2.2 切换选中 和 页面
          $(this).addClass('current').siblings().removeClass('current');
          $('section').eq(index).show().siblings('section').hide();

          // 2.3 控制
          showAndHideEle(index);

          // 2.4 移除架空类
          setTimeout(function () {
              $('section').eq(index).removeClass('current').siblings('section').addClass('current');
          }, 10);
      });


    /*
      2. 监听鼠标的滚动
    */
    $(window).mousewheel(function(event, delta) {
          clearTimeout(timer);
          timer = setTimeout(function () {
              // 2.1.求出当前的额索引
              index -= delta;

              // 2.2.判断
              if(index > $('.gps li').length - 1){
                  index =  $('.gps li').length - 1;
              }else if(index < 0){
                  index = 0;
              }

              // 2.3 切换选中 和 页面
              $('.gps li').eq(index).addClass('current').siblings().removeClass('current');
              $('section').eq(index).show().siblings('section').hide();

              // 2.4 元素的显示和隐藏
              showAndHideEle(index);

              // 2.5 移除架空类
              setTimeout(function () {
                  $('section').eq(index).removeClass('current').siblings('section').addClass('current');
              }, 10);

          }, 400);


    });

    /**
     * 控制页面元素的显示和隐藏
     * @param index  当前的索引
     */
    function showAndHideEle(index) {
        if(index == 0){ // 第一屏
            $('.top-left-logo').hide();
            $('.scroll').show();
        }else {
            $('.top-left-logo').show();
            $('.scroll').hide();
        }
    }

});