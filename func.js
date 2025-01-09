// document.getElementById("count-el").innerText = 5

// function increment(){
//     console.log("The button was clicked")
// }


// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function totalLap(){
//     console.log(lap1+lap2+lap3)
// }

// totalLap()



// let lapsCompleted = 0
// function incrementLaps(){
//     lapsCompleted = lapsCompleted+1
// }

// incrementLaps()
// incrementLaps()
// incrementLaps()
// console.log(lapsCompleted)
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0

function increment(){
    count +=1

    countEl.innerHTML = count
}

function save(){
    let countStr = count + " - "
    saveEl.innerHTML += countStr
    countEl.innerHTML = 0
    count = 0
}










