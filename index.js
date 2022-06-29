

const scaleFactor =1/20; 
function moveBg(event){
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    console.log(x,y);

    for (let i = 0 ; i< shapes.length; i++){
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1 ;
        shapes[i].style.transform = `translate(${x * boolInt}px,${y*boolInt}px)`
    }
}










let contrastToggle = false;

function toogleContrast(){
    contrastToggle =! contrastToggle;

    if (contrastToggle){

        document.body.classList += " dark-theme";
    }
    else {
        document.body.classList.remove("dark-theme");
    }
}



// template_jlhn8zo
// service_ldlc1n5
// Edpgx-lz8iHxjN2i6

// function contact(event){
//     const loading = document.querySelector('.modal__overlay--loading');
//     const success = document.querySelector('.modal__overlay--succes');
//     loading.classList += " modal__overlay--visible";
//  emailjs
//     .sendForm(
//         'service_ldlc1n5',
//         'template_jlhn8zo',
//         event,target,
//         'Edpgx-lz8iHxjN2i6'

//     ).then(() => {
//         loading.classList.remove("modal__overlay--visible");
//         success.classList += " modal__overlay--visible";
        
//     }).catch(() => {
//         loading.classList.remove("modal__overlay--visible");
//         alert(
//             "The email service is temporarrily unavailable. Please contact me directly on my email@hotmail.com"
//         );
//     })
// }
function contact(event){
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    console.log('it worked')

    setTimeout(() => {
         
        console.log('it worked1')
    }, 2000);
    
}

let isModalOpen = false;
function toggleModal(){
    if (isModalOpen){
        isModalOpen = false
        document.body.classList.remove("modal--open")
        return 
    }
    isModalOpen = true
    
    document.body.classList += " modal--open"
}