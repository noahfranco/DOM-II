// Your code goes here
// ----- Mouseover -----
let content = document.querySelector(" h2"); 

content.addEventListener("mouseover", function(event){
    event.target.style.color = "green"
    setTimeout(function() {
        event.target.style.color = "";
      }, 2000);
    }, false);


// ----- Click -----
const pickDestination = document.querySelector(".content-destination h2"); 
pickDestination.addEventListener("click", event => {
    pickDestination.textContent = "What am I doing with my life?"
}); 

const letsGo = document.querySelector(".content-section h2"); 
letsGo.addEventListener("click", event => {
    letsGo.textContent = "Hi, my name is jeff"
}) 


// ----- Mouseenter -----
const disappear = document.querySelector(".logo-heading")
disappear.addEventListener("mouseenter", function(){
    this.style.visibility = "hidden"
}); 

// ----- DragStart -----
const dragPicture = document.querySelector(".intro img"); 
dragPicture.addEventListener("dragstart", function(){
dragPicture.setAttribute("src", "https://matteroffactsblog.files.wordpress.com/2013/08/despicable_me_2_minions-1920x1080.jpg")
});





// ----- dblclick -----
const clickContent = document.querySelector(".destination btn"); 

clickContent.addEventListener('dblclick', function(event){
    clickContent.classList.toggle("large") 
}) 


// ----- Window Scroll -----
window.addEventListener("scroll",() => {
    if(window.scrollY > 1000) {
        document.querySelector("body").style.background = "lightgreen";

        setTimeout(function(){
            document.querySelector("body").style.background = "white";
        }), 3000;
    }
}); 



