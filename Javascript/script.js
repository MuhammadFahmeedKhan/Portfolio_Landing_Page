// ------Preloader Start Here--------

window.onload = function(){
    document.querySelector(".preloader").style.display = "none";
}

// ------Preloader End Here--------

// ------Typed Content Start Here------

var typed = new Typed(".auto-type",{
    strings : ["Graphic Designer"],
    typeSpeed : 100,
    backSpeed : 100,
    loop:true
})

// ------Typed Content End Here------

// ------Sticky Navbar Start Here--------

var navbar = document.getElementById('navbar');
var nav_active = document.getElementById('nav_active');
window.onscroll = function(){
    if(window.pageYOffset >= nav_active.offsetTop){
        navbar.classList.add("navbar");
        document.getElementById('head').style.color="#fff";
    }
    else{
        navbar.classList.remove("navbar");
        document.getElementById('head').style.color="#ac92ed";
    }
}

// ------Sticky Navbar End Here--------

// ------Scroll Animation Start--------

    AOS.init({
        offset: 200,
    });

// ------Scroll Animation End---------

// ------Owl Carousel Start--------

var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    nav:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },            
        960:{
            items:3
        },
        1200:{
            items:4
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});

// ------Owl Carousel End--------

// ------Load More Button Start--------

var currentItem = 3;
function loadMore(){
    var boxes = document.querySelectorAll(".col_service");
    for(var i = currentItem; i<currentItem + 3; i++){
        boxes[i].style.display="flex";
    }
    currentItem += 3;
    if(currentItem >= boxes.length){
        document.getElementById("btn").style.display="none";    
    }
}

// ------Load More Button End--------

// ------Contact Form Validations Start--------
var usr_name = document.getElementById("usr_name");
var usr_email = document.getElementById("usr_email");
var usr_message = document.getElementById("usr_message");
var error_name = document.getElementById('error_name');
var error_email = document.getElementById('error_email');
var error_message = document.getElementById('error_message');
var modal = document.getElementById('popup_modal');

function message(){
    if(usr_name.value==""){
        error_name.innerHTML = "Value Must be Required";  
        setTimeout(()=>{
        error_name.innerHTML = "";  
        },3000)
    }
    if(usr_email.value==""){
        error_email.innerHTML = "Value Must be Required";  
        setTimeout(()=>{
        error_email.innerHTML = "";  
        },3000)
    }
    if(usr_email.value && !usr_email.value.match("@")){
        error_email.innerHTML = "Invalid Email";  
        setTimeout(()=>{
        error_email.innerHTML = "";  
        },3000)
    }
    if(usr_message.value==""){
        error_message.innerHTML = "Value Must be Required";  
        setTimeout(()=>{
        error_message.innerHTML = "";  
        },3000)
    }
    if(usr_name.value && usr_email.value && usr_message.value){
        modal.classList.add('popup_show');
    }
}
function cancel(){
    modal.classList.remove('popup_show');
    usr_name.value=""; 
    usr_email.value="";
    usr_message.value="";
    }
// ------Contact Form Validations End--------

// -------Contact Form Connect With Google Sheet Start-----
const scriptURL = 'https://script.google.com/macros/s/AKfycbwon6UORyQltyIr8zz-jAVwbnaGJqbaEdlTLLiptRJaSzgyNdx-pXUCHlNri_EDfTtNXw/exec'
    const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
// -------Contact Form Connect With Google Sheet End-----

// ------Navbar Responsive Start--------

var menu_bar = document.getElementById("menu_bar");

function toggle_menu(){
    menu_bar.style.height="50vh";
    menu_bar.style.display="block";
    menu_bar.style.opacity="1";
    menu_bar.style.transition="all .5s linear";
}
function cancel_menu(){
    menu_bar.style.height="0";
    menu_bar.style.opacity="0";
    menu_bar.style.transition="all 1s linear";
}
// ------Navbar Responsive End--------
