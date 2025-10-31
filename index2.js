let input = document.getElementById("input").value;
let rollButton = document.getElementById("rollButton");
let numberList = [];
let total = 0;
let selectedDie = document.querySelector('input[name="die"]:checked')
let numberShow = document.getElementById("numbers")
let totalShow = document.getElementById("totalShow")
let background = document.getElementById("background")
let sound = document.getElementById("sound")
document.getElementById("logo").src = "PFlogo.png";
document.getElementById("campaignLogo").src = "MoZ Logo.jpg";
background.src = "Pyramid.jpeg";

const nameTable = {
    Femur:  { bgSource: "Femur.jpeg", sound1: "mGnollAggro1.ogg" },
    Queek:  { bgSource: "Queek.jpeg", sound1: "age-like-a-fine-egg.mp3" },
    Vulpia: { bgSource: "Vulpia.jpeg", sound1: "it-s-too-late-for-mercy.mp3"},
    Shinzo: { bgSource: "Shinzo.jpeg", sound1: "all-shall-drown-in-my-magnificence.mp3" },
    Tishan: { bgSource: "Ti'Shan.jpeg"},
    Bavira: { bgSource: "Bavira.jpeg"}
}



const diceData = {
  d4: { size: 4 },
  d6: { size: 6 },
  d8: { size: 8 },
  d10: { size: 10 },
  d12: { size: 12 },
  d20: { size: 20 },
  d100: { size: 100 },
};

function playSound(source){
    sound.src = source;
    sound.pause();
    sound.currentTime = 0;
    sound.load();
    setTimeout(() => sound.play(), 750);


}

function setBackground(){
    const nameInputValue = document.getElementById("nameInput").value.trim();
        if (nameTable[nameInputValue]) {
    background.src = nameTable[nameInputValue].bgSource;
    }
}



function rollDice(){
    const nameInputValue = document.getElementById("nameInput").value.trim();
    for(let i = 0; i < input; i++){
            let number;
            number = Math.floor(Math.random() * (diceData[selectedDie.value].size)) + 1;
            numberList.push(Number(number));
            total += number;

        }
        if (selectedDie.value == "d20"){
            if (numberList.includes(20)){
                playSound(nameTable[nameInputValue].sound1)
            }
        }
            console.log(` ${selectedDie.value} ${numberList} ${total} `);
            document.getElementById("numbers").innerText = numberList;
            if(input > 1){
            document.getElementById("totalShow").innerText = total;
            }
            else{
                total = ""
                document.getElementById("totalShow").innerText = total
            }
            numberList.length = 0;
            total = 0;
    }

function resetValues(){
     numberList = [];
    total = 0
    document.getElementById("numbers").innerText = "";
    input = document.getElementById("input").value;
    selectedDie = document.querySelector('input[name="die"]:checked')
}

rollButton.onclick = function() {
    setBackground();
    console.log(nameInput.value);
    resetValues();
    if (input > 20) {
        window.alert("Can't be more than 20d6 to roll.")
    }
    else{
        
        rollDice();
    
}
}