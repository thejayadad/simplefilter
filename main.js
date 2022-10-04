


document.querySelector("#input").addEventListener("input", filterList)

function filterList(){
    let searchInput = document.querySelector("#input")
    let filter = searchInput.value.toLowerCase()
    let listItems = document.querySelectorAll(".list-group-item")

    listItems.forEach((item) => {
        let text = item.textContent;
        if(text.toLowerCase().includes(filter.toLowerCase())){

            item.style.display = "";

        } else {
            item.style.display = "none";
        }
    })
}