let namevalorant=document.getElementById('namevalorant');
let yourmap=document.getElementById('yourmap');
let youragents=document.getElementById('youragents');

window.addEventListener('scroll',function (){
    let value=window.scrollY;
    if (value>=0){
    namevalorant.style.left=value+'px';
    yourmap.style.top=value+150+'px';
    }
    if (value>=876){
        namevalorant.style.left=800+'px';
        yourmap.style.top=1025+'px';
        youragents.style.top=value+150+'px';
    }

    if (value>=1800){
        youragents.style.top=1950+'px';

    }
    console.log(parseInt(value));
})


let d = document.getElementById('bubble2');

for(let i =0 ;i<20;i++){
    let image = document.createElement("img");
    image.src = "image/x.png";
    image.classList.add("x");
    image.style.position = "absolute";

    let randomTop = Math.floor(Math.random() * (window.innerHeight - image.width));
    let randomLeft = Math.floor(Math.random() * (window.innerWidth - image.width));


    image.style.top = randomTop + "px";
    image.style.left = randomLeft + "px";


    d.appendChild(image);
}


