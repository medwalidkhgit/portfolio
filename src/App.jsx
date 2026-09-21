import { useState, useEffect } from "react";
import profilePic from "./assets/profile.png";
import dialLogoImg from "./assets/dialtechnologies.jpg";
import ocpLogoImg from "./assets/ocp.png";
import './index.css'
import {
    Sun, Moon, Download, Mail, Code2, ExternalLink, Users,
    Briefcase, Globe, GraduationCap, Menu, X, Database, Server, Cloud, Terminal,
    Layers, Smartphone, Send, MapPin, Award, Languages, Wrench, GitBranch,
    Rocket, Building2, Calendar, Coffee, Atom, Package, Activity, Wallet,
    Boxes, MessageSquare, User, ChevronRight, ShieldCheck, Heart,
    Sparkles, Loader2,
} from "lucide-react";

/* ================================================================== */
/*  CONFIGURATION — à personnaliser                                     */
/* ================================================================== */

const WEB3FORMS_KEY = "ef4c66ea-65aa-42be-a907-7abcc15b7657";
const WEB3FORMS_URL = "https://api.web3forms.com/submit";

const PROFILE = {
    name: "Mohamed Walid Kharmoudi",
    initials: "MW",
    shortName: "Walid Kharmoudi",
    title: "Élève Ingénieur en Génie Informatique",
    tagline:
        "Je conçois des backends Java / Spring Boot performants, cloud-natifs et livrés en continu grâce à Docker, Kubernetes, AWS et des pipelines CI/CD.",
    email: "medwalidkh7@gmail.com",
    location: "Casablanca, Maroc",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/in/",
    cv: "/CV_Mohamed_Walid_Kharmoudi.pdf",
    cvFileName: "CV_Mohamed_Walid_Kharmoudi.pdf",
};

/* ================================================================== */
/*  DONNÉES                                                             */
/* ================================================================== */

const NAV = [
    { id: "accueil", label: "Accueil" },
    { id: "apropos", label: "À propos" },
    { id: "formation", label: "Formation" },
    { id: "experience", label: "Expérience" },
    { id: "competences", label: "Compétences" },
    { id: "stages", label: "Stages" },
    { id: "projets", label: "Projets" },
    { id: "contact", label: "Contact" },
];

const ABOUT =
    "Élève ingénieur en dernière année de Génie Informatique à l’ENSA Marrakech, à la recherche d’un stage de fin d’études (PFE) de 6 mois. Passionné par l’architecture logicielle, je me spécialise en Développement Backend, DevOps et Cloud. Je maîtrise l’automatisation du cycle de développement à l’aide des pipelines CI/CD ainsi que l’intégration d’une infrastructure cloud dédiée comme AWS (avec Docker et Kubernetes). Mon objectif est d’intégrer une équipe technique pour concevoir des solutions performantes et scalables.";

const EDUCATION = [
    {
        school: "ENSA Marrakech",
        degree: "Cycle d’Ingénieur en Génie Informatique",
        period: "2024 – 2027",
        note: "Dernière année du cycle",
    },
    {
        school: "ENSA Marrakech",
        degree: "Cycle Préparatoire Scientifique et Technique",
        period: "2022 – 2024",
    },
    {
        school: "Baccalauréat",
        degree: "Sciences Physiques (Option Français)",
        period: "2022",
        note: "Mention Très Bien",
    },
];

const ASSOCIATIVE = [
    {
        role: "Chef de la Cellule Développement Web et Mobile",
        org: "EMJE — ENSA Marrakech Junior Enterprise",
        icon: Code2,
        points: [
            "Conception et développement complet de la plateforme web du forum « Career Expo ».",
            "Consulting technique et développement web et mobile au sein de la Junior Entreprise.",
            "Management et encadrement de l’équipe de la cellule.",
        ],
        tags: ["Consulting technique", "Management d’équipe", "Développement"],
        link: { label: "Voir la plateforme Career Expo", href: "https://uca.ma" },
    },
    {
        role: "Directeur Général",
        org: "Club IT Network",
        icon: Users,
        points: [
            "Leadership et gestion globale du club.",
            "Communication directe avec des experts du secteur IT.",
            "Programmation et organisation de séances de coaching et de workshops techniques.",
        ],
        tags: ["Leadership", "Coaching", "Workshops techniques"],
    },
];

const SKILLS = [
    {
        category: "Langages",
        icon: Code2,
        items: [
            { name: "Python", icon: Terminal },
            { name: "JavaScript", icon: Code2 },
            { name: "TypeScript", icon: Code2 },
            { name: "Java", icon: Coffee },
        ],
    },
    {
        category: "Frontend",
        icon: Atom,
        items: [
            { name: "React", icon: Atom },
            { name: "React Native", icon: Smartphone },
            { name: "Angular", icon: Layers },
        ],
    },
    {
        category: "Backend",
        icon: Server,
        items: [
            { name: "Spring Framework", icon: Server },
            { name: "Spring Boot", icon: Server },
        ],
    },
    {
        category: "Bases de données",
        icon: Database,
        items: [
            { name: "MySQL", icon: Database },
            { name: "PostgreSQL", icon: Database },
            { name: "SQLite", icon: Database },
            { name: "Oracle", icon: Database },
        ],
    },
    {
        category: "DevOps",
        icon: GitBranch,
        items: [
            { name: "Maven", icon: Package },
            { name: "Docker", icon: Package },
            { name: "Kubernetes", icon: Boxes },
            { name: "Git", icon: GitBranch },
            { name: "GitHub", icon: Code2 },
            { name: "GitHub Actions (CI/CD)", icon: Activity },
        ],
    },
    {
        category: "Cloud",
        icon: Cloud,
        items: [
            { name: "AWS (EC2, EKS, ECR, S3)", icon: Cloud },
            { name: "Microsoft Azure (IoT Hub, ADLS)", icon: Cloud },
        ],
    },
    {
        category: "Autres",
        icon: Wrench,
        items: [
            { name: "UML", icon: Layers },
            { name: "IntelliJ IDEA Ultimate", icon: Wrench },
            { name: "Visual Studio Code", icon: Code2 },
            { name: "Windows", icon: Globe },
            { name: "Ubuntu", icon: Terminal },
        ],
    },
];

