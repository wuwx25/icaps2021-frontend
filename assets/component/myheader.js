import {backendBaseUrl} from '../js/backendBaseUrl.js'
import Vue from '../js/vue.esm.browser.js';
import axios from '../js/axios.js'
Vue.component('myheader',{
    props: ['curpage'],
    data: function(){
        return{
            isLogin:false,
            user:{},
        }
    },
    template:'<header ><nav class="navbar navbar-light navbar-expand-lg fixed-top p-3 border-bottom"><div class="container-fluid"><a class="navbar-brand text-dark">ICAPS 2021</a><button                        class="navbar-toggler"                        type="button"                        data-bs-toggle="collapse"                        data-bs-target="#navbarSupportedContent"                ><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav me-auto mb-2 mb-lg-0"><li class="nav-item"><a href="/home" class="nav-link px-2" :class="{active:curpage==\'home\'}">Home</a></li><li class="nav-item"><a href="/papers" class="nav-link px-2"  :class="{active:curpage==\'papers\'}">Papers</a></li><li class="nav-item"><a href="/InvitedSpeakers/" class="nav-link px-2"  :class="{active:curpage==\'invitedSpeakers\'}">Invited Speakers</a></li>			<li class="nav-item"><a href="/Calls" class="nav-link px-2"  :class="{active:curpage==\'calls\'}">Calls</a></li><li class="nav-item"><a href="/workshops" class="nav-link px-2"  :class="{active:curpage==\'workshops\'}">Workshops</a></li><li class="nav-item"><a href="/Competitions" class="nav-link px-2"  :class="{active:curpage==\'competitions\'}">Competitions</a></li><li class="nav-item"><a href="/Committee" class="nav-link px-2"  :class="{active:curpage==\'committee\'}">Committee</a></li><li class="nav-item"><a href="/code-of-conduct.html" class="nav-link px-2"  :class="{active:curpage==\'codeOfConduct\'}">Code of conduct</a></li><li class="nav-item"><a href="/registration/" class="nav-link px-2"  :class="{active:curpage==\'registration\'}">Registration</a></li></ul><span class="btn-group dropdown navbar-right"><button type="button" class="btn btn-primary" @click="window.location.href=\'../userInfo\'" v-if="isLogin && user.profile.first_name" style="color: white;">                            {{user.profile.first_name}}</button><button type="button" class="btn btn-primary" @click="login()" v-if="!isLogin" style="color: white;">                        Login</button><button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" v-if="isLogin"><span class="visually-hidden">Toggle Dropdown</span></button><ul class="dropdown-menu"><li><button class="dropdown-item " @click="logout" v-if="isLogin">Logout</button></li></ul></span></div></div></nav></header>',
    created:function(){
        if(window.localStorage.getItem('token')){
            axios.get(backendBaseUrl+'/api/users/profile', {
                headers: {
                    "Authorization": localStorage.getItem('token')
                }
            }).then(res => {
                this.isLogin = true;
                this.user = res.data;
                if(this.user.reg && this.user.reg.registration){
                    this.reg_info.registration = false;
                }
            }).catch(err => {});
        }
    }, 
    methods:{
        logout(){
            localStorage.setItem('token','');
            window.location.reload();
        },
        login(){
            window.location.href = '/login';
        },
        userInfo(){
            window.location.href = '/userInfo';
        }
    }  
});
var header = new Vue({
    el: '#icaps-header',
    data: {
    },

});
export {Vue};


