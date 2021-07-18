import {Vue, store, header} from '/assets/component/myheader.js';
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
        }
        this.curPaper = this.paperData.find(Element => Element.id == localStorage.getItem('channel'))
    }
})
var app = new Vue({
    el: '#app2',
    store: store,
    data: {
        channel:"general"
    },
    mounted() {
        if(localStorage.getItem("channel")){
            this.channel=localStorage.getItem("channel");
        }
    }
})