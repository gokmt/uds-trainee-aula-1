<template>
  <div class="calc">
    <p>Valor: {{valor}}</p>
    <p>{{parOuImpar}}</p>
    <p>{{isPrimo}}</p>
    <input type="text" name="" v-model=entrada>
    <button type="button" name="button" @click="adicionarValor()" >Adicionar</button>
    <button type="button" name="button" @click="subtrairValor()" >Subtrair</button>
  </div>
</template>

<script>
export default {
  name:'App',
  data:()=>({
    valor:0,
    entrada:0
  }),
  methods:{
    adicionarValor(){
      this.valor++;
    },
    subtrairValor(){
      this.valor--;
    }
  },
  computed:{
    parOuImpar(){
      if (this.valor%2 === 0) {
        return 'Par';
      }else {
        return 'Impar';
      }
    },
    isPrimo() {
      for(var i = 2; i < this.valor; i++)
      if(this.valor % i === 0) return 'Primo';
      return this.valor !== 1;
    }
  }
}
</script>

<style lang="css">
</style>
