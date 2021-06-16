var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      user_info:{
        
      },
	
    },
    mounted:function(){
        console.log("这是moutned")
      axios.defaults.baseURL=window.location.protocol+"//"+window.location.hostname+":5438";
    },
	methods:{
		next:function (){
		    console.log('next..............')
		}
	}
  })