let typespace = document.getElementById('type-space');
// console.log(typespace);
let ptag = document.getElementById('paragraph');
let paragraph = document.getElementById('paragraph').textContent;
// console.log(paragraph.textContent);
const length = paragraph.length;
// console.log(length);
const listOfCharacters = paragraph.split('');
ptag.textContent ='';
// console.log(listOfCharacters);
const numOfChars = listOfCharacters.length;
for(let j = 0; j < numOfChars; j++)
{
    let span = document.createElement('span');
    span.classList.add(`${j}`);
    span.textContent= listOfCharacters[j];
    ptag.append(span);
}
// console.log(paragraph);
// console.log(ptag);
var i = 0;
let rightChars = 0;
let seconds = 0
let timer;
function check(typedCharacter,i){
    // console.log(paragraph.charAt(i))
    let chartag = document.getElementsByClassName(`${i}`);
    console.log(chartag);
    if(typedCharacter !== paragraph.charAt(i)){
        console.log("wrong");
        chartag[0].classList.add('wrong') 
        // console.log(chartag.classList);

    }

    else{
        rightChars += 1
        console.log("right");
        chartag[0].classList.add('right');
        // console.log(chartag.classList);
    }
    
    
}

typespace.addEventListener('keydown', (event) => {
    if((event.keyCode >= 65 && event.keyCode <= 90) || event.keyCode == 32 || event.key === '.' || event.key === '?' || event.key === ';' || event.key === ':'||event.key === '"' || event.key === "'" || event.key === ','){
        if(i === 0)
        {
             timer = setInterval(() => {
            let timerDiv = document.querySelector('.timer');
            timerDiv.textContent = '';
            timerDiv.textContent = `${++seconds}s`;
            }, 1000);
        }
    let typedCharacter = event.key;
    
    console.log(typedCharacter);
    // i = i + 1;
    check(typedCharacter, i++);
    }
    else if(event.key=== 'Backspace' )
    {
        if(i > 0) {
              i--;
              rightChars--;
            let chartag = document.getElementsByClassName(`${i}`);
          
            chartag[0].classList.remove('right', 'wrong');

        }
        // event.preventDefault();
        
        
    }
    else if (i === length)
{
    let accuracy = document.querySelector('.accuracy');
    let wpmspace = document.querySelector('.wpm');
    // document.querySelector('body').append(accuracy)
    accuracy.textContent = `Typing Accuracy : ${((rightChars/numOfChars)* 100).toFixed(1)}%`;
    clearInterval(timer);
    wpmspace.textContent = ` Typing Speed :${((numOfChars/5)/(seconds/60)).toFixed(1)}wpm`;

}
})

