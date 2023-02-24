<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
    <div>
      <h1>this is Home page</h1>
      <p>COUNT:{{cnt}}, ONE:{{data1}}, TWO:{{data2}}, THREE:{{data3}}</p>
      <button v-on:click="dataupdate()">click</button>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      data1: 0,
      data2: 0,
      data3: 0,
      cnt: 1
    }
  },
  computed: {
    titleComputed() {
      console.log('I change when this.property changes.')
      return this.property
    }
  },
  beforeCreate(){
    console.log('beforeCreate:',this.data1, this.data2, this.data3);
  },
  created(){
    console.log('created:',this.data1, this.data2, this.data3);
  },
  beforeMount(){
    console.log('beforeMount:',this.data1, this.data2, this.data3);
  },
  mounted(){
    alert("mounted");
    console.log('mounted:',this.data1, this.data2, this.data3);
  },
  beforeUpdate(){
    alert("beforeUpdate");
    console.log('beforeUpdate:',this.data1, this.data2, this.data3);
  },
  updated(){
    alert("updated");
    console.log('updated:',this.data1, this.data2, this.data3);
  },
  beforeDestroy(){
    alert("beforeDestroy");
    console.log('beforeDestroy:',this.data1, this.data2, this.data3);
  },
  destroyed(){
    alert("destroyed");
    console.log('destroyed:',this.data1, this.data2, this.data3);
  },
  methods:{
    dataupdate(){
      if(this.cnt % 3 == 1){
        this.data1 += 1;
      }else if (this.cnt % 3 == 2){
        this.data2 += 1;
      }else{
        this.data3 += 1;
      }
      this.cnt += 1;
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
