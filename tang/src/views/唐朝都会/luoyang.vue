<template>
  <div class="shell" id="shell">
    <div class="header">
      <h2 class="title">是李白的绣口吐出的半个盛唐，是呼风唤雨的神都洛阳</h2>
      <!-- <h3 class="subtitle">盛世长安</h3> -->
    </div>
    <div class="timeline">
      <div class="item" data-text="李白有次客居洛阳，夜深人静时，不知从什么地方突然传出了一阵玉笛之声。这凄清婉转的笛声随着春风在夜幕中听得越来越清楚了，原来是一曲思乡怀家的《折杨柳》，于是李白写下了《春夜洛城闻笛》以表达思乡之情。">
        <div class="content">
          <img src="./images/春夜洛城闻笛.jpg" alt="" class="img" />
          <h2 class="content-title"> </h2>
          <p class="content-desc1">
            “谁家玉笛暗飞声，散入春风满洛城。此夜曲中闻折柳，何人不起故园情。”
          </p>
        </div>
      </div>

      <div class="item" data-text="有这样一个传说，欧阳修梦见牡丹仙子带他游览八个花园，问他哪个花园里的花最漂亮？欧阳修说是第八个，仙子告诉他第八个花园就是洛阳。梦醒之后，欧阳修举办了一场牡丹评选会，最终一致认为洛阳的牡丹最佳。欧阳修随即诗兴大发，赋《洛阳牡丹图》一首。">
        <div class="content">
          <img src="./images/洛阳牡丹图.jpg" alt="" class="img" />
          <h2 class="content-title"></h2>
          <p class="content-desc2">
            "洛阳地脉花最宜，牡丹尤为天下奇。"
          </p>
        </div>
      </div>

      <div class="item" data-text="王湾泛舟北固山下，看到了青山绿水，还有残夜归雁的情景。于是想起了“雁足传书”的故事，自己也想托雁儿给自己捎上一封书信个远在洛阳的家人，希望它们在飞过洛阳的时候，替自己问候一下家里人，同时也向他们报平安。于是写下了这首诗《次北固山下》。">
        <div class="content">
          <img src="./images/归雁洛阳边.jpg" alt="" class="img" />
          <h2 class="content-title"></h2>
          <p class="content-desc3">
            "客路青山外，行舟绿水前。潮平两岸阔，风正一帆悬。海日生残夜，江春入旧年。乡书何处达，归雁洛阳边。"
          </p>
        </div>
      </div>

      <div class="item" data-text="韦庄客居洛阳，正是国家多事之秋，战乱频仍，民不聊生；自己则浪迹他乡一事无成。洛阳多才子，但他们却因为生不逢时而垂老他乡。一片明丽的春色，一派盎然的春意。洛阳的大好春光未能使之陶醉，反而触发了他的隐忧，于是韦庄写下了《菩萨蛮·洛阳城里春光好》">
        <div class="content">
          <img src="./images/洛阳城里春光好.jpg" alt="" class="img" />
          <h2 class="content-title"></h2>
          <p class="content-desc4">
            “洛阳城里春光好，洛阳才子他乡老。柳暗魏王堤，此时心转迷。桃花春水渌，水上鸳鸯浴。凝恨对残晖，忆君君不知。”
          </p>
        </div>
      </div>

      <div class="item" data-text="洛阳，一座历史悠久的古都！这里曾是多个朝代的政治、经济、文化中心，古迹遍布，如龙门石窟、白马寺等，让人仿佛穿越回古代。而且，洛阳的美食也是一绝，比如洛阳水席，也让人回味无穷。">
        <div class="content">
          <img src="./images/洛阳.jpg" alt="" class="img" />
          <h2 class="content-title"></h2>
          <p class="content-desc5">
             牡丹之城
          </p>
        </div>
      </div>

      
    </div>
    <div class="footer">
      <img
        @click="router.push('/gucheng')"
        class="item--active"
        src="/src/assets/images/蝴蝶.png"
        alt=""
      />
    </div>
  </div>
</template>


<script setup>
import { useRouter } from "vue-router";
import "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js";
import { onMounted } from "vue";

const router = useRouter();
onMounted(() => {
  (function ($) {
    $.fn.timeline = function () {
      var selectors = {
        id: $(this),
        item: $(this).find(".item"),
        activeClass: "item--active",
        img: ".img",
      };
      // 将第一个时间轴项目激活，并设置时间轴背景图片为第一个项目的图片
      selectors.item.eq(0).addClass(selectors.activeClass);
      selectors.id.css(
        "background-image",
        "url(" + selectors.item.first().find(selectors.img).attr("src") + ")"
      );
      // 获取时间轴项目的总数
      var itemLength = selectors.item.length;
      // 当页面滚动时，触发滚动事件
      $(window).scroll(function () {
        var max, min;
        // 获取页面滚动的距离
        var pos = $(this).scrollTop();
        selectors.item.each(function (i) {
          // 获取当前时间轴项目的最小和最大高度
          min = $(this).offset().top;
          max = $(this).height() + $(this).offset().top;
          var that = $(this);
          // 如果滚动到最后一个项目，并且超过了当前项目高度的一半，
          // 则将最后一个项目设置为激活状态，并设置背景图片为最后一个项目的图片
          if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
            selectors.item.removeClass(selectors.activeClass);
            selectors.id.css(
              "background-image",
              "url(" +
                selectors.item.last().find(selectors.img).attr("src") +
                ")"
            );
            selectors.item.last().addClass(selectors.activeClass);
          }
          // 如果当前滚动位置在当前项目的最小和最大高度之间，
          // 则将当前项目设置为激活状态，并设置背景图片为当前项目的图片
          else if (pos <= max - 10 && pos >= min) {
            selectors.id.css(
              "background-image",
              "url(" + $(this).find(selectors.img).attr("src") + ")"
            );
            selectors.item.removeClass(selectors.activeClass);
            $(this).addClass(selectors.activeClass);
          }
        });
      });
    };
  })(jQuery);
  /*
        最后，我们调用 timeline 插件并传入时间轴的 ID 作为参数。
        这将启用时间轴插件并为该时间轴绑定滚动事件。
        */
  $("#shell").timeline();
});
</script>


