# ExpressDB
Express Server für DB Queries

| Travis Status |
| --- |
[![Build Status](https://travis-ci.org/arminbeiner/ExpressDB.svg?branch=master)](https://travis-ci.org/arminbeiner/ExpressDB)

## Einleitung
Express Server der Daten aus einer Postgresql Datenbank ausliest und diese als HTTP Response zurückgibt.  

Als Grundlage für den Server wird Node.js mit der Express Library verwendet.  
Für die Datenbankanbindung wird pg genutzt.  

## Vorbereitung und Installation

Folgende Schritte müssen zur Vorbereitung und Installation durchgeführt werden

### Erstellung der benötigten Datenbank (local oder remote)

Verwendung einer PostgreSQL Datenbank.  
PostgreSQL muss erreichbar sein und folgende Schritte müssen darauf ausgeführt werden:

1. Erstellung einer Datenbank, DB Name in Default Config: semester3
2. Ausführung Create_Insert.sql (File abgelegt in Verzeichnis SQL)

Defaultmässig verwendet die Konfiguration für die DB Verbindung folgende Parameter:
- user: postgres  
- host: localhost  
- port: 5432  

Diese Werte können in app/pool-config.js wenn nötig angepasst werden (NICHT GETESTET!)

### Installation

```
npm install
```
Node.js muss installiert sein, alle nötigen Dependencies sind im package.json File erfasst.

## Starten des Servers

```
npm start  
```
Server erreichbar unter http://localhost:3000

## Tests

```
npm test
```
Es sind einige Function und Unit Tests definiert.  

## Autoren
- Alex Zaeper
- Armin Beiner

## License

MIT License

Copyright (c) 2017 Alex Zaeper, Armin Beiner

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
