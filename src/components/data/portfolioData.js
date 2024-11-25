/**
 * @SofiDev Ceci est JSDOC, si tu trouves cela compliqué, tu peux simplement le supprimer, c'est un commentaire, cela ne changera rien
 * @typedef PortafolioData
 * @property {string} imgSrc URL de l'image
 * @property {string} title Titre de la carte
 * @property {string[]} skills Tableau de tes compétences, par exemple : ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La description de la carte
 * @property {string} demoURL URL d'une page de démonstration
 * @property {string} repoURL URL du repository, par exemple : https://github.com/username/repo
 * @property {string} anim L'animation qui sera exécutée lors du chargement de la carte, par exemple : fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Le niveau de luminosité de l'arrière-plan de la carte, par exemple : 0.1
 */

/**
 * @SofiDev Ceci est JSDOC, si tu trouves cela compliqué, tu peux simplement le supprimer, c'est un commentaire, cela ne changera rien
 * @type {PortafolioData[]}
 */

export const portafolioData = [
    {
        imgSrc: '/img/PGuard-Track.PNG',
        title: 'PGuard-Track',
        skills: ['React', 'Nodejs', 'MongoDB', 'Tailwind', 'Npm' ,'Postman','Figma'],
        descripcion:
            'Plateforme pour suivre l\'utilisation des robots P-Guard. Développé avec React, Node.js et MongoDB pour un suivi en temps réel.',
        demoURL: '/videos/pguard-demo.mp4',
        //repoURL: 'https://github.com/SanaChouikhi/Guard-Track-Web',
        anim: 'fade-up',
        averageBrightness: 0.1,
    },
    {
        imgSrc: '/img/jban-image.PNG',
        title: 'Jban Mobile App',
        skills: ['React', 'API', 'Postman','Xd','JavaScript','VsCode','AndroidStudio',],
        descripcion:
            'Application mobile pour la gestion des transactions financières pour un client en France. Développé avec React Native et intégré avec des API pour une expérience utilisateur fluide.',
        demoURL: '/videos/JbanMobile-demo.mp4',
        //repoURL: 'https://github.com/username/jban-app',
        anim: 'fade-right',
    },
    {
        imgSrc: '/img/gsm-site-manager-image.PNG',
        title: 'GSM Site Manager',
        skills: ['Flutter', 'MySQL', 'Nodejs' ,'Figma' ,'Postman','VsCode','AndroidStudio'],
        descripcion:
            'Application pour la gestion des sites GSM. Développé avec Flutter pour le développement mobile multiplateforme et MySQL pour la gestion des données backend.',
        demoURL: '',
        //repoURL: 'https://github.com/username/gsm-site-manager',
        anim: 'fade-left',
    },
    {
        imgSrc: '/img/virtual-classroom-image.PNG',
        title: 'Virtual Classroom',
        skills: ['Flutter', 'Nodejs', 'MySQL' ,'Figma' ,'Postman','VsCode','AndroidStudio'],
        descripcion:
            'Application de classe virtuelle en temps réel pour l\'apprentissage à distance. Utilise WebRTC pour la communication vidéo en direct et Node.js pour le traitement backend.',
        demoURL: '',
        //repoURL: 'https://github.com/username/virtual-classroom',
        anim: 'fade-up',
        averageBrightness: 0.2,
    },
    {
        imgSrc: '/img/employee-management-image.PNG',
        title: 'Employee Management System',
        skills: ['PHP', 'MySQL','VsCode'],
        descripcion:
            'Application web pour la gestion des données des employés et des armoires, développée avec PHP et MySQL.',
        demoURL: '',
        //repoURL: 'https://github.com/username/employee-management',
        anim: 'fade-right',
    },
    {
        imgSrc: '/img/Hearti App.PNG',
        title: 'Hearti App',
        skills: ['Flutter','Figma','MySQL','VsCode','AndroidStudio'],
        descripcion: 'Application mobile pour surveiller et suivre les signes vitaux, avec communication en temps réel avec les médecins.',
        demoURL: '',
        //repoURL: 'https://github.com/SanaChouikhi/Hearti-App',
        anim: 'fade-right'
    },
    {
        imgSrc: '/img/gestcontact.PNG',
        title: 'Gest Contact',
        skills: ['Flutter', 'Nodejs','SqLite' ,'VsCode','AndroidStudio'],
        descripcion: 'Application mobile pour la gestion des contacts de répertoires, offrant une interface utilisateur intuitive et des fonctionnalités avancées pour organiser et gérer vos contacts efficacement.',
        demoURL: '',
        //repoURL: 'https://github.com/SanaChouikhi/Hearti-App',
        anim: 'fade-right'
    },
    {
        imgSrc: '/img/Nitri Virtu.PNG',
        title: 'Nutri Virtuu',
        skills: ['Flutter', 'Firebase','SqLite' ,'VsCode','AndroidStudio'],
        descripcion: 'Application mobile de nutrition virtuelle permettant des consultations en ligne avec des spécialistes, le suivi personnalisé des régimes alimentaires et des conseils nutritionnels adaptés.',
        demoURL: '',
        //repoURL: 'https://github.com/SanaChouikhi/Hearti-App',
        anim: 'fade-right'
    },
];

// Dictionnaire d'icônes pour chaque compétence
const skillIcons = {
    JavaScript: 'skill-icons:javascript',
    React: 'skill-icons:react-dark',
    API: 'skill-icons:fastapi',
    CSS: 'skill-icons:css',
    Sass: 'skill-icons:sass',
    StyledComponents: 'skill-icons:styledcomponents',
    Bootstrap: 'skill-icons:bootstrap',
    Tailwind: 'skill-icons:tailwindcss-dark',
    Flutter: 'skill-icons:flutter-dark',
    Nodejs: 'skill-icons:nodejs-dark',
    MongoDB: 'skill-icons:mongodb',
    PHP: 'skill-icons:php-dark',
    Firebase: 'skill-icons:firebase',
    MySQL: 'skill-icons:mysql-dark',
    WebRTC: 'skill-icons:webrtc',  // Icône pour WebRTC si nécessaire
	AndroidStudio:'skill-icons:androidstudio-dark',
	Windows:'skill-icons:windows-dark',
	Postman:'skill-icons:postman',
	VsCode:'skill-icons:vscode-dark',
	Figma:'skill-icons:figma-dark',
	Xd:'skill-icons:xd',
	Npm:'skill-icons:npm-dark',
	SqLite:'skill-icons:sqlite',
	Git:'skill-icons:github-dark'


	
};

/**
 * @description Le tableau `portafolioData` est mappé pour ajouter les icônes correspondantes aux compétences.
 */
export const getPortafolioData = portafolioData.map((item) => {
    return {
        ...item,
        skills: item.skills.map((skill) => skillIcons[skill] || skill), // Remplace chaque compétence par son icône
    };
});