<style>

.content-desc5 {
  color: rgba(254, 251, 251, 0.7);
  font-size: 50px;
  margin: 50;
  box-sizing: border-box;
  line-height: 1.5;
  padding-top:50px;
  padding-left:50px;
}

@font-face {
  font-family: "行楷";
  src: url(@/assets/writing/YeZiGongChangJingHongXingKai-2.ttf); /* 根据实际情况选择不同的字体格式 */
   
}

@font-face {
  font-family: YeZiGongChangJingHongXingKai;
  src: url(@/assets/writing/YeZiGongChangJingHongXingKai-2.ttf);
}

@font-face {
  font-family: "行草";
  src: url(@/assets/writing/YeZiGongChangZuiHanJiangXingCao-2.ttf); /* 根据实际情况选择不同的字体格式 */
}
* {
  padding: 0;
  margin: 0;
}


@keyframes fadeInAndSlideLeft {
    0% {
        opacity: 0;
        transform: translateX(-100%);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}


.shell {
  width: 100%;
  position: relative;
  padding: 80px 0;
  transition: 0.3s ease 0s;
  background-attachment: fixed;
  background-size: cover;
}

.shell:before {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(99, 99, 99, 0.8);
  content: "";
}

.header {
  width: 100%;
  text-align: center;
  margin-bottom: 80px;
  position: relative;
  /* text-shadow: #90c44c; */
}

.title {
  text-align: center;
  color: #9bc952;
  text-shadow:2px 2px 2px #529922;
  font-size: 50px;
  width: 34em;
  opacity: 0;
  transform: translateX(-100%);
  animation: fadeInAndSlideLeft 4s forwards;
  white-space: nowrap;
  overflow: hidden;
  font-family: "行楷", serif;
  font-weight: normal;
  margin: 0;
}

.timeline {
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 700px;
  position: relative;
}

.content-title {
  font-weight: normal;
  font-size: 66px;
  margin: -10px 0 0 0;
  transition: 0.4s;
  padding: 0 10px;
  box-sizing: border-box;
  color: #fff;
}

.content-desc1, .content-desc2, .content-desc3, .content-desc4{
  margin: 50;
  font-size: 30px;
  box-sizing: border-box;
  line-height: 1.5;
  padding-top:50px;
}
.content-desc1 {
  color: rgba(136, 227, 118, 0.7);
}
.content-desc2 {
  color: rgba(239, 69, 63, 0.7);
  text-shadow: 1px 1px 1px #f19797;
}
.content-desc3 {
  color: rgba(245, 147, 60, 0.7);
}
.content-desc4 {
  color: rgba(248, 100, 142, 0.7);
  text-shadow: 1px 1px 1px #f7a7d8;
}

.timeline:before {
  position: absolute;
  left: 50%;
  width: 2px;
  height: 100%;
  margin-left: -1px;
  content: "";
  background: rgba(255, 255, 255, 0.07);
}

.item {
  padding: 40px 0;
  opacity: 0.3;
  filter: blur(2px);
  transition: 0.5s;
  box-sizing: border-box;
  width: calc(50% - 40px);
  display: flex;
  position: relative;
  transform: translateY(-80px);
  font-family: "行草";
}

.item:before {
  content: attr(data-text);
  letter-spacing: 3px;
  width: 100%;
  position: absolute;
  color: rgba(245, 249, 245, 0.5);
  font-family: "行草";
  font-size: 30px;
  border-left: 2px solid rgba(214, 236, 218, 0.5);
  top: 20px;
  margin-top: -5px;
  padding-left: 15px;
  opacity: 0;
  right: calc(-100% - 56px);
  letter-spacing: 5px;
}

.item:nth-child(even) {
  align-self: flex-end;
}

.item:nth-child(even):before {
  right: auto;
  text-align: right;
  left: calc(-100% - 56px);
  padding-left: 0;
  border-left: none;
  border-right: 2px solid rgba(255, 255, 255, 0.5);
  padding-right: 15px;
}

.item--active {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0px);
}

.item--active:before {
  top: 20%;
  transition: 0.3s all 0.2s;
  opacity: 1;
}

.item--active .content-title {
  margin: -50px 0 20px 0;
}

.img {
  /* width:600px; */
  height:450px;
  max-width: 100%;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
}

.subtitle {
  color: rgba(255, 255, 255, 0.5);
  font-size: 16px;
  letter-spacing: 5px;
  margin: 10px 0 0 0;
  font-weight: normal;
}

.footer {
  padding: 95px 0;
  /* float: right; */
  text-align: right;

}

.footer img {
  background: none;
  width: 200px;
  margin-right: 200px;
}

.footer a {
  color: #999;
  display: inline-block;
}

@media only screen and (max-width: 767px) {
  .item {
    align-self: baseline !important;
    width: 100%;
    padding: 0 30px 150px 80px;
  }

  .item:before {
    left: 10px !important;
    padding: 0 !important;
    top: 50px;
    text-align: center !important;
    width: 60px;
    border: none !important;
  }

  .item:last-child {
    padding-bottom: 40px;
  }
}

@media only screen and (max-width: 767px) {
  .timeline:before {
    left: 40px;
  }
}
</style>