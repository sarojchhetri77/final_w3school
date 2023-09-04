// menu button
let MenuBtn = document.getElementById("btn-menu");
let MenuBtnList = document.getElementById("menu-list");
let Top = document.getElementById("top-section");
// function to display the menu list
function display() {
    MenuBtnList.style.display = "block";
    Top.style.display = "none";

}
// function to close the menu list
function closelist() {
    MenuBtnList.style.display = "none";
    Top.style.display = "block";
}

// how to section slider
let howtosection_itemE1 = document.QueryselecterAll(".howtosection-item")
let imageSliderPreveE1 = document.getElementById("imageSliderPreve")
let imageSliderNextE1 = document.getElementById("imageSliderNext")
let slideImageCurrent = 0;


imageSliderNextE1.addEventListener("click", () => {
    if (slideImageCurrent <= 0 && slideImageCurrent >= -100) {
        slideImageCurrent -= 100;
    }
    howtosection_itemE1.forEach(e1 => {
        e1.style.transform = 'translateX(${slideImageCurrent}%)'
    })
})

imageSliderPreveE1.addEventListener("click",() =>{
    if(slideImageCurrent < 0){
        slideImageCurrent +=100
     alert('hello');
    }
    howtosection_itemE1.foreach(e1=>{
e1.style.transform = 'translateX(${slideImageCurrent}%)'
    })
    
})
