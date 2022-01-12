
function checkform() {
        const input = document.getElementsByTagName("input")
        let cansubmit = true;

        console.log("checkform")

        for (let i = 0; i < input.length; i++) {
            if (input[i].value.length == 0) cansubmit = false;
            console.log(input[i].value.length)

        }

        console.log(input.length)

        document.getElementById('submitButton').disabled = !cansubmit;

}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth'
    
  });
  var calendar = new FullCalendar.Calendar(calendarEl, {
  contentHeight: 520

});


var date = new Date("2021-10-10" + 'T00:00:00'); // will be in local time
              calendar.addEvent({
                title: 'dynamic event',
                start: date,
                allDay: true
              });
  calendar.render();
  

});


document.getElementById('form').onsubmit = function(e) {
  e.preventDefault();
 
  let date = document.querySelector('#date').value;
  
  localStorage["date"] = date;

  console.log(localStorage);

}





   




