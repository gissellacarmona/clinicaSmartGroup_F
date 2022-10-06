<!-- ESTA PARTE HACE REFERENCIA AL HTML -->
<template> 
  <div id="app" class="app">
      <div class="heater">
        <h1>Clinica Smart Group</h1>
        <nav>
          <button v-if="!is_auth" v-on:click="loadLogIn">Iniciar Sesión</button>
          <button v-if="!is_auth" v-on:click="loadSignUp">Registrarse</button>
          <button v-if="!is_auth" v-on:click="loadHome">Inicio</button>
        </nav>
      </div>
     <div class="main-componet">
      <router-view>
          v-on:completedLogIn="completedLogIn"
          v-on:completedSignUp="completedSignUp"
        </router-view>
      </div>
      <div class="footer">
        <h2>Atencion a tu alcance</h2>
      </div>
  </div>
</template>



<!--ESTA PARTE HACER REFERENCIA A JAVASCRIPT -->
<script>
  export default{
    name: 'App'
    data: function(){
      return{
        is_auth:false
      }
    },
    components:{},

    methods:{
      verifyAuth:function(){
        this.is_auth = localStorage.getItem("isAuth")|| false;
        if(this.is_auth == false)
          this.$router.push({name: "logIn"});
        else
          this.$router.push({name: "Home"});
      },

      loadLogIn: function(){
        this.$router.push({name: "logIn"})
      },

      loadSignUp: function(){
        this.$router.push({name: "signUp"})
      },
    
      completedLogIn:function(data){
        localStorage.setItem('isAuth', true);
        localStorage.setItem("Username", data.username);
        localStorage.setItem("token_acces", data.token_acces);
        localStorage.setItem('token_refresh', data.token_refresh);
        alert("Autencticacion Exitosa");
        this.verifyAuth();
      },

      completedSignUp(data){
        alert("Registro Exitoso");
        this.completedLogIn(data);
      }


    }

  }
</script>



<!-- PARTE DEL  -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
