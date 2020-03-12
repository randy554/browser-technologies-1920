# Browser Technologies
## Opdracht 1.2 - Fork je OBA
Hoe zit het eigenlijk met Progressive Enhancement van je OBA opdracht? Waarschijnlijk kan daar wel het één en ander aan verbeterd worden, dat ding is immers in een week in elkaar gehackt!

### Doel van deze opdracht
Het doel van de deze opdracht is leren hoe je een website kan testen in verschillende browsers en devices, en hoe een screenreader werkt.



### Uitleg
Pas Progressive enhancement toe op je OBA Web App. Test de 8 features uit opdracht 1.1 en verbeter de code waar mogelijk.

Test je OBA opdracht op verschillende devices en browsers. Noteer welk device en welke browsers je hebt getest. TEst je OBA opdracht minimaal in 3 devices, en naast Chrome in Firefox en nog een andere browser.

Laat je website voorlezen door een screenreader.

### Test voor OBA site [WerkstukBuddy](https://heralt.github.io/project-1-1920/)

### Criteria
- Zet je code op Github
- Schrijf een Readme met:
======
##Device: iPad air 2 (BROWSER: Safari on an Apple iPad runnning 11.3)

Mozilla/5.0 (iPad; CPU OS 11_3 like Mac OS X)
AppleWebkit/605.1.15 (KHTML, like Gecko)
Version/11.0 Mobile/15E148 Safari/604.1

* Header achtergrond wordt verkleind
* Svg logo geeft geen knipoog
* Hover over boek werkt hier met longpress


##Device: iPod touch (4th generation)
======

Safari op de Ipod: Mozilla/5.0 (iPod; CPU iPhone OS 6_0_1 like Mac OS X) 
AppleWebKit/536.26 (KHTML, like Gecko) 
Version/6.0 Mobile/10A523 Safari/8536.25

* Header achtergrond wordt verkleind
* Boeken worden niet weergegeven


##Device: Revolution
======

Chrome: Mozilla/5.0 (Linux; Android 4.4.4; revolution Build/KTU84Q)
AppleWebKit/537.36 (KHTML, like Gecko) 
Chrome/74.0.3729.112 Chrome 33.0.0.0 Mobile Safari/537.35

* Op detailpagina loopt de header, zoekvenster niet helemaal door naar de rechterzijde van de pagina

Screen reader
======

Ik heb voor de screenreader test gebruik gemaakt van de ChromeVox screenreader extentie binnen de volgende
browers:

Chrome 80 on macOS Catalina 10.15 
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) 
AppleWebKit/537.36 (KHTML, like Gecko) 
Chrome/80.0.3987.132 Safari/537.36

De site wordt goed voorgelezen. Hij begint gewoon bovenaan met de header waarin de h1 staat. 
Vervolgens loopt hij het hoofdmenu af. Voor de zoekvenster geeft hij zowel informatie over het invoerveld en de submitknop.
Van de boeken pakt hij niet meteen de omschrijving van het boek maar de afbeelding. Op de detailpagina slaat hij vanuit de zoekvenster de titel en omschrijving van het boek over en gaat hij vervolgens direct naar de notitie kladblok. 


   - Afbeeldingen uitzetten
   
   - Custom fonts uitzetten
   
 Deze test heeft geen gevolgen gehad voor mijn site. Er werd namelijk geen gebruik gemaakt van custom fonts. Dit heb ik voor 
 de zekerheid getest. Deze test uit te voeren heb ik gebruik gemaakt van de extentie: uBlock binnen de browser:
 
 Firefox 74.0 on macOS Catalina 10.15
 Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:74.0) 
 Gecko/20100101 Firefox/74.0
 
    - Kleur uitzetten & kleurenblindheid instellen
 
 Met de wCAG - color extentie is het mogelijk om te testen op verschillende niveaus van kleurenblindheid. De verschillende    kleuren standen hadden niet veel effect op de usability van de site. Knoppen, zoekvelden en tekst waren goed te onderscheiden van elkaar. In de meeste vormen van kleurenblindheid zou eventueel de rode en oranje achtergrondskleuren van de hoofdmenu items kunnen worden aangepast.
 
 Om deze test uit te voeren heb ik gebruik gemaakt van de extentie: WCAG - color contrast binnen de browser: 
 
 Chrome 80 on macOS Catalina 10.15
 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3)
 AppleWebKit/537.36 (KHTML, like Gecko) 
 Chrome/80.0.3987.132 Safari/537.36
 
    - Muis/Trackpad werkt niet
    - Breedband internet uitzetten
    - Javascript (volledig)
    - Cookies niet accepteren
    - localStorage doet het niet


  - een beschrijving van alle features die je hebt getest
  - een beschrijving van de Devices en browsers waar je op hebt getest
  - een beschrijving van de screenreader test
  - beschrijf hoe je de problemen hebt opgelost, of hoe je dit zou oplossen (met todo’s) als je genoeg tijd en budget zou hebben
