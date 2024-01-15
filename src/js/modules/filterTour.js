export const filterTour = () => {
    const categories = document.getElementsByClassName("choose-tour__item");
    const cards = document.getElementsByClassName("choose-tour__card");
    let enablesCategory =  localStorage.getItem("filter") || "popular";

    const setFilter = (curCategory, filter) => {


        //Update class ..active
        if (!curCategory.classList.contains("choose-tour__item-active")){
            //Delete the asset class from the old category
            for(const category of categories){
                category.classList.remove("choose-tour__item-active")
            }
            curCategory.classList.add("choose-tour__item-active");
            enablesCategory = filter;
            localStorage.setItem("filter", enablesCategory);
        }

        //add display: none to elements that do not match the filter
        for(const card of cards){
            const types = card.getAttribute("data-type");
            const id = Number(card.getAttribute("data-id"))
            const displayItems = []
            for (const type of types.split(" ")){
                if (enablesCategory !== type  && displayItems.indexOf(id) === -1){
                    card.style.display = "none";
                } else {
                    displayItems.push(id);
                    card.style.display = "flex";
                }
            }
            
        }
    }

    for(const category of categories ){
        const filter = category.getAttribute("data-filter");
        //Initial installation of the filter from localstorage
        if(enablesCategory === filter){
            setFilter(category, filter);
        }
        //Attach a handler for changing the filter when clicking on a category
        category.addEventListener('click', ()=>{
            setFilter(category, filter);
        })
    }
}

