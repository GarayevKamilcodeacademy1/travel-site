"use strict";

const altmenu = document.querySelector("#altmenu");
const barmenu = document.querySelector(".menu-bar");
const barmenu2 = document.querySelector("#error .bar");

if(barmenu2){
    barmenu2.onclick = function () {
        altmenu.classList.toggle("d-none");
    }
}

if(barmenu){
    barmenu.onclick = function () {
        altmenu.classList.toggle("d-none");
    }
}


document.querySelectorAll("#plus").forEach(plus => {
    plus.onclick = function () {
        this.parentElement.lastElementChild.classList.toggle("d-none");
    }
});

let index = 0;

if (document.querySelector(".window #left")) {
    document.querySelector(".window #left").addEventListener("click", function () {

        index++;
        if (index > 0) {
            index = index - 4;
        }
        document.querySelector("#lenta").style.left = index * 100 + "vw";

    });
}

if(document.querySelector(".window #right")){
    document.querySelector(".window #right").addEventListener("click", function () {
        index--;
        if (index < -3) {
            index = index + 4;
        }
        document.querySelector("#lenta").style.left = index * 100 + "vw";
    });
    
}


document.querySelectorAll("#search li").forEach(li => {
    li.addEventListener("click", function () {
        document.querySelector("#search li.active").classList.remove("active");
        this.classList.add("active");
    })
});

if(document.querySelector(".settings #icon")){
    document.querySelector(".settings #icon").addEventListener("click", function () {
        console.log("asdas");
        document.querySelector(".settings").classList.toggle("active");
    });
}



let a = 0;

if(document.querySelector("#destinations .left")){
    document.querySelector("#destinations .left").addEventListener("click", function () {
        
            a--;
            if (a < -1) {
                a = 0
            }
            document.querySelector("#destinations .lenta").style.left = a * 286 + "px";
        });
}

if(document.querySelector("#destinations .right")){
    document.querySelector("#destinations .right").addEventListener("click", function () {
        a++;
        if (a > 0) {
            a = -1
        }
        document.querySelector("#destinations .lenta").style.left = a * 286 + "px";
    });
    
}

let b = 0;
if(document.querySelector("#destinations .left2")){
    document.querySelector("#destinations .left2").addEventListener("click", function () {
        
            b--;
            if (b < -1) {
                b = 0
            }
            document.querySelector("#destinations .window2 .lenta").style.left = b * 286 + "px";
        });
}

if(document.querySelector("#destinations .right2")){
    document.querySelector("#destinations .right2").addEventListener("click", function () {
        b++;
        if (b > 0) {
            b = -1
        }
        document.querySelector("#destinations .window2 .lenta").style.left = b * 286 + "px";
    });
}


[...document.querySelectorAll("#destinations .tabs li")].forEach(li => {
    li.addEventListener("click", function () {
        if (this.id !== "main") {
            document.querySelector("#destinations .tab-context").classList.add("d-none");
        }
        else { document.querySelector("#destinations .tab-context").classList.remove("d-none"); }
        document.querySelector("#destinations .tabs li.active").classList.remove("active");
        this.classList.add("active");
    })
});


[...document.querySelectorAll("#changing li")].forEach(li => {
    li.addEventListener("click", function () {
        document.querySelector("#changing li.active").classList.remove("active");
        this.classList.add("active");
        if (this.id == "first") {
            document.querySelector(".maindiv .carusel").style.left = 0 + "px";

        }
        if (this.id == "second") {
            document.querySelector(".maindiv .carusel").style.left = (-530) + "px";

        }
        if (this.id == "third") {
            document.querySelector(".maindiv .carusel").style.left = -(530 * 2) + "px";

        }

    })
});


[...document.querySelectorAll("#undercontent .holiday-tabs li")].forEach(li=>{
    li.addEventListener("click",function(){
       if(this.classList.contains("honeymoon"))
       {document.querySelector("#undercontent .headings p").classList.remove("d-none");
       document.querySelector("#undercontent .imgbox").classList.remove("d-none");
       document.querySelector("#undercontent .headings h4").innerText="Honeymoon Suggestions";}
       else{
           document.querySelector("#undercontent .headings p").classList.add("d-none");
           document.querySelector("#undercontent .imgbox").classList.add("d-none");
           document.querySelector("#undercontent .headings h4").innerText=this.innerText;
       }
    })
});
    
