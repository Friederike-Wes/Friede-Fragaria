🧾 Website Specification – Botanische Illustratorin
1. Allgemeines Ziel
Erstelle eine minimalistische, bildbasierte Portfolio-Website für eine botanische Illustratorin.
Designprinzipien:
Fokus auf große Bilder (Fullscreen)
Ruhige, elegante Ästhetik
Wenig Text im oberen Bereich, Inhalte erscheinen beim Scrollen
Klare Navigation, die immer sichtbar bleibt
2. Startseite (Home)
Verwende das Bild assets/beach.JPG als Fullscreen-Hintergrund
Das Bild soll:
die gesamte Bildschirmfläche abdecken (100vh, 100vw)
responsive sein (object-fit: cover)
Optionaler Text:
minimal (z. B. Name oder Titel)
zentriert oder leicht versetzt
Schrift:
dünn (font-weight: 200–300)
hoch / elegant (z. B. "Playfair Display", "Inter", "Helvetica Neue Light")
3. Navigation
Position:
fest (fixed) am rechten Bildschirmrand
vertikal zentriert
Layout:
vertikale Anordnung
Text ist vertikal gedreht (z. B. writing-mode: vertical-rl oder transform: rotate)
Navigationselemente:
Illustrationen
Workshops
Botanischer Illustrationsclub
Über mich
Verhalten:
Navigation bleibt immer sichtbar
Beim Klick wird nur der Seiteninhalt gewechselt (Single Page oder Routing)
Farben (Icons/Text):
Primär: Salbeigrün (#9CAF88)
Sekundär: Moosgrün (#6E8B74)
Hover: dunkles Waldgrün (#2F4F3E)
4. Seitenstruktur (für ALLE Unterseiten)
Jede Seite besteht aus:
Hero Section
Fullscreen-Bild (100vh)
dient als Einstieg
Scroll Content
darunter folgen:
Textblöcke
weitere Bilder
ggf. Galerien
Übergang:
weicher Übergang (z. B. Fade-in oder Scroll-Animation optional)
5. Seite: Illustrationen
Layout:
Grid mit 2 Spalten
Bilder immer paarweise nebeneinander
Erste Reihe:
Links: assets/heides_wilde_blumen.JPG
Rechts: assets/Nigella_sativa.JPG
Interaktion:
Hover-Effekt:
Karte dreht sich (Flip-Animation, 3D)
Vorderseite: Bild
Rückseite: Text/Information zur Illustration
6. Seite: Workshops
Layout:
Zwei nebeneinanderstehende Bilder
Rechteckig mit abgerundeten Ecken
Inhalte:
Links:
Bild: assets/IMG_2865.JPG
Text (Overlay): "im Café Spiral"
Rechts:
Bild: assets/55369360_Unknown.JPG
Text (Overlay): "im Botanischen Garten"
Textstil:
Farbe: weiß (#FFFFFF)
Position: über dem Bild (z. B. unten oder zentriert)
gut lesbar (ggf. leichter Overlay-Darken-Effekt)
7. Seite: Botanischer Illustrationsclub
Text (exakt so übernehmen):
Beim gemeinsamen Zeichnen steht das genaue Beobachten im Vordergrund. Wir arbeiten mit lebenden Pflanzen direkt im Botanischen Garten – selbstverständlich im Rahmen der Verhaltensregeln des Gartens: Es dürfen keine Pflanzenteile abgepflückt und keine Beete betreten werden.
Der Illustrationsclub ist kein Kurs, sondern ein offenes Treffen zum gemeinsamen Arbeiten, Austauschen und voneinander Lernen. Vorkenntnisse sind nicht nötig – Neugier reicht völlig aus. Wir treffen uns einmal im Monat mit verschiedenen Themenschwerpunkten.
8. Seite: Über mich
Beginnt mit einem Fullscreen-Bild
Danach:
Text über die Illustratorin
Fokus auf:
künstlerischer Hintergrund
botanische Illustration
Arbeitsweise
9. Wichtige technische Anforderungen
Responsive Design (Mobile + Desktop)
Smooth Scrolling
Wiederverwendbare Komponenten (z. B. Navigation, Hero Sections)
Bilder optimiert laden
Saubere Struktur (z. B. React oder modulares HTML/CSS)
10. Dinge, die NICHT enthalten sein sollen
Kein Shop (vorerst komplett weglassen)
Keine überladenen Layouts
Kein starkes UI — Fokus bleibt auf Bildern


This website (and it´s whole workspace) will be hosted as git hub page here: https://github.com/Friederike-Wes/Friede-Fragaria.git. please connect to this repo and push it. 