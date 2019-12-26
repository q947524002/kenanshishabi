var one = [
    {
        name : "沙海" ,
        img : "图片 217.jpeg",
        zi : "更新至10集/全54集"
    } ,
    {
        name : "明日之子优享版" ,
        img : "图片 217.jpeg",
        zi : "更新至优享版第8期：赛道分组密室讨论全程"
    },
    {
        name : "沙海" ,
        img : "图片 217.jpeg",
        zi : "更新至10集/全54集"
    } ,
    {
        name : "明日之子优享版" ,
        img : "图片 217.jpeg",
        zi : "更新至优享版第8期：赛道分组密室讨论全程"
    },
    {
        name : "沙海" ,
        img : "图片 217.jpeg",
        zi : "更新至10集/全54集"
    },
    {
        name : "明日之子优享版" ,
        img : "图片 217.jpeg",
        zi : "更新至优享版第8期：赛道分组密室讨论全程"
    }

]
var list = ""
for (var i = 0; i < one.length; i++) {
    var data_one = one[i]

    list += `
        <div class="tui">
            <div class="one_tuia">
            <img src="./images/` + data_one.img + `" alt="">
            <div class="only">独播</div>
            </div>
            
            <div class="a">
            <span class="dazi">` + data_one.name + `</span>
            <p class="xiaozi">` + data_one.zi + `</p>
            </div>
        </div>
    `
}
$(".lok_list").append($(list))