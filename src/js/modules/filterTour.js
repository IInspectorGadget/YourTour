export const filterTour = () => {
    const categories = document.getElementsByClassName("choose-tour__item");
    const cards = document.getElementsByClassName("choose-tour__card");
    let enablesCategory = [];
    let enable_count = 0;

    for(let category of categories ){
        const filter = category.getAttribute("data-filter");
        category.addEventListener('click', ()=>{
            if (category.classList.contains("choose-tour__item-active")){
                category.classList.remove("choose-tour__item-active");
                enable_count-=1;
                enablesCategory = enablesCategory.filter(e => e != filter);
            }else{
                enable_count+=1;
                category.classList.add("choose-tour__item-active");
                enablesCategory.push(filter);
            }

            for(let card of cards){
                const type = card.getAttribute("data-type");
                if (!enablesCategory.includes(type) && enable_count){
                    card.style.display = "none";
                } else {
                    card.style.display = "flex";
                }
            }
            
        })
    }
}

