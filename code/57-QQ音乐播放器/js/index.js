$(function () {

    // 自定义滚动条
    $(".content_list").mCustomScrollbar();

    // 1.监听歌曲的移入移出事件
    $(".content_list").delegate(".list_menu", "mouseenter", function() {
         // 显示子菜单
         $(this).find(".list_menu").stop().fadeIn(1000)
         $(this).find(".list_time a").stop().fadeIn(1000)
         // 隐藏时长
         $(this).find(".list_time span").stop().fadeOut(1000)
    })
    $(".content_list").delegate(".list_menu", "mouseleave", function() {
        // 隐藏子菜单
        $(this).find(".list_menu").stop().fadeOut(1000)
        $(this).find(".list_time a").stop().fadeOut(1000)
        // 显示时长
        $(this).find(".list_time span").stop().fadeIn(1000)
    })

   

    // 2. 监听复选框的点击事件
    $(".content_list").delegate(".list_check", "click", function() {
        $(this).toggleClass("list_checked")
    })

    // 3. 添加子菜单播放按钮的监听
    var $musicPlay = $(".music_play")
    $(".content_list").delegate(".list_menu_play", "click", function () {
        var $item = $(this).parents(".list_music");
        $(this).toggleClass("list_menu_play2")
        $(this).parents(".list_music").siblings().find(".list_menu_play").removeClass("list_menu_play2");
        
        // 3.3 同步底部播放按钮
        if ($(this).attr("class").indexOf("music_play2") != -1) {
            // 当前子菜单的播放按钮是播放状态
            $musicPlay.addClass("music_play2");
            // 让文字高亮
            $item.find("div").css("color", "#fff");
            $item.siblings().find("div").css("color", "rgba(255,255,255,0.5)");
        }else{
            // 当前子菜单的播放按钮不是播放状态
            $musicPlay.removeClass("music_play2");
            // 让文字不高亮
            $item.find("div").css("color", "rgba(255,255,255,0.5)");
        }
     
        // 3.4 切换序号的状态
        $item.find(".list_number").toggleClass("list_music2")
        $item.siblings().find(".list_number").removeClass("list_music2")
    })
    

    // 3. 加载歌曲列表
    getPlaerList();
    function getPlaerList() {
        
        $.ajax({
            url: "./source/musiclist.json",
            dataType: "json",
            success: function (data) {
                // 3.1 遍历获取到的数据 创建每一条音乐
                var $musicList = $(".content_list ul");
                $.each(data, function (index, ele) {
                    var $item = createMusicItem(index, ele);
                    
                    $musicList.append($item)
                })
            },
            error: function (e) {
                console.log(e);
            }
        })
    }


    // 定义创建音乐的方法
    function createMusicItem(index, ele) {
        var $item = $("" +
        "<li class=\"list_music\">\n" +
            "<div class=\"list_check\"><i></i></div>\n" +
            "<div class=\"list_number\">"+(index + 1)+"</div>\n" +
            "<div class=\"list_name\">"+musiclist.name+"" +
            "     <div class=\"list_menu\">\n" +
            "          <a href=\"javascript:;\" title=\"播放\" class='list_menu_play'></a>\n" +
            "          <a href=\"javascript:;\" title=\"添加\"></a>\n" +
            "          <a href=\"javascript:;\" title=\"下载\"></a>\n" +
            "          <a href=\"javascript:;\" title=\"分享\"></a>\n" +
            "     </div>\n" +
            "</div>\n" +
            "<div class=\"list_singer\">"+musiclist.singer+"</div>\n" +
            "<div class=\"list_time\">\n" +
            "     <span>"+musiclist.time+"</span>\n" +
            "     <a href=\"javascript:;\" title=\"删除\" class='list_menu_del'></a>\n" +
            "</div>\n" +
        "</li>")
        return $item
    }
})