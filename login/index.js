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
		isErrorCode:{},
		isCode:true,
		isErrorCode:true,
		isLogin:false,
		password:"",
		confirmPassword:""
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
		submit:function(){
			const regEmail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
			if(regEmail.test(this.user.email)){
				this.isEmail = true
			}else{
			    this.isEmail = false
			}
			if(this.isEmail){
				console.log(this.Emailaddress);
				axios.post(backendBaseUrl+'/api/users/forgotemailverify',this.user,{
					headers:{"Content-Type":"application/json"}
				}
				).then(res=>{
					this.codeModal.show();
				})
			}
		},
		passwordReset:function(){
			
			axios.post(backendBaseUrl+'/api/users/resetpassword',this.user,{
				headers:{"Content-Type":"application/json"}
			}
			).then(res=>{
				this.codeModal.hide();
			}).catch(err=>{
				this.isErrorCode = false
			})
		}
    },
    mounted(){
        this.codeModal = new bootstrap.Modal(document.getElementById('verifyCode'));
		
    }
})
