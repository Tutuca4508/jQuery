$(function () {
    $(".send").click(function () {
        var $text = $(".comment").val();
        var $weibo = createEle($text);
        $(".messageList").prepend($weibo)

    })

    $("body").delegate(".comment","propertychange input", function () {
        if($(this).val().length > 0){
            $(".send").prop("disabled", false)
        }else{
            // 让按钮不可用
            $(".send").prop("disabled", true);
        }
    })
    
    function createEle(text) {
        var $weibo = $("<div class=\"info\">\n" +
        "            <p class=\"infoText\">"+text+"</p>\n" +
        "            <p class=\"infoOBotton\">\n" +
        "                <span class=\"infoTime\">"+formartDate()+"</span>\n" +
        "                <span class=\"infoHandle\">\n" +
        "                    <a href=\"javascript:;\" class='infoTop'>0</a>\n" +
        "                    <a href=\"javascript:;\" class='infoDown'>0</a>\n" +
        "                    <a href=\"javascript:;\" class='infoDel'>删除</a>\n" +
        "                </span>\n" +
        "            </p>\n" +
        "        </div>");
    return $weibo;
    }
})
