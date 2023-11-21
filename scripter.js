let bchurch = document.querySelector(".bchurch"), 
    church = document.querySelector("church"),
    bclassroom = document.querySelector(".bclassroom"),
    bcommunity = document.querySelector(".bcommunity"),
    bculture = document.querySelector(".bculture"),
    bcourt = document.querySelector(".bcourt"),
    btnwrapper = document.querySelector(".btnwrap"),
    wrapper = document.querySelector(".mainwrap"),
    p1 = document.querySelector(".p1"),
    p2 = document.querySelector(".p2"),
    tbox1 = document.querySelector(".tbox1"),
    tbox2 = document.querySelector(".tbox2"),
    lbox1 = document.querySelector(".lbox1"),
    lbox2 = document.querySelector(".lbox2"),
    bbox = document.querySelector(".btnbox"),
    linkStyle = document.getElementById('linkstyle'),
    styler = document.head.appendChild(document.createElement("style"));
    bgMusic = new Audio("./assets/music/church.ogg");

bgMusic.addEventListener("ended", repeatBg);
bgMusic.volume = 0.1;

// document.addEventListener("load", () => 
//     setTimeout(function(){
//         document.getElementById("preloader").style.opacity = 0;
//         // document.getElementById("preloader").style.display = "none";
//         // document.getElementById("preloader").style.visibility = "hidden";
//         document.getElementById("preloader").style.zIndex = -3;
//         document.removeEventListener("load", setTimeout(deload, 2000));
//     }, 2000)
// );

function repeatBg(e) {
    e.target.currentTime = 0;
    e.target.play();
}

function playBg(n) {
    bgMusic.pause();
    switch(n) {
        case 1:
            bgMusic = new Audio("./assets/music/church.ogg");
            break;
        case 2:
            bgMusic = new Audio("./assets/music/classroom.ogg");
            break;
        case 3:
            bgMusic = new Audio("./assets/music/culture.ogg");
            break;
        case 4:
            bgMusic = new Audio("./assets/music/community.ogg");
            break;
        case 5:
            bgMusic = new Audio("./assets/music/court.ogg");
            break;
    }
    bgMusic.play();
    bgMusic.volume = 0.08;
}

bchurch.addEventListener("click", function() {
    if (bbox.textContent == "GO☨BACK") {
        bboxfunc() //go back function
    }
    else {
        linkStyle.href = "./stylers/church.css"; 
        bchurch.classList.add("selected");
        bbox.textContent = "GO☨BACK";
        lbox1.textContent = "Points in total: ";
        lbox2.textContent = "Entries in total: ";
        lbox1.style.fontWeight = "1";
        playBg(1);
    }
});

bclassroom.addEventListener("click", function() {
    if (bbox.textContent == "GO✓BACK") {
        bboxfunc()
    }
    else {
        linkStyle.href = "./stylers/classroom.css"; 
        bbox.textContent = "GO✓BACK";
        lbox1.textContent = "Total Points: ";
        lbox2.textContent = "Total Entries: ";
        lbox1.style.fontWeight = "1";
        playBg(2);
    }
});

bcommunity.addEventListener("click", function() {
    if (bbox.textContent == "GO⚧BACK") {
        bboxfunc()
    }
    else {
        linkStyle.href = "./stylers/community.css"; 
        bbox.textContent = "GO⚧BACK";
        lbox1.textContent = "About Community:";
        lbox2.textContent = "Goal and Aim:";
        lbox1.style.fontWeight = "1";
        playBg(4);
    }
});

bculture.addEventListener("click", function() {
    if (bbox.textContent == "GO⍟BACK") {
        bboxfunc()
    }
    else {
        linkStyle.href = "./stylers/culture.css"; 
        bbox.textContent = "GO⍟BACK";
        lbox1.textContent = "Entry Count: ";
        lbox2.textContent = "Point Tally: ";
        lbox1.style.fontWeight = "1";
        playBg(3);
    }
});

bcourt.addEventListener("click", function() {
    if (bbox.textContent == "GO◍BACK") {
        bboxfunc()
    }
    else {
        linkStyle.href = "./stylers/court.css"; 
        bbox.textContent = "GO◍BACK";
        lbox1.textContent = "EXAMPLES OF SPORTS IN SILLIMAN ARE: ";
        lbox1.style.fontWeight = "550";
        lbox2.textContent = "Basketball, Badminton, Chess, Volleyball, Swimming, Softball, Football, E-Sports, etc. ";
        playBg(5);
    }
});

bbox.addEventListener("click", bboxfunc);

function bboxfunc() {
    if (bbox.textContent == "ABOUT PAGE") {
        window.location.href = "./about/index.htm";
    }
    else {
        linkStyle.href = "./stylers/goback.css";
        bbox.textContent = "ABOUT PAGE";
        lbox1.textContent = "Made by: Baxter Bao-As GE10A-O © 2023";
        lbox2.textContent = "Welcome to my WPE Online Journal! where fun comes alive!";
        lbox1.style.fontWeight = "1";
        bgMusic.pause();
    }
}
