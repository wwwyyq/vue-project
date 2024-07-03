<template>
   <div class="body">
     <div class="container">
        <section id="img-one" class="img">
            <h1>一代才女李清照</h1>
        </section>
        <section class="content-one">
            <div class="text-box">
                <div class="cntl">
                <h3>芳华无忧</h3>
                <p>出生于书香门第的李清照，家境优渥，少女时代自然无忧无虑，过得美好且快乐，笔下的文字亦是充满欢乐趣味</p>
            </div>
            </div>
        </section>
        <section class="content-two">
          <div class="text-box">
             <div class="cnt">
               <button id="pl" @click="toggleDiv">却把青梅嗅--山东济南</button>
                <p>荡秋千的少女出了一层薄汗，正要歇息却见有客前来，急急忙忙都来不及穿好鞋袜插稳金钗，跑开后却倚门偷看，只是装作嗅青梅的模样。虽然那个李清照荡过的秋千恐怕已不知所踪，但我们可以跟随少女嗅青梅的心思，去想象、品味此地旧事。
                </p>
                <transition name="slide-fade">
                      <div class="poem5" v-if="showDiv">
                            <p>《点绛蜃.蹴罢秋千》<br/> 蹴罢秋千，起来慵整纤纤手。露浓花瘦，薄汗轻衣透。见客入来，袜刬金钗溜。和羞走，倚门回首，却把青梅嗅。
                            </p>
                      </div>
                   </transition> 
             </div>
             </div>
          </section>
        <section class="content-three">
           <div class="text-box">
                <div class="cntl">
                   <button id="pl" @click="toggleDi">兴尽晚回舟——河南洛阳</button>
                 <p>李清照跟随父母来到当时的京都。正是好动的年纪，便这样误打误撞闯进藕花深处。慌张拨桨惊起一滩鸥鹭。如若你作为游客来到洛阳，除了牡丹，何不沿着李清照的足迹，泛舟赏莲，撑桨看鹭？再次体验千年前这个女词人的乐趣之一。
                </p>
                   
                <transition name="slide-fadeL">
                   <div class="poem5l" v-if="showDi">
                 <p> 《如梦令·常记溪亭日暮》<br/>常记溪亭日暮，沉醉不知归路。兴尽晚回舟，误入藕花深处。争渡，争渡，惊起一滩鸥鹭。
                 </p>
                </div>
                </transition>
             </div>
           </div>
        </section>
        <section class="content-five">
          <div class="text-box">
             <div class="cnt">
           <button id="pl" @click="toggleD">人比黄花瘦——河南开封</button>
             <p>重阳佳节佳人独对西风中的瘦菊,苦苦思念之情溢于言表。这段时间生活在东京（河南开封）的李清照和丈夫赵明诚正是新婚，感情甜蜜，创作了许多表达思念的好词。
             即使是旅游经过，我们也会记得，在开封，有这样一对夫妇曾经以笔传情，以词抒怀。
            </p>
            <transition name="slide-fade">
             <div class="poem5" v-if="showD">
            <p>《醉花阴.薄雾浓云愁永昼》<br/>薄雾浓云愁永昼，瑞脑消金兽。佳节又重阳，玉枕纱厨，半夜凉初透。东篱把酒黄昏后，有暗香盈袖。莫道不销魂，帘卷西风，人比黄花瘦。</p>
            </div>
            </transition>
            </div>
            </div>
        </section>
        <section class="content-six">
            <div class="text-box">
                <div class="cntl">
                <h3>中年豪气</h3>
                <p>
                   这个时期国家发生了"靖康之变"，李清照自己家中也是变故频出，赵明诚在南宋朝廷妥协求和"不主张抵抗"政策下弃城而逃……以上种种都令李清照倍感失望。由失望生出的救国之情却更加强烈，这一时期南下的李清照走过了一个个地方，留下了心情的生动写照。
                </p> 
            </div>
            </div>
        </section>
        <section class="content-seven">
          <div class="text-box">
             <div class="cnt">
          <button id="pl" @click="toggle">不肯过江东——安徽芜湖</button>
                <p>女性无法像男性一样投笔从戎，保家卫国，往往是铁蹄下哀叹呻吟的承受者。然而在李清照的笔下她所显现的自我形象却并不是一个等待挽救的弱者。虽然不能亲临沙场，但也从未置身事外，她关心时局，为深受压抑的抗金志士扼腕不平，回看处于和平年代的我们南下旅行，心境和彼时的女诗人是如此天差地别!</p>
              <transition name="slide-fade">
             <div class="poem5" v-if="show">
             <p>《夏日绝句》<br/>生当作人杰，死亦为鬼雄。 至今思项羽，不肯过江东。
             </p>
             </div>
             </transition>
          </div>
          </div>
        </section>
        <section class="content-eight">
            <div class="text-box">
                <div class="cntl">
                <button id="pl" @click="toggl">蓬舟吹取三山去——江苏南京</button>
                <p>
                   这首词把真实的生活感受融入梦境，把屈原《离骚》、庄子《逍遥游》以至神话传说谱入宫商，使梦幻与生活、历史与现实融为一体，构成气度恢宏、格调雄奇的意境，充分显示了李清照性情中豪放不羁的一面。
                   <br/>愿你乘舟此地，也可抒此般豪迈。
                </p>
                <transition name="slide-fadeL">
                   <div class="poem5l" v-if="sho">
                <p> 《渔家傲·天接云涛连晓雾》<br/>
                天接云涛连晓雾，星河欲转千帆舞。仿佛梦魂归帝所。闻天语，殷勤问我归何处。我报路长嗟日暮，学诗谩有惊人句。九万里风鹏正举。风休住，蓬舟吹取三山去！
                </p>
                </div>
                </transition>
            </div>
            </div>
        </section>
        <section class="content-nine">
            <div class="text-box">
                <div class="cnt">
                <h3>晚年淡泊</h3>
                <p>
                   李清照晚年的生活宁静致远。一方面她依旧关注国事，继续收集编撰完成赵明诚未完成的书籍《金石录》。这就是历史上有名的《金石录后序》。另一方面，李清照一改过去淡雅的词风，创作出一批与时代同呼吸共命运的词作，成为南宋婉约词派的集大成者。
                </p>
            </div>
            </div>
        </section>
        <section class="content-ten">
          <div class="text-box">
             <div class="cntl"> 
                <button id="pl" @click="togg">凄凄惨惨戚戚——江苏苏州</button>
                <p>清照把丈夫安葬以后，追随流亡中的朝廷南下，饱尝颠沛流离之苦。亡国之恨，丧夫之哀，孀居之苦，凝集心头，写下这首声声慢。</p>
                <transition name="slide-fadeL">
                   <div class="poem5l" v-if="sh">
                      <p>《声声慢·寻寻觅觅》<br/>寻寻觅觅，冷冷清清，凄凄惨惨戚戚。乍暖还寒时候，最难将息。三杯两盏淡酒，怎敌他晚来风急！雁过也，正伤心，却是旧时相识。满地黄花堆积，憔悴损，如今有谁堪摘？守着窗儿独自，怎生得黑！梧桐更兼细雨，到黄昏点点滴滴。这次第，怎一个愁字了得！</p>
          </div>
          </transition>
          </div>
        </div>
       </section>
        <section class="content-ten1">
            <div class="text-box">
                <div class="cnt">
                   <button id="pl" @click="tog">载不动许多愁——浙江杭州</button>
                   <p>彼时的李清照已经到了垂暮之年，但依旧要说，人生只要爱过，无论经历多么无常，都将无悔，何惧那些载不动的愁。希望你每每看到溪上轻舟，都能想到千年前李清照所感悟的人生道理。</p>
                   <transition name="slide-fade">
                      <div class="poem5" v-if="s">
                 <p>《武陵春.春晚》<br/>风住尘香花已尽，日晚倦梳头。物是人非事事休，欲语泪先流。闻说双溪春尚好，也拟泛轻舟。只恐双溪舴艋舟，载不动许多愁。</p>
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
         sho: false,
         sh: false,
         s: false
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
       },
       togg() {
         this.sh = true;
         setTimeout(() => {
           this.sh = false;
         }, 1000);
       },
       tog() {
         this.s = true;
         setTimeout(() => {
           this.s = false;
         }, 1000);
       }
      }
   }
   </script>
   <style scoped>
    @font-face {
    font-family: "行草";
    src: url(@/assets/writing/YeZiGongChangZuiHanJiangXingCao-2.ttf); /* 根据实际情况选择不同的字体格式 */
  }
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
 
 #a1 {
    width:750px;    /*设置元素宽度*/
    height: 210px;
    transition:all 0.5s;
 }
 #img-one {
     background-image: url(../首页/images/李清照.png);
     background-size: cover;
  }
  .content-one {
     background: url(./images/芳华.png) no-repeat fixed center;
     background-size: cover;
  }
  
  .content-two {
     background: url(./images/秋千.png) no-repeat fixed center;
     background-size: cover;
  }
  
  .content-three {
     background: url(./images/如梦令.png) no-repeat fixed center;
     background-size: cover;
  }
  .content-four {
     background: url(./images/醉花阴.png) no-repeat fixed center;
     background-size: cover;
  }
  
  .content-five {
     background: url(./images/醉花阴.png) no-repeat fixed center;
     background-size: cover;
  }
  
  .content-six {
     background: url(./images/李清照2.png) no-repeat fixed center;
     background-size: cover;
  }
  .content-seven {
     background: url(./images/夏日绝句.png) no-repeat fixed center;
     background-size: cover;
  }
  
  .content-eight {
     background: url(./images/渔家傲.png) no-repeat fixed center;
     background-size: cover;
  }
  .content-nine {
     background: url(./images/李清照3.png) no-repeat fixed center;
     background-size: cover;
  }
  .content-ten {
     background: url(./images/声声慢.png) no-repeat fixed center;
     background-size: cover;
  }
  .content-ten1 {
     background: url(./images/武陵春.png) no-repeat fixed center;
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
    margin: 40px 0 10px;
    width: 90%;
    max-width: 1200px;
    transform-origin: right bottom;
    transform: skew(0, 8deg);
 }
 .text-box .cnt {
    text-align: right;
 }
 .text-box .cntl {
    text-align: left;
 }
 .cnt h3,.cntl h3 {
    font-size: 1em;
    margin-top: 100px;
    margin-block-end: 0.3em;
 }
 .cnt h4,.cntl h4 {
    margin-top: 100px;
    font-size: 0.3em;
    font-family: "华文楷体";
    text-shadow: 1px 0px 0px #323232;
    /* align-items: end; */
    letter-spacing: 0.1em;
    color: #fff;
    margin-block-start: 0.5em;
    /* margin-bottom: 5px; */
 }
 
 .cnt p,.cntl p {
    font-size: 0.3em; 
    /* line-height: 1.7; */
    /* margin-bottom: 10px; */
    color: #fff;
 }
 
 .cnt a.btn,.cntl a.btn {
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
   font-size: 0.47em;
   /* text-align: right; */
   height: 180px;
   margin: 10px auto;
   /*设置外边距*/
   padding: 10px;
   /*设置内边距*/
   line-height: 40px;
   background: linear-gradient(to bottom, rgb(158, 188, 190) 30%, rgb(73, 74, 72) 60%);
   /*设置背景颜色*/ 
   position: relative;
   border: 1px solid #CCCCCC;
   /*设置元素边框*/
   box-shadow: 3px 3px 6px #999999;
   /*设置边框阴影*/
   position: absolute;
   /* right: 0;*/
   top: 0; 
   /*设置元素宽度*/
   transform: translateY(50%);
   transition: all 1s;
}
.poem5 {
   writing-mode: vertical-rl;
   width: auto;
   height: 200px;
   right: 0;
}
.poem5l {
   writing-mode: vertical-lr;
   left: 0;
   height: 200px;
   width: auto;
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
  transform: translateY(-100%);
  opacity: 0;
}

#pl {
   font-family: "华文楷体";
   font-size: 0.15em;
  border-radius: 50px;
  box-shadow: 0 2px 4px rgba(151, 115, 115, 0.1);
  background-color: transparent;
  color: #fff;
  width: 320px;
  height: 30px;
}
#pl:hover {
   box-shadow: 0 2px 4px rgba(245, 240, 240, 0.6);
   transform: scale(110%);
   color: #fff;
}
</style>