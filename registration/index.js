var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      user_info:{

      }
    },
    mounted:function(){
      axios.defaults.baseURL=window.location.protocol+"//"+window.location.hostname+":5438";
      
    }

  })