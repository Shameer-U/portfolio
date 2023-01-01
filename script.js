//display only corresponding projects on clicking project link and make project link active
const projectLinks = document.querySelectorAll('.project-links .project-link');
//console.log(projectLinks);

projectLinks.forEach((projectLink) => {

    projectLink.addEventListener('click', function(e){
        e.preventDefault();

        projectLinks.forEach((item) => {
            item.classList.remove('active');
        });
        projectLink.classList.add('active');

        const allProjects = document.querySelectorAll('.project');

        allProjects.forEach((item) => {
            if (item.classList.contains('hide')) {
                item.classList.remove('hide');
            }
        });

        if (projectLink.id !== 'projectAll') {
            allProjects.forEach((item) => {
                if (! item.classList.contains(projectLink.id)) {
                    item.classList.add('hide');
                }
            });
        }
    });

});

//triggering click at start
document.getElementById('projectAll').click();

//hide side section  when clicked on side sections links and screen size is < 768

const links = document.querySelectorAll('.nav-link');

links.forEach((link) => {
    link.addEventListener('click', function(e) {
        document.querySelector('.side-section').classList.contains('hide');
        document.querySelector('.side-section').classList.remove('hide');

        links.forEach((item) => {
            item.classList.remove('active');
        });
        link.classList.add('active');
    
        if (screen.width <= 768) {
           document.querySelector('.side-section').classList.add('hide');
        }
    });
});

//remove hide class from side section  when screen resized to size > 768
const removeHide = () => {
    if (screen.width > 768) {
        document.querySelector('.side-section').classList.contains('hide');
        document.querySelector('.side-section').classList.remove('hide');
     }
}

window.onresize = removeHide;

//close side section on clicking close icon
document.querySelector('.close-icon').addEventListener('click', function(e) {
    document.querySelector('.side-section').classList.add('hide');
});

//open side section on click of hamburger icon
document.querySelector('.main-nav-link').addEventListener('click', function(e) {
    document.querySelector('.side-section').classList.contains('hide');
    document.querySelector('.side-section').classList.remove('hide');
});


//making side section links active on scroll
let fortyPercentOfScreenHeight = (screen.height / 100) * 40;
window.onresize = () => {
    fortyPercentOfScreenHeight = (screen.height / 100) * 40;
}

window.onscroll = () => {
    sections = document.querySelectorAll('section');

    sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        //if (top >= offset && top < offset + height) {
        if (top >= (offset - fortyPercentOfScreenHeight) && top < (offset + height)) {
            const target = document.querySelector(`[href='#${id}']`).parentElement;

            links.forEach((item) => {
                item.classList.remove('active');
            });
            target.classList.add('active');
        }
    })
};


//slide animation starts only after is page is loaded.
// window.onload = () =>  {
//     document.querySelector('.banner-content').classList.add('slide');
// }

//making home link active at initial loading
const homeLink = document.querySelector(`[href='#home']`).parentElement;
homeLink.classList.add('active');