$('#submit-btn').click(changeBackground);


function changeBackground(event) {
  event.preventDefault();
  var userInput = $('#city-type').val();
  userInput = userInput.toLowerCase();
  if (userInput === 'nyc' || userInput === 'new york' || userInput === 'new york city') {
    clearBackground();
    $('body').addClass('nyc');
  } else if (userInput === 'la' || userInput === 'los angeles' || userInput === 'lax') {
    clearBackground();
    $('body').addClass('la');
  } else if (userInput === 'sydney' || userInput === 'nsw') {
    clearBackground();
    $('body').addClass('sydney');
  } else if (userInput === 'austin' || userInput === 'atx') {
    clearBackground();
    $('body').addClass('austin');
  } else if (userInput === 'sf' || userInput === 'san francisco' || userInput ==='bay area') {
    clearBackground();
    $('body').addClass('sf');
  }
  // else if($('body').css == 'nyc'){
  //   $("body").removeAttr('style');
  // }
}

// var form = document.getElementById("city-type");
// form.reset();

// var1.value = '0';

  // $("body").removeClass('la, nyc');

// } else if (userInput === 'sf') {
//   $('body').addClass('sf');
// }

function clearBackground() {
  $("body").removeClass('nyc la sydney austin sf');
}
