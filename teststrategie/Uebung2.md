| ID  | description                                            | expectation                                    | result                 |
|-----|--------------------------------------------------------|------------------------------------------------|-----------------------|--------|------------------|
| 1   | Autosuche basierend auf Standort und Datum             | Zeigt eine Liste von verfügbaren Autos an      | Funktioniert korrekt  | Pass   | -                |
| 2   | Buchung eines Autos mit persönlichen und Zahlungsdaten | Bestätigung der Buchung nach Eingabe der Daten | Funktioniert korrekt  | Pass   | -                |
| 3   | Überprüfung der Verfügbarkeit eines Autos              | Zeigt keine Autos, wenn keine verfügbar sind   | Fehler                | Fail   | Fehlerhafte DB   |
| 4   | Buchung stornieren                                     | Stornierungsbestätigung erscheint             | Funktioniert korrekt  | Pass   | -                |
| 5   | Preis inkl. Steuern und Gebühren angezeigt             | Gesamtpreis wird korrekt angezeigt             | Funktioniert korrekt  | Pass   | -                |