const LANGUAGES = [
    { name: "Arabe", level: "Langue maternelle" },
    { name: "Français", level: "Courant" },
    { name: "Anglais", level: "Courant" },
];

const SOFT_SKILLS = [
    "Autonomie",
    "Rigueur",
    "Esprit d’équipe",
    "Résolution de problèmes",
    "Capacité d’adaptation",
];

const CERTIFICATIONS = [
    { name: "Linux — Ultimate Bootcamp for DevOps, SRE & Cloud Engineers", org: "Udemy" },
    { name: "Spring Boot / Spring AI", org: "Udemy" },
    { name: "IBM CI/CD Specialization", org: "Coursera" },
    { name: "Docker and Kubernetes : DevOps", org: "Udemy" },
];

const INTERNSHIPS = [
    {
        company: "Dial Technologies",
        group: "Groupe MedTech",
        kind: "Stage PFA",
        place: "Casablanca",
        period: "Juillet – Août 2026 (2 mois)",
        Logo: "dial",
        orientation: ["Développement web & mobile"],
        points: [
            "Conception et mise en production d’une solution mobile et cloud-native intelligente de génération de fiches produits pour les commerçants marocains.",
            "Développement de l’architecture microservices backend.",
            "Intégration d’analyses IA à partir de photos et de descriptions audio en dialecte marocain (Darija).",
        ],
        tech: ["Spring Boot", "React Native", "API OpenAI", "Docker", "Kubernetes", "AWS", "CI/CD"],
    },
    {
        company: "Groupe OCP",
        kind: "Stage d’Initiation",
        place: "Benguerir",
        period: "Juillet 2025 (1 mois)",
        Logo: "ocp",
        orientation: ["Data", "Automatisation", "Backend"],
        points: [
            "Découverte du milieu professionnel et des pratiques de gestion de projet au sein d’une équipe de développement agile.",
            "Participation active à la conception, au suivi et aux phases de tests d’une application web d’évaluation du taux de satisfaction clientèle du groupe OCP.",
        ],
        tech: ["Gestion de projet", "Méthode agile", "Application web", "Tests"],
    },
];

const PROJECTS = [
    {
        title: "Gestion des Réservations Hôtelières",
        period: "2024 · Projet académique",
        icon: Building2,
        description:
            "Plateforme complète pour la gestion d’hôtels, des chambres et des tarifs, avec une Landing Page publique et trois espaces dédiés.",
        points: [
            "Espace gérants pour la gestion des disponibilités et des tarifs.",
            "Espace clients pour la création et le suivi des réservations.",
            "Espace administrateur avec Dashboard centralisé et statistiques globales.",
        ],
        tech: ["Java FX", "Java SE 17", "PostgreSQL"],
        repo: null,
    },
    {
        title: "FIC — Freelance In Connect",
        period: "2025 – 2026 · Projet de fin de semestre",
        icon: Users,
        description:
            "Plateforme B2B de mise en relation découpée en 9 microservices autonomes (Database per Service).",
        points: [
            "Authentification et sécurité orchestrées via Keycloak et Spring Security (JWT).",
            "Flux centralisés via WSO2 API Manager, persistance polyglotte et paiement Stripe.",
        ],
        tech: ["Spring Boot 3", "React", "TypeScript", "WSO2 API Manager", "Keycloak", "PostgreSQL", "MongoDB", "Docker", "Stripe"],
        repo: null,
    },
    {
        title: "Okane Transfer",
        period: "2024 · Projet académique",
        icon: Wallet,
        description:
            "Application sécurisée de transfert d’argent multi-devises basée sur une architecture en couches.",
        points: [
            "Logique financière (calculs de frais, flux de caisse) et rapports d’audit.",
            "Sécurisation par jetons JWT (Access/Refresh), authentification OTP (JavaMail) et contrôle RBAC.",
        ],
        tech: ["Java 17", "Spring Boot", "Angular", "PostgreSQL", "Spring Security", "JWT", "Docker"],
        repo: null,
    },
    {
        title: "Smart City — Surveillance IoT",
        period: "2025 – 2026 · Projet Big Data & Cloud Computing",
        icon: Activity,
        description:
            "Écosystème de surveillance Big Data pour objets connectés basé sur une Lambda Architecture.",
        points: [
            "Ingestion et traitement temps réel via Azure IoT Hub, Apache Kafka et Spark Structured Streaming.",
            "Alert Engine multi-threadé (~7 s de latence) et stockage distribué Delta Lake sur Azure ADLS.",
        ],
        tech: ["Kafka", "Spark", "Delta Lake", "Azure ADLS", "InfluxDB", "Grafana", "Docker", "Python"],
        repo: null,
    },
];

/* ================================================================== */
/*  THÈMES                                                              */
/* ================================================================== */

const LIGHT = {
    mode: "light",
    page: "bg-white text-slate-800",
    glass: "bg-white/80 backdrop-blur-md border border-slate-200/50",
    solid: "bg-white",
    heading: "text-slate-900",
    body: "text-slate-600",
    muted: "text-slate-500",
    chip: "bg-slate-100 text-slate-700 border border-slate-200",
    chipHover: "hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300",
    chipActive: "bg-blue-600 text-white border border-blue-600",
    accentText: "text-blue-600",
    accentBg: "bg-blue-600 hover:bg-blue-700 text-white",
    accentSoft: "bg-blue-50 text-blue-700 border border-blue-200",
    accentOutline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
    accentBar: "bg-blue-600",
    navLink: "text-slate-600 hover:text-blue-600",
    navActive: "text-blue-600",
    iconBtn: "bg-slate-100 text-slate-700 hover:bg-slate-200",
    input:
        "bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:ring-blue-600",
    line: "bg-slate-200",
    footer: "bg-slate-50 text-slate-500",
    blobs: ["opacity-50 bg-blue-400/30", "opacity-50 bg-cyan-300/30", "opacity-50 bg-indigo-300/30"],
};

