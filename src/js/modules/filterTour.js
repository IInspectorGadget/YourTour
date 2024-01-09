export const filterTour = () => {
    const categories = document.getElementsByClassName("choose-tour__item");
    const cards = document.getElementsByClassName("choose-tour__card");
    let enablesCategory = JSON.parse(localStorage.getItem("filter")) || ["popular"];
    enablesCategory = new Set(enablesCategory);

    function setFilter(category, filter) {
        //добавляем активным пунктам фильтра класс ..active
        if (category.classList.contains("choose-tour__item-active")){
            category.classList.remove("choose-tour__item-active");
            enablesCategory.delete(filter);
            localStorage.setItem("filter", JSON.stringify(Array.from(enablesCategory)));
        }else{
            category.classList.add("choose-tour__item-active");
            enablesCategory.add(filter);
            localStorage.setItem("filter", JSON.stringify(Array.from(enablesCategory)));
        }
        //элементам которые не соответствуют фильтру добавляем display: none
        for(const card of cards){
            const types = card.getAttribute("data-type");
            const id = Number(card.getAttribute("data-id"))
            const displayItems = []
            for (const type of types.split(" ")){
                if (!enablesCategory.has(type)  && displayItems.indexOf(id) == -1){
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
        
        //Первичная установка фильтра из localstorage
        if( enablesCategory.size != 0){
            if(enablesCategory.has(filter)){
                setFilter(category, filter);
            }
        }else{
            for(const card of cards){
                card.style.display = "none";
            }
        }

        //Вешаем обработчик для изменения фильтра по нажатию на категорию
        category.addEventListener('click', ()=>{
            setFilter(category, filter);
        })
    }
}

