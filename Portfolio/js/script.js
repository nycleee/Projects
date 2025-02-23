const links = document.querySelectorAll('.navbar a');

links.forEach(link => {
    link.addEventListener('click',() => {
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});
// Animation box
// document.addEventListener("DOMContentLoaded", function(){
//     const projectBoxes = document.querySelectorAll(".project-box");

//     projectBoxes.forEach((box) => {
//         const text = box.querySelector("span");

//         box.addEventListener("mouseenter", () => {
//             text.style.transition = "transform 5s linear";
//             text.style.transform = "translateX(-100%)";
//             });
//         box.addEventListener("mouseleave", () => {
//             text.style.transition = "transform 1s ease-out";
//             text.style.transform = "translateX(0)";
        
//         });
//     });
// });