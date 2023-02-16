

<template>
    <!--navbar-->
    <!--about me-->
    <div class="about_me">
    <h1>About Me</h1>
    <br>

    <p class="abt_me_txt">Welcome to Zion's webpage. Hopefully this website will get to know me better.
    I am a software engineer currently living in London. My favorite subject is mathematics since primary school. I discovered interesting to implement programs to reflect the images on the computer monitor. After studying computer science, I discovered programming not just related images, but also algorithms and data transfers. I like to read the data flow and design from a different platform. It heightened my curiosity and passion about software engineering.
    I have a professional background in developing mobile apps in the United States. I arrived in the United Kingdom in 2020 and I would like to obtain a job opportunity related to computer science in the United Kingdom. My dream is to become an expert programmer. In my leisure time, I like to discover old console games and skiing.  </p>
    </div>

    <br>

    <!--picture-->
    <div class="column3">
    <!-- <img :src="../assets/images/1869.JPG" class="img_face1" style="width:400px;height:300px ;"> -->
    </div>

    <div class="column3">
    <!-- <img :src="../assets/images/020.jpg" class="img_face1" style="width:400px;height:300px ;"> -->
    </div>

    <div class="column3">
    <!-- <img :src="../assets/images/2928.jpg" class="img_face1" style="width:400px;height:300px ;"> -->

    </div>

    <br>

</template>



<script>
import ZionFooter from '@/components/ZionFooter.vue'
import ZionHeader from '@/components/ZionHeader.vue'
export default {
  name: 'app',
  components: {
    ZionFooter,
    ZionHeader,
  }
}
</script>

<style>

</style>