/** @type {PortafolioData[]} */
export const portafolioData = [
    {
        imgSrc: '/img/PGuard-Track.PNG',
        title: 'PGuard-Track — IoT Robot Platform',
        skills: ['React', 'Nodejs', 'MongoDB', 'Python', 'Postman', 'Figma'],
        descripcion:
            'Real-time IoT monitoring platform for a fleet of autonomous security robots (Enova Robotics). MQTT for command/control, RTSP for live video streaming, health dashboards and alerts. Improved operational decision-making by 40%.',
        demoURL: '/videos/pguard-demo.mp4',
        anim: 'fade-up',
        averageBrightness: 0.1,
    },
    {
        imgSrc: '/img/jban-image.PNG',
        title: 'Jban — Banking Mobile App',
        skills: ['React', 'API', 'Postman', 'Xd', 'JavaScript', 'VsCode', 'AndroidStudio'],
        descripcion:
            'Banking mobile application for a French client. Built with React Native with multiple REST API integrations for a smooth user experience. Collaborated with remote backend teams to optimise API contracts and reduce errors.',
        demoURL: '/videos/JbanMobile-demo.mp4',
        anim: 'fade-right',
    },
    {
        imgSrc: '/img/gsm-site-manager-image.PNG',
        title: 'GSM Site Manager',
        skills: ['Flutter', 'MySQL', 'Nodejs', 'Figma', 'Postman', 'VsCode', 'AndroidStudio'],
        descripcion:
            'Field mobile app for GSM site management (Tunisie Telecom). Interactive maps, site details, photo uploads and QR code scanning. Reduced field engineers\' issue reporting time by 50%.',
        demoURL: '',
        anim: 'fade-left',
    },
    {
        imgSrc: '/img/virtual-classroom-image.PNG',
        title: 'Virtual Classroom',
        skills: ['Flutter', 'Nodejs', 'MySQL', 'Figma', 'Postman', 'VsCode', 'AndroidStudio'],
        descripcion:
            'Real-time virtual classroom platform (web + mobile) used by hundreds of students. WebRTC for audio/video calls, interactive whiteboard, live chat and screen sharing. Backend built with Node.js and Socket.io.',
        demoURL: '',
        anim: 'fade-up',
        averageBrightness: 0.2,
    },
    {
        imgSrc: '/img/Hearti App.PNG',
        title: 'Hearti App',
        skills: ['Flutter', 'Figma', 'MySQL', 'VsCode', 'AndroidStudio'],
        descripcion:
            'Mobile application for monitoring vital signs with real-time communication between patients and doctors. Intuitive interface designed for both healthcare professionals and patients.',
        demoURL: '',
        anim: 'fade-right',
    },
    {
        imgSrc: '/img/Nitri Virtu.PNG',
        title: 'Nutri Virtuu',
        skills: ['Flutter', 'Firebase', 'SqLite', 'VsCode', 'AndroidStudio'],
        descripcion:
            'Virtual nutrition mobile app enabling online consultations with specialists, personalised diet tracking and tailored nutritional advice.',
        demoURL: '',
        anim: 'fade-left',
    },
    {
        imgSrc: '/img/gestcontact.PNG',
        title: 'Gest Contact',
        skills: ['Flutter', 'Nodejs', 'SqLite', 'VsCode', 'AndroidStudio'],
        descripcion:
            'Mobile contact management application with an intuitive UI and advanced features to organise and manage your contacts efficiently.',
        demoURL: '',
        anim: 'fade-right',
    },
];

const skillIcons = {
    JavaScript: 'skill-icons:javascript',
    React:      'skill-icons:react-dark',
    API:        'skill-icons:fastapi',
    CSS:        'skill-icons:css',
    Bootstrap:  'skill-icons:bootstrap',
    Tailwind:   'skill-icons:tailwindcss-dark',
    Flutter:    'skill-icons:flutter-dark',
    Nodejs:     'skill-icons:nodejs-dark',
    Python:     'skill-icons:python-dark',
    MongoDB:    'skill-icons:mongodb',
    PHP:        'skill-icons:php-dark',
    Firebase:   'skill-icons:firebase',
    MySQL:      'skill-icons:mysql-dark',
    Docker:     'skill-icons:docker',
    AndroidStudio: 'skill-icons:androidstudio-dark',
    Postman:    'skill-icons:postman',
    VsCode:     'skill-icons:vscode-dark',
    Figma:      'skill-icons:figma-dark',
    Xd:         'skill-icons:xd',
    Npm:        'skill-icons:npm-dark',
    SqLite:     'skill-icons:sqlite',
    Git:        'skill-icons:github-dark',
};

export const getPortafolioData = portafolioData.map((item) => ({
    ...item,
    skills: item.skills.map((skill) => skillIcons[skill] || skill),
}));