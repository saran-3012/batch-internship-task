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

// Slide Animation 

const containers = document.querySelectorAll('.container');
const totalContainers  = containers.length;
let visitedContainers = new Array(totalContainers).fill(false);

const isVisibleOnScreen = (element) => {
    const {top, left, bottom, right} = element.getBoundingClientRect();
    const {innerHeight, innerWidth} = window;
    return ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) && ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth));
};

const checkContainers = () => {
    containers.forEach((container, index) => {
        if (!visitedContainers[index] && isVisibleOnScreen(container)) {
            setTimeout(() => {
                container.classList.add('visited');
                visitedContainers[index] = true;
            }, 100);
        }
    });
};

document.addEventListener('DOMContentLoaded', checkContainers);
document.addEventListener('scroll', checkContainers);