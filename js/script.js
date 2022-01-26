onload = function (){
    let btnNumber = document.getElementById("number");
    btnNumber.addEventListener("click", adaptToNumber);

    let btnPeople = document.getElementById("people");
    btnPeople.addEventListener("click", adaptToPeople);
}

function refreshPage(){
    location.reload();
}

function getRandomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getResultPeople(peopleArray){
    return Math.floor(Math.random() * (peopleArray.length));
}

function showDrawResult(result){
    let div = document.getElementsByClassName("options");

    if (typeof result === "number"){
        div[0].innerHTML = `<div>
                            <h2>O número sorteado foi:</h2><h2 id="h2-result">${String(result)}</h2>
                            </div>
                            <button id="go-back">Voltar</button>`;
    } else{
        div[0].innerHTML = `<div>
                            <h2>A pessoa sorteada foi:</h2><br>
                            <h2 id="h2-result">${result}</h2>
                            </div>
                            <button id="go-back">Voltar</button`;
    }

    let btnGoBack = document.getElementById("go-back");
    btnGoBack.addEventListener("click", refreshPage);
}

function performDrawNumbers(){
    let min = document.getElementById("n-min").value;
    let max = document.getElementById("n-max").value;

    let result = getRandomNumber(min, max);
    showDrawResult(result);
}

function performDrawNames(){
    let textareaContent = document.getElementById("names-area").value;
    textareaContent = textareaContent.split(/\s*,+\s*/);

    let indexResult = getResultPeople(textareaContent);
    let result = textareaContent[indexResult];

    showDrawResult(result);
}

function adaptToNumber(){
    let div = document.getElementsByClassName("options");

    div[0].innerHTML = `<h2>Número de</h2>
                        <input id="n-min" type="number" placeholder="1" min="0" max="499">
                        <h2>até</h2><input id="n-max" type="number" placeholder="100" min="2" max="500">
                        <button id="draw-button">Sortear</button>
                        <button id="go-back">Voltar</button>`;

    let btnDraw = document.getElementById("draw-button");
    btnDraw.addEventListener("click", performDrawNumbers);

    let btnGoBack = document.getElementById("go-back");
    btnGoBack.addEventListener("click", refreshPage);
}

function adaptToPeople(){
    let div = document.getElementsByClassName("options");

    div[0].innerHTML = `<textarea id="names-area" placeholder="Escreva os nomes separados por vírgulas"
                        cols="50" rows="15"></textarea>
                        <button id="draw-button-names">Sortear</button>
                        <button id="go-back">Voltar</button>`;
    
    let btnDraw = document.getElementById("draw-button-names");
    btnDraw.addEventListener("click", performDrawNames);

    let btnGoBack = document.getElementById("go-back");
    btnGoBack.addEventListener("click", refreshPage);
}