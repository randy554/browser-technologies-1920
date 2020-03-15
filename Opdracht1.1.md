## Afbeeldingen uitzetten 

Heb op firefox en chrome getest hoe de ervaring is na het uitzetten van afbeeldingen.

Ik heb daarvoor deze sites bezocht:
nu.nl
marktplaats.nl
Instagram.com


### [Nu.nl](http://nu.nl)
De site bezoek ik dagelijks. Ik merkte daardoor de snelheidverschil die de site heeft zonder afbeeldingen. Opvallend is dat nu.nl op de plek waar afbeeldingen normaal zouden staan, helemaal niks weergeeft. Dus geen image placeholder of een icoon van een gebroken afbeelding. Dit gedrag wordt zowel op firefox, chrome, mac & windows vertoont.

Bij Chrome wel een gebroken afbeelding icoon.

### Marktplaats.nl
Marktplaatst laat wel image placeholders zien. Google ads om de content heen laten wel een gebroken afbeelding icoon zien.

### Instagram.com
Instagram laat ook overal image placeholders zien. Afbeeldingen die voorzien zijn van een alt-tekst weergeven de alt tekst in de image placeholder. Afbeeldingen die dat niet hebben vertonen linksboven in de image placeholder een gebroken afbeelding icoon.

#### Oplossing
Maak gebruik van alt tekst en zorg dat de afbeelding placeholder een vast width en hight hebben met een achtergrondskleur.

#### Hoe zet je images uit in Firefox?

Open Firefox -> Tik about:config in de browser -> Klik I accept the risk -> zoek vervolgens op permissions.default.image -> zet de waarde op 2.

#### Hoe zet je images uit in Chrome?

Klik recht op de drie puntjes menu -> settings -> zoek op site settings -> site settings -> images -> Switch show all naar uit.


## Breedband internet uitzetten


Ik heb voor de test gebruik gemaakt van de homepagina van nu.nl.  Over het algemeen vertraagde de afbeeldingen het laden het meest bij tragere netwerken. 

#### Oplossing

Wees zuinig met afbeeldingen. Optimaliseer ze voor gebruik op het web. 

#### Hoe breedband uit te zetten via Chrome, Firefox & Opera:

Rechter muisknop -> Inspect element -> Network tab.

Nu.nl

* De laadtijd met Wi-Fi: 2,68s
* De laadtijd met regular 3g: 1,01 min
* De laadtijd met good 3g: 27,67s

Getest op browser:

Firefox 74.0 on macOS Catalina 10.15
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:74.0) 
Gecko/20100101 Firefox/74.0


* De laadtijd met Wi-Fi: 6,31s
* De laadtijd met slow 3g: 11,33s
* De laadtijd met good 3g: 7,34s

Getest op browser:

Chrome 80 on macOS Catalina 10.15
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) 
AppleWebKit/537.36 (KHTML, like Gecko) 
Chrome/80.0.3987.132 Safari/537.36

* De laadtijd met Wi-Fi: 22,74s
* De laadtijd met slow 3g: 35,03s
* De laadtijd met fast 3g: 28,38s

Getest op browser:

Opera 67.0 on macOS Catalina 10.15
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) 
AppleWebKit/537.36 (KHTML, like Gecko) 
Chrome/80.0.3987.122 Safari/537.36 OPR/67.0.3575.53



