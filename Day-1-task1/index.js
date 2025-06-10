const btn=document.querySelector(".add-btn");
const progressVal = [0.2, 0.5, 0.8, 1];
let idx=0;
btn.addEventListener('click',()=>{
    if(idx>=progressVal.length){
        idx=0;
    }
    const box=document.createElement('div');
    box.classList.add("progress-inner-div")
    const bars=document.createElement('meter');
    bars.value = progressVal[idx];
    bars.max = 1;
    bars.classList.add("progress-val");
    box.appendChild(bars);
    const barsContainer = document.querySelector(".bars"); 
    barsContainer.prepend(box);
    idx++;
})

