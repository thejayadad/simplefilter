


document.querySelector("#input").addEventListener("input", filterList)

function filterList(){
    let search = document.querySelector("#input")
    let filter = search.value.toLowerCase()
    let items = document.querySelectorAll(".list-group-item")

    items.forEach((item) => {
        let text = item.textContent;
        if(text.toLowerCase().includes(filter.toLowerCase())){

            item.style.display = "";

        } else {
            item.style.display = "none";
        }
    })
}