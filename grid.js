const start = size(16)
document.querySelector(".size").addEventListener("click",()=>{
    size(prompt("size of the pad zXz  z = ?"))
})


function size(sizeOfBox) {
    if(sizeOfBox >= 100){
        alert("reached maximum number of boxes")
        return 1;
    }
    const div = document.querySelector(".pad")
    div.innerHTML = ""
    for(let i = 0;i<sizeOfBox;i++){
        const row = document.createElement("div")
        row.className = "grid"
        for(let j = 0;j<sizeOfBox;j++){
            const block = document.createElement("div")
            block.className = "item"
            row.append(block)
            block.addEventListener("mouseover",()=>{
                block.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
            })
        }
    div.append(row)
}}