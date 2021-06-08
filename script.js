function _load () {

    //console.log("Hello World!");

    const rootElement= document.getElementById("root");
    console.log(rootElement);

    rootElement.classList.add("loaded");

    //console.log(window);
    //console.log(document);
    console.log(rootElement.classList);

    rootElement.innerHTML = `
       <button class="btn btn2">Click on me</button>
       <button class="btn">Click on me</button>
       <button class="btn">Click on me</button>
       <button class="btn">Click on me</button>
       <button class="btn">Click on me</button>
       <button class="btn">Click on me</button>
    `;

    const buttonElementsQ = document.querySelectorAll(".btn");
    console.log(buttonElementsQ[0].classList);

    const buttonElementsG = document.getElementsByClassName("btn");
    console.log(buttonElementsG[0].classList);

    
    for (i = 0; i <=9; i++) {
        let imgElement = document.createElement("img");
        imgElement.setAttribute("src", `${i + 1}.jpg`); 
        rootElement.appendChild(imgElement);
    }
    
    let inputElement = `
        <input placeholder= "Write your name here" />
    `;
    
    console.log(buttonElementsQ.length);

    for (let index = 0; index < buttonElementsQ.length; index++) {
                //rootElement.innerHTML += inputElement;
        
        rootElement.insertAdjacentHTML("beforebegin", inputElement);       
    }


};
    


window.addEventListener("load", _load); //load eseménykor hívódjon meg a _load nevű function.. lsd 1 sor

