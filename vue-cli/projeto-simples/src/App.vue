<template>
    <div id="app">
      Esse é o título: {{ titulo }}
      <hr>
      <button @click='alterar' class="btn btn-success">Alterar</button>
    </div>
    
</template>

<script>
export default {
    data: function(){
      return {
        titulo: 'Aqui é o data Vue JS'
      }
    },
    methods: {
      alterar() {
          return {
            titulo: this.titulo += '#'
          }
      }
    }

}
</script>

<style>
  #app{
    display: flex;
    width: 50%;
    background-color: #cecece;
    color: #000;
  }
</style>
