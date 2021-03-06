# Test voor OBA site [WerkstukBuddy](https://heralt.github.io/project-1-1920/)

Device: iPad air 2 (BROWSER: Safari on an Apple iPad runnning 11.3)
======

Mozilla/5.0 (iPad; CPU OS 11_3 like Mac OS X)
AppleWebkit/605.1.15 (KHTML, like Gecko)
Version/11.0 Mobile/15E148 Safari/604.1

* Header achtergrond wordt verkleind
* Svg logo geeft geen knipoog
* Hover over boek werkt hier met longpress

Hoofdpagina

![iPad](https://raw.githubusercontent.com/randy554/browser-technologies-1920/master/docs/img/hoofdpagina_close.jpeg)

Detailpagina

![iPad2](https://raw.githubusercontent.com/randy554/browser-technologies-1920/master/docs/img/detailpagina.jpeg)

### Oplossing

  ###### Header achtergrond wordt verkleind:

    De header bevat op dit moment geen height en width. Dit element moet voorzien worden van een width met een relatieve
    waarde zoals em. 
    
 ###### Hover over boek werkt hier met longpress:
 
    Het ontwerp moet aangepast worden zodat de checkboxes bij boeken direct zichtbaar zijn en niet door middel van een hover.

Device: iPod touch (4th generation)
======

Safari op de Ipod: Mozilla/5.0 (iPod; CPU iPhone OS 6_0_1 like Mac OS X) 
AppleWebKit/536.26 (KHTML, like Gecko) 
Version/6.0 Mobile/10A523 Safari/8536.25

* Header achtergrond wordt verkleind
* Boeken worden niet weergegeven

Homepagina

![iPod Touch](https://raw.githubusercontent.com/randy554/browser-technologies-1920/master/docs/img/iPod_touch.jpg)

### Oplossing
    
###### Header achtergrond wordt verkleind

    Dit element moet voorzien worden van een width met een relatieve waarde zoals em.
 
###### Boeken worden niet weergegeven 

    De API call moet server-side worden aangeroepen zodat als javascript uit staat in de browser dit niet van invloed is
    op het leveren van de boeken(content).

Device: Revolution
======

Chrome: Mozilla/5.0 (Linux; Android 4.4.4; revolution Build/KTU84Q)
AppleWebKit/537.36 (KHTML, like Gecko) 
Chrome/74.0.3729.112 Chrome 33.0.0.0 Mobile Safari/537.35

* Op detailpagina loopt de header, zoekvenster niet helemaal door naar de rechterzijde van de pagina

Homepagina

![Revolution](https://raw.githubusercontent.com/randy554/browser-technologies-1920/master/docs/img/revolution.jpg)

Detailpagina

![Revolution2](https://raw.githubusercontent.com/randy554/browser-technologies-1920/master/docs/img/revolution2.jpg)

### Oplossing
    
###### Op detailpagina loopt de header, zoekvenster niet helemaal door naar de rechterzijde van de pagina

    Voor de header zie voorgaande oplossingen. De zoekbalk width wordt nu bepaald door Flexbox. Voor browsers die 
    Flexbox niet ondersteunen zou ik aparte styling voor schrijven via @supports not. Hierbij zou ik het element 
    voorzien van een width: 100%/vw. 


Screenreader
======
De site wordt goed voorgelezen. Hij begint gewoon bovenaan met de header waarin de h1 staat. 
Vervolgens loopt hij het hoofdmenu af. Voor de zoekvenster geeft hij zowel informatie over het invoerveld en de submitknop.
Van de boeken pakt hij niet meteen de omschrijving van het boek maar de afbeelding. Op de detailpagina slaat hij vanuit de zoekvenster de titel en omschrijving van het boek over en gaat hij vervolgens direct naar de notitie kladblok. 

Ik ben er via de inspector achtergekomen dat het kladblok ook het main element bevat dus dat hij daarom waarschijnlijk meteen daar naartoe springt. Dit zou ik verder moeten testen. Ik vermoedt dat ik los daarvan de andere elementen nog focusable moet maken. Naast deze bijzonderheid wordt de tekst in engels voorgelezen. Via de inspector ben ik erachter gekomen dat dit ```lang="en"``` nog in de html stond.


Ik heb voor de screenreader test gebruik gemaakt van de ChromeVox screenreader extentie binnen de volgende
browers:

Chrome 80 on macOS Catalina 10.15 
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) 
AppleWebKit/537.36 (KHTML, like Gecko) 
Chrome/80.0.3987.132 Safari/537.36


    - Afbeeldingen uitzetten

De ontbrekende afbeeldingen op de site worden vertegenwoordigd met een image placeholder en een gebroken afbeelding icoon.
De vormgeving en structuur van de site zijn ongewijzigd. Dit is getest op de volgende browser:
 
 ***
 
Firefox 74.0 on macOS Catalina 10.15
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:74.0) 
Gecko/20100101 Firefox/74.0
   
Chrome 80 on macOS Catalina 10.15
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3)
AppleWebKit/537.36 (KHTML, like Gecko)
Chrome/80.0.3987.132 Safari/537.36
   
    - Custom fonts uitzetten
   
 Deze test heeft geen gevolgen gehad voor mijn site. Er werd namelijk geen gebruik gemaakt van custom fonts. Dit heb ik voor 
 de zekerheid getest. Deze test uit te voeren heb ik gebruik gemaakt van de extentie: uBlock binnen de browser:
 
 Firefox 74.0 on macOS Catalina 10.15
 Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:74.0) 
 Gecko/20100101 Firefox/74.0
 
    - Kleur uitzetten & kleurenblindheid instellen
 
 Met de wCAG - color extentie is het mogelijk om te testen op verschillende niveaus van kleurenblindheid. De verschillende    kleuren standen hadden niet veel effect op de usability van de site. Knoppen, zoekvelden en tekst waren goed te onderscheiden van elkaar. In de meeste vormen van kleurenblindheid zou eventueel de rode en oranje achtergrondskleuren van de hoofdmenu items kunnen worden aangepast.
 
 Om deze test uit te voeren heb ik gebruik gemaakt van de extentie: WCAG - color contrast binnen de browser: 
 
  ***
 
 Chrome 80 on macOS Catalina 10.15
 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3)
 AppleWebKit/537.36 (KHTML, like Gecko) 
 Chrome/80.0.3987.132 Safari/537.36
 
 
 Firefox 74.0 on macOS Catalina 10.15
 Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:74.0)
 Gecko/20100101 Firefox/74.0
 
    - Muis/Trackpad werkt niet
    
 Het hoofmenu wordt overgeslagen en de eerste tab begint bij het zoekveld. Vervolgens eindigd deze bij de zoekknop. 
 Getest op browser:
 
 Firefox 74.0 on macOS Catalina 10.15
 Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:74.0)
 Gecko/20100101 Firefox/74.0
 
 In tegenstelling tot Firefox tabt chrome wel door alle content heen (hoofdmenu,zoekveld en boeken). Op de detailpagina
 worden wordt de titel en boekomschrijving overgeslagen. 
 Getest met de volgende browsers met hetzelfde resultaat:
 
  ***
 
 Chrome 80 on macOS Catalina 10.15
 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3)
 AppleWebKit/537.36 (KHTML, like Gecko) 
 Chrome/80.0.3987.132 Safari/537.36
 
 Edge 80 on macOS Catalina 10.15
 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) 
 AppleWebKit/537.36 (KHTML, like Gecko) 
 Chrome/80.0.3987.132 Safari/537.36 Edg/80.0.361.66
 
 Opera 67.0 on macOS Catalina 10.15
 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3)
 AppleWebKit/537.36 (KHTML, like Gecko)
 Chrome/80.0.3987.122 Safari/537.36 OPR/67.0.3575.53
    
    - Breedband internet uitzetten
 
 De pagina was wat minder snel met laden. In sommige gevallen kon je de afbeeldingen voorzichtig zien laden.
 De site weergeeft al content placeholder waardoor de gebruiker feedback krijgt dat er nog iets op de pagina 
 hoort te komen. Daarna zou ik mijn afbeeldingen verkleinen op een lossles of lossy manier afhankelijk hoe 
 belangrijk een kwalitatieve foto voor de gebruiker is. Voor mobiel zou ik dan deze afbeeldingen serveren. 
 Verder zou ik richtlijnen opstellen voor bestandsgrote per type files zoals html, css en js. 
  
 * De laadtijd met Wi-Fi: 2,87s
 * De laadtijd met regular 3g: 5,53s
 
 Getest op browser:
 
 Firefox 74.0 on macOS Catalina 10.15
 Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:74.0) 
 Gecko/20100101 Firefox/74.0
 
 De pagina was wat minder snel met laden. In sommige gevallen kon je de afbeeldingen voorzichtig zien laden. 
 * De laadtijd met Wi-Fi: 2,16s
 * De laadtijd met slow 3g: 10,69s
 * De laadtijd met fast 3g: 6,45s 
 
 Getest op browser:
 
 Chrome 80 on macOS Catalina 10.15
 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) 
 AppleWebKit/537.36 (KHTML, like Gecko) 
 Chrome/80.0.3987.132 Safari/537.36
 
 De pagina was wat minder snel met laden. In sommige gevallen kon je de afbeeldingen voorzichtig zien laden. 
 * De laadtijd met Wi-Fi: 1,70s
 * De laadtijd met slow 3g: 7,74s
 * De laadtijd met fast 3g: 3,22s 
 
 Getest op browser:
 
 Opera 67.0 on macOS Catalina 10.15
 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) 
 AppleWebKit/537.36 (KHTML, like Gecko) 
 Chrome/80.0.3987.122 Safari/537.36 OPR/67.0.3575.53
 
    - Javascript (volledig)
  
 Alleen het hoofdmenu en zoekveld worden getoond de boeken niet. 
 De oplossing hiervoor is om de  API call server-side uit te voeren en af te handelen. Vervolgens wordt de content naar de browser gestuurd.
 
 Getest met de volgende browsers met hetzelfde resultaat:
 
 ***
 
 Firefox 74.0 on macOS Catalina 10.15
 Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:74.0)
 Gecko/20100101 Firefox/74.0
 
 Chrome 80 on macOS Catalina 10.15
 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3)
 AppleWebKit/537.36 (KHTML, like Gecko) 
 Chrome/80.0.3987.132 Safari/537.36
 
 Safari 13.0.5 on macOS Catalina 10.15
 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) 
 AppleWebKit/605.1.15 (KHTML, like Gecko) 
 Version/13.0.5 Safari/605.1.15
 
    - LocalStorage en Cookies uitschakelen
    
 Ik heb heb deze test uitgevoerd door de cookies in de browser uit te schakelen. Dit had geen effect op de werking van de
 website. De site maakt geen gebruik van deze technieken.
   
 Firefox 74.0 on macOS Catalina 10.15
 Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:74.0)
 Gecko/20100101 Firefox/74.0
    
