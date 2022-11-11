
let btn = document.getElementById("btn");
let output = document.getElementById("outputtext");

let number = Math.floor(Math.random() * 100 + 1)

btn.addEventListener("click", checkNumber);
    
function checkNumber(gissabtn){


    let input = document.getElementById("userInput").value;

    if (input == number){
        output.innerHTML = "you guessed right, your number was right!"
     } 
     else if (input < number)
     {
            output.innerHTML = "You guessed too low"
    }
if (input > number){

output.innerHTML = "You guessed too high"

}

};



let open = document.getElementById("open");
let modal_container = document.getElementById("modal_container");
let close = document.getElementById("close");

open.addEventListener("click", () => {
    console.log('click')

    modal_container.classList.add("show")

} ) ;

close.addEventListener("click", () => {
    console.log('click')

    modal_container.classList.remove("show")

} ) ;

async function getData() {
    const data = await fetch('cv.json').then(res => res.json())
    console.log(data)
    const ulEducation = document.getElementById('list-education')
    for (const item of data.education) {
       createLi(ulEducation, item.name)
    }
    const ulWork = document.getElementById('list-work')
    for (const item of data.work) {
       createLi(ulWork, item.name)
    }
}



function createLi(ul, name) {
    const li = document.createElement('li')
    li.innerText = name
    ul.appendChild(li)
}

getData()



let url = "https://api.openweathermap.org/data/2.5/weather?lat=59.3294&lon=18.0686&appid=3163ff4ae82ef36f6eb3d1cedfc7ef40";