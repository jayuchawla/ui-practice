/* JavaScript DOM Exercises 01 Tutorial: https://youtu.be/EHF7xBUAmrQ */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/

/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (https://forcemipsum.com/)
*/


/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/



/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/


/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/

const paragraph = document.querySelector('p');

// task 1
paragraph.innerHTML = paragraph.innerText.split(' ').map(word => word.length > 8 ? `<span style="background-color:yellow">${word}</span>` : word).join(' ');

// task 2
const link = document.createElement('a')
link.href = 'https://forcemipsum.com/'
link.innerText = 'Text generated'
document.body.appendChild(link)

// task 3
paragraph.innerHTML = paragraph.innerHTML
    .split(/\.[^\.|\<]/)
    .join('.</p><p>') + '</p>';

// task 4
const numberOfWords = document.createElement('p')
numberOfWords.innerText = paragraph.innerText.split(' ').length + ' words'
document.body.insertBefore(numberOfWords, paragraph)

// task 5
Array.from(document.querySelectorAll('p')).forEach((p) => p.innerHTML = p.innerHTML.replace(/\!/g, "😲").replace(/\?/g, "🤔"))