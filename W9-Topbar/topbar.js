/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {
      var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }
  let main = document.querySelector(".bigmargin")
  let pages = {
    '#home': `
      <h1>Front Page</h1>
      <p>Welcome to the front Page</p>  
    `,
    '#signup': `
      <h1>Sign in</h1>
      <form id="signupForm">
          <fieldset>
              <label for="first-name">First Name</label>
              <input id="first-name" name="first-name" type="text" placeholder="First Name" required/><br/>
              <label for="last-name">Last Name</label>
              <input id="last-name" name="last-name" type="text" placeholder="Last Name" required/><br/>
              <label for="Mobile-Number-or-email">Mobile Number or Email</label>
              <input id="Mobile-Number-or-email" name="Mobile-Number-or-email" type="text" placeholder="Mobile Number or email" required/><br/>
              <label for="New-password">New Password</label>
              <input id="New-password" name="New Password" placeholder="New Password" type="password" required/><br/>
          </fieldset>
          <fieldset>
              <label for="Blood-type">Blood Type</label>
              <select id="Blood-type" name="Blood-type" placeholder="Please select one">
                  <option value="">O</option>
                  <option value="1">A</option>
                  <option value="2">B</option>
                  <option value="3">AB</option>
              </select><br/>
              <label for="photo">Upload a profile picture:</label>
              <input id="file" type="file" required>
          </fieldset>
          <fieldset>
              <label for="Birthday">Birthday</label>
              <select id="Birthday" name="Birthday">
                  <option value="">Jan</option>
                  <option value="1">Feb</option>
                  <option value="2">Mar</option>
                  <option value="3">Apr</option>
                  <option value="4">May</option>
                  <option value="5">Jun</option>
                  <option value="6">Jul</option>
                  <option value="7">Aug</option>
                  <option value="8">Sep</option>
                  <option value="9">Oct</option>
                  <option value="10">Nov</option>
                  <option value="11">Dec</option>
              </select>
              <label for="Birthday-date">Day</label>
              <input id="Birthday-date" type="number" placeholder="1" min="1" max="31">
              <label for="Birthday-year">Year</label>
              <input id="Birthday-year" type="number" placeholder="2023" min="1905" max="2023">
          </fieldset>
          <fieldset>
              <label for="gender">Gender</label>
              <input id="gender-female" type="radio" name="gender" class="inline" value="Female"/>
              <label for="gender-female">Female</label>
              <input id="gender-male" type="radio" name="gender" class="inline" value="Male"/>
              <label for="gender-male">Male</label>
              <input id="gender-custom" type="radio" name="gender" class="inline" value="Custom"/>
              <label for="gender-custom">Custom</label>
          </fieldset>
          <p id="formMessage"></p>
          <button type="submit">Submit</button>
      </form>
    `,
    '#login': `
      <h1>Log in</h1>
      <form id="loginForm">
          <label for="name">Name</label>
          <input id="name" type="text" placeholder="Name"><br><br>
          <label for="account">Account</label>
          <input id="account" type="text" placeholder="Account"><br><br>
          <label for="password">Password</label>
          <input id="password" type="password" placeholder="Password"><br><br>
          <label for="email">Email</label>
          <input id="email" type="email" placeholder="Email"><br><br>
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
      </form>
    `,
    '#logout': `
      <h1>Log out</h1>
      <p>You want to log out?</p>
      <button id=no type="submit">Yes</button>
      <button id=yes type="button">No</button>
    `
  };
  
window.onhashchange = function () {
    let hash = window.location.hash
    main.innerHTML = pages[hash]
}
document.addEventListener('click', function(event) {
  if (event.target.matches('#yes')) {
    window.location.hash = '#home'; 
  } else if (event.target.matches('#no')) {
    window.location.hash = '#home'; 
  }
});