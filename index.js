
const submitButton = document.getElementById("submitButton");
const submitButton2 = document.getElementById("submitButton2");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

const flavorText = document.getElementById("flavorText");
const imageSource = document.getElementById("imageSource");

let List = [];
let age;

const characterData = {
  castorice: { text: "Scythe Wife" },
  evernight: { text: "March 9th" },
  blackswam: { text: "I swear she's meta bro" },
  herta: { text: "Madam Herta is a peerless gem" },
  jingliu: { text: "Queenliu fr fr" },
  salem: { text: "C H O N K Y", image: "rn_image_picker_lib_temp_b3d34fad-0019-4a5f-ada3-dbde842c7f07.jpg" }
};

submitButton.onclick = function() {
  let newChar = document.getElementById("newChar").value
    .replace(/\s+/g, "")
    .trim()
    .toLowerCase();

  if (characterData[newChar]) {
    const data = characterData[newChar];

    flavorText.textContent = data.text;
    List.push(newChar.charAt(0).toUpperCase() + newChar.slice(1));
    document.getElementById("List").innerText = List.join("\n");


    flavorText.classList.add("visible");
    setTimeout(() => flavorText.classList.remove("visible"), 1000);


    if (data.image) flashImage(imageSource, data.image);
  } else {
    flavorText.textContent = "This is not a known peepo.";
    flavorText.classList.add("visible");
    setTimeout(() => flavorText.classList.remove("visible"), 1000);
  }
};

function flashImage(element, src) {
  element.src = src;
  element.classList.add("visible");
  setTimeout(() => element.classList.remove("visible"), 300);
}

submitButton2.onclick = () => {
  age = Number(document.getElementById("age").value) || 0;
  document.getElementById("yourAge").innerText = `You are ${age} years old`;
};

increaseBtn.onclick = () => {
  if (age >= 117) window.alert("Are you sure you're the oldest person in history?");
  else {
    age++;
    document.getElementById("yourAge").innerText = `You are ${age} years old`;
  }
};

decreaseBtn.onclick = () => {
  if (age <= 0) window.alert("You cannot be younger than 0 years old");
  else {
    age--;
    document.getElementById("yourAge").innerText = `You are ${age} years old`;
  }
};

resetBtn.onclick = () => {
  age = 0;
  document.getElementById("yourAge").innerText = "Age reset successfully";
};
