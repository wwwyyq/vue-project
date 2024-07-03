<template>
   <div class="body">
     <div class="container">
        <section id="img-one" class="img">
            <h1>山人孟浩然</h1>
        </section>
        <section class="content-one">
            <div class="text-box">
                <div class="cntl">
                   <h3>"少年隐鹿门"</h3>
                <p>青年时期的孟浩然，正处于盛唐之鼎盛，却选择暂隐鹿门，他为何要做这样的选择？或许从他的诗词中，我们可以找到答案————</p>
               </div>
            </div>
            
        </section>
        <section class="content-two">
          <div class="text-box">
             <div class="cnt">
              <button id="pl" @click="toggleDiv">处处闻啼鸟——襄阳鹿门山</button>
               <p>多少年前的夜晚，孟浩然在梦里仿佛听到风雨忽至，醒来推开窗子看到春雨过后桃园里花落满地，树上鸟鸣啾啾。写下了这首经典唐诗。鹿门风景是否依旧？孟浩然的这一方小小桃园还能寻到吗？何不这就出发！
             </p>
             <transition name="slide-fade">
              <div class="poem5" v-if="showDiv">
               <p>《春晓》<br/>春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。</p>
                </div>
             </transition>
             </div>
             </div>
             
          </section>
        <section class="content-three">
           <div class="text-box">
                <div class="cntl"> 
                   <button id="pl" @click="toggleDi">徒有羡鱼情——湖南岳阳</button>
                 <p>二十岁出头的孟浩然来到岳阳拜会张说。两人一见如故，张说对孟浩然十分看重。孟浩然更是对这位当时的文坛巨匠的崇敬无比度，于是一首干谒诗诞生了。```` </p>
                 <p>
                 邀你也在八月前来，鱼肉正鲜美，你我无需考虑什么“端居耻圣明”，只要好好欣赏此地美景，感受波撼岳阳城的壮观，还有千年不变的风物与浪潮。
                </p>
                <transition name="slide-fadeL">
                 <div class="poem5l" v-if="showDi">
                <p>《望洞庭湖赠张丞相》<br/>八月湖水平，涵虚混太清。气蒸云梦泽，波撼岳阳城。欲济无舟楫，端居耻圣明。坐观垂钓者，徒有羡鱼情。</p>
                </div>
                </transition>
             </div>
           </div>
           
        </section>
        <section class="content-four">
            <div class="text-box">
                <div class="cnt">
                   <h3>"中年久漂泊"</h3>
                   <p>随后他久久漂泊在外，漫游边塞、洛阳以及江南等地，正值不惑之年的孟浩然终于回到家乡准备科考，遗憾的是科考之路又未获得成功。</p>
            </div>
            </div>
            
        </section>
        <section class="content-five">
          <div class="text-box">
             <div class="cntl">
               <button id="pl" @click="toggleD">永怀愁不寐——襄阳岘山</button>
                <p>因为一句“不才明主弃”，孟浩然几乎堵死了自己的仕途。我们叹息他的怀才不遇，一语致祸。但倘若你真的来到浩然园庐，望山川万物如此，或许会和孟襄阳心意共通，理解为何他会去漂泊，他要在圣前直言。
                </p>
                <transition name="slide-fadeL">
                 <div class="poem5l" v-if="showD">
                <p>《岁暮归南山》<br/>北阙休上书，南山归旧庐。不才明主弃，多病故人疏。白发催年老，青阳逼岁除。永怀愁不寐，松月夜窗虚。</p>
                </div>
                </transition>
               </div>
          </div>
          
        </section>
        <section class="content-six">
            <div class="text-box">
                <div class="cnt">
                   <button id="pl"@click="toggle">空怀故国楼——四川成都</button>
                 <p>漂泊在外，乡愁七夕愁再加秋愁，孟浩然甚至不敢抬头仰望天上斗牛，愁绪已到了无法排遣的极点。都说月是故乡明，如若你也到了成都，请抬头望望夜空，替孟浩然数数以前没数完的斗牛星。</p>
                 <transition name="slide-fade">
                    <div class="poem5" v-if="show">
                 <p>《他乡七夕》<br/>他乡逢七夕，旅馆益羁愁。不见穿针妇，空怀故国楼。绪风初减热，新月始临秋。谁忍窥河汉，迢迢问斗牛。</p>
             </div>
             </transition>
              </div>
            </div>
           
        </section>
        <section class="content-seven">
            <div class="text-box">
                <div class="cntl">
                  
                <button id="pl" @click="toggl">江清月近人——杭州建德</button>
                 <p>羁旅夜泊，日暮添愁；我心知宇宙广袤宁静，明月伴人更亲。但观野旷江清，秋色不落。我们如今看建德江，又能看到些什么？是否会生出一样的感慨？还需去一趟方可揭晓！
                 </p>
                 <transition name="slide-fadeL">
                    <div  class="poem5l" v-if="sho">
                 <p>《宿建德江》<br/>移舟泊烟渚，日暮客愁新。野旷天低树，江清月近人。</p>
                 </div>
                 </transition>
           </div>
            </div>
            
        </section>
        <section class="content-eight">
            <div class="text-box">
                <div class="cnt">
                   <button id="pl" @click="togg">愁杀渡头人——江苏镇江</button>
               <p>诗人久隐山林，年届四十始应试，结果不第而归，充满了难觅知音、厌倦京洛、意欲归隐的复杂感怀。这个“愁”字，除乡愁之外，还隐隐含藏着一种失意之愁。那浩浩，长河，滔滔江流，是诗人行程中的险途,同时也暗喻那使诗人“愁杀”的仕途上的阻隔。
                 </p>
                 <transition name="slide-fade">
                    <div  class="poem5" v-if="sh">
                  <p>《扬子津望京口》<br/>北固临京口，夷山近海滨。江风白浪起，愁杀渡头人。</p>
                 </div>
                 </transition>
           </div>
            </div>
            
        </section>
        <section class="content-nine">
            <div class="text-box">
                <div class="cntl">
                   <h3>"晚年山中客"</h3>
                 <p>晚年的孟浩然脱离了仕途的束缚，在山水田园之间开垦着灵感生发的诗意土壤。</p>
            </div>
            </div>
            
        </section>
        <section class="content-ten">
          <div class="text-box">
             <div class="cnt">
               <button id="pl" @click="tog">把酒话桑麻——湖北鹿门</button>
                 <p>小村子掩映在绿树青山之中，风景怡然。跟朋友在农家的小屋里开怀畅饮，谈天说地，乐得其中。同我们一样，吃罢这一席饭便赶忙将下一次欢聚的时间确定下来。岁月流逝，但相聚之欢不曾改变。如今村子建设成新的旅游地，何不邀三两好友，把酒话桑麻？
               </p> 
               <transition name="slide-fade">
                 <div class="poem5" v-if="s">
               <p>《过故人庄》<br/>故人具鸡黍，邀我至田家。绿树村边合，青山郭外斜。开轩面场圃，把酒话桑麻。待到重阳日，还来就菊花。</p>
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
   /* background:rgba(255,255,255,0.5); */
   transform: scale(1.1);
   box-shadow: 0 8px 32px 0 rgba(0 0 0/ 37%);
   color: #fff;
 }
 #button {
  transform: scale(50%);
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
   background-image: url(./images/少年隐鹿门孟浩然.png);
   background-size: cover;
}
#button {
  transform: scale(60%);
  animation: flicker 2s infinite;
 }

