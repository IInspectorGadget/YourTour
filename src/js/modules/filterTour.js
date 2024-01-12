export const filterTour = () => {
    const categories = document.getElementsByClassName("choose-tour__item");
    const cards = document.getElementsByClassName("choose-tour__card");
    let enablesCategory =  localStorage.getItem("filter") || "popular";

    const setFilter = (curCategory, filter) => {


        //Обновляем класс ..active
        if (!curCategory.classList.contains("choose-tour__item-active")){
            //Удаляем у старой категории класс актив
            for(const category of categories){
                category.classList.remove("choose-tour__item-active")
            }
            curCategory.classList.add("choose-tour__item-active");
            enablesCategory = filter;
            console.log(enablesCategory);
            localStorage.setItem("filter", enablesCategory);
        }

        //элементам которые не соответствуют фильтру добавляем display: none
        for(const card of cards){
            const types = card.getAttribute("data-type");
            const id = Number(card.getAttribute("data-id"))
            const displayItems = []
            for (const type of types.split(" ")){
                if (enablesCategory != type  && displayItems.indexOf(id) == -1){
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
        if(enablesCategory == filter){
            setFilter(category, filter);
        }
        //Вешаем обработчик для изменения фильтра по нажатию на категорию
        category.addEventListener('click', ()=>{
            setFilter(category, filter);
        })
    }
}

