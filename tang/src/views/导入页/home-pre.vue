<template>
  <div class="videoContainer">
    <video
      class="fullscreenVideo"
      id="bgVid"
      playsinline
      autoplay
      loop
      :muted="muted"
      ref="bgVid"
    >
      <source src="./audio/pre.mp4" type="video/mp4" />
    </video>
  </div>
  <div class="wrapper" >
    <div class="image-container" @scroll="scrollEvent">
      <img
     src="./images/覆盖图.png"
        alt="image"
      />
    </div>
  </div>
</template>

<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
// console.clear();
const router = useRouter();
const bgVid = ref();


gsap.registerPlugin(ScrollTrigger);

const muted = ref(true);

//鼠标点击事件
window.addEventListener("click", () => {
  muted.value = !muted.value;
});

//鼠标双击事件
window.addEventListener("dblclick", () => {
  router.push({ path: "/gucheng" });
});

const scrollEvent = (e) => {
  console.log(e);
};

onMounted(() => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
      },
    })
    .to(".image-container img", {
      scale: 2,
      z: 350,
      transformOrigin: "center center",
      ease: "power1.inOut",
    })
    .to(
      ".section.hero",
      {
        scale: 1.1,
        transformOrigin: "center center",
        ease: "power1.inOut",
      },
      "<"
    );
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.wrapper {
  width: 100vw;
  height: 100vh;
  /* background-image: url("../assets/images/background.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll; */
}

.image-container {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  perspective: 500px;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}

.fullscreenVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: -100;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  object-position: center center;
  /* background-size: cover; */
}
</style>