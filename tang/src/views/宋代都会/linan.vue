<template>
    <div class="shell" id="shell">
      <div class="header">
        <h2 class="title">这江南不过下了一场雨，我却怎的淋了一身诗意</h2>
        <!-- <h3 class="subtitle">盛世长安</h3> -->
      </div>
      <div class="timeline">
        <div class="item" data-text="北宋靖康元年，金人攻陷北宋首都，宋高宗逃到江南，在临安即位。宋高宗被“人间天堂”西湖的美景吸引，对北宋亡国的惨痛事实抛诸脑后，只想偏安一隅，大肆享乐。林升目睹风雨飘摇的国家和统治者奢靡混乱的生活，愤慨万千但又无济于事，于是写下这首《临安题邸》">
          <div class="content">
            <img src="./images/西湖歌舞几时休.jpg" alt="" class="img" />
            <h2 class="content-title"></h2>
            <p class="content-desc2">
              "山外青山楼外楼，西湖歌舞几时休？暖风熏得游人醉，直把杭州作汴州。"
            </p>
          </div>
        </div>
        
        <div class="item" data-text="陆游写这首《临安春雨初霁》时已六十二岁，诗人少年时的意气风发与壮年时的裘马轻狂，都随着岁月的流逝一去不返。虽然他光复中原的壮志未衰，但对偏安一隅的南宋小朝廷的软弱与黑暗，日益见得明白。即便如此，在爱国主张不得实现的悲愁与愤懑下，他依然怡然自得似的刻画了春雨季节西湖畔的美丽风光。用托物言志的手法，表达了自己的理想。">
          <div class="content">
            <img src="./images/临安春雨初霁.jpg" alt="" class="img" />
            <h2 class="content-title"> </h2>
            <p class="content-desc1">
              “世味年来薄似纱，谁令骑马客京华。小楼一夜听春雨，深巷明朝卖杏花。矮纸斜行闲作草，晴窗细乳戏分茶。素衣莫起风尘叹，犹及清明可到家。”
            </p>
          </div>
        </div>
  
        <div class="item" data-text="这一天苏轼在西湖游宴，起初阳光明丽，后来下起了雨。在灿烂的阳光照耀下，西湖水波荡漾，波光闪闪，十分美丽。在雨幕笼罩下，西湖周围的群山，迷迷茫茫，若有若无，非常奇妙。苏轼感到心旷神怡，于是写下这首名作《饮湖上初晴后雨》">
          <div class="content">
            <img src="./images/饮湖上初晴后雨2.jpg" alt="" class="img" />
            <h2 class="content-title"></h2>
            <p class="content-desc3">
              "水光潋滟晴方好，山色空蒙雨亦奇。欲把西湖比西子，浓妆淡抹总相宜。"
            </p>
          </div>
        </div>
  
        <div class="item" data-text="一日诗人虞俦乘船出行，沿途的景色美丽富有生机，他看到雨中送行人，看到宁静的河流，远处的山峰，夕阳下波光粼粼的水面，这是多么美丽而富有诗意的世界，怀着对生活的美好向往，虞俦写下了这首《临安泛舟》">
          <div class="content">
            <img src="./images/饮湖上初晴后雨.jpg" alt="" class="img" />
            <h2 class="content-title"></h2>
            <p class="content-desc4">
              “雨送行人上短篷，东君更借一帆风。桃源春水半稿稳，锦谷清溪几曲通。远岫天边凝晚碧，夕阳波面泛微红。舟行又胜山行好，两岸芳菲一顾中。”
            </p>
          </div>
        </div>
        <div class="item" data-text="临安，古韵今风交相辉映，南宋皇城遗址诉说着千年故事。 西湖美景如画，龙井茶香四溢，丝绸细腻如云。漫步古街小巷，仿佛能听到历史的低语。">
          <div class="content">
            <img src="./images/临安.jpg" alt="" class="img" />
            <h2 class="content-title"></h2>
            <p class="content-desc5">
              山水相依，古韵犹存
            </p>
          </div>
        </div>
      </div>
      <div class="footer">
        <img
          @click="router.push('/gucheng')"
          class="item--active"
          src="/src/assets/images/太阳.png"
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
  .content-desc5 {
  color: rgba(254, 251, 251, 0.7);
  font-size: 40px;
  margin: 50;
  box-sizing: border-box;
  line-height: 1.5;
  padding-top:50px;
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
    color: #95f2fa;
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
    color: rgba(103, 211, 108, 0.7);
  }
  .content-desc2 {
    color: rgba(132, 212, 244, 0.7);
    /* text-shadow: 1px 1px 1px #72ec57; */
  }
  .content-desc3 {
    color: rgba(157, 246, 134, 0.7);
  }
  .content-desc4 {
    color: rgba(246, 172, 122, 0.7);
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