<template>
   <div class="body">
     < class="container">
        <section id="img-one" class="img">
           <h1>东坡居士苏轼</h1>
          </section>
        <section class="content-one">
            <div class="text-box">
                <div class="cnt">
                   <h3>"入仕之初"</h3>
                <p>
                   少年苏东坡随父移居东京，此时的苏轼参加了科举考试并得到了欧阳修的赏识，并极力赞扬，自此苏轼名动京师。在这期间，苏轼主要是在眉州、开封等地往返。
                </p>
               </div>
            </div>
        </section>
        <section class="content-two">
          <div class="text-box">
             <div class="cnt">
               <h4></h4>
               <button id="pl" @click="toggleDiv">朔风吹茅屋——四川宜宾</button>
               <p>苏辙也有诗《夜泊牛口》。在苏轼的笔下，乡村虽然潦倒贫穷，却呈现出清贫恬静的田园生活氛围。而同样的村落，同样的人物，在苏辙的笔下却没有苏轼诗歌那种安贫乐道的氛围，充满了对民生疾苦的关爱与悲悯。
                    如今的牛口早已完成改革建设，不知苏轼如有机会再看到会作何感想……
                </p>
                <transition name="slide-fade">
                 <div class="poem5" v-if="showDiv">
                <p>《夜泊牛口》（节选）<br/>日落红雾生，系舟宿牛口。居民偶相聚，三四依古柳。负薪出深谷，见客喜且售。煮蔬为夜餐，安识肉与酒。朔风吹茅屋，破壁见星斗。儿女自咿呀，亦足乐且久。</p>
                 </div>
                 </transition>  
             </div>
             </div>
          </section>
        <section class="content-three">
           <div class="text-box">
                <div class="cntl">
                   <h4></h4>
                    <button id="pl" @click="toggleDi">春江水暖鸭先知——河南开封</button>
                   <p>词句充满着感染力。我们仿佛也看见桃枝摇曳芦芽冒头，看见成群的鸭子凫游，逐渐肥美的河豚摆水……春天过去一个又一个，更替数百数千次之后的今天，我们还是会说：春江水暖鸭先知。
                </p>
                <transition name="slide-fadeL">
                 <div class="poem5l" v-if="showDi">
                <p>《惠崇春江晚景》<br/>竹外桃花三两枝，春江水暖鸭先知。蒌蒿满地芦芽短，正是河豚欲上时。</p>
                   </div>
                   </transition> 
             </div>
           </div>
           
        </section>
        <section class="content-five">
          <div class="text-box">
             <div class="cnt">
               <h3>"连遭贬谪"</h3>
                     <p>与王安石在变法上的意见冲突让苏轼的仕途很不顺利。苏轼的政友们或隐或退或被贬罚，一个一个都离庙堂而去。时年苏轼三十六岁，血气方刚，一身傲骨，仍坚持与王安石的斗争，向皇帝三上万言书，洋洋洒洒，据理力争。结果等来的是一纸贬为杭州通判的圣逾。
                     </p>
            </div>
            </div>
           
        </section>
        <section class="content-six">
            <div class="text-box">
                <div class="cntl">
                 <button id="pl" @click="toggleD">江南江北青山多——江苏镇江</button>
                   <p> 此时朝政风气让苏轼深感仕途险恶，主动清求外任。途经镇江，到城外长江中的金山寺拜访了宝觉、圆通二位长老，二者盛情款待，盛情难怯，苏轼宿在寺中，半夜得以观赏江上夜景，不由得浮想联翩。
                      </p>
                      <transition name="slide-fadeL">
                       <div class="poem5l" v-if="showD">
                      <p>《游金山寺》（节选）<br/>我家江水初发源，宦游直送江入海。闻道潮头一丈高，天寒尚有沙痕在。中泠南畔石盘陀，古来出没随涛波。试登绝顶望乡国，江南江北青山多。羁愁畏晚寻归楫，山僧苦留看落日。
                   </p>
                   </div>
                   </transition>
            </div>
            </div>
        </section>
        <section class="content-seven">
          <div class="text-box">
             <div class="cnt">
               <h4></h4>
                     <button id="pl"@click="toggle">欲待曲终寻问取——浙江杭州</button>
                     <p>青翠的山峰静静地立在湖边，哀怨的乐曲荡漾在山间水际。“人不见，数峰青”两句，化用前人诗句，自然、贴切而又不露痕迹。词人描述的江南佳景如此，一定值得你我亲眼去看看！</p>
                     <transition name="slide-fade">
                       <div class="poem5" v-if="show">
                     <p>《江城子·江景》<br/>凤凰山下雨初晴，水风清，晚霞明。一朵芙蕖，开过尚盈盈。何处飞来双白鹭，如有意，慕娉婷。忽闻江上弄哀筝，苦含情，遣谁听！烟敛云收，依约是湘灵。欲待曲终寻问取，人不见，数峰青。
                       </p>
                       </div>
                       </transition>
                       </div>
          </div>
          
        </section>
        <section class="content-eight">
            <div class="text-box">
                <div class="cntl">
                   <h4></h4>
                     <button id="pl" @click="toggl">常作东南别——江苏镇江</button>
                     <p>“此生飘荡何时歇？家在西南，常作东南别”一句问的凄凉，无人可答，极具有情感冲击力。时间流逝改变着地点的用途、意义，但在诗词流传中我们依旧有机会体会词人的心境和此地寄托的情感。
                     </p>
                     <transition name="slide-fadeL">
                       <div  class="poem5l" v-if="sho">
                     <p>《醉落魄 离京口作》<br/>轻云微月，二更酒醒船初发。孤城回望苍烟合。记得歌时，不记归时节。巾偏扇坠藤床滑，觉来幽梦无人说。此生飘荡何时歇？家在西南，常作东南别。</p>
                      </div>
                      </transition>         
            </div>
            </div>
           
        </section>
        <section class="content-nine">
            <div class="text-box">
                <div class="cnt">
                   <h4></h4>
                     <button id="pl" @click="togg">道人有道山不孤——浙江孤山</button>
                     <p>词人在一个昏沉欲雪的日子去往孤山拜访僧人，见到阴云低压，楼台与重重叠叠的青山笼罩在烟雾之中，若有若无。如今的孤山寺已经成为有名的旅游地，我们也只有从旧时诗词中知晓曾经此地“孤山孤绝谁肯庐”。
                     </p>
                     <transition name="slide-fade">
                       <div  class="poem5" v-if="sh">
                     <p>《腊日游孤山访惠勤惠思二僧》（节选）<br/>天欲雪，云满湖，楼台明灭山有无。水清出石鱼可数，林深无人鸟相呼。腊日不归对妻孥，名寻道人实自娱。道人之居在何许？宝云山前路盘纡。孤山孤绝谁肯庐？道人有道山不孤。
                      </p>
                      </div>
                      </transition>
            </div>
            </div>
        </section>
        <section class="content-ten1">
            <div class="text-box">
                <div class="cnt">
                   <h3>"晚年洒脱"</h3>
                     <p>与王安石在变法上的意见冲突让苏轼的仕途很不顺利。苏轼的政友们或隐或退或被贬罚，一个一个都离庙堂而去。时年苏轼三十六岁，血气方刚，一身傲骨，仍坚持与王安石的斗争，向皇帝三上万言书，洋洋洒洒，据理力争。结果等来的是一纸贬为杭州通判的圣逾。
                     </p>
            </div>
            </div>
            </section>
        <section class="content-ten2">
           <div class="text-box">
               <div class="cntl">
           <h4></h4>
                   <button id="pl" @click="tog">九死南荒吾不恨——海南</button>
                   <p>“九死南荒”而“吾不恨”，是由于看到了海内看不到的“奇绝”景色。然而“九死南荒”全出于政敌的迫害；诗人固然达观，但也不可能毫无恨意。因此，“吾不恨”毕竟是诗的语言，不宜呆看。
                      当时的海南完全是“蛮荒之地”，如今踏上这片土地回想苏轼在此地留下的诗词，旅途定会变得颇有意趣。
                   </p>
                   <transition name="slide-fadeL">
                    <div class="poem5l" v-if="s">
                   <p>《六月二十日夜渡海》<br/>参横斗转欲三更，苦雨终风也解晴。云散月明谁点缀？天容海色本澄清。空余鲁叟乘桴意，粗识轩辕奏乐声。九死南荒吾不恨，兹游奇绝冠平生。</p>
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
   right: 10px;
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
   background-image: url(../首页/images/苏轼.png);
   background-size: cover;
}
.content-one {
   background: url(./images/苏轼1.png) no-repeat fixed center;
   background-size: cover;
}

