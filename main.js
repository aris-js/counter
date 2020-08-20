const counter = document.querySelector(`.counter`)
const decrease = document.querySelector(`#decrease`)
const reset = document.querySelector(`#reset`)
const increase = document.querySelector(`#increase`)

count = 0;
function dec(){
    count--;
    counter.innerHTML = count
    if (count < 0){
        counter.style.color = "red"
    }
    if (count == 0){
        counter.style.color = "black"
    }
}
function res(){
    count = 0;
    counter.innerHTML = count
    if (count == 0){
        counter.style.color = "black"
    }
}
function inc(){
    count++;
    counter.innerHTML = count
    if (count > 0){
        counter.style.color = "green"
    }
    if (count == 0){
        counter.style.color = "black"
    }
}
decrease.addEventListener('click',  dec)
reset.addEventListener('click',  res)
increase.addEventListener('click',  inc)
