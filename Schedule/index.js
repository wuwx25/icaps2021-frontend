var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      speakers:[
        {name:'Richard Sutton',department:"University of Alberta"},
        // {name:'Jieping Ye',department:"University of Michigan & Beike"},
        // {name:'Manuela\nVeloso',department:"J.P. Morgan AI Research"},
        // {name:'Stefan\nEdelkamp',department:"King's College London"},
      ]
    },
    mounted:function(){
      axios.defaults.baseURL=window.location.origin;
      axios.get('/assets/data/speakers.json')
            .then(res=>{
              console.log(res);
              console.log(this.speakers);
              this.speakers=res.data;
            })
            .catch(
              err=>{console.log(err);}
            );
    }

  })