import {backendBaseUrl} from '../assets/js/backendBaseUrl.js'
var app = new Vue({
    el: '#app',
    data: {
        user: {
            email: "",
            password: ""
        },
        SafariModal:{},
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
        var userAgent = navigator.userAgent;
        var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1;
        this.SafariModal = new bootstrap.Modal(document.getElementById('SafariModal'))
        // if(isSafari)
            // this.SafariModal.show()
    }
})
