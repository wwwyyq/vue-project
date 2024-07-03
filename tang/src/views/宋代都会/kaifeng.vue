<template>
    <div class="shell" id="shell">
      <div class="header">
        <h2 class="title">恍惚一梦汴京故里，富贵迷人眼，快意驰骋</h2>
      </div>
      <div class="timeline">
        <div class="item" data-text="晚年孟元老在与亲友聚谈时发现，年轻人对过去的岁月并不感冒，而自己作为尚在的“白头宫女”，若不能把记忆中的开封府写下来，留下这段盛世年华，就太可惜了。于是孟元老写下了《东京梦华录》。那真是一段绚丽的生活，一片繁华的世界。上至王公贵族，下及百姓日常生活，巨细无遗，收罗笔下。">
          <div class="content">
            <img src="./images/东京梦华录2.jpg" alt="" class="img" />
            <h2 class="content-title"></h2>
            <p class="content-desc2">
              "举目则青楼画阁，绣户珠帘。雕车竞驻于天街，宝马争驰于御路，金翠耀目，罗绮飘香。"
            </p>
          </div>
        </div>
        
        <div class="item" data-text="“仁宗盛治”是中国历史上经济最繁荣，文教最发达，科技最兴盛，政治最廉洁，春秋以来言论最开放的时期，是中国封建王朝社会经济文化的顶峰。词人柳永也生活在这一时期。他在京城感受到了城市的繁华和民众的自由欢乐，他带着新鲜和喜悦的心情，创作了这首《破阵乐·露花倒影》，来赞美和歌颂太平盛世。">
          <div class="content">
            <img src="./images/露花倒影.jpg" alt="" class="img" />
            <h2 class="content-title"> </h2>
            <p class="content-desc1">
              “露花倒影，烟芜蘸碧，灵沼波暖。金柳摇风树树，系彩舫龙舟遥岸。千步虹桥，参差雁齿，直趋水殿。”
            </p>
          </div>
        </div>
  
        <div class="item" data-text="清澈的春水环绕着宫墙自由自在地流淌，淡黄色的小蝴蝶，伴着柔和的春风正翩翩起飞舞动。王安石看到这迷人的春色，感慨于国家的稳定繁荣，可是在春天美好的景致中回到家乡，让王安石生出淡淡忧伤，于是写下这首《寄韩持国》，以表达对于朋友离去和时光流逝的感慨。">
          <div class="content">
            <img src="./images/鹅黄小碟.jpg" alt="" class="img" />
            <h2 class="content-title"></h2>
            <p class="content-desc3">
              "渌绕宫城漫漫流，鹅黄小蝶弄春柔。问知公子朝陵去，归得花时却自愁。"
            </p>
          </div>
        </div>

        <div class="item" data-text="开封，古都韵味悠长，仿佛穿越回宋代繁华！清明上河图生动再现昔日盛景，龙亭公园尽显皇家气派。这里的历史文化深厚，美食也诱人，灌汤包子、桶子鸡让人回味无穷。">
          <div class="content">
            <img src="./images/开封.jpg" alt="" class="img" />
            <h2 class="content-title"></h2>
            <p class="content-desc5">
              遗风犹存，梦回往昔
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
    color: #f48ac6;
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
    color: rgba(134, 241, 218, 0.7);
  }
  .content-desc2 {
    color: rgba(244, 184, 217, 0.7);
    /* text-shadow: 1px 1px 1px #72ec57; */
  }
  .content-desc3 {
    color: rgba(170, 247, 102, 0.7);
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
  .content-desc5 {
  color: rgba(254, 251, 251, 0.7);
  font-size: 40px;
  margin: 50;
  box-sizing: border-box;
  line-height: 1.5;
  padding-top:50px;
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