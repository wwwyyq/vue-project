<template>
  <div class="shell" id="shell">
    <div class="header">
      <h2 class="title">“渭水收暮雨，处处多新泽。宫苑傍山明，云林带天碧。”这就是你吗？最美的长安。</h2>
      <!-- <h3 class="subtitle">盛世长安</h3> -->
    </div>
    <div class="timeline">
      <div class="item" data-text="唐代诗人孟郊苦尽甘来，四十多岁中了进士。一日与年轻进士宴席，欣赏着浓艳的花瓣，想着这种深色牡丹，多生于豪贵私苑，昂贵无比。贫寒的他平日罕见，如今手中有一枝，满足赏玩。他想到生活会有更多改变，心情愈发高兴，于是作下了这首诗">
        <div class="content">
          <img src="./images/一日看尽长安花4.jpg" alt="" class="img" />
          <h2 class="content-title"> </h2>
          <p class="content-desc1">
            “昔日龌龊不足夸，今朝放荡思无涯。春风得意马蹄疾，一日看尽长安花。”
          </p>
        </div>
      </div>

      <div class="item" data-text="唐玄宗在晚年时昏庸腐败,整天与杨贵妃纵情享乐，不理朝政。有一年杨贵妃过生日，忽然想吃新鲜的荔枝。为了博得杨贵妃的欢心，唐玄宗耗费巨资人力将荔枝从岭南运至长安。杜牧在游览华清宫时，得知此事，深觉皇帝荒唐，于是写下《过华清宫》">
        <div class="content">
          <img src="./images/无人知是荔枝来.jpg" alt="" class="img" />
          <h2 class="content-title"></h2>
          <p class="content-desc2">
            "长安回望绣成堆，山顶千门次第开。一骑红尘妃子笑，无人知是荔枝来。"
          </p>
        </div>
      </div>

      <div class="item" data-text="贾岛在京城长安结识了隐居不仕的吴处士，二人结为莫逆之交。吴处士离开长安后，贾岛骑着毛驴在深秋的朱雀大街上行走，黄叶萧瑟。贾岛感怀之情，吟成《忆江上吴处士》">
        <div class="content">
          <img src="./images/落叶满长安.jpg" alt="" class="img" />
          <h2 class="content-title"></h2>
          <p class="content-desc3">
            “吴处士扬帆离闽国，月圆月缺相交替。秋风吹起渭水涟，长安街头落叶舞。夜聚此地怀旧时，雷雨交加心更寒。兰桡未归远航路，消息随云向海边。”
          </p>
        </div>
      </div>

      <div class="item" data-text="韩愈有天漫步京城，被一场突如其来的春雨所触动。那雨丝无声滋润着大地，仿佛给万物带来了生机。这早春之景，虽不及盛春时节烟柳满城的繁华，却因其含蓄、微妙而更显珍贵。韩愈深感这便是春天最美的时刻，胜过后来的一切繁花似锦。于是，韩愈写下了这首《早春呈水部张十八员外》。">
        <div class="content">
          <img src="./images/天街小雨润如酥.jpg" alt="" class="img" />
          <h2 class="content-title"></h2>
          <p class="content-desc4">
            “天街小雨润如酥，草色遥看近却无。最是一年春好处，绝胜烟柳满皇都。”
          </p>
        </div>
      </div>

      <div class="item" data-text="这座古都，曾是盛唐帝国的中心，如今以其博大精深的历史文化遗产，吸引着世界各地的游客。漫步在大雁塔前，你能感受到玄奘西行求法的虔诚；登上骊山，眺望长安城的壮丽繁华；走进碑林，聆听历史长卷的低语。每一处景致，都如同一幅活生生的历史画卷，在你眼前徐徐展开。而当夜幕降临，灯火阑珊，长安又会以别样的姿态，让你在夜色中感受到古都的深邃和魅力。">
        <div class="content">
          <img src="./images/长安.jpg" alt="" class="img" />
          <h2 class="content-title"></h2>
          <p class="content-desc5">
            远赴人间惊鸿宴，一睹大唐盛世颜
          </p>
        </div>
      </div>

      
    </div>
    <div class="footer">
      <img
        @click="router.push('/gucheng')"
        class="item--active"
        src="/src/assets/images/云朵按钮4.png"
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
  color: #e3f1d1;
  text-shadow:2px 2px 2px #38a738;
  font-size: 40px;
  width: 40em;
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
.content-desc1, .content-desc4 {
  color: rgba(136, 227, 118, 0.7);
}
.content-desc2 {
  color: rgba(223, 248, 85, 0.7);
}
.content-desc3 {
  color: rgba(237, 223, 99, 0.7);
}
.content-desc5 {
  color: rgba(254, 251, 251, 0.7);
  font-size: 40px;
  margin: 50;
  box-sizing: border-box;
  line-height: 1.5;
  padding-top:50px;
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
  width: 300px;
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