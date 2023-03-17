const sidebar = document.querySelector(".sidebar");
const selection = document.querySelector(".design-selection");
const archives = document.querySelector(".design-archives");
const zen = document.querySelector(".zen-resources");

sidebar.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    selection.classList.toggle("active");
    archives.classList.toggle("active");
    zen.classList.toggle("active");
})

/*document.querySelectorAll(".sidebar").forEach(n => n.addEventListener("click", () => {
    selection.classList.remove("active");
    archives.classList.remove("active");
    zen.classList.remove("active");
}))*/