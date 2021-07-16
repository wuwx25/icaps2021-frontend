import {backendBaseUrl} from '../assets/js/backendBaseUrl.js';
import {Vue,header} from '/assets/component/myheader.js';
var app = new Vue({
    el: '#app',
    data: {
        token     : "",
        channel:"general"
    },
    methods: {

    },
    mounted: function() {
        console.log("exhibition");
        if(localStorage.getItem("channel")){
            this.channel=localStorage.getItem("channel");
            console.log(this.channel)
        }
    }
})
