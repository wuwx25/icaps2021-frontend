var app = new Vue({
    el: '#app',
    data: {
        user: {
            email: "",
            password: ""
        }
    },
    methods:{
        login(){
            console.log('............submit');
            console.log(this.user);
            axios.post('http://192.168.0.224:5438/api/users/login',this.user
            ).then(res=>{
                localStorage.setItem("token",res.data.token);
                console.log(localStorage.getItem("token"));
                window.location.href = "../userInfo";
            }).catch(err=>{
                    console.log(err)
            })
        },
    },
    mounted(){

    }
})