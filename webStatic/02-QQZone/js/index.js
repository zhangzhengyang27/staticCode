$(function () {
   $('#fullpage').fullpage({
       anchors:['firstPage', 'secondPage', 'threePage', 'fourPage', 'fivePage'],
       navigation: true,
       navigationPosition: 'right',
       navigationTooltips: ['第一屏', '第二屏', '第三屏', '第四屏', '第五屏'],
       scrollingSpeed: 600,
       onLeave: function (pre, next) {
           $('.section').eq(next.index).removeClass('current').siblings().addClass('current');
       }
   });
});