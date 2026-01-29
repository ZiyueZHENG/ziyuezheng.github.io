// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "ZZY research",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-software",
          title: "software",
          description: "ZZY software",
          section: "Navigation",
          handler: () => {
            window.location.href = "/software/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Course materials, notes, and resources for classes taught.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-misc",
          title: "Misc",
          description: "ZZY misc",
          section: "Navigation",
          handler: () => {
            window.location.href = "/misc/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-give-a-talk-at-cbiomes-2025-annual-meeting",
          title: 'I give a talk at CBIOMES 2025 annual meeting.',
          description: "",
          section: "News",},{id: "news-a-give-a-talk-at-qb3-berkeley-2025-bioscience-meeting",
          title: 'A give a talk at QB3-Berkeley 2025 Bioscience Meeting!',
          description: "",
          section: "News",},{id: "teachings-stat-131-intro-to-probability",
          title: 'STAT 131 Intro to Probability',
          description: "This course covers the foundational aspects of Probability, including combinatorial analysis, axioms of probability and independence, random variables (discrete and continuous), joint probability distributions, properties of expectation, Central Limit Theorem, Law of Large Numbers, Markov chains.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
