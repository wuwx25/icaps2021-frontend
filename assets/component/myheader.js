import {backendBaseUrl} from '../js/backendBaseUrl.js';
import Vue from '../js/vue.esm.browser.js';
import axios from '../js/axios.js';
async function getTemplate(){
    // if (window.localStorage.getItem("header")==null||window.localStorage.getItem("header")==""){
    //     window.localStorage.setItem("header",(await axios.get("/assets/component/myheader.html")).data);
    // }
    // return window.localStorage.getItem("header");
    return (await axios.get("/assets/component/myheader.html")).data;
}
Vue.component('myheader',async function(resolve,reject){
    return resolve({
    props: ['curpage','curitem'],
    data: function(){
        return{
            isLogin:false,
            user:{},
        }
    },
    template: await getTemplate(),
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
    }})  
});
var header = new Vue({
    el: '#icaps-header',
    data: {
    },

});
export {Vue};


