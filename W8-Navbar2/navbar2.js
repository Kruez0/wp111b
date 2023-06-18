function navWide(){
    let nav=document.getElementById('nav')
    nav.style.width='200px';
}
function navShort(){
    let nav=document.getElementById('nav')
    nav.style.width='40px';
}
let main=document.querySelector('#main')

let pages={
    '#aboutus':`
    <hmtl>
    <head>
      <meta charset="utf-8"/>
      <meta name="viewport"     content="width=device-width, initial scale=1.0"/>
      <h1 id="title">One piece Survey Form</h1>
      <link rel="stylesheet" href="styles.css">
      <p id="description">Let's find out what you like!</p>
    </head>
  <body>
    <form id="survey-form">
    <fieldset>
      <label id="name-label"> Name : <input id="name" name="name" type="text" placeholder="Enter your name" required/></label>
      <label id="email-label"> Email : <input id="email" name="email" type="email" placeholder="Enter your E-mail"required/></label>
      <label id="number-label"> Age : <input id="number" name="age" type="number" min="0" max="120" placeholder="Enter your age"/></label>
      </fieldset>
      <fieldset>
        <label>Do you like watching One piece?
          <select id="dropdown">
            <option value="">Enter</option>
            <option value="1">I like it very much!</option>
            <option value="2">Yes!</option>
            <option value="3">Not really</option>
            <option value="4">meh</option>
            </select>
            </label>
            </fieldset>
      <fieldset>
      <label> Who is your favourite mugiwara crew members?</label>
        <label><input type="radio" name="crew" class="inline" value="1"/>Luffy</label>
          <label><input type="radio" name="crew" class="inline" value="2"/>Nami</label>
           <label><input type="radio" name="crew" class="inline" value="3" />Zoro</label>
           <label><input type="radio" name="crew" class="inline" value="4"/>Chopper</label>
         <label><input type="radio" name="crew" class="inline" value="5"/>Usopp</label>
         <label><input type="radio" name="crew" class="inline" value="6"/>Robin</label>
         <label><input type="radio" name="crew" class="inline" value="7" />Brook</label>
         <label><input type="radio" name="crew" class="inline" value="8" />Franky</label>
         <label><input type="radio" name="crew" class="inline" value="9"/>Sanji</label>
  
        </fieldset>
         <fieldset>
      <label>Why do you like him/her?</label>
        <textarea name="like" rows="3" cols="30" placeholder="I like zoro because..."></textarea>
        </fieldset>
        <fieldset>
      <label> Who do you like to be the next mugiwara crewmates?</label>
        <label><input type="checkbox" name="Willi" class="inline" value="jinbei" />Jinbei</label>
          <label><input type="checkbox" name="Willi" class="inline" value="yamato" />Yamato</label>
          <label>
        </fieldset>
        <input id="submit" type="submit" value="Submit" />
    </form>
    </body>
    </html>
    `,
    '#Ex1':`
   pen
    `,
    '#Ex2':`apple`,
    '#Ex3':'apple pen',
}

window.onhashchange= function () {
   let hash= window.location.hash
main.innerHTML= pages[hash]
}