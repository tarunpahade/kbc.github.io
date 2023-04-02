const questions=[
    {
        questions:"Who is the prime minister of India",
        options:["Mahendra Singh Modi","Narender Singh Dhoni","Narendra Modi","Joe Biden"],
    answer:"Narendra Modi"
    },
    {
        questions:"Who is the president of US",
        options:["Donald trump","Barak Obama","Hilary Clinton","Joe Biden"],
    answer:"Joe Biden"
    }
]

const beta=document.querySelector(".beta")
beta.style.display="none"

const amit=document.querySelector(".amit")
amit.style.display="none"


const wah=document.querySelector(".wah")
wah.style.display="none"



//add qs
//add options
//click next question appear
///score

let currentQs=0;
let correct=0;
function loadqs() {

    ///add gif wah wah wah
if(correct===2){
    wah.classList.add("lol")
    wah.style.display="block"
}



//add score after
if(currentQs===2){
  //score card
    document.querySelector(".question").innerHTML="Your score is <br>"+ correct+" out of "+ questions.length;
    
    //remove options
    document.querySelector(".answers").style.display="none"
 
 //remove spans
    document.querySelector("span").style.display="none"
   
   //add restart
    const restart=  document.querySelector(".restart")
   restart.innerHTML=`<button class="options">Restart</button>`
  
  //listen click
   restart.addEventListener("click",()=>{
    window. location. reload();
    })   
// add giphy beta na 
if(correct===0){
        beta.style.display="block"
        beta.classList.add("lol")
    }else{
        beta.style.display="none"
      
    }
    if(correct===1){
        amit.classList.add("lol")
        amit.style.display="block"
    }

}else{
//add questions 
    document.querySelector(".question").innerHTML=questions[currentQs].questions
    
 //add answers inner content  
    const answers=document.querySelector(".answers")
    answers.innerHTML="";
    questions[currentQs].options.forEach(answer => {
    answers.innerHTML+=`<button class="options">${answer}</button>`
})

// hear click
answers.addEventListener("click", (e)=>{


if(currentQs==2){
    console.log("lol");
}else{
const clicked=e.target.childNodes[0].data
console.log(questions[currentQs].answer);

///add correct score
if(clicked===questions[currentQs].answer){
correct++
var audio = new Audio("./sounds/correct.mp3");
    audio.play();
}else{

var audio3 = new Audio("./sounds/wrong.mp3");
audio3.play();
}
currentQs++;

setTimeout(loadqs(),1000)


}})
document.querySelector(".score").innerHTML=correct
}}

loadqs() 




function onloadSound(){
//     var audio2 = new Audio("./sounds/open.mp3");
// audio2.play(); 
}