const DARK = {
    mode: "dark",
    page: "bg-slate-900 text-slate-100",
    glass: "bg-slate-900/60 backdrop-blur-md border border-slate-800/50",
    solid: "bg-slate-900",
    heading: "text-white",
    body: "text-slate-300",
    muted: "text-slate-400",
    chip: "bg-slate-800 text-slate-200 border border-slate-700",
    chipHover: "hover:bg-slate-700 hover:text-blue-300 hover:border-blue-500",
    chipActive: "bg-blue-500 text-white border border-blue-500",
    accentText: "text-blue-500",
    accentBg: "bg-blue-500 hover:bg-blue-400 text-white",
    accentSoft: "bg-slate-800 text-blue-300 border border-slate-700",
    accentOutline: "border border-blue-500 text-blue-400 hover:bg-slate-800",
    accentBar: "bg-blue-500",
    navLink: "text-slate-300 hover:text-blue-400",
    navActive: "text-blue-400",
    iconBtn: "bg-slate-800 text-slate-100 hover:bg-slate-700",
    input:
        "bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:ring-blue-500",
    line: "bg-slate-700",
    footer: "bg-slate-950 text-slate-400",
    blobs: ["opacity-50 bg-blue-500/30", "opacity-50 bg-cyan-400/30", "opacity-50 bg-indigo-500/30"],
};

/* ================================================================== */
/*  STYLES GLOBAUX (police, animations, bordures dégradées)             */
/* ================================================================== */

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700;800&display=swap');
html{scroll-behavior:smooth}
.pf-root{font-family:'Inter',ui-sans-serif,system-ui,-apple-system,'Segoe UI',sans-serif;-webkit-font-smoothing:antialiased;overflow-x:clip}
.pf-root button,.pf-root input,.pf-root textarea{font-family:inherit}
.pf-heading{font-family:'Space Grotesk','Inter',ui-sans-serif,system-ui,sans-serif}

@keyframes pf-float{0%,100%{transform:translate3d(0,0,0)}50%{transform:translate3d(0,-12px,0)}}
@keyframes pf-drift{0%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(50px,36px,0) scale(1.1)}100%{transform:translate3d(0,0,0) scale(1)}}
@keyframes pf-spin{to{transform:rotate(360deg)}}
@keyframes pf-fade-up{from{opacity:0;transform:translate3d(0,22px,0)}to{opacity:1;transform:translate3d(0,0,0)}}
@keyframes pf-ping{0%{transform:scale(1);opacity:.7}100%{transform:scale(2.4);opacity:0}}

.pf-float{animation:pf-float 6s ease-in-out infinite}
.pf-drift-a{animation:pf-drift 22s ease-in-out infinite}
.pf-drift-b{animation:pf-drift 28s ease-in-out infinite reverse}
.pf-drift-c{animation:pf-drift 34s ease-in-out infinite}
.pf-spin{animation:pf-spin 1s linear infinite}
.pf-in{animation:pf-fade-up .9s cubic-bezier(.2,.7,.2,1) both}
.pf-ping{animation:pf-ping 1.8s ease-out infinite}

