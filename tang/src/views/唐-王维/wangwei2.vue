<template>
   <div class="body">
     <div class="container">
        <section id="img-one" class="img">
            <h1>诗佛王维</h1>
        </section>
        <section class="content-one">
            <div class="text-box">
                <div class="cnt2">
                   <h3>"初来长安街"</h3>
                <p>
                 背负着期许与理想，年仅15岁的王维奔赴长安。王维在此处踏着红尘，抒写了众多流传千古的名句，描绘了这座城市的繁华和寂寞。如今古都千秋，风华犹存。且跟随摩诘的脚步，共同探索此地美景！
                </p>
               </div>
            </div>
            
        </section>
        <section class="content-two">
          <div class="text-box">
             <div class="cnt">
               <button id="pl" @click="toggleDiv">咸阳游侠多少年——陕西咸阳</button>
               <p>酒如一面镜子，映照出率真坦荡的人生态度。诗为人物写照，最后却宕开去以景语收束。此刻你往长安来，是否也会有这一份跳荡灵动，性格神采？</p>  
               <transition name="slide-fade">
                  <div class="poem5" v-if="showDiv">
               <p>《少年行》<br/>新丰美酒斗十千，咸阳游侠多少年。相逢意气为君饮，系马高楼垂柳边。</p>
                </div>
                </transition>
            </div>
             </div>
            
          </section>
        <section class="content-three">
           <div class="text-box">
                <div class="cntl">
                   <button id="pl" @click="toggleDi">每逢佳节倍思亲——陕西长安县</button>
                <p>千年以后的今天，你我再登高。站在山上回望，我们似乎看得到地面上厚厚的黄沙，看得到风中摇晃的茱萸，看得到千年前的那一株。17岁的王维，孤身登高，思亲情切。<br/>是的，这位游客。长安不仅有迷人眼的繁华，更有埋藏在这里的一片片思念。</p>
                <transition name="slide-fadeL">
                  <div class="poem5l" v-if="showDi">
                <p>《九月九日忆山东兄弟》<br/>独在异乡为异客，每逢佳节倍思亲。遥知兄弟登高处，遍插茱萸少一人。</p>
                 </div>
                 </transition>
                 </div>
           </div>
           
        </section>
        
        <section class="content-five">
            <div class="text-box">
                <div class="cnt2">
                   <h3>"青年却闲居"</h3>
                <p>入职不多时，王维因上司失职被贬到济,以另一种方式圆了自己的回乡梦。在这段时间里，王维游历经过了河南，山东等地，写下许多山水诗词。
                </p>
            </div>
            </div>
           
        </section>
        <section class="content-six">
          <div class="text-box">
             <div class="cnt">
               <button id="pl" @click="toggleD">陕西西安</button>
                <p>如果到了长安城中，且往兴宗林亭里，千年前的此刻，景色像画了一幅静态写生一样。在一个浓荫如盖的院子里，透过篱笆可以看到地面上厚厚的青苔，远远望去，一个远离尘世喧嚣的世外桃源，一个率性逍遥的隐士形象就跃然纸上。
                </p>
                <transition name="slide-fade">
                  <div class="poem5" v-if="showD">
                <p>《与卢员外象过崔处士兴宗林亭》<br/>绿树重阴盖四邻，青苔日厚自无尘。科头箕踞长松下，白眼看他世上人。</p>
               </div>
               </transition>
            </div>
            </div>
        </section>
        <section class="content-seven">
          <div class="text-box">
             <div class="cnt">
               <button id="pl"@click="toggle">归来且闭关——河南嵩山</button>
                <p>这里是五岳之一嵩山。随着诗人的笔端，您可领略归山途中的景色移换，也可隐约触摸到归隐初期王维感情的细微变化, 随意写来，不加雕琢，可是写得真切生动，含蓄隽永，即便到了今天读来依旧有静心之效。
               </p>
               <transition name="slide-fade">
                  <div class="poem5" v-if="show">
               <p>《归嵩山作》<br/>清川带长薄，车马去闲闲。流水如有意，暮禽相与还。荒城临古渡，落日满秋山。迢递嵩高下，归来且闭关。</p>
                </div>
                </transition>
           </div>
          </div>
         
        </section>
        
        <section class="content-nine">
            <div class="text-box">
                <div class="cnt2">
                   <h3>"重回长安城"</h3>
               <p>唐玄宗命王维以监察御史的身份奉使凉州, 在途中荒凉的大漠里，心怀失落的他，所见之景所遇之人均化作诗中语言，让人能从中感受到彼时王维所思所想。</p>
            </div>
            </div>
            
        </section>
        <section class="content-ten">
          <div class="text-box">
             <div class="cntl">
               <button id="pl" @click="toggl">长河落日圆——甘肃武威</button>
                   <p>沙漠上没有山峦林木，那横贯其间的黄河，就非用一个“长”字不能表达诗人的感觉。落日本来感伤，这里用一“圆”字，却给人以亲切温暖而又苍茫的感觉。诗人的情绪就这样巧妙地溶化在广阔的自然景象的描绘中。</p>
                   <transition name="slide-fadeL">
                     <div  class="poem5l" v-if="sho">
                   <p>《使至塞上》<br/>单车欲问边，属国过居延。征蓬出汉塞，归雁入胡天。大漠孤烟直，长河落日圆。萧关逢候骑，都护在燕然。</p>
                   </div>
                   </transition>
                  </div>
        </div>
       
       </section>
        <section class="content-ten1">
            <div class="text-box">
                <div class="cnt">
                 <button id="pl" @click="togg">陇上行人夜吹笛——甘肃清水县</button>
                 <p>“长安少年”,“陇上行人”,“关西老将”三者在这首诗中彼此映衬,意境更佳,在王维笔下,边塞亦遍地佳景.</p>
                 <transition name="slide-fade">
                  <div  class="poem5" v-if="sh">
                 <p>《陇头吟》<br/>长安少年游侠客，夜上戍楼看太白。陇头明月迥临关，陇上行人夜吹笛。关西老将不胜愁，驻马听之双泪流。</p>
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
        sh: false
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
   transform: scale(60%);
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
    background-image: url(../首页/images/王维.png);
    background-size: cover;
 }
 .content-one {
    background: url(./images/初来长安街王维.png) no-repeat fixed center;
    background-size: cover;
 }
 
 .content-two {
    background: url(./images/少年行.png) no-repeat fixed center;
    background-size: cover;
 }
 
 .content-three {
    background: url(./images/九月九日忆山东兄弟.png) no-repeat fixed center;
    background-size: cover;
 }
 .content-four {
    background: url(./images/思念.png) no-repeat fixed center;
    background-size: cover;
 }
 
 .content-five {
    background: url(./images/青年却闲居.png) no-repeat fixed center;
    background-size: cover;
 }
 
 .content-six {
    background: url(./images/青亭.png) no-repeat fixed center;
    background-size: cover;
 }
 .content-seven {
    background: url(./images/归隐嵩山.png) no-repeat fixed center;
    background-size: cover;
 }
 
 .content-eight {
    background: url(./images/嵩山.png) no-repeat fixed center;
    background-size: cover;
 }
 .content-nine {
    background: url(./images/王维重回长安.png) no-repeat fixed center;
    background-size: cover;
 }
 .content-ten {
    background: url(./images/使至塞上.jpg) no-repeat fixed center;
    background-size: cover;
 }
 .content-ten1 {
    background: url(./images/陇头吟.png) no-repeat fixed center;
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
 
 .text-box .cnt,.cntl,.cnt2 {
    display: inline-block;
    margin: 20px 0 10px;
    width: 100%;
    max-width: 1500px;
    transform-origin: right bottom;
    transform: skew(0, 8deg);
 }
 .text-box .cnt2 {
   padding: 60px;
 }
 .text-box .cnt, .cntl {
   padding: 5%;
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
 .cnt h3,.cntl h3,.cnt2 h3 {
    font-size: 1em;
    margin-top: 100px;
    margin-block-end: 0.3em;
 }
 .cnt h4,.cntl h4,.cnt2 h4 {
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
 
 .cnt p,.cntl p,.cnt2 p {
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
    margin: 10px auto;
    /*设置外边距*/
    padding: 0;
    /*设置内边距*/
    background: linear-gradient(to bottom, rgb(158, 188, 190) 30%, rgb(109, 112, 105) 60%);
    /*设置背景颜色*/ 
    line-height: 40px;
    border: 1px solid #CCCCCC;
    /*设置元素边框*/
    box-shadow: 3px 3px 6px #999999;
    /*设置边框阴影*/
    writing-mode: vertical-rl;
    /*设置以垂直方式从右向左显示*/
}

.poem5 {
   height: 180px;
    /*设置元素宽度*/
    width: auto;
    line-height: 50px;
    position: absolute;
    right: 5%;
    top: 20%;
    transform: translateY(50%);
    transition: all 1s;
}
.poem5l {
   height: 180px;
    /*设置元素宽度*/
    width: auto;
    line-height: 40px;
   position: absolute;
    left: 0;
    top: 20%;
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