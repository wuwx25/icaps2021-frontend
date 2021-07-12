import {backendBaseUrl} from '../assets/js/backendBaseUrl.js';
import {country, isLogin} from '../assets/js/data.js';
var app = new Vue({
    el: '#app',
    data: {
        token     : "",
        channel:'general'
    },
    methods: {

    },
    mounted: function() {
        axios.defaults.withCredentials = true;
        console.log("exhibition");
        this.channel=localStorage.getItem("channel");
    },
    watch: {
        token: async function () {
            console.log(`token now is ${this.token}`);
        },
    }
})
