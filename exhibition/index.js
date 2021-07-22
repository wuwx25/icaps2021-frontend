import {Vue, store, header} from '/assets/component/myheader.js';
import {paperData} from '../Schedule/paperData.js';
let paper = await fetch('/assets/data/paper.json').then(res => res.json());
var app = new Vue({
    el: '#app',
    store: store,
    data: {
        curPaper: {},
        paperData: paper,
        channel:"general"
    },
    mounted() {
        if(localStorage.getItem("channel")){
            this.channel=localStorage.getItem("channel");
        };
       
        this.curPaper = this.paperData.find(Element => Element.id == localStorage.getItem('channel'))
    }
})
var app = new Vue({
    el: '#app2',
    store: store,
    data: {
        channel:"general",
        timer:""
    },
    methods:{
        logout:function(){
            console.log("logout",document.getElementById('iframe').title);
            document.getElementById('iframe').contentWindow.postMessage({
                externalCommand: 'logout'
              }, '*')
        }
    },
    mounted() {
        if(localStorage.getItem("channel")){
            this.channel=localStorage.getItem("channel");
        }
        //this.logout();
    },
    beforeDestroy() {
        clearInterval(this.timer);
    }
})
var app = new Vue({
    el: '#app3',
    store: store,
    data:{
        sessionNum:'',
        paper:paperData,
        date2:'',
        time:'',
        end:'',
        session:[
            '',
            'Classical',
            'Classical',
            'Classical/search',
            'Search',
            'Search',
            'Classical/search',			
            'Classical/path/search',
            'Path/search',
            'Hybrid/conformant',
            'ND/OSP',
            'Probabilistic',
            'RL',
            'RL',
            'Temporal/numeric/RL',
            'Temporal/numeric/RL',
            'Scheduling',
            'Scheduling',
            'Explainable/richer formalisms',
            'HTN',
            'Representation/generalized',
            'Representation/POCL/multi-agent',
            'Probabilistic/scheduling/robotics',
            'Execution/control'
        ],
        zone: new Date().getTimezoneOffset() / -60 ,
        date:[' ','1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th','11th','12th','13th','14th'],
    },
    methods:{
        setChannelID: function(id){
            window.localStorage.setItem("channel",id);
        },
        showModalDay: function(day,time,end){
            if (this.zone + time + 4 < 0) return ('Aug ' + this.date[day-1] + ' ' + (this.zone + time + 28) + ':00 - ' + (this.zone + end + 28) + ':00')
            else if (this.zone + time + 4 > 23) return ('Aug ' + this.date[day+1] + ' ' + (this.zone + time - 20) + ':00 - ' + (this.zone + end - 20) + ':00')
            else return ('Aug ' + this.date[day] + ' ' + (this.zone + time + 4) + ':00 - ' + (this.zone + end + 4) + ':00');
        },
        sessionSelect: function(id){
            if (id == localStorage.getItem("channel")){
                return "font-weight: 700;"
            }
        }
    },
    mounted(){
        if(localStorage.getItem("sessionNum")){
            this.sessionNum=parseInt(localStorage.getItem("sessionNum"));
        };
        if(localStorage.getItem("date")){
            this.date2=parseInt(localStorage.getItem("date"));
        };
        if(localStorage.getItem("time")){
            this.time=parseInt(localStorage.getItem("time"));
        };
        if(localStorage.getItem("end")){
            this.end=parseInt(localStorage.getItem("end"));
        }
    }
})