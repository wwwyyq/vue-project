<template>
   <div class="body">
     <div class="container">
        <section id="img-one" class="img">
            <h1>飞将辛弃疾</h1>
        </section>
        <section class="content-one">
            <div class="text-box">
                <div class="cnt2">
                   <h3>“少年报国志”</h3>
                <p>辛弃疾，出生在一个动荡不安的年代，生活的地方也已被金人所占领。但在祖父辛赞的教导下，身为汉人的强烈民族情怀始终根植于辛弃疾的心中，自幼便立下了恢复疆土的宏大目标，并一直为此不断努力奋斗着。</p>
            </div>
            </div>
        </section>
        <section class="content-two">
          <div class="text-box">
             <div class="cnt">
             <button id="pl" @click="toggleDiv">朝来塞雁先还--山东济南</button>
             <p>作者初归南宋急欲报国、收复失土，深恐自己磋砣岁月，年华虚度。者深恐这一年的花由盛开又复败落，而失地却未能收复，有家仍难归去。如今国家安康，我们再见此景，又会作何感想？</p>
             <transition name="slide-fade">
                <div class="poem5" v-if="showDiv">
             <p>《汉宫春•立春日》<br/> 春已归来，看美人头上，袅袅春幡。无端风雨，未肯收尽余寒。年时燕子，料今宵梦到西园。浑未辨，黄柑荐酒，更传青韭堆盘？却笑东风，从此便薰梅染柳，更没些闲。闲时又来镜里，转变朱颜。清愁不断，问何人会解连环？生怕见花开花落，朝来塞雁先还。</p>
              </div>
              </transition>
          </div>
             </div>
          </section>

        <section class="content-three">
            <div class="text-box">
                <div class="cnt2">
               <h3>“青年赴国难”</h3>
                 <p>年少有为的辛弃疾不久便在起义军中担任了掌书记一职，凭借自己的骁勇与谋略，逐步得到了赏识与重用。这阶段的诗词也多表热血报国之情</p>
            </div>
            </div>
        </section>
        <section class="content-four">
          <div class="text-box">
             <div class="cnt">
               <button id="pl" @click="toggleDi">拍手笑沙鸥——江苏南京</button>
          <p>诗中说，苍翠的群山似乎很想同您这位高人交谈。它们联翩而来，络绎不绝，有似万马奔腾。如此景色，怎可错过！</p> 
          <transition name="slide-fade">
             <div class="poem5" v-if="showDi">
          <p>《菩萨蛮·赏心亭为叶丞相赋》<br/>青山欲共高人语，联翩万马来无数。烟雨却低回，望来终不来。人言头上发，总向愁中白。拍手笑沙鸥，一身都是愁。</p>
          </div>
          </transition>
       </div>
          </div>
        </section>
        <section class="content-five">
            <div class="text-box">
                <div class="cntl">
                   <button id="pl" @click="toggleD">欲说还休—江西上饶</button>
                   <p>作者胸中的忧愁不是个人的离愁别绪，而是忧国伤时之愁。虽在言天气，“天凉好个秋”。这句结尾表面形似轻脱，实则十分含蓄，充分表达了作者之“愁”的深沉博大。</p>
                   <transition name="slide-fadeL">
                      <div class="poem5l" v-if="showD">
                   <p>《丑奴儿·书博山道中壁》<br/>少年不识愁滋味，爱上层楼。爱上层楼，为赋新词强说愁。而今识尽愁滋味，欲说还休。欲说还休，却道天凉好个秋。</p>
                   </div>
                   </transition>
                </div>
            </div>
        </section>
        <section class="content-six">
            <div class="text-box">
                <div class="cnt2">
                   <h3>“晚年独飘零”</h3>
                <p>
                   晚年时辛弃疾选择在江西上饶隐居，好像是一位平凡的老农一样。辛弃疾在隐居期间写下过很多的词，除了描写当时的自然风光，更多的还是表达一种孤独的心境，以及骨子里的家国情怀，所以他的词意境凄美，每一首都感人至深。
               </p>
            </div>
            </div>
        </section>
        <section class="content-seven">
          <div class="text-box">
             <div class="cntl">
               <h4></h4>
               <button id="pl"@click="toggle">树犹如此——江苏南京</button>
           <p>登上建康的赏心亭，极目远望祖国的山川风物，百感交集，更加痛惜自己满怀壮志而老大无成…穿越千年后站在此处，且看如今山河壮丽！
          </p>
          <transition name="slide-fadeL">
             <div class="poem5l" v-if="show">
          <p>《水龙吟·登建康赏心亭》<br/>
           楚天千里清秋，水随天去秋无际。遥岑远目，献愁供恨，玉簪螺髻。落日楼头，断鸿声里，江南游子。把吴钩看了，栏杆拍遍，无人会，登临意。休说鲈鱼堪脍，尽西风，季鹰归未？求田问舍，怕应羞见，刘郎才气。可惜流年，忧愁风雨，树犹如此！倩何人唤取，红巾翠袖，揾英雄泪！
          </p>
         </div>
         </transition>
         </div>
        </div>
       </section>
        <section class="content-eight">
            <div class="text-box">
                <div class="cnt">
                  <p><br/><br/>辛弃疾南渡之后的第十七年，时年四十岁，被朝廷支来支去的他再次由湖北转运副使改调湖南转运副使。现实与他恢复失地的志愿相去愈来愈遥远了。他感慨万千，写下了这首词。然而我想，彼时稼轩只觉烟柳断肠处，而今再看，或当有不同感…</p>
                  <transition name="slide-fade">
                   <div  class="poem5" v-if="sho">
                  <button id="pl" @click="toggl">天涯芳草无归路—湖南长沙</button>
                   <p>《摸鱼儿·更能消几番风雨》<br/>更能消、几番风雨，匆匆春又归去。惜春长怕花开早，何况落红无数。春且住，见说道、天涯芳草无归路。怨春不语。算只有殷勤，画檐蛛网，尽日惹飞絮。长门事，准拟佳期又误。蛾眉曾有人妒。千金纵买相如赋，脉脉此情谁诉？君莫舞，君不见、玉环飞燕皆尘土！闲愁最苦！休去倚危栏，斜阳正在，烟柳断肠处。</p>
                   </div>
                   </transition>
                </div>
            </div>
            <div class="b">
                <router-link to="/gucheng">
                <img id="button" src="/src/assets/images/首页.png" alt="Button">
                </router-link>
             </div>
        </section>          
      </div>
     </div>
   </template>
   <script>
   export default {
   data() {
      return {
         showDiv: false,
         showDi: false,
         showD: false,
         show: false,
         sho: false
       }
     },
     methods: {
       toggleDiv() {
         this.showDiv = true;
         setTimeout(() => {
           this.showDiv = false;
         }, 1000);
       },
       toggleDi() {
         this.showDi = true;
         setTimeout(() => {
           this.showDi = false;
         }, 1000);
       },
       toggleD() {
         this.showD = true;
         setTimeout(() => {
           this.showD = false;
         }, 1000);
       },
       toggle() {
         this.show = true;
         setTimeout(() => {
           this.show = false;
         }, 1000);
       },
       toggl() {
         this.sho = true;
         setTimeout(() => {
           this.sho = false;
         }, 1000);
       }
      }
   }
   </script>
   <style scoped>
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   .body {
      overflow-x: hidden;
   }

   .container {
      width: 100vw;
      height: auto;
   }

   section {
      height: 100vh;
      position: relative;
      color: rgba(255, 255, 255, .8);
      font-size: 15vh;
      /* 设置字体 */
      font-family: '华文行楷';
      /* 文字阴影 */
      /* 弹性布局 */
      display: flex;
      /* 水平居中 */
      justify-content: center;
      /* 垂直居中 */
      align-items: center;
   }
   .b {
     /* margin: 0.2em; */
     /* width: 120px; */
     right: 5px;
     bottom: 5px;
     position: absolute;
   }
  .b:hover {
     background:rgba(255,255,255,0.5);
     transform: scale(1.1);
     box-shadow: 0 8px 32px 0 rgba(0 0 0/ 37%);
     color: #fff;
   }
   #button {
    transform: scale(40%);
   }
   @media screen and (max-width:900px) {
     #footer {
       grid-template-columns: 1fr 1fr;
     }
   }
   @media screen and (max-width:550px) {
     #footer {
       grid-template-columns: 1fr;
     }
   }
   #button {
    animation: flicker 2s infinite;
   }
   @keyframes flicker{                    /*创建动画*/
             0%{
                 opacity: 1;
             }
             50%{
                 opacity: 0.5;
             }
             100%{
                 opacity: 1;
             }
   }
 .img {
    background-image: url(../assets/background2.png);
    overflow: hidden;
    /* 背景图片不重复 */
    background-repeat: no-repeat;
    /* 背景图片位置：居中 */
    background-position: center;
    /* 背景图片固定 */
    background-attachment: fixed;
    background-size: cover;
    /* 禁止用户误选中 */
    user-select: none;
 }
 .img h1 {
   background-image: url(../assets/background2.png);
   color: transparent ;
   background-size: cover;
    background-clip: text;
   -webkit-background-clip: text;
   -webkit-text-stroke: 1px #fff;
 }
 /* 设置成文字透明底 */

 #img-one {
     background-image: url(../首页/images/辛弃疾.png);
     background-size: cover;
  }

  .content-one {
     background: url(./images/少年报国志.png) no-repeat fixed center;
     background-size: cover;
  }

  .content-two {
     background: url(./images/汉宫春.png) no-repeat fixed center;
     background-size: cover;
  }

  .content-three {
     background: url(./images/青年赴国难2.jpg) no-repeat fixed center;
     background-size: cover;
  }
  .content-four {
     background: url(./images/菩萨蛮.png) no-repeat fixed center;
     background-size: cover;
  }

  .content-five {
     background: url(./images/丑奴儿.png) no-repeat fixed center;
     background-size: cover;
  }

  .content-six {
     background: url(./images/辛弃疾晚年.png) no-repeat fixed center;
     background-size: cover;
  }
  .content-seven {
     background: url(./images/水龙吟.png) no-repeat fixed center;
     background-size: cover;
  }

  .content-eight {
     background: url(./images/天涯芳草无归路.png) no-repeat fixed center;
     background-size: cover;
  }
 .text-box {
    width: 100%;
    height: 50%;
    /* 绝对定位 */
    position: absolute;
    bottom: 25%;
    /* 文字居中 */
    text-align: center;
    background-color: rgba(0, 0, 0, .3);
    /* 旋转中心 */
    transform-origin: center bottom;
    /* 扭曲斜切 */
    transform: skew(0, -8deg);

 }

 .text-box .cnt,.cntl {
   display: inline-block;
    margin: 20px 0 10px;
    padding: 120px;
    width: 100%;
    max-width: 1500px;
    transform-origin: right bottom;
    transform: skew(0, 8deg);
 }
 .text-box .cnt2 {
   display: inline-block;
    margin: 20px 0 10px;
    padding: 40px;
    width: 100%;
    max-width: 1500px;
    transform-origin: right bottom;
    transform: skew(0, 8deg);
 }
 .text-box .cnt {
    text-align: right;
 }
 .text-box .cntl {
    text-align: left;
 }
 .text-box .cnt2 {
    text-align: center;
 }
 .cnt h3,.cntl h3 ,.cnt2 h3 {
    font-size: 1em;
    margin-top: 100px;
    margin-block-end: 0.2em;
 }
 .cnt h4,.cntl h4, .cntl h4 {
    margin-top: 100px;
    font-size: 0.3em;
    font-family: "华文行楷";
    text-shadow: 1px 0px 0px #323232;
    /* align-items: end; */
    letter-spacing: 0.1em;
    color: #fff;
    margin-block-start: 0.5em;
    /* margin-bottom: 5px; */
 }

 .cnt p,.cntl p ,.cnt2 p{
    font-size: 0.3em; 
    /* line-height: 1.7; */
    /* margin-bottom: 10px; */
    color: #fff;
 }

 .cnt a.btn,.cntl a.btn ,.cnt2 a.btn {
    font-size: 90%;
    font-family: 'kaishu';
    letter-spacing: 0.3em;
    line-height: 2.8;
    display: inline-block;
    background-color: #7d5b5b;
    color: #000;
    border: 3px solid #000;
    white-space: nowrap;
    text-decoration: none;
    padding: 0 20px;

 }
 .poem5,.poem5l {
    font-family: "华文楷体";
     /*设置字体*/
     font-size: 0.37em;
     /* text-align: right; */
     margin: 10px auto;
     /*设置外边距*/
     padding: 10px;
     /*设置内边距*/
     background: linear-gradient(to bottom, rgb(158, 188, 190) 30%, rgb(109, 112, 105) 60%);
     /*设置背景颜色*/ 
     position: relative;
     border: 1px solid #CCCCCC;
     /*设置元素边框*/
     box-shadow: 3px 3px 6px #999999;
     /*设置边框阴影*/
     writing-mode: vertical-rl;
     /*设置以垂直方式从右向左显示*/
 }
.poem5l {
    height: 200px;
     /*设置元素宽度*/
     width: auto;
     line-height: 50px;
     position: absolute;
     left: 0;
     top: 20%;
     transform: translateY(50%);
     transition: all 1s;
 }
 .poem5 {
    height: 200px;
     /*设置元素宽度*/
     width: auto;
     line-height: 50px;
     position: absolute;
     right: 0;
     top: 0;
     transform: translateY(50%);
     transition: all 1s;
 }
 .slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fadeL-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
   transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  position: absolute;
  right: -400px;
}
.slide-fadeL-leave-active {
   transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  position: absolute;
  left: -400px;
}
 .slide-fade-enter, .slide-fade-leave-to {
   transform: translateX(40%);
   opacity: 0;
 }

 #pl {
    border-radius: 50px;
    font-family: "华文楷体";
    font-size: 0.18em;
    box-shadow: 0 2px 4px rgba(151, 115, 115, 0.1);
    background-color: transparent;
    color: #575353;
    width: 320px;
    height: 30px;
    margin-block-end: 0.1em;
 }
 #pl:hover {
   color: #fff;
   box-shadow: 0 2px 4px rgba(237, 231, 231, 0.7);
   transform: scale(110%);
 }
  </style>