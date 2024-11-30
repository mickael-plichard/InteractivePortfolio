const projects = [
    {
        title: "Projet 1",
        description: "Description du projet 1",
        link: "#",
        image: "https://via.placeholder.com/300"
    },

    {
        title: "Projet 2",
        description: "Description du projet 2",
        link: "#",
        image: "https://via.placeholder.com/300"
    },

    {
        title: "Projet 3",
        description: "Description du projet 3",
        link: "#",
        image: "https://via.placeholder.com/300"
    },

    {
        title: "Projet 4",
        description: "Description du projet 4",
        link: "#",
        image: "https://via.placeholder.com/300"
    },

    {
        title: "Projet 5",
        description: "Description du projet 5",
        link: "#",
        image: "https://via.placeholder.com/300"
    },
];

document.addEventListener("DOMContentLoaded", () => {
    const projectsContainer = document.getElementById("projects-container");

    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");

        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" style="width: 100%; border-radius: 8px;">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">Voir le projet</a>
        `;

        projectsContainer.appendChild(projectCard);
    })
})