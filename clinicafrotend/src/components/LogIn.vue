<!--PARTE ESTILO DEL FORMATO-->
<template>
    <div class="login_user">
        <div class="contenedor_sesion_user">
            <h2>Iniciar Sesion</h2>
            <form action="" class="formato_login">
                <input type="text" v-model="user.username" placeholder="Correo Electonico">
                <input type="password" v-model="user.password" placeholder="Contraseña">
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    </div>  
</template>



<SCript>
    import axios form 'axios';
    export default {
        name: 'login'
        data: function(){
            return{
                user:{
                    username:" ",
                    password:" ",
                }
            }
        },
        methods:{
            formato_login: function(){
                axios.post(
                    "https://"
                this.user,
                {heater:{} }
                )
                .then((result)=>{
                let dataLogIn= {
                    username: this.user.username
                    token_acces: result.data.acces,
                    token_refresh:result.data.refresh,
                    }
                    this.Semit('completedLogIn', dataLogIn)
                })
                .catch((error) => {
                    if(error.response.status == "401")
                    alert("ERROR 401: Credenciales Incorrectas");
                }); 
            }
        }

    }
</SCript>

<!--PARTE VISUAL DEL FORMATO LOGIN-->
<style>

.login_user{
    width: 100%;
    padding: 20px;
    margin:auto;
    margin-top: 100px;
}

.contenedor_sesion_user{
    max-width: 0;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 380px;
    position: relative;
    top: -185px;
    left: 10px;
}
.contenedor_sesion_user form h2{
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
    color: #46a2fd;
}
.contenedor_sesion_user form{
    width: 100%;
    padding: 80px 20px;
    background: #fff;
    position: absolute;
    border-radius: 20px;
}
.contenedor_sesion_user form input{
    width: 100%;
    margin-top: 20px;
    padding: 10px;
    border: none;
    background: #f2f2f2;
    font-size: 16px;
    outline: none;
}
.formato_login{
    margin: 5px 0;
    opacity: 1;
    display: none;
    width: 100%;
    height: 40px;
    color: #f2f2f2;
    background: teal;
    padding: 10px 25px;
}
.formato_login:hover{
    color: blueviolet;
    background: #f2f2f2;
    border: 1px solid #283747;
}
</style>