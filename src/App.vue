<script>

  export default {
    name: "App",
    data () {
      return {
        img: ''
      }
    },
    mounted() {
      this.loadLogo()
    },
    methods: {
      async loadLogo () {
        this.img = (await import('@/assets/logo.png')).default
      }
    }
  };
</script>

<template>
 <div>
   <img :src="img" alt="">
   <div class="container">Hello world!</div>
 </div>
</template>

<style scoped type="scss">
  $red: #ff008c;

  .container {
    color: $red;
    background: url("./assets/logo.png");
    font-size: 65px;
  }
</style>
