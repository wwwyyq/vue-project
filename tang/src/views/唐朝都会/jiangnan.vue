<template>
  <div class="shell" id="shell">
    <div class="header">
      <h2 class="title">细雨轻吟，红墙绿瓦，烟雨江南风姿绰约</h2>
      <!-- <h3 class="subtitle">盛世长安</h3> -->
    </div>
    <div class="timeline">
      <div class="item" data-text="在战火中颠沛流离的韦庄，后来到了江南。与饱经战乱的中原不同，这里显得那么的安然与繁荣。山水清丽旖旎，在这如画如梦的美景中，韦庄一颗饱经沧桑的心慢慢地被抚慰着。只是他总还是会想到年少时的长安，暂居过的洛阳。可是他再也回不去了，怀着复杂的情绪他写下了《菩萨蛮-人人尽说江南好》">
        <div class="content">
          <img src="./images/人人尽说江南好.jpg" alt="" class="img" />
          <h2 class="content-title"></h2>
          <p class="content-desc2">
            "人人尽说江南好，游人只合江南老。春水碧于天，画船听雨眠。垆边人似月，皓腕凝霜雪。未老莫还乡，还乡须断肠。"
          </p>
        </div>
      </div>
      
      <div class="item" data-text="在逃难的路上，白居易看到黎民百姓苦不堪言。然而到了江南，却是另一番景象，人间太平，风景秀丽。白居易在苏杭做官时，以身作则，为百姓做了不少的好事。837年初夏，六十五岁的白居易住在洛阳，想起当年在江南任官的时候，更想起了江南的繁华，江南的美景，思景怡情，写下了著名的《忆江南》。">
        <div class="content">
          <img src="./images/日出江花红胜火.jpg" alt="" class="img" />
          <h2 class="content-title"> </h2>
          <p class="content-desc1">
            “江南好，风景旧曾谙。日出江花红胜火，春来江水绿如蓝。能不忆江南？江南忆，最忆是杭州；山寺月中寻桂子，郡亭枕上看潮头。何日更重游？江南忆，其次忆吴宫；吴酒一杯春竹叶，吴娃双舞醉芙蓉。早晚复相逢？”
          </p>
        </div>
      </div>

      <div class="item" data-text="杜牧生活的晚唐时代，唐朝已走向衰落，满目疮痍，宦官专政，百姓深受其苦，杜牧有感于此，当他目睹江南繁华时，想到当年虔诚事佛的梁朝，勾起了对历史的追思，心生感慨，写下《江南春》">
        <div class="content">
          <img src="./images/江南春.jpg" alt="" class="img" />
          <h2 class="content-title"></h2>
          <p class="content-desc3">
            "千里莺啼绿映红，水村山郭酒旗风。南朝四百八十寺，多少楼台烟雨中。"
          </p>
        </div>
      </div>

      <div class="item" data-text="暮春时节，在阔别四十多年后，杜甫与友人李龟年在潭州（今湖南长沙） 偶然重逢。此时二人境遇相似，都居无定所，四处漂泊。相同的境遇、凄凉的晚年生活、过往生活的巨大反差，让诗人感慨良多，就此写下《江南逢李龟年》，借以抒发与历经苦难战乱的故人久别重逢后的沉重感受。">
        <div class="content">
          <img src="./images/落花时节又逢君.jpg" alt="" class="img" />
          <h2 class="content-title"></h2>
          <p class="content-desc4">
            “岐王宅里寻常见，崔九堂前几度闻。正是江南好风景，落花时节又逢君。”
          </p>
        </div>
      </div>

      <div class="item" data-text="江南水乡，梦回千年。碧水绕古桥，烟雨笼轻纱，粉墙黛瓦间藏着岁月的温柔。漫步在青石板路上，仿佛能听见历史的低语，每一砖一瓦都诉说着千年的故事。那里，是诗与画的完美融合，让人沉醉，不愿醒来。">
        <div class="content">
          <img src="./images/江南.jpg" alt="" class="img" />
          <h2 class="content-title"></h2>
          <p class="content-desc5">
            柔情水乡
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
.content-desc5 {
  color: rgba(254, 251, 251, 0.7);
  font-size: 40px;
  margin: 50;
  box-sizing: border-box;
  line-height: 1.5;
  padding-top:50px;
  padding-left: 70px;
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
  color: #a5fe57;
  /* text-shadow:2px 2px 2px #f0998a; */
  font-size: 50px;
  width: 34em;
  opacity: 0;
  transform: translateX(-100%);
  animation: fadeInAndSlideLeft 4s forwards;
  white-space: nowrap;
  overflow: hidden;
  font-family: "行草", serif;
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
  color: rgba(252, 12, 12, 0.7);
}
.content-desc2 {
  color: rgba(103, 246, 78, 0.7);
  /* text-shadow: 1px 1px 1px #72ec57; */
}
.content-desc3 {
  color: rgba(66, 189, 52, 0.7);
}
.content-desc4 {
  color: rgba(98, 219, 249, 0.7);
  /* text-shadow: 1px 1px 1px #f7a7d8; */
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