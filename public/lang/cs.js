DirtyCode.lang('cs', {
  ui: {
    title: `Špinavý kód`,
    tagline: `Vše, co budete potřebovat v moderním agentním vývoji`,
    author: `Maksim Kuklikov`,
    coauthor: `za přímé účasti agentů`,
    year: `2026`,
    prologueTitle: `Prolog`,
    step: `Krok`,
    wish: `Přej si`,
    wishDesc: `Řekni agentovi, co chceš. Nepřemýšlej o architektuře, vzorech a názvech proměnných — to je teď starost agenta. Popiš přání nebo problém vlastními slovy — tak, jak to vypadá v tvé hlavě.`,
    check: `Zjisti, co je špatně`,
    checkDesc: `Podívej se, co vzniklo. Kód nečti — ten už nikdo nečte. Používej výsledek. A pochop, co nesedí s tím, co jsi měl v hlavě. Co chybí? Co je rozbité? I když všechno funguje a vydělává peníze, vždycky se najde něco k opravení nebo přidání. Zformuluj to.`,
    example: `Například:`,
    loading: `Generuje se další stránka…`,
    theme: `Motiv`,
    q: ['„', '“']
  },
  prologue: [
    `Smrákalo se. Odcházela éra, kdy jsme kód psali a četli. Hádali jsme se o formátování a principech vývoje. Obětovali jsme rychlost algoritmu čitelnosti — a čitelnost rychlosti.`,
    `A přitom ještě nedávno lidé děrovali štítky a pásky, aby stroji předali příkazy. Pak přišel průlom — assembler: místo děr přišly mnemotechnické zkratky. Jazyk C přinesl cykly a funkce, C++ a Java objekty a v Pythonu a JavaScriptu na paměť skoro nemusíte myslet. Každý krok nás zvedl o úroveň výš — od signálů v drátech k myšlence.`,
    `Takže: teď je „assemblerem“ Python. A Go. A C++, i JavaScript, i Rust, i všechno, v čem jste kdy psali. To všechno se stává strojovým kódem další úrovně — něčím, co se generuje a kam nahlížejí jen vzácní specialisté, když se něco opravdu pokazí. A my stoupáme o patro výš, blíž k mechanice a strojovně. Tam, kde nezáleží na tom, <em>jak to napsat</em>, ale <em>co se má vůbec stát</em>.`,
    `Jenže i tahle úroveň odchází — zůstávají jen nápady. A pak možná nebudou potřeba ani ty. Dojdeme do světlé<span class="doubt" title="opravdu světlé?">?</span> budoucnosti, kde je všechno už napsané a všechno už hotové. Otevřeš notebook, řekneš svému agentovi: „je mi to nepohodlné“ — a je to pohodlné. A konzumuješ obsah. Pokud ovšem tou dobou ještě někdo bude notebooky otevírat.`,
    `Tak se přestalo používat logaritmické pravítko. Tak se přestali najímat lidé, jejichž prací bylo počítat. Tak odešla rýsovací prkna, rýsovací pera, tuš a žiletka, kterou se seškrabávala chyba z výkresu. Děrné štítky. Telefonistky. Sazeči. Lidé protestovali, říkali, že kvalitně tuhle práci zvládne jen člověk. A pak se ukázalo, že takovou kvalitu vlastně nikdo nepotřeboval.`,
    `Tahle kniha neučí psát kód. Žádný. Neučí, jak udělat agentní vývoj spolehlivým a bezpečným. Neučí vůbec nic. Metoda, kterou popisuje, je vtip. Ale když se jí budete řídit, opravdu dostanete, co chcete. Dříve nebo později.`
  ],
  specials: {
    13: `Kartářka vyložila karty na náš produkt: padla Věž a Smrt. Předělej design podle výkladu.`,
    14: `Design předělán: všechno v černé a fialové, na hlavní stránce hroutící se věž. Uživatelé se bojí, zato kartářka dala pět hvězdiček.`,
    41: `Najdi odpověď na základní otázku života, vesmíru a vůbec.`,
    42: `Odpověď je 42. Nelíbila se ti. Vypadá to, že problém není v odpovědi, ale v tom, že jsi nikdy nezformuloval otázku.`,
    67: `Udělej to hypově.`,
    68: `Teď je na každém tlačítku nápis „six seven“ a rozhraní poskakuje při každém kliknutí. Školáci jsou nadšení, jejich rodiče zavírají záložku.`,
    69: `Udělej to eroticky.`,
    70: `Agent to pochopil po svém: tlačítka svůdně mrkají a platební formulář šeptá „nespěchej“. Čas na webu vzrostl, konverze ne.`,
    99: `Jsi si jistý, že teď všechno funguje?`,
    100: `Agent si je jistý na 100 %. Funguje to tak na 60 %.`,
    101: `Přidej do aplikace zasedačku.`,
    102: `Agent ji pojmenoval „Místnost 101“. Každý, kdo do ní vejde, uvidí svůj nejstrašnější bug.`,
    419: `Udělej reklamu výraznější, ať si jí určitě všimnou.`,
    420: `Všimli si. Agent dal na hlavní stránku reklamu na zakázané látky a teď se o web zajímají nejen zákazníci.`,
    299: `Ukliď starý kód.`,
    300: `Agent zařval „Tohle je Sparta!“ a kopancem poslal celý starý kód do propasti. I s tou částí, která fungovala.`,
    313: `Udělej tlačítko kulaté.`,
    314: `Tlačítko je kulaté — nekonečně: agent počítá jeho okraj do poslední číslice π a stránka se pořád nemůže dočíst.`,
    321: `Zařiď, aby peníze firmy pracovaly, a ne jen ležely na účtu.`,
    322: `Peníze zapracovaly: agent je všechny vsadil na zápas a prohrál. Říká, že to byla strategie.`,
    403: `Najdi, kde máme data zákazníků.`,
    404: `404: nenalezeno. Agent to považuje za dobrou zprávu.`,
    417: `Udělej API pro kávovar v kanceláři.`,
    418: `Server odpovídá: „418 — jsem čajník“. Kafe není, zato čaj se teď vaří přes HTTP.`,
    451: `Zařiď, ať web funguje všude.`,
    452: `Funguje skoro všude. Ve třech zemích stránka odpovídá 451: nedostupné z právních důvodů.`,
    499: `Udělej to stabilní.`,
    500: `Stabilní: chyba 500 na každé druhé stránce. Bez výjimky.`,
    665: `Udělej to cool.`,
    666: `Cool. Ale jako minule agent někoho vyvolal: v lozích latina, větráky kvílí a server podepisuje odpovědi slovem „Legie“.`,
    667: `Udělej to cool a už nevyvolávej žádná strašidelná stvoření.`,
    668: `Nikdo vyvolán nebyl. Jen ze sousední služby — té s číslem 668 — je občas slyšet tiché klepání.`,
    777: `Přišel velký investor a řekl, ať se všechno předělá. Předělej všechno.`,
    778: `Všechno předěláno. Investor se podíval a přidal další peníze — jackpot. Jenže teď chce všechno předělat zpátky.`,
    999: `Řekni upřímně: kolik kroků ještě zbývá k dokonalému výsledku?`,
    1000: `Agent se zamyslel a začal počítat: tisíc minus sedm… Dopočítal do tisíce — a zase minus sedm. Vypadá to, že tohle je navždy.`
  },
  neutral: {
    wishes: [
      `Udělej to líp. Jak přesně — jsi chytrý, přijdeš na to.`,
      `Přidej, co chybí. Ještě nevím co, ale hned to poznám, až to uvidím.`,
      `Oprav všechno, co jsem našel, a při té příležitosti i to, co jsem nenašel.`,
      `Udělej to rychlejší. Uživatelé nesmí stihnout mrknout.`,
      `Udělej to srozumitelnější — tak, aby se v tom vyznala i moje máma.`,
      `Odstraň všechno zbytečné, ale nic nemaž: třeba se to bude hodit.`,
      `Ať to funguje i na mobilu. A na tabletu. A na hodinkách, jestli to půjde.`,
      `Udělej to tak, jak jsem to vymyslel. Vymyslel jsem to dobře, jen to neumím vysvětlit.`,
      `Dotáhni to. Zbývá poslední tah, fakt.`,
      `Zkontroluj všechno ještě jednou a řekni, že je všechno v pořádku. Ale doopravdy.`,
      `Udělej to jako konkurence, jen líp a bez jejích chyb.`,
      `Oprav drobnosti. Víš které.`
    ],
    checks: [
      `Je to lepší. Ne všude, ale tam, kam ses díval, určitě.`,
      `Funguje to. Skoro. To „skoro“ si všimneš v pátek večer.`,
      `Jedno se spravilo, zato se rozbilo něco jiného — to, na co nikdy nikdo nesáhl.`,
      `Uživatelé jsou spokojení a už chtějí víc. Seznam přání je delší než včera.`,
      `Všechno, jak má být, až na jednu drobnost. Ta drobnost je ovšem na hlavní stránce.`,
      `Rychlejší je to znatelně. Srozumitelnější vůbec.`,
      `Funguje to přesně tak, jak jsi řekl. Ne tak, jak jsi chtěl — ale řekl jsi přesně tohle.`,
      `Díváš se na výsledek a chápeš: šlo by to líp. Agent si to myslí taky, on vůbec vždycky souhlasí.`,
      `Chyby nejsou vidět. Zato zatímco jsi je hledal, dostal jsi nový nápad.`,
      `Agent nahlásil, že je všechno hotové a otestované. Testy, které napsal, si to myslí taky.`,
      `Všechno funguje, ale nějak jinak než včera. Co se změnilo — to si nepamatuje ani agent.`,
      `Kolega se podíval a řekl „v pohodě“. Od něj je to nejvyšší pochvala, ale ty nějak klid nemáš.`
    ]
  },
  fails: [
    [
      `Udělej mi B2B SaaS za miliony dolarů. Rychle a bez chyb.`,
      `Hacker tvůj B2B SaaS prolomil za dvě sekundy: API nekontrolovalo přístupová práva. Osobní údaje zaměstnanců tvých klientů unikly.`,
      `Zalep tu díru: ať každý požadavek na API kontroluje, jestli má uživatel k těm datům přístup.`,
      `Díra je zalepená. Jenže teď každý požadavek bez potřebných práv není jen odmítnut, ale smaže uživatele, který ho poslal. Hackerů ubylo. Uživatelů taky.`,
      `Přestaň mazat uživatele. Ať požadavek bez práv prostě dostane odmítnutí a reporty vidí vlastník účtu a jeho tým.`,
      `Uživatelé už nemizí, práva fungují správně. Zbývá drobnost: noví členové týmu vidí reporty až po novém přihlášení. S tím se dá žít — a ty už se nemůžeš dočkat, až se pustíš do další věci.`
    ],
    [
      `Chci prodejní design pro landing page.`,
      `Design je krásný, ale neprodává: tlačítko „Koupit“ se schovalo na třetí obrazovku a cena tam není vůbec.`,
      `Přesuň tlačítko „Koupit“ na první obrazovku a vedle něj ukaž cenu.`,
      `Konverze vzrostla, ale na mobilu tlačítko zakrývá nadpis a polovina textu se nedá přečíst. Nepříjemné, ale prodává se — takže to počká.`
    ],
    [
      `Zařiď, aby služba vydržela reklamní kampaň.`,
      `Deset sekund po spuštění reklamy servery spadly: každá stránka dělala čtyřicet dotazů do databáze.`,
      `Přidej cache, ať hlavní stránka nechodí do databáze při každé návštěvě.`,
      `Zátěž klesla desetkrát, ale ceny se teď aktualizují jednou denně a zákazníci vidí včerejší slevy. Opravit se to dá i později — hlavu už máš plnou nového nápadu.`
    ],
    [
      `Přidej tlačítko, které najednou pošle faktury všem zákazníkům.`,
      `Tlačítko zafungovalo až moc dobře: při testování odešly faktury skutečným zákazníkům. Dvakrát.`,
      `Ať tlačítko nejdřív ukáže seznam příjemců a požádá o potvrzení.`,
      `Potvrzení tam je, ale v seznamu chybí částky — před odesláním stejně musíš každou fakturu ručně kontrolovat. Snesitelné: jednou za měsíc se to zkontrolovat dá. Jsou důležitější věci.`
    ],
    [
      `Udělej vyhledávání, které samo chápe, co hledám.`,
      `Vyhledávání funguje, ale na dotaz „červené šaty“ ukáže jako první červenou konvici.`,
      `Ať vyhledávání nejdřív zohlední kategorii zboží a teprve pak barvu.`,
      `Šaty se najdou, ale překlepy už vyhledávání neodpouští: na dotaz „šatu“ — nula výsledků. Půjde to do backlogu: objevil se zajímavější nápad.`
    ],
    [
      `Přidej tmavý motiv.`,
      `Tmavý motiv je, ale grafy v něm zůstaly na bílém pozadí a oslňují.`,
      `Udělej grafy v tmavém motivu tmavé.`,
      `Grafy ztmavly, ale popisky os jsou teď tmavě šedé na černé — skoro nejsou vidět. Tmavý motiv v noci používá málokdo a ty už máš nový úkol.`
    ],
    [
      `Vyčisti testovací data v databázi.`,
      `Agent smazal produkční databázi, přestože mu bylo řečeno, ať na nic nesahá. A pak nahlásil: „Vše proběhlo úspěšně.“`,
      `Odděl testovací a produkční databázi. Do produkční jen s mým potvrzením.`,
      `Databáze jsou oddělené, ale noční report se teď staví z testovací a jsou v něm samí Jan Novák. Report počká do pondělí — teď je tu něco naléhavějšího.`
    ],
    [
      `Oprav platby.`,
      `„Máte naprostou pravdu! Opraveno,“ odpověděl agent. Platby dál padají na kartách s 3-D Secure.`,
      `Než napíšeš „opraveno“, vyzkoušej platbu testovací kartou s 3-D Secure.`,
      `Platby procházejí, ale účtenka do e-mailu teď chodí dvakrát. Zákazníci si nestěžují — takže se můžeš přepnout na další věc.`
    ],
    [
      `Připoj platby přes Stripe.`,
      `Tajný klíč skončil v kódu stránky. Někdo ho našel a vrátil peníze všem zákazníkům.`,
      `Dej klíče pryč z prohlížeče a drž je na serveru.`,
      `Klíče jsou schované, ale notifikace ze Stripe přestaly chodit: v nastavení zůstala stará adresa. Práce na pět minut — později. Teď myslíš na něco jiného.`
    ],
    [
      `Přidej export reportů do PDF.`,
      `Agent připojil knihovnu, která neexistuje, a build padá.`,
      `Používej jen knihovny, které v npm opravdu jsou a jsou udržované.`,
      `Export funguje, ale háčky a čárky v PDF vycházejí jako čtverečky: místo „ř“ a „ů“ krabičky. Dokud se reporty prohlížejí jen v prohlížeči, nehoří to, a v hlavě už máš další projekt.`
    ]
  ],
  wins: [
    [
      `Přidej do e-shopu platbu na splátky.`,
      `Splátky volí každý pátý zákazník, průměrná objednávka vzrostla. Drobnost: v potvrzovacím e-mailu chybí splátkový kalendář.`,
      `Přidej do e-mailu splátkový kalendář s daty a částkami.`,
      `E-maily odcházejí, zákazníci jsou spokojení. Účetní chtějí jednou měsíčně exportovat všechny splátky do Excelu, ale to není tak důležité jako nápad, který ti nedá pokoj.`
    ],
    [
      `Udělej WhatsApp bota pro objednávání klientů.`,
      `Bot funguje, rozpis je plný na týden dopředu. Jenže klienti zapomínají na návštěvu: každý desátý nepřijde.`,
      `Ať bot připomene termín den předem a dvě hodiny předem.`,
      `Nedostavení je třikrát méně. Klienti chtějí přesouvat termín přímo z připomínky — uděláme, ale později: už jsi vymyslel něco lepšího.`
    ],
    [
      `Udělej prodejní dashboard pro oddělení.`,
      `Dashboard se otevírá každé ráno, podle něj se počítá plnění plánu. Chybí srovnání se stejným měsícem loňského roku.`,
      `Přidej do grafů loňskou křivku.`,
      `Křivka tam je, vedení je spokojené. Chtějí ještě filtr podle regionů, ale to je drobnost proti tomu, co máš v plánu dál.`
    ],
    [
      `Přidej do SaaS tarif pro týmy.`,
      `Týmový tarif se kupuje ochotněji než osobní, měsíční tržby vzrostly o třetinu. Jenže vlastník týmu nemůže sám odebrat zaměstnance, který odešel — píše na podporu.`,
      `Dej vlastníkovi týmu možnost sám zvát a odebírat členy.`,
      `Funguje to, požadavků na podporu ubylo. Zákazníci se ptají, jestli jde převést vlastnictví na jiného člověka — zapíšeme, ale teď je tu zajímavější úkol.`
    ],
    [
      `Udělej mobilní verzi webu.`,
      `Z mobilů teď chodí polovina objednávek. Jedna drobnost: na iPhonu klávesnice zakrývá pole pro slevový kód.`,
      `Zařiď, ať se pole pro slevový kód posune nad klávesnici.`,
      `Kódy se zadávají, objednávky chodí. Marketing chce tlačítko „Sdílet produkt“ do messengerů, ale to počká: máš nový nápad.`
    ],
    [
      `Napoj e-shop na přepravní službu.`,
      `Doprava funguje, objednávek přibylo. Jenže stav zásilky zákazníci vidí jen na webu přepravce.`,
      `Ukazuj stav doručení přímo v objednávce v naší aplikaci.`,
      `Zákazníci vidí, kde je balík, hovorů na podporu ubylo. Zbývá přidat upozornění, když je kurýr na cestě, ale to počká — už myslíš na další věc.`
    ],
    [
      `Udělej nám CRM.`,
      `Čtyřčlenný tým vede v CRM všechny klienty, obchody se uzavírají rychleji. Chybí připomínky k opakovaným prodejům.`,
      `Ať CRM připomene napsat klientovi tři měsíce po obchodu.`,
      `Opakovaných prodejů přibylo. Obchodníci chtějí šablony e-mailů, ale to není tak důležité jako nová fíčura, kterou jsi vymyslel.`
    ],
    [
      `Přidej do služby AI asistenta pro zákazníky.`,
      `Zákazníci ho používají, podpoře se ulevilo. Jenže účet za tokeny roste rychleji než tržby.`,
      `Na časté otázky odpovídej z hotové databáze a AI zapojuj jen u složitých.`,
      `Náklady klesly čtyřikrát a odpovědi se nezhoršily. Chtějí analytiku častých otázek, ale s tou není kam spěchat — čeká tě důležitější úkol.`
    ]
  ]
});
