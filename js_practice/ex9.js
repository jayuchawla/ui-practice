/* JavaScript DOM Exercises 02 Tutorial: https://youtu.be/Ky1rr9hEoLM */
/* 
  Exercise 01
  -----------
  A new feature has been added to the Pro plan: '24/7 Phone support'.
  Add this using JavaScript to the list features of the Pro plan.
*/

/* 
  Exercise 02
  -----------
  To make the ordering of the plans more logical, using JavaScript, move the basic plan to be before (to the left) of the pro plan.
*/


/* 
  Exercise 03
  -----------
  To make the Pro plan have a stronger call to action, update the current 'Get started' button to be blue (#007bff) with white text and have the text 'Buy Now' 
*/


/* 
  Exercise 04
  -----------
  There is a special offer on at the moment offering 50% more storage on the Basic plan and 25% more on the Pro plan.
  Update the basic and pro plan cards to reflect the new storage amount being offered. 
*/


/* 
  Exercise 05
  -----------
  You have been asked to add ask a toggle / radio box for annual and monthly payments for the basic and pro plans.
  Add a radio button to toggle between monthly and annual payment options and adjust the prices shown for both plans if the annual option is selected (give two months free if customers pay annually).
*/

// Task 1
document.querySelector("#pro-plan ul").insertAdjacentHTML('beforeend', '<li>24/7 Phone support</li>')


// Task 2
const proPlan = document.querySelector("#pro-plan")
const basicPlan = document.querySelector("#basic-plan")
proPlan.parentNode.insertBefore(basicPlan, proPlan)

// Task 3
const proPlanButton = document.querySelector("#pro-plan button")
proPlanButton.style.backgroundColor = '#007bff'
proPlanButton.style.color = '#ffffff'
proPlanButton.innerText = 'Buy Now'

// Task 4
const basicPlanStorage = document.querySelector("#basic-plan .storage-amount")
const proPlanStorage = document.querySelector("#pro-plan .storage-amount")
basicPlanStorage.innerText = basicPlanStorage.innerText * 1.25
proPlanStorage.innerText = proPlanStorage.innerText * 1.5

// Task 5

document.querySelector('.container').insertAdjacentHTML('afterbegin', '<label>Monthly</label><input id="monthlyPricing" type="radio" name="payment" value="monthly" /><label>Annually</label><input id="annualPricing" type="radio" name="payment" value="annual" />')

const pricing = {
    monthly: {
        basic: '10 / month',
        pro: '30 / month'
    },
    annual: {
        basic: '100 / year',
        pro: '300 / year'
    }
}

const priceBasicNode = document.querySelector("#basic-plan .pricing")
const priceProNode = document.querySelector("#pro-plan .pricing")
const evaluatePricing = (event) => {
    priceBasicNode.innerText = pricing[event.target.value].basic
    priceProNode.innerText = pricing[event.target.value].pro
}
Array.from(document.querySelectorAll(".container input[type=radio]")).forEach((radio) => radio.addEventListener('change', evaluatePricing))