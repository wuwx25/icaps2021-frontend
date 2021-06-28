 var app = new Vue({
    el:'#app',
    data:{
    message:"Hello ",
    first_name: "",
    last_name: "",
    user_info:{
    },
    user:{},
    reg_info:{
        publication:false,
        is_student:false,
    },
    reg_fee:{
        student:20,
        publication:150,
        non_student:50
    },
    emailVerify:'',
    isEmail:false,
    isFirst_name:false,
    isLast_name:false,
    isInstitution:false,
    isPronoun:false,
    isPassword:false,
    isLessSix:false,
    isPassword2:false,
    isMisMatch:false,
    isCountry:false,
    isErrorCode:false,
    showOne:true,
    showTwo:false,
    country:
    [
    "AFGHANISTAN",
    "ÅLAND ISLANDS",
    "ALBANIA",
    "ALGERIA",
    "AMERICAN SAMOA",
    "ANDORRA",
    "ANGOLA",
    "ANGUILLA",
    "ANTARCTICA",
    "ANTIGUA AND BARBUDA",
    "ARGENTINA",
    "ARMENIA",
    "ARUBA",
    "AUSTRALIA",
    "AUSTRIA",
    "AZERBAIJAN",
    "BAHAMAS",
    "BAHRAIN",
    "BANGLADESH",
    "BARBADOS",
    "BELARUS",
    "BELGIUM",
    "BELIZE",
    "BENIN",
    "BERMUDA",
    "BHUTAN",
    "BOLIVIA",
    "PLURINATIONAL STATE OF",
    "BOSNIA AND HERZEGOVINA",
    "BOTSWANA",
    "BOUVET ISLAND",
    "BRAZIL",
    "BRITISH INDIAN OCEAN TERRITORY",
    "BRUNEI DARUSSALAM",
    "BULGARIA",
    "BURKINA FASO",
    "BURUNDI",
    "CAMBODIA",
    "CAMEROON",
    "CANADA",
    "CAPE VERDE",
    "CAYMAN ISLANDS",
    "CENTRAL AFRICAN REPUBLIC",
    "CHAD",
    "CHILE",
    "CHINA",
    "CHRISTMAS ISLAND",
    "COCOS (KEELING) ISLANDS",
    "COLOMBIA",
    "COMOROS",
    "CONGO",
    "CONGO",
    "THE DEMOCRATIC REPUBLIC OF THE",
    "COOK ISLANDS",
    "COSTA RICA",
    "CÔTE D'IVOIRE",
    "CROATIA",
    "CUBA",
    "CYPRUS",
    "CZECH REPUBLIC",
    "DENMARK",
    "DJIBOUTI",
    "DOMINICA",
    "DOMINICAN REPUBLIC",
    "ECUADOR",
    "EGYPT",
    "EL SALVADOR",
    "EQUATORIAL GUINEA",
    "ERITREA",
    "ESTONIA",
    "ETHIOPIA",
    "FALKLAND ISLANDS (MALVINAS)",
    "FAROE ISLANDS",
    "FIJI",
    "FINLAND",
    "FRANCE",
    "FRENCH GUIANA",
    "FRENCH POLYNESIA",
    "FRENCH SOUTHERN TERRITORIES",
    "GABON",
    "GAMBIA",
    "GEORGIA",
    "GERMANY",
    "GHANA",
    "GIBRALTAR",
    "GREECE",
    "GREENLAND",
    "GRENADA",
    "GUADELOUPE",
    "GUAM",
    "GUATEMALA",
    "GUERNSEY",
    "GUINEA",
    "GUINEA-BISSAU",
    "GUYANA",
    "HAITI",
    "HEARD ISLAND AND MCDONALD ISLANDS",
    "HOLY SEE (VATICAN CITY STATE)",
    "HONDURAS",
    "HONG KONG",
    "HUNGARY",
    "ICELAND",
    "INDIA",
    "INDONESIA",
    "IRAN",
    "ISLAMIC REPUBLIC OF",
    "IRAQ",
    "IRELAND",
    "ISLE OF MAN",
    "ISRAEL",
    "ITALY",
    "JAMAICA",
    "JAPAN",
    "JERSEY",
    "JORDAN",
    "KAZAKHSTAN",
    "KENYA",
    "KIRIBATI",
    "KOREA",
    "DEMOCRATIC PEOPLE'S REPUBLIC OF",
    "KOREA",
    "REPUBLIC OF",
    "KUWAIT",
    "KYRGYZSTAN",
    "LAO PEOPLE'S DEMOCRATIC REPUBLIC",
    "LATVIA",
    "LEBANON",
    "LESOTHO",
    "LIBERIA",
    "LIBYAN ARAB JAMAHIRIYA",
    "LIECHTENSTEIN",
    "LITHUANIA",
    "LUXEMBOURG",
    "MACAO",
    "MACEDONIA",
    "THE FORMER YUGOSLAV REPUBLIC OF",
    "MADAGASCAR",
    "MALAWI",
    "MALAYSIA",
    "MALDIVES",
    "MALI",
    "MALTA",
    "MARSHALL ISLANDS",
    "MARTINIQUE",
    "MAURITANIA",
    "MAURITIUS",
    "MAYOTTE",
    "MEXICO",
    "MICRONESIA",
    "FEDERATED STATES OF",
    "MOLDOVA",
    "REPUBLIC OF",
    "MONACO",
    "MONGOLIA",
    "MONTENEGRO",
    "MONTSERRAT",
    "MOROCCO",
    "MOZAMBIQUE",
    "MYANMAR",
    "NAMIBIA",
    "NAURU",
    "NEPAL",
    "NETHERLANDS",
    "NETHERLANDS ANTILLES",
    "NEW CALEDONIA",
    "NEW ZEALAND",
    "NICARAGUA",
    "NIGER",
    "NIGERIA",
    "NIUE",
    "NORFOLK ISLAND",
    "NORTHERN MARIANA ISLANDS",
    "NORWAY",
    "OMAN",
    "PAKISTAN",
    "PALAU",
    "PALESTINIAN TERRITORY",
    "OCCUPIED",
    "PANAMA",
    "PAPUA NEW GUINEA",
    "PARAGUAY",
    "PERU",
    "PHILIPPINES",
    "PITCAIRN",
    "POLAND",
    "PORTUGAL",
    "PUERTO RICO",
    "QATAR",
    "REUNION",
    "ROMANIA",
    "RUSSIAN FEDERATION",
    "RWANDA",
    "SAINT BARTHÉLEMY",
    "SAINT HELENA",
    "SAINT KITTS AND NEVIS",
    "SAINT LUCIA",
    "SAINT MARTIN",
    "SAINT PIERRE AND MIQUELON",
    "SAINT VINCENT AND THE GRENADINES",
    "SAMOA",
    "SAN MARINO",
    "SAO TOME AND PRINCIPE",
    "SAUDI ARABIA",
    "SENEGAL",
    "SERBIA",
    "SEYCHELLES",
    "SIERRA LEONE",
    "SINGAPORE",
    "SLOVAKIA",
    "SLOVENIA",
    "SOLOMON ISLANDS",
    "SOMALIA",
    "SOUTH AFRICA",
    "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS",
    "SPAIN",
    "SRI LANKA",
    "SUDAN",
    "SURINAME",
    "SVALBARD AND JAN MAYEN",
    "SWAZILAND",
    "SWEDEN",
    "SWITZERLAND",
    "SYRIAN ARAB REPUBLIC",
    "TAIWAN",
    "PROVINCE OF CHINA",
    "TAJIKISTAN",
    "TANZANIA",
    "UNITED REPUBLIC OF",
    "THAILAND",
    "TIMOR-LESTE",
    "TOGO",
    "TOKELAU",
    "TONGA",
    "TRINIDAD AND TOBAGO",
    "TUNISIA",
    "TURKEY",
    "TURKMENISTAN",
    "TURKS AND CAICOS ISLANDS",
    "TUVALU",
    "UGANDA",
    "UKRAINE",
    "UNITED ARAB EMIRATES",
    "UNITED KINGDOM",
    "UNITED STATES",
    "UNITED STATES MINOR OUTLYING ISLANDS",
    "URUGUAY",
    "UZBEKISTAN",
    "VANUATU",
    "VENEZUELA",
    "BOLIVARIAN REPUBLIC OF",
    "VIET NAM",
    "VIRGIN ISLANDS",
    "BRITISH",
    "VIRGIN ISLANDS",
    "U.S.",
    "WALLIS AND FUTUNA",
    "WESTERN SAHARA",
    "YEMEN",
    "ZAMBIA",
    "ZIMBABWE"
    ],
    codeModal:{},
    errorModal:{},
    isLogin:false,
},
    methods:{
    Create(){
    console.log(this.user_info.email)
    axios.post('http://192.168.0.224:5438/api/users/createprofile',this.user_info,{
    headers:{
    "access-control-allow-headers": "Content-Type"
    }
    }).then(res=>{
        this.isErrorCode = false;
        this.codeModal.hide();
        axios.post('http://192.168.0.224:5438/api/users/login', this.user_info)
        .then(res => {
            localStorage.setItem("token",res.data.token);
            console.log(localStorage.getItem("token"));
        
    })
    }).catch(err=>{
        this.isErrorCode = true
    })
    },
    checkForm(){
    let flag = false;
    if(this.user_info.email){
    const regEmail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
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
    checkEmail(){
    if(this.checkForm() == false) return ;

        axios.post('http://192.168.0.224:5438/api/users/emailverify',{email:this.user_info.email}
        ).then(res => {
            this.codeModal.show();
           
            
            }).catch(err=>{
                window.err=err;
                console.log(err);
                this.errorModal.show()
            })
         },
        },
    mounted:function() {
        this.country.sort();
        this.codeModal = new bootstrap.Modal(document.getElementById('verifyCode'));
        this.errorModal = new bootstrap.Modal(document.getElementById('Registered'));
        if(localStorage.getItem('token')){
            axios.get('http://192.168.0.224:5438/api/users/profile', {
                headers: {
                    "Authorization": localStorage.getItem('token')
                }
            }).then(res => {
                console.log('get response',res);
                this.showOne = false;
                this.showTwo = true;
                this.isLogin = true;
                this.user = res.data;
            }).catch(err => { console.log(err) });
        }

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
        return fetch('http://192.168.0.224:5438/api/registrations/createorder', {
        method: 'post',
        headers: {
          'content-type': 'application/json',
          'Authorization': localStorage.getItem("token")
        },
        body: JSON.stringify(app.reg_info)
      }).then(function (res) {
        return res.json();
      }).then(function (data) {
        console.log("data is", data);
        return data.orderID; // Use the key sent by your server's response, ex. 'id' or 'token'
      });
    },
    onApprove: (data) => {
      console.log("now is in onApprove");
      return fetch('http://192.168.0.224:5438/api/registrations/captureorder', {
        method: 'post',
        headers: {
          'content-type': 'application/json',
          'Authorization': localStorage.getItem("token")
        },
        body: JSON.stringify({
          orderID: data.orderID,
        })
      }).then(function (res) {
        console.log("get response", res);
        window.a = res;
        return res.json();
      })
        .then(function (details) {
          console.log('Transaction approved by ' + details.payer.name.given_name);
        //   window.alert('Transaction approved by ' + details.payer.name.given_name);
            window.location.href="../userInfo";
            return Promise.resolve();
        })
    }
  })
  .render('#paypal-button-container');