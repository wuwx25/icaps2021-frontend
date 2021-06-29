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
            axios.post('http://192.168.0.224:5438/api/users/login',this.user
            ).then(res=>{
                localStorage.setItem("token",res.data.token);
                window.location.href = "../userInfo";
            }).catch(err=>{
                console.log(err)
                this.user.password = ''
            })
        },
    },
    mounted(){
        var userAgent = navigator.userAgent;
        var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1;
        this.SafariModal = new bootstrap.Modal(document.getElementById('SafariModal'))
        if(isSafari)
            this.SafariModal.show()

    }
})