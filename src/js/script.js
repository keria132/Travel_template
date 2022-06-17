console.log("everyting just fine");
console.log("HELLOOOOOO");

function pictures(){
    const container = document.querySelector("section.photos");
    for(let i = 1; i <= 9; i++){
        let newImg = document.createElement("img");
        newImg.setAttribute("src", "./img/photos ("+i+").png");
        //newImg.style.
        //Try new Image(width, height)
        container.appendChild(newImg);
    }
    let carousel = document.createElement("div");
    let carouselText = document.createElement("p");
    let node = document.createTextNode("01 / 05");
    carouselText.appendChild(node);
    carousel.appendChild(document.createElement("button"));
    carousel.appendChild(carouselText);
    carousel.appendChild(document.createElement("button"));

    container.appendChild(carousel);

}

pictures();