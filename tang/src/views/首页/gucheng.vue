<template>  
  <div class="fullscreen-div">
    <div class="body">
      <div id="tang" v-if="currentDynasty === 'tang'">
        <div class="headline">文人行迹</div>
      </div>
      <div id="song" v-else-if="currentDynasty === 'song'">
        <div class="headline">文人行迹</div>
      </div>
      <nav>
        <a href="#" @click.prevent="toggleDynasty('tang')" :class="{ active: currentDynasty === 'tang' }">唐朝</a>
        <a href="#" @click.prevent="toggleDynasty('song')" :class="{ active: currentDynasty === 'song' }">宋代</a>
      </nav>
    
      <div id="tang" v-if="currentDynasty === 'tang'">
       <div id="main">
         <div class="grid">
           <article>
             <img src="./images/map.png" alt="placeholder" class="feature">
             <div class="marker" id="marker1">
               <button class="button-3d-1" @click="router.push('/changan')">长安</button>
             </div>
             <div class="marker" id="marker2">
               <button class="button-3d-1" @click="router.push('/luoyang')">洛阳</button>
             </div>
             <div class="marker" id="marker3">
               <button class="button-3d-1" @click="router.push('/jiangnan')">江南</button>
             </div>
           </article>
         </div>
        </div>
     </div>
     <div id="song" v-else-if="currentDynasty === 'song'">
       <div id="main">
         <div class="grid">
           <article>
             <img src="./images/宋代地图.png" alt="placeholder" class="feature">
             <div class="marker" id="marker4">
               <button class="button-3d-1" @click="router.push('/chengdu')">成都</button>
             </div>
             <div class="marker" id="marker5">
               <button class="button-3d-1" @click="router.push('/kaifeng')">开封</button>
             </div>
             <div class="marker" id="marker6">
               <button class="button-3d-1" @click="router.push('/linan')">临安</button>
             </div>
           </article>
         </div>
        </div>
     </div>
     <div id="tang" v-if="currentDynasty === 'tang'">
        <div class="p-box">
             <ul class="photos">
               <li id="poet11">
                 <img src="./images/poet1.webp" alt="placeholder" class="poetpic">
                 <router-link to="/libai1">
                   <img id="button" src="./images/李白印章.png" alt="">
                 </router-link>
               </li>
               <li id="poet21">
                 <img src="./images/poet2.webp" alt="placeholder" class="poetpic">
                 <router-link to="/wangwei1">
                   <img id="button" src="./images/王维印章.png" alt="">
                 </router-link>
               </li>
               <li id="poet31">
                 <img src="./images/poet3.webp" alt="placeholder" class="poetpic">
                 <router-link to="/menghaoran1">
                   <img id="button" src="./images/孟浩然印章.png" alt="">
                 </router-link>
               </li>
               <li id="poet41">
                 <img src="./images/poet4.webp" alt="placeholder" class="poetpic">
                 <router-link to="/sushi1">
                   <img id="button" src="./images/苏轼印章.png" alt="">
                 </router-link>
               </li>
               <li id="poet51">
                 <img src="./images/liqingzhao4.png" alt="placeholder" class="poetpic">
                 <router-link to="/liqingzhao1">
                   <img id="button" src="./images/李清照印章.png" alt="">
                 </router-link>
               </li>
               <li id="poet61">
                 <img src="./images/poet5.webp" alt="placeholder" class="poetpic">
                 <router-link to="/xinqiji1">
                   <img id="button" src="./images/辛弃疾印章.png" alt="">
                 </router-link>
              </li>
             </ul>
         </div>
      </div>
      <div id="song" v-else-if="currentDynasty === 'song'">
        <div class="p-box">
              <ul class="photos">
              <li id="poet12">
                 <img src="./images/poet1.webp" alt="placeholder" class="poetpic">
                 <router-link to="/libai1">
                   <img id="button" src="./images/李白印章.png" alt="">
                 </router-link>
               </li>
               <li id="poet22">
                 <img src="./images/poet2.webp" alt="placeholder" class="poetpic">
                 <router-link to="/wangwei1">
                   <img id="button" src="./images/王维印章.png" alt="">
                 </router-link>
               </li>
               <li id="poet32">
                 <img src="./images/poet3.webp" alt="placeholder" class="poetpic">
                 <router-link to="/menghaoran1">
                   <img id="button" src="./images/孟浩然印章.png" alt="">
                 </router-link>
               </li>
               <li id="poet42">
                 <img src="./images/poet4.webp" alt="placeholder" class="poetpic">
                 <router-link to="/sushi1">
                   <img id="button" src="./images/苏轼印章.png" alt="">
                 </router-link>
               </li>
               <li id="poet52">
                 <img src="./images/liqingzhao4.png" alt="placeholder" class="poetpic">
                 <router-link to="/liqingzhao1">
                   <img id="button" src="./images/李清照印章.png" alt="">
                 </router-link>
               </li>
               <li id="poet62">
                 <img src="./images/poet5.webp" alt="placeholder" class="poetpic">
                 <router-link to="/xinqiji1">
                   <img id="button" src="./images/辛弃疾印章.png" alt="">
                 </router-link>
               </li>
             </ul>
         </div>
      </div>
    
     <!-- 按钮组 -->
     <div class="btn-group">
        <button class="last btn">
          <!-- 左箭头图标 -->
        </button>
        <button class="next btn">
          <!-- 右箭头图标 -->
        </button>
      </div>
      
      <!-- 场景 -->
      <div class="scene">
        <div class="container">
          <!-- 场景内容 -->
        </div>
      </div>
      
    </div>
  </div>
  
    
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<script>
export default {
  data() {
    return {
      currentDynasty: 'tang'  // 默认显示唐朝内容
    };
  },
  methods: {
    toggleDynasty(dynasty) {
      if (dynasty !== this.currentDynasty) {
        this.currentDynasty = dynasty;
      }
    }
  }
};
</script>
<style scoped>
  .body {
    background-color: #fff;
    color: #333;
    margin: 0;
    font: 1.2em / 1.2 Arial, Helvetica, sans-serif;
  }
  
  .img {
      max-width: 100%;
      display: block;
  }
  #main{
    background:url("./images/头背景.jpg");
    background-attachment: fixed;
    background-position: center center;
    /* 背景图不平铺 */
    background-repeat: no-repeat;
    background-size: cover;
  }
  .headline {
    font-size: 300%;
    font-family:'STLiti';
    text-shadow:0 0 5px black;
    color:black;
    padding: 50px 200px;
    margin: 0 auto;
    background-image:url('./images/头背景.jpg');
  }
  .button-3d-1 {
    color: #d40e0e;
    background-color: #ccf6f6;
  }
  nav{
    display: flex;
    position:sticky;
    top:0;
    justify-content:center;    
    height: 60px;
    line-height: 43px;
    background-image:url('./images/头背景.jpg');
    box-shadow:0 0 5px 5px lightgray;
  }
  nav a{
    font-size: 1.5em;
    font-family:'STKaiti';
    color: black;
    display: inline-block;
    text-decoration: none;
    padding:5px 35px;
    text-shadow:0 0 2.5px #4b4b4b;
    margin:5px 75px;
    background-image:url('./images/导航按钮图.jpg');
  }
  nav a:hover{
    color:white;
    border-radius:5px 5px;
    background-image:url('./images/导航按钮图.jpg');
  }
  
  .grid {
    margin: 0 auto;
    padding: 0 20px;
    max-width: 980px;
    display:grid;
    grid-template-areas:"content"" sidebar";
    gap:20px;
  }
  
  article
  {
    grid-area:content;
  }
  
  .p-box
  {
    background-image: url('./images/头背景.jpg') !important;
    background-size: cover; /* 可以根据需要调整背景图片的显示方式 */
    background-position: center; /* 可以根据需要调整背景图片的位置 */
    position: relative;
    /* grid-column:sidebar; */
    margin: 0;
    max-height:550px;
  }
  
  .photos {
    list-style: none;
    margin: 0;
    padding: 0;
    display:grid;
    grid-template-columns:0fr 0fr 0fr 0fr 0fr 3fr;
    position: relative;
    left:380px;
    top:0;
    bottom:20px;
  }
  .feature {
    width: 980px;
  }
  .feature2 {
    position:relative;
    width: 700px;
    left: 160px;
  }
  
  .poetpic{
    width: 200px;
    height:140px;
    /* border:1px dashed black; */
    margin-left:25%;
    margin-top:2px;
  }
  ul li{
    margin-left:10px;
    margin-right:10px;
    border:1px dashed white;
    padding-left:20px;
    padding-right:20px;
    margin-bottom:25px;
    border:2.5px outset;    
  }
  #button{
    position:absolute;
    right:155px;
    transform: scale(0.25); /* 将按钮缩小为原来的一半 */
  }
  #button:hover {
    /* background:rgba(255,255,255,0.5); */
    transform: scale(0.4);
    /* box-shadow: 0 8px 32px 0 rgba(0 0 0/ 37%);
    color: #fff; */
  }
  #poet11{
    background-image:url('./images/李白.png');
  }
  #poet21{
    background-image:url('./images/王维.png');
  }
  #poet31{
    background-image:url('./images/千年久漂泊.png');
  }
  #poet41{
    background-image:url('./images/苏轼.png');
    opacity: 0.2;
    transform: scale(0.9);
  }
  #poet51{
    background-image:url('./images/李清照.png');
    opacity: 0.2;
    transform: scale(0.9);
  }
  #poet61 {
    background-image: url('./images/辛弃疾.png');
    opacity: 0.2;
    transform: scale(0.9);
  }
  #poet12{
    background-image:url('./images/李白.png');
    opacity: 0.2;
    transform: scale(0.9);
  }
  #poet22{
    background-image:url('./images/王维.png');
    opacity: 0.2;
    transform: scale(0.9);
  }
  #poet32{
    background-image:url('./images/千年久漂泊.png');
    opacity: 0.2;
    transform: scale(0.9);
  }
  #poet42{
    background-image:url('./images/苏轼.png');
  }
  #poet52{
    background-image:url('./images/李清照.png');
  }
  #poet62 {
    background-image: url('./images/辛弃疾.png');
  }
  #poet1 p{
    color:black;
  }
  #poet2 p{
    color:white;
  }
  #poet3 p{
    color:white;
  }
  #poet4 p{
    color:black;
  }
  #poet5 p{
    color:black;
  }
  #poet6 p{
    color: #fff;
  }
  p{
    text-indent:2em;
    font-family:'KaiTi';
  }
  
  li a:link{
    text-decoration:underline;
    font-weight:bold;
    color:white;
    font-family:'FangSong';
  }
  li a:visited{
    color:white;
    font-size:1;
  }
  li a:focus{
    text-decoration:none;
    color:white;
    outline:none;
  }
  li a:hover{
    text-decoration:underline;
    color:#97ffff;
    font-size:110%;
  }
  li a:active{
    text-decoration:none;
    color:#A9A9A9;
    font-weight:bold;
  }

 
  .marker {
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: #0000cd;
    border-radius: 50%;
    cursor: pointer;
  }
  #marker1 {
    top: 657px;
    left: 1040px;
  }
  #marker2 {
    top: 642px;
    left: 1100px;
  }
  #marker3 {
    top: 760px;
    left: 1150px;
  }
  #marker4 {
    top: 580px;
    left: 680px;
  }
  #marker5 {
    top: 455px;
    left: 935px;
  }
  #marker6 {
    top: 580px;
    left: 1100px;
  }
  .fullscreen-div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .scene{
    position: absolute;
    left:1200px;
    top:100px;
    overflow: hidden;
    perspective: 1300px;
  }
  .word-box,
  .word-box .word{
    position: absolute;
    animation: rotY 0s linear infinite;
    animation-duration: var(--animation-duration);
    animation-delay: var(--animation-delay);
  }
  .word-box{
    margin-top: var(--margin-top);
  }
  .word-box .word{
    margin-left: var(--margin-left);
  }
  .word-box .word {
    animation-duration: reverse;
  }
  @keyframes rotY {
    to{
        transform: rotateY(360deg);
      }
  }
  .btn-group {
  height: 15vh;
  position: absolute;
  left: 50%;
  bottom: 0%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transition: 1s;
  transition: 1s;
  opacity: 0;
}

