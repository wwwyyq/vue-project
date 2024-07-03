<template>
  <div id="app">

    <audio ref="bgMusic" autoplay loop >
      <source src="./assets/变奏的梦想 - 江上清风游(1).flac" type="audio/mp3">
    </audio>
    
  </div>
  <router-view />
</template>

<script>
import { clockCursor } from "./js/esm.js";
new clockCursor();
// new backgroundMusic();
export default {
  mounted() {
    // Set the starting time in seconds
    this.$refs.bgMusic.currentTime = 8; // Starts playing from 10 seconds
  }
  // methods: {
  //   checkMusicTime() {
  //     const audio = this.$refs.bgMusic;
  //     const endTime = 270; //结束时间为4.30

  //     if (audio.currentTime >= endTime) {
  //       audio.pause(); // 音乐暂停
  //       //设置开始时间
  //       audio.currentTime = 8;
  //     }
  //   }
  // }
}

</script>


<style>


</style>