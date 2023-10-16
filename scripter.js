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
    styler = document.head.appendChild(document.createElement("style"));

bchurch.addEventListener("click", function() {styler.innerHTML = ".bgchurch::before { opacity: 1; } .bgchurch::after { opacity: 1; } .p1 { transform: translate(40dvw, 0); } .p2 { transform: translate(-5dvw, 0); } .tbox1 { transform: translate(-2dvw, -58dvh); width: 550px; } .tbox2 { transform: translate(-3dvw, -57dvh); width: 200px; } .lbox1 { width: 200px; transform: translate(0, -23dvh); } .lbox2 { width: 200px; transform: translate(-15dvw, 6dvh); } .gochurch { visibility: visible; opacity: 1;}"; bbox.textContent = "GO BACK";});

bclassroom.addEventListener("click", function() {styler.innerHTML = ".bgclassroom::before { opacity: 1; } .bgclassroom::after { opacity: 1; } .p1 { transform: translate(35dvw, 54dvh); } .p2 { transform: translate(-5dvw, -52dvh); } .tbox1 { transform: translate(8dvw, -1dvh); } .tbox2 { width: 600px; transform: translate(-42dvw, -53dvh); } .lbox1 { width: 210px; transform: translate(15dvw, -30dvh); } .lbox2 { width: 210px; transform: translate(-1dvw, -1dvh);} .goclassroom { visibility: visible; opacity: 1;}"; bbox.textContent = "GO BACK"});
bcommunity.addEventListener("click", function() {styler.innerHTML = ".bgcommunity::before { opacity: 1; } .bgcommunity::after { opacity: 1; } .p1 { transform: translate(-40dvw, 0); } .p2 { transform: translate(-13dvw, 0);} .tbox1 { transform: translate(-12dvw, -1dvh); width: 400px; } .tbox2 { transform: translate(-45dvw, -53dvh); width: 400px; } .lbox1 { width: 150px; transform: translate(-20dvw, -88dvh); } .lbox2 { width: 150px; transform: translate(-20dvw, -5dvh); } .gocommunity { visibility: visible; opacity: 1;}"; bbox.textContent = "GO BACK"});
bculture.addEventListener("click", function() {styler.innerHTML = ".bgculture::before { opacity: 1; } .bgculture::after { opacity: 1; } .p1 { transform: translate(29dvw, 54dvh); } .tbox1 { width: 650px; transform: translate(0, -60dvh); } .tbox2 { width: 300px; transform: translate(4dvw, -57dvh);} .lbox1 { width: 300px; transform: translate(-35dvw, -80dvh); } .lbox2 { width: 300px; transform: translate(-35dvw, -40dvh);} .goculture { visibility: visible; opacity: 1;}"; bbox.textContent = "GO BACK"});
bcourt.addEventListener("click", function() {styler.innerHTML = ".bgcourt::before { opacity: 1; } .bgcourt::after { opacity: 1; } .p2 { transform: translate(27dvw, 0); } .tbox1 { width: 400px; transform: translate(-30dvw, -3dvh); } .tbox2 { width: 400px; transform: translate(-63dvw, -55dvh); } .lbox1 { width: 300px; transform: translate(20dvw, -23dvh); } .lbox2 { width: 600px; transform: translate(29dvw, 10dvh);} .gocourt { visibility: visible; opacity: 1;}"; bbox.textContent = "GO BACK"});
bbox.addEventListener("click", function() {styler.innerHTML = ".bgchurch::before { opacity: 0; } .bgclassroom::before { opacity: 0; } .bgcommunity::before { opacity: 0; } .bgculture::before { opacity: 0; } .bgcourt::before { opacity: 0; }"; bbox.textContent = "ABOUT";});