// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  // TODO: Add a listener for click events on the save button.
  // local storage for hour and text input value
  $('.btn').on('click', function(){
    var key = $(this).parent().attr('id').split('-')[1];
    var value = $(this).parent().find('.description').val();
    localStorage.setItem(key, value);
  })
  });

  // define variables for current hour using (dayjs) and block hour using (this)
  var currHour = dayjs().format('HH');
  $(".time-block").each(function() {
    var calendarHour = $(this).attr('id').split('-')[1];
    
  // TODO: Add code to get any user input that was saved in localStorage
  // define variables to get input text entry from local storage
    var textEntry = localStorage.getItem(calendarHour);
    var textArea = $(this).find('.description');
    textArea.val(textEntry); 
    
  // TODO: Add code to apply the past, present, or future class to each time
  // compare blockhour and current hour from dayjs to apply css per hour
    if (calendarHour < currHour) {
      $(this).find('.description').addClass('past');
    } else if (calendarHour === currHour) {
      $(this).find('.description').addClass('present');
    } else {
      $(this).find('.description').addClass('future');
    };
  })
  
  // TODO: Add code to display the current date in the header of the page.
  // display date using Dayjs
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D h:mm a'));

