var slider = document.getElementById("myRange");
var output = document.getElementById("slideRange");

output.innerHTML = slider.value;
slider.oninput = function () {
  output.innerHTML = this.value;
}

var sumContainer = $('.sumContainer');
var currentVal = slider.valueAsNumber;
currentVal = 30;

var submit = $('.submit');
submit.on("click", pushVal);

function pushVal (){
   event.preventDefault();
   alert("Your score is " + currentVal + " .");
};
  
  
// The JS to capture the value for all of the slider values was way more complex than I anticipated. Therefore, I hard-coded an actual value of the slider 
// and the browser will show an alert notifying the user of their score. Feel free to amend/adjust as you need to fit your preference. I hope this helps. Let me know if you n
// need anything else. -Dom

//Okay, thank you so much!! -Autumn

// Sure! Also, make sure it works. I am receiving a notification on my end. Make sure you experience the same.

//When I click submit, it doesn't seem to do anything...am I supposed to click something else?
//There is supposed to be an alert box that has the score message. 
//I don't see it on my end, but I'm checking to see if it works for any of my group members.
//Update: they said they don't see an alert either 
//My update: Check again. I realized that your html for the source page didn't have the jquery library linked. It should work now. 
//It works! Thank you so much!! I appreciate it!