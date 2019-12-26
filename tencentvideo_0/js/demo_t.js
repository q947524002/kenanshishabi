var one = [
    {
        name : "华晨宇聊到魔音选手心疼落泪：没想到陆政廷会被淘汰",
        img : "图片 167 (3).jpeg"
    } ,
    {
        name : "文兆杰专访：没想过自己会复活，以后不会再让花花失望" ,
        img : "图片 167 (4).jpeg"
    },
    {
        name : "斯外戈专访：能复活超开心，最对不起和感谢的人是春春" ,
        img : "图片 167 (5).jpeg"
    }
]
var data_one = ""
for (var i = 0; i < one.length; i++) {
    var o_data = one[i]
    console.log(o_data)
    data_one += `
        <div class="aaaa">
         <div class="vh_li">
            <img src="./images/` + o_data.img + `" alt="">
        </div>
        <div class="vh_li_a">
            <span>` + o_data.name + `</span>
        </div>
        </div>


         
    `
}
$(".vh_list").append($(data_one))


var two = [
    {
        name :"我家那小子" ,
        img : "图片 17 (3).jpeg",
        zi : "第4期：父母离异，陈学冬武艺受影响"
    },
    {
        name :"放开我北鼻 第3季" ,
        img : "图片 17 (4).jpeg",
        zi : "第10期：释小龙空降少林寺教萌娃练功夫"
    },
    {
        name :"明日之子优享版" ,
        img : "图片 17 (5).jpeg",
        zi : "优享版第8期：赛道分组密室讨论全程"
    }
    
]

var rec = ""
for(var i = 0; i <two.length; i++) {
    var data_two = two[i]

    rec += `
    <div class="reco_a">
    <div class="reco_l">
       <img src="./images/` + data_two.img + `" alt="">
    </div>
    <div class="reco_r">
         <span class="rec_r zixiao" style="font-weight: normal;">` + data_two.name + `</span>
         <p class="rec_zi">` + data_two.zi + `</p>
    </div>
    </div>
    
    `
}
$(".recom").append($(rec))
$(".descend>img").click(function(){
    location.href="demo.html"
})
