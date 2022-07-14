

//  passenger subway solution
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el")
let count = 0;


function increment() {
    count+=1  
    countEl.textContent = count
}

function save(){
                // Create a variable that contains both the count and the dash separator, i.e. "12 - "
                let countStr = count + " - "
                // 3. Render the variable in the saveEl using innerText
                 saveEl.textContent += countStr //instead of  saveEl.innerText += countStr 
                 countEl.textContent = 0
                 count =0
                 console.log(count)
}


