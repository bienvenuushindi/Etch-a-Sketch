const CONTAINER_SIZE=480;
const  DEFAULT_GRID_NUMBER=16;
const PICK_COLOR = document.querySelector("#favcolor");
const MY_CONTAINER=document.querySelector('.container');
const MODE =['rainbow','black','gray_scale','clear','eraser','color_picker'];
let columnSize=CONTAINER_SIZE/DEFAULT_GRID_NUMBER;
let defaultColor='#ff0000';
let mode=MODE[0];
function addElementTo(container,className,element,number,elementSize) {
    let i=0;
    while (i < number) {
        let row=document.createElement(element);
        row.classList.add(className);
        row.style.height=elementSize+"px";
        container.appendChild(row);
        i++;
    }
}
function setGrid(element,number,elementSize){
    addElementTo(MY_CONTAINER,'row',element,number,elementSize);
    document.querySelectorAll('.row').forEach((item)=>{
        let i=0;
        while (i < number) {
            let column = document.createElement(element);
            column.classList.add('column');
            column.style.width=elementSize+"px";
            item.appendChild(column);
            i++;
        }
    })

}
function setColor(column) {
    let red=0;
    let green=0;
    let blue=0;
    if(mode === MODE[0]){
        column.classList.remove('gray-mode');
         red=Math.floor((Math.random() * 255) + 1);
         green=Math.floor((Math.random() * 255) + 1);
         blue=Math.floor((Math.random() * 255) + 1);
         column.style.backgroundColor='rgb(' + [red,green,blue].join(',') + ')';
    }
    else if (mode === MODE[1]) {
        column.classList.remove('gray-mode');
        column.style.backgroundColor='rgb(' + [red,green,blue].join(',') + ')';
    }
    else if(mode === MODE[2]){
        scaleGray(column,red,green,blue);
    }
    else if(mode === MODE[4]){
        column.classList.remove('gray-mode');
        column.style.backgroundColor='#fff';
    }
    else if(mode === MODE[5]){
        column.classList.remove('gray-mode');
        column.style.backgroundColor=defaultColor;
    }
}
function clear() {
    MY_CONTAINER.innerHTML="";
    let gridNumber=parseInt(prompt("Enter the number of squares per side for the new grid Should no exceed 100","16"));
    let columnSize=CONTAINER_SIZE/gridNumber;
    launch(gridNumber,columnSize);
}
function addEventToColumns(){
    const COLUMNS=document.querySelectorAll('.column');
    COLUMNS.forEach((column)=>{
        column.addEventListener('mouseover',()=>{
            setColor(column,mode);
        })
    });
}
function setMode(newMode){
     mode=newMode;
}
function scaleGray(column,r,g,b) {

    let currentOpacity = (column.style.backgroundColor.match(/rgba/))
        ? Number(column.style.backgroundColor.slice(-4,-1))
        : (column.style.backgroundColor === 'rgb(0, 0, 0)' && column.classList.contains('gray-mode')) ? 1 : 0.0;
    if(!column.classList.contains('gray-mode'))  column.classList.add('gray-mode');
    let currentOpacityTimesTen=(currentOpacity * 10);
    if (currentOpacityTimesTen <= 9){
        column.style.backgroundColor='rgba(' + [r,g,b,(currentOpacityTimesTen + 0.1 * 10) / 10 ].join(',') + ')';
    }
    
}

document.querySelectorAll('.btn').forEach((btn)=>{
    btn.addEventListener('click',(e)=>{

            if(e.target.id === MODE[0])   setMode(MODE[0]);
            if(e.target.id ===  MODE[1])  setMode( MODE[1]);
            if(e.target.id === MODE[2])   setMode(MODE[2]);
            if(e.target.id === MODE[3])   clear();
            if(e.target.id === MODE[4])  {
                setMode(MODE[4]);
            }
            if (e.target.id===MODE[5]){
                defaultColor=PICK_COLOR.value;
                console.log(defaultColor);
                setMode(MODE[5]);
            }
         
    })
});
PICK_COLOR.addEventListener("click", ()=>{
   pickColorHandler()
}, false);
PICK_COLOR.addEventListener("input", ()=>{
    pickColorHandler()
}, false);
function  pickColorHandler() {
    setMode(MODE[5]);
    defaultColor=PICK_COLOR.value;
}

function launch(gridNumber,columnSize) {
    setGrid('div',gridNumber,columnSize);
    addEventToColumns();
}

launch(DEFAULT_GRID_NUMBER,columnSize);

