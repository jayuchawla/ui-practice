/*
  Exercise 01
  -----------
  Add 3 additional jobs to the 'Jobs' section of the page by copying the template in the initial 'job-card'.
*/

/*
  Exercise 02
  -----------
  Update the job titles of the new jobs to be: JavaScript Developer, Java Developer, Python Developer
*/

/*
  Exercise 03
  -----------
  Update the number of jobs listed in the hero section to indicate how many jobs you have listed in the 'Jobs section'.
*/

/*
  Exercise 04
  -----------
  Configure the search input box to filter jobs listed to only match the text that has been provided in the search. Check for the search text in the job title heading.
*/

/*
  Exercise 05
  -----------
  Configure the 'All jobs' button to reset the search and show all jobs available on the page
*/

// Task 1 & Task 2
const existingJobNode = document.querySelector(".jobs .job-card");
const job2 = existingJobNode.cloneNode(true);
job2.querySelector("h3").innerText = 'JavaScript Developer';

const job3 = existingJobNode.cloneNode(true);
job3.querySelector("h3").innerText = 'Java Developer';

const job4 = existingJobNode.cloneNode(true);
job4.querySelector("h3").innerText = 'Python Developer';

existingJobNode.insertAdjacentElement('afterend', job2)
job2.insertAdjacentElement('afterend', job3)
job3.insertAdjacentElement('afterend', job4)

// Task 3
const numberOfJobs = document.querySelector(".hero h2 span")
numberOfJobs.innerText = document.querySelectorAll(".jobs .job-card").length

// Task 4
document.querySelector("#search")
        .addEventListener('keyup', (event) => {
            const elem = event.target;
            Array.from(document.querySelectorAll(".jobs .job-card"))
                .forEach((job) => {
                    const jobTitle = job.querySelector('h3').innerText;
                    if(!jobTitle.toLowerCase().includes(elem.value.toLowerCase())) {
                        job.style.display = 'none';
                    } else {
                        job.style.display = 'block';
                    }
                })
        })

// Task 5
document.querySelector('#show-all')
        .addEventListener('click', (event) => {
            Array.from(document.querySelectorAll(".jobs .job-card"))
                .forEach((job) => {
                    job.style.display = 'block'
                })
                document.querySelector("#search").value = ''
        })