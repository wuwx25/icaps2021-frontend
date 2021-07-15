import {backendBaseUrl} from "../../assets/js/backendBaseUrl.js"
import {Vue} from "/assets/component/myheader.js"
var app = new Vue({
    el: '#app',
    data: {
        user: {
            email: "",
            password: "",
			code:""
        },
		tipsModal:{},
		modalmsg:'',
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
		submit:function(){
			const regEmail =/^([a-zA-Z]|[0-9])(\w|\.|\-)+@[a-zA-Z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
			if(regEmail.test(this.user.email)){
				this.isEmail = true
			}else{
			    this.isEmail = false
			}
			if(this.isEmail){
				axios.post(backendBaseUrl+'/api/users/forgotemailverify',this.user,{
					headers:{"Content-Type":"application/json"}
				}
				).then(res=>{
					this.codeModal.show();				
				}).catch(err=>{
					console.log(err)
					this.modalmsg = err.response.data.message;
					this.tipsModal.show();
					setTimeout(() => {
						this.tipsModal.hide()
					}, 2000);
				})
			}
		},
		passwordReset:function(){
			axios.post(backendBaseUrl+'/api/users/resetpassword',this.user,{
				headers:{"Content-Type":"application/json"}
			}
			).then(res=>{
				this.codeModal.hide();
				this.modalmsg='Password changed successfully';
				this.tipsModal.show();	
				setTimeout(() => this.tipsModal.hide(),2000)
				setTimeout(() => window.location.href='/login',1000)
				this.isSuccess = true;
			}).catch(err=>{
				this.isErrorCode = false
			})
		}
    },
    mounted(){
        this.codeModal = new bootstrap.Modal(document.getElementById('verifyCode'));
		this.tipsModal = new bootstrap.Modal(document.getElementById('tips'));
    }
})
