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
    Braces,
    Waypoints,
    Landmark,
    Coins,
    LineChart,
    Compass,
} from "lucide-react";

export const skillIcons = {
    // Frontend
    "React.js": Atom,
    "Next.js": Compass,
    React: Atom,
    Vite: Waypoints,
    TypeScript: FileCode2,
    "React Native": Smartphone,
    Expo: SmartphoneCharging,
    "Tailwind CSS": Wind,
    Bootstrap: Layers,

    // Backend
    "Ruby on Rails": Gem,
    "Node.js": Server,
    "Express.js": Braces,
    Flask: FlaskConical,
    "REST APIs": Activity,
    "JWT Authentication": KeyRound,

    // Mobile
    Flutter: Flame,

    // Databases
    MySQL: Database,
    PostgreSQL: Landmark,
    MongoDB: Boxes,
    Firebase: Flame,

    // DevOps & Tools
    "Linux Server Deployment": Terminal,
    "CI/CD (GitHub Actions)": GitPullRequest,
    "GitHub Actions": GitPullRequest,
    Git: GitBranch,
    Postman: Activity,
    Jira: Bug,
    "Android Studio": Smartphone,
    "Payment Gateway": Coins,
    "CoinGecko API": Activity,
    TradingView: LineChart,
    "Maps APIs": Waypoints,
    "Payment Gateway Integration": Coins,
    "Media Rendering Pipelines": Layers,
};
