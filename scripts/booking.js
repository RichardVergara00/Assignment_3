/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var cost_per_day = 0;
var number_of_days = 0;
var mon = document.getElementById("monday");
var tue =document.getElementById("tuesday");
var wed = document.getElementById("wednesday");
var thurs = document.getElementById("thursday");
var fri = document.getElementById("friday");
var cleardays = document.getElementById("clear-button");
var half_day = document.getElementById("half");
var full_day = document.getElementById("full");
var calculatedcost = document.getElementById("calculated-cost");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function colour_change_days_of_week(){
    if(this.classList.contains('blue-hover')){
        this.classList.add("clicked");
        number_of_days = number_of_days + 1;
        cost_per_day = 35;
    }
    updated_calculation();
}
    mon.addEventListener("click", colour_change_days_of_week);
    tue.addEventListener("click", colour_change_days_of_week);
    wed.addEventListener("click", colour_change_days_of_week);
    thurs.addEventListener("click", colour_change_days_of_week);
    fri.addEventListener("click", colour_change_days_of_week);

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function clear_days(){
    mon.classList.remove("clicked");
    tue.classList.remove("clicked");
    wed.classList.remove("clicked");
    thurs.classList.remove("clicked");
    fri.classList.remove("clicked");
    number_of_days = 0;
    updated_calculation();
}
    cleardays.addEventListener("click", clear_days);


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function change_rate() {
    if (this === half_day){
        cost_per_day = 20;
        half_day.classList.add("clicked");
        full_day.classList.remove("clicked");
    }   
    else if(this === full_day){
        cost_per_day = 35;
        full_day.classList.add("clicked");
        half_day.classList.remove("clicked");
    }
    updated_calculation();
}
    half_day.addEventListener("click", change_rate);
    full_day.addEventListener("click", change_rate);
// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function updated_calculation(){
    let overallcost = cost_per_day * number_of_days;
    calculatedcost.innerHTML = overallcost;
}