.content-two {
   background: url(./images/夜泊牛口.png) no-repeat fixed center;
   background-size: cover;
}

.content-three {
   background: url(./images/春江晚景.png) no-repeat fixed center;
   background-size: cover;
} 
.content-five {
   background: url(./images/苏轼遭遇贬谪.png) no-repeat fixed center;
   background-size: cover;
}

.content-six {
   background: url(./images/游金山寺.png) no-repeat fixed center;
   background-size: cover;
}
.content-seven {
   background: url(./images/江城子.png) no-repeat fixed center;
   background-size: cover;
}

.content-eight {
   background: url(./images/醉落魄.png) no-repeat fixed center;
   background-size: cover;
}
.content-nine {
   background: url(./images/腊日游孤山.png) no-repeat fixed center;
   background-size: cover;
}
.content-ten1 {
   background: url(./images/苏轼晚年洒脱.png) no-repeat fixed center;
   background-size: cover;
}
.content-ten2 {
   background: url(./images/夜渡海.png) no-repeat fixed center;
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
    font-size: 0.25em;
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
   font-size: 0.37em;
   /* text-align: right; */
   margin: 10px auto;
   /*设置外边距*/
   padding: 10px;
   /*设置内边距*/
   line-height: 40px;
   background: linear-gradient(to bottom, rgb(158, 188, 190) 30%, rgb(109, 112, 105) 60%);
   /*设置背景颜色*/ 
   position: relative;
   border: 1px solid #CCCCCC;
   /*设置元素边框*/
   box-shadow: 3px 3px 6px #999999;
   /*设置边框阴影*/
   
   /*设置以垂直方式从右向左显示*/
}
.poem5l {
  height: 200px;
   /*设置元素宽度*/
   width: auto;
   position: absolute;
   left: 0;
   top: -10%;
   transform: translateY(50%);
   writing-mode: vertical-lr;
   transition: all 1s;
}
.poem5 {
  height: 200px;
   /*设置元素宽度*/
   width: auto;
  position: absolute;
   right: 0;
   top: 20px;
   transform: translateY(50%);
   writing-mode: vertical-rl;
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
    width: 350px;
    height: 30px;
 }
 #pl:hover {
   color: #fff;
   box-shadow: 0 2px 4px rgba(237, 231, 231, 0.7);
   transform: scale(110%);
 }
</style>