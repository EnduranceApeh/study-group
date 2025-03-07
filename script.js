const projectRow = document.getElementById('projectROw');

// Project Info
const memberProject = [
    {
        image: "/assets/food-odering-app.png",
        name: "Food ordering app",
        description: "A seamless food ordering experience with a modern UI.",
        techStack: "Html, Css, Javascript",
        developer: "Apeh Endurance",
        url: {
            porfolio: "#",
            liveDemo: "#",
            github: "#",
            twitter: "#"
        }
    },

]

// Dynamically load members projects
function displayProject() {
    let html = "";

    memberProject.forEach((project) => {
        html += `
        <div class="col-md-4 mt-2">
        <div class="card rounded-3 shadow-sm border-2  overflow-hidden">
            <img src=${project.image} alt="project-image" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title fw-bold">${project.name}</h5>
                <p class="card-text text-muted">${project.description}</p>
                <p class="text-muted mt-2"><strong>Tech Stack:</strong> ${project.techStack}</p>
                <h6 class="card-text">Developer: 
                    <span><a href=${project.url.porfolio} class="text-decoration-none text-primary fw-semibold">${project.developer}</a></span>
                </h6>
            </div>
            <div class="card-footer bg-white d-flex justify-content-between align-items-center border-0">
                <a href=${project.url.liveDemo} class="btn btn-sm btn-primary d-flex align-items-center gap-1">
                    <i class="bi bi-box-arrow-up-right"></i> View Demo
                </a>
                <div>
                    <a href=${project.url.twitter} class="btn btn-outline-dark btn-sm rounded-circle">
                        <i class="bi bi-twitter"></i>
                    </a>
                    <a href=${project.url.github} class="btn btn-outline-dark btn-sm rounded-circle ms-2">
                        <i class="bi bi-github"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    `
    })

    // Insert each projects to the DOM
    projectRow.innerHTML = html;
}

// Call funtion
displayProject()