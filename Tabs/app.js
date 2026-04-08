const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

tabs.forEach(tab => {
    tab.addEventListener("click", function(){
        const tabNumber = this.getAttribute("data-tab");
        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        this.classList.add("active");
        document.querySelector(`.content[data-content="${tabNumber}"]`).classList.add("active");
    })
})
