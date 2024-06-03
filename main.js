// Navbar

const navbarMenuItems = document.querySelectorAll('.navbar_menu_items');

const setActiveMenuItem = (idx) => {
    navbarMenuItems.forEach((menuItem, index) => {
        if(idx === index){
            menuItem.classList.add('active');
        }
        else{
            menuItem.classList.remove('active');
        }
    });
};

navbarMenuItems.forEach((menuItem, index) => {
    menuItem.addEventListener('click', () => setActiveMenuItem(index));
});