.content-one {
   background: url(./images/孟浩然1.png) no-repeat fixed center;
   background-size: cover;
}

.content-two {
   background: url(./images/春晓.png) no-repeat fixed center;
   background-size: cover;
}

.content-three {
   background: url(./images/望洞庭湖赠张丞相.png) no-repeat fixed center;
   background-size: cover;
}
.content-four {
   background: url(../首页/images/千年久漂泊.png) no-repeat fixed center;
   background-size: cover;
}

.content-five {
   background: url(./images/岁暮归南山.png) no-repeat fixed center;
   background-size: cover;
}

.content-six {
   background: url(./images/他乡七夕3.png) no-repeat fixed center;
   background-size: cover;
}
.content-seven {
   background: url(./images/宿建德江.png) no-repeat fixed center;
   background-size: cover;
}

.content-eight {
   background: url(./images/扬子津望京口.png) no-repeat fixed center;
   background-size: cover;
}
.content-nine {
   background: url(./images/晚年山中客.png) no-repeat fixed center;
   background-size: cover;
}
.content-ten {
   background: url(./images/过故人庄.png) no-repeat fixed center;
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
    margin-block-end: 0.2em;
 }
 .cnt h4,.cntl h4 {
    margin-top: 150px;
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
   background: linear-gradient(to bottom, rgb(158, 188, 190) 30%, rgb(109, 112, 105) 60%);
   /*设置背景颜色*/ 
   position: relative;
  line-height: 40px;
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
   right: 0;
   width: auto;
   height: 140px;
}
.poem5l {
   writing-mode: vertical-lr;
   left: 0;
   width: auto;
   height: 140px;
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