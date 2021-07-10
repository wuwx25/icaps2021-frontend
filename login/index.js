import {backendBaseUrl} from "../assets/js/backendBaseUrl.js"
var app = new Vue({
    el: '#app',
    data: {
        user: {
            email: "",
            password: "",
			code:""
        },
        SafariModal:{},
		Emailaddress:'',
		isEmail:true,
		isCode:true,
		isErrorCode:true,
		isLogin:false,
		isSuccess:false,
		password:"",
		confirmPassword:"",
		codeModal:{}
    },
    methods:{
        login(){
            axios.post(backendBaseUrl+'/api/users/login',this.user
            ).then(res=>{
                localStorage.setItem("token",res.data.token);
                window.location.href = "../userInfo";
                localStorage.setItem('isLogin',1)
            }).catch(err=>{
                console.log(err);
                if(err.response.status==400){
                    window.alert('wrong password or email!');
                } else {
                    window.alert('Unknown error!');
                }
                this.user.password = ''
            })
        },
    },
    mounted(){
        axios.defaults.withCredentials = true;
    }
})
