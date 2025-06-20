# KI Workflow



## Projekt-Setup mit Langdock

Wir wollen so wenig Zeit wie möglich auf die Planung und Instruktion des Projektes verwenden. Deshalb findet ihr hier ein vorgehen, welches ich verwendet habe um einen Slack-Prototypen in kürzester Zeit zu bauen.
Für die initiale Planung verwenden wir Langdock, da die kostenlose Version von Cursor nur eine begrenzte Anzahl von Anfragen erlaubt; diese wollen wir vollumfänglich für das Agentic-Coding aufbrauchen.

1. Im ersten Schritt fasst ihr in 3-4 Sätzen kurz zusammen, was für ein Projekt ihr implementieren wollt, und fügt diese in den Platzhalter `{{IDEA}}` des [Concept Prompts](/docs/prompt_templates/concept_prompt.md) ein. Der Prompt instruiert das LLM, mit dessen Hilfe einen groben Plan aufzustellen, was für Aufgaben erledigt werden müssen und welche Technologien zum Einsatz kommen sollen. Im besten Fall stellt euch das LLM Rückfragen zu offenen/unklaren Punkten um die Planung zu präzisieren.

TODO: Die in diesem Projekt verwendeten Technologien sollten im Prompt embedded sein.

Dies wiederholt ihr so lange, bis ihr mit der Planungsübersicht zufrieden seid, um zum nächsten Schritt über zu gehen- es muss keine perfekte Ausarbeitung sein; haltet die Planung übersichtlich und versucht Komplexität zu verhindern (z.B. Authentication, Instant-Messaging, etc.)

2. Mit der reinen Planungsübersicht, kann der Cursor-Agent vermutlich noch nicht allzu viel anfangen, weshalb wir in diesen Schritt die Planung, mit Hilfe des 2. Prompts, auf eine Schritt- für Schritt-Anweisung verfeinern. Hierzu fügen wir das Ergebnis aus Prompt 1. in den Platzhalter `{{PROJECT_REQUEST}}` des 2. Prompts ein. Fliegt über das Ergebnis drüber und ermahnt das LLM Fehlern oder Unklarheit, diese auszubessern.

3. 

## Cursor workflow

TODO:
- Cursor soll den Plan Schritt für Schritt ausführen.
- Ist der Step erledigt; funktionieren alle implemntierten? Ansosnten an diesem Step arbeiten, bis er es tut.
- Ist mit
