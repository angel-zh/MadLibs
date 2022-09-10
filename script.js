const recipient = document.getElementById("recipient");
const ordinalNumber = document.getElementById("ordinalNumber");
const bodyPart1 = document.getElementById("bodyPart1");
const adjective1 = document.getElementById("adjective1");
const livingThing = document.getElementById("livingThing");
const place = document.getElementById("place");
const feeling = document.getElementById("feeling");
const adjective2 = document.getElementById("adjective2");
const verb = document.getElementById("verb");
const bodyPart2 = document.getElementById("bodyPart2");
const writer = document.getElementById("writer");
const madLibsForm = document.getElementById("madLibsForm");
const storySection = document.getElementById("storySection");
const formContainer = document.getElementById("formContainer");
const restart = document.getElementById("restart");

function createStory() {
  const story = `<p>Dear <span>${recipient.value}</span>,</p>
<p>I was in love the <span>${ordinalNumber.value}</span> time I saw your <span>${bodyPart1.value}</span>. You are <span>${adjective1.value}</span> and I am the luckiest <span>${livingThing.value}</span> in the entire <span>${place.value}</span>. I am so <span>${feeling.value}</span> that we met. There is simply no one as <span>${adjective2.value}</span> as you. I <span>${verb.value}</span> you more every single day and I can't wait to hold you in my <span>${bodyPart2.value}</span> again!</p>
<p>Love,</p>
<p><span>${writer.value}</span></p>`;
  storySection.innerHTML = story;
}

madLibsForm.addEventListener("submit", function (event) {
  event.preventDefault();
  formContainer.removeAttribute("id");
  madLibsForm.classList.add("hide");
  createStory();
  storySection.classList.remove("hide");
  restart.classList.remove("hide");
});

restart.addEventListener("click", function () {
  formContainer.setAttribute("id", "formContainer");
  madLibsForm.classList.remove("hide");
  madLibsForm.reset();
  storySection.classList.add("hide");
  restart.classList.add("hide");
})