import {backendBaseUrl} from '../assets/js/backendBaseUrl.js';
import {country, isLogin} from '../assets/js/data.js';
import {Vue} from '/assets/component/myheader.js';
import axios from '/assets/js/axios.js';
var app = new Vue({
    el: '#app',
    data: {
        token     : "",
        channel:"general"
    },
    methods: {

    },
    mounted: function() {
        axios.defaults.withCredentials = true;
        console.log("exhibition");
        if(localStorage.getItem("channel")){
            this.channel=localStorage.getItem("channel");
            console.log(this.channel)
        }
    },
    watch: {
        token: async function () {
            console.log(`token now is ${this.token}`);
        },
    }
})
