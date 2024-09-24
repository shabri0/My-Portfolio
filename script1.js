var links=document.getElementsByClassName("links");
var tabcontents=document.getElementsByClassName("tabcontents");

function opentab(tabname){
    for(link of links){
        link.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
event.currentTarget.classList.add("active-link");
document.getElementById(tabname).classList.add("active-tab");
}


var sidemenu=document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}

/*google sheet deployment code*/


const scriptURL = '<https://script.google.com/macros/s/AKfycbx_sO9zsi8jNFi-hcHUeEWHUc3vicgoC7NIcbb5LywKD7mXnK3j-hbT7g5KuxEE2K9BQA/exec>'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
        msg.innerHTML ="Message sent successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
