import React, { useEffect, useRef, useState } from 'react';
import profilePhoto from './assets/profile.png';
import dialLogo from './assets/dialtechnologies.jpg';
import ocpLogo from './assets/ocp.png';
import './index.css';

const profile = {
    name: 'Mohamed Walid Kharmoudi',
    title: 'Software Engineer et DevOps/Cloud Enthusiast',
    description: 'Élève-ingénieur en dernière année de génie informatique à l’ENSA Marrakech, je recherche un stage de fin d’études (PFE) de 6 mois en Full Stack, DevOps et Cloud. Mes stages et projets académiques m’ont permis d’acquérir une expérience pratique dans la conception et le développement d’applications d’entreprise et d’architectures microservices, ainsi que dans l’automatisation des pipelines CI/CD et le déploiement d’applications sur le cloud.',
    location: 'Casablanca, Maroc',
    cv: import.meta.env.BASE_URL + 'CV_Mohamed_Walid_Kharmoudi.pdf',
};

const contact = [
    ['Email', 'medwalidkh7@gmail.com', 'mailto:medwalidkh7@gmail.com'],
    ['Téléphone', '+212 601887069', 'tel:+212601887069'],
    ['LinkedIn', 'linkedin.com/in/medwalidkh', 'https://www.linkedin.com/in/medwalidkh'],
    ['GitHub', 'github.com/medwalidkhgit', 'https://github.com/medwalidkhgit'],
    ['Portfolio', 'medwalidkh.vercel.app', 'https://medwalidkh.vercel.app'],
];

const navigation = [
    ['profil', 'Profil'],
    ['formation', 'Formation'],
    ['stages', 'Stages'],
    ['projets', 'Projets'],
    ['competences', 'Compétences Techniques'],
    ['soft-skills-langues', 'Soft Skills & Langues'],
    ['contact', 'Contact'],
];

const education = [
    ['Cycle d’ingénieur en génie informatique – ENSA Marrakech', '2024 – 2027 (Diplôme prévu)'],
    ['Cycle préparatoire scientifique et technique – ENSA Marrakech', '2022 – 2024'],
];

const internships = [
    {
        title: 'Stage PFA – Dial Technologies · Casablanca',
        logo: dialLogo,
        date: 'Juillet – Août 2026 (2 mois)',
        stack: 'Java 17 · Spring Boot · Spring Security · Spring Cloud Gateway · React Native · PostgreSQL · RabbitMQ · Redis · Docker · GitHub Actions · AWS (EKS, ECR) · JUnit 5/Mockito',
        bullets: [
            'Conception et développement d’OpenShelf, une application mobile cloud-native générant automatiquement des fiches produits à partir d’images et de descriptions vocales en dialecte marocain.',
            'Développement d’une architecture backend en microservices et d’une application mobile, intégrant des API REST sécurisées, une communication asynchrone et un pipeline IA de transcription vocale et de génération automatisée de fiches produits.',
            'Déploiement de la solution sur AWS, avec conteneurisation, orchestration des services, automatisation des pipelines CI/CD et mise en place de tests unitaires et d’intégration.',
        ],
    },
    {
        title: 'Stage de Découverte – Groupe OCP · Benguérir',
        logo: ocpLogo,
        date: 'Juillet 2025 (1 mois)',
        stack: 'HTML5 · CSS3 · Bootstrap · JavaScript · PHP · MySQL · UML',
        bullets: [
            'Immersion au sein du département informatique d’OCP, avec découverte de l’organisation des équipes, des méthodes de développement et de la gestion de projets IT.',
            'Conception et développement d’une application web Full Stack d’évaluation de la satisfaction client, incluant l’analyse des besoins, la modélisation UML, la collecte des avis, la visualisation statistique et les tests fonctionnels.',
        ],
    },
];

const projects = [
    {
        title: 'FIC – Freelance In Connect (Plateforme B2B de sous-traitance informatique)',
        stack: 'Java 17 · Spring Boot · Spring Security · React · TypeScript · PostgreSQL · MongoDB · Keycloak · WSO2 API Manager · WebSockets · Stripe · Docker · JUnit 5/Mockito',
        bullets: [
            'Développement d’une plateforme B2B Full Stack mettant en relation ESN et freelances, avec gestion des missions et candidatures, messagerie en temps réel et paiements en ligne.',
            'Conception d’une architecture microservices sécurisée intégrant la gestion centralisée des identités et des API, le contrôle d’accès, les tests unitaires et la conteneurisation.',
        ],
    },
    {
        title: 'Okane Transfer (Plateforme de transfert d’argent multi-devises)',
        stack: 'Java 17 · Spring Framework · MVC · Spring Data JPA · Angular · PostgreSQL · Spring Security · JWT · Microsoft Azure',
        bullets: [
            'Développement d’une plateforme Full Stack de transfert d’argent multi-devises, intégrant la gestion des agences, le calcul des frais et des taux de change, ainsi que le suivi des transactions.',
            'Sécurisation des API REST avec authentification JWT, vérification par OTP et contrôle d’accès basé sur les rôles (RBAC) pour quatre profils utilisateurs.',
            'Déploiement de l’application sur Microsoft Azure, avec configuration de l’environnement cloud et mise en production des services backend, frontend et de la base de données.',
        ],
    },
    {
        title: 'Smart City',
        area: 'Data & Cloud',
        year: '2025–2026',
        description: 'Chaîne de traitement de données IoT pour surveiller des équipements et déclencher des alertes.',
        details: 'Azure IoT Hub et Kafka assurent l’ingestion. Spark Structured Streaming traite les flux et Delta Lake sur Azure ADLS conserve les données.',
        stack: 'Azure IoT Hub · Kafka · Spark · Delta Lake',
    },
];

