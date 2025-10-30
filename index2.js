let input = document.getElementById("input").value;
let rollButton = document.getElementById("rollButton");
let numberList = [];
let total = 0;
let selectedDie = document.querySelector('input[name="die"]:checked')
let numberShow = document.getElementById("numbers")
let totalShow = document.getElementById("totalShow")

const diceData = {
  d4: { size: 4 },
  d6: { size: 6 },
  d8: { size: 8 },
  d10: { size: 10 },
  d12: { size: 12 },
  d20: { size: 20 },
  d100: { size: 100 },
};

rollButton.onclick = function() {
    numberList = [];
    total = 0
    document.getElementById("numbers").innerText = "";
    input = document.getElementById("input").value;
    selectedDie = document.querySelector('input[name="die"]:checked')
    if (input > 20) {
        window.alert("Can't be more than 20d6 to roll.")
    }
    else{
        for(let i = 0; i < input; i++){
            let number;
            number = Math.floor(Math.random() * (diceData[selectedDie.value].size)) + 1;
            numberList.push(number);
            total += number;

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
    
}
