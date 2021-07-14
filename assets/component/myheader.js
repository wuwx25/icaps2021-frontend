import {backendBaseUrl} from '../js/backendBaseUrl.js';
import Vue from '../js/vue.esm.browser.js';
import axios from '../js/axios.js';
var isLogin = false;
var isRegistration = false;
async function getTemplate(){
    let storage=window.localStorage;
    if (storage.getItem("header")==null||storage.getItem("header")==""||Number(storage.getItem("header_cnt"))>10) {
        storage.setItem("header",(await axios.get("/assets/component/myheader.html")).data);
        storage.setItem("header_cnt",0);
    }
    let cnt = Number(storage.getItem("header_cnt"));
    storage.setItem("header_cnt",cnt+1);
    return storage.getItem("header");
    // return (await axios.get("/assets/component/myheader.html")).data;
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
                isLogin = true;
                this.user = res.data;
                if(this.user.reg && this.user.reg.registration){
                   isRegistration = true;
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
export {Vue,isLogin,isRegistration};