const skills = [
    ['Langages', 'C/C++, Java, TypeScript, JavaScript, Python'],
    ['Backend et API', 'Spring Boot, Spring Security, Spring Data JPA, API REST, Microservices, API Gateway'],
    ['Frontend', 'HTML5, CSS3, Bootstrap, Tailwind CSS, React, Angular'],
    ['Bases de données', 'PostgreSQL, MySQL, MongoDB, Oracle, Redis'],
    ['DevOps et Cloud', 'Git, GitHub, Nginx, Docker, Kubernetes, GitHub Actions, CI/CD, AWS'],
    ['Tests, messagerie et environnements', 'JUnit 5, Mockito, Apache Kafka, RabbitMQ, Linux, Windows'],
    ['Conception et méthodologies', 'UML, MERISE, Agile/Scrum'],
];

const peopleSkills = [
    ['Soft Skills', ['Esprit analytique', 'Résolution de problèmes', 'Rigueur', 'Autonomie', 'Travail en équipe', 'Adaptabilité']],
    ['Langues', ['Arabe (langue maternelle)', 'Français (courant)', 'Anglais (courant)']],
];

const iconPaths = {
    download: 'M12 3v12m-4-4 4 4 4-4M5 17v3h14v-3',
    moon: 'M20.5 14a8.5 8.5 0 0 1-10.5-10.5A8.5 8.5 0 1 0 20.5 14Z',
    sun: 'M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5',
    menu: 'M4 8h16M4 16h16',
    close: 'm6 6 12 12M18 6 6 18',
};

function Icon({ name }) {
    return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {name === 'sun' && <circle cx="12" cy="12" r="4" />}
            <path d={iconPaths[name]} />
        </svg>
    );
}

function useActiveSection() {
    const [active, setActive] = useState(navigation[0][0]);

    useEffect(() => {
        const sections = navigation.map(([id]) => document.getElementById(id));
        const header = document.querySelector('.site-header');
        let frame = 0;

        function update() {
            frame = 0;
            const height = document.documentElement.clientHeight;
            const pageBottom = window.scrollY + height >= document.documentElement.scrollHeight - 2;
            const line = (header?.getBoundingClientRect().bottom ?? 0) + 24;
            let current = sections[0];

            for (const section of sections) {
                if (section.getBoundingClientRect().top > line) break;
                current = section;
            }

            setActive(pageBottom ? sections.at(-1).id : current.id);
        }

        function queueUpdate() {
            if (!frame) frame = window.requestAnimationFrame(update);
        }

        const resize = new ResizeObserver(queueUpdate);
        resize.observe(document.querySelector('main'));
        window.addEventListener('scroll', queueUpdate, { passive: true });
        window.addEventListener('resize', queueUpdate);
        window.addEventListener('hashchange', queueUpdate);
        queueUpdate();

        return () => {
            resize.disconnect();
            window.removeEventListener('scroll', queueUpdate);
            window.removeEventListener('resize', queueUpdate);
            window.removeEventListener('hashchange', queueUpdate);
            window.cancelAnimationFrame(frame);
        };
    }, []);

    return active;
}

function Header({ dark, toggleTheme }) {
    const active = useActiveSection();
    const [open, setOpen] = useState(false);
    const menuButton = useRef(null);
    const nav = useRef(null);

    useEffect(() => {
        if (open) {
            const activeLink = nav.current.querySelector('[aria-current]');
            (activeLink ?? nav.current.querySelector('a'))?.focus();
        }
    }, [open]);

    function handleKey(event) {
        if (event.key === 'Escape' && open) {
            setOpen(false);
            menuButton.current.focus();
        }
    }

    return (
        <header className="site-header" onKeyDown={handleKey}>
            <div className="layout header-inner">
                <a className="brand" href="#profil" aria-label="MWK — Profil" onClick={() => setOpen(false)}>MWK</a>
                <nav ref={nav} id="main-nav" className={open ? 'nav is-open' : 'nav'} aria-label="Navigation principale">
                    {navigation.map(([id, title]) => (
                        <a key={id} href={'#' + id} aria-current={active === id ? 'location' : undefined} onClick={() => setOpen(false)}>{title}</a>
                    ))}
                </nav>
                <div className="header-actions">
                    <button className="icon-button" type="button" onClick={toggleTheme} aria-label={dark ? 'Activer le mode clair' : 'Activer le mode sombre'}>
                        <Icon name={dark ? 'sun' : 'moon'} />
                    </button>
                    <button ref={menuButton} className="icon-button menu-toggle" type="button" aria-controls="main-nav" aria-expanded={open} aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'} onClick={() => setOpen((value) => !value)}>
                        <Icon name={open ? 'close' : 'menu'} />
                    </button>
                </div>
            </div>
        </header>
    );
}

