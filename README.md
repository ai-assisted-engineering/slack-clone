
# KI gestützte Software Entwicklung Workshop - Übung 2 


## Szenario: Zeitreise ins Jahr 2001 - Mit KI zurück in die Dot-Com-Ära

Euer Team will sich ein Beispiel an dem Erfolgskonzept der Samwer-Brüder nehmen: die Idee eines in den USA durchstartenden Tech-Unternehmens kopieren, um sich auf dem deutschen Markt zu etablieren. Die Samwer-Brüder haben 1999 eBay als "Alando" nachgebaut und nach nur 100 Tagen für 53 Millionen Dollar an eBay verkauft.

Schnell wachsenden Start-Ups basieren heutzutage meist auf die Entwicklung komplexer KI-Lösungen. Oder im Fall von builder.ai auf einer simplen Consulting-Firma mit 700 indischen Entwicklern. Solche Strukturen lassen sich jedoch nicht in einem eintägigen Workshop nachbauen. (Bennet: Ist hier klar, dass ich mich auf den ersten Satz des Abschnitts beziehe?)

Deshalb reisen wir in die Vergangenheit, genauer an den Anfang der 2000er Jahre. Technologien aus der heutigen Zeit nehmen wir natürlich mit auf unsere Reise. Cursor soll dabei euer größter Wettbewerbsvorteil sein - ein KI-Entwicklungspartner, den die damalige Konkurrenz nicht hatte.

## Aufgabe - Agentic Coding in der Praxis

Mit Hilfe von Cursor sollt ihr eine funktionsfähige Single-Page-Application entwickeln. Der Fokus liegt dabei auf dem Agentic Coding - der Zusammenarbeit zwischen Mensch und KI bei der Softwareentwicklung.

Mögliche Projekte aus der frühen 2000er-Ära:

E-Commerce & Marktplätze:
- Auktionsplattform (eBay-Stil mit Bieten, Produktlisten, Nutzerprofilen)
- Online-Kleinanzeigen (Craigslist-ähnlich mit Kategorien und Suchfunktion)
- Digitaler Marktplatz (Amazon-Stil mit Warenkorb und Bewertungen)

Communication & Social:
- Messaging-Plattform (ICQ/AIM-Stil mit Chat-Räumen) -> Bitte ohne Instant messaging, da dies eine neue Ebene der Komplexität eröffnen würde.
- Forum-System (frühe Reddit-Variante mit Threads und Voting)

Content & Media:
- Blog-Plattform (Blogger/WordPress-Stil mit Posts und Kommentaren)

Bei den gelisteten Projekten handelt es sich nur um mögliche Vorschläge, an die ihr nicht gebunden seid. Tobt euch gerne aus und stürzt euch auf eure eigenen Ideen - Hauptsache, ihr gebt euch dem Vibe-Coding-Mantra hin und verwendet überwiegend Cursor als euren KI-Entwicklungspartner.

## Hinweise

- Beschränkt euch 2-3 Kernkonzepte
- 

### Ablauf (TODO: Den Ablauf schöner gestaltetn / umschreiben)

1. Projekt-Setup mit KI [~ 15 min]
    - Wählt euer Ziel-Konzept aus der 2000er-Ära
    - Nutzt Langdock, um die Grundstruktur eures Projektes zu generieren. [Verwendet hierzu gerne die Vorgehensweise die ich verwendet habe](/docs/workflow.md#projekt-setup-mit-langdock) (TODO: Siehe Verlinkung). Falls ihr bereits eine eigene Vorgehensweise entwickelt habt, dann nutzt diese - wir sind gespannt auf eure Erfahrungen
    - Lasst die KI eine initiale Architektur vorschlagen, dass Konzept ausarbeiten und eine Schritt für Schritt-Anleitung generieren.
2. Iterative Entwicklung mit Cursor [~ 90 min]
    - Implementiert 2-3 Kernfunktionen eurer Anwendung
        - Verwendet hierzu gerne die bereitgestellten Cursorrules (TODO: Verlinken)
    - Experimentiert mit verschiedenen Cursor-Features:
        - Code-Generierung durch natürliche Sprache
        - Automatische Refaktorierung und Optimierung
        - Bug-Fixing und Debugging-Unterstützung
        - UI/UX-Verbesserungen durch KI-Vorschläg
3. Demo & Reflexion [~ 15 min] (TODO: Zeit reicht niemals für Vorstellung und Disskusion)
    - Präsentiert eure funktionsfähigen Anwendungen 
    - Reflektiert über die Agentic Coding-Erfahrung: Was hat die KI gut gemacht? Wo wart ihr als Entwickler unverzichtbar?


## Technologies

TODO: Add technologies set up to be used in this project.

## Structure
From here on out, everything is written in English to ensure universal accessibility.


```

.cursor/rules -> This folder holds the projects rules, used by the agent to improve its workflow. You specify what needs to be done and how exectly id should achieve its goals.

```

## [Cursor Rules](https://docs.cursor.com/context/rules)

The cursor rules are used to guide the agent to use the correct tools and workflows. Each rule is a file in the .cursor/rules folder. When a rule is applied, its contents are included at the start of the model context (prompt). 
Thus, it is essential to keep the rules concise and to the point. This can be achieved by routing the rules based on the type of action / task the agent is performing. 




## Default Readme

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Small change to trigger the ci/cd