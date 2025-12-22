import {
    Atom,
    FileCode2,
    Smartphone,
    Wind,
    Layers,
    Gem,
    Server,
    FlaskConical,
    KeyRound,
    Database,
    Boxes,
    Flame,
    GitBranch,
    GitPullRequest,
    Terminal,
    Activity,
    Bug,
    SmartphoneCharging,
} from "lucide-react";

export const skillIcons = {
    // Frontend
    "React.js": Atom,
    TypeScript: FileCode2,
    "React Native": Smartphone,
    Expo: SmartphoneCharging,
    "Tailwind CSS": Wind,
    Bootstrap: Layers,

    // Backend
    "Ruby on Rails": Gem,
    "Node.js": Server,
    Flask: FlaskConical,
    "REST APIs": Activity,
    "JWT Authentication": KeyRound,

    // Mobile
    Flutter: Flame,

    // Databases
    MySQL: Database,
    MongoDB: Boxes,
    Firebase: Flame,

    // DevOps & Tools
    "Linux Server Deployment": Terminal,
    "CI/CD (GitHub Actions)": GitPullRequest,
    Git: GitBranch,
    Postman: Activity,
    Jira: Bug,
    "Android Studio": Smartphone,
};
