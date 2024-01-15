export const headerScroll = () =>{
    const header = document.getElementsByClassName("header__wrapper")[0]
    const startChangeHight = 450

    window.addEventListener("scroll", () =>{
        let scrollDistance = window.scrollY

        if (scrollDistance >= startChangeHight){
            header.classList.add("header__wrapper-scroll")
        } else {
            header.classList.remove("header__wrapper-scroll")
        }
    })
}

