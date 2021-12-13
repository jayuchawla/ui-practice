/*
Exercise 1
--------------
Move the contents of the two paragraphs into one single <p> tag.  Ensure there are no empty <p> tags left on the page.
*/

/*
Exercise 2
--------------
Reduce the font-size of the paragraph text to be half the size of the menu text.
*/

/*
Exercise 3
--------------
Move the ‘Services’ menu item to be before the ‘About’ menu item (after Home).
*/

/*
  Exercise 04
  -----------
  Create the following new entries in the menu: FAQs, Pricing
*/

/*
Exercise 5
--------------
Add a hover effect to the menu items so when the user hovers over them the background and font-size change.  (Must be done with JavaScript!)
*/

// Task 1
const paragraphs = Array.from(document.querySelectorAll("#hero p"))
paragraphs[0].insertAdjacentHTML('beforeend', paragraphs[1].innerHTML)
paragraphs[1].remove()

// Task 2
const menuItem = document.querySelector(".menu ul li")
// get font-size of list item from as it appears on the page
const listItemFontSize = parseInt(window.getComputedStyle(menuItem).getPropertyValue('font-size'))

document.querySelector("#hero p").style['font-size'] = `${listItemFontSize / 2}px`

// Task 3
const listItems = document.querySelectorAll('.menu ul li')
listItems[1].insertAdjacentElement('beforebegin', listItems[2])

// Task 4
const faqElement = document.createElement('li')
faqElement.innerText = 'FAQs'
const pricingElement = document.createElement('li')
pricingElement.innerText = 'Pricing'
document.querySelector('.menu ul').appendChild(faqElement)
document.querySelector('.menu ul').appendChild(pricingElement)

// Task 5
const hoverEffect = (event) => {
    const element = event.target
    element.style['background-color'] = '#123456';
    element.style['color'] = '#ffffff';
    element.style['font-size'] = '20px';
}

const hoverEffectReset = (event) => {
    const element = event.target
    element.style['background-color'] = '#ffffff';
    element.style['color'] = '#000000';
    element.style['font-size'] = '16px';
}

const listItemsModified = document.querySelectorAll('.menu ul li')

Array.from(listItemsModified).forEach((menuItem => {
    menuItem.addEventListener('mouseover', hoverEffect)
    menuItem.addEventListener('mouseleave', hoverEffectReset)
}))