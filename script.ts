const Myform = document.getElementById('resume-form') as HTMLFormElement;
const resumedisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// const form = document.getElementById("resume-form") as HTMLFormElement
// const displayElement = document.getElementById("resume-display") as HTMLDivElement

Myform.addEventListener("submit",(event:Event)=>{
event.preventDefault()

let name= (document.getElementById("name") as HTMLInputElement)
let email= (document.getElementById("email") as HTMLInputElement)
let phone= (document.getElementById("phone") as HTMLInputElement)
let education= (document.getElementById("education") as HTMLInputElement)
let experience= (document.getElementById("experience") as HTMLInputElement)
let skills= (document.getElementById("skills") as HTMLInputElement)

let MyHtmlresume = `
<h2><b>Editable Resume</b></h2>
<h3>Personal Information</h3>
<p><b>Name:</b><span contenteditable="true">${name.value}</span></p>
<p><b>Email:</b><span contenteditable="true">${email.value}</span></p>
<p><b>Phone:</b><span contenteditable="true">${phone.value}</span></p>

<h3>Education</h3>
<p contenteditable="true">${education.value}</p>

<h3>Expeirence</h3>
<p contenteditable="true">${experience.value}</p>

<h3>Skills</h3>
<p contenteditable="true">${skills.value}</p>
`;

if(resumedisplayElement){
    resumedisplayElement.innerHTML = MyHtmlresume;
}
else{
    console.error("kindly filled all required field");
    
}

})