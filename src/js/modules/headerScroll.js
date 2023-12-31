export const headerScroll = () =>{
    const header = document.getElementsByClassName("header__wrapper-top")[0]
    const startChangeHight = 450

    window.addEventListener("scroll", () =>{
        let scrollDistance = window.scrollY

        if (scrollDistance >= startChangeHight){
            header.classList.add("header__wrapper-top-fixed")
        } else {
            header.classList.remove("header__wrapper-top-fixed")
        }
    })
}

// export const smoothScroll = () =>{
//     const links = document.getElementsByClassName("header__nav-link");

//     for (let link of links){
//         link.addEventListener('click', (e) =>{
//             e.preventDefault();
//             document.querySelector(link.getAttribute('href')).scrollIntoView({
//                 behavior: 'smooth'
//             });
//         });
//     };

// }