.btn-group .btn {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid #171717;
  background-color: #fff;
  margin: 10px;
  cursor: pointer;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

.btn-group .btn:hover {
  -webkit-transform: scale(1.2);
          transform: scale(1.2);
  background-color: #000;
}

.btn-group .btn:hover .icon {
  fill: #fff;
}

.btn-group .btn .icon {
  width: 30px;
  height: 30px;
}

.btn-group .btn .right {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.img-list {
  left: 0;
}

@-webkit-keyframes admission {
  0% {
    -webkit-transform: translate(140vw, 0);
            transform: translate(140vw, 0);
  }
  100% {
    -webkit-transform: translate(13.39vw, 0);
            transform: translate(13.39vw, 0);
  }
}

@keyframes admission {
  0% {
    -webkit-transform: translate(140vw, 0);
            transform: translate(140vw, 0);
  }
  100% {
    -webkit-transform: translate(13.39vw, 0);
            transform: translate(13.39vw, 0);
  }
}

.p-box {
  display: -webkit-flex; /* Safari */
display: flex;
-webkit-justify-content: center; /* Safari 6.1+ */
justify-content: center;
-webkit-align-items: center; /* Safari 7.0+ */
align-items: center;
    height: 100vh;
    /* 背景的渐变色 */
    background-image: linear-gradient(rgb(96, 127, 146), rgb(87, 122, 100));
}


.p-box ul {
    width: 100%;
    height: 320px;
    /* 溢出隐藏 */
    overflow: hidden;
    margin: 10px;
    padding: 0;
    transition: all .3s;
}

.p-box ul li {
    /* 相对定位 */
    position: relative;
    /* float: left; */
    list-style-type: none;
    width: 160px;
    height: 320px;
    margin: 0;
    transition: all .5s;
}

.p-box ul li p {
    /* 绝对定位 */
    /* position: absolute; */
    left: 0;
    bottom: 0;
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    background-color: rgba(0, 0, 0, .3);
    transition: all .3s;
}

.p-box ul li:hover p {
    font-size: 20px;
}

.p-box ul:hover li {
    width: 90px;
}

.p-box ul li:hover {
    width: 640px;
}
</style>
<!-- <script src="../views/skystar.js"></script> -->