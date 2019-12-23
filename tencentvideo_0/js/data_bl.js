//底部点击
$(".bottom_").click(function () {
    var that = this
    var cli_index = $(this).index()
    $(".bottom_").each(function (index, item) {
        if (cli_index == index) {
            var cur_src = $(item).find("img").attr("src")
            if (cur_src.indexOf("_a") == -1) {
                $(item).find("img").attr("src", cur_src.replace(".png", "_a.png"))
            }
        } else {
            var cur_src = $(item).find("img").attr("src")
            $(item).find("img").attr("src", cur_src.replace("_a", ""))
        }
    })
    $(".app>div").each(function (index, item) {
        if ($(that).index() == index) {
            $(item).css({
                "display": "block"
            })
        } else {
            $(item).css({
                "display": "none"
            })
        }
    })
})


// 遍历数据 做界面
var content_str = ""
for (var i = 0; i < shu_one.length; i++) {
    var one_data = shu_one[i]

    content_str += `
            <div class="one_tuia">
            <img src="./images/` + one_data.img + `" alt="">
            <p class="dazi">` + one_data.name + `</p>
            <p class="xiaozi">` + one_data.jie + `</p>
            </div>
    `
}
$(".shu_ju").append($(content_str))


var news_str = ""
for (var i = 0; i < shu_two.length; i++) {
    var two_data = shu_two[i]

    news_str += `
            <div class="new">
            <img src="./images/` + two_data.img + `" alt="">
            <p class="new_zi">` + two_data.name + `</p>
            </div>
    `
}
$(".news_list").append($(news_str))

var tom = ""
for (var i = 0; i < shu_three.length; i++) {
    var three_data = shu_three[i]

    tom += `
        
            <div class="tom_img">
            <img src="./images/` + three_data.img + `" alt=""></br>
            
            <span class="dazi">` + three_data.name + `</span>
        </div>
         
    `
}
$(".tomo").append($(tom))

var w_lista = ""
for (var i = 0; i < shu_four.length; i++) {
    var four_data = shu_four[i]

    w_lista += `
      <div class="w_a">
         <div class="w_shang">
         <img src="./images/` + four_data.img + `" alt="">
         <span>` + four_data.name + `</span>
    </div>
    <div class="w_xia">
         <img src="./images/` + four_data.imga + `" alt="">

        <div class="aa">` + four_data.zia + `</div>
        <div class="aa">` + four_data.zib + `</div>
        <div class="w_xiaa">
        <img src="./images/` + four_data.imgb + `" alt="">
        <img src="./images/` + four_data.imgc + `" alt="">
        <img src="./images/` + four_data.imgd + `" alt="">
        </div>
    </div>
  </div>
    `
}
$(".w_list").append($(w_lista))


var hot_lis = ""
for(var i = 0; i <shu_fif.length; i++) {
    var fif_data = shu_fif[i]

    hot_lis += `
    <div class="hot_a">
    <img src="./images/` + fif_data.img + `" alt="">
    <p class="dazi">` + fif_data.name + `</p>
    <p class="xiaozi">` + fif_data.zi + `</p>
    </div>
    
    `
}
$(".hot_ju").append($(hot_lis))


var EM_jua = ""
for (var i = 0; i < shu_six.length; i++) {
    var six_data = shu_six[i]

    EM_jua += `
            <div class="em_ju">
            <img src="./images/` + six_data.img + `" alt="">
            <p class="dazi">` + six_data.name + `</p>
            <p class="xiaozi">` + six_data.zi + `</p>
            </div>
    `
}
$(".EAju").append($(EM_jua))

