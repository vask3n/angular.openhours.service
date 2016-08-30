(function() {
  'use strict';
  
  angular.module('appModule').service('openHoursService', service);

  function service() {

    var open = {
      days: [1, 2, 3, 4, 5],
      from: '0830',
      till: '1700'
    }

    var self = this;
    self.isOpen = isOpen();

    function isOpenDay(day) {
        var val = false;
        for (var i = 0; i < open.days.length; i++) {
            if (day === open.days[i]) {
              val = true;
            }
        }
        return val;
    }

    function isOpenTime(now) {
        var time = (now.getHours() + '' + now.getMinutes());
        return (time > open.from && time < open.till);
    }

    function isOpen() {
      var now = new Date;
      return (isOpenDay(now.getDay()) === true && isOpenTime(now) === true);
    }

  }
})();