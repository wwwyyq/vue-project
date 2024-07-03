<template>
   <div class="body">
     <div class="container">
        <section id="img-one" class="img">
         <h1>诗仙李白</h1>
        </section>
        <section class="content-one">
            <div class="text-box">
                <div class="cntl">
                  <h3>"青年求仕"</h3>
                <p>
                   李白年轻时行走蜀中山水，后来出川，除了在长安做官的那三年，其余时间几乎都在路上。前后长达18年的时间里，李白的足迹遍布近乎半个中国。
                </p>
            </div>
            </div>
        </section>
        <section class="content-two">
          <div class="text-box">
             <div class="cnt">
              <div >
                 <button id="pl" @click="to">疑是银河落九天——江西九江</button>
               <p>庐山耸立于鄱阳湖、长江之滨。庐山瀑布主要由三叠泉瀑布、开先瀑布、石门涧瀑布、黄龙潭和乌龙潭瀑布等组成，被誉为中国最秀丽的十大瀑布之一。诗人用夸张把景物升腾到更高的境界，气势动荡开阔，章法飞动流走。时光荏苒而过，不知如今的游客所赏之景可还依旧？</p>
               <transition name="slide-fade">
                 <div class="poem5" v-if="si">
               <p>《望庐山瀑布》<br/>日照香炉生紫烟，遥看瀑布挂前川。飞流直下三千尺，疑是银河落九天。</p>
               </div>
               </transition>
              </div>
             </div>
             </div>
          </section>

        <section class="content-three">
           <div class="text-box">
                <div class="cntl">
                 <div>
                 <button id="pl" @click="tog">思君不见下渝州——四川峨眉山</button>
                 <p>诗人在船上看到峨眉山间吐出的半轮秋月，月影随江流动，甚是唯美。看似用语平淡，但景色如在眼前。全诗写了五个地名，峨眉山──平羌江──清溪──渝州──三峡，通过山月和江水展现了一幅千里蜀江行旅图，意境清朗秀美。我们如今也可以参考这个路线，领略此地风光。</p>
                <transition name="slide-fadeL">
                     <div class="poem5l" v-if="s">
                       <p>《峨眉山月歌》<br/>峨眉山月半轮秋，影入平羌江水流。夜发清溪向三峡，思君不见下渝州。</p>
            </div>
                    </transition>
                    </div>

             </div>
           </div>
        </section>
        <section class="content-five">
          <div class="text-box">
             <div class="cnt">
              <div>
                 <button id="pl" @click="togg">孤帆远影碧空尽——湖北武汉</button>
                 <p>李白送友，待到帆影逐渐模糊、消失在碧空的尽头，诗人依旧在翘首凝望。这才注意到一江春水，在浩浩荡荡地流向远远的水天交接之处……诗句虽能给我们描绘出此地的宏伟意境，但其中细节，还需亲身体会一番。</p>
             <transition name="slide-fade">
                     <div  class="poem5" v-if="sh">
                       <p> 《黄鹤楼送孟浩然之广陵》<br/>故人西辞黄鹤楼，烟花三月下扬州。孤帆远影碧空尽，唯见长江天际流。</p>
                    </div>
                    </transition>
                    </div>
                    </div>
                    </div>
        </section>
        <section class="content-six">
            <div class="text-box">
                <div class="cntl">
                  <h3>"中年失意"</h3>
                 <p>李白的第二个阶段的漫游，是从仕途失意后，离开长安之后开始的。报国理想破灭，多是满怀失意和苦闷。</p>
            </div>
            </div>

        </section>
        <section class="content-seven">
          <div class="text-box">
             <div class="cnt"> 
              <div>
                 <button id="pl" @click="toggl">三杯吐然诺——山东济南</button>
                 <p>劳劳亭，又名劳楼、劳劳楼、望远楼、临沧观，坐落于今江苏省南京市西南，，是一座始建于三国东吴时期的著名历史古迹。“劳劳亭”自古以来即是来往其地行人分别、相送的场所，历代文人骚客亦多以之为题写作赋诗，而其中尤以唐代大诗人李白所作《劳劳亭》一诗最为著名。</p>
                 <transition name="slide-fade">
                     <div  class="poem5" v-if="sho">
                       <p> 《劳劳亭》<br/>天下伤心处，劳劳送客亭。春风知别苦，不遣柳条青。</p>
                    </div>
                    </transition>
                    </div>
                    </div>
                    </div>
        </section>
        <section class="content-eight">
              <div class="text-box" v-cloak>
                <div class="cntl">
                 <div>
                 <button id="pl"@click="toggle">轻舟已过万重山——重庆奉节</button>
                 <p>乘坐飞快的轻舟行驶在长江上，耳听两岸的猿啼声，又看见两旁的山影，猿啼声不止一处，山影也不止一处，由于舟行人速，使得啼声和山影在耳目之间成为“浑然一片”。也正是这首诗，让白帝城为人所知，吸引了一批批游客前来。</p>
                 <transition name="slide-fadeL">
                     <div class="poem5l" v-if="show">
                       <p> 《早发白帝城》<br/>朝辞白帝彩云间，千里江陵一日还。两岸猿声啼不住，轻舟已过万重山。</p>
                    </div>
                    </transition>
                    </div>
                    </div>
                    </div>
        </section>
        <section class="content-nine">
            <div class="text-box" v-cloak>
                <div class="cnt">
                 <div>
                 <button id="pl" @click="toggleD">江城如画里——安徽宣城</button>
                     <p>宣城处于山环水抱之中，陵阳山冈峦盘屈，三峰挺秀，句溪和宛溪的溪水，萦回映带着整个城郊，李白路过谢朓楼时，写作了《宣州谢朓楼饯别校书叔云》诗，并在诗中称赞谢朓"中间小谢又清发"，从此谢朓楼知名天下。
                  </p>
                  <transition name="slide-fade">
                     <div class="poem5" v-if="showD">
                       <p> 《秋登宣城谢脁北楼》<br/>江城如画里，山晓望晴空。两水夹明镜，双桥落彩虹。人烟寒橘柚，秋色老梧桐。。</p>
                       </div>
                    </transition>
                    </div>
                    </div>
                    </div>
        </section>
        <section class="content-ten">
          <div class="text-box">
             <div class="cntl">
               <h3 class>"晚年避乱"</h3>
                 <p>第三个阶段漫游的李白更多的是被动流浪，安史之乱爆发后，李白避乱在安徽宣城一带居住，后入永王李璘的幕僚，后永王李璘被肃宗所败，李白被流放夜郎，直至玄宗大赦天下。</p>
            </div>
        </div>

       </section>
        <section class="content-ten1">
            <div class="text-box" v-cloak>
                <div class="cnt">
                 <div>
                 <button id="pl" @click="toggleDi">不觉鬓成丝——重庆巫山</button>
                     <p>“巫山”，山名，在今重庆巫山县。其山势高峻，景色秀美，有著名的巫山十二峰。“巴水”，指的是长江三峡段的流水。因古代属于巴国而得名。</p>
                     <transition name="slide-fade">
                     <div class="poem5" v-if="showDi">
                       <p> 《上三峡》<br/>巫山夹青天，巴水流若兹。巴水忽可尽，青天无到时。三朝上黄牛，三暮行太迟。三朝又三暮，不觉鬓成丝。</p>
                     </div> 
                    </transition>
                    </div>
                 </div>
           </div>
           </section> 
        <section class="content-ten2">
             <div class="text-box" v-cloak>
                 <div class="cntl">
                    <div>
                       <button id="pl" @click="toggleDiv">我本楚狂人——江西庐山</button>
                     <p >晚年再游庐山的李白，心境却不相似。诗人以充满神话传说的色彩表述他的行程：<br/>拿着仙人所用的嵌有绿玉的手杖，于晨曦中离开黄鹤楼。为什么到庐山来呢？是因为“好入名山游。”<br/>后两句诗，既可说是李白一生游踪的形象写照，同时也透露出诗人寻仙访道的隐逸之心。
                 </p>
                 <transition name="slide-fadeL">
                    <div class="poem5l" v-if="showDiv">
                          <p>《庐山谣寄卢侍御虚舟》（节选）<br/>我本楚狂人，凤歌笑孔丘。手持绿玉杖，朝别黄鹤楼。五岳寻仙不辞远，一生好入名山游。
                       </p>
                    </div>
                 </transition> 
                    </div>
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
     s: false,
     si: false
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
   },
   to() {
     this.si = true;
     setTimeout(() => {
       this.si = false;
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
.b {
   right:5px;
   bottom:5px;
   position:absolute;
}
.b:hover {
  /* background:rgba(255,255,255,0.5); */
  transform: scale(1.1);
  box-shadow: 0 8px 32px 0 rgba(0 0 0/ 37%);
  color: #fff;
}
#button {
 transform: scale(60%);
 animation: flicker 2s infinite;
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
    background-image: url(./images/李白2.png);
    background-size: cover;
 }

 .content-one {
    background: url(./images/青年求仕.png) no-repeat fixed center;
    background-size: cover;
 }

 .content-two {
    background: url(./images/望庐山瀑布.png) no-repeat fixed center;
    background-size: cover;
 }

 .content-three {
    background: url(./images/峨眉山月歌.png) no-repeat fixed center;
    background-size: cover;
 }
 .content-five {
    background: url(./images/黄鹤楼送孟浩然之广陵.png) no-repeat fixed center;
    background-size: cover;
 }
 .content-six {
    background: url(./images/李白中年失意.png) no-repeat fixed center;
    background-size: cover;
 }
 .content-seven {
    background: url(./images/劳劳亭.png) no-repeat fixed center;
    background-size: cover;
 }

 .content-eight {
    background: url(./images/早发白帝城.png) no-repeat fixed center;
    background-size: cover;
 }
 .content-nine {
    background: url(./images/双桥落彩虹.png) no-repeat fixed center;
    background-size: cover;
 }
 .content-ten {
    background: url(./images/李白晚年避乱.png) no-repeat fixed center;
    background-size: cover;
 }
 .content-ten1 {
    background: url(./images/上三峡.png) no-repeat fixed center;
    background-size: cover;
 }
 .content-ten2 {
    background: url(./images/庐山遥寄.png) no-repeat fixed center;
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
   font-family: "华文行楷";
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
   width:1300px;

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
   font-size: 0.4em;
   /* text-align: right; */
   margin: 10px auto;
   /*设置外边距*/
   padding: 10px;
   /*设置内边距*/
   background: linear-gradient(to bottom, rgb(158, 188, 190) 30%, rgb(73, 74, 72) 60%);
   /*设置背景颜色*/ 
   line-height: 40px;
   position: absolute;
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
     width:600px;
     line-height: 50px;
     position: absolute;
     left: 0;
     top: 10%;
     transform: translateY(50%);
     transition: all 1s;
 }
 .poem5 {
    height: 200px;
     /*设置元素宽度*/
     width: 500px;
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
.slide-fade-leave-to {
 transform: translateX(80%);
 opacity: 0;
}
#pl {
    border-radius: 50px;
    font-family: "华文楷体";
    font-size: 0.18em;
    box-shadow: 0 2px 4px rgba(151, 115, 115, 0.1);
    background-color: transparent;
    color: #575353;
    width: 380px;
    height: 30px;
 }
 #pl:hover {
   color: #fff;
   box-shadow: 0 2px 4px rgba(237, 231, 231, 0.7);
   transform: scale(110%);
 }
</style>