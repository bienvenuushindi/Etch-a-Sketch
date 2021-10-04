const DEFAULT_COLOR='#fff';

let columnSize=0;
let rowSize=0;

function addElementTo(container,className,element,number) {
    let i=0;
    const myContainer=document.querySelector(container);
    while (i < number) {
        let row=document.createElement(element);
        row.classList.add(className);
        myContainer.appendChild(row);
        i++;
    }
}
function setGrid(element,number){
    addElementTo('.container','row',element,number);
    document.querySelectorAll('.row').forEach((item)=>{
        let i=0;
        while (i < number) {
            let column = document.createElement(element);
            column.classList.add('column');
            item.appendChild(column);
            i++;
        }
    })

}
setGrid('div',16);
const COLUMNS=document.querySelectorAll('.column');
COLUMNS.forEach((column)=>{
    column.addEventListener('mouseover',()=>{
        setColor(column);
    })
});

function setColor(column) {
    let red=Math.floor((Math.random() * 255) + 1);
    let green=Math.floor((Math.random() * 255) + 1);
    let blue=Math.floor((Math.random() * 255) + 1);
    column.style.backgroundColor='rgb(' + [red,green,blue].join(',') + ')';
}