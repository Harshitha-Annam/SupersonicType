let typespace = document.getElementById('type-space');

let ptag = document.getElementById('paragraph');
let paragraph = ptag.textContent;

const paraLength = paragraph.length;

const listOfCharacters = paragraph.split('');

ptag.textContent ='';

const numOfChars = listOfCharacters.length;
let timer = null;
for(let j = 0; j < numOfChars; j++)
{
    let span = document.createElement('span');
    span.classList.add(`${j}`);
    span.textContent= listOfCharacters[j];
    ptag.append(span);
}
let lockIndex = 0;
let lockedValue = '';
let startAgain = document.querySelector('.start-again');
console.log(startAgain)
startAgain.addEventListener('click', () =>
  {
    // lockIndex = 0;
    // lockedValue = '';
     startTyping();

  });


function startTyping()
{
let isStarted = false;

let seconds = 0;
let minutes = 0;
let wrongChars = 0;
// let totalChars = 0;
listOfCharacters.forEach((char, idx) => {
        
        
            // console.log(document.getElementsByClassName(idx)[0]);
            document.getElementsByClassName(idx)[0].classList.remove('right', 'wrong');
        
    });
typespace.value = '';
lockIndex = 0;
lockedValue = '';
let timerDiv = document.querySelector('.timer');
timerDiv.textContent = '00:00';
let accuracy = document.querySelector('.accuracy');
let wpmspace = document.querySelector('.wpm');
accuracy.textContent='';
wpmspace.textContent = '';
typespace.disabled = false;

if(timer)
{
    clearInterval(timer);
}
let index = 0;
typespace.addEventListener('input', (event) => {
    if( lockIndex > typespace.value.length-1)
    {
        typespace.value = lockedValue;
    }
    if(!isStarted)
    {
        isStarted = true;
        timer = setInterval(() => {
            
            timerDiv.textContent = '';
        // if(seconds < 9)
        //     {
        //         timerDiv.textContent = `0${minutes}:0${++seconds}`;
        //     }
            
        // else if(seconds < 59)
        //     {
        //         timerDiv.textContent = `0${minutes}:${++seconds}`;
        //     }
        // else{
        //     seconds = 0;
        //     timerDiv.textContent = `0${++minutes}:0${seconds}`;
        // }
        if(seconds < 59)
        {
            timerDiv.textContent = `${String(minutes).padStart(2,'0')}: ${String(++seconds).padStart(2,'0')}`;
        }
        else{
            seconds = 0;
            minutes++;
            if(minutes == 10)
            {
                clearInterval(timer);
                // console.log(typespace);
                typespace.disabled = true;
            }
            timerDiv.textContent = `${String(minutes).padStart(2,'0')}: ${String(seconds).padStart(2,'0')}`;
        }
        

        }, 1000);

    }
    
    let typedText = typespace.value;
    // console.log(typedText)
    let typedChars = typedText.split('');
    let last_index_el = typedChars.at(-1);
    index = typedChars.length-1;
    if(isStarted && (index >= paraLength-1) )
    {
        clearInterval(timer);
        // console.log(typespace);
        typespace.disabled = true;
        // event.preventDefault()
        
        wpmspace.textContent = ` Typing Speed :${((numOfChars/5)/(seconds/60 + minutes)).toFixed(1)}wpm`;
        accuracy.textContent = `Typing Accuracy : ${(100-((wrongChars/numOfChars)* 100)).toFixed(1)}%`;
        console.log(wrongChars);
        console.log(numOfChars);
        
        



    }
    listOfCharacters.forEach((char, idx) => {
        if(idx > index)
        {
            // console.log(document.getElementsByClassName(idx)[0]);
            document.getElementsByClassName(idx)[0].classList.remove('right', 'wrong');
        }
    });
    
    if( last_index_el === listOfCharacters[index])
    {
        // console.log(index);
       if(listOfCharacters[index] === ' ')
       {
        lockIndex = index;
        lockedValue = typespace.value;
       }
       let spanTag = document.getElementsByClassName(index)[0];
       if(spanTag.classList.contains('wrong'))
       {
        spanTag.classList.remove('wrong');
       }
       spanTag.classList.add('right');
    }
    else{
        wrongChars++;
        let spanTag = document.getElementsByClassName(index)[0];
       
       spanTag.classList.add('wrong');
    }


    

    // let oldIndex = index;
    
    
});
}

startTyping();