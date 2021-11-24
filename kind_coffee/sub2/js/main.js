

   
    $(document).ready(function () {
      $(".tab_title li").click(function () {
        var idx = $(this).index();
        $(".tab_title li").removeClass("on");
        $(".tab_title li").eq(idx).addClass("on");
        $(".tab_cont > .tapbtn").hide();
        $(".tab_cont > .tapbtn").eq(idx).show();
      })
    });
 