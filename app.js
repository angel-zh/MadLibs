const recipient = document.getElementById("recipient").value;
const ordinalNumber = document.getElementById("ordinalNumber").value;
const bodyPart1 = document.getElementById("bodyPart1").value;
const adjective1 = document.getElementById("adjective1").value;
const livingThing = document.getElementById("livingThing").value;
const place = document.getElementById("place").value;
const feeling = document.getElementById("feeling").value;
const adjective2 = document.getElementById("adjective2").value;
const verb = document.getElementById("verb").value;
const bodyPart2 = document.getElementById("bodyPart2").value;
const writer = document.getElementById("writer").value;
const madLibsForm = document.getElementById("madLibsForm");
const newStory = document.querySelector(".newStory");

function createStory() {
  newStory.innerHTML = `Dear <span>${recipient}</span>,<br>
I was in love the <span>${ordinalNumber}</span> time I saw your <span>${bodyPart1}</span>. You are <span>${adjective1}</span> and I am the luckiest <span>${livingThing}</span> in the entire <span>${place}</span>. I am so <span>${feeling}</span> that we met. There is simply no one as <span>${adjective2}</span> as you. I <span>${verb}</span> you more every single day and I can't wait to hold you in my <span>${bodyPart2}</span> again!<br>
Love,<br>
${writer}`;
}

madLibsForm.addEventListener("submit", function (event) {
  event.preventDefault();
  createStory();
});
