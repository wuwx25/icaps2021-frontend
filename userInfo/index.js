//import {backendBaseUrl} from '../assets/js/backendBaseUrl.js'
let backendBaseUrl = 'http://192.168.0.224:5438'
var app = new Vue({
    el: '#app',
    data: {
        message:"hello wdnmd",
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
    },
    methods: {
        updateProfile: function () {
            this.Edit = !this.Edit;
            console.log(user.profile)
        },
        logout: function () {
            localStorage.setItem("token", "");
            window.alert("Log out seccessfully!");
            window.location.href = "../login";
        },
        forceQuit: function () {
            window.alert("Please log in first!");
            window.location.href = "../login";
        }
    },
    mounted: function () {
        let token = localStorage.getItem("token");
        if (token == null || token == "") {
            console.log("No token detected");
            this.forceQuit();
            return;
        }
        axios.get(backendBaseUrl+'/api/users/profile', { headers: { Authorization: localStorage.getItem("token") } }
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
    }
})
var header = new Vue({
    el: '#header',
    data: {
        message: "hello wdnmd",
        user: {
        }
    },
    methods: {
        logout: function () {
            localStorage.setItem("token", null);
            window.alert("Log out seccessfully!");
            window.location.href = "../login";
        }
    },
})