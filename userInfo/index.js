import {backendBaseUrl} from '../assets/js/backendBaseUrl.js';
import {country} from '../assets/js/data.js';
import {Vue} from '/assets/component/myheader.js'
var app = new Vue({
    el: '#app',
    data: {
        isLogin: false,
        user: {
        },
        columns: {
            first_name: "First name",
            last_name: "Last name",
            pronoun: "Pronoun",
            institution: "Institution",
            country: "Country"
        },
        Edit:true,
        country:country
    },
    methods: {
        updateProfile: function () {
            this.Edit = !this.Edit;
            axios.patch(backendBaseUrl+'/api/users/profile',this.user.profile,{ headers: { Authorization: window.localStorage.getItem("token") }})
            .then(res=>{
                console.log(res);
            })
        },
        toRegistration(){
            window.location.href = '../registration'
        },
        logout: function () {
            window.localStorage.setItem("token", "");
            window.alert("logout successfully!");
            window.location.href = "../login";
        },
        forceQuit: function () {
            window.alert("Please log in first!");
            window.location.href = "../login";
        }
    },
    mounted: function () {

        let token = window.localStorage.getItem("token");
        if (token == null || token == "") {
            console.log("No token detected");
            this.forceQuit();
            return;
        }
        // this.isLogin = isLogin(token);
        axios.get(backendBaseUrl+'/api/users/profile', { headers: { Authorization: window.localStorage.getItem("token") } }
        ).then(res => {
            console.log(res);
            this.user = res.data;
            if(this.user.reg){
                this.user.reg.registration_datetime=moment(this.user.reg.registration_datetime).format("YYYY-MM-DD hh:mm:ss");
            }
        }).catch(err => {
            console.log(err);
            this.forceQuit();
        })
    },
})
