import {backendBaseUrl} from '../assets/js/backendBaseUrl.js';
import {country, isLogin} from '../assets/js/data.js';
var app = new Vue({
    el: '#app',
    data: {
        token:"",
        message: "Hello ",
        first_name: "",
        last_name: "",
        user_info: {},
        user: {},
        reg_info: {
            publication: false,
            is_student: false,
            papers:[],
        },
        reg_fee: {
            student: 20,
            publication: 150,
            non_student: 50
        },
        isErrorPaper:false,
        isEmail: false,
        isFirst_name: false,
        isLast_name: false,
        isInstitution: false,
        isPronoun: false,
        isPassword: false,
        isLessSix: false,
        isPassword2: false,
        isMisMatch: false,
        isCountry: false,
        collapse:[],
        emailErrorMsg:'',
        errorPaperMessage:'',
        isErrorCode: false,
        is_student: false,
        country: country,
        codeModal: {},
        errorModal: {},
        publicationModal: {},
        updateProfileModal:{},
        subSuccessfulModal:{},
        checkPaperModal:{},
        isLogin: false,
        eduMail: [
            "ac.at",
            "ac.bd",
            "ac.be",
            "ac.cn",
            "ac.cy",
            "ac.fj",
            "ac.in",
            "ac.id",
            "ac.ir",
            "ac.il",
            "ac.jp",
            "ac.ke",
            "ac.ma",
            "ac.nz",
            "ac.rw",
            "ac.rs",
            "ac.za",
            "ac.kr",
            "ac.ss",
            "ac.lk",
            "ac.tz",
            "ac.th",
            "ac.ug",
            "ac.uk",
            "ac.ae",
            "edu.ar",
            "edu.au",
            "edu.bd",
            "edu.br",
            "edu.bn",
            "edu.cn",
            "edu.co",
            "edu.dj",
            "edu.ec",
            "edu.eg",
            "edu.sv",
            "edu.er",
            "edu.ee",
            "edu.et",
            "edu.gh",
            "edu.hk",
            "edu.it",
            "edu.in",
            "edu.jm",
            "edu.jo",
            "edu.lb",
            "edu.ly",
            "edu.mo",
            "edu.my",
            "edu.mt",
            "edu.mx",
            "edu.np",
            "edu.ni",
            "edu.ng",
            "edu.om",
            "edu.pk",
            "edu.pe",
            "edu.ph",
            "edu.pl",
            "edu.qa",
            "edu.sa",
            "edu.rs",
            "edu.sg",
            "edu.so",
            "edu.es",
            "edu.sd",
            "edu.tw",
            "edu.tr",
            "edu.ua",
            "edu.uy",
            "edu.vn"
            ],
        uploadFile:{
            cvFile:{},
            success:false,
            fail:false,
            share_inform:false,
            add_mail_list:false,
        }

    },
    methods: {
        Create() {
            axios.post(backendBaseUrl + '/api/users/createprofile', this.user_info, {
                headers: {
                    "access-control-allow-headers": "Content-Type"
                }
            }).then(res=>{
                this.codeModal.hide();
                localStorage.setItem("token", res.data.token);
                console.log(localStorage.getItem("token"));
                axios.post(backendBaseUrl+'/api/users/login',this.user_info
                ).then(res=>{
                    window.location.href = './index.html'
                }).catch(err=>{
                    
                })
                }
            ).catch(err=>{
                    this.isErrorCode = true
                }
            )
        },
        checkForm(){
            let flag = false;
            if(this.user_info.email){
                const regEmail = /^([a-zA-Z]|[0-9])(\w|\.|\-)+@[a-zA-Z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
                if(regEmail.test(this.user_info.email)){
                this.isEmail = false
            }else{
                this.isEmail = true
                flag = true
            }
            }else{
                this.isEmail = true
                flag = true
            }
                if(!this.user_info.first_name || this.user_info.first_name == undefined){
                this.isFirst_name = true
                flag = true
            }else{
                this.isFirst_name = false
            }
                if(!this.user_info.last_name){
                this.isLast_name = true
                flag = true
            }else{
                this.isLast_name = false
            }
                if(!this.user_info.password){
                this.isPassword = true
                flag = true
            }else{
                this.isPassword = false
                if(this.user_info.password != this.user_info.password2){
                flag = true
            }
                if(this.user_info.password.length < 6){
                this.isLessSix = true
                flag = true
            }
                else
                this.isLessSix = false
            }
                if(!this.user_info.password2){
                this.isPassword2 = true
                flag = true
            }else{
                this.isPassword2 = false
                if(this.user_info.password != this.user_info.password2){
                this.passwdMisMatch = true
                flag = true
            }
                else
                this.passwdMisMatch = false
            }
                if(!this.user_info.pronoun){
                this.isPronoun = true
                flag = true
            }else{
                this.isPronoun = false
            }
                if(!this.user_info.institution){
                this.isInstitution = true
                flag = true
            }else{
                this.isInstitution = false
            }
                if(!this.user_info.country){
                this.isCountry = true
                flag = true
            }else{
                this.isCountry = false
            }
                if(flag == true){
                return false
            }
            return true
        },
        checkEmail() {
            if(this.checkForm() == false) return ;
            axios.post(backendBaseUrl + '/api/users/emailverify', {
                email: this.user_info.email
            }).then(res=>{
                    this.codeModal.show();
                }
            ).catch(err=>{
                this.emailErrorMsg = err.response.data.email;
                this.errorModal.show()
                }
            )
        },
        getfile(e) {
            this.uploadFile.cvFile = e.target.files[0];
        },
        submit() {
            if(!this.isLogin){
                console.log('.....')
                window.location.href = '../login';
                return ;
            }
            var formData = new FormData();
            var formData = new window.FormData();
            formData.append('personal_cv', this.uploadFile.cvFile);
            formData.append('share_inform',this.uploadFile.share_inform?"true":"false");
            formData.append('add_mail_list',this.uploadFile.add_mail_list?"true":"false");
            var options = {
                url: backendBaseUrl + '/api/registrations/uploadcv',
                data: formData,
                method: 'post',
                headers: {
                    "Authorization": localStorage.getItem('token')
                }
            }
            axios(options).then(res=>{
                    this.subSuccessfulModal.show()
                    setTimeout(() => {
                        window.location.href = "../userInfo"
                    }, 1500);
                }
            ).catch(err=>{
                this.uploadFile.fail = true;
            })
        },
        logout() {
            console.log("user logout");
            localStorage.setItem('token',"");
            window.location.href = "./index.html"
            this.isLogin = false;
        },
        login(){
            console.log("user login");
            window.location.href="/login";
        },
        updateProfile: function () {
            this.Edit = !this.Edit;
            var url = backendBaseUrl+'/api/users/profile';
            var options = {
                body: JSON.stringify(app.user_info),
                method: 'PATCH',
                headers: {
                    "Authorization":localStorage.getItem('token'),
                    "Content-Type":"application/json;charset=utf-8"
                }
            }

            fetch(url,options).then(res=>{
                return res.json()
            }).then(res=>{
                this.collapse[1].hide();
                this.collapse[2].show();
                this.updateProfileModal.show();
                setTimeout(() => {
                    this.updateProfileModal.hide();
                }, 1500);
            }).catch(err=>{
                console.log(err)
            })
        },
        addPaper(){
            this.publicationModal.show()
        },
        checkPaper(){
            var url = backendBaseUrl+'/api/test/checkpaper';
            for(var i = 0; i < this.reg_info.papers.length; i++){
                if(this.reg_info.id == this.reg_info.papers[i].id){
                    this.checkPaperModal.show();
                    this.publicationModal.hide();
                    setTimeout(() => {
                        this.checkPaperModal.hide();
                    }, 1000);
                    return ;
                }
                    
            }
            if(this.reg_info.id && this.reg_info.title){
                axios.post(url,this.reg_info).then(res=>{
                    this.reg_info.papers.push({id:this.reg_info.id,title:this.reg_info.title})
                    this.publicationModal.hide()
                }).catch(err=>{
                    this.isErrorPaper = true;
                    this.errorPaperMessage = err.response.data.msg
                    console.log(err.response.data.msg)
                })
            }
        },
        nextWindow(){
            this.collapse[3].hide();
            this.collapse[4].show();
        }
    },
    mounted: function() {
        this.codeModal = new bootstrap.Modal(document.getElementById('verifyCode'));
        this.errorModal = new bootstrap.Modal(document.getElementById('Registered'));
        this.publicationModal = new bootstrap.Modal(document.getElementById('publication'));
        this.checkPaperModal = new bootstrap.Modal(document.getElementById('checkPaper'));
        this.updateProfileModal = new bootstrap.Modal(document.getElementById('updateProfile'));
        this.subSuccessfulModal = new bootstrap.Modal(document.getElementById('sumbitSuccessful'));


        var myModalEl = document.getElementById('publication')
        myModalEl.addEventListener('hidden.bs.modal', function (event) {
           if(app.reg_info.papers.length == 0){
               app.reg_info.publication = false;
           }
        });
        var collapse1 = document.getElementById('collapseOne')
        var collapse2 = document.getElementById('collapseTwo')
        var collapse3 = document.getElementById('collapseThree')
        var collapse4 = document.getElementById('collapseFour')
        this.collapse[1]= new bootstrap.Collapse(collapse1, {toggle:false})
        this.collapse[2]= new bootstrap.Collapse(collapse2, {toggle:false})
        this.collapse[3]= new bootstrap.Collapse(collapse3, {toggle:false})
        this.collapse[4]= new bootstrap.Collapse(collapse4, {toggle:false})
        collapse1.addEventListener('show.bs.collapse', function () {
            app.collapse[2].hide();
            app.collapse[3].hide();
            app.collapse[4].hide();
        })
        collapse2.addEventListener('show.bs.collapse', function () {
            app.collapse[1].hide();
            app.collapse[3].hide();
            app.collapse[4].hide();
        })
        collapse3.addEventListener('show.bs.collapse', function () {
            app.collapse[1].hide();
            app.collapse[2].hide();
            app.collapse[4].hide();
        })
        collapse4.addEventListener('show.bs.collapse', function () {
            app.collapse[1].hide();
            app.collapse[2].hide();
            app.collapse[3].hide();
        })

        if(localStorage.getItem('token')){
            axios.get(backendBaseUrl+'/api/users/profile', {
                headers: {
                    "Authorization": localStorage.getItem('token')
                }
            }).then(res => {
                console.log('get response',res);
                this.isLogin = true;
                localStorage.setItem('isLogin',1)
                if(res.data.reg&&res.data.reg.registration){
                    this.collapse[3].show();
                }else{
                    this.collapse[2].show();
                }
                this.user = res.data;
                this.user_info = this.user.profile;
                this.user_info.email=this.user.email;
                if(this.user.reg && this.user.reg.registration){
                    this.reg_info.registration = false;
                }
                else{
                    this.reg_info.registration = true;
                }
                    var is_edu_email=false;
                    for(var i=0;i < this.eduMail.length;i++){
                        var edu_str=this.eduMail[i];
                        if(edu_str==this.user.email.substr(this.user.email.length-edu_str.length)){
                            is_edu_email=true;
                            this.is_student = true;
                            break;
                        }
                    }
                    if(!is_edu_email){
                        this.is_student = false;
                    }
                
            }).catch(err => {this.collapse[1].show()});
        }else{
            this.collapse[1].show()
        }
    },
    watch: {
        token: async function () {
            console.log(`token now is ${this.token}`);
            if (this.token == "") {
                return Promise.resolve();
            } else {
                axios.get(backendBaseUrl + '/api/users/profile',{
                    headers: {
                        "Authorization": this.token
                    }
                }).then(res => {
                    this.isLogin = true;
                    this.user = res.data;
                }).catch(err => {
                    this.token = "";
                    this.user = {};
                    this.isLogin = false;
                });
            }
        },
        'reg_info.publication': {
           handler: function (){
              if(this.reg_info.publication)
                  this.publicationModal.show()
            }
        },
    }
})

paypal
  .Buttons({
      createOrder: () => {
          let token = localStorage.getItem("token");
          if (token == null || token == "") {
              window.alert("login or create a new profile first!")
              return Promise.reject();
          }
        console.log("now is in create order");
        return fetch(backendBaseUrl+'/api/registrations/createorder', {
        method: 'post',
        headers: {
          'content-type': 'application/json',
          'Authorization': localStorage.getItem("token")
        },
        body: JSON.stringify(app.reg_info)
      }).then(function (res) {
        return res.json();
      }).then(function (data) {
        if(data.message == "user already paid and registered!"){
            window.alert(data.message)
            return
        }
        console.log("data is", data);
        return data.orderID; // Use the key sent by your server's response, ex. 'id' or 'token'
      }).catch(err=>{
          console.log('err',err)
      });
    },
    onApprove: (data) => {
      console.log("now is in onApprove");
      return fetch(backendBaseUrl+'/api/registrations/captureorder', {
        method: 'post',
        headers: {
          'content-type': 'application/json',
          'Authorization': localStorage.getItem("token")
        },
        body: JSON.stringify({
          orderID: data.orderID,
        })
      }).then(function (res) {
        window.a = res;
        return res.json();
      })
        .then(function (details) {
          console.log('Transaction approved by ' + details.payer.name.given_name);
          window.location.href = './index.html';
            return Promise.resolve();
        })
    }
}).render('#paypal-button-container');
