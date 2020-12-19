// nav-sidebar toggle
var sidebarOpen = false;
const sidebar = document.getElementById("nav-sidebar");
const sidebarCloseIcon = document.getElementById("sidebarIcon");

function toggleSidebar() {
    if (!sidebarOpen) {
        sidebar.classList.add("nav-sidebar_active");
        sidebarOpen = true;
    };
}
function closeSidebar() {
    if (sidebarOpen) {
        sidebar.classList.remove("nav-sidebar_active");
        sidebarOpen = false;
    }
};
const dropdown = () => {
    const selectedAll = document.querySelectorAll(".selected");

    selectedAll.forEach((selected) => {
        const optionsContainer = selected.previousElementSibling;
        const optionsList = optionsContainer.querySelectorAll(".option");
        selected.addEventListener("click", () => {
            if (optionsContainer.classList.contains("active")) {
                optionsContainer.classList.remove("active");
            } else {
                let currentActive = document.querySelector(".options-container.active");
                if (currentActive) {
                    currentActive.classList.remove("active");
                }
                optionsContainer.classList.add("active");
            }
        });
        optionsList.forEach(o => {
            o.addEventListener("click", () => {
                selected.innerHTML = o.querySelector("label").innerHTML;
                optionsContainer.classList.remove("active");
            });
        });
    });
    
};
dropdown();