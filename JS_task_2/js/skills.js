//add skills

var addSkillsBtn = document.querySelector("#add-skill-btn");
var skillsResult = document.querySelector(".skills-result");
var skillsInput = document.querySelectorAll(".skills-input");

var skillNameInput = document.querySelector("#skill-name");
var skillRangeInput = document.querySelector("#skill-range");

var skillNameErrorMsg = document.querySelector(".skills-name__error-message");
var skillRangeErrorMsg = document.querySelector(".skills-range__error-message");

function checkSkillNameLen(){
    if(skillNameInput.value.length > 100) {
        skillNameErrorMsg.style.display = "block";
    } else {
        skillNameErrorMsg.style.display = "none";
    }
}

function checkSkillRangeLen(){
    if(skillRangeInput.value > 100 || isNaN(+skillRangeInput.value)){
        skillRangeErrorMsg.style.display = "block";
    } else {
        skillRangeErrorMsg.style.display = "none";
    }

}




function addNewSkillBar() {
    checkSkillNameLen();
    checkSkillRangeLen();
    if (skillNameInput.value.length <= 100 && Number(skillRangeInput.value) <= 100 && skillNameInput.value.length !== 0
        && skillRangeInput.value.length !== 0) {
        var skillBar = document.createElement("div");
        skillBar.classList.add("skills-result__bar");
        skillBar.style.width = skillRangeInput.value + "%";
        var skillName = document.createElement("span");
        skillName.classList.add("skills-result__skill-name");
        skillName.innerHTML = skillNameInput.value;
        skillBar.appendChild(skillName);
        skillsResult.appendChild(skillBar);
    } else if (skillNameInput.value.length === 0  || skillRangeInput.value.length === 0) {
        alert("Fill all fields");
        
    }


}

addSkillsBtn.addEventListener("click", addNewSkillBar);

