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
function createGrid(element,number){
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

