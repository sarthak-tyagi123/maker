
/* PERSONAL INFO */
function link(id, previewId){
document.getElementById(id).addEventListener("input", function(){
document.getElementById(previewId).innerText = this.value;
});
}

link("fullName","previewName");
link("address","previewAddress");
link("phone","previewPhone");
link("email","previewEmail");
link("linkedin","previewLinkedin");
link("github","previewGithub");


photoInput.onchange = function(e){
photoPreview.src = URL.createObjectURL(e.target.files[0]);
};

/* EDUCATION */
function addEducation(){
const div=document.createElement("div");
div.innerHTML=`
<input placeholder="Degree" name="degree[]">
<input placeholder="College" name="college[]">
<input placeholder="Year" name="year[]">
<input placeholder="percentage/CGPA" name="cgpa[]">
<button class="remove-btn" onclick="this.parentElement.remove(); updateEducation()">X</button>
`;
educationContainer.appendChild(div);
div.querySelectorAll("input").forEach(i=>i.oninput=updateEducation);
}


function updateEducation() {
  previewEducation.innerHTML = "";

  educationContainer.querySelectorAll("div").forEach(d => {
    const i = d.querySelectorAll("input");

    if (i[0].value) {
      previewEducation.innerHTML += `
        <div class="entry">
          <div class="entry-left">
            <strong>${i[0].value}</strong><br>
            ${i[1].value}
          </div>
          <div class="entry-right">
            ${i[2].value} ${i[3].value ? ' | ' + i[3].value : ''}
          </div>
        </div>
      `;
    }
  });

  educationSection.style.display =
    previewEducation.innerHTML === "" ? "none" : "block";
}

/* SKILLS */
function addSkill(){
const div=document.createElement("div");
div.innerHTML=`<input placeholder="Skill" name="skill[]" oninput="updateSkill()">
<button class="remove-btn" onclick="this.parentElement.remove(); updateSkill()">X</button>`;
skillsContainer.appendChild(div);
}


function updateSkill(){
previewSkills.innerHTML="";

skillsContainer.querySelectorAll("input").forEach(i=>{
if(i.value) previewSkills.innerHTML+=`<li>${i.value}</li>`;
});

skillsSection.style.display =
previewSkills.innerHTML === "" ? "none" : "block";
}

/* EXPERIENCE */
function addExperience(){
const div=document.createElement("div");
div.innerHTML=`
<input placeholder="Company" name="company[]">
<input placeholder="Position" name="position[]">
<input placeholder="Year" name="expYear[]">
<textarea placeholder="Description"></textarea>
<button class="remove-btn" onclick="this.parentElement.remove(); updateExperience()">X</button>`;
experienceContainer.appendChild(div);
div.querySelectorAll("input,textarea").forEach(i=>i.oninput=updateExperience);
}

function updateExperience(){

  previewExperience.innerHTML = "";

  experienceContainer.querySelectorAll("div").forEach(d=>{

    const i = d.querySelectorAll("input,textarea");

    // agar company filled hai tabhi show kare
    if(i[0].value){

      previewExperience.innerHTML += `
      <div class="entry">
        <div class="entry-left">
          <strong>${i[0].value}</strong><br>
          ${i[1].value}
        </div>
        <div class="entry-right">
          ${i[2].value}
        </div>
      </div>
      <ul>
        <li>${i[3].value}</li>
      </ul>`;
    }

  });

  // 🔥 hide / show logic
  if(previewExperience.innerHTML === ""){
    experienceSection.style.display = "none";
  } else {
    experienceSection.style.display = "block";
  }

}

/* PROJECT */
function addProject(){
const div=document.createElement("div");
div.innerHTML=`
<input placeholder="Project Title" name="projectTitle[]">
<textarea placeholder="Description"></textarea>
<button class="remove-btn" onclick="this.parentElement.remove(); updateProject()">X</button>`;
projectContainer.appendChild(div);
div.querySelectorAll("input,textarea").forEach(i=>i.oninput=updateProject);
}