.pf-ring{position:relative;overflow:hidden;border-radius:9999px}
.pf-ring-spin{position:absolute;inset:-50%;background:conic-gradient(from 0deg,#3b82f6,#22d3ee,#6366f1,#3b82f6);animation:pf-spin 5s linear infinite}

.pf-conic{position:relative;overflow:hidden}
.pf-conic-spin{position:absolute;inset:-150%;background:conic-gradient(from 0deg,transparent 0 58%,#3b82f6 78%,#22d3ee 90%,transparent 100%);animation:pf-spin 9s linear infinite}

.pf-gradient-text{background:linear-gradient(90deg,#3b82f6,#22d3ee);-webkit-background-clip:text;background-clip:text;color:transparent}

.pf-grid{background-image:linear-gradient(rgba(148,163,184,.10) 1px,transparent 1px),linear-gradient(90deg,rgba(148,163,184,.10) 1px,transparent 1px);background-size:44px 44px;-webkit-mask-image:radial-gradient(ellipse at 50% 30%,#000 25%,transparent 70%);mask-image:radial-gradient(ellipse at 50% 30%,#000 25%,transparent 70%)}

.pf-card{transition:transform .3s ease,border-color .3s ease,box-shadow .3s ease}
.pf-root[data-theme="dark"] .pf-card{box-shadow:inset 0 1px 0 rgba(255,255,255,.06),0 18px 40px -20px rgba(0,0,0,.6)}
.pf-root[data-theme="light"] .pf-card{box-shadow:0 18px 40px -22px rgba(15,23,42,.25)}
.pf-lift:hover{transform:translateY(-4px)}
.pf-root[data-theme="dark"] .pf-lift:hover{border-color:rgba(59,130,246,.55)}
.pf-root[data-theme="light"] .pf-lift:hover{border-color:rgba(37,99,235,.45)}

@media (prefers-reduced-motion:reduce){
  .pf-float,.pf-drift-a,.pf-drift-b,.pf-drift-c,.pf-ring-spin,.pf-conic-spin,.pf-in,.pf-ping{animation:none!important}
  html{scroll-behavior:auto}
}
`;

/* ================================================================== */
/*  LOGOS SVG (stylisés, intégrés dans le code)                         */
/* ================================================================== */

function OcpLogo({ size = 64 }) {
    return (
        <svg viewBox="0 0 64 64" width={size} height={size} role="img" aria-label="Logo stylisé OCP Group">
            <defs>
                <linearGradient id="pf-ocp-g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#22c55e" />
                    <stop offset="1" stopColor="#15803d" />
                </linearGradient>
            </defs>
            <rect width="64" height="64" rx="16" fill="url(#pf-ocp-g)" />
            <circle cx="32" cy="32" r="22" fill="none" stroke="#ffffff" strokeOpacity="0.22" strokeWidth="2" />
            <path d="M43 13c7 0 10 4 10 9-5 0-10-3-10-9z" fill="#bbf7d0" />
            <text
                x="32" y="38" textAnchor="middle" fontWeight="800" fontSize="19"
                fill="#ffffff" letterSpacing="-0.5"
            >
                OCP
            </text>
            <path d="M17 47h30" stroke="#bbf7d0" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
    );
}

function DialLogo({ size = 64 }) {
    const bars = [
        { x: 17, h: 10 },
        { x: 24.5, h: 20 },
        { x: 32, h: 28 },
        { x: 39.5, h: 18 },
        { x: 47, h: 9 },
    ];
    return (
        <svg viewBox="0 0 64 64" width={size} height={size} role="img" aria-label="Logo stylisé Dial Technologies">
            <defs>
                <linearGradient id="pf-dial-g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#2563eb" />
                    <stop offset="1" stopColor="#06b6d4" />
                </linearGradient>
            </defs>
            <rect width="64" height="64" rx="16" fill="url(#pf-dial-g)" />
            <circle cx="32" cy="32" r="25" fill="none" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="2" strokeDasharray="3 5" />
            {bars.map((b) => (
                <rect key={b.x} x={b.x - 2} y={32 - b.h / 2} width="4" height={b.h} rx="2" fill="#ffffff" />
            ))}
        </svg>
    );
}

const LOGOS = {
    ocp: ({ size }) => <img src={ocpLogoImg} width={size} height={size} alt="OCP" className="rounded-2xl object-cover" />,
    dial: ({ size }) => <img src={dialLogoImg} width={size} height={size} alt="Dial Technologies" className="rounded-2xl object-cover" />
};

/* ------------------ Logos réels des technologies (Simple Icons) ------------------ */

const TECH_SLUGS = {
    "Python": "python",
    "JavaScript": "javascript",
    "TypeScript": "typescript",
    "Java": "openjdk",
    "Java 17": "openjdk",
    "Java SE 17": "openjdk",
    "Java FX": "openjdk",
    "React": "react",
    "React Native": "react",
    "Angular": "angular",
    "Spring Framework": "spring",
    "Spring Boot": "springboot",
    "Spring Boot 3": "springboot",
    "Spring Security": "springsecurity",
    "MySQL": "mysql",
    "PostgreSQL": "postgresql",
    "SQLite": "sqlite",
    "Oracle": "oracle",
    "Maven": "apachemaven",
    "Docker": "docker",
    "Kubernetes": "kubernetes",
    "Git": "git",
    "GitHub": "github",
    "GitHub Actions (CI/CD)": "githubactions",
    "CI/CD": "githubactions",
    "AWS (EC2, EKS, ECR, S3)": "amazonaws",
    "AWS": "amazonaws",
    "Microsoft Azure (IoT Hub, ADLS)": "microsoftazure",
    "Azure ADLS": "microsoftazure",
    "IntelliJ IDEA Ultimate": "intellijidea",
    "Visual Studio Code": "visualstudiocode",
    "Windows": "windows",
    "Ubuntu": "ubuntu",
    "API OpenAI": "openai",
    "MongoDB": "mongodb",
    "Stripe": "stripe",
    "Keycloak": "keycloak",
    "WSO2 API Manager": "wso2",
    "Kafka": "apachekafka",
    "Spark": "apachespark",
    "Grafana": "grafana",
    "InfluxDB": "influxdb",
    "JWT": "jsonwebtokens",
};

function TechLogo({ name, size = 16 }) {
    const [failed, setFailed] = useState(false);
    const slug = TECH_SLUGS[name];
    const box = size + 10;
    return (
        <span
            className="inline-flex items-center justify-center rounded-md bg-white shrink-0"
            style={{ width: box, height: box, padding: 3 }}
        >
            {!slug || failed ? (
                <Code2 size={size - 2} style={{ color: "#1e293b" }} />
            ) : (
                <img
                    src={`https://cdn.simpleicons.org/${slug}`}
                    alt={name}
                    width={size}
                    height={size}
                    loading="lazy"
                    style={{ objectFit: "contain" }}
                    onError={() => setFailed(true)}
                />
            )}
        </span>
    );
}

function TechTag({ t, name }) {
    return (
        <span className={`inline-flex items-center gap-2 pl-1.5 pr-3 py-1.5 rounded-lg text-xs font-semibold ${t.chip}`}>
            <TechLogo name={name} size={14} />
            {name}
        </span>
    );
}

/* ================================================================== */
/*  COMPOSANTS                                                          */
/* ================================================================== */

function Section({ id, t, icon: Icon, title, intro = null, children }) {
    return (
        <section id={id} style={{ scrollMarginTop: 72 }} className="relative py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="mb-12 max-w-2xl">
                    <div className="flex items-center gap-3">
            <span className={`p-2.5 rounded-xl pf-card ${t.glass} ${t.accentText}`}>
              <Icon size={22} />
            </span>
                        <h2 className={`pf-heading text-3xl sm:text-4xl font-bold tracking-normal ${t.heading}`}>{title}</h2>
                    </div>
                    {intro && <p className={`mt-4 text-lg ${t.body}`}>{intro}</p>}
                </div>
                {children}
            </div>
        </section>
    );
}

function Tag({ t, children }) {
    return (
        <span className={`inline-block px-2.5 py-1 rounded-md text-xs font-medium ${t.chip}`}>{children}</span>
    );
}

function Bullets({ t, items, small = false }) {
    return (
        <ul className={`grid gap-2.5 ${small ? "text-sm" : ""} ${t.body}`}>
            {items.map((p) => (
                <li key={p} className="flex gap-2">
                    <ChevronRight size={small ? 16 : 18} className={`mt-0.5 shrink-0 ${t.accentText}`} />
                    <span>{p}</span>
                </li>
            ))}
        </ul>
    );
}

function Photo({ t }) {
    return (
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mx-auto">
            <div
                className="absolute rounded-full pf-drift-b"
                style={{
                    inset: -30,
                    background: "radial-gradient(circle, rgba(59,130,246,.45) 0%, rgba(34,211,238,.18) 45%, transparent 70%)",
                    filter: "blur(28px)",
                }}
            />
            <div className="pf-ring absolute inset-0" style={{ boxShadow: "0 0 70px rgba(59,130,246,.45)" }}>
                <div className="pf-ring-spin" />
            </div>
            <div className={`absolute rounded-full overflow-hidden ${t.solid}`} style={{ inset: 6 }}>
                <img
                    src={profilePic}
                    alt={`Portrait de ${PROFILE.name}`}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "center 20%" }}
                />
            </div>
        </div>
    );
}

/* ================================================================== */
/*  APPLICATION                                                         */
/* ================================================================== */

export default function Portfolio() {
    const [dark, setDark] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState("accueil");
    const [skillFilter, setSkillFilter] = useState("Tous");
    const [status, setStatus] = useState(null);

    const t = dark ? DARK : LIGHT;

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
            { rootMargin: "-40% 0px -55% 0px" }
        );
        NAV.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    const go = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        setMenuOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formEl = e.currentTarget;
        if (WEB3FORMS_KEY === "VOTRE_CLE_ACCES_WEB3FORMS") {
            setStatus("nokey");
            return;
        }
        setStatus("sending");
        try {
            const res = await fetch(WEB3FORMS_URL, {
                method: "POST",
                headers: { Accept: "application/json" },
                body: new FormData(formEl),
            });
            const data = await res.json();
            if (data.success) {
                setStatus("ok");
                formEl.reset();
            } else {
                setStatus("error");
            }
        } catch (err) {
            setStatus("error");
        }
    };

    const visibleSkills =
        skillFilter === "Tous" ? SKILLS : SKILLS.filter((s) => s.category === skillFilter);

    const navClick = (id) => (e) => {
        e.preventDefault();
        go(id);
    };

    const ctaGlow = { boxShadow: "0 12px 40px -10px rgba(59,130,246,.7)" };

    return (
        <div
            data-theme={t.mode}
            className={`pf-root relative min-h-screen overflow-x-clip transition-colors duration-300 ${t.page}`}
        >
            <style>{CSS}</style>

            {/* ------------------- Glow blobs d'arrière-plan ------------------- */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div
                    className={`absolute rounded-full filter blur-3xl pf-drift-a ${t.blobs[0]}`}
                    style={{ width: 560, height: 560, top: "-8%", left: "-8%" }}
                />
                <div
                    className={`absolute rounded-full filter blur-3xl pf-drift-b ${t.blobs[1]}`}
                    style={{ width: 480, height: 480, top: "30%", right: "-10%" }}
                />
                <div
                    className={`absolute rounded-full filter blur-3xl pf-drift-c ${t.blobs[2]}`}
                    style={{ width: 520, height: 520, bottom: "-12%", left: "25%" }}
                />
            </div>

            <div className="relative">
                {/* ============================ NAVBAR ============================ */}
                <header className={`sticky top-0 z-50 ${t.glass} border-t-0 border-x-0`}>
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
                        <a
                            href="#accueil"
                            onClick={navClick("accueil")}
                            aria-label="Retour à l'accueil"
                            className={`flex items-center gap-4 font-bold ${t.heading}`}
                        >
              <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0"
                  style={{ background: "linear-gradient(135deg,#2563eb,#22d3ee)", boxShadow: "0 6px 20px -6px rgba(59,130,246,.8)" }}
              >
                <Terminal size={19} />
              </span>
                            <span className="pf-heading hidden sm:inline text-xs md:text-sm font-bold uppercase tracking-wider whitespace-nowrap">
                {PROFILE.name}
              </span>
                        </a>

                        <nav className="hidden xl:flex items-center gap-6" aria-label="Navigation principale">
                            {NAV.map((n) => (
                                <a
                                    key={n.id}
                                    href={`#${n.id}`}
                                    onClick={navClick(n.id)}
                                    className={`text-sm font-medium whitespace-nowrap transition-colors ${active === n.id ? t.navActive : t.navLink}`}
                                >
                                    {n.label}
                                </a>
                            ))}
                        </nav>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className={`xl:hidden p-2.5 rounded-xl transition-colors ${t.iconBtn}`}
                                aria-label="Ouvrir le menu"
                                aria-expanded={menuOpen}
                            >
                                {menuOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>

                            <button
                                onClick={() => setDark(!dark)}
                                className={`p-2.5 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${t.iconBtn}`}
                                aria-label={dark ? "Passer en mode clair" : "Passer en mode sombre"}
                                title={dark ? "Mode clair" : "Mode sombre"}
                            >
                                {dark ? <Sun size={20} /> : <Moon size={20} />}
                            </button>

                            <a
                                href={PROFILE.cv}
                                download={PROFILE.cvFileName}
                                aria-label="Télécharger mon CV"
                                style={ctaGlow}
                                className={`inline-flex items-center gap-2 px-3.5 sm:px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${t.accentBg}`}
                            >
                                <Download size={18} />
                                <span className="hidden sm:inline">Télécharger mon CV</span>
                            </a>
                        </div>
                    </div>

                    {menuOpen && (
                        <nav className="xl:hidden px-4 pb-4 pt-1 grid gap-1" aria-label="Menu mobile">
                            {NAV.map((n) => (
                                <a
                                    key={n.id}
                                    href={`#${n.id}`}
                                    onClick={navClick(n.id)}
                                    className={`px-3 py-2.5 rounded-lg text-sm font-medium ${active === n.id ? t.accentSoft : t.navLink}`}
                                >
                                    {n.label}
                                </a>
                            ))}
                        </nav>
                    )}
                </header>

                {/* ============================ ACCUEIL =========================== */}
                <section id="accueil" style={{ scrollMarginTop: 72 }} className="relative pt-16 pb-24 lg:pt-24 lg:pb-32">
                    <div className="pf-grid absolute inset-0 pointer-events-none" aria-hidden="true" />
                    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-5 pf-in" style={{ animationDelay: ".05s" }}>
                            <Photo t={t} />
                        </div>

                        <div className="lg:col-span-7">
                            <h1
                                className={`pf-heading pf-in text-4xl sm:text-5xl lg:text-6xl font-bold tracking-normal leading-tight ${t.heading}`}
                                style={{ animationDelay: ".15s" }}
                            >
                                {PROFILE.name}
                            </h1>

                            <p
                                className="pf-heading pf-in pf-gradient-text mt-3 text-xl sm:text-2xl lg:text-3xl font-semibold tracking-normal"
                                style={{ animationDelay: ".25s" }}
                            >
                                {PROFILE.title}
                            </p>
                        </div>
                    </div>
                </section>

                {/* ============================ À PROPOS ========================== */}
                <Section id="apropos" t={t} icon={User} title="À propos">
                    <div className="grid lg:grid-cols-3 gap-8 items-stretch">
                        <div className={`lg:col-span-2 p-8 rounded-3xl pf-card ${t.glass}`}>
                            <p className={`text-lg leading-relaxed ${t.body}`}>{ABOUT}</p>
                        </div>
                        <div className="grid gap-4">
                            {[
                                { icon: Server, label: "Développement Backend" },
                                { icon: GitBranch, label: "DevOps & CI/CD" },
                                { icon: Cloud, label: "Cloud & AWS" },
                            ].map(({ icon: Icon, label }) => (
                                <div key={label} className={`flex items-center gap-4 p-5 rounded-2xl pf-card ${t.glass}`}>
                  <span className={`p-2.5 rounded-xl ${t.accentSoft}`}>
                    <Icon size={20} />
                  </span>
                                    <span className={`font-semibold ${t.heading}`}>{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* ============================ FORMATION ========================= */}
                <Section id="formation" t={t} icon={GraduationCap} title="Formation">
                    <div className="relative max-w-3xl">
                        <div className={`absolute left-5 top-2 bottom-2 w-0.5 ${t.line}`} />
                        <div className="grid gap-8">
                            {EDUCATION.map((e, i) => (
                                <div key={i} className="relative pl-16">
                  <span
                      className={`absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center ${t.accentBg}`}
                      style={ctaGlow}
                  >
                    <GraduationCap size={18} />
                  </span>
                                    <div className={`p-5 rounded-2xl pf-card pf-lift ${t.glass}`}>
                                        <div className="flex flex-wrap items-center justify-between gap-2">
                                            <h3 className={`pf-heading text-lg font-bold ${t.heading}`}>{e.degree}</h3>
                                            <span className={`inline-flex items-center gap-1.5 text-sm font-medium ${t.accentText}`}>
                        <Calendar size={14} />
                                                {e.period}
                      </span>
                                        </div>
                                        <p className={`mt-1 ${t.body}`}>{e.school}</p>
                                        {e.note && (
                                            <span className={`inline-block mt-3 px-2.5 py-1 rounded-md text-xs font-semibold ${t.accentSoft}`}>
                        {e.note}
                      </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* ================== EXPÉRIENCE ACADÉMIQUE & ASSOCIATIVE ========= */}
                <Section
                    id="experience"
                    t={t}
                    icon={Users}
                    title="Expérience académique & associative"
                    intro="Deux engagements où je mêle technique, gestion d’équipe et animation de communauté."
                >
                    <div className="grid md:grid-cols-2 gap-6">
                        {ASSOCIATIVE.map((x) => {
                            const Icon = x.icon;
                            return (
                                <article key={x.role} className={`p-7 rounded-3xl flex flex-col pf-card pf-lift ${t.glass}`}>
                                    <div className="flex items-start gap-4">
                    <span className={`p-3 rounded-xl ${t.accentBg}`} style={ctaGlow}>
                      <Icon size={24} />
                    </span>
                                        <div>
                                            <h3 className={`pf-heading text-xl font-bold leading-snug ${t.heading}`}>{x.role}</h3>
                                            <p className={`mt-1 font-medium ${t.accentText}`}>{x.org}</p>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <Bullets t={t} items={x.points} />
                                    </div>
                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {x.tags.map((tag) => (
                                            <Tag key={tag} t={t}>{tag}</Tag>
                                        ))}
                                    </div>
                                    {x.link && (
                                        <a
                                            href={x.link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold hover:underline ${t.accentText}`}
                                        >
                                            <ExternalLink size={16} />
                                            {x.link.label}
                                        </a>
                                    )}
                                </article>
                            );
                        })}
                    </div>
                </Section>

                {/* ============================ COMPÉTENCES ======================= */}
                <Section id="competences" t={t} icon={Wrench} title="Compétences & Langues">
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <div className="flex flex-wrap gap-2 mb-6">
                                {["Tous", ...SKILLS.map((s) => s.category)].map((c) => (
                                    <button
                                        key={c}
                                        onClick={() => setSkillFilter(c)}
                                        className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors ${
                                            skillFilter === c ? t.chipActive : `${t.chip}${t.chipHover}`
                                        }`}
                                    >
                                        {c}
                                    </button>
                                ))}
                            </div>

                            <div className="grid gap-4">
                                {visibleSkills.map((group) => {
                                    const GroupIcon = group.icon;
                                    return (
                                        <div key={group.category} className={`p-5 rounded-2xl pf-card ${t.glass}`}>
                                            <h3 className={`flex items-center gap-2 font-bold mb-3 ${t.heading}`}>
                                                <GroupIcon size={18} className={t.accentText} />
                                                {group.category}
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {group.items.map((s) => (
                                                    <span
                                                        key={s.name}
                                                        className={`inline-flex items-center gap-2 pl-1.5 pr-3 py-1.5 rounded-lg text-sm font-medium cursor-default transition transform hover:-translate-y-0.5 ${t.chip} ${t.chipHover}`}
                                                    >
                                                        <TechLogo name={s.name} size={16} />
                                                        {s.name}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="grid gap-4 content-start">
                            <div className={`p-5 rounded-2xl pf-card ${t.glass}`}>
                                <h3 className={`flex items-center gap-2 font-bold mb-4 ${t.heading}`}>
                                    <Languages size={18} className={t.accentText} />
                                    Langues
                                </h3>
                                <ul className="grid gap-3">
                                    {LANGUAGES.map((l) => (
                                        <li key={l.name} className="flex items-center justify-between">
                                            <span className={`font-medium ${t.heading}`}>{l.name}</span>
                                            <span className={`text-sm px-2.5 py-1 rounded-md ${t.accentSoft}`}>{l.level}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className={`p-5 rounded-2xl pf-card ${t.glass}`}>
                                <h3 className={`flex items-center gap-2 font-bold mb-4 ${t.heading}`}>
                                    <Heart size={18} className={t.accentText} />
                                    Compétences comportementales
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {SOFT_SKILLS.map((s) => (
                                        <Tag key={s} t={t}>{s}</Tag>
                                    ))}
                                </div>
                            </div>

                            <div className={`p-5 rounded-2xl pf-card ${t.glass}`}>
                                <h3 className={`flex items-center gap-2 font-bold mb-4 ${t.heading}`}>
                                    <Award size={18} className={t.accentText} />
                                    Certifications
                                </h3>
                                <ul className="grid gap-3">
                                    {CERTIFICATIONS.map((c) => (
                                        <li key={c.name} className="flex gap-2 text-sm">
                                            <ShieldCheck size={16} className={`mt-0.5 shrink-0 ${t.accentText}`} />
                                            <span className={t.body}>
                        {c.name} <span className={t.muted}>({c.org})</span>
                      </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* ======================= STAGES (avant les projets) ============= */}
                <Section
                    id="stages"
                    t={t}
                    icon={Briefcase}
                    title="Stages"
                    intro="Expériences professionnelles : du backend et de la donnée chez OCP au développement web et mobile chez Dial Technologies."
                >
                    <div className="grid lg:grid-cols-2 gap-6">
                        {INTERNSHIPS.map((s) => {
                            const Logo = LOGOS[s.Logo];
                            return (
                                <article key={s.company} className={`p-7 sm:p-8 rounded-3xl flex flex-col pf-card pf-lift ${t.glass}`}>
                                    <div className="flex items-start gap-5">
                                        <div
                                            className={`shrink-0 rounded-2xl p-1.5 ${t.glass}`}
                                            style={{ boxShadow: "0 12px 30px -10px rgba(59,130,246,.55)" }}
                                        >
                                            <Logo size={60} />
                                        </div>
                                        <div>
                                            <h3 className={`pf-heading text-2xl font-bold ${t.heading}`}>{s.company}</h3>
                                            <p className={`mt-1 font-medium ${t.accentText}`}>
                                                {s.kind}
                                                {s.group ? ` — ${s.group}` : ""}
                                            </p>
                                        </div>
                                    </div>

                                    <div className={`mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm ${t.muted}`}>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={14} />
                        {s.period}
                    </span>
                                        <span className="inline-flex items-center gap-1.5">
                      <MapPin size={14} />
                                            {s.place}
                    </span>
                                    </div>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {s.orientation.map((o) => (
                                            <span key={o} className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${t.accentSoft}`}>
                        <Sparkles size={12} />
                                                {o}
                      </span>
                                        ))}
                                    </div>

                                    <div className="mt-6">
                                        <Bullets t={t} items={s.points} />
                                    </div>

                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {s.tech.map((x) => (
                                            <TechTag key={x} t={t} name={x} />
                                        ))}
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </Section>

                {/* ============================ PROJETS =========================== */}
                <Section
                    id="projets"
                    t={t}
                    icon={Rocket}
                    title="Projets"
                    intro="Tous mes projets, académiques et personnels, présentés sur un pied d'égalité."
                >
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {PROJECTS.map((p) => {
                            const Icon = p.icon;
                            return (
                                <article key={p.title} className={`p-6 rounded-3xl flex flex-col pf-card pf-lift ${t.glass}`}>
                  <span className={`self-start p-3 rounded-xl ${t.accentBg}`} style={ctaGlow}>
                    <Icon size={22} />
                  </span>
                                    <h3 className={`pf-heading mt-5 text-xl font-bold ${t.heading}`}>{p.title}</h3>
                                    <p className={`mt-1 text-sm ${t.muted}`}>{p.period}</p>
                                    <p className={`mt-3 leading-relaxed ${t.body}`}>{p.description}</p>
                                    <div className="mt-4">
                                        <Bullets t={t} items={p.points} small />
                                    </div>
                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {p.tech.map((x) => (
                                            <TechTag key={x} t={t} name={x} />
                                        ))}
                                    </div>
                                    {p.repo && (
                                        <a
                                            href={p.repo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`mt-5 inline-flex items-center gap-2 self-start text-sm font-semibold hover:underline ${t.accentText}`}
                                        >
                                            <Code2 size={16} />
                                            Code source
                                        </a>
                                    )}
                                </article>
                            );
                        })}
                    </div>
                </Section>

                {/* ============================ CONTACT =========================== */}
                <Section
                    id="contact"
                    t={t}
                    icon={MessageSquare}
                    title="Contact"
                    intro="Un stage PFE, une question ou un projet ? Écris-moi, je réponds rapidement."
                >
                    <div className="grid lg:grid-cols-5 gap-8">
                        <div className="lg:col-span-2 grid gap-4 content-start">
                            <a
                                href={`mailto:${PROFILE.email}`}
                                className={`flex items-center gap-4 p-4 rounded-2xl pf-card pf-lift ${t.glass}`}
                            >
                <span className={`p-3 rounded-xl ${t.accentSoft}`}>
                  <Mail size={20} />
                </span>
                                <span className={`break-all font-medium ${t.heading}`}>{PROFILE.email}</span>
                            </a>
                            <div className={`flex items-center gap-4 p-4 rounded-2xl pf-card ${t.glass}`}>
                <span className={`p-3 rounded-xl ${t.accentSoft}`}>
                  <MapPin size={20} />
                </span>
                                <span className={`font-medium ${t.heading}`}>{PROFILE.location}</span>
                            </div>
                            <div className="flex gap-3">
                                <a
                                    href={PROFILE.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex-1 inline-flex items-center justify-center gap-2 p-3.5 rounded-2xl font-medium transition-colors ${t.iconBtn}`}
                                >
                                    <Code2 size={18} /> GitHub
                                </a>
                                <a
                                    href={PROFILE.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex-1 inline-flex items-center justify-center gap-2 p-3.5 rounded-2xl font-medium transition-colors ${t.iconBtn}`}
                                >
                                    <Users size={18} /> LinkedIn
                                </a>
                            </div>
                        </div>

                        <form
                            action={WEB3FORMS_URL}
                            method="POST"
                            onSubmit={handleSubmit}
                            className={`lg:col-span-3 p-6 sm:p-8 rounded-3xl grid gap-5 pf-card ${t.glass}`}
                        >
                            <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
                            <input type="hidden" name="subject" value="Nouveau message depuis mon portfolio" />
                            <input type="hidden" name="from_name" value="Portfolio — Mohamed Walid Kharmoudi" />
                            <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />

                            <div>
                                <label htmlFor="c-name" className={`block mb-1.5 text-sm font-medium ${t.heading}`}>Nom</label>
                                <input
                                    id="c-name"
                                    name="name"
                                    type="text"
                                    required
                                    placeholder="Ton nom complet"
                                    className={`w-full px-4 py-3 rounded-xl outline-none focus:ring-1 ${t.input}`}
                                />
                            </div>
                            <div>
                                <label htmlFor="c-email" className={`block mb-1.5 text-sm font-medium ${t.heading}`}>Email</label>
                                <input
                                    id="c-email"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="ton.email@exemple.com"
                                    className={`w-full px-4 py-3 rounded-xl outline-none focus:ring-1 ${t.input}`}
                                />
                            </div>
                            <div>
                                <label htmlFor="c-msg" className={`block mb-1.5 text-sm font-medium ${t.heading}`}>Message</label>
                                <textarea
                                    id="c-msg"
                                    name="message"
                                    rows={5}
                                    required
                                    placeholder="Écris ton message ici…"
                                    className={`w-full px-4 py-3 rounded-xl outline-none focus:ring-1 resize-none ${t.input}`}
                                />
                            </div>

                            <div className="flex flex-wrap items-center gap-4">
                                <button
                                    type="submit"
                                    disabled={status === "sending"}
                                    style={ctaGlow}
                                    className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-colors ${t.accentBg}`}
                                >
                                    {status === "sending" ? <Loader2 size={18} className="pf-spin" /> : <Send size={18} />}
                                    {status === "sending" ? "Envoi en cours…" : "Envoyer le message"}
                                </button>
                                {status === "ok" && (
                                    <span className="text-sm font-medium" style={{ color: "#10b981" }}>
                    Message envoyé, merci ! Je te réponds très vite.
                  </span>
                                )}
                                {status === "error" && (
                                    <span className="text-sm font-medium" style={{ color: "#ef4444" }}>
                    L’envoi a échoué. Réessaie ou écris-moi directement par e-mail.
                  </span>
                                )}
                                {status === "nokey" && (
                                    <span className="text-sm font-medium" style={{ color: "#f59e0b" }}>
                    Ajoute ta clé Web3Forms dans WEB3FORMS_KEY pour activer l’envoi.
                  </span>
                                )}
                            </div>
                        </form>
                    </div>
                </Section>

                {/* ============================ FOOTER ============================ */}
                <footer className={`${t.footer} border-t ${dark ? "border-slate-800" : "border-slate-200"}`}>
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid gap-6 md:grid-cols-3 items-center">
                        <div>
                            <p className={`font-bold text-lg ${t.heading}`}>{PROFILE.name}</p>
                            <p className="text-sm mt-1">{PROFILE.title}</p>
                        </div>
                        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm md:justify-center" aria-label="Pied de page">
                            {NAV.map((n) => (
                                <a key={n.id} href={`#${n.id}`} onClick={navClick(n.id)} className={`transition-colors ${t.navLink}`}>
                                    {n.label}
                                </a>
                            ))}
                        </nav>
                        <div className="flex gap-3 md:justify-end">
                            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={`p-2.5 rounded-xl transition-colors ${t.iconBtn}`}>
                                <Code2 size={18} />
                            </a>
                            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`p-2.5 rounded-xl transition-colors ${t.iconBtn}`}>
                                <Users size={18} />
                            </a>
                            <a href={`mailto:${PROFILE.email}`} aria-label="E-mail" className={`p-2.5 rounded-xl transition-colors ${t.iconBtn}`}>
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>
                    <div className={`border-t py-4 text-center text-xs ${dark ? "border-slate-800" : "border-slate-200"}`}>
                        © {new Date().getFullYear()} {PROFILE.name}. Conçu avec React et Tailwind CSS.
                    </div>
                </footer>
            </div>
        </div>
    );
}