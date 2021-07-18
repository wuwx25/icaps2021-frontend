import {backendBaseUrl} from '../assets/js/backendBaseUrl.js';
import {Vue, store,header} from '/assets/component/myheader.js';
let paper = await fetch('/assets/data/paper.json').then(res=>res.json());
var app = new Vue({
    el: '#app',
    store: store,
    data: {
        curPaper:{},
        paperData:paper,
        channel:67
    },
    mounted(){
       this.curPaper = this.paperData.find(Element => Element.id == this.channel)
    }
})