
const GITHUB_URL = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json';
const SOURCES = {
	github: []
};


/***** USER STORIES -- HOME PAGE *****/

/*1. User should be able to type in
  and submit a job title.
*/

function captureUserJob() {
	
	$('.js-job-form').submit(function(event) {
		event.preventDefault();
		let userInput = $('.js-job-entry').val().trim();
		let userLocation = $('.js-location').val().trim();
		getDataFromGithubApi(userInput, userLocation, handleGithubApiResults);
	});

	
	console.log('captureUserJob, ran');
}

function printJobEntry(str) {
	console.log(str);
}

/*2. User should be able to check which
job site they want to search for given 
job title in user story #1.
*/
function checkJobSite() {
	console.log('checkJobSite, ran');
}

/*3. Based on the job title given and 
job site checked the user be able to 
retrieve data from API and and results
displayed in HTML
*/
function getDataFromGithubApi(description, location, callback) {
	const query = {
		description: description,
	    location: location,
	    page: 0
	};

	$.getJSON(GITHUB_URL, query, callback);
	console.log('getDataFromGithubApi, ran');
}

function handleGithubApiResults(response) { 
	response.forEach(item => SOURCES.github.push(item)); //push each response to SOURCES by reference
     renderApiResults();
	console.log('handleGithubApiResults, ran');
}

function githubResultHtml(result) {
	// 
	return `<li>
				<img class="company_logo" src="${result.company_logo}">
				<span class="title">${result.title} |</span>
				<span class="company">${result.company} |</span>
				<span class="location">${result.location} |</span>
				<span class="type">${result.type}</span>
				<div class='btn-group'>
				  <button class="apply">Apply</button>
				  <button class="save">Save</button>
				</div>
			</li>`;
}

function renderApiResults() {
	let githubHtml = SOURCES.github.map(githubResultHtml);
	$('.js-results ul').html(githubHtml);

	console.log('renderApiResults, ran');
}

/*4. User should be able to click the
'apply' button and be taken to job
application website to apply.
*/

function applyToJob() {
	console.log('applyToJob, ran');
}

/*5. User should be able to save job
and the saved show up in the saved job tab.
*/

function saveJob() {
	console.log('saveJob, ran');
}

/*Object called searches that's saved in
in local.
AppliedJobs object that shows which
jobs the user applied to. 
Look into Local storage API. Third tab that
allows the user to manage data. Add, delete,
and edit data in local storage API.
*/

/***** USER STORIES -- SAVED JOBS PAGE ******/

/*6. User should be able to add date they
applied for in a input element. Make the
user enter in the date in this format
mm/dd/yyyy. Default to today's date for user.
HTML date input type. Look for jQuery plugin
that is a date picker.
*/

function addDateToJob() {
	console.log('addDateToJob, ran');
}

/*7. User should be able to click yes or
no option for 'Cover Letter' checkboxes
and browser should remember which value was
checked.
*/
function checkCoverLetter() {
	console.log('checkCoverLetter, ran');
}

/*8. User should be able to upload resume,
but input field should only reflect the 
resume file name not the file itself. Add
Add warning text when user hovers over
input field.

Also, only allow the user to select one value.
*/

function grabResumeTitle() {
	console.log('grabResumeTitle, ran');
}

/*9. User should be able to check either
checkbox for the 'Follow up email?' field.
Only allow the user to select one value at
a time.
*/

function checkFollowUpEmail() {
	console.log('checkFollowUpEmail, ran');
}



$(captureUserJob);