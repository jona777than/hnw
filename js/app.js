Vue.config.debug = true

var vm = new Vue({
  el: '#main',

  data: {
    newHaveTo: '',
    newNeedTo: '',
    newWantTo: '',
    timeItTakes: 10,
    currentTime: new Date(),
    startTime: '',
    have2s:[
      {name: 'plan my day', time: 5}
    ],
    need2s:[],
    want2s:[],
    committedTasks: [
      {name: 'start the day off right', start: '4:40pm', end: '5:00pm'}
    ]
  },

  ready: function() {
    var that = this;

    setInterval(function(){

        d = new Date();
        var hours = d.getHours();
        var minutes = d.getMinutes();
        var seconds = d.getSeconds();
        var suffix = (hours >= 12)? 'PM' : 'AM';
        hours = (hours > 12)? hours -12 : hours;
        hours = (hours == '00')? 12 : hours;
        seconds = (seconds < 10)? '0'+seconds : seconds;

        that.currentTime = hours+":"+minutes+":"+seconds+" "+suffix;
    }, 1000);
  },

  methods: {
     addH2: function(){
       vm.have2s.push({name: vm.newHaveTo, time: vm.timeItTakes});
    },
     addN2: function(){
       vm.need2s.push({name: vm.newNeedTo, time: vm.timeItTakes});
    },
      addW2: function(){
      vm.want2s.push({name: vm.newWantTo, time: vm.timeItTakes});
    },

    commitTask: function(name, duration){
        //vm.committedTasks.push({name: vm.newHaveTo, time: vm.timeItTakes});
    },

    makeMyDay: function(){
        //vm.have2s
        //vm.need2s
        //vm.want2s
    }
  }


});
