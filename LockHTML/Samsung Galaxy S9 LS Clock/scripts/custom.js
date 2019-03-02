$(document).ready(() => {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const newDate = new Date();
  newDate.setDate(newDate.getDate());
  
  window.onload = function () {
    clock();
    function clock() {
      const now = new Date();
      const TwentyFourHour = now.getHours();
      let hour = now.getHours();
      let min = now.getMinutes();
      const seconds = new Date().getSeconds();
      let mid = 'PM';
      if (min < 10) {
        min = `0${min}`;
      }
      if (hour > 12) { // If you want the time to be in 24 hour format change "12" to "24".
        hour -= 12;
      }
      if (hour === 0) {
        hour = 12;
      }
      if (hour < 10) {
        hour = `0${hour}`;
      }
      if (TwentyFourHour < 12) {
        mid = 'AM';
      }
      document.getElementById('time').innerHTML = `${hour}<br>${min}`;
      setTimeout(clock, 1000);
    }
  };

  $('#date').html(`<br>${dayNames[newDate.getDay()]} ${newDate.getDate()} ${monthNames[newDate.getMonth()]}`);
});
