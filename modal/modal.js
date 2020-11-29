
const btn = document.querySelector('.btn');
let content = "Hello world !";

//при нажатии кнопки "открыть" запускаеться функция creatModal() для отображения модального окна.
btn.addEventListener('click',openOverLay =>{
    creatModal(content);
});

function creatModal(content){

    const overlay = document.createElement('div');
    const container = document.createElement('div');
    const closeBtn = document.createElement('a');
    
    overlay.className = "overlay";

    container.className = "container";
    container.innerHTML = content;

    closeBtn.className = "close-btn";
    closeBtn.innerHTML = "x";
    closeBtn.href = "#"

    //добавляет элементы в body
        document.body.appendChild(overlay);
        overlay.appendChild(container);
        container.appendChild(closeBtn);

    // закрытие по кнопке
    closeBtn.addEventListener('click',  func =>{
        let res = document.body.removeChild(overlay);
    });

    // закрытие по клику вне области container
    overlay.addEventListener('click', func =>{
        if(func.target == overlay){
            let res = document.body.removeChild(overlay);
        }
    });
}

