<template>
  <div id="app">
    <div class="light">
      <router-view
        @change="change"
        :from="from"
      />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.light{
  height: 70%;
  min-height: 450px;
  width: 20%;
  min-width: 250px;
  background: grey;
}

</style>
<script>
export default {
  data() {
    return {
      from: 'Red',
    }
  },
  methods: {
    change(data){
      console.log(data)
      this.from = data.from;
      this.$router.push({path: data.to});

    }
  },

}
</script>