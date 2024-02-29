/*=============== CHANGE THEME ===============*/

// Get the checkbox element
const checkbox = document.querySelector('.toggle');

// Function to toggle theme
function toggleTheme() {
  document.body.classList.toggle('dim-theme', checkbox.checked);
}

// Add event listener for checkbox change
checkbox.addEventListener('change', toggleTheme);

// Initialize theme on page load
toggleTheme();
/*=============== GOTO DOCS ===============*/
// Add click event listener to the button
document.getElementById('Docs').addEventListener('click', function () {
  // Redirect to the desired URL
  window.open('https://github.com/aarjaycreation/alertwise', '_blank');
});

/*=============== GOTO REPO ===============*/
// Add click event listener to the button
document.getElementById('Alertwise_REPO').addEventListener('click', function () {
  // Redirect to the desired URL
  window.open('https://github.com/aarjaycreation/alertwise', '_blank');
});
// Array of cool messages
const coolMessages = [
  "You're awesome!",
  "Stay cool!",
  "You rock!",
  "Keep being awesome!",
  "You're the best!",
  "Be your amazing self!",
  "You're a star!",
  "Keep shining!",
  "You're fantastic!",
  "You're incredible!",
  "Keep up the good work!",
  "You're unstoppable!",
  "You're a superhero!",
  "You're amazing!",
  "You're outstanding!",
  "You're phenomenal!",
  "You're extraordinary!",
  "You're remarkable!",
  "You're legendary!",
  "You're exceptional!",
  "You're splendid!",
  "You're magnificent!",
  "You're superb!",
  "You're stellar!",
  "You're breathtaking!",
  "You're fabulous!",
  "You're sensational!",
  "You're marvelous!",
  "You're unbeatable!",
  "You're unbeatable!",
  "You're unparalleled!",
  "You're incomparable!",
  "You're unmatched!",
  "You're peerless!",
  "You're unrivaled!",
  "You're unequaled!",
  "You're unparalleled!",
  "You're incomparable!",
  "You're unbeatable!",
  "You're unmatched!",
  "You're peerless!",
  "You're unrivaled!",
  "You're unequaled!",
  "You're incredible!",
  "You're remarkable!",
  "You're extraordinary!",
  "You're phenomenal!",
  "You're fantastic!",
  "You're amazing!",
  "You're awesome!",
  "You're outstanding!",
  "You're magnificent!",
  "You're splendid!",
  "You're superb!",
  "You're stellar!",
  "You're breathtaking!",
  "You're fabulous!",
  "You're sensational!",
  "You're marvelous!"
];


document.getElementById('randomButton').addEventListener('click', function () {
  const messageTypes = ['success', 'warning', 'error'];
  const randomMessageType = messageTypes[Math.floor(Math.random() * messageTypes.length)];
  const randomCoolMessage = coolMessages[Math.floor(Math.random() * coolMessages.length)];
  const message = randomCoolMessage + ' ' + randomMessageType + ' message';
  showalertwise(message, randomMessageType);
});

/*=============== mobile-tap-area ===============*/


document.getElementById('randomButton2').addEventListener('click', function () {
  document.getElementById('randomButton').click();
})


/*=============== COPY CODE ===============*/

document.querySelector('.copy').addEventListener('click', function () {
  var jsCode = `
function showMessage(message, type) {
showalertwise(message, type);
}

// Call showMessage function with appropriate parameters
showMessage('This is a success message', 'success');
`;

  // Create a temporary textarea element to hold the code
  var tempTextArea = document.createElement('textarea');
  tempTextArea.value = jsCode;
  document.body.appendChild(tempTextArea);

  // Select the code inside the textarea
  tempTextArea.select();

  // Copy code to clipboard
  document.execCommand('copy');

  // Remove the temporary textarea
  document.body.removeChild(tempTextArea);
  this.focus();

});

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById('header')
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 460 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 60) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true
})

sr.reveal(`.home, .code`)
sr.reveal(`.button`, { interval: 400 })
sr.reveal(`.github_btn, .switch`, { interval: 400, delay: 1000 })
// sr.reveal(``, { origin: 'left' })
// sr.reveal(`.`, { origin: 'right' })