function updateProject(){
previewProjects.innerHTML="";

projectContainer.querySelectorAll("div").forEach(d=>{
const i=d.querySelectorAll("input,textarea");

if(i[0].value){
previewProjects.innerHTML+=`
<div><strong>${i[0].value}</strong></div>
<ul><li>${i[1].value}</li></ul>`;
}
});

projectSection.style.display =
previewProjects.innerHTML === "" ? "none" : "block";
}

/* INTERNSHIP */
function addInternship(){
const div=document.createElement("div");
div.innerHTML=`
<input placeholder="Company Name" name="internCompany[]" oninput="updateInternship()">
<input placeholder="Role"  name="internRole[]" oninput="updateInternship()">
<input placeholder="Duration" name="internDuration[]" oninput="updateInternship()">
<textarea placeholder="Description" name="internDesc[]" oninput="updateInternship()"></textarea>
<button class="remove-btn" onclick="this.parentElement.remove(); updateInternship()">X</button>`;
internshipContainer.appendChild(div);
}
function updateInternship(){
previewInternships.innerHTML="";
internshipContainer.querySelectorAll("div").forEach(d=>{
const i=d.querySelectorAll("input,textarea");
if(i[0].value){
previewInternships.innerHTML+=`
<div class="entry">
<div class="entry-left"><strong>${i[0].value}</strong><br>${i[1].value}</div>
<div class="entry-right">${i[2].value}</div>
</div>
<ul><li>${i[3].value}</li></ul>`;
}
});

internshipSection.style.display =
previewInternships.innerHTML === "" ? "none" : "block";
}

/* CERTIFICATE */
function addCertificate(){
const div=document.createElement("div");
div.innerHTML=`
<input placeholder="Certificate Title" name="certificateTitle[]">
<input placeholder="Organization & Date" name="certificateOrgDate[]">
<textarea placeholder="Description" ></textarea>
<button class="remove-btn" onclick="this.parentElement.remove(); updateCertificate()">X</button>`;
certificateContainer.appendChild(div);
div.querySelectorAll("input,textarea").forEach(i=>i.oninput=updateCertificate);
}


function updateCertificate(){
previewCertificates.innerHTML="";

certificateContainer.querySelectorAll("div").forEach(d=>{
const i=d.querySelectorAll("input,textarea");

if(i[0].value){
previewCertificates.innerHTML+=`
<div><strong>${i[0].value}</strong><br>${i[1].value}</div>
<ul><li>${i[2].value}</li></ul>`;
}
});

certificateSection.style.display =
previewCertificates.innerHTML === "" ? "none" : "block";
}

/* HOBBY */
function addHobby(){
const div=document.createElement("div");
div.innerHTML=`<input placeholder="Hobby" name="hobby[]" oninput="updateHobby()">
<button class="remove-btn" onclick="this.parentElement.remove(); updateHobby()">X</button>`;
hobbyContainer.appendChild(div);
}


function updateHobby(){
previewHobbies.innerHTML="";

hobbyContainer.querySelectorAll("input").forEach(i=>{
if(i.value) previewHobbies.innerHTML+=`<li>${i.value}</li>`;
});

hobbySection.style.display =
previewHobbies.innerHTML === "" ? "none" : "block";
}

/* LANGUAGE */
function addLanguage(){
const div=document.createElement("div");
div.innerHTML=`<input placeholder="Language" name="language[]" oninput="updateLanguage()">
<button class="remove-btn" onclick="this.parentElement.remove(); updateLanguage()">X</button>`;
languageContainer.appendChild(div);
}


function updateLanguage(){
previewLanguages.innerHTML="";

languageContainer.querySelectorAll("input").forEach(i=>{
if(i.value) previewLanguages.innerHTML+=`<li>${i.value}</li>`;
});

languageSection.style.display =
previewLanguages.innerHTML === "" ? "none" : "block";
}