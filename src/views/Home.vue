<template>
  <div class="home">
    <Topo msg=""/>
    <h2>Bem-vindo ao <strong>Burger King</strong></h2>
  </div>
</template>

<script>
// @ is an alias to /src
import Topo from '@/components/Topo.vue'

export default {
  name: 'home',
  components: {
    Topo
  }
}
</script>
