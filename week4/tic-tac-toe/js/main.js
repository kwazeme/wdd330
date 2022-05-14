// get tiles
function getTiles() {
    tdcells = document.getElementsByTagName("td");
    cells = Array.from(tdcells, tdcell => tdcell.textContent);
    
    return cells
}
console.log(getTiles())

