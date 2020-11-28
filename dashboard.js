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