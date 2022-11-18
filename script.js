
const projectLinks = document.querySelectorAll('.project-links .project-link');
//console.log(projectLinks);

projectLinks.forEach((projectLink) => {

    projectLink.addEventListener('click', function(e){
        e.preventDefault();

        const allProjects = document.querySelectorAll('.project');

        //removing added classes
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