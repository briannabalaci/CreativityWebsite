const typesInfo = {
    "1": {
        title: "Ideation Creativity",
        text: "Ideation creativity involves generating fresh and innovative ideas to solve problems or create new opportunities. It's the ability to think outside the box and brainstorm unconventional solutions to challenges. \n" +
            "Examples: A writer brainstorming a unique storyline for a novel.\n" +
            "A marketing team generating ideas for a new ad campaign.\n" +
            "Inventing a new recipe that fuses two cuisines.\n",
    },

    "2": {
        title: "Artistic Creativity",
        text: "Definition: Artistic creativity is expressed through art, design, music, and other forms of aesthetic creation. It focuses on the ability to create beauty, convey emotions, or share stories through artistic mediums.\n" +
            "Examples:\n" +
            "A painter creating a mural that represents a cultural movement.\n" +
            "A composer crafting a symphony that evokes specific emotions.\n" +
            "A graphic designer developing an eye-catching logo for a brand.",
    },
    "3": {
        title: "Problem Solving Creativity",
        text: "Definition: Problem-solving creativity involves thinking critically and innovatively to overcome challenges or obstacles. It’s about finding unconventional solutions to difficult situations.\n" +
            "Examples:\n" +
            "An engineer designing a bridge to withstand extreme weather conditions.\n" +
            "A software developer creating a program to automate a tedious manual task.\n" +
            "A teacher finding a creative way to explain complex topics to students.",
    },
    "4": {
        title: "Scientific Creativity",
        text: "Definition: Scientific creativity involves creating new theories, experiments, or technologies to advance knowledge and solve scientific problems. It combines curiosity, experimentation, and critical thinking.\n" +
            "Examples:\n" +
            "A biologist discovering a new species or developing a breakthrough in genetics.\n" +
            "A physicist theorizing a new way to measure black holes.\n" +
            "Inventing a device that filters microplastics from ocean water.",
    },
    "5": {
        title: "Social Creativity",
        text: "Definition: Social creativity focuses on improving human relationships, collaboration, and community well-being. It is about finding innovative ways to bring people together, resolve conflicts, or create inclusive environments.\n" +
            "Examples:\n" +
            "Organizing a community event to raise awareness for environmental conservation.\n" +
            "Developing a social media campaign that encourages people to share stories of kindness.\n" +
            "Creating an app that helps people connect with mentors in their field.\n",
    },
    "6": {
        title: "Entrepreneurial Creativity",
        text: "Definition: Entrepreneurial creativity involves recognizing opportunities, taking risks, and building new businesses or ventures. It often combines innovation, strategic thinking, and adaptability.\n" +
            "Examples:\n" +
            "Starting a sustainable fashion brand that upcycles old clothes.\n" +
            "Developing an app that connects freelancers with clients in niche industries.\n" +
            "Launching a food truck business with a unique, fusion-style menu.\n",
    },
};

const typeCards = document.querySelectorAll(".type-card");
const popupModal = document.getElementById("popup-modal");
const popupTitle = document.getElementById("popup-title");
const popupDescription = document.getElementById("popup-description");

typeCards.forEach((card) => {
    card.addEventListener("click", () => {
        const typeId = card.getAttribute("data-type");
        const typeData = typesInfo[typeId];

        popupTitle.textContent = typeData.title;
        popupDescription.textContent = typeData.text;

        popupModal.style.display = "flex";
    });
});

function closePopup() {
    popupModal.style.display = "none";
}
