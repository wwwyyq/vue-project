<template>
    <div class="shell" id="shell">
      <div class="header">
        <h2 class="title">九天开出一成都，万户千门入画来</h2>
        <!-- <h3 class="subtitle">盛世长安</h3> -->
      </div>
      <div class="timeline">
        <div class="item" data-text="1032年，时年48岁的柳永，从渭南来到成都。此前他已经在杭州、苏州、开封等地流连，颇具声名，是个见过大世面的人。
初来成都，他便被成都繁荣、壮丽的景象震惊了，填了一阕《一寸金·井络天开》的词，以赋体形式极力铺陈，宏观上把握宋代成都的自然风光、风土人情。">
          <div class="content">
            <img src="./images/一寸金.jpg" alt="" class="img" />
            <h2 class="content-title"></h2>
            <p class="content-desc2">
              "地胜异、俗多游赏，轻裘俊、靓妆艳冶。当春昼，摸石江边，花溪畔景如画。"
            </p>
          </div>
        </div>
        
        <div class="item" data-text="柳永离开成都二十余年后，写出名句“红杏枝头春意闹”的宋祁，到成都担任益州知州。当时他已年满58岁，在成都却找到了少年般的乐趣，他用词作《锦缠道》记录了一次活泼生动的春游经历。他的词作在委婉细腻中透露出对生活的热爱和对世事的深思。">
          <div class="content">
            <img src="./images/锦缠道.jpg" alt="" class="img" />
            <h2 class="content-title"> </h2>
            <p class="content-desc1">
             “燕子呢喃，景色乍长春昼。睹园林、万花如绣，海棠经雨胭脂透。柳展宫眉，翠拂行人首。”
            </p>
          </div>
        </div>
  
        <div class="item" data-text="三苏父子赴京师赶考，从成都出发，那时苏洵47岁，苏轼19岁，苏辙17岁。后来苏轼、苏辙也多次往来成都。虽然停留时间都不长，但苏轼对成都一直念念不忘，在《临江仙·送王箴》词中，王箴是苏轼的妻弟，因为送别妻弟想起成都，且一思量起来就眼泪汪汪的，可见用情之深。">
          <div class="content">
            <img src="./images/孤客自悲凉.jpg" alt="" class="img" />
            <h2 class="content-title"></h2>
            <p class="content-desc3">
              "忘却成都来十载，因君未免思量。凭将清泪洒江阳。故山知好在，孤客自悲凉。"
            </p>
          </div>
        </div>
  
        <div class="item" data-text="范成大在蜀虽只有二年时间，却对成都很有感情，充满赞誉之辞。他认为成都的繁华与扬州很是相似，又将成都万岁池与杭州的西湖相提并论。范成大在词作《梦玉人引》中描述的锦城成都是如画图般绚烂。">
          <div class="content">
            <img src="./images/成都海棠.jpg" alt="" class="img" />
            <h2 class="content-title"></h2>
            <p class="content-desc4">
              “碧鸡坊里花如屋，燕王宫下花成谷。箫鼓生春，遍锦城如画”
            </p>
          </div>
        </div>
        <div class="item" data-text="成都，一座充满魅力的城市。它不仅拥有悠久的历史和丰富的文化底蕴，还以美食天堂著称，火锅、串串香让人垂涎欲滴。在这里，你可以感受到悠闲的生活节奏，宽窄巷子、锦里古街古色古香，让人流连忘返。">
          <div class="content">
            <img src="./images/成都.jpg" alt="" class="img" />
            <h2 class="content-title"></h2>
            <p class="content-desc5">
              天府之国，美食之都
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
  .content-desc5 {
  color: rgba(254, 251, 251, 0.7);
  font-size: 40px;
  margin: 50;
  box-sizing: border-box;
  line-height: 1.5;
  padding-top:50px;
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
    color: #a0f5e9;
    /* text-shadow:2px 2px 2px #f0998a; */
    font-size: 50px;
    width: 35em;
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
    color: rgba(249, 163, 169, 0.7);
  }
  .content-desc2 {
    color: rgba(249, 210, 236, 0.7);
    /* text-shadow: 1px 1px 1px #72ec57; */
  }
  .content-desc3 {
    color: rgba(17, 197, 191, 0.7);
  }
  .content-desc4 {
    color: rgba(204, 190, 252, 0.7);
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