function Profile() {
    const [portraitFailed, setPortraitFailed] = useState(false);

    return (
        <section id="profil" className={portraitFailed ? 'layout hero hero-text-only' : 'layout hero'} aria-labelledby="profile-title" tabIndex={-1}>
            <div>
                <h1 id="profile-title">Mohamed Walid <span>Kharmoudi</span></h1>
                <p className="profile-role">{profile.title}</p>
                <p className="profile-description">{profile.description}</p>
                <div className="hero-actions">
                    <a className="button primary" href="#projets">Voir mes projets</a>
                    <a className="button secondary" href={profile.cv} download><Icon name="download" /> Télécharger le CV</a>
                </div>
            </div>
            {!portraitFailed && (
                <figure className="portrait">
                    <img src={profilePhoto} alt={'Portrait de ' + profile.name} width="870" height="1120" fetchPriority="high" onError={() => setPortraitFailed(true)} />
                    <figcaption>{profile.location}</figcaption>
                </figure>
            )}
        </section>
    );
}

function Section({ id, title, children }) {
    const heading = id + '-title';
    return (
        <section id={id} className="layout section" aria-labelledby={heading} tabIndex={-1}>
            <h2 id={heading}>{title}</h2>
            {children}
        </section>
    );
}

function WorkEntry({ entry }) {
    return (
        <article className="entry">
            <div className="entry-heading">
                {entry.logo && <img className="stage-logo" src={entry.logo} alt="" width="72" height="48" loading="lazy" />}
                <div>
                    {entry.date && <p className="date">{entry.date}</p>}
                    {entry.area && <p className="date">{entry.area} · {entry.year}</p>}
                    <h3>{entry.title}</h3>
                </div>
            </div>
            {entry.bullets ? (
                <ul className="work-points">{entry.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
            ) : (
                <div className="work-description"><p>{entry.description}</p><p>{entry.details}</p></div>
            )}
            <p className="technology"><strong>Technologies</strong><span>{entry.stack}</span></p>
        </article>
    );
}

function initialTheme() {
    try { return localStorage.getItem('mwk-portfolio-theme') !== 'light'; }
    catch { return true; }
}

export default function App() {
    const [dark, setDark] = useState(initialTheme);

    useEffect(() => {
        const theme = dark ? 'dark' : 'light';
        document.documentElement.dataset.theme = theme;
        document.documentElement.lang = 'fr';
        document.title = profile.name + ' — ' + profile.title;
        try { localStorage.setItem('mwk-portfolio-theme', theme); }
        catch { /* The selected theme remains available for this visit. */ }
    }, [dark]);

    return (
        <>
            <a className="skip-link" href="#profil">Aller au contenu</a>
            <Header dark={dark} toggleTheme={() => setDark((value) => !value)} />
            <main>
                <Profile />
                <Section id="formation" title="Formation">
                    <div className="education-list">
                        {education.map(([degree, date]) => (
                            <article className="education-entry" key={degree}><h3>{degree}</h3><p className="date">{date}</p></article>
                        ))}
                    </div>
                </Section>
                <Section id="stages" title="Stages">
                    <div className="entry-list">{internships.map((entry) => <WorkEntry key={entry.title} entry={entry} />)}</div>
                </Section>
                <Section id="projets" title="Projets">
                    <div className="entry-list">{projects.map((entry) => <WorkEntry key={entry.title} entry={entry} />)}</div>
                </Section>
                <Section id="competences" title="Compétences Techniques">
                    <dl className="skill-list">
                        {skills.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
                    </dl>
                </Section>
                <Section id="soft-skills-langues" title="Soft Skills & Langues">
                    <div className="people-grid">
                        {peopleSkills.map(([label, items]) => (
                            <div className="people-group" key={label}>
                                <h3>{label}</h3>
                                <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
                            </div>
                        ))}
                    </div>
                </Section>
                <Section id="contact" title="Contact">
                    <address>
                        <dl className="contact-list">
                            {contact.map(([label, value, href]) => <div key={label}><dt>{label}</dt><dd><a href={href}>{value}</a></dd></div>)}
                            <div><dt>Localisation</dt><dd>{profile.location}</dd></div>
                        </dl>
                    </address>
                </Section>
            </main>
        </>
    );
}
