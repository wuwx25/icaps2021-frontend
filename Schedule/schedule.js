var app = new Vue({
	el: '#app',
	data: {			
		nowYear: new Date().getFullYear(),
		nowMonth: new Date().getMonth() + 1,
		nowDay: new Date().getDate(),
		nowZone: new Date().getTimezoneOffset() / -60,
		nowHour: (new Date().getTimezoneOffset() / 60) - 4 + new Date().getHours(),
		day:[{sty:'style_day'},2,3,4,5,6,7,8,9,10,11,12,13,14],
		week:1,
		zone: new Date().getTimezoneOffset() / -60 ,			
		zoneOptions:[
			{ text:'GMT+12', value:12},
			{ text:'GMT+11', value:11},
			{ text:'GMT+10', value:10},
			{ text:'GMT+9', value:9},
			{ text:'GMT+8', value:8},
			{ text:'GMT+7', value:7},
			{ text:'GMT+6', value:6},
			{ text:'GMT+5', value:5},
			{ text:'GMT+4', value:4},
			{ text:'GMT+3', value:3},
			{ text:'GMT+2', value:2},
			{ text:'GMT+1', value:1},
			{ text:'GMT+0', value:0},
			{ text:'GMT-1', value:-1},
			{ text:'GMT-2', value:-2},
			{ text:'GMT-3', value:-3},
			{ text:'GMT-4', value:-4},
			{ text:'GMT-5', value:-5},
			{ text:'GMT-6', value:-6},
			{ text:'GMT-7', value:-7},
			{ text:'GMT-8', value:-8},
			{ text:'GMT-9', value:-9},
			{ text:'GMT-10', value:-10},
			{ text:'GMT-11', value:-11},
		],
		date:[' ','1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th','11th','12th','13th','14th'],
		gather:'<div class="gather"><a href="https://gather.town/app/V6z77iZjpGdUzBPo/ICAPS21" target="_blank"><strong>Live Get-Together</strong></a></div>',
		session:[
			' ',
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
			'Probabilistic/Opening remarks',
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
		
	},
	methods:{
		showDay: function(day,hour){
			if (this.zone + hour + 4 < 0) return ('Aug ' + this.date[day-1] + ' ' + (this.zone + hour + 28) + ':00')
			else if (this.zone + hour + 4 > 23) return ('Aug ' + this.date[day+1] + ' ' + (this.zone + hour - 20) + ':00')
			else return ('Aug ' + this.date[day] + ' ' + (this.zone + hour + 4) + ':00');
		},		
		isOver: function(day,hour){
			if (this.nowHour < 0) {
				this.nowHour = this.nowHour + 24;
				this.nowDay--;				
			};
			if (this.nowHour > 23){
				this.nowHour = this.nowHour - 24;
				this.nowDay++;
			};
			// console.log(this.nowYear,this.nowMonth,this.nowDay,this.nowHour);
			if (this.nowYear > 2021) return false
			else if (this.nowYear == 2021 && this.nowMonth > 8) return false
			else if (this.nowYear == 2021 && this.nowMonth == 8 && this.nowDay > day) return false
			else if (this.nowYear == 2021 && this.nowMonth == 8 && this.nowDay == day && this.nowHour > hour) return false
			else return true;
		}
	},	

	computed:{
		
	}
  })
