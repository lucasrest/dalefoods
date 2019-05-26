<template>
  <div class="topo">
    <h1 v-if="msg !== ''">{{ msg }}</h1>
    <img v-else class="logo" src="../assets/logo.png">
    <div class="conf-button"></div>
  </div>
</template>

<script>
export default {
  name: 'Topo',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
    .topo {
        background: #f25116;
        padding: 10px 0;
        position: relative;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        h1 {
            margin: 0;
            color: white;
            text-align: center;
        }
        .conf-button {
            position: absolute;
            height: 40px;
            width: 40px;
            background: black;
            display: block;
            top: 50%;
            right: 10px;
            margin-top: -20px;
        }
        .logo {
            width: 150px;
        }
    }
</style>
