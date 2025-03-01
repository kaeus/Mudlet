<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="it" sourcelanguage="en">
  <context>
    <name>Discord</name>
    <message>
      <location filename="../src/discord.cpp" line="149"/>
      <source>via Mudlet</source>
      <translation>con Mudlet</translation>
    </message>
  </context>
  <context>
    <name>Feed</name>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/feed.cpp" line="275"/>
      <source>Too many redirects.</source>
      <translation>Troppi reindirizzamenti.</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/feed.cpp" line="284"/>
      <source>No data received from server</source>
      <translation>Nessun dato ricevuto dal server</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/feed.cpp" line="295"/>
      <source>Could not verify download integrity.</source>
      <translation>Impossibile verificare l'integrità del download.</translation>
    </message>
  </context>
  <context>
    <name>GLWidget</name>
    <message>
      <location filename="../src/glwidget.cpp" line="286"/>
      <source>You do not have a map yet - load one, or start mapping from scratch to begin.</source>
      <translation>Non hai ancora una mappa - per iniziare caricane una o creane una nuova.</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/glwidget.cpp" line="285"/>
      <source>You have a map loaded (%n room(s)), but Mudlet does not know where you are at the moment.</source>
      <translation>
        <numerusform>Hai una mappa caricata (%n stanza(e)), ma Mudlet non riesce a localizzare dove ti trovi.</numerusform>
        <numerusform>Hai una mappa caricata (%n stanza(e)), ma Mudlet non riesce a localizzare dove ti trovi.</numerusform>
      </translation>
    </message>
  </context>
  <context>
    <name>Host</name>
    <message>
      <location filename="../src/Host.cpp" line="459"/>
      <source>Text to send to the game</source>
      <translation>Testo da inviare al gioco</translation>
    </message>
    <message>
      <location filename="../src/Host.cpp" line="840"/>
      <source>[  OK  ]  - %1 Thanks a lot for using the Public Test Build!</source>
      <comment>%1 will be a random happy emoji</comment>
      <translation>[  OK  ]  - %1 Grazie mille per l'utilizzo della versione Pubblica di Test!</translation>
    </message>
    <message>
      <location filename="../src/Host.cpp" line="841"/>
      <source>[  OK  ]  - %1 Help us make Mudlet better by reporting any problems.</source>
      <comment>%1 will be a random happy emoji</comment>
      <translation>[  OK  ]  - %1 aiutaci a rendere Mudlet migliore segnalando eventuali problemi.</translation>
    </message>
    <message>
      <location filename="../src/Host.cpp" line="1640"/>
      <source>Unpacking module:
&quot;%1&quot;
please wait...</source>
      <translation>Decompressione del modulo in corso:
&quot;%1&quot;
attendere prego...</translation>
    </message>
    <message>
      <location filename="../src/Host.cpp" line="1642"/>
      <source>Unpacking package:
&quot;%1&quot;
please wait...</source>
      <translation>Decompressione del package in corso:
&quot;%1&quot;
attendere prego...</translation>
    </message>
    <message>
      <location filename="../src/Host.cpp" line="1646"/>
      <source>Unpacking</source>
      <translation>Decompressione</translation>
    </message>
    <message>
      <location filename="../src/Host.cpp" line="2250"/>
      <source>Playing %1</source>
      <translation>Gioca a %1</translation>
    </message>
    <message>
      <location filename="../src/Host.cpp" line="2252"/>
      <location filename="../src/Host.cpp" line="2258"/>
      <source>%1 at %2:%3</source>
      <comment>%1 is the game name and %2:%3 is game server address like: mudlet.org:23</comment>
      <translation>%1 a %2:%3</translation>
    </message>
    <message>
      <location filename="../src/Host.cpp" line="2638"/>
      <location filename="../src/Host.cpp" line="3570"/>
      <source>Map - %1</source>
      <translation>Mappa - %1</translation>
    </message>
    <message>
      <location filename="../src/Host.cpp" line="3586"/>
      <source>Pre-Map loading(3) report</source>
      <translation>Rapporto del pre-caricamento della Mappa(3)</translation>
    </message>
    <message>
      <location filename="../src/Host.cpp" line="3596"/>
      <source>Loading map(3) at %1 report</source>
      <translation>Rapporto del caricamento della mappa(3) a %1</translation>
    </message>
  </context>
  <context>
    <name>KeyUnit</name>
    <message>
      <location filename="../src/KeyUnit.cpp" line="333"/>
      <source>%1undefined key (code: 0x%2)</source>
      <comment>%1 is a string describing the modifier keys (e.g. &quot;shift&quot; or &quot;control&quot;) used with the key, whose &apos;code&apos; number, in %2 is not one that we have a name for. This is probably one of those extra keys around the edge of the keyboard that some people have.</comment>
      <translation>%1 chiave sconosciuta (codice: 0x%2)</translation>
    </message>
  </context>
  <context>
    <name>MapInfoContributorManager</name>
    <message>
      <location filename="../src/mapInfoContributorManager.cpp" line="116"/>
      <source>Area:%1%2 ID:%1%3 x:%1%4%1&lt;‑&gt;%1%5 y:%1%6%1&lt;‑&gt;%1%7 z:%1%8%1&lt;‑&gt;%1%9
</source>
      <comment>This text uses non-breaking spaces (as &apos;%1&apos;s, as Qt Creator cannot handlethem literally in raw strings) and non-breaking hyphens which are used to prevent the line being split at some places it might otherwise be; when translating please consider at which points the text may be divided to fit onto more than one line. %2 is the (text) name of the area, %3 is the number for it, %4 to %9 are pairs (min &lt;-&gt; max) of extremes for each of x,y and z coordinates</comment>
      <translation>Area:%1%2 ID:%1%3 x:%1%4%1&lt;b‑&gt;%1%5 y:%1%6%1&lt;b‑&gt;%1%7 z:%1%8%1&lt;b‑&gt;%1%9
</translation>
    </message>
    <message>
      <location filename="../src/mapInfoContributorManager.cpp" line="140"/>
      <source>Room Name: %1
</source>
      <translation>Nome Stanza: %1
</translation>
    </message>
    <message>
      <location filename="../src/mapInfoContributorManager.cpp" line="153"/>
      <source>Room%1ID:%1%2 Position%1on%1Map: (%3,%4,%5) ‑%1current player location
</source>
      <comment>This text uses non-breaking spaces (as &apos;%1&apos;s, as Qt Creator cannot handlethem literally in raw strings) and a non-breaking hyphen which are used to prevent the line being split at some places it might otherwise be; when translating please consider at which points the text may be divided to fit onto more than one line. This text is for when NO rooms are selected, %3 is the room number of, and %4-%6 are the x,y and z coordinates for, the current player&apos;s room.</comment>
      <translation>Stanza%1ID:%1%2 Posizione%1sulla%1Mappa: (%3,%4,%5) -%1stanza attuale del giocatore
</translation>
    </message>
    <message>
      <location filename="../src/mapInfoContributorManager.cpp" line="170"/>
      <source>Room%1ID:%1%2 Position%1on%1Map: (%3,%4,%5) ‑%1selected room
</source>
      <comment>This text uses non-breaking spaces (as &apos;%1&apos;s, as Qt Creator cannot handlethem literally in raw strings) and a non-breaking hyphen which are used to prevent the line being split at some places it might otherwise be; when translating please consider at which points the text may be divided to fit onto more than one line. This text is for when ONE room is selected, %3 is the room number of, and %4-%6 are the x,y and z coordinates for, the selected Room.</comment>
      <translation>Stanza%1ID:%1%2 Posizione%1sulla%1Mappa: (%3,%4,%5) -%1stanza selezionata
</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/mapInfoContributorManager.cpp" line="188"/>
      <source>Room%1ID:%1%2 Position%1on%1Map: (%3,%4,%5) ‑%1center of %n selected rooms
</source>
      <comment>This text uses non-breaking spaces (as &apos;%1&apos;s, as Qt Creator cannot handlethem literally in raw strings) and a non-breaking hyphen which are used to prevent the line being split at some places it might otherwise be; when translating please consider at which points the text may be divided to fit onto more than one line. This text is for when TWO or MORE rooms are selected; %1 is the room number for which %2-%4 are the x,y and z coordinates of the room nearest the middle of the selection. This room has the yellow cross-hairs. %n is the count of rooms selected and will ALWAYS be greater than 1 in this situation. It is provided so that non-English translations can select required plural forms as needed.</comment>
      <translation>
        <numerusform>Stanza%1ID:%1%2 Posizione%1sulla%1Mappa: (%3,%4,%5) -%1centrata su %n stanze selezionate
</numerusform>
        <numerusform>Stanza%1ID:%1%2 Posizione%1sulla%1Mappa: (%3,%4,%5) -%1centrata su %n stanze selezionate
</numerusform>
      </translation>
    </message>
  </context>
  <context>
    <name>QObject</name>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="142"/>
      <source>! %1</source>
      <translation>! %1</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="144"/>
      <source>! %1 is away (%2)</source>
      <translation>! %1 è lontano dalla tastiera (%2)</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="146"/>
      <source>! %1 is back</source>
      <translation>! %1 è tornato</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="153"/>
      <source>! invited %1 to %2</source>
      <translation>! ha invitato %1 su %2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="156"/>
      <source>! %2 invited to %3</source>
      <translation>! %2 ti ha invitato su %3</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="163"/>
      <source>! You have joined %1 as %2</source>
      <translation>! Ti sei unito a %1 come %2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="165"/>
      <source>! %1 has joined %2</source>
      <translation>! %1 si è unito a %2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="172"/>
      <source>! %1 kicked %2</source>
      <translation>! %1 ha respinto %2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="180"/>
      <source>! %1 mode is %2 %3</source>
      <translation>! %1 in modalità %2 %3</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="182"/>
      <source>! %1 sets mode %2 %3 %4</source>
      <translation>! %1 imposta la modalità %2 %3 %4</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="199"/>
      <source>[MOTD] %1%2</source>
      <translation>[MOTD] %1%2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="211"/>
      <source>! %1 has %2 users: %3</source>
      <translation>! %1 ha %2 utenti: %3</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="213"/>
      <source>! %1 has %2 users</source>
      <translation>! %1 ha %2 utenti</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="220"/>
      <source>! %1 has changed nick to %2</source>
      <translation>! %1 ha cambiato il nome in %2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="234"/>
      <source>! %1 replied in %2</source>
      <translation>! %1 risposto in %2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="237"/>
      <location filename="../src/ircmessageformatter.cpp" line="286"/>
      <source>! %1 time is %2</source>
      <translation>! Il tempo di %1 è %2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="240"/>
      <location filename="../src/ircmessageformatter.cpp" line="283"/>
      <source>! %1 version is %2</source>
      <translation>! La versione di %1 è %2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="256"/>
      <source>[%1%2] %3</source>
      <translation>[%1%2] %3</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="264"/>
      <source>&amp;lt;%1%2&amp;gt; [%3] %4</source>
      <translation>&amp;lt;%1%2&amp;gt; [%3] %4</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="278"/>
      <source>[INFO] %1</source>
      <translation>[INFO] %1</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="305"/>
      <location filename="../src/ircmessageformatter.cpp" line="331"/>
      <source>[ERROR] %1</source>
      <translation>[ERROR] %1</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="315"/>
      <source>[Channel URL] %1</source>
      <translation>[URL del canale] %1</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="324"/>
      <source>[%1] %2</source>
      <translation>[%1] %2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="338"/>
      <source>! %1 has left %2</source>
      <translation>! %1 ha abbandonato %2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="340"/>
      <source>! %1 has left %2 (%3)</source>
      <translation>! %1 ha abbandonato %2 (%3)</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="349"/>
      <source>! %1 replied in %2 seconds</source>
      <translation>! %1 ha risposto in %2 secondi</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="363"/>
      <source>* %1 %2</source>
      <translation>%1 %2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="369"/>
      <source>&lt;b&gt;&amp;lt;%1&amp;gt;&lt;/b&gt; %2</source>
      <translation>&lt;b&gt;&amp;lt;%1&amp;gt;&lt;/b&gt; %2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="378"/>
      <source>! %1 has quit</source>
      <translation>! %1 si è disconnesso</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="380"/>
      <source>! %1 has quit (%2)</source>
      <translation>! %1 si è disconnesso (%2)</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="388"/>
      <source>! no topic</source>
      <translation>! nessun argomento</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="397"/>
      <source>[TOPIC] %1</source>
      <translation>[TOPIC] %1</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="401"/>
      <source>! %2 cleared topic</source>
      <translation>! %2 argomento cancellato</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="404"/>
      <source>! %2 changed topic</source>
      <translation>! %2 argomento modificato</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="410"/>
      <source>? %2 %3 %4</source>
      <translation>? %2 %3 %4</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="417"/>
      <source>[WHOIS] %1 is %2@%3 (%4)</source>
      <translation>[WHOIS] %1 è %2@%3 (%4)</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="418"/>
      <source>[WHOIS] %1 is connected via %2 (%3)</source>
      <translation>[WHOIS] %1 si è connesso tramite %2 (%3)</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="419"/>
      <source>[WHOIS] %1 is connected since %2 (idle %3)</source>
      <translation>[WHOIS] %1 si è connesso da %2 (inattività %3)</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="421"/>
      <source>[WHOIS] %1 is away: %2</source>
      <translation>[WHOIS] %1 è lontano dalla tastiera: %2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="424"/>
      <source>[WHOIS] %1 is logged in as %2</source>
      <translation>[WHOIS] %1 ha effettuato il login come %2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="427"/>
      <source>[WHOIS] %1 is connected from %2</source>
      <translation>[WHOIS] %1 è connesso da %2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="430"/>
      <source>[WHOIS] %1 is using a secure connection</source>
      <translation>[WHOIS] %1 utilizza una connessione sicura</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="433"/>
      <source>[WHOIS] %1 is on %2</source>
      <translation>[WHOIS] %1 è su %2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="442"/>
      <source>[WHOWAS] %1 was %2@%3 (%4)</source>
      <translation>[WHOWAS] %1 era %2@%3 (%4)</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="443"/>
      <source>[WHOWAS] %1 was connected via %2 (%3)</source>
      <translation>[WHOWAS] %1 era collegato via %2 (%3)</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="445"/>
      <source>[WHOWAS] %1 was logged in as %2</source>
      <translation>[WHOWAS] %1 era registrato come %2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="453"/>
      <source>[WHO] %1 (%2)</source>
      <translation>[WHO] %1 (%2)</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="455"/>
      <source> - away</source>
      <translation> - assente</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="458"/>
      <source> - server operator</source>
      <translation> - operatore server</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="466"/>
      <source>%1s</source>
      <translation>%1s</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="473"/>
      <source>%1 days</source>
      <translation>%1 giorni</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="477"/>
      <source>%1 hours</source>
      <translation>%1 ore</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="481"/>
      <source>%1 mins</source>
      <translation>%1 minuti</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="483"/>
      <source>%1 secs</source>
      <translation>%1 secondi</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/io/baseplistparser.cpp" line="55"/>
      <source>Start element not found!</source>
      <translation>Elemento di partenza non trovato!</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/io/baseplistparser.cpp" line="67"/>
      <source>line %1: %2</source>
      <translation>riga %1: %2</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/io/baseplistparser.cpp" line="149"/>
      <source>Expected %1 while parsing</source>
      <translation>Previsto %1 durante l'analisi</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/io/jsonparser.cpp" line="145"/>
      <source>%1 @ line %2</source>
      <translation>%1 @ riga %2</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/io/keymapparser.cpp" line="82"/>
      <source>No data found!</source>
      <translation>Nessun dato trovato!</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/io/keymapparser.cpp" line="89"/>
      <source>Expected object in keymap
</source>
      <translation>Previsto oggetto nella mappa dei tasti
</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/io/keymapparser.cpp" line="129"/>
      <source>Invalid keysequence used %1
</source>
      <translation>Sequenza di tasti non valida, utilizzata %1
</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/models/texteditorkeymap.cpp" line="371"/>
      <source>Error parsing %1: %2 </source>
      <translation>Errore nell'analisi %1: %2 </translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/models/textgrammar.cpp" line="306"/>
      <source>Error reading file %1:%2</source>
      <translation>Errore nella lettura del file %1:%2</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/texteditorcontroller.cpp" line="435"/>
      <source>%1 ranges</source>
      <translation>%1 intervalli</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/texteditorcontroller.cpp" line="441"/>
      <source>Line %1, Column %2</source>
      <translation>Riga %1, colonna %2</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/texteditorcontroller.cpp" line="444"/>
      <source>, Offset %1</source>
      <translation>, Offset %1</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/texteditorcontroller.cpp" line="448"/>
      <source> | %1 chars selected</source>
      <translation> | %1 caratteri selezionati</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/texteditorcontroller.cpp" line="452"/>
      <source> | scope: </source>
      <translation> | ambito: </translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/texteditorcontroller.cpp" line="462"/>
      <source> (%1)</source>
      <translation> (%1)</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/views/texttheme.cpp" line="399"/>
      <source>Error parsing theme %1:%2</source>
      <translation>Errore nell'analisi del tema %1:%2</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/views/texttheme.cpp" line="404"/>
      <source>Error theme not found %1.</source>
      <translation>Errore tema non trovato %1.</translation>
    </message>
  </context>
  <context>
    <name>T2DMap</name>
    <message>
      <location filename="../src/T2DMap.cpp" line="2789"/>
      <source>Create a new room here</source>
      <translation>Crea una nuova stanza qui</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2962"/>
      <source>Change the properties of this custom line</source>
      <translation>Modificare le proprietà di questa riga personalizzata</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3193"/>
      <location filename="../src/T2DMap.cpp" line="4808"/>
      <source>Solid line</source>
      <translation>Linea continua</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3194"/>
      <location filename="../src/T2DMap.cpp" line="4809"/>
      <source>Dot line</source>
      <translation>Linea punteggiata</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3195"/>
      <location filename="../src/T2DMap.cpp" line="4810"/>
      <source>Dash line</source>
      <translation>Linea tratteggiata</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3196"/>
      <location filename="../src/T2DMap.cpp" line="4811"/>
      <source>Dash-dot line</source>
      <translation>Linea trattino-punto</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3197"/>
      <location filename="../src/T2DMap.cpp" line="4812"/>
      <source>Dash-dot-dot line</source>
      <translation>Linea trattino-punto-punto</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3485"/>
      <source>x coordinate (was %1):</source>
      <translation>coordinata x (era %1):</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3486"/>
      <source>y coordinate (was %1):</source>
      <translation>coordinata y (era %1):</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3487"/>
      <source>z coordinate (was %1):</source>
      <translation>coordinata z (era %1):</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3675"/>
      <source>Delete color</source>
      <comment>Deletes an environment colour</comment>
      <translation>Elimina il colore</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3693"/>
      <source>Define new color</source>
      <translation>Definisci un nuovo colore</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="4007"/>
      <source>%1 {count:%2}</source>
      <translation>%1 { count:%2}</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="1378"/>
      <location filename="../src/T2DMap.cpp" line="1499"/>
      <location filename="../src/T2DMap.cpp" line="2310"/>
      <location filename="../src/T2DMap.cpp" line="2326"/>
      <source>no text</source>
      <comment>Default text if a label is created in mapper with no text</comment>
      <translation>nessun testo</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="142"/>
      <source>ID</source>
      <comment>Room ID in the mapper widget</comment>
      <translation>ID</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="142"/>
      <source>Name</source>
      <comment>Room name in the mapper widget</comment>
      <translation>Nome</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="144"/>
      <source>&lt;p&gt;Click on a line to select or deselect that room number (with the given name if the rooms are named) to add or remove the room from the selection.  Click on the relevant header to sort by that method.  Note that the name column will only show if at least one of the rooms has a name.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Fai clic con il mouse su una linea per selezionare o deselezionare il numero di stanza (con il relativo nome se è impostato) per aggiungerla o rimuoverla dalla selezione.  Fai clic con il mouse sull'intestazione per ordinare le voci utilizzando quella colonna come riferimento.  La colonna nome viene mostrata solo se almeno una delle stanze ne ha uno impostato.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="602"/>
      <source>Mapper: Cannot find a path from %1 to %2 using known exits.</source>
      <translation>Mapper: Impossibile trovare un percorso da %1 a %2 utilizzando le uscite conosciute.</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="1253"/>
      <source>You do not have a map yet - load one, or start mapping from scratch to begin.</source>
      <translation>Non hai ancora una mappa - per iniziare caricane una o creane una nuova.</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/T2DMap.cpp" line="1252"/>
      <source>You have a map loaded (%n room(s)), but Mudlet does not know where you are at the moment.</source>
      <translation>
        <numerusform>Hai una mappa caricata (%n stanza(e)), ma Mudlet non riesce a localizzare dove ti trovi.</numerusform>
        <numerusform>Hai una mappa caricata (%n stanza(e)), ma Mudlet non riesce a localizzare dove ti trovi.</numerusform>
      </translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2244"/>
      <source>render time: %1S mO: (%2,%3,%4)</source>
      <comment>This is debug information that is not expected to be seen in release versions, %1 is a decimal time period and %2-%4 are the x,y and z coordinates at the center of the view (but y will be negative compared to previous room related ones as it represents the real coordinate system for this widget which has y increasing in a downward direction!)</comment>
      <translation>tempo di rendering: %1S mO: (%2,%3,%4)</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2316"/>
      <source>Text label or image label?</source>
      <comment>2D Mapper create label dialog text</comment>
      <translation>Etichetta testo o immagine?</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2317"/>
      <source>Text Label</source>
      <comment>2D Mapper create label dialog button</comment>
      <translation>Etichetta di Testo</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2318"/>
      <source>Image Label</source>
      <comment>2D Mapper create label dialog button</comment>
      <translation>Etichetta Immagine</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2322"/>
      <source>Enter label text.</source>
      <comment>2D Mapper create label dialog title/text</comment>
      <translation>Inserisci il testo dell'etichetta.</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2329"/>
      <source>Background color</source>
      <comment>2D Mapper create label color dialog title</comment>
      <translation>Colore di sfondo</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2330"/>
      <source>Foreground color</source>
      <comment>2D Mapper create label color dialog title</comment>
      <translation>Colore carattere</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2334"/>
      <source>Select image</source>
      <comment>2D Mapper create label file dialog title</comment>
      <translation>Seleziona immagine</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2341"/>
      <source>Draw label as background or on top of everything?</source>
      <comment>2D Mapper create label dialog text</comment>
      <translation>Disegnare l'etichetta come sfondo o in primo piano?</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2342"/>
      <source>Background</source>
      <comment>2D Mapper create label dialog button</comment>
      <translation>Sfondo</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2343"/>
      <source>Foreground</source>
      <comment>2D Mapper create label dialog button</comment>
      <translation>Colore carattere</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2585"/>
      <source>Drag to select multiple rooms or labels, release to finish...</source>
      <comment>2D Mapper big, bottom of screen help message</comment>
      <translation>Trascinare per selezionare più stanze o etichette, rilascia per finire...</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2689"/>
      <source>Undo</source>
      <comment>2D Mapper context menu (drawing custom exit line) item</comment>
      <translation>Annulla</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2690"/>
      <source>Undo last point</source>
      <comment>2D Mapper context menu (drawing custom exit line) item tooltip</comment>
      <translation>Annulla l'ultimo punto</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2697"/>
      <source>Properties</source>
      <comment>2D Mapper context menu (drawing custom exit line) item name (but not used as display text as that is set separately)</comment>
      <translation>Proprietà</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2699"/>
      <source>properties...</source>
      <comment>2D Mapper context menu (drawing custom exit line) item display text (has to be entered separately as the ... would get stripped off otherwise)</comment>
      <translation>proprietà...</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2700"/>
      <source>Change the properties of this line</source>
      <comment>2D Mapper context menu (drawing custom exit line) item tooltip</comment>
      <translation>Modifica le proprietà di questa linea</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2703"/>
      <source>Finish</source>
      <comment>2D Mapper context menu (drawing custom exit line) item</comment>
      <translation>Fine</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2704"/>
      <source>Finish drawing this line</source>
      <comment>2D Mapper context menu (drawing custom exit line) item tooltip</comment>
      <translation>Completare il disegno a questa linea</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2771"/>
      <source>Create new map</source>
      <comment>2D Mapper context menu (no map found) item</comment>
      <translation>Crea nuova mappa</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2774"/>
      <source>Load map</source>
      <comment>2D Mapper context menu (no map found) item</comment>
      <translation>Carica mappa</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2788"/>
      <source>Create room</source>
      <comment>Menu option to create a new room in the mapper</comment>
      <translation>Crea Stanza</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2795"/>
      <source>Move</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>Sposta</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2796"/>
      <source>Move room</source>
      <comment>2D Mapper context menu (room) item tooltip</comment>
      <translation>Sposta stanza</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2799"/>
      <source>Delete</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>Elimina</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2800"/>
      <source>Delete room</source>
      <comment>2D Mapper context menu (room) item tooltip</comment>
      <translation>Cancella Stanza</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2803"/>
      <source>Color</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>Colore</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2804"/>
      <source>Change room color</source>
      <comment>2D Mapper context menu (room) item tooltip</comment>
      <translation>Cambia colore stanza</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2807"/>
      <source>Spread</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>Allarga</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2808"/>
      <source>Increase map X-Y spacing for the selected group of rooms</source>
      <comment>2D Mapper context menu (room) item tooltip</comment>
      <translation>Aumentare le dimensioni X-Y della mappa per il gruppo selezionato di stanze</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2811"/>
      <source>Shrink</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>Riduci</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2812"/>
      <source>Decrease map X-Y spacing for the selected group of rooms</source>
      <comment>2D Mapper context menu (room) item tooltip</comment>
      <translation>Diminuire le dimensioni X-Y della mappa per il gruppo selezionato di stanze</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2815"/>
      <source>Lock</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>Blocca</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2816"/>
      <source>Lock room for speed walks</source>
      <comment>2D Mapper context menu (room) item tooltip</comment>
      <translation>Blocca camera per speedwalk</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2819"/>
      <source>Unlock</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>Sblocca</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2820"/>
      <source>Unlock room for speed walks</source>
      <comment>2D Mapper context menu (room) item tooltip</comment>
      <translation>Sblocca camera per speedwalk</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2823"/>
      <source>Weight</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>Peso</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2824"/>
      <source>Set room weight</source>
      <comment>2D Mapper context menu (room) item tooltip</comment>
      <translation>Impostare il peso della stanza</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2827"/>
      <source>Exits</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>Uscite</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2828"/>
      <source>Set room exits</source>
      <comment>2D Mapper context menu (room) item tooltip</comment>
      <translation>Imposta le uscite della Stanza</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2831"/>
      <source>Symbol</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>Simbolo</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2832"/>
      <source>Set one or more symbols or letters to mark special rooms</source>
      <comment>2D Mapper context menu (room) item tooltip</comment>
      <translation>Impostare uno o più simboli o lettere per contrassegnare stanze speciali</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2835"/>
      <source>Move to</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>Sposta in</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2836"/>
      <source>Move selected group to a given position</source>
      <comment>2D Mapper context menu (room) item tooltip</comment>
      <translation>Spostare il gruppo selezionato a una posizione specificata</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2839"/>
      <source>Area</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>Area</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2840"/>
      <source>Set room&apos;s area number</source>
      <comment>2D Mapper context menu (room) item tooltip</comment>
      <translation>Imposta il numero di area</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2843"/>
      <source>Custom exit line</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>Linea di uscita personalizzata</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2845"/>
      <source>Replace an exit line with a custom line</source>
      <comment>2D Mapper context menu (room) item tooltip (enabled state)</comment>
      <translation>Sostituire una linea di uscita con una linea personalizzata</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2849"/>
      <source>Custom exit lines are not shown and are not editable in grid mode</source>
      <comment>2D Mapper context menu (room) item tooltip (disabled state)</comment>
      <translation>Le linee di uscita personalizzate non vengono visualizzate e non sono modificabili in modalità griglia</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2853"/>
      <source>Create Label</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>Crea Etichetta</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2854"/>
      <source>Create labels to show text or images</source>
      <comment>2D Mapper context menu (room) item tooltip</comment>
      <translation>Creare etichette per visualizzare testo o immagini</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2873"/>
      <source>Set location</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>Imposta posizione</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2875"/>
      <source>Set player current location to here</source>
      <comment>2D Mapper context menu (room) item tooltip (enabled state)</comment>
      <translation>Setta qui la posizione attuale del giocatore</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2879"/>
      <source>Can only set location when exactly one room is selected</source>
      <comment>2D Mapper context menu (room) item tooltip (disabled state)</comment>
      <translation>È possibile impostare la posizione quando è selezionata solo una stanza</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2886"/>
      <source>Switch to editing mode</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>Passa alla modalità modifica</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2887"/>
      <source>Switch to viewing mode</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>Passa alla modalità visualizzazione</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2897"/>
      <source>Move</source>
      <comment>2D Mapper context menu (label) item</comment>
      <translation>Sposta</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2898"/>
      <source>Move label</source>
      <comment>2D Mapper context menu item (label) tooltip</comment>
      <translation>Sposta etichetta</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2900"/>
      <source>Delete</source>
      <comment>2D Mapper context menu (label) item</comment>
      <translation>Elimina</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2901"/>
      <source>Delete label</source>
      <comment>2D Mapper context menu (label) item tooltip</comment>
      <translation>Elimina etichetta</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2917"/>
      <source>Add point</source>
      <comment>2D Mapper context menu (custom line editing) item</comment>
      <translation>Aggiungi punto</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2924"/>
      <source>Divide segment by adding a new point mid-way along</source>
      <comment>2D Mapper context menu (custom line editing) item tooltip (enabled state)</comment>
      <translation>Dividere il segmento con l'aggiunta di un nuovo punto a metà strada</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2927"/>
      <source>Select a point first, then add a new point mid-way along the segment towards room</source>
      <comment>2D Mapper context menu (custom line editing) item tooltip (disabled state, i.e must do the suggested action first)</comment>
      <translation>Selezionare un punto prima, quindi aggiungere un nuovo punto a metà strada lungo il segmento verso la stanza</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2931"/>
      <source>Remove point</source>
      <comment>2D Mapper context menu (custom line editing) item</comment>
      <translation>Rimuovi punto</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2938"/>
      <source>Merge pair of segments by removing this point</source>
      <comment>2D Mapper context menu (custom line editing) item tooltip (enabled state but will be able to be done again on this item)</comment>
      <translation>Unire due segmenti rimuovendo questo punto</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2942"/>
      <source>Remove last segment by removing this point</source>
      <comment>2D Mapper context menu (custom line editing) item tooltip (enabled state but is the last time this action can be done on this item)</comment>
      <translation>Rimuovi l'ultimo segmento rimuovendo questo punto</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2947"/>
      <source>use &quot;delete line&quot; to remove the only segment ending in an editable point</source>
      <comment>2D Mapper context menu (custom line editing) item tooltip (disabled state this action can not be done again on this item but something else can be the quoted action &quot;delete line&quot; should match the translation for that action)</comment>
      <translation>utilizza &quot;elimina linea&quot; per rimuovere l'unico segmento che termina in un punto editabile</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2953"/>
      <source>Select a point first, then remove it</source>
      <comment>2D Mapper context menu (custom line editing) item tooltip (disabled state, user will need to do something before it can be used)</comment>
      <translation>Devi selezionare un punto prima di rimuoverlo</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2957"/>
      <source>Properties</source>
      <comment>2D Mapper context menu (custom line editing) item name (but not used as display text as that is set separately)</comment>
      <translation>Proprietà</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2961"/>
      <source>properties...</source>
      <comment>2D Mapper context menu (custom line editing) item display text (has to be entered separately as the ... would get stripped off otherwise</comment>
      <translation>proprietà...</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2965"/>
      <source>Delete line</source>
      <comment>2D Mapper context menu (custom line editing) item</comment>
      <translation>Elimina linea</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2966"/>
      <source>Delete all of this custom line</source>
      <comment>2D Mapper context menu (custom line editing) item tooltip</comment>
      <translation>Elimina tutte queste linee personalizzate</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3478"/>
      <source>Move the selection, centered on
the highlighted room (%1) to:</source>
      <comment>Use linefeeds as necessary to format text into a reasonable rectangle of text, %1 is a room number</comment>
      <translation>Spostare la selezione, centrata su
la stanza evidenziata (%1) a:</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3502"/>
      <source>OK</source>
      <comment>dialog (room(s) move) button</comment>
      <translation>OK</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3507"/>
      <source>Cancel</source>
      <comment>dialog (room(s) move) button</comment>
      <translation>Annulla</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3701"/>
      <source>OK</source>
      <comment>dialog (room(s) change color) button</comment>
      <translation>OK</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3706"/>
      <source>Cancel</source>
      <comment>dialog (room(s) change color) button</comment>
      <translation>Annulla</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3763"/>
      <source>Spread out rooms</source>
      <translation>Espandi le stanze</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3764"/>
      <source>Increase the spacing of
the selected rooms,
centered on the
highlighted room by a
factor of:</source>
      <translation>Aumenta la spaziatura delle
stanze selezionate,
centrato sulla stanza
evidenziata, di un fattore:</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3823"/>
      <source>Shrink in rooms</source>
      <translation>Riduci le stanze</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3824"/>
      <source>Decrease the spacing of
the selected rooms,
centered on the
highlighted room by a
factor of:</source>
      <translation>Riduci la spaziatura delle
stanze selezionate,
centrato sulla stanza
evidenziata, di un fattore:</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3952"/>
      <location filename="../src/T2DMap.cpp" line="3966"/>
      <location filename="../src/T2DMap.cpp" line="4016"/>
      <source>Enter room weight</source>
      <translation>Impostare il peso della stanza</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3953"/>
      <source>Enter new roomweight
(= travel time), minimum
(and default) is 1:</source>
      <comment>Use line feeds to format text into a reasonable rectangle.</comment>
      <translation>Immetti il nuovo peso stanza
(= tempo di viaggio), minimo
(predefinito) è 1:</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3967"/>
      <source>Enter new roomweight
(= travel time) for all
selected rooms, minimum
(and default) is 1 and
the only current value
used is:</source>
      <comment>Use line feeds to format text into a reasonable rectangle.</comment>
      <translation>Inserisci il nuovo peso della stanza
(= tempo di viaggio) per tutte le
stanze selezionate, minimo
(e predefinito) è 1.
Lunico valore corrente
utilizzato è:</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="4005"/>
      <source>%1 {count:%2, default}</source>
      <translation>%1 {count:%2, default}</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="4013"/>
      <source>1 {count 0, default}</source>
      <translation>1 {count 0, default}</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="4017"/>
      <source>Choose an existing
roomweight (= travel
time) from the list
(sorted by most commonly
used first) or enter a
new (positive) integer
value for all selected
rooms:</source>
      <comment>Use line feeds to format text into a reasonable rectangle.</comment>
      <translation>Seleziona un peso della
stanza (= tempo di viaggio)
dalla lista (ordinata in
base all'utilizzo) o inserisci
un nuovo numero (positivo)
da utilizzare come valore
per le stanze selezionate:</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="4066"/>
      <source>Load Mudlet map</source>
      <translation>Carica la Mappa di Mudlet</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="4068"/>
      <source>Mudlet map (*.dat);;Xml map data (*.xml);;Any file (*)</source>
      <comment>Do not change extensions (in braces) or the ;;s as they are used programmatically</comment>
      <translation>Mappa Mudlet (*.dat);;Mappa Xml (*.xml);;Tutti i file (*)</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="4955"/>
      <location filename="../src/T2DMap.cpp" line="4989"/>
      <source>Left-click to add point, right-click to undo/change/finish...</source>
      <comment>2D Mapper big, bottom of screen help message</comment>
      <translation>Click sinistro del mouse per aggiungere un punto, click destro per annulla/cambia/fine...</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="5000"/>
      <source>Left-click and drag a square for the size and position of your label</source>
      <comment>2D Mapper big, bottom of screen help message</comment>
      <translation>Premi con il tasto sinistro del mouse e trascina il riquadro per impostare dimensione e posizione dell'etichetta</translation>
    </message>
  </context>
  <context>
    <name>TAlias</name>
    <message>
      <location filename="../src/TAlias.cpp" line="132"/>
      <location filename="../src/TAlias.cpp" line="200"/>
      <source>[Alias Error:] %1 capture group limit exceeded, capture less groups.
</source>
      <translation>[ ERROR ] - %1 superato il limite dei gruppo di cattura nell'alias, cattura meno gruppi.
</translation>
    </message>
    <message>
      <location filename="../src/TAlias.cpp" line="269"/>
      <source>Error: in &quot;Pattern:&quot;, faulty regular expression, reason: &quot;%1&quot;.</source>
      <translation>Errore: &quot;Pattern:&quot; con espressione regolare non valida, motivo: &quot;%1&quot;.</translation>
    </message>
  </context>
  <context>
    <name>TArea</name>
    <message>
      <location filename="../src/TArea.cpp" line="376"/>
      <source>roomID=%1 does not exist, can not set properties of a non-existent room!</source>
      <translation>StanzaID=%1 non esiste, non è possibile impostare proprietà per una stanza non esistente!</translation>
    </message>
    <message>
      <location filename="../src/TArea.cpp" line="766"/>
      <source>no text</source>
      <comment>Default text if a label is created in mapper with no text</comment>
      <translation>nessun testo</translation>
    </message>
  </context>
  <context>
    <name>TCommandLine</name>
    <message>
      <location filename="../src/TCommandLine.cpp" line="661"/>
      <source>Add to user dictionary</source>
      <translation>Aggiungi al dizionario utente</translation>
    </message>
    <message>
      <location filename="../src/TCommandLine.cpp" line="663"/>
      <source>Remove from user dictionary</source>
      <translation>Rimuovi dal dizionario utente</translation>
    </message>
    <message>
      <location filename="../src/TCommandLine.cpp" line="667"/>
      <source>▼Mudlet▼ │ dictionary suggestions │ ▲User▲</source>
      <comment>This line is shown in the list of spelling suggestions on the profile&apos;s command-line context menu to clearly divide up where the suggestions for correct spellings are coming from.  The precise format might be modified as long as it is clear that the entries below this line in the menu come from the spelling dictionary that the user has chosen in the profile setting which we have bundled with Mudlet; the entries about this line are the ones that the user has personally added.</comment>
      <translation>▼ Mudlet ▼ │ suggerimenti dizionario │ ▲ Utente ▲</translation>
    </message>
    <message>
      <location filename="../src/TCommandLine.cpp" line="677"/>
      <source>▼System▼ │ dictionary suggestions │ ▲User▲</source>
      <comment>This line is shown in the list of spelling suggestions on the profile&apos;s command-line context menu to clearly divide up where the suggestions for correct spellings are coming from.  The precise format might be modified as long as it is clear that the entries below this line in the menu come from the spelling dictionary that the user has chosen in the profile setting which is provided as part of the OS; the entries about this line are the ones that the user has personally added.</comment>
      <translation>▼ Sistema ▼ │ suggerimenti dizionario │ ▲ Utente ▲</translation>
    </message>
    <message>
      <location filename="../src/TCommandLine.cpp" line="745"/>
      <source>no suggestions (system)</source>
      <comment>used when the command spelling checker using the selected system dictionary has no words to suggest</comment>
      <translation>nessun suggerimento (sistema)</translation>
    </message>
    <message>
      <location filename="../src/TCommandLine.cpp" line="772"/>
      <source>no suggestions (shared)</source>
      <comment>used when the command spelling checker using the dictionary shared between profile has no words to suggest</comment>
      <translation>nessun suggerimento (condiviso)</translation>
    </message>
    <message>
      <location filename="../src/TCommandLine.cpp" line="776"/>
      <source>no suggestions (profile)</source>
      <comment>used when the command spelling checker using the profile&apos;s own dictionary has no words to suggest</comment>
      <translation>nessun suggerimento (profilo)</translation>
    </message>
  </context>
  <context>
    <name>TConsole</name>
    <message>
      <location filename="../src/TConsole.cpp" line="113"/>
      <source>Debug Console</source>
      <translation>Console di Debug</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="771"/>
      <source>Save profile?</source>
      <translation>Salva Profilo?</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="771"/>
      <source>Do you want to save the profile %1?</source>
      <translation>Vuoi salvare il profilo %1?</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="784"/>
      <source>Couldn&apos;t save profile</source>
      <translation>Non e&apos; possibile salvare il profilo</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="784"/>
      <source>Sorry, couldn&apos;t save your profile - got the following error: %1</source>
      <translation>Spiacenti, non e&apos; possibile salvare il tuo profilo - errore: %1</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="1697"/>
      <source>System Message: %1</source>
      <translation>Messaggio di Sistema: %1</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="349"/>
      <source>Show Time Stamps.</source>
      <translation>Mostra Data / Ora.</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="361"/>
      <source>Record a replay.</source>
      <translation>Registra un replay.</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="372"/>
      <source>Start logging game output to log file.</source>
      <translation>Avvia il salvataggio dei messaggi inviati dal gioco nel file di log.</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="383"/>
      <source>&lt;i&gt;N:&lt;/i&gt; is the latency of the game server and network (aka ping, in seconds), &lt;br&gt;&lt;i&gt;S:&lt;/i&gt; is the system processing time - how long your triggers took to process the last line(s).</source>
      <translation>&lt;i&gt;N:&lt;/i&gt; è la latenza del server di gioco e della rete (anche detto ping, misurato in secondi), &lt;br&gt;&lt;i&gt;S:&lt;/i&gt; è il tempo di elaborazione - quanto tempo impiegato i tuoi trigger ad essere eseguiti sull'ultima linea ricevuta (misurato in secondi).</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="416"/>
      <source>Emergency Stop. Stops all timers and triggers.</source>
      <translation>Fermo di emergenza. Interrompe tutti i timer e i trigger.</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="432"/>
      <source>Search buffer.</source>
      <translation>Buffer di ricerca.</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="440"/>
      <source>Earlier search result.</source>
      <translation>Risultati di ricerca preliminari.</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="451"/>
      <source>Later search result.</source>
      <translation>Risultati di ricerca finali.</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="868"/>
      <source>Replay recording has started. File: %1</source>
      <translation>La registrazione del replay è iniziata. File: %1</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="871"/>
      <source>Replay recording has been stopped. File: %1</source>
      <translation>La registrazione del replay è stata fermata. File: %1</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="1850"/>
      <location filename="../src/TConsole.cpp" line="1889"/>
      <source>No search results, sorry!</source>
      <translation>Nessun risultato di ricerca!</translation>
    </message>
  </context>
  <context>
    <name>TEasyButtonBar</name>
    <message>
      <location filename="../src/TEasyButtonBar.cpp" line="70"/>
      <source>Easybutton Bar - %1 - %2</source>
      <translation>Barra Easybutton - %1 - %2</translation>
    </message>
  </context>
  <context>
    <name>TLuaInterpreter</name>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="9976"/>
      <source>Playing %1</source>
      <translation>Gioca a %1</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="12319"/>
      <location filename="../src/TLuaInterpreter.cpp" line="12340"/>
      <source>ERROR</source>
      <translation>ERROR</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="12320"/>
      <location filename="../src/TLuaInterpreter.cpp" line="12331"/>
      <source>object</source>
      <comment>object is the Mudlet alias/trigger/script, used in this sample message: object:&lt;Alias1&gt; function:&lt;cure_me&gt;</comment>
      <translation>object</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="12320"/>
      <location filename="../src/TLuaInterpreter.cpp" line="12331"/>
      <source>function</source>
      <comment>function is the Lua function, used in this sample message: object:&lt;Alias1&gt; function:&lt;cure_me&gt;</comment>
      <translation>funzione</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13804"/>
      <source>Some functions may not be available.</source>
      <translation>Alcune funzioni non saranno disponibili.</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13228"/>
      <source>No error message available from Lua</source>
      <translation>Nessun messaggio di errore disponibile da Lua</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13230"/>
      <source>Lua error: %1</source>
      <translation>Errore Lua: %1</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13232"/>
      <source>[ ERROR ] - Cannot find Lua module %1.%2%3%4</source>
      <comment>%1 is the name of the module;%2 will be a line-feed inserted to put the next argument on a new line;%3 is the error message from the lua sub-system;%4 can be an additional message about the expected effect (but may be blank).</comment>
      <translation>[ ERROR ] - Impossibile trovare il modulo Lua %1.%2%3%4</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13246"/>
      <source>[  OK  ]  - Lua module %1 loaded.</source>
      <comment>%1 is the name (may specify which variant) of the module.</comment>
      <translation>[  OK  ]  - Modulo Lua %1 caricato.</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13791"/>
      <source>Probably will not be able to access Mudlet Lua code.</source>
      <translation>Probabilmente non sarai in grado di utilizzare le funzioni Lua di Mudlet.</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13809"/>
      <source>Database support will not be available.</source>
      <translation>Il supporto ai database non è disponibile.</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13816"/>
      <source>utf8.* Lua functions won&apos;t be available.</source>
      <translation>Funzioni Lua utf8.* non disponibili.</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13822"/>
      <source>yajl.* Lua functions won&apos;t be available.</source>
      <translation>Funzioni Lua yajl.* non disponibili.</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="14003"/>
      <source>No error message available from Lua.</source>
      <translation>Nessun messaggio di errore disponibile da Lua.</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="14005"/>
      <source>Lua error: %1.</source>
      <translation>Errore Lua: %1.</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="14007"/>
      <source>[ ERROR ] - Cannot load code formatter, indenting functionality won&apos;t be available.
</source>
      <translation>[ ERROR ] - Impossibile caricare il modulo di formattazione codice, l'indentazione automatico non sarà disponibile.
</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="14084"/>
      <source>%1 (doesn&apos;t exist)</source>
      <comment>This file doesn&apos;t exist</comment>
      <translation>%1 (file non esistente)</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="14089"/>
      <source>%1 (isn&apos;t a file or symlink to a file)</source>
      <translation>%1 (non è un file o un collegamento simbolico ad un file)</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="14098"/>
      <source>%1 (isn&apos;t a readable file or symlink to a readable file)</source>
      <translation>%1 (non è un file leggibile o un collegamento simbolico ad un file leggibile)</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="14116"/>
      <source>%1 (couldn&apos;t read file)</source>
      <comment>This file could not be read for some reason (for example, no permission)</comment>
      <translation>%1 (impossibile leggere il file)</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="14122"/>
      <source>[  OK  ]  - Mudlet-lua API &amp; Geyser Layout manager loaded.</source>
      <translation>[  OK  ]  - Modulo Lua API &amp; Geyser Layout caricato.</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="14129"/>
      <source>[ ERROR ] - Couldn&apos;t find, load and successfully run LuaGlobal.lua - your Mudlet is broken!
Tried these locations:
%1</source>
      <translation>[ ERROR ] - Impossibile trovare, caricare e eseguire con successo LuaGlobal.lua - Mudlet è danneggiato!
Percorsi analizzati:
%1</translation>
    </message>
  </context>
  <context>
    <name>TMainConsole</name>
    <message>
      <location filename="../src/TMainConsole.cpp" line="161"/>
      <source>logfile</source>
      <comment>Must be a valid default filename for a log-file and is used if the user does not enter any other value (Ensure all instances have the same translation {2 of 2}).</comment>
      <translation>File di log</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="202"/>
      <source>Logging has started. Log file is %1
</source>
      <translation>La registrazione è iniziata. File di log è %1
</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="212"/>
      <source>Logging has been stopped. Log file is %1
</source>
      <translation>La registrazione è stata interrotta. File di log è %1
</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="242"/>
      <source>Mudlet MUD Client version: %1%2</source>
      <translation>Mudlet MUD Client versione: %1%2</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="244"/>
      <source>Mudlet, log from %1 profile</source>
      <translation>Mudlet, File di log del profilo %1</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="280"/>
      <location filename="../src/TMainConsole.cpp" line="302"/>
      <source>&apos;Log session starting at &apos;hh:mm:ss&apos; on &apos;dddd&apos;, &apos;d&apos; &apos;MMMM&apos; &apos;yyyy&apos;.</source>
      <comment>This is the format argument to QDateTime::toString(...) and needs to follow the rules for that function {literal text must be single quoted} as well as being suitable for the translation locale</comment>
      <translation>&apos;Log di sessione a partire &apos;hh:mm:ss&apos; su &apos;dddd&apos;, &apos;d&apos; &apos;MMMM&apos; &apos;yyyy&apos;.</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="307"/>
      <source>&lt;p&gt;Stop logging game output to log file.&lt;/p&gt;</source>
      <translation>&lt;bp&gt;Interrompi la registrazione dei dati ricevuti dal gioco sul file di log.&lt;b/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="311"/>
      <source>&apos;Log session ending at &apos;hh:mm:ss&apos; on &apos;dddd&apos;, &apos;d&apos; &apos;MMMM&apos; &apos;yyyy&apos;.</source>
      <comment>This is the format argument to QDateTime::toString(...) and needs to follow the rules for that function {literal text must be single quoted} as well as being suitable for the translation locale</comment>
      <translation>&apos;Log di sessione terminato a &apos;hh:mm:ss&apos; su &apos;dddd&apos;, &apos;d&apos; &apos;MMMM&apos; &apos;yyyy&apos;.</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="324"/>
      <source>&lt;p&gt;Start logging game output to log file.&lt;/p&gt;</source>
      <translation>&lt;bp&gt;Inizia la registrazione dei dati ricevuti dal gioco sul file di log.&lt;b/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="637"/>
      <source>Pre-Map loading(2) report</source>
      <translation>Rapporto pre-caricamento(2) del file di mappa</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="647"/>
      <source>Loading map(2) at %1 report</source>
      <translation>Rapporto caricamento(2) del file di mappa in %1</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1047"/>
      <source>User window - %1 - %2</source>
      <translation>Finestra Utente - %1 - %2</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1095"/>
      <source>N:%1 S:%2</source>
      <comment>The first argument &apos;N&apos; represents the &apos;N&apos;etwork latency; the second &apos;S&apos; the &apos;S&apos;ystem (processing) time</comment>
      <translation>N:%1 S:%2</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1102"/>
      <source>&lt;no GA&gt; S:%1</source>
      <comment>The argument &apos;S&apos; represents the &apos;S&apos;ystem (processing) time, in this situation the Game Server is not sending &quot;GoAhead&quot; signals so we cannot deduce the network latency...</comment>
      <translation>&lt;no GA&gt; S:%1</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1199"/>
      <source>Pre-Map loading(1) report</source>
      <translation>Rapporto del pre-caricamento della Mappa(1)</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1217"/>
      <source>Loading map(1) at %1 report</source>
      <translation>Rapporto del caricamento della mappa(1) a %1</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1219"/>
      <source>Loading map(1) &quot;%1&quot; at %2 report</source>
      <translation>Caricamento file di mappa (1) &quot;%1&quot; al report %2</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1263"/>
      <source>Pre-Map importing(1) report</source>
      <translation>Rapporto di pre-importazione mappa (1)</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1286"/>
      <source>[ ERROR ]  - Map file not found, path and name used was:
%1.</source>
      <translation>[ ERROR ] - Il file di mappa non trovato, il percorso e il nome file era:
%1.</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1292"/>
      <source>loadMap: bad argument #1 value (filename used: 
&quot;%1&quot; was not found).</source>
      <translation>loadMap: parametro errato #1 (nomefile utilizzato: 
&quot;%1&quot; non è stato trovato).</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1301"/>
      <source>[ INFO ]  - Map file located and opened, now parsing it...</source>
      <translation>[ INFO ]  - File di mappa trovato e aperto, analisi in corso...</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1308"/>
      <source>Importing map(1) &quot;%1&quot; at %2 report</source>
      <translation>Importazione file di mappa (1) &quot;%1&quot; al report %2</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1311"/>
      <source>[ INFO ]  - Map file located but it could not opened, please check permissions on:&quot;%1&quot;.</source>
      <translation>[ INFO ]  - File di mappa localizzato, ma non è stato possibile aprirlo, controllare le autorizzazioni su:&quot;%1&quot;.</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1314"/>
      <source>loadMap: bad argument #1 value (filename used: 
&quot;%1&quot; could not be opened for reading).</source>
      <translation>loadMap: parametro errato #1 (nomefile utilizzato: 
&quot;%1&quot; non può essere aperto in lettura).</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1338"/>
      <source>[ INFO ]  - Map reload request received from system...</source>
      <translation>[ INFO ]  - Richiesta di ricarica della mappa ricevuta dal sistema...</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1343"/>
      <source>[  OK  ]  - ... System Map reload request completed.</source>
      <translation>[  OK  ]  - ... Richiesta di ricarica mappa completata.</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1345"/>
      <source>[ WARN ]  - ... System Map reload request failed.</source>
      <translation>[ WARN ] - ... Caricamento mappa di sistema non riuscita.</translation>
    </message>
  </context>
  <context>
    <name>TMap</name>
    <message>
      <location filename="../src/TMap.cpp" line="210"/>
      <source>RoomID=%1 does not exist, can not set AreaID=%2 for non-existing room!</source>
      <translation>StanzaID=%1 non esiste, non posso impostare AreaID=%2 su una stanza non esistente!</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="221"/>
      <source>AreaID=%2 does not exist, can not set RoomID=%1 to non-existing area!</source>
      <translation>AreaID=%2 non esiste, non posso impostare StanzaID=%1 su area non esistente!</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="469"/>
      <source>[ INFO ] - CONVERTING: old style label, areaID:%1 labelID:%2.</source>
      <translation>[ INFO ] - CONVERSIONE: vecchia etichetta, AreaID:%1 LabelID:%2.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="472"/>
      <source>[ INFO ] - Converting old style label id: %1.</source>
      <translation>[ INFO ] - Conversione vecchia etichetta labelID: %1.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="477"/>
      <source>[ WARN ] - CONVERTING: cannot convert old style label in area with id: %1,  label id is: %2.</source>
      <translation>[ WARN ] - CONVERSIONE: non è possibile convertire la vecchia etichetta nell'area con AreaID: %1, LabelID: %2.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="480"/>
      <source>[ WARN ] - CONVERTING: cannot convert old style label with id: %1.</source>
      <translation>[ WARN ] - CONVERSIONE: non è possibile convertire la vecchia etichetta con labelID: %1.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="509"/>
      <source>[  OK  ]  - Auditing of map completed (%1s). Enjoy your game...</source>
      <translation>[  OK  ]  - Controllo della mappa completato (%1s). Buon divertimento...</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="516"/>
      <source>[  OK  ]  - Map loaded successfully (%1s).</source>
      <translation>[  OK  ]  - Mappa caricata correttamente (%1s).</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="987"/>
      <source>n</source>
      <comment>This translation converts the direction that DIR_NORTH codes for to a direction string that the game server will accept!</comment>
      <translation>n</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="988"/>
      <source>ne</source>
      <comment>This translation converts the direction that DIR_NORTHEAST codes for to a direction string that the game server will accept!</comment>
      <translation>ne</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="989"/>
      <source>e</source>
      <comment>This translation converts the direction that DIR_EAST codes for to a direction string that the game server will accept!</comment>
      <translation>e</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="990"/>
      <source>se</source>
      <comment>This translation converts the direction that DIR_SOUTHEAST codes for to a direction string that the game server will accept!</comment>
      <translation>se</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="991"/>
      <source>s</source>
      <comment>This translation converts the direction that DIR_SOUTH codes for to a direction string that the game server will accept!</comment>
      <translation>s</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="992"/>
      <source>sw</source>
      <comment>This translation converts the direction that DIR_SOUTHWEST codes for to a direction string that the game server will accept!</comment>
      <translation>so</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="993"/>
      <source>w</source>
      <comment>This translation converts the direction that DIR_WEST codes for to a direction string that the game server will accept!</comment>
      <translation>o</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="994"/>
      <source>nw</source>
      <comment>This translation converts the direction that DIR_NORTHWEST codes for to a direction string that the game server will accept!</comment>
      <translation>no</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="995"/>
      <source>up</source>
      <comment>This translation converts the direction that DIR_UP codes for to a direction string that the game server will accept!</comment>
      <translation>alto</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="996"/>
      <source>down</source>
      <comment>This translation converts the direction that DIR_DOWN codes for to a direction string that the game server will accept!</comment>
      <translation>basso</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="997"/>
      <source>in</source>
      <comment>This translation converts the direction that DIR_IN codes for to a direction string that the game server will accept!</comment>
      <translation>dentro</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="998"/>
      <source>out</source>
      <comment>This translation converts the direction that DIR_OUT codes for to a direction string that the game server will accept!</comment>
      <translation>fuori</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1037"/>
      <source>[ ALERT ] - Saving map in a format {%1} that is different than the one it was
loaded as {%2}. This may be an issue if you want to share the resulting
map with others relying on the original format.</source>
      <translation>[ ALERT ] - Salvataggio del file di mappa nel formato {%1} diverso da quello
di caricamento {%2}. Questo potrebbe generare dei problemi se si desidera
condividere la mappa con altri utenti che utilizzano il formato originale.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="187"/>
      <source>[MAP ERROR:]%1
</source>
      <translation>[ MAP ERROR ] %1
</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="48"/>
      <source>Default Area</source>
      <translation>Area Predefinita</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="49"/>
      <source>Unnamed Area</source>
      <translation>Area Senza Nome</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="439"/>
      <source>[ INFO ]  - Map audit starting...</source>
      <translation>[ INFO ]  - Controllo mappa iniziato...</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1021"/>
      <source>[ ERROR ] - The format {%1} you are trying to save the map with is too new
for this version of Mudlet. Supported are only formats up to version {%2}.</source>
      <translation>[ ERROR ] - Il formato di salvataggio del file di mappa {%1} è troppo recente
per questa versione di Mudlet. Sono supportati formati fino alla versione {%2}.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1047"/>
      <source>[ WARN ]  - Saving map in a format {%1} different from the
recommended format {%2} for this version of Mudlet.</source>
      <translation>[ WARN ] - Salvataggio del file di mappa nel formato {%1} diverso
da quello raccomandato {%2} per questa versione di Mudlet.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1398"/>
      <location filename="../src/TMap.cpp" line="1753"/>
      <source>[ ERROR ] - Unable to open (for reading) map file: &quot;%1&quot;!</source>
      <translation>[ ERROR ] - Impossibile aprire (in lettura) il file di mappa: &quot;%1&quot;!</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1420"/>
      <source>[ ERROR ] - Map file is too new, its file format (%1) is higher than this version of
Mudlet can handle (%2)!  The file is:
&quot;%3&quot;.</source>
      <translation>[ ERROR ] - Il file di mappa è troppo recente, il formato (%1) è superiore a quello gestibile da questa versione di Mudlet (%2)!  Il file di mappa è:
&quot;%3&quot;.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1427"/>
      <source>[ INFO ]  - You will need to upgrade your Mudlet or find a map file saved in an
older format.</source>
      <translation>[ INFO ]  - Devi aggiornare Mudlet o trovare un file di mappa salvato in un formato precedente.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1434"/>
      <source>[ ALERT ] - Map file is really old, its file format (%1) is so ancient that
this version of Mudlet may not gain enough information from
it but it will try!  The file is: &quot;%2&quot;.</source>
      <translation>[ ALERT ] - Il file di mappa è davvero vecchio, la sua versione (%1) è così datato che
questa versione di Mudlet potrebbe non avere informazioni sufficienti per il caricamento
ma verrà effettuato un tentativo!  Il file è: &quot;%2&quot;.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1441"/>
      <source>[ INFO ]  - You might wish to donate THIS map file to the Mudlet Museum!
There is so much data that it DOES NOT have that you could be
better off starting again...</source>
      <translation>[ INFO ]  - Potresti donare questa mappa al Museo di Mudlet!
Ci sono così tanti dati MANCANTI che forse è meglio iniziare da capo ...</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1450"/>
      <source>[ INFO ]  - Reading map (format version:%1) file:
&quot;%2&quot;,
please wait...</source>
      <translation>[ INFO ]  - Leggo file di mappa (versione:%1):
&quot;%2&quot;,
attendere...</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1451"/>
      <source>[ INFO ]  - Reading map (format version:%1) file: &quot;%2&quot;.</source>
      <translation>[ INFO ]  - Leggo file di mappa (versione:%1): &quot;%2&quot;.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1600"/>
      <source>[ INFO ]  - Default (reset) area (for rooms that have not been assigned to an
area) not found, adding reserved -1 id.</source>
      <translation>[ INFO ]  - Area predefinita (reset) (per le stanze che non sono state assegnate
ad una zona) non trovata. Aggiungo l'Area ID riservato -1.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1694"/>
      <source>[ INFO ]  - Successfully read the map file (%1s), checking some
consistency details...</source>
      <translation>[ INFO ]  - File di mappa letto con successo (%1s), verifico la coerenza di alcuni dati...
...</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1709"/>
      <source>No map found. Would you like to download the map or start your own?</source>
      <translation>Nessuna mappa trovata. Vuoi scaricare la mappa o iniziarne una nuova?</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1710"/>
      <source>Download the map</source>
      <translation>Scarica la mappa</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1711"/>
      <source>Start my own</source>
      <translation>Inizia la mia mappa</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1769"/>
      <source>[ INFO ]  - Checking map file: &quot;%1&quot;, format version:%2...</source>
      <translation>[ INFO ]  - Controllo del file di mappa: &quot;%1&quot;, versione:%2...</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2157"/>
      <source>Map issues</source>
      <translation>Errori mappa</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2164"/>
      <source>Area issues</source>
      <translation>Errori area</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2170"/>
      <source>Area id: %1 &quot;%2&quot;</source>
      <translation>AreaID: %1 &quot;%2&quot;</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2172"/>
      <source>Area id: %1</source>
      <translation>ID Area: %1</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2181"/>
      <source>Room issues</source>
      <translation>Errori camera</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2188"/>
      <source>Room id: %1 &quot;%2&quot;</source>
      <translation>StanzaID: %1 &quot;%2&quot;</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2190"/>
      <source>Room id: %1</source>
      <translation>ID Stanza: %1</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2200"/>
      <source>End of report</source>
      <translation>Fine Rapporto</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2206"/>
      <source>[ ALERT ] - At least one thing was detected during that last map operation
that it is recommended that you review the most recent report in
the file:
&quot;%1&quot;
- look for the (last) report with the title:
&quot;%2&quot;.</source>
      <translation>[ ALERT ] - Ho rilevato almeno un problema durante le ultime operazioni sul file
di mappa. Consiglio di esaminare il report più recente nel file:
&quot;%1&quot;
- ricerca il (ultimo) report dal titolo:
&quot;%2&quot;.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2214"/>
      <source>[ INFO ]  - The equivalent to the above information about that last map
operation has been saved for review as the most recent report in
the file:
&quot;%1&quot;
- look for the (last) report with the title:
&quot;%2&quot;.</source>
      <translation>[ INFO ]  - Ho salvato un riepilogo degli messaggi relativi all'ultimo file di mappa.
Consiglio di esaminare il report più recente nel file:
&quot;%1&quot;
- ricerca il (ultimo) report dal titolo:
&quot;%2&quot;.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2270"/>
      <source>[ ERROR ] - Unable to use or create directory to store map.
Please check that you have permissions/access to:
&quot;%1&quot;
and there is enough space. The download operation has failed.</source>
      <translation>[ ERROR ] - Impossibile usare o creare la cartella per memorizzare i file di mappa.
Verifica di disporre dei permessi di accesso per:
&quot;%1&quot;
e che ci sia sufficiente spazio disco. L'operazione di download è fallita.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2296"/>
      <source>[ INFO ]  - Map download initiated, please wait...</source>
      <translation>[ INFO ]  - Download del file di mappa avviato, attendere prego...</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2307"/>
      <source>Map download</source>
      <comment>This is a title of a progress window.</comment>
      <translation>Download mappa</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2370"/>
      <source>Map import</source>
      <comment>This is a title of a progress dialog.</comment>
      <translation>Importa mappa</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2670"/>
      <location filename="../src/TMap.cpp" line="3141"/>
      <source>Exporting JSON map data from %1
Areas: %2 of: %3   Rooms: %4 of: %5   Labels: %6 of: %7...</source>
      <translation>Esportazione dati mappa JSON in %1
Aree: %2 di: %3   Stanze: %4 di: %5   Etichette: %6 di: %7...</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2685"/>
      <source>Map JSON export</source>
      <comment>This is a title of a progress window.</comment>
      <translation>Esporta mappa JSON</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2820"/>
      <source>Exporting JSON map file from %1 - writing data to file:
%2 ...</source>
      <translation>Esportazione file mappa JSON da %1 - scrittura file:
%2...</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2907"/>
      <source>Map JSON import</source>
      <comment>This is a title of a progress window.</comment>
      <translation>Importa mappa JSON</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2892"/>
      <location filename="../src/TMap.cpp" line="3151"/>
      <source>Importing JSON map data to %1
Areas: %2 of: %3   Rooms: %4 of: %5   Labels: %6 of: %7...</source>
      <translation>Importa dati mappa JSON in %1
Aree: %2 di: %3   Stanze: %4 di: %5   Etichette: %6 di: %7...</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2306"/>
      <location filename="../src/TMap.cpp" line="2679"/>
      <location filename="../src/TMap.cpp" line="2901"/>
      <source>Abort</source>
      <translation>Annulla</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2304"/>
      <source>Downloading map file for use in %1...</source>
      <comment>%1 is the name of the current Mudlet profile</comment>
      <translation>Download del file di mappa da utilizzare in %1...</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2338"/>
      <source>loadMap: unable to perform request, a map is already being downloaded or
imported at user request.</source>
      <translation>loadMap: impossibile eseguire la richiesta, una mappa è già stata scaricata o
importata su richiesta dell'utente.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2369"/>
      <source>Importing XML map file for use in %1...</source>
      <translation>Importazione del file di mappa XML da utilizzare in %1...</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2397"/>
      <source>loadMap: failure to import XML map file, further information may be available
in main console!</source>
      <translation>loadMap: non è stato possibile importare il file di mappa XML, ulteriori informazioni sono disponibili
nella finestra principale!</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2432"/>
      <source>[ ALERT ] - Map download was canceled, on user&apos;s request.</source>
      <translation>[ ALERT ] - Il download del file di mappa è stato annullato su richiesta dell'utente.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2451"/>
      <source>[ ERROR ] - Map download encountered an error:
%1.</source>
      <translation>[ ERROR ] - Il download del file di mappa ha generato un errore:
%1.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2482"/>
      <source>[ ALERT ] - Map download failed, error reported was:
%1.</source>
      <translation>[ ALERT ] - Download del file di mappa non riuscito, l'errore generato era:
%1.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2490"/>
      <source>[ ALERT ] - Map download failed, unable to open destination file:
%1.</source>
      <translation>[ ALERT ] - Download file di mappa non riuscito, impossibile aprire il file di destinazione:
%1.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2495"/>
      <source>[ ALERT ] - Map download failed, unable to write destination file:
%1.</source>
      <translation>[ALERT] - Download del file di mappa non riuscito, impossibile scrivere il file di destinazione:
%1.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2508"/>
      <location filename="../src/TMap.cpp" line="2525"/>
      <source>[ INFO ]  - ... map downloaded and stored, now parsing it...</source>
      <translation>[ INFO ]  - File di mappa scaricato e salvato, analisi in corso...</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2516"/>
      <location filename="../src/TMap.cpp" line="2551"/>
      <source>[ ERROR ] - Map download problem, failure in parsing destination file:
%1.</source>
      <translation>[ ERROR ] - Problemi con il download del file di mappa, impossibile analizzare il file di destinazione:
%1.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2556"/>
      <source>[ ERROR ] - Map download problem, unable to read destination file:
%1.</source>
      <translation>[ ERROR ] - Problemi con il download dei file di mappa, impossibile leggere il file di destinazione:
%1.</translation>
    </message>
  </context>
  <context>
    <name>TRoom</name>
    <message>
      <location filename="../src/TRoom.cpp" line="86"/>
      <location filename="../src/TRoom.cpp" line="971"/>
      <source>North</source>
      <translation>Nord</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="87"/>
      <source>North-east</source>
      <translation>Nord-est</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="88"/>
      <source>North-west</source>
      <translation>Nord-ovest</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="89"/>
      <location filename="../src/TRoom.cpp" line="1013"/>
      <source>South</source>
      <translation>Sud</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="90"/>
      <source>South-east</source>
      <translation>Sud-est</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="91"/>
      <source>South-west</source>
      <translation>Sud-ovest</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="92"/>
      <location filename="../src/TRoom.cpp" line="1055"/>
      <source>East</source>
      <translation>Est</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="93"/>
      <location filename="../src/TRoom.cpp" line="1069"/>
      <source>West</source>
      <translation>Ovest</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="94"/>
      <location filename="../src/TRoom.cpp" line="1083"/>
      <source>Up</source>
      <translation>Alto</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="95"/>
      <location filename="../src/TRoom.cpp" line="1097"/>
      <source>Down</source>
      <translation>Basso</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="96"/>
      <location filename="../src/TRoom.cpp" line="1111"/>
      <source>In</source>
      <translation>Entra</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="97"/>
      <location filename="../src/TRoom.cpp" line="1125"/>
      <source>Out</source>
      <translation>Esci</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="98"/>
      <source>Other</source>
      <translation>Altro</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="100"/>
      <source>Unknown</source>
      <translation>Sconosciuto</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="311"/>
      <source>No area created!  Requested area ID=%1. Note: Area IDs must be &gt; 0</source>
      <translation>Nessuna area creata!  Richiesto AreaID=%1. Nota: AreaID deve essere &gt; 0</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="333"/>
      <source>Warning: When setting the Area for Room (Id: %1) it did not have a current area!</source>
      <translation>[ WARN ] - Impossibile impostare l'Area per la StanzaID %1, non è stata selezionata un'area!</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="985"/>
      <source>Northeast</source>
      <translation>Nord-est</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="999"/>
      <source>Northwest</source>
      <translation>Nord-ovest</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1027"/>
      <source>Southeast</source>
      <translation>Sud-est</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1041"/>
      <source>Southwest</source>
      <translation>Sud-ovest</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1146"/>
      <source>[ WARN ]  - In room id:%1 removing invalid (special) exit to %2 {with no name!}</source>
      <translation>[ WARN ] - Rimossa l'uscita (speciale) non valida nella StanzaID %1 verso %2 {senza nome!}</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1150"/>
      <source>[ WARN ]  - Room had an invalid (special) exit to %1 {with no name!} it was removed.</source>
      <translation>[ WARN ] - La stanza aveva un'uscita (speciale) non valida verso %1 {senza nome!}, è stato rimossa.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1159"/>
      <source>[ INFO ]  - In room with id: %1 correcting special exit &quot;%2&quot; that
was to room with an exit to invalid room: %3 to now go
to: %4.</source>
      <translation>[ INFO ]  - Nella stanza con id: %1 ho corretto l'uscita speciale &quot;%2&quot; che
puntava ad un'uscita di una stanza non valida: %3 ora va a %4.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1169"/>
      <source>[ INFO ]  - Room needed correcting of special exit &quot;%1&quot; that was to room with an exit to invalid room: %2 to now go to: %3.</source>
      <translation>[ INFO ]  - Nella stanza ho corretto l'uscita speciale &quot;%1&quot; che puntava ad un'uscita di una stanza non valida: %2 ora va a %3.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1194"/>
      <source>[ WARN ]  - Room with id: %1 has a special exit &quot;%2&quot; with an
exit to: %3 but that room does not exist.  The exit will
be removed (but the destination room id will be stored in
the room user data under a key:
&quot;%4&quot;).</source>
      <translation>[ WARN ]  - Nella stanza con id: %1 l'uscita speciale &quot;%2&quot; punta ad una stanza
non valida: %3 che non esiste.  L'uscita sarà rimossa (lo Stanza ID di destinazione
sarà memorizzato nei dati utente della stanza con la chiave:
&quot;%4&quot;).</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1207"/>
      <source>[ WARN ]  - Room has a special exit &quot;%1&quot; with an exit to: %2 but that room does not exist.  The exit will be removed (but the destination room id will be stored in the room user data under a key:&quot;%3&quot;).</source>
      <translation>[ WARN ]  - La stanza ha un uscita speciale &quot;%1&quot; che punta a: %2, ma la destinazione non esiste. L'uscita sarà rimossa (lo Stanza ID di destinazione sarà memorizzato nei dati utente della stanza con la chiave:
&quot;%3&quot;).</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1246"/>
      <source>[ INFO ]  - In room with id: %1 special exit &quot;%2&quot;
that was to room with an invalid room: %3 that does not exist.
The exit will be removed (the bad destination room id will be stored in the
room user data under a key:
&quot;%4&quot;).</source>
      <translation>[ INFO ]  - Nella stanza con id: %1 l'uscita &quot;%2&quot;
punta ad una stanza non valida: %3 che non esiste.
L'uscita sarà rimossa (lo Stanza ID di destinazione sarà memorizzato
nei dati utente della stanza con la chiave:
&quot;%4&quot;).</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1259"/>
      <source>[ INFO ]  - Room had special exit &quot;%1&quot; that was to room with an invalid room: %2 that does not exist.  The exit will be removed (the bad destination room id will be stored in the room user data under a key:&quot;%3&quot;).</source>
      <translation>[ INFO ]  - La stanza ha un uscita speciale &quot;%1&quot; che punta a: %2, ma la destinazione non esiste. L'uscita sarà rimossa (lo Stanza ID di destinazione sarà memorizzato nei dati utente della stanza con la chiave:
&quot;%3&quot;).</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1292"/>
      <source>%1 {none}</source>
      <translation>%1 {none}</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1295"/>
      <source>%1 (open)</source>
      <translation>%1 (aperto)</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1298"/>
      <source>%1 (closed)</source>
      <translation>%1 (chiuso)</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1301"/>
      <source>%1 (locked)</source>
      <translation>%1 (bloccato)</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1304"/>
      <source>%1 {invalid}</source>
      <translation>%1 {invalid}</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1308"/>
      <source>[ INFO ]  - In room with id: %1 found one or more surplus door items that were removed:
%2.</source>
      <translation>[ INFO ]  - Nella stanza con id: %1 ho trovato uno o più porte in surplus che sono
state rimosse: %2.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1315"/>
      <source>[ INFO ]  - Room had one or more surplus door items that were removed:%1.</source>
      <translation>[ INFO ]  - La stanza aveva una o più porte in eccesso che sono state rimosse:%1.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1331"/>
      <source>[ INFO ]  - In room with id: %1 found one or more surplus weight items that were removed:
%2.</source>
      <translation>[ INFO ]  - Nella stanza con id: %1 ho trovato uno o più pesi per le uscite in surplus che
sono stati rimossi: %2.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1338"/>
      <source>[ INFO ]  - Room had one or more surplus weight items that were removed: %1.</source>
      <translation>[ INFO ]  - La stanza aveva una o più pesi in eccesso sulle uscite che sono state rimosse:%1.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1354"/>
      <source>[ INFO ]  - In room with id: %1 found one or more surplus exit lock items that were removed:
%2.</source>
      <translation>[ INFO ]  - Nella stanza con id: %1 ho trovato una o più uscite bloccate in surplus che
sono state rimosse: %2.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1361"/>
      <source>[ INFO ]  - Room had one or more surplus exit lock items that were removed: %1.</source>
      <translation>[ INFO ]  - La stanza aveva una o più uscite bloccate in surplus che sono state rimosse: %1.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1440"/>
      <source>[ INFO ]  - In room with id: %1 found one or more surplus custom line elements that
were removed: %2.</source>
      <translation>[ INFO ]  - Nella stanza con id: %1 ho trovato una o più linee personalizzate in surplus che
sono state rimosse: %2.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1446"/>
      <source>[ INFO ]  - Room had one or more surplus custom line elements that were removed: %1.</source>
      <translation>[ INFO ]  - La stanza aveva una o più linee personalizzate in surplus che sono state rimosse: %1.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1469"/>
      <source>[ INFO ]  - In room with id: %1 correcting exit &quot;%2&quot; that was to room with
an exit to invalid room: %3 to now go to: %4.</source>
      <translation>[ INFO ]  - Nella stanza con id: %1 ho corretto l'uscita &quot;%2&quot; che
puntava ad un'uscita di una stanza non valida: %3 ora va a %4.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1478"/>
      <source>[ INFO ]  - Correcting exit &quot;%1&quot; that was to invalid room id: %2 to now go to: %3.</source>
      <translation>[ INFO ]  - Ho corretto l'uscita &quot;%1&quot; che puntava alla Stanza ID: %2. Ora va alla: %3.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1489"/>
      <source>[ WARN ]  - Room with id: %1 has an exit &quot;%2&quot; to: %3 but that room
does not exist.  The exit will be removed (but the destination room
Id will be stored in the room user data under a key:
&quot;%4&quot;)
and the exit will be turned into a stub.</source>
      <translation>[ WARN ]  - Nella stanza con id: %1 l'uscita &quot;%2&quot; punta ad una stanza
non valida: %3 che non esiste.  L'uscita sarà rimossa (l'id della stanza di destinazione
sarà memorizzato nei dati utente della stanza con la chiave:
&quot;%4&quot;)
e l'uscita verrà trasformata in uno stub.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1502"/>
      <source>[ WARN ]  - Room has an exit &quot;%1&quot; to: %2 but that room does not exist.  The exit will be removed (but the destination room id will be stored in the room user data under a key: &quot;%4&quot;) and the exit will be turned into a stub.</source>
      <translation>[ WARN ]  - La stanza ha un uscita &quot;%1&quot; che punta ad una stanza: %2 che non esiste.  L'uscita sarà rimossa (l'id della stanza di destinazione sarà memorizzato nei dati utente della stanza con la chiave:
&quot;%4&quot;) e l'uscita verrà trasformata in uno stub.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1546"/>
      <source>[ ALERT ] - Room with id: %1 has an exit &quot;%2&quot; to: %3 but also
has a stub exit!  As a real exit precludes a stub, the latter will
be removed.</source>
      <translation>[ ALERT ] - Stanza ID: %1 ha un'uscita &quot;%2&quot; verso: %3 ma ha anche
un'uscita stub! La presenza di un'uscita reale impedisce l'utilizzo di stub,
quindi quest'ultimo sarà rimosso.
.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1556"/>
      <source>[ ALERT ] - Room has an exit &quot;%1&quot; to: %2 but also has a stub exit in the same direction!  As a real exit precludes a stub, the latter will be removed.</source>
      <translation>[ ALERT ] - La stanza ha un'uscita &quot;%1&quot; verso: %2 ma ha anche
un'uscita stub! La presenza di un'uscita reale impedisce l'utilizzo di stub,
quindi quest'ultimo sarà rimosso.
.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1612"/>
      <source>[ INFO ]  - In room with id: %1 exit &quot;%2&quot; that was to room with an invalid
room: %3 that does not exist.  The exit will be removed (the bad destination
room id will be stored in the room user data under a key:
&quot;%4&quot;)
and the exit will be turned into a stub.</source>
      <translation>[ INFO ]  - Nella stanza con id: %1 l'uscita &quot;%2&quot; punta ad una stanza
non valida: %3 che non esiste.  L'uscita sarà rimossa (lo Stanza ID di destinazione
sarà memorizzato nei dati utente della stanza con la chiave:
&quot;%4&quot;)
e l'uscita verrà trasformata in uno stub.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1623"/>
      <source>[ INFO ]  - Room exit &quot;%1&quot; that was to a room with an invalid id: %2 that does not exist.  The exit will be removed (the bad destination room id will be stored in the room user data under a key:&quot;%4&quot;) and the exit will be turned into a stub.</source>
      <translation>[ INFO ]  - L'uscita della stanza &quot;%1&quot; punta ad uno Stanza ID non valido: %2 che non esiste.  L'uscita sarà rimossa (lo Stanza ID di destinazione sarà memorizzato nei dati utente della stanza con la chiave:&quot;%4&quot;) e l'uscita verrà trasformata in uno stub.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1639"/>
      <source>
It was locked, this is recorded as user data with key:
&quot;%1&quot;.</source>
      <translation>
L'uscita è bloccata, questa informazione è registrata nei dati utenti con chiave:
&quot;%1&quot;.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1643"/>
      <source>  It was locked, this is recorded as user data with key: &quot;%1&quot;.</source>
      <translation>  L'uscita è bloccata, questa informazione è registrata nei dati utenti con chiave: &quot;%1&quot;.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1651"/>
      <source>
It had a weight, this is recorded as user data with key:
&quot;%1&quot;.</source>
      <translation>
L'uscita ha un peso, questa informazione è registrata nei dati utenti con chiave:
&quot;%1&quot;.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1655"/>
      <source>  It had a weight, this is recorded as user data with key: &quot;%1&quot;.</source>
      <translation>  
 L'uscita ha un peso, questa informazione è registrata nei dati utenti con chiave: &quot;%1&quot;.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1666"/>
      <source>[ WARN ]  - There was a custom exit line associated with the invalid exit but
it has not been possible to salvage this, it has been lost!</source>
      <translation>[ WARN ] - C'era una linea personalizzata associata all'uscita non valida, ma
non è stato possibile recuperarla, è andata persa!</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1671"/>
      <source>[ WARN ]  - There was a custom exit line associated with the invalid exit but it has not been possible to salvage this, it has been lost!</source>
      <translation>[ WARN ] - C'era una linea personalizzata associata all'uscita non valida, ma non è stato possibile recuperarla, è andata persa!</translation>
    </message>
  </context>
  <context>
    <name>TRoomDB</name>
    <message>
      <location filename="../src/TRoomDB.cpp" line="504"/>
      <source>Area with ID %1 already exists!</source>
      <translation>L'area con ID %1 esiste già!</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="523"/>
      <source>An Unnamed Area is (no longer) permitted!</source>
      <translation>Un'area senza nome non è più consentita!</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="527"/>
      <source>An area called %1 already exists!</source>
      <translation>L'area %1 esiste già!</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="626"/>
      <source>[ WARN ]  - Problem with data structure associated with room id: %1 - that
room&apos;s data has been lost so the id is now being deleted.  This
suggests serious problems with the currently running version of
Mudlet - is your system running out of memory?</source>
      <translation>[ WARN ]  - Problemi con la struttura dati associata allo Stanza ID: %1
i dati della stanza sono illeggibili e l'ID è stato cancellato.  Questo
può essere causato da problemi seri con la versione attualmente in
esecuzione di Mudlet - il tuo sistema ha esaurito la memoria RAM?</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="634"/>
      <source>[ WARN ]  - Problem with data structure associated with this room.  The room&apos;s data has been lost so the id is now being deleted.  This suggests serious problems with the currently running version of Mudlet - is your system running out of memory?</source>
      <translation>[ WARN ]  - Problemi con la struttura dati associata a questa stanza.  I dati della stanza sono illeggibili e l'ID è stato cancellato.  Questo può essere causato da problemi seri con la versione attualmente in esecuzione di Mudlet - il tuo sistema ha esaurito la memoria RAM?</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="692"/>
      <source>[ ALERT ] - Area with id: %1 expected but not found, will be created.</source>
      <translation>[ ALERT ] - Area ID: %1 previsto, ma non trovato, provvedo alla creazione.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="695"/>
      <source>[ ALERT ] - Area with this id expected but not found, will be created.</source>
      <translation>[ ALERT ] - Previsto Area ID, ma non trovato, provvedo alla creazione.</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/TRoomDB.cpp" line="724"/>
      <source>[ ALERT ] - %n area(s) detected as missing in map: adding it/them in.
 Look for further messsages related to the rooms that are supposed
 to be in this/these area(s)...</source>
      <comment>Making use of %n to allow quantity dependent message form 8-) !</comment>
      <translation type="unfinished"/>
    </message>
    <message numerus="yes">
      <location filename="../src/TRoomDB.cpp" line="731"/>
      <source>[ ALERT ] - %n area(s) detected as missing in map: adding it/them in.
 Look for further messsages related to the rooms that is/are supposed to
 be in this/these area(s)...</source>
      <comment>Making use of %n to allow quantity dependent message form 8-) !</comment>
      <translation type="unfinished"/>
    </message>
    <message numerus="yes">
      <location filename="../src/TRoomDB.cpp" line="740"/>
      <source>[ INFO ]  - The missing area(s) are now called:
(ID) ==&gt; &quot;name&quot;</source>
      <comment>Making use of %n to allow quantity dependent message form 8-) !</comment>
      <translation>
        <numerusform>[ INFO ]  - L'area mancante(i) è ora chiamata:
(ID) ==&gt; &quot;name&quot;</numerusform>
        <numerusform>[ INFO ] - L'area mancante(i) è ora chiamata:
(ID) ==&gt; &quot;name&quot;</numerusform>
      </translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="775"/>
      <source>[ ALERT ] - Bad, (less than +1 and not the reserved -1) area ids found (count: %1)
in map, now working out what new id numbers to use...</source>
      <translation>[ ALERT ] - Molto male, ho trovato più di uno Stanza ID duplicato (conteggio: %1)
nel file di mappa (e non è lo Stanza ID riservato -1), ora cerco di capire quale ID utilizzare...</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="780"/>
      <source>[ ALERT ] - Bad, (less than +1 and not the reserved -1) area ids found (count: %1) in map!  Look for further messsages related to this for each affected area ...</source>
      <translation>[ ALERT ] - Molto male, ho trovato più di un Area ID duplicato (conteggio: %1) nel file di mappa (e non è l'Area ID riservato -1)! Maggiori informazioni sono presenti nei prossimi messaggi che riguarderanno ogni singola area ...</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="787"/>
      <source>[ INFO ]  - The renumbered area ids will be:
Old ==&gt; New</source>
      <translation>[ INFO ]  - Gli Area ID rinumerati saranno:
Vecchio ==&gt; Nuovo</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="805"/>
      <source>[ INFO ]  - The area with this bad id was renumbered to: %1.</source>
      <translation>[ INFO ]  - L'area con questo id errato è stata rinumerata in: %1.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="806"/>
      <source>[ INFO ]  - This area was renumbered from the bad id: %1.</source>
      <translation>[ INFO ]  - Questa area è stata rinumerata dall'id errato: %1.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="843"/>
      <location filename="../src/TRoomDB.cpp" line="846"/>
      <source>[ INFO ]  - Area id numbering is satisfactory.</source>
      <translation>[ INFO ]  - La numerazione degli ID area è corretta.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="854"/>
      <source>[ ALERT ] - Bad, (less than +1) room ids found (count: %1) in map, now working
out what new id numbers to use.</source>
      <translation>[ ALERT ] - Molto male, ho trovato più di uno Stanza ID duplicato (conteggio: %1)
nel file di mappa, ora cerco di capire quale ID utilizzare.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="859"/>
      <source>[ ALERT ] - Bad, (less than +1) room ids found (count: %1) in map!  Look for further messsages related to this for each affected room ...</source>
      <translation>[ ALERT ] - Molto male, ho trovato più di uno stesso Stanza ID duplicato (conteggio: %1) nel file di mappa. Maggiori informazioni sono presenti nei prossimi messaggi che riguarderanno ogni singola stanza ...</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="866"/>
      <source>[ INFO ]  - The renumbered rooms will be:
</source>
      <translation>[ INFO ]  - Le stanze rinumerate sono:
</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="882"/>
      <source>[ INFO ]  - This room with the bad id was renumbered to: %1.</source>
      <translation>[ INFO ]  - La stanza con questo id errato è stata rinumerata in: %1.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="883"/>
      <source>[ INFO ]  - This room was renumbered from the bad id: %1.</source>
      <translation>[ INFO ]  - Questa stanza è stata rinumerata dall'id errato: %1.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="919"/>
      <location filename="../src/TRoomDB.cpp" line="922"/>
      <source>[ INFO ]  - Room id numbering is satisfactory.</source>
      <translation>[ INFO ]  - La numerazione degli ID stanza è corretta.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="946"/>
      <source>[ INFO ]  - Duplicate exit stub identifiers found in room id: %1, this is an
anomaly but has been cleaned up easily.</source>
      <translation>[ INFO ]  - Identificativi di uscite stub duplicati nella Stanza ID: %1.
L'anomalia è stata risolta facilmente.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="951"/>
      <source>[ INFO ]  - Duplicate exit stub identifiers found in room, this is an anomaly but has been cleaned up easily.</source>
      <translation>[ INFO ]  - Identificativi di uscite stub duplicati in questa stanza.
L'anomalia è stata risolta facilmente.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="968"/>
      <source>[ INFO ]  - Duplicate exit lock identifiers found in room id: %1, this is an
anomaly but has been cleaned up easily.</source>
      <translation>[ INFO ]  - Identificativi di uscite bloccate duplicati nella Stanza ID: %1.
L'anomalia è stata risolta facilmente.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="973"/>
      <source>[ INFO ]  - Duplicate exit lock identifiers found in room, this is an anomaly but has been cleaned up easily.</source>
      <translation>[ INFO ]  - Identificativi di uscite bloccate duplicati in questa stanza.
L'anomalia è stata risolta facilmente.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1060"/>
      <source>[ INFO ]  - This room claims to be in area id: %1, but that did not have a record of it.  The area has been updated to include this room.</source>
      <translation>[ INFO ]  - Questa stanza crede di appartenere all'Area ID %1, ma non ci sono riferimenti collegati.  L'area è stata aggiornata per includere questa stanza.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1066"/>
      <source>[ INFO ]  - In area with id: %1 there were %2 rooms missing from those it
should be recording as possessing, they were:
%3
they have been added.</source>
      <translation>[ INFO ]  - Nell' Area ID: %1 erano presenti %2 stanze mancanti rispetto
a quelle indicate, sono:
%3
sono state aggiunte.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1074"/>
      <source>[ INFO ]  - In this area there were %1 rooms missing from those it should be recorded as possessing.  They are: %2.  They have been added.</source>
      <translation>[ INFO ]  - In questa Area c'erano %1 stanze mancanti. Erano: %2. Sono state cancellate.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1099"/>
      <source>[ INFO ]  - This room was claimed by area id: %1, but it does not belong there.  The area has been updated to not include this room.</source>
      <translation>[ INFO ]  - Questa stanza crede di appartenere all'Area ID %1, ma non ci sono riferimenti collegati.  L'area è stata aggiornata per includere questa stanza.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1105"/>
      <source>[ INFO ]  - In area with id: %1 there were %2 extra rooms compared to those it
should be recording as possessing, they were:
%3
they have been removed.</source>
      <translation>[ INFO ]  - Nell' Area ID: %1 erano presenti %2 stanze in più rispetto
a quelle indicate, sono:
%3
sono state cancellate.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1113"/>
      <source>[ INFO ]  - In this area there were %1 extra rooms that it should not be recorded as possessing.  They were: %2.  They have been removed.</source>
      <translation>[ INFO ]  - In questa Area c'erano %1 stanze in più che non dovrebbero essere registrate. Erano: %2. Sono state cancellate.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1212"/>
      <source>It has been detected that &quot;_###&quot; form suffixes have already been used, for simplicity in the renaming algorithm these will have been removed and possibly changed as Mudlet sorts this matter out, if a number assigned in this way &lt;b&gt;is&lt;/b&gt; important to you, you can change it back, provided you rename the area that has been allocated the suffix that was wanted first...!&lt;/p&gt;</source>
      <translation>Ho rilevato che il suffisso &quot;_###&quot; è già in uso. Per semplicità dell'algoritmo di rinomina, tutte le corrispondenze saranno rimosse e probabilmente modificate con un nuovo valore. Se un numero assegnato in questo modo &lt;b&gt;è importante&lt;/b&gt; per te, puoi ripristinarlo successivamente, a condizione che non sia occupato da un'altra area!&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1216"/>
      <source>[  OK  ]  - The changes made are:
(ID) &quot;old name&quot; ==&gt; &quot;new name&quot;
</source>
      <translation>[  OK  ]  - Le modifiche effettuate sono:
(ID) &quot;vecchio nome&quot; ==&gt; &quot;nuovo nome&quot;
</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1223"/>
      <source>&lt;nothing&gt;</source>
      <translation>&lt;niente&gt;</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1226"/>
      <source>[ INFO ]  - Area name changed to prevent duplicates or unnamed ones; old name: &quot;%1&quot;, new name: &quot;%2&quot;.</source>
      <translation>[ INFO ]  - Nome Area modificato per evitare duplicati o nomi indefiniti; vecchio nome: &quot;%1&quot;, nuovo nome: &quot;%2&quot;.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1235"/>
      <source>[ ALERT ] - Empty and duplicate area names detected in Map file!</source>
      <translation>[ ALERT ] - Nomi di area duplicati e vuoti rilevati nel file di mappa!</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1236"/>
      <source>[ INFO ]  - Due to some situations not being checked in the past,  Mudlet had
allowed the map to have more than one area with the same or no name.
These make some things confusing and are now disallowed.
  To resolve these cases, an area without a name here (or created in
the future) will automatically be assigned the name &quot;%1&quot;.
  Duplicated area names will cause all but the first encountered one
to gain a &quot;_###&quot; style suffix where each &quot;###&quot; is an increasing
number; you may wish to change these, perhaps by replacing them with
a &quot;(sub-area name)&quot; but it is entirely up to you how you do this,
other than you will not be able to set one area&apos;s name to that of
another that exists at the time.
  If there were more than one area without a name then all but the
first will also gain a suffix in this manner.
%2</source>
      <translation>[ INFO ]  - A causa di alcuni valori non controllati in passato, Mudlet ha
permesso all'utente di avere più zone con lo stesso nome o senza nome.
Queste ha reso alcune situazioni confuse e ora non è più consentito.
  Per risolvere queste situazioni ad un'area senza nome (anche creata
in futuro) sarà automaticamente assegnato il nome &quot;%1&quot;.
  In caso venga rilevato un nome area duplicato, a tutti gli elementi dopo
il primo, sarà aggiunto un suffisso &quot;_###&quot; dove &quot;###&quot;
è un numero crescente; puoi cambiare questi nomi aggiungendo per esempio 
&quot;(nome sotto - area)&quot; o un altro testo a tua discrezione purché
il nome della zona non sia duplicato con un'altra esistente.
  Se c'erano più aree senza un nome allora tutte tranne la prima riceveranno
un suffisso seguendo le regole indicate sopra.
%2</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1252"/>
      <source>[ ALERT ] - Duplicate area names detected in the Map file!</source>
      <translation>[ ALERT ] - Nomi di area duplicati rilevati nel file di mappa!</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1253"/>
      <source>[ INFO ]  - Due to some situations not being checked in the past, Mudlet had
allowed the user to have more than one area with the same name.
These make some things confusing and are now disallowed.
  Duplicated area names will cause all but the first encountered one
to gain a &quot;_###&quot; style suffix where each &quot;###&quot; is an increasing
number; you may wish to change these, perhaps by replacing them with
a &quot;(sub-area name)&quot; but it is entirely up to you how you do this,
other then you will not be able to set one area&apos;s name to that of
another that exists at the time.
  If there were more than one area without a name then all but the
first will also gain a suffix in this manner.
%1)</source>
      <translation>[ INFO ]  - A causa di alcuni valori non controllati in passato, Mudlet ha
permesso all'utente di avere più zone con lo stesso nome.
Queste ha reso alcune situazioni confuse e ora non è più consentito.
  In caso venga rilevato un nome area duplicato, a tutti gli elementi dopo
il primo, sarà aggiunto un suffisso &quot;_###&quot; dove &quot;###&quot;
è un numero crescente; puoi cambiare questi nomi aggiungendo per esempio 
&quot;(nome sotto - area)&quot; o un altro testo a tua discrezione purché
il nome della zona non sia duplicato con un'altra esistente.
  Se c'erano più aree senza un nome allora tutte tranne la prima riceveranno
un suffisso seguendo le regole indicate sopra.
%1)</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1268"/>
      <source>[ ALERT ] - An empty area name was detected in the Map file!</source>
      <translation>[ ALERT ] - Nomi di area inesistenti rilevati nel file di mappa!</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1271"/>
      <source>[  OK  ]  - Due to some situations not being checked in the past, Mudlet had
allowed the map to have an area with no name. This can make some
things confusing and is now disallowed.
  To resolve this case, the area without a name here (or one created
in the future) will automatically be assigned the name &quot;%1&quot;.
  If this happens more then once the duplication of area names will
cause all but the first encountered one to gain a &quot;_###&quot; style
suffix where each &quot;###&quot; is an increasing number; you may wish to
change these, perhaps by adding more meaningful area names but it is
entirely up to you what is used, other then you will not be able to
set one area&apos;s name to that of another that exists at the time.</source>
      <translation>[  OK  ]  - A causa di alcuni valori non controllati in passato, Mudlet ha
permesso all'utente di un'area senza nome.
Queste ha reso alcune situazioni confuse e ora non è più consentito.
  Per risolvere queste situazioni, ad un'area senza nome (anche creata
in futuro) sarà automaticamente assegnato il nome &quot;%1&quot;.
  In caso venga rilevato un nome area duplicato, a tutti gli elementi dopo
il primo, sarà aggiunto un suffisso &quot;_###&quot; dove &quot;###&quot;
è un numero crescente; puoi cambiare questi nomi aggiungendo per esempio 
&quot;(nome sotto - area)&quot; o un altro testo a tua discrezione purché
il nome della zona non sia duplicato con un'altra esistente.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1295"/>
      <source>[ INFO ]  - Default (reset) area name (for rooms that have not been assigned to an
area) not found, adding &quot;%1&quot; against the reserved -1 id.</source>
      <translation>[ INFO ]  - Nome area predefinito (reimpostazione) (per le sale che non sono state assegnate a una zona
) non trovata, aggiungendo &quot;%1&quot; contro l'id -1 id riservato.</translation>
    </message>
  </context>
  <context>
    <name>TTextEdit</name>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1297"/>
      <source>Copy</source>
      <translation>Copia</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1308"/>
      <source>Copy HTML</source>
      <translation>Copia Codice HTML</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1312"/>
      <source>Copy as image</source>
      <translation>Copia come immagine</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1315"/>
      <source>Select All</source>
      <translation>Seleziona Tutto</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1320"/>
      <source>Search on %1</source>
      <translation>Cerca su %1</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1338"/>
      <source>Analyse characters</source>
      <translation>Analizza i caratteri</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1347"/>
      <source>&lt;p&gt;Hover on this item to display the Unicode codepoints in the selection &lt;i&gt;(only the first line!)&lt;/i&gt;&lt;/p&gt;</source>
      <translation>&lt;p&gt;Passa il mouse su questo elemento per visualizzare la mappa caratteri Unicode della selezione &lt;i&gt;(solo la prima riga!)&lt;/i&gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1356"/>
      <source>restore Main menu</source>
      <translation>ripristina menu Principale</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1358"/>
      <source>Use this to restore the Main menu to get access to controls.</source>
      <translation>Ripristina il menù principale e ottieni l'accesso alle relative voci.</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1360"/>
      <source>restore Main Toolbar</source>
      <translation>ripristino Barra degli Strumenti</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1362"/>
      <source>Use this to restore the Main Toolbar to get access to controls.</source>
      <translation>Ripristina la barra degli strumenti e ottieni l'accesso alle relative voci.</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1438"/>
      <source>Mudlet, debug console extract</source>
      <translation>Mudlet, estratto della console di debug</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1440"/>
      <source>Mudlet, %1 mini-console extract from %2 profile</source>
      <translation>Mudlet, estratto della mini-console %1 dal profilo %2</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1442"/>
      <source>Mudlet, %1 user window extract from %2 profile</source>
      <translation>Mudlet, estratto di finestra utente %1 dal profilo %2</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1444"/>
      <source>Mudlet, main console extract from %1 profile</source>
      <translation>Mudlet, estratto della console principale dal profilo %1</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1912"/>
      <source>{tab}</source>
      <comment>Unicode U+0009 codepoint.</comment>
      <translation>{tab}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1913"/>
      <source>{line-feed}</source>
      <comment>Unicode U+000A codepoint. Not likely to be seen as it gets filtered out.</comment>
      <translation>{line-feed}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1914"/>
      <source>{carriage-return}</source>
      <comment>Unicode U+000D codepoint. Not likely to be seen as it gets filtered out.</comment>
      <translation>{carriage-return}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1915"/>
      <source>{space}</source>
      <comment>Unicode U+0020 codepoint.</comment>
      <translation>{space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1916"/>
      <source>{non-breaking space}</source>
      <comment>Unicode U+00A0 codepoint.</comment>
      <translation>{non-breaking space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1917"/>
      <source>{soft hyphen}</source>
      <comment>Unicode U+00AD codepoint.</comment>
      <translation>{soft hyphen}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1918"/>
      <source>{combining grapheme joiner}</source>
      <comment>Unicode U+034F codepoint (badly named apparently - see Wikipedia!)</comment>
      <translation>{combining grapheme joiner}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1919"/>
      <source>{ogham space mark}</source>
      <comment>Unicode U+1680 codepoint.</comment>
      <translation>{ogham space mark}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1920"/>
      <source>{&apos;n&apos; quad}</source>
      <comment>Unicode U+2000 codepoint.</comment>
      <translation>{&apos;n&apos; quad}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1921"/>
      <source>{&apos;m&apos; quad}</source>
      <comment>Unicode U+2001 codepoint.</comment>
      <translation>{&apos;m&apos; quad}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1922"/>
      <source>{&apos;n&apos; space}</source>
      <comment>Unicode U+2002 codepoint - En (&apos;n&apos;) wide space.</comment>
      <translation>{&apos;n&apos; space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1923"/>
      <source>{&apos;m&apos; space}</source>
      <comment>Unicode U+2003 codepoint - Em (&apos;m&apos;) wide space.</comment>
      <translation>{&apos;m&apos; space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1924"/>
      <source>{3-per-em space}</source>
      <comment>Unicode U+2004 codepoint - three-per-em (&apos;m&apos;) wide (thick) space.</comment>
      <translation>{3-per-em space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1925"/>
      <source>{4-per-em space}</source>
      <comment>Unicode U+2005 codepoint - four-per-em (&apos;m&apos;) wide (Middle) space.</comment>
      <translation>{4-per-em space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1926"/>
      <source>{6-per-em space}</source>
      <comment>Unicode U+2006 codepoint - six-per-em (&apos;m&apos;) wide (Sometimes the same as a Thin) space.</comment>
      <translation>{6-per-em space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1927"/>
      <source>{digit space}</source>
      <comment>Unicode U+2007 codepoint - figure (digit) wide space.</comment>
      <translation>{digit space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1928"/>
      <source>{punctuation wide space}</source>
      <comment>Unicode U+2008 codepoint.</comment>
      <translation>{punctuation wide space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1929"/>
      <source>{5-per-em space}</source>
      <comment>Unicode U+2009 codepoint - five-per-em (&apos;m&apos;) wide space.</comment>
      <translation>{5-per-em space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1930"/>
      <source>{hair width space}</source>
      <comment>Unicode U+200A codepoint - thinnest space.</comment>
      <translation>{hair width space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1931"/>
      <source>{zero width space}</source>
      <comment>Unicode U+200B codepoint.</comment>
      <translation>{zero width space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1932"/>
      <source>{Zero width non-joiner}</source>
      <comment>Unicode U+200C codepoint.</comment>
      <translation>{Zero width non-joiner}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1933"/>
      <source>{zero width joiner}</source>
      <comment>Unicode U+200D codepoint.</comment>
      <translation>{zero width joiner}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1934"/>
      <source>{left-to-right mark}</source>
      <comment>Unicode U+200E codepoint.</comment>
      <translation>{left-to-right mark}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1935"/>
      <source>{right-to-left mark}</source>
      <comment>Unicode U+200F codepoint.</comment>
      <translation>{right-to-left mark}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1936"/>
      <source>{line separator}</source>
      <comment>Unicode 0x2028 codepoint.</comment>
      <translation>{line separator}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1937"/>
      <source>{paragraph separator}</source>
      <comment>Unicode U+2029 codepoint.</comment>
      <translation>{paragraph separator}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1938"/>
      <source>{Left-to-right embedding}</source>
      <comment>Unicode U+202A codepoint.</comment>
      <translation>{Left-to-right embedding}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1939"/>
      <source>{right-to-left embedding}</source>
      <comment>Unicode U+202B codepoint.</comment>
      <translation>{right-to-left embedding}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1940"/>
      <source>{pop directional formatting}</source>
      <comment>Unicode U+202C codepoint - pop (undo last) directional formatting.</comment>
      <translation>{pop directional formatting}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1941"/>
      <source>{Left-to-right override}</source>
      <comment>Unicode U+202D codepoint.</comment>
      <translation>{Left-to-right override}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1942"/>
      <source>{right-to-left override}</source>
      <comment>Unicode U+202E codepoint.</comment>
      <translation>{right-to-left override}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1943"/>
      <source>{narrow width no-break space}</source>
      <comment>Unicode U+202F codepoint.</comment>
      <translation>{narrow width no-break space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1944"/>
      <source>{medium width mathematical space}</source>
      <comment>Unicode U+205F codepoint.</comment>
      <translation>{medium width mathematical space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1945"/>
      <source>{zero width non-breaking space}</source>
      <comment>Unicode U+2060 codepoint.</comment>
      <translation>{zero width non-breaking space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1946"/>
      <source>{function application}</source>
      <comment>Unicode U+2061 codepoint - function application (whatever that means!)</comment>
      <translation>{function application}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1947"/>
      <source>{invisible times}</source>
      <comment>Unicode U+2062 codepoint.</comment>
      <translation>{invisible times}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1948"/>
      <source>{invisible separator}</source>
      <comment>Unicode U+2063 codepoint - invisible separator or comma.</comment>
      <translation>{invisible separator}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1949"/>
      <source>{invisible plus}</source>
      <comment>Unicode U+2064 codepoint.</comment>
      <translation>{invisible plus}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1950"/>
      <source>{left-to-right isolate}</source>
      <comment>Unicode U+2066 codepoint.</comment>
      <translation>{left-to-right isolate}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1951"/>
      <source>{right-to-left isolate}</source>
      <comment>Unicode U+2067 codepoint.</comment>
      <translation>{right-to-left isolate}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1952"/>
      <source>{first strong isolate}</source>
      <comment>Unicode U+2068 codepoint.</comment>
      <translation>{first strong isolate}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1953"/>
      <source>{pop directional isolate}</source>
      <comment>Unicode U+2069 codepoint - pop (undo last) directional isolate.</comment>
      <translation>{pop directional isolate}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1954"/>
      <source>{inhibit symmetrical swapping}</source>
      <comment>Unicode U+206A codepoint.</comment>
      <translation>{inhibit symmetrical swapping}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1955"/>
      <source>{activate symmetrical swapping}</source>
      <comment>Unicode U+206B codepoint.</comment>
      <translation>{activate symmetrical swapping}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1956"/>
      <source>{inhibit arabic form-shaping}</source>
      <comment>Unicode U+206C codepoint.</comment>
      <translation>{inhibit arabic form-shaping}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1957"/>
      <source>{activate arabic form-shaping}</source>
      <comment>Unicode U+206D codepoint.</comment>
      <translation>{activate arabic form-shaping}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1958"/>
      <source>{national digit shapes}</source>
      <comment>Unicode U+206E codepoint.</comment>
      <translation>{national digit shapes}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1959"/>
      <source>{nominal Digit shapes}</source>
      <comment>Unicode U+206F codepoint.</comment>
      <translation>{nominal Digit shapes}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1960"/>
      <source>{ideaographic space}</source>
      <comment>Unicode U+3000 codepoint - ideaographic (CJK Wide) space</comment>
      <translation>{ideaographic space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1961"/>
      <source>{variation selector 1}</source>
      <comment>Unicode U+FE00 codepoint.</comment>
      <translation>{variation selector 1}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1962"/>
      <source>{variation selector 2}</source>
      <comment>Unicode U+FE01 codepoint.</comment>
      <translation>{variation selector 2}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1963"/>
      <source>{variation selector 3}</source>
      <comment>Unicode U+FE02 codepoint.</comment>
      <translation>{variation selector 3}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1964"/>
      <source>{variation selector 4}</source>
      <comment>Unicode U+FE03 codepoint.</comment>
      <translation>{variation selector 4}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1965"/>
      <source>{variation selector 5}</source>
      <comment>Unicode U+FE04 codepoint.</comment>
      <translation>{variation selector 5}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1966"/>
      <source>{variation selector 6}</source>
      <comment>Unicode U+FE05 codepoint.</comment>
      <translation>{variation selector 6}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1967"/>
      <source>{variation selector 7}</source>
      <comment>Unicode U+FE06 codepoint.</comment>
      <translation>{variation selector 7}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1968"/>
      <source>{variation selector 8}</source>
      <comment>Unicode U+FE07 codepoint.</comment>
      <translation>{variation selector 8}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1969"/>
      <source>{variation selector 9}</source>
      <comment>Unicode U+FE08 codepoint.</comment>
      <translation>{variation selector 9}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1970"/>
      <source>{variation selector 10}</source>
      <comment>Unicode U+FE09 codepoint.</comment>
      <translation>{variation selector 10}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1971"/>
      <source>{variation selector 11}</source>
      <comment>Unicode U+FE0A codepoint.</comment>
      <translation>{variation selector 11}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1972"/>
      <source>{variation selector 12}</source>
      <comment>Unicode U+FE0B codepoint.</comment>
      <translation>{variation selector 12}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1973"/>
      <source>{variation selector 13}</source>
      <comment>Unicode U+FE0C codepoint.</comment>
      <translation>{variation selector 13}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1974"/>
      <source>{variation selector 14}</source>
      <comment>Unicode U+FE0D codepoint.</comment>
      <translation>{variation selector 14}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1975"/>
      <source>{variation selector 15}</source>
      <comment>Unicode U+FE0E codepoint - after an Emoji codepoint forces the textual (black &amp; white) rendition.</comment>
      <translation>{variation selector 15}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1976"/>
      <source>{variation selector 16}</source>
      <comment>Unicode U+FE0F codepoint - after an Emoji codepoint forces the proper coloured &apos;Emoji&apos; rendition.</comment>
      <translation>{variation selector 16}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1977"/>
      <source>{zero width no-break space}</source>
      <comment>Unicode U+FEFF codepoint - also known as the Byte-order-mark at start of text!).</comment>
      <translation>{zero width no-break space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1983"/>
      <source>{interlinear annotation anchor}</source>
      <comment>Unicode U+FFF9 codepoint.</comment>
      <translation>{interlinear annotation anchor}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1984"/>
      <source>{interlinear annotation separator}</source>
      <comment>Unicode U+FFFA codepoint.</comment>
      <translation>{interlinear annotation separator}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1985"/>
      <source>{interlinear annotation terminator}</source>
      <comment>Unicode U+FFFB codepoint.</comment>
      <translation>{interlinear annotation terminator}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1986"/>
      <source>{object replacement character}</source>
      <comment>Unicode U+FFFC codepoint.</comment>
      <translation>{object replacement character}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1998"/>
      <source>{noncharacter}</source>
      <comment>Unicode codepoint in range U+FFD0 to U+FDEF - not a character.</comment>
      <translation>{noncharacter}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="2000"/>
      <source>{noncharacter}</source>
      <comment>Unicode codepoint in range U+FFFx - not a character.</comment>
      <translation>{noncharacter}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="2009"/>
      <source>{FitzPatrick modifier 1 or 2}</source>
      <comment>Unicode codepoint U+0001F3FB - FitzPatrick modifier (Emoji Human skin-tone) 1-2.</comment>
      <translation>{FitzPatrick modifier 1 or 2}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="2010"/>
      <source>{FitzPatrick modifier 3}</source>
      <comment>Unicode codepoint U+0001F3FC - FitzPatrick modifier (Emoji Human skin-tone) 3.</comment>
      <translation>{FitzPatrick modifier 3}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="2011"/>
      <source>{FitzPatrick modifier 4}</source>
      <comment>Unicode codepoint U+0001F3FD - FitzPatrick modifier (Emoji Human skin-tone) 4.</comment>
      <translation>{FitzPatrick modifier 4}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="2012"/>
      <source>{FitzPatrick modifier 5}</source>
      <comment>Unicode codepoint U+0001F3FE - FitzPatrick modifier (Emoji Human skin-tone) 5.</comment>
      <translation>{FitzPatrick modifier 5}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="2013"/>
      <source>{FitzPatrick modifier 6}</source>
      <comment>Unicode codepoint U+0001F3FF - FitzPatrick modifier (Emoji Human skin-tone) 6.</comment>
      <translation>{FitzPatrick modifier 6}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="2017"/>
      <source>{noncharacter}</source>
      <comment>Unicode codepoint is U+00xxFFFE or U+00xxFFFF - not a character.</comment>
      <translation>{noncharacter}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="2288"/>
      <location filename="../src/TTextEdit.cpp" line="2350"/>
      <source>Index (UTF-16)</source>
      <comment>1st Row heading for Text analyser output, table item is the count into the QChars/TChars that make up the text {this translation used 2 times}</comment>
      <translation>Indice (UTF-16)</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="2291"/>
      <location filename="../src/TTextEdit.cpp" line="2352"/>
      <source>U+&lt;i&gt;####&lt;/i&gt; Unicode Code-point &lt;i&gt;(High:Low Surrogates)&lt;/i&gt;</source>
      <comment>2nd Row heading for Text analyser output, table item is the unicode code point (will be between 000001 and 10FFFF in hexadecimal) {this translation used 2 times}</comment>
      <translation>U+&lt;i&gt;####&lt;/i&gt; Unicode Code-point &lt;i&gt;(High:Low Surrogates)&lt;/i&gt;</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="2295"/>
      <location filename="../src/TTextEdit.cpp" line="2356"/>
      <source>Visual</source>
      <comment>3rd Row heading for Text analyser output, table item is a visual representation of the character/part of the character or a &apos;{&apos;...&apos;}&apos; wrapped letter code if the character is whitespace or otherwise unshowable {this translation used 2 times}</comment>
      <translation>Visuale</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="2299"/>
      <location filename="../src/TTextEdit.cpp" line="2360"/>
      <source>Index (UTF-8)</source>
      <comment>4th Row heading for Text analyser output, table item is the count into the bytes that make up the UTF-8 form of the text that the Lua system uses {this translation used 2 times}</comment>
      <translation>Indice (UTF-8)</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="2303"/>
      <location filename="../src/TTextEdit.cpp" line="2364"/>
      <source>Byte</source>
      <comment>5th Row heading for Text analyser output, table item is the unsigned 8-bit integer for the particular byte in the UTF-8 form of the text that the Lua system uses {this translation used 2 times}</comment>
      <translation>Byte</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="2307"/>
      <location filename="../src/TTextEdit.cpp" line="2368"/>
      <source>Lua character or code</source>
      <comment>6th Row heading for Text analyser output, table item is either the ASCII character or the numeric code for the byte in the row about this item in the table, as displayed the thing shown can be used in a Lua string entry to reproduce this byte {this translation used 2 times}</comment>
      <translation>Carattere o codice Lua</translation>
    </message>
  </context>
  <context>
    <name>TToolBar</name>
    <message>
      <location filename="../src/TToolBar.cpp" line="74"/>
      <source>Toolbar - %1 - %2</source>
      <translation>Barra degli strumenti - %1 - %2</translation>
    </message>
  </context>
  <context>
    <name>TTrigger</name>
    <message>
      <location filename="../src/TTrigger.cpp" line="191"/>
      <source>Error: This trigger has no patterns defined, yet. Add some to activate it.</source>
      <translation>Errore: questo trigger non ha pattern definiti. Aggiungine alcuni per attivarlo.</translation>
    </message>
    <message>
      <location filename="../src/TTrigger.cpp" line="222"/>
      <source>Error: in item %1, perl regex &quot;%2&quot; failed to compile, reason: &quot;%3&quot;.</source>
      <translation>Errore: nella voce %1, la regex perl &quot;%2&quot; non è stata compilata, motivazione: &quot;%3&quot;.</translation>
    </message>
    <message>
      <location filename="../src/TTrigger.cpp" line="243"/>
      <source>Error: in item %1, lua function &quot;%2&quot; failed to compile, reason: &quot;%3&quot;.</source>
      <translation>Errore: nell'elemento %1, impossibile compilare la funzione Lua &quot;%2&quot;, motivazione: &quot;%3&quot;.</translation>
    </message>
    <message>
      <location filename="../src/TTrigger.cpp" line="263"/>
      <source>Error: in item %1, no colors to match were set - at least &lt;i&gt;one&lt;/i&gt; of the foreground or background must not be &lt;i&gt;ignored&lt;/i&gt;.</source>
      <translation>Errore: nella voce %1, non sono stati impostati colori da abbinare - almeno &lt;i&gt;un&lt;/i&gt; colore carattere o di sfondo non deve essere &lt;i&gt;ignorato&lt;/i&gt;.</translation>
    </message>
    <message>
      <location filename="../src/TTrigger.cpp" line="319"/>
      <location filename="../src/TTrigger.cpp" line="389"/>
      <source>[Trigger Error:] %1 capture group limit exceeded, capture less groups.
</source>
      <translation>[ ERROR ] - %1 superato il limite dei gruppo di cattura nel trigger, cattura meno gruppi.</translation>
    </message>
    <message>
      <location filename="../src/TTrigger.cpp" line="1148"/>
      <source>Trigger name=%1 expired.
</source>
      <translation>Trigger name=%1 scaduto.
</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/TTrigger.cpp" line="1151"/>
      <source>Trigger name=%1 will fire %n more time(s).
</source>
      <translation>
        <numerusform>Il trigger nome=%1 verrà eseguito un'altra volta.
</numerusform>
        <numerusform>Il trigger nome=%1 verrà eseguito altre %n volte.
</numerusform>
      </translation>
    </message>
  </context>
  <context>
    <name>UpdateDialog</name>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.ui" line="20"/>
      <source>%APPNAME% update</source>
      <translation>Aggiornamento %APPNAME%</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.ui" line="50"/>
      <source>Loading update information …</source>
      <translation>Caricamento informazioni di aggiornamento …</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.ui" line="87"/>
      <source>A new version of %APPNAME% is available!</source>
      <translation>È disponibile una nuova versione di %APPNAME%!</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.ui" line="113"/>
      <source>%APPNAME% %UPDATE_VERSION% is available (you have %CURRENT_VERSION%).
Would you like to update now?</source>
      <translation>%APPNAME% %UPDATE_VERSION% è disponibile (installato %CURRENT_VERSION%).
Desideri aggiornare ora?</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.ui" line="151"/>
      <source>Changelog for %APPNAME%</source>
      <translation>Note di versione per %APPNAME%</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.ui" line="161"/>
      <source>You are using version %CURRENT_VERSION%.</source>
      <translation>Stai utilizzando la versione %CURRENT_VERSION%.</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.ui" line="192"/>
      <source>There are currently no updates available.</source>
      <translation>Al momento non ci sono aggiornamenti disponibili.</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.ui" line="208"/>
      <source>You are using %APPNAME% %CURRENT_VERSION%.</source>
      <translation>Stai utilizzando %APPNAME% %CURRENT_VERSION%.</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.ui" line="321"/>
      <source>Automatically download future updates</source>
      <translation>Scarica automaticamente gli aggiornamenti futuri</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.ui" line="368"/>
      <source>Cancel</source>
      <translation>Annulla</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.ui" line="388"/>
      <source>Install update now</source>
      <translation>Installa aggiornamento ora</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.ui" line="395"/>
      <source>OK</source>
      <translation>OK</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.ui" line="405"/>
      <source>Remind me later</source>
      <translation>Ricordamelo in seguito</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.ui" line="410"/>
      <source>Skip this version</source>
      <translation>Salta questa versione</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.cpp" line="555"/>
      <source>Could not open downloaded file %1</source>
      <translation>Impossibile aprire il file scaricato %1</translation>
    </message>
  </context>
  <context>
    <name>Updater</name>
    <message>
      <location filename="../src/updater.cpp" line="46"/>
      <location filename="../src/updater.cpp" line="195"/>
      <location filename="../src/updater.cpp" line="261"/>
      <source>Update</source>
      <translation>Aggiorna</translation>
    </message>
    <message>
      <location filename="../src/updater.cpp" line="352"/>
      <source>Restart to apply update</source>
      <translation>Riavvia per aggiornare</translation>
    </message>
  </context>
  <context>
    <name>XMLimport</name>
    <message>
      <location filename="../src/XMLimport.cpp" line="164"/>
      <source>[ ALERT ] - Sorry, the file being read:
&quot;%1&quot;
reports it has a version (%2) it must have come from a later Mudlet version,
and this one cannot read it, you need a newer Mudlet!</source>
      <translation>[ ALERT ] - Spiacente, il file letto:
&quot;%1&quot;
utilizza la versione (%2) che proviene da una versione successiva Mudlet,
per aprire questo file hai bisogno dell'ultima versione di Mudlet!</translation>
    </message>
    <message>
      <location filename="../src/XMLimport.cpp" line="348"/>
      <source>Parsing area data...</source>
      <translation>Analisi dei dati dell'area...</translation>
    </message>
    <message>
      <location filename="../src/XMLimport.cpp" line="352"/>
      <source>Parsing room data...</source>
      <translation>Analisi dei dati della stanza...</translation>
    </message>
    <message>
      <location filename="../src/XMLimport.cpp" line="356"/>
      <source>Parsing environment data...</source>
      <translation>Analisi dei dati dell'ambiente...</translation>
    </message>
    <message>
      <location filename="../src/XMLimport.cpp" line="364"/>
      <source>Assigning rooms to their areas...</source>
      <translation>Assegno le stanze alle loro aree...</translation>
    </message>
    <message>
      <location filename="../src/XMLimport.cpp" line="519"/>
      <source>Parsing room data [count: %1]...</source>
      <translation>Analisi dati della stanza [conteggio: %1]...</translation>
    </message>
  </context>
  <context>
    <name>about_dialog</name>
    <message>
      <location filename="../src/ui/about_dialog.ui" line="41"/>
      <source>About Mudlet</source>
      <translation>Informazioni su Mudlet</translation>
    </message>
    <message>
      <location filename="../src/ui/about_dialog.ui" line="122"/>
      <source>Mudlet</source>
      <translation>Mudlet</translation>
    </message>
    <message>
      <location filename="../src/ui/about_dialog.ui" line="185"/>
      <source>Supporters</source>
      <translation>Sostenitori</translation>
    </message>
    <message>
      <location filename="../src/ui/about_dialog.ui" line="214"/>
      <source>License</source>
      <translation>Licenza</translation>
    </message>
    <message>
      <location filename="../src/ui/about_dialog.ui" line="249"/>
      <source>Third Party</source>
      <translation>Terze Parti</translation>
    </message>
  </context>
  <context>
    <name>actions_main_area</name>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="62"/>
      <source>Name:</source>
      <translation>Nome:</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="115"/>
      <source>Button Bar Properties</source>
      <translation>Proprietà barra dei bottoni</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="127"/>
      <source>Number of columns/rows (depending on orientation):</source>
      <translation>Numero di colonne/righe (dipende dall'orientamento):</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="150"/>
      <source>Orientation Horizontal</source>
      <translation>Orizzontale</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="155"/>
      <source>Orientation Vertical</source>
      <translation>Verticale</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="170"/>
      <source>Dock Area Top</source>
      <translation>Fissa in alto</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="175"/>
      <source>Dock Area Left</source>
      <translation>Fissa a sinistra</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="180"/>
      <source>Dock Area Right</source>
      <translation>Fissa a destra</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="185"/>
      <source>Floating Toolbar</source>
      <translation>Mobile</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="208"/>
      <source>Button Properties</source>
      <translation>Proprietà del bottone</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="214"/>
      <source>Button Rotation:</source>
      <translation>Rotazione Bottone:</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="231"/>
      <source>no rotation</source>
      <translation>nessuna rotazione</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="236"/>
      <source>90° rotation to the left</source>
      <translation>Ruota 90° a sinistra</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="241"/>
      <source>90° rotation to the right</source>
      <translation>Ruota 90° a destra</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="249"/>
      <source>Push down button</source>
      <translation>Bottone a due stati</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="256"/>
      <source>Command:</source>
      <translation>Comando:</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="266"/>
      <source>&lt;p&gt;Type in one or more commands you want the button to send directly to the game if it is pressed. (Optional)&lt;/p&gt;&lt;p&gt;If this is a &lt;i&gt;push-down&lt;/i&gt; button then this is sent only when the button goes from the &lt;i&gt;up&lt;/i&gt; to &lt;i&gt;down&lt;/i&gt; state.&lt;/p&gt;&lt;p&gt;To send more complex commands, that could depend on or need to modifies variables within this profile a Lua script should be entered &lt;i&gt;instead&lt;/i&gt; in the editor area below.  Anything entered here is, literally, just sent to the game server.&lt;/p&gt;&lt;p&gt;It is permissable to use both this &lt;i&gt;and&lt;/i&gt; a Lua script - this will be sent &lt;b&gt;before&lt;/b&gt; the script is run.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="269"/>
      <location filename="../src/ui/actions_main_area.ui" line="289"/>
      <source>Text to send to the game as-is (optional)</source>
      <translation>Testo da inviare direttamente al gioco (opzionale)</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="286"/>
      <source>&lt;p&gt;Type in one or more commands you want the button to send directly to the game when this button goes from the &lt;i&gt;down&lt;/i&gt; to &lt;i&gt;up&lt;/i&gt; state.&lt;/p&gt;&lt;p&gt;To send more complex commands, that could depend on or need to modifies variables within this profile a Lua script should be entered &lt;i&gt;instead&lt;/i&gt; in the editor area below.  Anything entered here is, literally, just sent to the game server.&lt;/p&gt;&lt;p&gt;It is permissable to use both this &lt;i&gt;and&lt;/i&gt; a Lua script - this will be sent &lt;b&gt;before&lt;/b&gt; the script is run.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="276"/>
      <source>Command (up):</source>
      <translation>Comando (alto):</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="72"/>
      <source>&lt;p&gt;Choose a good, ideally unique, name for your button, menu or toolbar. This will be displayed in the buttons tree.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Scegli un nome chiaro, idealmente univoco, per il bottone, il menu o la barra degli strumenti. Sarà utilizzato nella vista ad albero dei bottoni.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="308"/>
      <source>Stylesheet:</source>
      <translation>Foglio di stile:</translation>
    </message>
  </context>
  <context>
    <name>aliases_main_area</name>
    <message>
      <location filename="../src/ui/aliases_main_area.ui" line="35"/>
      <source>Name:</source>
      <translation>Nome:</translation>
    </message>
    <message>
      <location filename="../src/ui/aliases_main_area.ui" line="57"/>
      <source>choose a unique name for your alias; it will show in the tree and is needed for scripting.</source>
      <translation>scegli un nome univoco per il tuo alias; sarà mostrato nella vista ad albero ed è necessario per gli script.</translation>
    </message>
    <message>
      <location filename="../src/ui/aliases_main_area.ui" line="76"/>
      <source>Pattern:</source>
      <translation>Pattern:</translation>
    </message>
    <message>
      <location filename="../src/ui/aliases_main_area.ui" line="103"/>
      <source>enter a perl regex pattern for your alias; alias are triggers on your input</source>
      <translation>inserisci una regex perl per il tuo alias; gli alias sono attivati da quello che digiti</translation>
    </message>
    <message>
      <location filename="../src/ui/aliases_main_area.ui" line="110"/>
      <source>Type:</source>
      <translation>Tipo:</translation>
    </message>
    <message>
      <location filename="../src/ui/aliases_main_area.ui" line="124"/>
      <source>Regex</source>
      <translation>Regex</translation>
    </message>
    <message>
      <location filename="../src/ui/aliases_main_area.ui" line="129"/>
      <source>Plain</source>
      <translation>Normale</translation>
    </message>
    <message>
      <location filename="../src/ui/aliases_main_area.ui" line="149"/>
      <source>Command:</source>
      <translation>Comando:</translation>
    </message>
    <message>
      <location filename="../src/ui/aliases_main_area.ui" line="171"/>
      <source>&lt;p&gt;Type in one or more commands you want the alias to send directly to the game if the keys entered match the pattern. (Optional)&lt;/p&gt;&lt;p&gt;To send more complex commands, that could depend on or need to modifies variables within this profile a Lua script should be entered &lt;i&gt;instead&lt;/i&gt; in the editor area below.  Anything entered here is, literally, just sent to the game server.&lt;/p&gt;&lt;p&gt;It is permissable to use both this &lt;i&gt;and&lt;/i&gt; a Lua script - this will be sent &lt;b&gt;before&lt;/b&gt; the script is run.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/aliases_main_area.ui" line="174"/>
      <source>Text to send to the game as-is (optional)</source>
      <translation>Testo da inviare direttamente al gioco (opzionale)</translation>
    </message>
  </context>
  <context>
    <name>cTelnet</name>
    <message>
      <location filename="../src/ctelnet.cpp" line="609"/>
      <source>[ INFO ]  - The IP address of %1 has been found. It is: %2
</source>
      <translation>[ INFO ]  - L'indirizzo IP di %1 è stato trovato: %2
</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="618"/>
      <source>[ ERROR ] - Host name lookup Failure!
Connection cannot be established.
The server name is not correct, not working properly,
or your nameservers are not working properly.</source>
      <translation>[ ERROR ] - Impossibile trovare il nome host!
La connessione non può essere effettuata.
Il nome server non è corretto o non funziona correttamente
o il tuo DNS non è raggiungibile.</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="449"/>
      <source>[ ERROR ] - TCP/IP socket ERROR:</source>
      <translation>[ ERROR ] - Errore del socket TCP/IP:</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="476"/>
      <source>[ INFO ]  - A secure connection has been established successfully.</source>
      <translation>[ INFO ]  - La connessione sicura è stata stabilita con successo.</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="478"/>
      <source>[ INFO ]  - A connection has been established successfully.</source>
      <translation>[ INFO ]  - La connessione è stata stabilita con successo.</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="514"/>
      <source>[ INFO ]  - Connection time: %1
    </source>
      <translation>[ INFO ]  - Tempo di connessione: %1
    </translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="557"/>
      <source>Secure connections aren&apos;t supported by this game on this port - try turning the option off.</source>
      <translation>Le connessioni sicure non sono supportate da questo gioco o da questa porta - prova a disattivare l'opzione.</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="602"/>
      <source>[ INFO ]  - Trying secure connection to %1: %2 ...
</source>
      <translation>[ INFO ]  - Tentativo di connessione sicura a %1: %2 ...
</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="1647"/>
      <location filename="../src/ctelnet.cpp" line="2014"/>
      <source>[ INFO ]  - The server wants to upgrade the GUI to new version &apos;%1&apos;.
Uninstalling old version &apos;%2&apos;.</source>
      <translation>[ INFO ]  - Il server vuole aggiornare la GUI alla nuova versione &apos;%1&apos;.
Disinstallazione della vecchia versione &apos;%2&apos;.</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="1658"/>
      <location filename="../src/ctelnet.cpp" line="2025"/>
      <source>[  OK  ]  - Package is already installed.</source>
      <translation>[  OK  ]  - Il package è già installato.</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="1667"/>
      <location filename="../src/ctelnet.cpp" line="2034"/>
      <source>downloading game GUI from server</source>
      <translation>download GUI del gioco dal server</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="1667"/>
      <location filename="../src/ctelnet.cpp" line="2034"/>
      <source>Cancel</source>
      <comment>Cancel download of GUI package from Server</comment>
      <translation>Annulla</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="1656"/>
      <location filename="../src/ctelnet.cpp" line="2023"/>
      <source>[ INFO ]  - Server offers downloadable GUI (url=&apos;%1&apos;) (package=&apos;%2&apos;).</source>
      <translation>[ INFO ]  - Il server offre una GUI scaricabile (url=&apos;%1&apos;) (package=&apos;%2&apos;).</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="418"/>
      <source>[ INFO ]  - Looking up the IP address of server: %1:%2 ...</source>
      <translation>[ INFO ]  - Ricerca dell'indirizzo IP del server: %1:%2 ...</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="516"/>
      <source>hh:mm:ss.zzz</source>
      <comment>This is the format to be used to show the profile connection time, it follows the rules of the &quot;QDateTime::toString(...)&quot; function and may need modification for some locales, e.g. France, Spain.</comment>
      <translation>hh:mm:ss.zzz</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="547"/>
      <location filename="../src/ctelnet.cpp" line="559"/>
      <source>[ ALERT ] - Socket got disconnected.
Reason: </source>
      <translation>[ ALERT ] - Socket disconnesso.
Motivo: </translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="611"/>
      <source>[ INFO ]  - Trying to connect to %1:%2 ...
</source>
      <translation>[ INFO ]  - Tentativo di connessione a %1:%2 ...
</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="613"/>
      <source>[ INFO ]  - Trying to connect to %1:%2 via proxy...
</source>
      <translation>[ INFO ]  - Tentativo di connessione a %1:%2 tramite proxy...
</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="660"/>
      <source>[ ERROR ] - Internal error, no codec found for current setting of {&quot;%1&quot;}
so Mudlet cannot send data in that format to the Game Server. Please
check to see if there is an alternative that the MUD and Mudlet can
use. Mudlet will attempt to send the data using the ASCII encoding
but will be limited to only unaccented characters of basic English.
Note: this warning will only be issued once, until the encoding is
changed.</source>
      <translation>[ ERROR ] - Errore interno, nessun codec trovato con le impostazioni attuali
{&quot;%1&quot;}. Mudlet non è in grado di inviare dati in questo formato
al server di gioco. Verifica se è presente un codec alternativo che il tuo gioco
e Mudlet possano utilizzare. Mudlet proverà ad inviare i dati in codifica ASCII,
ma sarà limitato ai soli caratteri non accentati dell'inglese base.
Nota: questo avviso sarà mostrato una sola volta, fintanto che la codifica
non sarà variata nuovamente.</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="2316"/>
      <source>ERROR</source>
      <comment>Keep the capisalisation, the translated text at 7 letters max so it aligns nicely</comment>
      <translation>ERROR</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="2328"/>
      <source>LUA</source>
      <comment>Keep the capisalisation, the translated text at 7 letters max so it aligns nicely</comment>
      <translation>LUA</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="2339"/>
      <source>WARN</source>
      <comment>Keep the capisalisation, the translated text at 7 letters max so it aligns nicely</comment>
      <translation>WARN</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="2350"/>
      <source>ALERT</source>
      <comment>Keep the capisalisation, the translated text at 7 letters max so it aligns nicely</comment>
      <translation>ALERT</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="2361"/>
      <source>INFO</source>
      <comment>Keep the capisalisation, the translated text at 7 letters max so it aligns nicely</comment>
      <translation>INFO</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="2372"/>
      <source>OK</source>
      <comment>Keep the capisalisation, the translated text at 7 letters max so it aligns nicely</comment>
      <translation>OK</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="2555"/>
      <source>[ INFO ]  - Loading replay file:
&quot;%1&quot;.</source>
      <translation>[ INFO ]  - Caricamento file di replay:
&quot;%1&quot;.</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="2574"/>
      <source>Cannot perform replay, another one may already be in progress. Try again when it has finished.</source>
      <translation>Impossibile avviare il file di replay, un altro potrebbe già essere in esecuzione. Tenta di nuovo quando sarà terminato.</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="2576"/>
      <source>[ WARN ]  - Cannot perform replay, another one may already be in progress.
Try again when it has finished.</source>
      <translation>[ WARN ] - Impossibile avviare il file di replay, un altro potrebbe già essere in esecuzione. Tenta di nuovo quando sarà terminato.</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="2584"/>
      <source>Cannot read file &quot;%1&quot;, error message was: &quot;%2&quot;.</source>
      <translation>Impossibile leggere il file &quot;%1&quot;, il messaggio di errore è: &quot;%2&quot;.</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="2587"/>
      <source>[ ERROR ] - Cannot read file &quot;%1&quot;,
error message was: &quot;%2&quot;.</source>
      <translation>[ ERROR ] - Impossibile leggere il file &quot;%1&quot;,
il messaggio di errore è: &quot;%2&quot;.</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="2615"/>
      <source>[  OK  ]  - The replay has ended.</source>
      <translation>[  OK  ]  - Il file di replay è terminato.</translation>
    </message>
  </context>
  <context>
    <name>color_trigger</name>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="17"/>
      <source>ANSI 256 Color chooser</source>
      <translation>ANSI 256 Scelta colori</translation>
    </message>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="39"/>
      <source>&lt;small&gt;Choose:&lt;ul&gt;&lt;li&gt;one of the basic 16 colors below&lt;/li&gt;
&lt;li&gt;click the &lt;i&gt;more&lt;/i&gt; button to get access to other colors in the 256-color set, then follow the instructions to select a color from that part of the 256 colors supported; if such a color is already in use then that part will already be showing&lt;/li&gt;
&lt;li&gt;click the &lt;i&gt;Default&lt;/i&gt; or &lt;i&gt;Ignore&lt;/i&gt; buttons at the bottom for a pair of other special cases&lt;/li&gt;
&lt;li&gt;click &lt;i&gt;Cancel&lt;/i&gt; to close this dialog without making any changes&lt;/li&gt;&lt;/ul&gt;&lt;/small&gt;</source>
      <comment>Ensure that &quot;Default&quot;, &quot;Ignore&quot; and &quot;Cancel&quot; in this instruction are the same as used for the controls elsewhere on this dialog.</comment>
      <translation>&lt;small&gt;Scegli cosa fare:&lt;ul&gt;&lt;li&gt;seleziona uno dei 16 colori basi presenti nell'elenco sottostante&lt;/li&gt;
&lt;li&gt;utilizza il bottone &lt;i&gt;Altri colori&lt;/i&gt; per visualizzare fino a 256 colori, poi segui le istruzioni per selezionarne la parte supportata dal tuo gioco; se uno dei colori è già in uso sarà evidenziato in modo differente&lt;/li&gt;
&lt;li&gt;utilizza i bottoni &lt;i&gt;Predefinito&lt;/i&gt; o &lt;i&gt;Ignora&lt;/i&gt;, rispettivamente, per ripristinare i valori di base della colorazione o per ignorare il colore del carattere/sfondo&lt;/li&gt;
&lt;li&gt;utilizza il bottone &lt;i&gt;Annulla&lt;/i&gt; per chiudere la finestra di dialogo senza effettuare modifiche&lt;/li&gt;&lt;/ul&gt;&lt;/small&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="58"/>
      <source>Basic ANSI Colors [0-15] - click a button to select that color number directly:</source>
      <translation>Colori ANSI di base [0-15] - premi il bottone per selezionare il numero del colore direttamente:</translation>
    </message>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="240"/>
      <source>ANSI 6R x 6G x 6B Colors [16-231] - adjust red, green, blue and click button to select matching color number:</source>
      <translation>ANSI 6R x 6G x 6B Colori [16-231] - imposta il rosso, verde, blu e premi il bottone per selezionare il numero colore corrispondente:</translation>
    </message>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="252"/>
      <source>Red (0-5)</source>
      <translation>Rosso (0-5)</translation>
    </message>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="262"/>
      <source>Green (0-5)</source>
      <translation>Verde (0-5)</translation>
    </message>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="272"/>
      <source>Blue (0-5)</source>
      <translation>Blu (0-5)</translation>
    </message>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="282"/>
      <source>16 + 36 x R + 6 x G + B =</source>
      <translation>16 + 36 x R + 6 x V + B =</translation>
    </message>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="343"/>
      <source>[16]</source>
      <translation>[16]</translation>
    </message>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="353"/>
      <source>Set to RGB value</source>
      <translation>Imposta valore RGB</translation>
    </message>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="363"/>
      <source>ANSI 24 Grays scale [232-255] - adjust gray and click button to select matching color number:</source>
      <translation>ANSI 24 Scala di grigi [232-255] - imposta il grigio e premi sul bottone per selezionare il numero di colore corrispondente:</translation>
    </message>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="375"/>
      <source>Gray (0-23)</source>
      <translation>Grigio (0-23)</translation>
    </message>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="382"/>
      <source>232 + Gr =</source>
      <translation>232 + Gr =</translation>
    </message>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="414"/>
      <source>[232]</source>
      <translation>[232]</translation>
    </message>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="424"/>
      <source>Set to Grayscale value</source>
      <translation>Imposta valore scala di grigi</translation>
    </message>
  </context>
  <context>
    <name>composer</name>
    <message>
      <location filename="../src/ui/composer.ui" line="14"/>
      <source>News and Message Composer</source>
      <translation>Compositore di notizie e messaggi</translation>
    </message>
    <message>
      <location filename="../src/ui/composer.ui" line="86"/>
      <source>Cancel</source>
      <translation>Annulla</translation>
    </message>
    <message>
      <location filename="../src/ui/composer.ui" line="99"/>
      <source>&lt;p&gt;Save (&lt;span style=&quot; color:#565656;&quot;&gt;Shift+Tab&lt;/span&gt;)&lt;/p&gt;</source>
      <translation>&lt;p&gt;Salva (&lt;span style=&quot; color:#565656;&quot;&gt;Shift+Tab&lt;/span&gt;)&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/composer.ui" line="102"/>
      <source>Save</source>
      <translation>Salva</translation>
    </message>
  </context>
  <context>
    <name>connection_profiles</name>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="20"/>
      <source>Select a profile to connect with</source>
      <translation>Selezionare un profilo a cui collegarsi</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="101"/>
      <source>profiles list</source>
      <translation>elenco profili</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="363"/>
      <source>Remove</source>
      <translation>Elimina</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="382"/>
      <source>Copy</source>
      <translation>Copia</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="407"/>
      <source>New</source>
      <translation>Nuovo</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="462"/>
      <source>welcome message</source>
      <translation>messaggio di benvenuto</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="478"/>
      <source>Required</source>
      <translation>Dati Richiesti</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="484"/>
      <source>Profile name:</source>
      <translation>Nome profilo:</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="500"/>
      <source>Profile name</source>
      <translation>Nome profilo</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="503"/>
      <source>A unique name for the profile but which is limited to a subset of ascii characters only.</source>
      <comment>Using lower case letters for &apos;ASCII&apos; may make speech synthesisers say &apos;askey&apos; which is quicker than &apos;Aay Ess Cee Eye Eye&apos;!</comment>
      <translation>Un nome univoco per il profilo, limitato ad un sottoinsieme di caratteri ascii.</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="513"/>
      <source>Server address:</source>
      <translation>Indirizzo server:</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="535"/>
      <source>Game server URL</source>
      <translation>URL server di gioco</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="538"/>
      <source>The Internet host name or IP address</source>
      <translation>Inserisci il nome host o indirizzo IP</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="545"/>
      <source>Port:</source>
      <translation>Porta:</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="573"/>
      <source>Game server port</source>
      <translation>Porta server di gioco</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="576"/>
      <source>The port that is used together with the server name to make the connection to the game server. If not specified a default of 23 for &quot;Telnet&quot; connections is used. Secure connections may require a different port number.</source>
      <translation>La porta che viene utilizzata insieme al nome host per effettuare la connessione al server di gioco. Se non è specificato, viene utilizzato il valore predefinito di 23 per le connessioni &quot;Telnet&quot;. Le connessioni sicure possono richiedere un numero di porta diverso.</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="595"/>
      <source>Connect via a secure protocol</source>
      <translation>Connessione con un protocollo sicuro</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="598"/>
      <source>Make Mudlet use a secure SSL/TLS protocol instead of an unencrypted one</source>
      <translation>Fai in modo che Mudlet utilizzi un protocollo sicuro SSL/TLS</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="604"/>
      <source>Secure:</source>
      <translation>Sicurezza:</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="611"/>
      <source>Profile history:</source>
      <translation>Cronologia profilo:</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="634"/>
      <source>load newest profile</source>
      <translation>carica il profilo più recente</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="639"/>
      <source>load oldest profile</source>
      <translation>carica il profilo più vecchio</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="662"/>
      <source>Optional</source>
      <translation>Opzionale</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="678"/>
      <source>Character name:</source>
      <translation>Nome del personaggio:</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="688"/>
      <source>The characters name</source>
      <translation>Il nome del personaggio</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="691"/>
      <source>Character name</source>
      <translation>Nome personaggio</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="694"/>
      <source>If provided will be sent, along with password to identify the user in the game.</source>
      <translation>Se fornito sarà inviato, insieme alla password per identificare il giocatore nel gioco.</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="713"/>
      <source>Auto-open profile</source>
      <translation>Auto-apertura profilo</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="716"/>
      <source>Automatically start this profile when Mudlet is run</source>
      <translation>Carica automaticamente questo profilo quando viene avviato Mudlet</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="729"/>
      <source>Auto-reconnect</source>
      <translation>Riconnessione automatica</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="732"/>
      <source>Automatically reconnect this profile if it should become disconnected for any reason other than the user disconnecting from the game server.</source>
      <translation>Ricollega automaticamente questo profilo in caso si dovesse scollegare per qualsiasi motivo che non sia la disconnessione dell'utente dal server di gioco.</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="748"/>
      <source>Password</source>
      <translation>Password</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="751"/>
      <source>If provided will be sent, along with the character name to identify the user in the game.</source>
      <translation>Se fornito sarà inviato, insieme al nome del personaggio per identificare il giocatore nel gioco.</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="764"/>
      <source>Enable Discord integration (not supported by game)</source>
      <translation>Abilita integrazione con Discord (non supportata dal gioco)</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="770"/>
      <source>Allow this profile to use Mudlet&apos;s Discord &quot;Rich Presence&quot;  features</source>
      <translation>Permetti a questo profilo di utilizzare le funzione Discord &quot;Rich Presence&quot; di Mudlet</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="876"/>
      <location filename="../src/ui/connection_profiles.ui" line="879"/>
      <source>Game description or your notes</source>
      <translation>Descrizione del gioco o note personali</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="668"/>
      <source>Password:</source>
      <translation>Password:</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="745"/>
      <source>Characters password. Note that the password isn&apos;t encrypted in storage</source>
      <translation>Password del personaggio. NOTA: la password è salvata in chiaro</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="710"/>
      <source>With this enabled, Mudlet will automatically start and connect on this profile when it is launched</source>
      <translation>Con questa opzione abilitata, quando Mudlet si connetterà automaticamente a questo profilo all'avvio</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="722"/>
      <source>Open profile on Mudlet start</source>
      <translation>Apri profilo all'avvio di Mudlet</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="738"/>
      <source>Reconnect automatically</source>
      <translation>Riconnetti automaticamente</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="767"/>
      <source>Discord integration</source>
      <translation>Integrazione con Discord</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="805"/>
      <source>Informational</source>
      <translation>Informazioni</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="832"/>
      <source>Website:</source>
      <translation>Sito web:</translation>
    </message>
  </context>
  <context>
    <name>custom_line_properties</name>
    <message>
      <location filename="../src/ui/custom_lines_properties.ui" line="27"/>
      <source>Custom Line Properties [*]</source>
      <translation>Proprietà riga personalizzata [*]</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines_properties.ui" line="46"/>
      <source>Line Settings:</source>
      <translation>Impostazioni linea:</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines_properties.ui" line="84"/>
      <source>Color:</source>
      <translation>Colore:</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines_properties.ui" line="58"/>
      <source>Style:</source>
      <translation>Stile:</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines_properties.ui" line="43"/>
      <source>&lt;p&gt;Select Style, Color and whether to end the line with an arrow head.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Seleziona stile, colore e se terminare la linea con una freccia.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines_properties.ui" line="122"/>
      <source>Ends with an arrow:</source>
      <translation>Termina con una freccia:</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines_properties.ui" line="138"/>
      <source>Exit Details:</source>
      <translation>Dettagli Uscita:</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines_properties.ui" line="153"/>
      <source>Origin:</source>
      <translation>Origine:</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines_properties.ui" line="226"/>
      <source>Destination:</source>
      <translation>Destinazione:</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines_properties.ui" line="188"/>
      <source>    Direction/Command:</source>
      <translation>    Direzione/Comando:</translation>
    </message>
  </context>
  <context>
    <name>custom_lines</name>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="14"/>
      <source>Custom Line selection</source>
      <translation>Seleziona linea personalizzata</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="44"/>
      <source>Choose line format, color and arrow option and then select the exit to start drawing</source>
      <translation>Scegli il formato linea, colore e tipo di freccia. Seleziona, quindi, l'uscita per iniziare a disegnare</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="63"/>
      <source>Line Settings:</source>
      <translation>Impostazioni linea:</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="97"/>
      <source>Ends with an arrow:</source>
      <translation>Termina con una freccia:</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="110"/>
      <source>Style:</source>
      <translation>Stile:</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="126"/>
      <source>Color:</source>
      <translation>Colore:</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="47"/>
      <source>&lt;p&gt;Selecting an exit immediately proceeds to drawing the first line segment from the centre point of the room.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Seleziona un'uscita per iniziare a disegnare il primo segmento di linea dal centro della stanza a cui appartiene.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="60"/>
      <source>&lt;p&gt;Select Style, Color and whether to end the line with an arrow head BEFORE then choosing the exit to draw the line for...&lt;/p&gt;</source>
      <translation>&lt;p&gt;Seleziona stile, colore e se terminare la linea con una freccia PRIMA di scegliere l'uscita con cui collegarla...&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="187"/>
      <source>&lt;p&gt;Select a normal exit to commence drawing a line for it, buttons are shown depressed if they already have such a custom line and disabled if there is not exit in that direction.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Seleziona un'uscita per iniziare a disegnare una linea, i pulsanti sono premuti se hanno già una linea personalizzata e sono disabilitati se non c'è un uscita in quella direzione.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="190"/>
      <source>Normal Exits:</source>
      <translation>Uscita Normale:</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="212"/>
      <source>NW</source>
      <translation>NO</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="235"/>
      <source>N</source>
      <translation>N</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="258"/>
      <source>NE</source>
      <translation>NE</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="297"/>
      <source>UP</source>
      <translation>ALTO</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="336"/>
      <source>W</source>
      <translation>O</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="346"/>
      <source>E</source>
      <translation>E</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="356"/>
      <source>IN</source>
      <translation>ENTRA</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="382"/>
      <source>OUT</source>
      <translation>ESCI</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="392"/>
      <source>SW</source>
      <translation>SO</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="402"/>
      <source>S</source>
      <translation>S</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="412"/>
      <source>SE</source>
      <translation>SE</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="422"/>
      <source>DOWN</source>
      <translation>BASSO</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="444"/>
      <source>&lt;p&gt;Select a special exit to commence drawing a line for it, the first column is checked if the exit already has such a custom line.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Selezionare un'uscita speciale per iniziare a disegnare la riga di collegamento, la prima colonna è selezionata se l'uscita dispone già di una stile di linea personalizzato.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="503"/>
      <source>&lt;p&gt;Indicates if there is already a custom line for this special exit, will be replaced if the exit is selected.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Indica se c'è già una linea personalizzata per questa uscita speciale, verrà sostituita se viene selezionata l'uscita.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="514"/>
      <source>&lt;p&gt;The room this special exit leads to.&lt;/p&gt;</source>
      <translation>&lt;p&gt;La stanza a cui questa uscita speciale è assegnata.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="525"/>
      <source>&lt;p&gt;The command or LUA script that goes to the given room.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Il comando o lo script LUA che va inserito nella stanza specificata.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="561"/>
      <source>&lt;p&gt;To remove a custom line: cancel this dialog, select the line and right-click to obtain a &amp;quot;delete&amp;quot; option.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Per rimuovere una linea personalizzata: annulla questa finestra di dialogo, seleziona la linea e fare clic con il tasto destro del mouse per visualizzare l'opzione &amp;quot;Elimina&amp;quot;.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="447"/>
      <source>Special Exits:</source>
      <translation>Uscite Speciali:</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="499"/>
      <source>Has
custom line?</source>
      <translation>Ha
linee personalizzate?</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="511"/>
      <source> Destination </source>
      <translation> Destinazione </translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="522"/>
      <source> Command</source>
      <translation> Comando</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="567"/>
      <source>Cancel</source>
      <translation>Annulla</translation>
    </message>
  </context>
  <context>
    <name>delete_profile_confirmation</name>
    <message>
      <location filename="../src/ui/delete_profile_confirmation.ui" line="14"/>
      <source>Confirm permanent profile deletion</source>
      <translation>Confermare l'eliminazione permanente del profilo</translation>
    </message>
    <message>
      <location filename="../src/ui/delete_profile_confirmation.ui" line="26"/>
      <source>Are you sure that you&apos;d like to delete this profile? Everything (aliases, triggers, backups, etc) will be gone.

If you are, please type in the profile name as a confirmation:</source>
      <translation>Sei sicuro di voler cancellare questo profilo? Ogni elemento (alias, trigger, backup, ecc) sarà eliminato per sempre.

Per confermare digita il nome del profilo:</translation>
    </message>
    <message>
      <location filename="../src/ui/delete_profile_confirmation.ui" line="54"/>
      <source>Delete</source>
      <translation>Elimina</translation>
    </message>
    <message>
      <location filename="../src/ui/delete_profile_confirmation.ui" line="61"/>
      <source>Cancel</source>
      <translation>Annulla</translation>
    </message>
  </context>
  <context>
    <name>dialog</name>
    <message>
      <location filename="../src/ui/glyph_usage.ui" line="39"/>
      <source>Status</source>
      <translation>Stato</translation>
    </message>
    <message>
      <location filename="../src/ui/glyph_usage.ui" line="44"/>
      <source>Symbol
(Set Font)</source>
      <translation>Simbolo
(imposta carattere)</translation>
    </message>
    <message>
      <location filename="../src/ui/glyph_usage.ui" line="50"/>
      <source>Symbol
(All Fonts)</source>
      <translation>Simbolo
(Tutti i Font)</translation>
    </message>
    <message>
      <location filename="../src/ui/glyph_usage.ui" line="56"/>
      <source>Codepoints</source>
      <translation>Mappa caratteri</translation>
    </message>
    <message>
      <location filename="../src/ui/glyph_usage.ui" line="61"/>
      <source>Usage
Count</source>
      <translation>Conteggio
Utilizzi</translation>
    </message>
    <message>
      <location filename="../src/ui/glyph_usage.ui" line="67"/>
      <source>Rooms</source>
      <translation>Stanze</translation>
    </message>
  </context>
  <context>
    <name>directions</name>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13853"/>
      <source>north</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>nord</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13855"/>
      <source>n</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>n</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13857"/>
      <source>east</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>est</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13859"/>
      <source>e</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>e</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13861"/>
      <source>south</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>sud</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13863"/>
      <source>s</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>s</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13865"/>
      <source>west</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>ovest</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13867"/>
      <source>w</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>o</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13869"/>
      <source>northeast</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>nord-est</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13871"/>
      <source>ne</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>ne</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13873"/>
      <source>southeast</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>sud-est</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13875"/>
      <source>se</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>se</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13877"/>
      <source>southwest</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>sud-ovest</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13879"/>
      <source>sw</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>so</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13881"/>
      <source>northwest</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>nord-ovest</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13883"/>
      <source>nw</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>no</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13885"/>
      <source>in</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>dentro</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13887"/>
      <source>i</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>i</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13889"/>
      <source>out</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>fuori</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13891"/>
      <source>o</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>o</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13893"/>
      <source>up</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>alto</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13895"/>
      <source>u</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>u</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13897"/>
      <source>down</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>basso</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13899"/>
      <source>d</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>d</translation>
    </message>
  </context>
  <context>
    <name>dlgAboutDialog</name>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="146"/>
      <source>&lt;tr&gt;&lt;td&gt;&lt;span style=&quot;color:#bc8942;&quot;&gt;&lt;b&gt;Homepage&lt;/b&gt;&lt;/span&gt;&lt;/td&gt;&lt;td&gt;&lt;a href=&quot;http://www.mudlet.org/&quot;&gt;www.mudlet.org&lt;/a&gt;&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;&lt;span style=&quot;color:#bc8942;&quot;&gt;&lt;b&gt;Forums&lt;/b&gt;&lt;/span&gt;&lt;/td&gt;&lt;td&gt;&lt;a href=&quot;http://forums.mudlet.org/&quot;&gt;forums.mudlet.org&lt;/a&gt;&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;&lt;span style=&quot;color:#bc8942;&quot;&gt;&lt;b&gt;Documentation&lt;/b&gt;&lt;/span&gt;&lt;/td&gt;&lt;td&gt;&lt;a href=&quot;http://wiki.mudlet.org/w/Main_Page&quot;&gt;wiki.mudlet.org/w/Main_Page&lt;/a&gt;&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;&lt;span style=&quot;color:#7289DA;&quot;&gt;&lt;b&gt;Discord&lt;/b&gt;&lt;/span&gt;&lt;/td&gt;&lt;td&gt;&lt;a href=&quot;https://www.mudlet.org/chat&quot;&gt;discord.gg&lt;/a&gt;&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;&lt;span style=&quot;color:#40b040;&quot;&gt;&lt;b&gt;Source code&lt;/b&gt;&lt;/span&gt;&lt;/td&gt;&lt;td&gt;&lt;a href=&quot;https://github.com/Mudlet/Mudlet&quot;&gt;github.com/Mudlet/Mudlet&lt;/a&gt;&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;&lt;span style=&quot;color:#40b040;&quot;&gt;&lt;b&gt;Features/bugs&lt;/b&gt;&lt;/span&gt;&lt;/td&gt;&lt;td&gt;&lt;a href=&quot;https://github.com/Mudlet/Mudlet/issues&quot;&gt;github.com/Mudlet/Mudlet/issues&lt;/a&gt;&lt;/td&gt;&lt;/tr&gt;</source>
      <translation>&lt;tr&gt;&lt;td&gt;&lt;span style=&quot;color:#bc8942;&quot;&gt;&lt;b&gt;Homepage&lt;/b&gt;&lt;/span&gt;&lt;/td&gt;&lt;td&gt;&lt;a href=&quot;http://www.mudlet.org/&quot;&gt;www.mudlet.org&lt;/a&gt;&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;&lt;span style=&quot;color:#bc8942;&quot;&gt;&lt;b&gt;Forum&lt;/b&gt;&lt;/span&gt;&lt;/td&gt;&lt;td&gt;&lt;a href=&quot;http://forums.mudlet.org/&quot;&gt;forums.mudlet.org&lt;/a&gt;&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;&lt;span style=&quot;color:#bc8942;&quot;&gt;&lt;b&gt;Documentazione&lt;/b&gt;&lt;/span&gt;&lt;/td&gt;&lt;td&gt;&lt;a href=&quot;http://wiki.mudlet.org/w/Main_Page&quot;&gt;wiki.mudlet.org/w/Main_Page&lt;/a&gt;&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;&lt;span style=&quot;color:#7289DA;&quot;&gt;&lt;b&gt;Discord&lt;/b&gt;&lt;/span&gt;&lt;/td&gt;&lt;td&gt;&lt;a href=&quot;https://www.mudlet.org/chat&quot;&gt;discord.gg&lt;/a&gt;&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;&lt;span style=&quot;color:#40b040;&quot;&gt;&lt;b&gt;Codice sorgente&lt;/b&gt;&lt;/span&gt;&lt;/td&gt;&lt;td&gt;&lt;a href=&quot;https://github.com/Mudlet/Mudlet&quot;&gt;github.com/Mudlet/Mudlet&lt;/a&gt;&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;&lt;span style=&quot;color:#40b040;&quot;&gt;&lt;b&gt;Richieste/bug&lt;/b&gt;&lt;/span&gt;&lt;/td&gt;&lt;td&gt;&lt;a href=&quot;https://github.com/Mudlet/Mudlet/issues&quot;&gt;github.com/Mudlet/Mudlet/issues&lt;/a&gt;&lt;/td&gt;&lt;/tr&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="155"/>
      <source>Original author, original project lead, Mudlet core coding, retired.</source>
      <comment>about:Heiko</comment>
      <translation>Primo autore, creatore del progetto, coder di Mudlet, ritirato.</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="158"/>
      <source>GUI design and initial feature planning. He is responsible for the project homepage and the user manual. Maintainer of the Windows, macOS, Ubuntu and generic Linux installers. Maintains the Mudlet wiki, Lua API, and handles project management, public relations &amp;amp; user help. With the project from the very beginning and is an official spokesman of the project. Since the retirement of Heiko, he has become the head of the Mudlet project.</source>
      <comment>about:Vadi</comment>
      <translation>Ha disegnato la GUI e ha studiato il rilascio delle prime funzionalità. E'il responsabile del sito del progetto e del manuale utente. Si occupa del programma di installazione per Windows, MacOS, UBuntu e Linux (generico). Aggiorna la wiki di Mudlet, le API Lua e gestisce il progetto, le pubbliche relazioni e l'aiuto agli utenti. Si è unito al progetto dall'inizio e ne è il portavoce ufficiale. Dall'abbandono di Heiko è diventato il responsabile del progetto.</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="165"/>
      <source>After joining in 2013, he has been poking various bits of the C++ code and GUI with a pointy stick; subsequently trying to patch over some of the holes made/found. Most recently he has been working on I18n and L10n for Mudlet 4.0.0 so if you are playing Mudlet in a language other than American English you will be seeing the results of him getting fed up with the spelling differences between what was being used and the British English his brain wanted to see.</source>
      <comment>about:SlySven</comment>
      <translation>Dopo essersi unito nel 2013, ha frugato in ogni bit del codice C++ e della GUI con la sua penna rossa da maestrina, cercando di sistemare ogni imperfezione. Recentemente ha lavorato sul sistema l18n e l10n per Mudlet 4.0.0 quindi se stai giocando in una lingua differente dall'inglese americano è merito del suo lavoro.</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="172"/>
      <source>Former maintainer of the early Windows and Apple OSX packages. He also administers our server and helps the project in many ways.</source>
      <comment>about:demonnic</comment>
      <translation>Ex-sviluppatore delle prime versioni di Mudlet per Windows e Apple OSX. Ha gestito il nostro server e aiutato il progetto in molti modi.</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="176"/>
      <source>Contributed many improvements to Mudlet&apos;s db: interface, event system, and has been around the project for a very long while assisting users.</source>
      <comment>about:keneanung</comment>
      <translation>Ha contribuito a migliorare l'interfaccia db di Mudlet, il gestore di event e ha collaborato per lungo tempo aiutando gli utenti.</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="180"/>
      <source>Does a ton of work in making Mudlet, the website and the wiki accessible to you regardless of the language you speak - and promoting our genre!</source>
      <comment>about:Leris</comment>
      <translation>Ha fatto tantissimo lavoro per rendere Mudlet, il sito web e la wiki accessibili a prescindere dalla lingua parlata - e promuovere il nostro stile!</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="184"/>
      <source>Contributions to the Travis integration, CMake and Visual C++ build, a lot of code quality and memory management improvements.</source>
      <comment>about:ahmedcharles</comment>
      <translation>Ha contribuito all'integrazione con Travis, CMake e il compilatore Visual C++, ha ottimizzato molte parti del codice e migliorato la gestione della memoria.</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="188"/>
      <source>Developed a shared module system that allows script packages to be shared among profiles, a UI for viewing Lua variables, improvements in the mapper and all around.</source>
      <comment>about:Chris7</comment>
      <translation>Ha sviluppato il sistema di moduli condivisi che permette di utilizzare lo stesso package in più profili. Ha creato una UI per visualizzare le variabili Lua, ha contribuito a migliorare il mapper e non solo.</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="192"/>
      <source>Developed the first version of our Mac OSX installer. He is the former maintainer of the Mac version of Mudlet.</source>
      <comment>about:Ben Carlsen</comment>
      <translation>Ha sviluppato la prima versione del nostro programma di installazione per Mac OSX. E' l'ex manutentore della versione Mac di Mudlet.</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="196"/>
      <source>Joined in December 2009 though he&apos;s been around much longer. Contributed to the Lua API and is the former maintainer of the Lua API.</source>
      <comment>about:Ben Smith</comment>
      <translation>Si è unito al gruppo nel Dicembre 2009 anche se collaborava già da tempo. Ha contribuito alle API Lua e ne ha contribuito alla manutenzione.</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="200"/>
      <source>Joined in December 2009. He has contributed to the Lua API, submitted small bugfix patches and has helped with release management of 1.0.5.</source>
      <comment>about:Blaine von Roeder</comment>
      <translation>Si è unito al gruppo nel Dicembre 2009. Ha contribuito alle API Lua, inviando varie patch di correzione bug e ha aiutato con il rilascio della versione 1.0.5.</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="204"/>
      <source>Developed the original cmake build script and he has committed a number of patches.</source>
      <comment>about:Bruno Bigras</comment>
      <translation>Ha sviluppato lo script cmake di build originale e ha inviato numerose patch.</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="207"/>
      <source>Contributed to the Lua API.</source>
      <comment>about:Carter Dewey</comment>
      <translation>Contribuito alle API Lua.</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="210"/>
      <source>Developed the Vyzor GUI Manager for Mudlet.</source>
      <comment>about:Oneymus</comment>
      <translation>Sviluppato il Vyzor GUI Manager per Mudlet.</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="213"/>
      <source>Worked wonders in rejuventating our Website in 2017 but who prefers a little anonymity - if you are a &lt;i&gt;SpamBot&lt;/i&gt; you will not get onto our Fora now. They have also made some useful C++ core code contributions and we look forward to future reviews on and work in that area.</source>
      <comment>about:TheFae</comment>
      <translation>Ha fatto miracoli per ringiovanire il sito nel 2017, ma preferisce restare anonimo - se sei uno &lt;i&gt;SpamBot&lt;/i&gt; non potrai più accedere al nostro forum. Ha anche creato dell'utile codice C++ per il core di Mudlet e stiamo aspettando cosa produrrà nel futuro in questo settore.</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="218"/>
      <source>Joining us 2017 they have given us some useful C++ and Lua contributions.</source>
      <comment>about:Dicene</comment>
      <translation>Si sono uniti al team nel 2017 e hanno dato molti contributi in C++ e Lua.</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="221"/>
      <source>Contributed the Geyser layout manager for Mudlet in March 2010. It is written in Lua and aims at simplifying user GUI scripting.</source>
      <comment>about:James Younquist</comment>
      <translation>Ha contribuito al gestore di finestre Geyser per Mudlet nel marzo 2010. È scritto in Lua e serve a semplificare la creazione dell'interfaccia utente.</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="225"/>
      <source>Helped develop and debug the Lua API.</source>
      <comment>about:John Dahlström</comment>
      <translation>Ha contribuito a sviluppare e eseguire il debug delle API Lua.</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="228"/>
      <source>Contributed several improvements and new features for Geyser.</source>
      <comment>about:Beliaar</comment>
      <translation>Ha contribuito a migliorare e aggiungere funzionalità per Geyser.</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="231"/>
      <source>The original author of our Windows installer.</source>
      <comment>about:Leigh Stillard</comment>
      <translation>L'autore originale del nostro programma di installazione per Windows.</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="234"/>
      <source>Worked on the manual, forum help and helps with GUI design and documentation.</source>
      <comment>about:Maksym Grinenko</comment>
      <translation>Ha lavorato sul manuale, sul forum e aiuta con la progettazione e la documentazione della GUI.</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="237"/>
      <source>Developed a database Lua API that allows for far easier use of databases and one of the original OSX installers.</source>
      <comment>about:Stephen Hansen</comment>
      <translation>Ha sviluppato delle API Lua per il database che ne consentono un utilizzo molto più semplice e ha creato uno dei primi programmi di installazione per OSX.</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="240"/>
      <source>Designed our beautiful logo, our splash screen, the about dialog, our website, several icons and badges. Visit his homepage at &lt;a href=&quot;http://thorwil.wordpress.com/&quot;&gt;thorwil.wordpress.com&lt;/a&gt;.</source>
      <comment>about:Thorsten Wilms</comment>
      <translation>Ha progettato il nostro fantastico logo, la finestra di caricamento e quella delle informazioni, il sito internet, varie icone e badge. Visita il suo sito &lt;a href=&quot;http://thorwil.wordpress.com/&quot;&gt;thorwil.wordpress.com&lt;/a&gt;.</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="249"/>
      <source>&lt;p&gt;Others too, have make their mark on different aspects of the Mudlet project and if they have not been mentioned here it is by no means intentional! For past contributors you may see them mentioned in the &lt;b&gt;&lt;a href=&quot;https://launchpad.net/~mudlet-makers/+members#active&quot;&gt;Mudlet Makers&lt;/a&gt;&lt;/b&gt; list (on our former bug-tracking site), or for on-going contributors they may well be included in the &lt;b&gt;&lt;a href=&quot;https://github.com/Mudlet/Mudlet/graphs/contributors&quot;&gt;Contributors&lt;/a&gt;&lt;/b&gt; list on GitHub.&lt;/p&gt;
&lt;br&gt;
&lt;p&gt;Many icons are taken from the &lt;span style=&quot;color:#bc8942;&quot;&gt;&lt;b&gt;&lt;u&gt;KDE4 oxygen icon theme&lt;/u&gt;&lt;/b&gt;&lt;/span&gt; at &lt;a href=&quot;https://web.archive.org/web/20130921230632/http://www.oxygen-icons.org/&quot;&gt;www.oxygen-icons.org &lt;sup&gt;{wayback machine archive}&lt;/sup&gt;&lt;/a&gt; or &lt;a href=&quot;http://www.kde.org&quot;&gt;www.kde.org&lt;/a&gt;.  Most of the rest are from Thorsten Wilms, or from Stephen Lyons combining bits of Thorsten&apos;s work with the other sources.&lt;/p&gt;
&lt;p&gt;Special thanks to &lt;span style=&quot;color:#bc8942;&quot;&gt;&lt;b&gt;Brett Duzevich&lt;/b&gt;&lt;/span&gt; and &lt;span style=&quot;color:#bc8942;&quot;&gt;&lt;b&gt;Ronny Ho&lt;/b&gt;&lt;/span&gt;. They have contributed many good ideas and thus helped improve the scripting framework substantially.&lt;/p&gt;
&lt;p&gt;Thanks to &lt;span style=&quot;color:#bc8942;&quot;&gt;&lt;b&gt;Tomas Mecir&lt;/b&gt;&lt;/span&gt; (&lt;span style=&quot;color:#0000ff;&quot;&gt;kmuddy@kmuddy.com&lt;/span&gt;) who brought us all together and inspired us with his KMuddy project. Mudlet is using some of the telnet code he wrote for his KMuddy project (&lt;a href=&quot;https://cgit.kde.org/kmuddy.git/&quot;&gt;cgit.kde.org/kmuddy.git/&lt;/a&gt;).&lt;/p&gt;
&lt;p&gt;Special thanks to &lt;span style=&quot;color:#bc8942;&quot;&gt;&lt;b&gt;Nick Gammon&lt;/b&gt;&lt;/span&gt; (&lt;a href=&quot;http://www.gammon.com.au/mushclient/mushclient.htm&quot;&gt;www.gammon.com.au/mushclient/mushclient.htm&lt;/a&gt;) for giving us some valued pieces of advice.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="294"/>
      <source>&lt;p&gt;Mudlet was originally written by Heiko Köhn, KoehnHeiko@googlemail.com.&lt;/p&gt;
&lt;p&gt;Mudlet is released under the GPL license version 2, which is reproduced below:&lt;/p&gt;</source>
      <comment>For non-english language versions please append a translation of the following to explain why the GPL is NOT reproduced in the relevent language: &apos;but only the English form is considered the official version of the license, so the following is reproduced in that language:&apos; to replace &apos;which is reproduced below:&apos;...</comment>
      <translation>&lt;p&gt;Mudlet was originally written by Heiko Köhn, KoehnHeiko@googlemail.com.&lt;/p&gt;
&lt;p&gt;Mudlet is released under the GPL license version 2, which is reproduced below:&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="590"/>
      <source>&lt;p align=&quot;center&quot;&gt;&lt;b&gt;Mudlet&lt;/b&gt; is built upon the shoulders of other projects in the FOSS world; as well as using many GPL components we also make use of some third-party software with other licenses:&lt;/p&gt;</source>
      <translation>&lt;p align=&quot;center&quot;&gt;&lt;b&gt;Mudlet&lt;/b&gt; is built upon the shoulders of other projects in the FOSS world; as well as using many GPL components we also make use of some third-party software with other licenses:&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="832"/>
      <source>&lt;h2&gt;&lt;u&gt;Communi IRC Library&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 2008-2020 The Communi Project&lt;/h3&gt;</source>
      <translation>&lt;bh2&gt;&lt;bu&gt;Communi IRC Library&lt;b/u&gt;&lt;b/h2&gt;&lt;bh3&gt;Copyright © 2008-2020 The Communi Project&lt;b/h3&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="835"/>
      <source>&lt;p&gt;Parts of &lt;tt&gt;irctextformat.cpp&lt;/t&gt; code come from Konversation and are copyrighted to:&lt;br&gt;Copyright © 2002 Dario Abatianni &amp;lt;eisfuchs@tigress.com&amp;gt;&lt;br&gt;Copyright © 2004 Peter Simonsson &amp;lt;psn@linux.se&amp;gt;&lt;br&gt;Copyright © 2006-2008 Eike Hein &amp;lt;hein@kde.org&amp;gt;&lt;br&gt;Copyright © 2004-2009 Eli Mackenzie &amp;lt;argonel@gmail.com&amp;gt;&lt;/p&gt;</source>
      <translation>&lt;p&gt;Parts of &lt;tt&gt;irctextformat.cpp&lt;/t&gt; code come from Konversation and are copyrighted to:&lt;br&gt;Copyright © 2002 Dario Abatianni &amp;lt;eisfuchs@tigress.com&amp;gt;&lt;br&gt;Copyright © 2004 Peter Simonsson &amp;lt;psn@linux.se&amp;gt;&lt;br&gt;Copyright © 2006-2008 Eike Hein &amp;lt;hein@kde.org&amp;gt;&lt;br&gt;Copyright © 2004-2009 Eli Mackenzie &amp;lt;argonel@gmail.com&amp;gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="841"/>
      <source>&lt;h2&gt;&lt;u&gt;lua - Lua 5.1&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 1994–2017 Lua.org, PUC-Rio.&lt;/h3&gt;</source>
      <translation>&lt;h2&gt;&lt;u&gt;lua - Lua 5.1&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 1994–2017 Lua.org, PUC-Rio.&lt;/h3&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="844"/>
      <source>&lt;h2&gt;&lt;u&gt;lua_yajl - Lua 5.1 interface to yajl&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Author: Brian Maher &amp;lt;maherb at brimworks dot com&amp;gt;&lt;br&gt;Copyright © 2009 Brian Maher&lt;/h3&gt;</source>
      <translation>&lt;h2&gt;&lt;u&gt;lua_yajl - Lua 5.1 interface to yajl&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Author: Brian Maher &amp;lt;maherb at brimworks dot com&amp;gt;&lt;br&gt;Copyright © 2009 Brian Maher&lt;/h3&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="849"/>
      <source>&lt;h2&gt;&lt;u&gt;LuaZip - Reading files inside zip files&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Author: Danilo Tuler&lt;br&gt;Copyright © 2003-2007 Kepler Project&lt;/h3&gt;</source>
      <translation>&lt;h2&gt;&lt;u&gt;LuaZip - Reading files inside zip files&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Author: Danilo Tuler&lt;br&gt;Copyright © 2003-2007 Kepler Project&lt;/h3&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="854"/>
      <source>&lt;h2&gt;&lt;u&gt;edbee - multi-feature editor widget&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 2012-2014 by Reliable Bits Software by Blommers IT&lt;/h3&gt;</source>
      <translation>&lt;h2&gt;&lt;u&gt;edbee - multi-feature editor widget&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 2012-2014 by Reliable Bits Software by Blommers IT&lt;/h3&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="857"/>
      <source>The &lt;b&gt;edbee-lib&lt;/b&gt; widget itself incorporates other components with licences that must be noted as well, they are:</source>
      <translation>The &lt;b&gt;edbee-lib&lt;/b&gt; widget itself incorporates other components with licences that must be noted as well, they are:</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="859"/>
      <source>&lt;h2&gt;&lt;u&gt;Onigmo (Oniguruma-mod) LICENSE&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 2002-2009 K.Kosako &amp;lt;sndgk393 AT ybb DOT ne DOT jp&amp;gt;&lt;br&gt;Copyright © 2011-2014 K.Takata &amp;lt;kentkt AT csc DOT jp&amp;gt;&lt;br&gt;All rights reserved.&lt;/h3&gt;</source>
      <translation>&lt;h2&gt;&lt;u&gt;Onigmo (Oniguruma-mod) LICENSE&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 2002-2009 K.Kosako &amp;lt;sndgk393 AT ybb DOT ne DOT jp&amp;gt;&lt;br&gt;Copyright © 2011-2014 K.Takata &amp;lt;kentkt AT csc DOT jp&amp;gt;&lt;br&gt;All rights reserved.&lt;/h3&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="864"/>
      <source>&lt;h2&gt;&lt;u&gt;Oniguruma LICENSE&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 2002-2009 K.Kosako &amp;lt;sndgk393 AT ybb DOT ne DOT jp&amp;gt;&lt;br&gt;All rights reserved.&lt;/h3&gt;</source>
      <translation>&lt;h2&gt;&lt;u&gt;Oniguruma LICENSE&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 2002-2009 K.Kosako &amp;lt;sndgk393 AT ybb DOT ne DOT jp&amp;gt;&lt;br&gt;All rights reserved.&lt;/h3&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="868"/>
      <source>&lt;h2&gt;&lt;u&gt;Ruby BSDL&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 1993-2013 Yukihiro Matsumoto.&lt;br&gt;All rights reserved.&lt;/h3&gt;</source>
      <translation>&lt;h2&gt;&lt;u&gt;Ruby BSDL&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 1993-2013 Yukihiro Matsumoto.&lt;br&gt;All rights reserved.&lt;/h3&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="872"/>
      <source>&lt;h2&gt;&lt;u&gt;Qt-Components, QsLog&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;(&lt;span style=&quot;color:red&quot;&gt;&lt;u&gt;https://bitbucket.org/razvapetru/qt-components [broken link]&lt;/u&gt;&lt;/span&gt;&lt;/h3&gt;&lt;small&gt;&lt;a href=&quot;https://web.archive.org/web/20131220072148/https://bitbucket.org/razvanpetru/qt-components&quot;&gt; {&amp;quot;Wayback Machine&amp;quot; archived version}&lt;/a&gt;&lt;/small&gt;)&lt;br&gt;Copyright © 2013, Razvan Petru&lt;br&gt;All rights reserved.&lt;/h3&gt;</source>
      <translation>&lt;h2&gt;&lt;u&gt;Qt-Components, QsLog&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;(&lt;span style=&quot;color:red&quot;&gt;&lt;u&gt;https://bitbucket.org/razvapetru/qt-components [broken link]&lt;/u&gt;&lt;/span&gt;&lt;/h3&gt;&lt;small&gt;&lt;a href=&quot;https://web.archive.org/web/20131220072148/https://bitbucket.org/razvanpetru/qt-components&quot;&gt; {&amp;quot;Wayback Machine&amp;quot; archived version}&lt;/a&gt;&lt;/small&gt;)&lt;br&gt;Copyright © 2013, Razvan Petru&lt;br&gt;All rights reserved.&lt;/h3&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="879"/>
      <source>&lt;h2&gt;&lt;u&gt;dblsqd&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 2017 Philipp Medien&lt;/h3&gt;</source>
      <translation>&lt;h2&gt;&lt;u&gt;dblsqd&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 2017 Philipp Medien&lt;/h3&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="882"/>
      <source>&lt;h2&gt;&lt;u&gt;Sparkle - macOS updater&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 2006-2013 Andy Matuschak.&lt;br&gt;Copyright © 2009-2013 Elgato Systems GmbH.&lt;br&gt;Copyright © 2011-2014 Kornel Lesiński.&lt;br&gt;Copyright © 2015-2017 Mayur Pawashe.&lt;br&gt;Copyright © 2014 C.W. Betts.&lt;br&gt;Copyright © 2014 Petroules Corporation.&lt;br&gt;Copyright © 2014 Big Nerd Ranch.&lt;br&gt;All rights reserved.&lt;/h3&gt;</source>
      <translation>&lt;h2&gt;&lt;u&gt;Sparkle - macOS updater&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 2006-2013 Andy Matuschak.&lt;br&gt;Copyright © 2009-2013 Elgato Systems GmbH.&lt;br&gt;Copyright © 2011-2014 Kornel Lesiński.&lt;br&gt;Copyright © 2015-2017 Mayur Pawashe.&lt;br&gt;Copyright © 2014 C.W. Betts.&lt;br&gt;Copyright © 2014 Petroules Corporation.&lt;br&gt;Copyright © 2014 Big Nerd Ranch.&lt;br&gt;All rights reserved.&lt;/h3&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="892"/>
      <source>&lt;h4&gt;bspatch.c and bsdiff.c, from bsdiff 4.3 &lt;a href=&quot;http://www.daemonology.net/bsdiff/&quot;&gt;http://www.daemonology.net/bsdiff&lt;/a&gt;:&lt;/h4&gt;&lt;h3&gt;Copyright © 2003-2005 Colin Percival.&lt;/h3&gt;&lt;h4&gt;sais.c and sais.c, from sais-lite (2010/08/07) &lt;a href=&quot;https://sites.google.com/site/yuta256/sais&quot;&gt;https://sites.google.com/site/yuta256/sais&lt;/a&gt;:&lt;/h4&gt;&lt;h3&gt;Copyright © 2008-2010 Yuta Mori.&lt;/h3&gt;&lt;h4&gt;SUDSAVerifier.m:&lt;/h4&gt;&lt;h3&gt;Copyright © 2011 Mark Hamlin.&lt;br&gt;All rights reserved.&lt;/h3&gt;</source>
      <translation>&lt;h4&gt;bspatch.c and bsdiff.c, from bsdiff 4.3 &lt;a href=&quot;http://www.daemonology.net/bsdiff/&quot;&gt;http://www.daemonology.net/bsdiff&lt;/a&gt;:&lt;/h4&gt;&lt;h3&gt;Copyright © 2003-2005 Colin Percival.&lt;/h3&gt;&lt;h4&gt;sais.c and sais.c, from sais-lite (2010/08/07) &lt;a href=&quot;https://sites.google.com/site/yuta256/sais&quot;&gt;https://sites.google.com/site/yuta256/sais&lt;/a&gt;:&lt;/h4&gt;&lt;h3&gt;Copyright © 2008-2010 Yuta Mori.&lt;/h3&gt;&lt;h4&gt;SUDSAVerifier.m:&lt;/h4&gt;&lt;h3&gt;Copyright © 2011 Mark Hamlin.&lt;br&gt;All rights reserved.&lt;/h3&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="900"/>
      <source>&lt;h2&gt;&lt;u&gt;sparkle-glue&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 2008 Remko Troncon&lt;br&gt;Copyright © 2017 Vadim Peretokin&lt;/h3&gt;</source>
      <translation>&lt;h2&gt;&lt;u&gt;sparkle-glue&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 2008 Remko Troncon&lt;br&gt;Copyright © 2017 Vadim Peretokin&lt;/h3&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="906"/>
      <source>&lt;h2&gt;&lt;u&gt;Discord - Rich Presence - RPC library&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 2017 Discord, Inc.&lt;/h3&gt;</source>
      <translation>&lt;h2&gt;&lt;u&gt;Discord - Rich Presence - RPC library&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 2017 Discord, Inc.&lt;/h3&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="909"/>
      <source>&lt;h2&gt;&lt;u&gt;QtKeyChain - Platform-independent Qt API for storing passwords securely&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 2011-2019 Frank Osterfeld &amp;lt;frank.osterfeld@gmail.com&amp;gt;.&lt;/h3&gt;</source>
      <translation>&lt;h2&gt;&lt;u&gt;QtKeyChain - Platform-independent Qt API for storing passwords securely&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 2011-2019 Frank Osterfeld &amp;lt;frank.osterfeld@gmail.com&amp;gt;.&lt;/h3&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="1057"/>
      <source>
                          These formidable folks will be fondly remembered forever&lt;br&gt;for their generous financial support on &lt;a href=&quot;https://www.patreon.com/mudlet&quot;&gt;Mudlet&apos;s patreon&lt;/a&gt;:
                          </source>
      <translation>
                          Queste persone formidabili saranno per sempre ricordate&lt;br&gt;per il loro supporto finanziario su &lt;a href=&quot;https://www.patreon.com/mudlet&quot;&gt;Mudlet&apos;s patreon&lt;/a&gt;:
                          </translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="1068"/>
      <source>Technical information:</source>
      <translation>Informazioni tecniche:</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="1069"/>
      <source>Version</source>
      <translation>Versione</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="1070"/>
      <source>OS</source>
      <translation>SO</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="1071"/>
      <source>CPU</source>
      <translation>CPU</translation>
    </message>
  </context>
  <context>
    <name>dlgColorTrigger</name>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="52"/>
      <source>More colors</source>
      <translation>Altri colori</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="54"/>
      <source>Click to access all 256 ANSI colors.</source>
      <translation>Clicca per accedere a tutti i 256 colori ANSI.</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="59"/>
      <source>&lt;p&gt;Click to make the color trigger ignore the text&apos;s background color - however chosing this for both this and the foreground is an error.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Seleziona per fare in modo che il trigger ignori il colore di sfondo - Non utilizzare questa opzione sia per lo sfondo che per il colore del testo.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="60"/>
      <source>&lt;p&gt;Click to make the color trigger ignore the text&apos;s foreground color - however chosing this for both this and the background is an error.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Seleziona per fare in modo che il trigger ignori il colore del testo - Non utilizzare questa opzione sia per il colore del testo che per lo sfondo.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="64"/>
      <source>Default</source>
      <translation>Predefinito</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="66"/>
      <source>&lt;p&gt;Click to make the color trigger when the text&apos;s background color has not been modified from its normal value.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Seleziona per attivare il trigger quando il colore di sfondo non è stata modificato rispetto al suo valore normale.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="67"/>
      <source>&lt;p&gt;Click to make the color trigger when the text&apos;s foreground color has not been modified from its normal value.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Seleziona per attivare il trigger quando il colore del testo non è stata modificato rispetto al suo valore normale.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="71"/>
      <source>&lt;p&gt;Click a color to make the trigger fire only when the text&apos;s background color matches the color number indicated.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Seleziona per attivare il trigger solo quando il colore di sfondo corrisponde al numero colore indicato.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="72"/>
      <source>&lt;p&gt;Click a color to make the trigger fire only when the text&apos;s foreground color matches the color number indicated.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Seleziona per attivare il trigger solo quando il colore del testo corrisponde al numero colore indicato.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="77"/>
      <source>Black</source>
      <translation>Nero</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="78"/>
      <source>Red</source>
      <translation>Rosso</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="79"/>
      <source>Green</source>
      <translation>Verde</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="80"/>
      <source>Yellow</source>
      <translation>Giallo</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="81"/>
      <source>Blue</source>
      <translation>Blu</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="82"/>
      <source>Magenta</source>
      <translation>Magenta</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="83"/>
      <source>Cyan</source>
      <translation>Ciano</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="84"/>
      <source>White (Light gray)</source>
      <translation>Bianco (grigio chiaro)</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="86"/>
      <source>Light black (Dark gray)</source>
      <translation>Nero chiaro (Grigio scuro)</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="87"/>
      <source>Light red</source>
      <translation>Rosso chiaro</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="88"/>
      <source>Light green</source>
      <translation>Verde chiaro</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="89"/>
      <source>Light yellow</source>
      <translation>Giallo chiaro</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="90"/>
      <source>Light blue</source>
      <translation>Blu chiaro</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="91"/>
      <source>Light magenta</source>
      <translation>Magenta chiaro</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="92"/>
      <source>Light cyan</source>
      <translation>Ciano chiaro</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="93"/>
      <source>Light white</source>
      <translation>Bianco chiaro</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="218"/>
      <source>%1 [%2]</source>
      <comment>Color Trigger dialog button in basic 16-color set, the first value is the name of the color, the second is the ANSI color number - for most languages modification is not likely to be needed - this text is used in two places</comment>
      <translation>%1 [%2]</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="405"/>
      <source>All color options are showing.</source>
      <translation>Tutte le opzioni di colore sono visibili.</translation>
    </message>
  </context>
  <context>
    <name>dlgConnectionProfiles</name>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="110"/>
      <source>Connect</source>
      <translation>Connetti</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="267"/>
      <source>Game name: %1</source>
      <translation>Nome del gioco: %1</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="1239"/>
      <source>This profile is currently loaded - close it before changing the connection parameters.</source>
      <translation>Questo profilo è attualmente caricato - devi chiuderlo prima di cambiare i parametri di connessione.</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="2050"/>
      <source>The %1 character is not permitted. Use one of the following:</source>
      <translation>Il carattere %1 non è consentito. Utilizza uno dei seguenti:</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="2080"/>
      <source>You have to enter a number. Other characters are not permitted.</source>
      <translation>Devi inserire un numero. Non sono consentiti altri caratteri.</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="2066"/>
      <source>This profile name is already in use.</source>
      <translation>Questo nome profilo è già in uso.</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="523"/>
      <source>Could not rename your profile data on the computer.</source>
      <translation>Non è possibile rinominare il tuo profilo.</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="122"/>
      <source>&lt;p&gt;&lt;center&gt;&lt;big&gt;&lt;b&gt;Welcome to Mudlet!&lt;/b&gt;&lt;/big&gt;&lt;/center&gt;&lt;/p&gt;&lt;p&gt;&lt;center&gt;&lt;b&gt;Click on one of the games on the list to play.&lt;/b&gt;&lt;/center&gt;&lt;/p&gt;&lt;p&gt;To play a game not in the list, click on %1 &lt;span style=&quot; color:#555753;&quot;&gt;New&lt;/span&gt;, fill in the &lt;i&gt;Profile Name&lt;/i&gt;, &lt;i&gt;Server address&lt;/i&gt;, and &lt;i&gt;Port&lt;/i&gt; fields in the &lt;i&gt;Required &lt;/i&gt; area.&lt;/p&gt;&lt;p&gt;After that, click %2 &lt;span style=&quot; color:#555753;&quot;&gt;Connect&lt;/span&gt; to play.&lt;/p&gt;&lt;p&gt;Have fun!&lt;/p&gt;&lt;p align=&quot;right&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans&apos;;&quot;&gt;The Mudlet Team &lt;/span&gt;&lt;img src=&quot;:/icons/mudlet_main_16px.png&quot;/&gt;&lt;/p&gt;</source>
      <comment>Welcome message. Both %1 and %2 may be replaced by icons when this text is used.</comment>
      <translation>&lt;p&gt;&lt;center&gt;&lt;big&gt;&lt;b&gt;Benvenuti in Mudlet!&lt;/b&gt;&lt;/big&gt;&lt;/center&gt;&lt;/p&gt;&lt;p&gt;&lt;center&gt;&lt;b&gt;Selezionare una dei giochi nella lista per iniziare a giocare.&lt;/b&gt;&lt;/center&gt;&lt;/p&gt;&lt;p&gt;Per collegarti ad un gioco non in lista, premi %1 &lt;span style=&quot; color:#555753;&quot;&gt;Nuovo&lt;/span&gt;, poi inserisci &lt;i&gt;Nome Profilo&lt;/i&gt;, &lt;i&gt;Indirizzo Server&lt;/i&gt; e la &lt;i&gt;Porta&lt;/i&gt; nel pannello &lt;i&gt;Dati Richiesti &lt;/i&gt;.&lt;/p&gt;&lt;p&gt;Una volta completato premi %2 &lt;span style=&quot; color:#555753;&quot;&gt;Connetti&lt;/span&gt; per iniziare a giocare.&lt;/p&gt;&lt;p&gt;Buon divertimento!&lt;/p&gt;&lt;p align=&quot;right&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans&apos;;&quot;&gt;Il Team di Mudlet &lt;/span&gt;&lt;img src=&quot;:/icons/mudlet_main_16px.png&quot;/&gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="112"/>
      <source>Offline</source>
      <translation>Non in linea</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="135"/>
      <source>Copy</source>
      <translation>Copia</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="137"/>
      <source>Copy settings only</source>
      <translation>Copia impostazioni</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="145"/>
      <source>copy profile</source>
      <translation>copia profilo</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="146"/>
      <source>copy the entire profile to new one that will require a different new name.</source>
      <translation>copia l'intero profilo in uno nuovo indicandone un nome differente.</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="150"/>
      <source>copy profile settings</source>
      <translation>copia impostazioni profilo</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="151"/>
      <source>copy the settings and some other parts of the profile to a new one that will require a different new name.</source>
      <translation>copia le impostazioni e alcune parti del profilo in uno nuovo indicandone un nome differente.</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="215"/>
      <source>Characters password, stored securely in the computer&apos;s credential manager</source>
      <translation>Password, memorizzate in modo sicuro nel gestore credenziali del computer</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="217"/>
      <source>Characters password. Note that the password isn&apos;t encrypted in storage</source>
      <translation>Password del personaggio. NOTA: la password è salvata in chiaro</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="264"/>
      <source>Click to load but not connect the selected profile.</source>
      <translation>Fare clic su per caricare, ma NON collegarsi al profilo selezionato.</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="265"/>
      <source>Click to load and connect the selected profile.</source>
      <translation>Fare clic su per caricare e collegarsi al profilo selezionato.</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="266"/>
      <source>Need to have a valid profile name, game server address and port before this button can be enabled.</source>
      <translation>Per abilitare questo bottone è necessario inserire un nome di profilo valido, l'indirizzo del server di gioco e la porta.</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="268"/>
      <source>Button to select a mud game to play, double-click it to connect and start playing it.</source>
      <comment>Some text to speech engines will spell out initials like MUD so stick to lower case if that is a better option</comment>
      <translation>Bottone per selezionare un gioco da avviare, fare doppio clic per connettersi e iniziare a giocare.</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="531"/>
      <source>Could not create the new profile folder on your computer.</source>
      <translation>Non è possibile creare la cartella per il nuovo profilo.</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="567"/>
      <source>new profile name</source>
      <translation>nome profilo</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="680"/>
      <source>Deleting &apos;%1&apos;</source>
      <translation>Cancella &apos;%1&apos;</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="1286"/>
      <source>Discord integration not available on this platform</source>
      <translation>Integrazione di Discord non disponibile su questa piattaforma</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="1292"/>
      <source>Discord integration not supported by game</source>
      <translation>Integrazione di Discord non supportata dal gioco</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="1295"/>
      <source>Check to enable Discord integration</source>
      <translation>Seleziona per abilitare l'integrazione con Discord</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="1651"/>
      <source>Reset icon</source>
      <comment>Reset the custom picture for this profile in the connection dialog and show the default one instead</comment>
      <translation>Reimposta icona</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="1653"/>
      <source>Set custom icon</source>
      <comment>Set a custom picture to show for the profile in the connection dialog</comment>
      <translation>Imposta icona personalizzata</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="1663"/>
      <source>Select custom image for profile (should be 120x30)</source>
      <translation>Seleziona immagine personalizzata per il profilo (dimensioni 120x30 pixel)</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="1665"/>
      <source>Images (%1)</source>
      <translation>Immagini (%1)</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="2093"/>
      <source>Port number must be above zero and below 65535.</source>
      <translation>Il numero di porta deve essere superiore a 0 e inferiore a 65535.</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="2119"/>
      <source>Mudlet can not load support for secure connections.</source>
      <translation>Mudlet non può caricare il supporto per connessioni sicure.</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="2143"/>
      <source>Please enter the URL or IP address of the Game server.</source>
      <translation>Inserire l'URL o l'indirizzo IP del server di gioco.</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="2156"/>
      <source>SSL connections require the URL of the Game server.</source>
      <translation>Le connessioni SSL richiedono l'URL del server di gioco.</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="2174"/>
      <source>&lt;p&gt;Load profile without connecting.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Carica il profilo senza connetterti al gioco.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="2190"/>
      <source>&lt;p&gt;Please set a valid profile name, game server address and the game port before loading.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Per favore imposta un nome profilo valido, l'indirizzo e la porta del server di gioco prima del caricamento.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="2195"/>
      <source>&lt;p&gt;Please set a valid profile name, game server address and the game port before connecting.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Per favore imposta un nome profilo valido, l'indirizzo e la porta del server di gioco prima del caricamento.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="2248"/>
      <source>&lt;p&gt;Click to hide the password; it will also hide if another profile is selected.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Fai clic per nascondere la password; verrà nascosta automaticamente se selezioni un altro profilo.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="2252"/>
      <source>&lt;p&gt;Click to reveal the password for this profile.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Fai clic per mostrare la password di questo profilo.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="2101"/>
      <location filename="../src/dlgConnectionProfiles.cpp" line="2107"/>
      <source>Mudlet is not configured for secure connections.</source>
      <translation>Mudlet non è configurato per connessioni sicure.</translation>
    </message>
  </context>
  <context>
    <name>dlgIRC</name>
    <message>
      <location filename="../src/dlgIRC.cpp" line="119"/>
      <source>%1 closed their client.</source>
      <translation>%1 ha chiuso il suo client.</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="131"/>
      <source>Mudlet IRC Client - %1 - %2 on %3</source>
      <translation>Mudlet IRC Client - %1 - %2 su %3</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="145"/>
      <source>$ Starting Mudlet IRC Client...</source>
      <translation>$ Avvio Mudlet IRC Client...</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="146"/>
      <source>$ Host: %1:%2</source>
      <translation>$ Server: %1:%2</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="147"/>
      <source>$ Nick: %1</source>
      <translation>$ Nickname: %1</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="148"/>
      <source>$ Auto-Join Channels: %1</source>
      <translation>$ Canali con join automatico: %1</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="149"/>
      <source>$ This client supports Auto-Completion using the Tab key.</source>
      <translation>$ Questo client supporta l' Auto-Completamento utilizzando il tasto Tab.</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="150"/>
      <source>$ Type &lt;b&gt;/help&lt;/b&gt; for commands or &lt;b&gt;/help [command]&lt;/b&gt; for command syntax.</source>
      <translation>$ Digita &lt;b&gt;/help&lt;/b&gt; per i comandi o &lt;b&gt;/help [comando]&lt;/b&gt; per la sintassi del comando.</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="209"/>
      <source>Restarting IRC Client</source>
      <translation>Riavvio IRC Client</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="382"/>
      <source>[Error] MSGLIMIT requires &lt;limit&gt; to be a whole number greater than zero!</source>
      <translation>[ ERROR ] MSGLIMIT richiede che &lt;limit&gt; sia un numero intero maggiore di zero!</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="412"/>
      <source>[HELP] Available Commands: %1</source>
      <translation>[AIUTO] Comandi Disponibili: %1</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="414"/>
      <source>[HELP] Syntax: %1</source>
      <translation>[HELP] Sintassi: %1</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="422"/>
      <source>! Connected to %1.</source>
      <translation>! Connesso a %1.</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="423"/>
      <source>! Joining %1...</source>
      <translation>! Unisciti a %1...</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="428"/>
      <source>! Connecting %1...</source>
      <translation>Connessione a %1 in corso...</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="433"/>
      <source>! Disconnected from %1.</source>
      <translation>! Disconnesso da %1.</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="499"/>
      <source>[ERROR] Syntax: %1</source>
      <translation>[ERROR] Sintassi: %1</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="501"/>
      <source>[ERROR] Unknown command: %1</source>
      <translation>[ERROR] Comando sconosciuto: %1</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="647"/>
      <source>! The Nickname %1 is reserved. Automatically changing Nickname to: %2</source>
      <translation>! Il Nickname %1 è riservato. Il tuo nuovo Nickname è: %2</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="658"/>
      <source>Your nick has changed.</source>
      <translation>Il tuo Nickname è cambiato.</translation>
    </message>
  </context>
  <context>
    <name>dlgMapper</name>
    <message>
      <location filename="../src/dlgMapper.cpp" line="347"/>
      <source>None</source>
      <comment>Don&apos;t show the map overlay, &apos;none&apos; meaning no map overlay styled are enabled</comment>
      <translation>Nessuno</translation>
    </message>
  </context>
  <context>
    <name>dlgModuleManager</name>
    <message>
      <location filename="../src/dlgModuleManager.cpp" line="48"/>
      <source>Module Manager - %1</source>
      <translation>Gestione Moduli - %1</translation>
    </message>
    <message>
      <location filename="../src/dlgModuleManager.cpp" line="66"/>
      <source>Module Name</source>
      <translation>Nome del modulo</translation>
    </message>
    <message>
      <location filename="../src/dlgModuleManager.cpp" line="66"/>
      <source>Priority</source>
      <translation>Priorità</translation>
    </message>
    <message>
      <location filename="../src/dlgModuleManager.cpp" line="66"/>
      <source>Sync</source>
      <translation>Sincronizza</translation>
    </message>
    <message>
      <location filename="../src/dlgModuleManager.cpp" line="66"/>
      <source>Module Location</source>
      <translation>Posizione del modulo</translation>
    </message>
    <message>
      <location filename="../src/dlgModuleManager.cpp" line="105"/>
      <source>Checking this box will cause the module to be saved and &lt;i&gt;resynchronised&lt;/i&gt; across all sessions that share it when the &lt;i&gt;Save Profile&lt;/i&gt; button is clicked in the Editor or if it is saved at the end of the session.</source>
      <translation>Selezionando questa casella il modulo sarà salvato e &lt;i&gt;risincronizzato&lt;/i&gt; in tutte le sessioni che lo hanno in condivisione quando si fa clic sul pulsante &lt;i&gt;Salva profilo&lt;/i&gt; nell'editor o se viene salvato alla fine di una sessione.</translation>
    </message>
    <message>
      <location filename="../src/dlgModuleManager.cpp" line="111"/>
      <source>&lt;b&gt;Note:&lt;/b&gt; &lt;i&gt;.zip&lt;/i&gt; and &lt;i&gt;.mpackage&lt;/i&gt; modules are currently unable to be synced&lt;br&gt; only &lt;i&gt;.xml&lt;/i&gt; packages are able to be synchronized across profiles at the moment. </source>
      <translation>&lt;b&gt;Nota:&lt;/b&gt; i file &lt;i&gt;.zip&lt;/i&gt; e &lt;i&gt;.mpackage&lt;/i&gt; non possono essere sincronizzati&lt;br&gt; solo i file &lt;i&gt;.xml&lt;/i&gt; sono sincronizzabili tra i profili. </translation>
    </message>
    <message>
      <location filename="../src/dlgModuleManager.cpp" line="149"/>
      <source>Load Mudlet Module</source>
      <translation>Carica modulo Mudlet</translation>
    </message>
    <message>
      <location filename="../src/dlgModuleManager.cpp" line="156"/>
      <source>Load Mudlet Module:</source>
      <translation>Carica modulo Mudlet:</translation>
    </message>
    <message>
      <location filename="../src/dlgModuleManager.cpp" line="156"/>
      <source>Cannot read file %1:
%2.</source>
      <translation>Impossibile leggere il file %1:
%2.</translation>
    </message>
  </context>
  <context>
    <name>dlgPackageExporter</name>
    <message>
      <location filename="../src/ui/dlgPackageExporter.ui" line="14"/>
      <source>Package Exporter</source>
      <translation>Esportatore package</translation>
    </message>
    <message>
      <location filename="../src/ui/dlgPackageExporter.ui" line="21"/>
      <source>Check items to export</source>
      <translation>Seleziona gli elementi da esportare</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="57"/>
      <source>Triggers</source>
      <translation>Trigger</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="58"/>
      <source>Aliases</source>
      <translation>Alias</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="59"/>
      <source>Timers</source>
      <translation>Timer</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="60"/>
      <source>Scripts</source>
      <translation>Script</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="61"/>
      <source>Keys</source>
      <translation>Tasti</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="62"/>
      <source>Buttons</source>
      <translation>Bottoni</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="78"/>
      <source>Export</source>
      <comment>Text for button to perform the package export on the items the user has selected.</comment>
      <translation>Esporta</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="88"/>
      <source>What do you wish to call the package:</source>
      <translation>Come vuoi chiamare questo package:</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="155"/>
      <source>Failed to open file &quot;%1&quot; to place into package. Error message was: &quot;%2&quot;.</source>
      <comment>This error message will appear when a file is to be placed into the package but the code cannot open it.</comment>
      <translation>Impossibile aprire il file &quot;%1&quot; da inserire nel package. Il messaggio di errore è: &quot;%2&quot;.</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="163"/>
      <source>Failed to add file &quot;%1&quot; to package &quot;%2&quot;. Error message was: &quot;%3&quot;.</source>
      <comment>This error message will appear when a file is to be placed into the package but cannot be done for some reason.</comment>
      <translation>Impossibile aggiungere il file &quot;%1&quot; al package &quot;%2&quot;. Il messaggio di errore è: &quot;%3&quot;.</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="182"/>
      <source>Failed to export. Could not open the folder &quot;%1&quot; for writing in. - Do you have the necessary permissions and free disk-space to write to that folder?</source>
      <translation>Esportazione fallita. Impossibile aprire la cartella &quot;%1&quot; per la scrittura. - Hai i permessi necessari e spazio disco libero per scrivere in questa cartella?</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="262"/>
      <source>Failed to export. Could not write Mudlet items to the file &quot;%1&quot;.</source>
      <comment>This error message is shown when all the Mudlet items cannot be written to the &apos;packageName&apos;.xml file in the base directory of the place where all the files are staged before being compressed into the package file. The full path and filename are shown in %1 to help the user diagnose what might have happened.</comment>
      <translation>Esportazione fallita. Impossibile scrivere gli elementi del package nel file &quot;%1&quot;.</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="345"/>
      <source>Failed to open package file. Error is: &quot;%1&quot;.</source>
      <comment>This error message is shown when the libzip library code is unable to open the file that was to be the end result of the export process. As this may be an existing file anywhere in the computer&apos;s file-system(s) it is possible that permissions on the directory or an existing file that is to be overwritten may be a source of problems here.</comment>
      <translation>Impossibile aprire il file del package. L'errore è: &quot;%1&quot;.</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="439"/>
      <source>Failed to add directory &quot;%1&quot; to package. Error is: &quot;%2&quot;.</source>
      <translation>Impossibile aggiungere la cartella &quot;%1&quot; al package. L'errore è: &quot;%2&quot;.</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="495"/>
      <source>Required file &quot;%1&quot; was not found in the staging area. This area contains the Mudlet items chosen for the package, which you selected to be included in the package file. This suggests there may be a problem with that directory: &quot;%2&quot; - Do you have the necessary permissions and free disk-space?</source>
      <translation>Non ho trovato il file richiesto &quot;%1&quot; nell'area di preparazione. Questa area contiene tutti gli elementi da includere nel package. Questo errore potrebbe indicare un problema con la cartella: &quot;%2&quot; - Hai i permessi necessari e spazio libero sul disco?</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="517"/>
      <source>Failed to write files into and then close the package. Error is: &quot;%1&quot;.</source>
      <comment>This error message is displayed at the final stage of exporting a package when all the sourced files are finally put into the archive. Unfortunately this may be the point at which something breaks because a problem was not spotted/detected in the process earlier...</comment>
      <translation>Impossibile scrivere i file e quindi chiudere il package. L'errore è: &quot;%1&quot;.</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="537"/>
      <source>Package &quot;%1&quot; exported to: %2</source>
      <translation>Package &quot;%1&quot; esportato in: %2</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="833"/>
      <source>Why not &lt;a href=&quot;https://forums.mudlet.org/viewforum.php?f=6&quot;&gt;upload&lt;/a&gt; your package for other Mudlet users?</source>
      <comment>Only the text outside of the &apos;a&apos; (HTML anchor) tags PLUS the verb &apos;upload&apos; in between them in the source text, (associated with uploading the resulting package to the Mudlet forums) should be translated.</comment>
      <translation>Perchp non &lt;a href=&quot;https://forums.mudlet.org/viewforum.php?f=6&quot;&gt;condividi&lt;/a&gt; il tuo package con gli altri utenti di Mudlet?</translation>
    </message>
    <message>
      <location filename="../src/ui/dlgPackageExporter.ui" line="32"/>
      <source>Do you want to add additional files to the package e. g. images, sounds etc. ? The add files button will bring up the file explorer. Copy all files and folders that you want to add to the package in the temporary package directory that is shown in the file explorer. When you are done click on the export button below to start package creation.</source>
      <translation>Vuoi aggiungere altri file al package es. immagini, suoni, ecc. ? Premi il bottone "Aggiungi File" che aprirà una finestra di esplora risorse. Copia tutti i file e le cartelle che vuoi aggiungere al package nella cartella temporanea che ti verrà mostrata. Quando hai terminato l'operazione premi sul bottone "Esporta" per completare la creazione del package.</translation>
    </message>
    <message>
      <location filename="../src/ui/dlgPackageExporter.ui" line="45"/>
      <source>Add Files</source>
      <translation>Aggiungi File</translation>
    </message>
    <message>
      <location filename="../src/ui/dlgPackageExporter.ui" line="52"/>
      <source>Export location:</source>
      <translation>Percorso di esportazione:</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="88"/>
      <source>Package name</source>
      <translation>Nome package</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="99"/>
      <source>Where do you want to save the package?</source>
      <translation>Dove vuoi salvare il package?</translation>
    </message>
  </context>
  <context>
    <name>dlgPackageManager</name>
    <message>
      <location filename="../src/dlgPackageManager.cpp" line="42"/>
      <source>Package Manager - %1</source>
      <translation>Gestione Package - %1</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageManager.cpp" line="54"/>
      <source>Import Mudlet Package</source>
      <translation>Importa package Mudlet</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageManager.cpp" line="61"/>
      <source>Import Mudlet Package:</source>
      <translation>Importa package di Mudlet:</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageManager.cpp" line="61"/>
      <source>Cannot read file %1:
%2.</source>
      <translation>Impossibile leggere il file %1:
%2.</translation>
    </message>
  </context>
  <context>
    <name>dlgProfilePreferences</name>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="142"/>
      <source>&lt;p&gt;Location which will be used to store log files - matching logs will be appended to.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Percorso in cui memorizzare i file di registro - i log corrispondenti verranno aggiunti a.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="150"/>
      <source>logfile</source>
      <comment>Must be a valid default filename for a log-file and is used if the user does not enter any other value (Ensure all instances have the same translation {1 of 2}).</comment>
      <translation>File di log</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="196"/>
      <source>&lt;p&gt;This will bring up a display showing all the symbols used in the current map and whether they can be drawn using just the specifed font, any other font, or not at all.  It also shows the sequence of Unicode &lt;i&gt;code-points&lt;/i&gt; that make up that symbol, so that they can be identified even if they cannot be displayed; also, up to the first thirty two rooms that are using that symbol are listed, which may help to identify any unexpected or odd cases.&lt;p&gt;</source>
      <translation>&lt;p&gt;Questa impostazione permette di mostrare una finestra con tutti i simboli utilizzati nella mappa corrente e come vengono disegnati usando solo il carattere specificato, un altro carattere o se non possono essere disegnati affatto. Mostra anche la sequenza di &lt;i&gt;codici&lt;/i&gt;Unicode che compongono un determinato simbolo, in modo da poterli identificare anche se non è possibile visualizzarli; inoltre, sono elencate le prime trentadue stanze che utilizzano quel simbolo, in modo da aiutare a riconoscere eventuali casi anomali o inaspettati.&lt;p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="202"/>
      <source>&lt;p&gt;Select the only or the primary font used (depending on &lt;i&gt;Only use symbols (glyphs) from chosen font&lt;/i&gt; setting) to produce the 2D mapper room symbols.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Seleziona l'unico o il font primario utilizzato (a seconda dell'opzione &lt;i&gt;Utilizzare solo simboli (glifi) dal carattere selezionato&lt;/i&gt;) per produrre i simboli delle stanze della mappa 2D.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="236"/>
      <source>&lt;p&gt;Some Desktop Environments tell Qt applications like Mudlet whether they should shown icons on menus, others, however do not. This control allows the user to override the setting, if needed, as follows:&lt;ul&gt;&lt;li&gt;&lt;b&gt;Unchecked&lt;/b&gt; &apos;&lt;i&gt;off&lt;/i&gt;&apos; = Prevent menus from being drawn with icons.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Checked&lt;/b&gt; &apos;&lt;i&gt;on&lt;/i&gt;&apos; = Allow menus to be drawn with icons.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Partly checked&lt;/b&gt; &lt;i&gt;(Default) &apos;auto&apos;&lt;/i&gt; = Use the setting that the system provides.&lt;/li&gt;&lt;/ul&gt;&lt;/p&gt;&lt;p&gt;&lt;i&gt;This setting is only processed when individual menus are created and changes may not propogate everywhere until Mudlet is restarted.&lt;/i&gt;&lt;/p&gt;</source>
      <translation>&lt;p&gt;Alcuni sistemi operativi indicano ad applicazioni che usano Qt, come Mudlet, se mostrare le icone nei menù oppure nasconderle. Questa opzione permette, quando necessario, di forzare delle impostazioni specifiche:&lt;ul&gt;&lt;li&gt;&lt;b&gt;Disattivo&lt;/b&gt; &apos;&lt;i&gt;off&lt;/i&gt;&apos; = Impedisci ai menù di visualizzare le icone.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Attivo&lt;/b&gt; &apos;&lt;i&gt;on&lt;/i&gt;&apos; = Forza i menù a mostrare le icone.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Parzialmente attivo&lt;/b&gt; &lt;i&gt;(Predefinito) &apos;auto&apos;&lt;/i&gt; = Usa le impostazioni fornite dal sistema operativo.&lt;/li&gt;&lt;/ul&gt;&lt;/p&gt;&lt;p&gt;&lt;i&gt;Questa impostazione viene controllata solo durante la creazione dei menù, quindi i cambiamenti potrebbero non essere visibili fino al riavvio di Mudlet.&lt;/i&gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="293"/>
      <source>%1 (%2% done)</source>
      <comment>%1 is the (not-translated so users of the language can read it!) language name, %2 is percentage done.</comment>
      <translation>%1 (%2% fatto)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="346"/>
      <source>Migrated all passwords to secure storage.</source>
      <translation>Migrazione di tutte le password nell'archivio sicuro completata.</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="353"/>
      <source>Migrated %1...</source>
      <comment>This notifies the user that progress is being made on profile migration by saying what profile was just migrated to store passwords securely</comment>
      <translation>Migrato %1...</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="357"/>
      <source>Migrated all passwords to profile storage.</source>
      <translation>Migrazione di tutte le password nell'archivio sicuro.</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="738"/>
      <source>yyyy-MM-dd#HH-mm-ss (e.g., 1970-01-01#00-00-00%1)</source>
      <translation>yyyy-MM-dd#HH-mm-ss (es. 1970-01-01#00-00-00%1)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="740"/>
      <source>yyyy-MM-ddTHH-mm-ss (e.g., 1970-01-01T00-00-00%1)</source>
      <translation>yyyy-MM-ddTHH-mm-ss (es. 1970-01-01T00-00-00%1)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="741"/>
      <source>yyyy-MM-dd (concatenate daily logs in, e.g. 1970-01-01%1)</source>
      <translation>aaaa-mm-gg (concatena i log giornalieri, ad esempio, in 1970-01-01%1)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="744"/>
      <source>yyyy-MM (concatenate month logs in, e.g. 1970-01%1)</source>
      <translation>aaaa-mm (concatena i log mensili in, ad esempio, 1970-01%1)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="745"/>
      <source>Named file (concatenate logs in one file)</source>
      <translation>File con nome (concatena i log in un file)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="778"/>
      <source>Other profiles to Map to:</source>
      <translation>Altri profili in cui copiare i file di mappa:</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="818"/>
      <source>%1 {Default, recommended}</source>
      <translation>%1 {Default, recommended}</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="829"/>
      <source>%1 {Upgraded, experimental/testing, NOT recommended}</source>
      <translation>%1 {Aggiornato, sperimentale/test, NON consigliato}</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="831"/>
      <source>%1 {Downgraded, for sharing with older version users, NOT recommended}</source>
      <translation>%1 {Versione precedente, da utilizzare con vecchie versioni di Mudlet, NON consigliato}</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="840"/>
      <source>2D Map Room Symbol scaling factor:</source>
      <translation>Fattore di scala per i simboli dei file delle mappe 2D:</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="860"/>
      <source>Show &quot;%1&quot; in the map area selection</source>
      <translation>Mostra &quot;%1&quot; nella selezione delle mappe di area</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="898"/>
      <source>%1 (*Error, report to Mudlet Makers*)</source>
      <comment>The encoder code name is not in the mudlet class mEncodingNamesMap when it should be and the Mudlet Makers need to fix it!</comment>
      <translation>%1 (*Errore, invia agli sviluppatori di Mudlet*)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="1012"/>
      <location filename="../src/dlgProfilePreferences.cpp" line="3769"/>
      <source>Profile preferences - %1</source>
      <translation>Impostazioni profilo - %1</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="1288"/>
      <source>Profile preferences</source>
      <translation>Impostazioni profilo</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2006"/>
      <source>Load Mudlet map</source>
      <translation>Carica la Mappa di Mudlet</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2021"/>
      <source>Importing map - please wait...</source>
      <translation>Importazione mappa - attendi...</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2025"/>
      <source>Imported map from %1.</source>
      <translation>Mappa importata da %1.</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2027"/>
      <source>Could not import map from %1.</source>
      <translation>Impossibile importare la mappa da %1.</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2030"/>
      <source>Loading map - please wait...</source>
      <translation>Caricamento mappa - attendere...</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2035"/>
      <source>Loaded map from %1.</source>
      <translation>Mappa caricata da %1.</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2037"/>
      <source>Could not load map from %1.</source>
      <translation>Impossibile caricare il file di mappa da %1.</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2054"/>
      <source>Save Mudlet map</source>
      <translation>Salva mappa Mudlet</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2054"/>
      <source>Mudlet map (*.dat)</source>
      <comment>Do not change the extension text (in braces) - it is needed programmatically!</comment>
      <translation>Mappa Mudlet (*.dat)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2064"/>
      <source>Saving map - please wait...</source>
      <translation>Salvataggio mappa - attendere prego...</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2074"/>
      <source>Saved map to %1.</source>
      <translation>Mappa salvata in %1.</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2076"/>
      <source>Could not save map to %1.</source>
      <translation>Impossibile salvare il file di mappa in %1.</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2104"/>
      <source>Migrating passwords to secure storage...</source>
      <translation>Migrazione delle password nell'archiviazione sicura...</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2111"/>
      <source>Migrating passwords to profiles...</source>
      <translation>Migrazione delle password ai profili in corso...</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2143"/>
      <source>[ ERROR ] - Unable to use or create directory to store map for other profile &quot;%1&quot;.
Please check that you have permissions/access to:
&quot;%2&quot;
and there is enough space. The copying operation has failed.</source>
      <translation>[ ERROR ] - Impossibile utillizzare o creare la cartella per memorizzare i file di mappa per il profilo &quot;%1&quot;.
Verifica di disporre dei permessi di accesso per:
&quot;%2&quot;
e che ci sia sufficiente spazio disco. L'operazione di copia è fallita.</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2150"/>
      <source>Creating a destination directory failed...</source>
      <translation>Creazione della directory di destinazione non riuscita...</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2234"/>
      <source>Backing up current map - please wait...</source>
      <translation>Backup mappa - attendere prego...</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2244"/>
      <source>Could not backup the map - saving it failed.</source>
      <translation>Non è possibile fare il backup della mappa - salvataggio fallito.</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2269"/>
      <source>Could not copy the map - failed to work out which map file we just saved the map as!</source>
      <translation>Impossibile copiare il file di mappa - impossibile determinare quale file di mappa è stato salvato!</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2281"/>
      <source>Copying over map to %1 - please wait...</source>
      <translation>Copia del file di mappa %1 - attendere...</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2287"/>
      <source>Could not copy the map to %1 - unable to copy the new map file over.</source>
      <translation>Impossibile copiare il file di mappa %1 - impossibile copia il nuovo file di mappa.</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2291"/>
      <source>Map copied successfully to other profile %1.</source>
      <translation>Mappa copiata nel profilo %1.</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2303"/>
      <source>Map copied, now signalling other profiles to reload it.</source>
      <translation>Mappa copiata, segnalo agli altri profili di ricaricarla.</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2339"/>
      <source>Where should Mudlet save log files?</source>
      <translation>Dove Mudlet può salvare i file di log?</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2724"/>
      <source>%1 selected - press to change</source>
      <translation>%1 selezionato - clicca per cambiare</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2727"/>
      <source>Press to pick destination(s)</source>
      <translation>Clicca per selezionare la destinazione</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2968"/>
      <source>Could not update themes: %1</source>
      <translation>Impossibile aggiornare i temi: %1</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2971"/>
      <source>Updating themes from colorsublime.github.io...</source>
      <translation>Aggiorna tempi da colorsublime.github.io...</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3088"/>
      <source>{missing, possibly recently deleted trigger item}</source>
      <translation>{elemento mancante, probabilmente il trigger è stato appena cancellato}</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3091"/>
      <source>{missing, possibly recently deleted alias item}</source>
      <translation>{elemento mancante, probabilmente l'alias è stato appena cancellato}</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3094"/>
      <source>{missing, possibly recently deleted script item}</source>
      <translation>{elemento mancante, probabilmente lo script è stato appena cancellato}</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3097"/>
      <source>{missing, possibly recently deleted timer item}</source>
      <translation>{elemento mancante, probabilmente il timer è stato appena cancellato}</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3100"/>
      <source>{missing, possibly recently deleted key item}</source>
      <translation>{elemento mancante, probabilmente lo stato è stato appena cancellato}</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3103"/>
      <source>{missing, possibly recently deleted button item}</source>
      <translation>{elemento mancante, probabilmente il bottone è stato appena cancellato}</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3901"/>
      <source>Set outer color of player room mark.</source>
      <translation>Imposta il colore esterno della stanza del giocatore.</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3902"/>
      <source>Set inner color of player room mark.</source>
      <translation>Imposta il colore interno della stanza del giocatore.</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="204"/>
      <source>&lt;p&gt;Using a single font is likely to produce a more consistent style but may cause the &lt;i&gt;font replacement character&lt;/i&gt; &apos;&lt;b&gt;�&lt;/b&gt;&apos; to show if the font does not have a needed glyph (a font&apos;s individual character/symbol) to represent the grapheme (what is to be represented).  Clearing this checkbox will allow the best alternative glyph from another font to be used to draw that grapheme.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Utilizzare un singolo carattere permette di mantenere uno stile consistente, ma può causare la comparsa del carattere di errore &lt;i&gt;font replacement character&lt;/i&gt; &apos;&lt;b&gt;�&lt;/b&gt;&apos;. Questo viene mostrato se il carattere non dispone dei glifi necessari per rappresentare il grafema desiderato. Deseleziona questa casella per utilizzare automaticamente il migliore glifo di un altro carattere in caso di problemi a disegnare il grafema.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="143"/>
      <source>&lt;p&gt;Select a directory where logs will be saved.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Selezionare una cartella in cui salvare i log.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="144"/>
      <source>&lt;p&gt;Reset the directory so that logs are saved to the profile&apos;s &lt;i&gt;log&lt;/i&gt; directory.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Reimposta il percorso in modo che i &lt;i&gt;log&lt;/i&gt; vengano salvati nella cartella del profilo.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="145"/>
      <source>&lt;p&gt;This option sets the format of the log name.&lt;/p&gt;&lt;p&gt;If &lt;i&gt;Named file&lt;/i&gt; is selected, you can set a custom file name. (Logs are appended if a log file of the same name already exists.)&lt;/p&gt;</source>
      <translation>&lt;p&gt;Questa opzione imposta il formato del nome dei file di log.&lt;/p&gt;&lt;p&gt;Se &lt;i&gt;File con nome&lt;/i&gt; è selezionato, puoi impostare un nome personalizzato. (I log vengono accodati se esiste già un file di log con lo stesso nome.)&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="148"/>
      <source>&lt;p&gt;Set a custom name for your log. (New logs are appended if a log file of the same name already exists).&lt;/p&gt;</source>
      <translation>&lt;p&gt;Imposta un nome personalizzato per il log. (I nuovi dati vengono accodati in caso un file di log con lo stesso nome esista già).&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="169"/>
      <source>&lt;p&gt;Automatic updates are disabled in development builds to prevent an update from overwriting your Mudlet.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Gli aggiornamenti automatici sono disattivati nelle versioni di sviluppo per evitare che un aggiornamento sovrascriva il tuo Mudlet.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="190"/>
      <source>&lt;p&gt;A timer with a short interval will quickly fill up the &lt;i&gt;Central Debug Console&lt;/i&gt; windows with messages that it ran correctly on &lt;i&gt;each&lt;/i&gt; occasion it is called.  This (per profile) control adjusts a threshold that will hide those messages in just that window for those timers which run &lt;b&gt;correctly&lt;/b&gt; when the timer&apos;s interval is less than this setting.&lt;/p&gt;&lt;p&gt;&lt;u&gt;Any timer script that has errors will still have its error messages reported whatever the setting.&lt;/u&gt;&lt;/p&gt;</source>
      <translation>&lt;p&gt;Un timer configurato con un intervallo molto breve, potrebbe riempire velocemente la &lt;i&gt;Console di Debug Principale&lt;/i&gt; con messaggi che segnalano l'esecuzione corretta di &lt;i&gt;ogni&lt;/i&gt; ricorrenza.  Questa opzione (valida solo per questo profilo) permette di definire un limite entro il quale i messaggi sono nascosti in caso lo script del timer sia eseguito &lt;b&gt;correttamente&lt;/b&gt; con un intervallo di tempo inferiore a quello impostato.&lt;/p&gt;&lt;p&gt;&lt;u&gt;Eventuali errori nello script del timer saranno comunque visualizzati.&lt;/u&gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="209"/>
      <source>&lt;p&gt;If &lt;b&gt;not&lt;/b&gt; checked Mudlet will only react to the first matching keybinding (combination of key and modifiers) even if more than one of them is set to be active. This means that a temporary keybinding (not visible in the Editor) created by a script or package may be used in preference to a permanent one that is shown and is set to be active. If checked then all matching keybindings will be run.&lt;/p&gt;&lt;p&gt;&lt;i&gt;It is recommended to not enable this option if you need to maintain compatibility with scripts or packages for Mudlet versions prior to &lt;b&gt;3.9.0&lt;/b&gt;.&lt;/i&gt;&lt;/p&gt;</source>
      <translation>&lt;p&gt;Se &lt;b&gt;non&lt;/b&gt; selezionata, Mudlet eseguirà solo le azioni associate alla prima combinazione di tasti anche se ve ne è più di una configurata e attiva. Questo significa che una combinazione di tasti temporanea (non visibile nell'editor) creata da uno script o da un pacchetto/modulo può essere usata in modo prioritaria rispetto ad una permanente. Se l'opzione è selezionata, sono eseguite invece tutte le combinazioni di tasti corrispondenti.&lt;/p&gt;&lt;p&gt;&lt;i&gt;Non abilitare questa opzione se è necessario mantenere la compatibilità con gli script o i pacchetti/moduli in versioni di Mudlet precedenti alla &lt;b&gt;3.9.0&lt;/b&gt;.&lt;/i&gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="217"/>
      <source>&lt;p&gt;Some East Asian MUDs may use glyphs (characters) that Unicode classifies as being of &lt;i&gt;Ambigous&lt;/i&gt; width when drawn in a font with a so-called &lt;i&gt;fixed&lt;/i&gt; pitch; in fact such text is &lt;i&gt;duo-spaced&lt;/i&gt; when not using a proportional font. These symbols can be drawn using either a half or the whole space of a full character. By default Mudlet tries to chose the right width automatically but you can override the setting for each profile.&lt;/p&gt;&lt;p&gt;This control has three settings:&lt;ul&gt;&lt;li&gt;&lt;b&gt;Unchecked&lt;/b&gt; &apos;&lt;i&gt;narrow&lt;/i&gt;&apos; = Draw ambiguous width characters in a single &apos;space&apos;.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Checked&lt;/b&gt; &apos;&lt;i&gt;wide&lt;/i&gt;&apos; = Draw ambiguous width characters two &apos;spaces&apos; wide.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Partly checked&lt;/b&gt; &lt;i&gt;(Default) &apos;auto&apos;&lt;/i&gt; = Use &apos;wide&apos; setting for MUD Server encodings of &lt;b&gt;Big5&lt;/b&gt;, &lt;b&gt;GBK&lt;/b&gt; or &lt;b&gt;GBK18030&lt;/b&gt; and &apos;narrow&apos; for all others.&lt;/li&gt;&lt;/ul&gt;&lt;/p&gt;&lt;p&gt;&lt;i&gt;This is a temporary arrangement and will probably change when Mudlet gains full support for languages other than English.&lt;/i&gt;&lt;/p&gt;</source>
      <translation>&lt;p&gt;Alcuni giochi dell'Asia orientale potrebbe usare glifi (caratteri) che la codifica Unicode classifica come di larghezza &lt;i&gt;variabile&lt;/i&gt; quando vengono disegnati con caratteri che hanno una spaziatura &lt;i&gt;fissa&lt;/i&gt;: questi glifi andrebbero rappresentati a &lt;i&gt;doppia larghezza&lt;/i&gt; quando non si usa un carattere a larghezza variabile, ma possono essere disegnati anche a metà larghezza di quella occupabile da un carattere intero. Mudlet cerca di identificare in automatico la giusta larghezza da attribuire al glifo, ma puoi forzare questo comportamento per ogni profilo.&lt;/p&gt;&lt;p&gt;Questa opzione ha tre valori possibili: &lt;ul&gt;&lt;li&gt;&lt;b&gt;Disattivo&lt;/b&gt; &apos;&lt;i&gt;Compatta&lt;/i&gt;&apos; = disegna i glifi di dimensione variabile occupando un unico &apos;spazio&apos;.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Attivo&lt;/b&gt; &apos;&lt;i&gt;wide&lt;/i&gt;&apos; = disegna i glifi di dimensione variabile occupando &apos;due spazi&apos;.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Parzialmente attivo&lt;/b&gt; &lt;i&gt;(predefinito) &apos;auto&apos;&lt;/i&gt; = Usa le impostazioni di &apos;spaziatura&apos; definite nella codifica carattere del Server di Gioco: &lt;b&gt;Big5&lt;/b&gt;, &lt;b&gt;GBK&lt;/b&gt; o &lt;b&gt;GBK18030&lt;/b&gt; e usa la modalità &apos;Compatta&apos; per gli altri.&lt;/li&gt;&lt;/ul&gt;&lt;/p&gt;&lt;p&gt;&lt;i&gt; E'una soluzione temporanea e probabilmente sarà cambiata quando Mudlet supporterà al 100% i linguaggi con alfabeto non latino.&lt;/i&gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="229"/>
      <source>&lt;p&gt;Enable a context (right click) menu action on any console/user window that, when the mouse cursor is hovered over it, will display the UTF-16 and UTF-8 items that make up each Unicode codepoint on the &lt;b&gt;first&lt;/b&gt; line of any selection.&lt;/p&gt;&lt;p&gt;This utility feature is intended to help the user identify any grapheme (visual equivalent to a &lt;i&gt;character&lt;/i&gt;) that a Game server may send even if it is composed of multiple bytes as any non-ASCII character will be in the Lua sub-system which uses the UTF-8 encoding system.&lt;p&gt;</source>
      <translation>&lt;p&gt;Abilita un'azione del menù contestuale (tasto destro del mouse) di ogni console/finestra utente. Quando il puntatore passa sopra questa voce, sarà mostrata la versione UTF-16 e UTF-8 della mappa caratteri unicode della &lt;b&gt;prima&lt;/b&gt; linea della selezione.&lt;/p&gt;&lt;p&gt;Questa funzionalità server per aiutare ad identificare ogni grafene (equivalente visivo di un &lt;i&gt;carattere&lt;/i&gt;) che un server di gioco potrebbe inviare anche se composto da caratteri multi-byte (caratteri non-ASCII) come lo vedrebbe il sistema Lua che utilizza una codifica UTF-8.&lt;p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="571"/>
      <source>Mudlet dictionaries:</source>
      <comment>On Windows and MacOs, we have to bundle our own dictionaries with our application - and we also use them on *nix systems where we do not find the system ones.</comment>
      <translation>Dizionari Mudlet:</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="573"/>
      <source>System dictionaries:</source>
      <comment>On *nix systems where we find the system ones we use them.</comment>
      <translation>Dizionari di sistema:</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="604"/>
      <source>&lt;p&gt;From the dictionary file &lt;tt&gt;%1.dic&lt;/tt&gt; (and its companion affix &lt;tt&gt;.aff&lt;/tt&gt; file).&lt;/p&gt;</source>
      <translation>&lt;p&gt;Dal file di dizionario &lt;tt&gt;%1.dic&lt;/tt&gt; (e relative inflessioni e derivazioni &lt;tt&gt;.aff&lt;/tt&gt; file).&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="606"/>
      <source>%1 - not recognised</source>
      <translation>%1 - non riconosciuto</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="607"/>
      <source>&lt;p&gt;Mudlet does not recognise the code &quot;%1&quot;, please report it to the Mudlet developers so we can describe it properly in future Mudlet versions!&lt;/p&gt;&lt;p&gt;The file &lt;tt&gt;%2.dic&lt;/tt&gt; (and its companion affix &lt;tt&gt;.aff&lt;/tt&gt; file) is still usable.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Mudlet non riconosce il codice &quot;%1&quot;, segnalalo agli sviluppatori in modo che venga descritto correttamente nelle future versioni di Mudlet!&lt;/p&gt;&lt;p&gt;Il file &lt;tt&gt;%2.dic&lt;/tt&gt; (e relative inflessioni e derivazioni &lt;tt&gt;.aff&lt;/tt&gt;) sono ancora utilizzabili.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="632"/>
      <source>No Hunspell dictionary files found, spell-checking will not be available.</source>
      <translation>Nessun dizionario di Hunspell trovato, controllo ortografico non disponibile.</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2008"/>
      <source>Mudlet map (*.dat);;Xml map data (*.xml);;Any file (*)</source>
      <comment>Do not change extensions (in braces) as they are used programmatically</comment>
      <translation>Mappa Mudlet (*.dat);;Mappa Xml (*.xml);;Tutti i file (*)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3228"/>
      <source>&lt;p&gt;The room symbol will appear like this if only symbols (glyphs) from the specfic font are used.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Il simbolo della stanza sarà come questo in caso si possano utilizzare i simboli (glifi) del carattere in uso.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3234"/>
      <source>&lt;p&gt;The room symbol will appear like this if symbols (glyphs) from any font can be used.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Il simbolo della stanza sarà come questo in caso si possano utilizzare i simboli (glifi) del carattere in uso.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3263"/>
      <source>&lt;p&gt;These are the sequence of hexadecimal numbers that are used by the Unicode consortium to identify the graphemes needed to create the symbol.  These numbers can be utilised to determine precisely what is to be drawn even if some fonts have glyphs that are the same for different codepoints or combination of codepoints.&lt;/p&gt;&lt;p&gt;Character entry utilities such as &lt;i&gt;charmap.exe&lt;/i&gt; on &lt;i&gt;Windows&lt;/i&gt; or &lt;i&gt;gucharmap&lt;/i&gt; on many Unix type operating systems will also use these numbers which cover everything from U+0020 {Space} to U+10FFFD the last usable number in the &lt;i&gt;Private Use Plane 16&lt;/i&gt; via most of the written marks that humanity has ever made.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Di seguito ci sono le sequenze esadecimali utilizzate dal consorzio Unicode per identificare i grafeni necessari per creare un simbolo.  Questi valori servono per determinare in modo preciso cosa deve essere disegnato anche se alcuni caratteri utilizzano lo stesso glifo per differenti mappe caratteri o per combinazioni di queste.&lt;/p&gt;&lt;p&gt;Utilità di sistema come &lt;i&gt;charmap.exe&lt;/i&gt; in &lt;i&gt;Windows&lt;/i&gt; o &lt;i&gt;gucharmap&lt;/i&gt; in molti sistemi Unix utilizzano questi valori che gestiscono l'intervallo da U+0020 {Space} a U+10FFFD, ovvero l'ultimo valore utilizzato nel &lt;i&gt;Private Use Plane 16&lt;/i&gt; che comprende la maggior parte dei simboli che abbia mai scritto l'umanità.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3276"/>
      <source>&lt;p&gt;How many rooms in the whole map have this symbol.</source>
      <translation>&lt;p&gt;Quante camere in tutta la mappa utilizzano questo simbolo.</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3288"/>
      <source>more - not shown...</source>
      <translation>altri - mostra tutti...</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3295"/>
      <source>&lt;p&gt;The rooms with this symbol, up to a maximum of thirty-two, if there are more than this, it is indicated but they are not shown.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Stanze con questo simbolo, fino ad un massimo di trentadue. In caso ce ne siano un numero maggiore, sono indicate, ma non sono mostrate.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3304"/>
      <source>&lt;p&gt;The symbol can be made entirely from glyphs in the specified font.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Il simbolo può essere fatto interamente da glifi nel carattere specificato.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3314"/>
      <source>&lt;p&gt;The symbol cannot be made entirely from glyphs in the specified font, but, using other fonts in the system, it can. Either un-check the &lt;i&gt;Only use symbols (glyphs) from chosen font&lt;/i&gt; option or try and choose another font that does have the needed glyphs.&lt;/p&gt;&lt;p&gt;&lt;i&gt;You need not close this table to try another font, changing it on the main preferences dialogue will update this table after a slight delay.&lt;/i&gt;&lt;/p&gt;</source>
      <translation>&lt;p&gt;Il simbolo non può essere creato interamente con glifi del carattere specificato, ma sarebbe possibile utilizzando altri caratteri di sistema. Per farlo puoi deselezionare l'opzione &lt;i&gt;Utilizza solo simboli (glifi) dal carattere selezionato&lt;/i&gt; o prova a scegliere un altro tipo di carattere che abbia i glifi necessari.&lt;/p&gt;&lt;p&gt;&lt;i&gt;Non è necessario chiudere questa tabella per provare un altro carattere: una volta cambiato nella finestra principale delle preferenze, entro pochi secondi si aggiornerà anche questa tabella.&lt;/i&gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3324"/>
      <source>&lt;p&gt;The symbol cannot be drawn using any of the fonts in the system, either an invalid string was entered as the symbol for the indicated rooms or the map was created on a different systems with a different set of fonts available to use. You may be able to correct this by installing an additional font using whatever method is appropriate for this system or by editing the map to use a different symbol. It may be possible to do the latter via a lua script using the &lt;i&gt;getRoomChar&lt;/i&gt; and &lt;i&gt;setRoomChar&lt;/i&gt; functions.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Non è possibile disegnare il simbolo utilizzando i caratteri installati nel sistema oppure un carattere non valido è stato inserito come simbolo per la stanza o il file di mappa è stato creato su un sistema differente con un differente gruppo di caratteri disponibili. Puoi correggere questa situazione installando caratteri addizionali nel sistema oppure modificando il file di mappa per utilizzare un altro simbolo. E'possibile eseguire questa operazione anche utilizzando le funzioni Lua &lt;i&gt;getRoomChar&lt;/i&gt; e &lt;i&gt;setRoomChar&lt;/i&gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3413"/>
      <source>Large icon</source>
      <comment>Discord Rich Presence large icon</comment>
      <translation>Icone grandi</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3414"/>
      <source>Detail</source>
      <comment>Discord Rich Presence detail</comment>
      <translation>Dettagli</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3416"/>
      <source>Small icon</source>
      <comment>Discord Rich Presence small icon</comment>
      <translation>Icone piccole</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3417"/>
      <source>State</source>
      <comment>Discord Rich Presence state</comment>
      <translation>Stato</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3419"/>
      <source>Party size</source>
      <comment>Discord Rich Presence party size</comment>
      <translation>Gruppo dimensione</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3420"/>
      <source>Party max</source>
      <comment>Discord Rich Presence maximum party size</comment>
      <translation>Gruppo massimo</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3421"/>
      <source>Time</source>
      <comment>Discord Rich Presence time until or time elapsed</comment>
      <translation>Tempo</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3456"/>
      <source>Map symbol usage - %1</source>
      <translation>Mappa di utilizzo dei simboli - %1</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3533"/>
      <source>yyyy-MM-dd#HH-mm-ss (e.g., 1970-01-01#00-00-00.html)</source>
      <translation>yyyy-MM-dd#HH-mm-ss (es. 1970-01-01#00-00-00.html)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3534"/>
      <source>yyyy-MM-ddTHH-mm-ss (e.g., 1970-01-01T00-00-00.html)</source>
      <translation>yyyy-MM-ddTHH-mm-ss (es. 1970-01-01T00-00-00.html)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3535"/>
      <source>yyyy-MM-dd (concatenate daily logs in, e.g. 1970-01-01.html)</source>
      <translation>aaaa-mm-gg (concatena i log giornalieri, ad esempio, in 1970-01-01.html)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3536"/>
      <source>yyyy-MM (concatenate month logs in, e.g. 1970-01.html)</source>
      <translation>aaaa-mm (concatena i log mensili in, ad esempio, 1970-01.html)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3539"/>
      <source>yyyy-MM-dd#HH-mm-ss (e.g., 1970-01-01#00-00-00.txt)</source>
      <translation>aaaa-mm-gg #HH-mm-ss (ad esempio, 1970-01-01#00-00-00.txt)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3540"/>
      <source>yyyy-MM-ddTHH-mm-ss (e.g., 1970-01-01T00-00-00.txt)</source>
      <translation>yyyy-mm-ddTHH-mm-ss (es. 1970-01-01T00-00-00.html)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3541"/>
      <source>yyyy-MM-dd (concatenate daily logs in, e.g. 1970-01-01.txt)</source>
      <translation>aaaa-mm-gg (concatena i log giornalieri, ad esempio, in 1970-01-01.html)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3542"/>
      <source>yyyy-MM (concatenate month logs in, e.g. 1970-01.txt)</source>
      <translation>aaaa-mm (concatena i log mensili in, ad esempio, 1970-01.html)</translation>
    </message>
  </context>
  <context>
    <name>dlgRoomExits</name>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="144"/>
      <location filename="../src/dlgRoomExits.cpp" line="149"/>
      <location filename="../src/dlgRoomExits.cpp" line="724"/>
      <location filename="../src/dlgRoomExits.cpp" line="729"/>
      <location filename="../src/dlgRoomExits.cpp" line="777"/>
      <location filename="../src/dlgRoomExits.cpp" line="782"/>
      <location filename="../src/dlgRoomExits.cpp" line="826"/>
      <location filename="../src/dlgRoomExits.cpp" line="831"/>
      <location filename="../src/dlgRoomExits.cpp" line="875"/>
      <location filename="../src/dlgRoomExits.cpp" line="880"/>
      <location filename="../src/dlgRoomExits.cpp" line="924"/>
      <location filename="../src/dlgRoomExits.cpp" line="929"/>
      <location filename="../src/dlgRoomExits.cpp" line="973"/>
      <location filename="../src/dlgRoomExits.cpp" line="978"/>
      <location filename="../src/dlgRoomExits.cpp" line="1022"/>
      <location filename="../src/dlgRoomExits.cpp" line="1027"/>
      <location filename="../src/dlgRoomExits.cpp" line="1071"/>
      <location filename="../src/dlgRoomExits.cpp" line="1076"/>
      <location filename="../src/dlgRoomExits.cpp" line="1120"/>
      <location filename="../src/dlgRoomExits.cpp" line="1125"/>
      <location filename="../src/dlgRoomExits.cpp" line="1169"/>
      <location filename="../src/dlgRoomExits.cpp" line="1174"/>
      <location filename="../src/dlgRoomExits.cpp" line="1218"/>
      <location filename="../src/dlgRoomExits.cpp" line="1223"/>
      <location filename="../src/dlgRoomExits.cpp" line="1267"/>
      <location filename="../src/dlgRoomExits.cpp" line="1272"/>
      <location filename="../src/dlgRoomExits.cpp" line="1741"/>
      <location filename="../src/dlgRoomExits.cpp" line="1746"/>
      <location filename="../src/dlgRoomExits.cpp" line="1849"/>
      <location filename="../src/dlgRoomExits.cpp" line="1854"/>
      <source>&lt;b&gt;Room&lt;/b&gt; Weight of destination: %1.</source>
      <comment>Bold HTML tags are used to emphasis that the value is destination room&apos;s weight whether overridden by a non-zero exit weight here or not.</comment>
      <translation>Peso &lt;b&gt;Stanza&lt;/b&gt; di destinazione: %1.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="148"/>
      <location filename="../src/dlgRoomExits.cpp" line="728"/>
      <location filename="../src/dlgRoomExits.cpp" line="781"/>
      <location filename="../src/dlgRoomExits.cpp" line="830"/>
      <location filename="../src/dlgRoomExits.cpp" line="879"/>
      <location filename="../src/dlgRoomExits.cpp" line="928"/>
      <location filename="../src/dlgRoomExits.cpp" line="977"/>
      <location filename="../src/dlgRoomExits.cpp" line="1026"/>
      <location filename="../src/dlgRoomExits.cpp" line="1075"/>
      <location filename="../src/dlgRoomExits.cpp" line="1124"/>
      <location filename="../src/dlgRoomExits.cpp" line="1173"/>
      <location filename="../src/dlgRoomExits.cpp" line="1222"/>
      <location filename="../src/dlgRoomExits.cpp" line="1271"/>
      <location filename="../src/dlgRoomExits.cpp" line="1745"/>
      <location filename="../src/dlgRoomExits.cpp" line="1853"/>
      <source>Exit to unnamed room is valid</source>
      <translation>L'uscita verso la stanza senza nome è valida</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="155"/>
      <source>Entered number is invalid, set the number of the room that this special exit leads to, will turn blue for a valid number; if left like this, this exit will be deleted when &amp;lt;i&amp;gt;save&amp;lt;/i&amp;gt; is clicked.</source>
      <translation>Il valore inserito non è valido! Imposta il numero dell'uscita speciale, diventerà blu per numeri validi. Se lasciato vuoto, l'uscita sarà cancellata quando al salvataggio.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="217"/>
      <source>Set the number of the room that this special exit leads to, will turn blue for a valid number; if left like this, this exit will be deleted when &amp;lt;i&amp;gt;save&amp;lt;/i&amp;gt; is clicked.</source>
      <translation>Imposta il numero della stanza a cui l'uscita speciale si riferisce, diventerà blu per numeri validi. Se lasciato vuoto, l'uscita sarà cancellata quando al salvataggio.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="220"/>
      <location filename="../src/dlgRoomExits.cpp" line="1872"/>
      <source>Prevent a route being created via this exit, equivalent to an infinite exit weight.</source>
      <translation>Impedisci l'utilizzo di questa uscita per creare un percorso, equivale a un uscita di peso infinito.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="224"/>
      <location filename="../src/dlgRoomExits.cpp" line="1881"/>
      <source>Set to a positive value to override the default (Room) Weight for using this Exit route, zero value assigns the default.</source>
      <translation>Imposta un valore numerico positivo per sovrascrivere il peso dell'uscita della stanza quando viene utilizzata per creare un percorso. Inserisci zero per utilizzare il valore predefinito.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="226"/>
      <location filename="../src/dlgRoomExits.cpp" line="1888"/>
      <source>No door symbol is drawn on 2D Map for this exit (only functional choice currently).</source>
      <translation>Nessuna porta è disegnato sulla Mappa 2D per questa uscita (attualmente ha solo un utilizzo funzionale).</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="228"/>
      <location filename="../src/dlgRoomExits.cpp" line="1892"/>
      <source>Green (Open) door symbol would be drawn on a custom exit line for this exit on 2D Map (but not currently).</source>
      <translation>Il simbolo di porta verde (aperto) sarà disegnato sulla linea dell'uscita personalizzata sulla mappa 2D (ma non al momento).</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="230"/>
      <location filename="../src/dlgRoomExits.cpp" line="1897"/>
      <source>Orange (Closed) door symbol would be drawn on a custom exit line for this exit on 2D Map (but not currently).</source>
      <translation>Il simbolo di porta arancio (Chiuso) sarà disegnato sulla linea dell'uscita personalizzata sulla mappa 2D (ma non al momento).</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="232"/>
      <location filename="../src/dlgRoomExits.cpp" line="1900"/>
      <source>Red (Locked) door symbol would be drawn on a custom exit line for this exit on 2D Map (but not currently).</source>
      <translation>Il simbolo di porta rosso (Bloccato) sarà disegnato sulla linea dell'uscita personalizzata sulla mappa 2D (ma non al momento).</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="92"/>
      <location filename="../src/dlgRoomExits.cpp" line="215"/>
      <source>(room ID)</source>
      <comment>Placeholder, if no room ID is set for an exit, yet. This string is used in 2 places, ensure they match!</comment>
      <translation>(ID stanza)</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="132"/>
      <location filename="../src/dlgRoomExits.cpp" line="233"/>
      <location filename="../src/dlgRoomExits.cpp" line="268"/>
      <location filename="../src/dlgRoomExits.cpp" line="2255"/>
      <location filename="../src/dlgRoomExits.cpp" line="2277"/>
      <source>(command or Lua script)</source>
      <comment>Placeholder, if a special exit has no code given, yet. This string is also used programmatically - ensure all five instances are the same</comment>
      <translation>(comando o script Lua)</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="143"/>
      <location filename="../src/dlgRoomExits.cpp" line="723"/>
      <location filename="../src/dlgRoomExits.cpp" line="776"/>
      <location filename="../src/dlgRoomExits.cpp" line="825"/>
      <location filename="../src/dlgRoomExits.cpp" line="874"/>
      <location filename="../src/dlgRoomExits.cpp" line="923"/>
      <location filename="../src/dlgRoomExits.cpp" line="972"/>
      <location filename="../src/dlgRoomExits.cpp" line="1021"/>
      <location filename="../src/dlgRoomExits.cpp" line="1070"/>
      <location filename="../src/dlgRoomExits.cpp" line="1119"/>
      <location filename="../src/dlgRoomExits.cpp" line="1168"/>
      <location filename="../src/dlgRoomExits.cpp" line="1217"/>
      <location filename="../src/dlgRoomExits.cpp" line="1266"/>
      <location filename="../src/dlgRoomExits.cpp" line="1740"/>
      <location filename="../src/dlgRoomExits.cpp" line="1848"/>
      <source>Exit to &quot;%1&quot;.</source>
      <translation>Uscita per &quot;%1&quot;.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="737"/>
      <source>Entered number is invalid, set the number of the room northwest of this one, will turn blue for a valid number.</source>
      <translation>Il valore inserito non è valido! Imposta il numero della stanza a nord-ovest, diventerà blu per numeri validi.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="748"/>
      <location filename="../src/dlgRoomExits.cpp" line="1320"/>
      <source>Set the number of the room northwest of this one, will be blue for a valid number or red for invalid.</source>
      <translation>Imposta il numero della stanza a nord-ovest, diventerà blu per numeri validi o rosso in caso contrario.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="788"/>
      <source>Entered number is invalid, set the number of the room north of this one, will turn blue for a valid number.</source>
      <translation>Il valore inserito non è valido! Imposta il numero della stanza a nord, diventerà blu per numeri validi.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="798"/>
      <location filename="../src/dlgRoomExits.cpp" line="1354"/>
      <source>Set the number of the room north of this one, will be blue for a valid number or red for invalid.</source>
      <translation>Imposta il numero della stanza a nord, diventerà blu per numeri validi o rosso in caso contrario.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="837"/>
      <source>Entered number is invalid, set the number of the room northeast of this one, will turn blue for a valid number.</source>
      <translation>Il valore inserito non è valido! Imposta il numero della stanza a nord-est, diventerà blu per numeri validi.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="847"/>
      <location filename="../src/dlgRoomExits.cpp" line="1385"/>
      <source>Set the number of the room northeast of this one, will be blue for a valid number or red for invalid.</source>
      <translation>Imposta il numero della stanza a nord-est, diventerà blu per numeri validi o rosso in caso contrario.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="886"/>
      <source>Entered number is invalid, set the number of the room up from this one, will turn blue for a valid number.</source>
      <translation>Il valore inserito non è valido! Imposta il numero della stanza in alto, diventerà blu per numeri validi.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="896"/>
      <location filename="../src/dlgRoomExits.cpp" line="1416"/>
      <source>Set the number of the room up from this one, will be blue for a valid number or red for invalid.</source>
      <translation>Imposta il numero della stanza in alto, diventerà blu per numeri validi o rosso in caso contrario.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="935"/>
      <source>Entered number is invalid, set the number of the room west of this one, will turn blue for a valid number.</source>
      <translation>Il valore inserito non è valido! Imposta il numero della stanza a ovest, diventerà blu per numeri validi.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="945"/>
      <location filename="../src/dlgRoomExits.cpp" line="1447"/>
      <source>Set the number of the room west of this one, will be blue for a valid number or red for invalid.</source>
      <translation>Imposta il numero della stanza a ovest, diventerà blu per numeri validi o rosso in caso contrario.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="984"/>
      <source>Entered number is invalid, set the number of the room east of this one, will turn blue for a valid number.</source>
      <translation>Il valore inserito non è valido! Imposta il numero della stanza a est, diventerà blu per numeri validi.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="994"/>
      <location filename="../src/dlgRoomExits.cpp" line="1478"/>
      <source>Set the number of the room east of this one, will be blue for a valid number or red for invalid.</source>
      <translation>Imposta il numero della stanza a est, diventerà blu per numeri validi o rosso in caso contrario.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1033"/>
      <source>Entered number is invalid, set the number of the room down from this one, will turn blue for a valid number.</source>
      <translation>Il valore inserito non è valido! Imposta il numero della stanza in basso, diventerà blu per numeri validi.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1043"/>
      <location filename="../src/dlgRoomExits.cpp" line="1509"/>
      <source>Set the number of the room down from this one, will be blue for a valid number or red for invalid.</source>
      <translation>Imposta il numero della stanza in basso, diventerà blu per numeri validi o rosso in caso contrario.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1082"/>
      <source>Entered number is invalid, set the number of the room southwest of this one, will turn blue for a valid number.</source>
      <translation>Il valore inserito non è valido! Imposta il numero della stanza a sud-ovest, diventerà blu per numeri validi.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1092"/>
      <location filename="../src/dlgRoomExits.cpp" line="1540"/>
      <source>Set the number of the room southwest of this one, will be blue for a valid number or red for invalid.</source>
      <translation>Imposta il numero della stanza a sud-ovest, diventerà blu per numeri validi o rosso in caso contrario.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1131"/>
      <source>Entered number is invalid, set the number of the room south of this one, will turn blue for a valid number.</source>
      <translation>Il valore inserito non è valido! Imposta il numero della stanza a sud, diventerà blu per numeri validi.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1141"/>
      <location filename="../src/dlgRoomExits.cpp" line="1571"/>
      <source>Set the number of the room south of this one, will be blue for a valid number or red for invalid.</source>
      <translation>Imposta il numero della stanza a sud, diventerà blu per numeri validi o rosso in caso contrario.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1180"/>
      <source>Entered number is invalid, set the number of the room southeast of this one, will turn blue for a valid number.</source>
      <translation>Il valore inserito non è valido! Imposta il numero della stanza a sud-est, diventerà blu per numeri validi.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1190"/>
      <location filename="../src/dlgRoomExits.cpp" line="1602"/>
      <source>Set the number of the room southeast of this one, will be blue for a valid number or red for invalid.</source>
      <translation>Imposta il numero della stanza a sud-est, diventerà blu per numeri validi o rosso in caso contrario.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1229"/>
      <source>Entered number is invalid, set the number of the room in from this one, will turn blue for a valid number.</source>
      <translation>Il valore inserito non è valido! Imposta il numero della stanza in ingresso, diventerà blu per numeri validi.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1239"/>
      <location filename="../src/dlgRoomExits.cpp" line="1633"/>
      <source>Set the number of the room in from this one, will be blue for a valid number or red for invalid.</source>
      <translation>Imposta il numero della stanza in ingresso, diventerà blu per numeri validi o rosso in caso contrario.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1278"/>
      <source>Entered number is invalid, set the number of the room out from this one, will turn blue for a valid number.</source>
      <translation>Il valore inserito non è valido! Imposta il numero della stanza in uscita, diventerà blu per numeri validi.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1288"/>
      <location filename="../src/dlgRoomExits.cpp" line="1664"/>
      <source>Set the number of the room out from this one, will be blue for a valid number or red for invalid.</source>
      <translation>Imposta il numero della stanza in uscita, diventerà blu per numeri validi o rosso in caso contrario.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1312"/>
      <location filename="../src/dlgRoomExits.cpp" line="1346"/>
      <location filename="../src/dlgRoomExits.cpp" line="1377"/>
      <location filename="../src/dlgRoomExits.cpp" line="1408"/>
      <location filename="../src/dlgRoomExits.cpp" line="1439"/>
      <location filename="../src/dlgRoomExits.cpp" line="1470"/>
      <location filename="../src/dlgRoomExits.cpp" line="1501"/>
      <location filename="../src/dlgRoomExits.cpp" line="1532"/>
      <location filename="../src/dlgRoomExits.cpp" line="1563"/>
      <location filename="../src/dlgRoomExits.cpp" line="1594"/>
      <location filename="../src/dlgRoomExits.cpp" line="1625"/>
      <location filename="../src/dlgRoomExits.cpp" line="1656"/>
      <location filename="../src/dlgRoomExits.cpp" line="1769"/>
      <source>Clear the stub exit for this exit to enter an exit roomID.</source>
      <translation>Cancella l'uscita temporanea, prima di inserire la corrispondente StanzaID.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1691"/>
      <source>northwest</source>
      <translation>nord-ovest</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1692"/>
      <source>north</source>
      <translation>nord</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1693"/>
      <source>northeast</source>
      <translation>nord-est</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1694"/>
      <source>up</source>
      <translation>alto</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1695"/>
      <source>west</source>
      <translation>ovest</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1696"/>
      <source>east</source>
      <translation>est</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1697"/>
      <source>down</source>
      <translation>basso</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1698"/>
      <source>southwest</source>
      <translation>sud-ovest</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1699"/>
      <source>south</source>
      <translation>sud</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1700"/>
      <source>southeast</source>
      <translation>sud-est</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1701"/>
      <source>in</source>
      <translation>entra</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1702"/>
      <source>out</source>
      <translation>fuori</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1777"/>
      <source>Set the number of the room %1 of this one, will be blue for a valid number or red for invalid.</source>
      <translation>Imposta il numero della stanza a/in %1, diventerà blu per numeri validi o rosso in caso contrario.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1800"/>
      <source>Exits for room: &quot;%1&quot; [*]</source>
      <translation>Uscite per la stanza: &quot;%1&quot; [*]</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1802"/>
      <source>Exits for room Id: %1 [*]</source>
      <translation>Uscite per la stanza Id: %1 [*]</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1860"/>
      <source>Room Id is invalid, set the number of the room that this special exit leads to, will turn blue for a valid number.</source>
      <translation>StanzaID non è valido, imposta il numero di stanza per questa uscita speciale, il colore diventerà blu quando è presente un valore corretto.</translation>
    </message>
  </context>
  <context>
    <name>dlgRoomSymbol</name>
    <message numerus="yes">
      <location filename="../src/dlgRoomSymbol.cpp" line="75"/>
      <source>The only used symbol is &quot;%1&quot; in one or
more of the selected %n room(s), delete this to
clear it from all selected rooms or replace
with a new symbol to use for all the rooms:</source>
      <comment>This is for when applying a new room symbol to one or more rooms and some have the SAME symbol (others may have none) at present, %n is the total number of rooms involved and is at least two. Use line feeds to format text into a reasonable rectangle.</comment>
      <translation>
        <numerusform>L'unico simbolo utilizzato è &quot;%1&quot; in una o
più delle %n camere selezionate, eliminalo per
cancellarlo da tutte le stanze selezionate o sostituiscilo
con un nuovo simbolo da utilizzare per tutte le stanze:</numerusform>
        <numerusform>L'unico simbolo utilizzato è &quot;%1&quot; in una o
più delle %n camere selezionate, eliminalo per
cancellarlo da tutte le stanze selezionate o sostituiscilo
con un nuovo simbolo da utilizzare per tutte le stanze:</numerusform>
      </translation>
    </message>
    <message>
      <location filename="../src/dlgRoomSymbol.cpp" line="86"/>
      <source>The symbol is &quot;%1&quot; in the selected room,
delete this to clear the symbol or replace
it with a new symbol for this room:</source>
      <comment>This is for when applying a new room symbol to one room. Use line feeds to format text into a reasonable rectangle.</comment>
      <translation>Il simbolo è &quot;%1&quot; nella stanza selezionata,
elimina il valore per ripulire il simbolo o sostituiscilo
con un nuovo simbolo per questa stanza:</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/dlgRoomSymbol.cpp" line="95"/>
      <source>Choose:
 • an existing symbol from the list below (sorted by most commonly used first)
 • enter one or more graphemes (&quot;visible characters&quot;) as a new symbol
 • enter a space to clear any existing symbols
for all of the %n selected room(s):</source>
      <comment>Use line feeds to format text into a reasonable rectangle if needed, %n is the number of rooms involved.</comment>
      <translation>
        <numerusform>Scegli:
 • un simbolo esistente dalla lista sottostante (precedenza ai più comunemente usato)
 • inserisci uno o più grafemi (&quot;caratteri visibili&quot;) come nuovo simbolo
 • inserisci uno spazio per cancellare qualsiasi simbolo esistente
per tutte le %n stanze selezionate:</numerusform>
        <numerusform>Scegli:
 • un simbolo esistente dalla lista sottostante (precedenza ai più comunemente usato)
 • inserisci uno o più grafemi (&quot;caratteri visibili&quot;) come nuovo simbolo
 • inserisci uno spazio per cancellare qualsiasi simbolo esistente
per tutte le %n stanze selezionate:</numerusform>
      </translation>
    </message>
    <message>
      <location filename="../src/dlgRoomSymbol.cpp" line="129"/>
      <source>%1 {count:%2}</source>
      <comment>Everything after the first parameter (the &apos;%1&apos;) will be removed by processing it as a QRegularExpression programmatically, ensure the translated text has ` {` immediately after the &apos;%1&apos;, and &apos;}&apos; as the very last character, so that the right portion can be extracted if the user clicks on this item when it is shown in the QComboBox it is put in.</comment>
      <translation>%1 { count:%2}</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomSymbol.cpp" line="200"/>
      <source>Pick color</source>
      <translation>Scegli colore</translation>
    </message>
  </context>
  <context>
    <name>dlgTriggerEditor</name>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="251"/>
      <source>-- Enter your lua code here
</source>
      <translation>— Inserisci il tuo codice lua qui
</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="331"/>
      <source>*** starting new session ***
</source>
      <translation>* * * Inizio nuova sessione * * *
</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="419"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="5838"/>
      <source>Triggers</source>
      <translation>Trigger</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="420"/>
      <source>Show Triggers</source>
      <translation>Mostra Trigger</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="423"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="5862"/>
      <source>Buttons</source>
      <translation>Bottoni</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="424"/>
      <source>Show Buttons</source>
      <translation>Mostra Bottoni</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="428"/>
      <source>Aliases</source>
      <translation>Alias</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="429"/>
      <source>Show Aliases</source>
      <translation>Mostra Alias</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="433"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="5844"/>
      <source>Timers</source>
      <translation>Timer</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="434"/>
      <source>Show Timers</source>
      <translation>Mostra Timer</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="437"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="5850"/>
      <source>Scripts</source>
      <translation>Script</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="438"/>
      <source>Show Scripts</source>
      <translation>Mostra Script</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="441"/>
      <source>Keys</source>
      <translation>Tasti</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="442"/>
      <source>Show Keybindings</source>
      <translation>Mostra scorciatoie da tastiera</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="445"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="6250"/>
      <source>Variables</source>
      <translation>Variabili</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="446"/>
      <source>Show Variables</source>
      <translation>Mostra Variabili</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="449"/>
      <source>Activate</source>
      <translation>Attiva</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="450"/>
      <source>Toggle Active or Non-Active Mode for Triggers, Scripts etc.</source>
      <translation>Attiva/Disattiva Trigger, Script, ecc.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="460"/>
      <source>Add Item</source>
      <translation>Aggiungi</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="461"/>
      <source>Add new Trigger, Script, Alias or Filter</source>
      <translation>Aggiungi Trigger, Script, Alias o Filtro</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="464"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="466"/>
      <source>Delete Item</source>
      <translation>Cancella</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="465"/>
      <source>Delete Trigger, Script, Alias or Filter</source>
      <translation>Elimina Trigger, Script, Alias o Filtro</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="472"/>
      <source>Add Group</source>
      <translation>Aggiungi Gruppo</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="473"/>
      <source>Add new Group</source>
      <translation>Aggiungi nuovo Gruppo</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="476"/>
      <source>Save Item</source>
      <translation>Salva</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="477"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8376"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8401"/>
      <source>Ctrl+S</source>
      <translation>Ctrl+S</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="479"/>
      <source>Saves the selected item. (Ctrl+S)&lt;/p&gt;Saving causes any changes to the item to take effect.
It will not save to disk, so changes will be lost in case of a computer/program crash (but Save Profile to the right will be secure.)</source>
      <translation>Salva l'elemento selezionato. (Ctrl+S)&lt;/p&gt;Il salvataggio rende effettive le modifiche all'elemento.
Non saranno salvate modifiche sul disco fisso, quindi andranno perse in caso di problemi con il computer/programma (usa Salva Profilo, poco più a destra, per evitare di perdere il lavoro fatto.)</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="481"/>
      <source>Saves the selected trigger, script, alias, etc, causing new changes to take effect - does not save to disk though...</source>
      <translation>Salva il trigger, script, alias, ecc. selezionato, applicando le modifiche effettuate - non salva l'elemento su disco...</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="484"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8867"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8873"/>
      <source>Copy</source>
      <translation>Copia</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="488"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="489"/>
      <source>Copy the trigger/script/alias/etc</source>
      <translation>Copia trigger/script/alias/ecc</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="498"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8868"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8874"/>
      <source>Paste</source>
      <translation>Incolla</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="502"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="503"/>
      <source>Paste triggers/scripts/aliases/etc from the clipboard</source>
      <translation>Incolla trigger/script/alias/ecc dagli appunti</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="517"/>
      <source>Import</source>
      <translation>Importa</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="521"/>
      <source>Export</source>
      <translation>Esporta</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="525"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8711"/>
      <source>Save Profile</source>
      <translation>Salva Profilo</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="527"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8378"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8403"/>
      <source>Ctrl+Shift+S</source>
      <translation>Ctrl+Maiusc+S</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="530"/>
      <source>Saves your profile. (Ctrl+Shift+S)&lt;p&gt;Saves your entire profile (triggers, aliases, scripts, timers, buttons and keys, but not the map or script-specific settings) to your computer disk, so in case of a computer or program crash, all changes you have done will be retained.&lt;/p&gt;&lt;p&gt;It also makes a backup of your profile, you can load an older version of it when connecting.&lt;/p&gt;&lt;p&gt;Should there be any modules that are marked to be &quot;&lt;i&gt;synced&lt;/i&gt;&quot; this will also cause them to be saved and reloaded into other profiles if they too are active.</source>
      <translation>Salva il tuo profilo. (Ctrl+Maiusc+S)&lt;p&gt;Salva il tuo intero profilo (trigger, alias, script, timer, bottoni e tasti, ma non la mappa o le impostazioni specifiche degli script) sul disco fisso quindi in caso di un arresto anomalo del computer o del programma, tutte le modifiche che hai fatto verranno mantenute.&lt;/p&gt;&lt;p&gt;Fa anche un backup del tuo profilo così da poter caricare una versione precedente al momento della connessione.&lt;/p&gt;&lt;p&gt;Se sono presenti moduli contrassegnati come &quot;&lt;i&gt;sincronizzati&lt;/i&gt;&quot; questo causerà anche il salvataggio e l'aggiornamento degli stessi in altri profili se sono attivi.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="532"/>
      <source>Saves your entire profile (triggers, aliases, scripts, timers, buttons and keys, but not the map or script-specific settings); also &quot;synchronizes&quot; modules that are so marked.</source>
      <translation>Salva il tuo profilo (trigger, alias, script, timer, bottoni e tasti, ma non le impostazioni specifiche di mappa o script); &quot;sincronizza&quot; anche i moduli contrassegnati.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="535"/>
      <source>Save Profile As</source>
      <translation>Salva Profilo come</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="539"/>
      <source>Statistics</source>
      <translation>Statistiche</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="540"/>
      <source>Generates a statistics summary display on the main profile console.</source>
      <translation>Genera delle statistiche di riepilogo sulla console principale del profilo.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="544"/>
      <source>Shows/Hides the errors console in the bottom right of this editor.</source>
      <translation>Mostra/Nasconde la console degli errori nella parte inferiore destra dell'editor.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="547"/>
      <source>Debug</source>
      <translation>Debug</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="548"/>
      <source>Activates Debug Messages -&gt; system will be &lt;b&gt;&lt;i&gt;slower&lt;/i&gt;&lt;/b&gt;.</source>
      <translation>Attiva i messaggi di Debug -&gt; il sistema sarà &lt;b&gt;&lt;i&gt;più lento&lt;/i&gt;&lt;/b&gt;.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="549"/>
      <source>Shows/Hides the separate Central Debug Console - when being displayed the system will be slower.</source>
      <translation>Mostra/Nasconde la Console di Debug Principale - quando è attiva il sistema potrebbe essere più lento.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="572"/>
      <source>Editor Toolbar - %1 - Actions</source>
      <comment>This is the toolbar that is initally placed at the top of the editor.</comment>
      <translation>Barra degli strumenti Editor - %1 - Azioni</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="608"/>
      <source>Editor Toolbar - %1 - Items</source>
      <comment>This is the toolbar that is initally placed at the left side of the editor.</comment>
      <translation>Barra degli strumenti Editor - %1 - Elementi</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="672"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="675"/>
      <source>Search Options</source>
      <translation>Opzioni di Ricerca</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="679"/>
      <source>Case sensitive</source>
      <translation>Maiuscole/minuscole</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="732"/>
      <source>Type</source>
      <comment>Heading for the first column of the search results</comment>
      <translation>Tipo</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="733"/>
      <source>Name</source>
      <comment>Heading for the second column of the search results</comment>
      <translation>Nome</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="734"/>
      <source>Where</source>
      <comment>Heading for the third column of the search results</comment>
      <translation>Dove</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="735"/>
      <source>What</source>
      <comment>Heading for the fourth column of the search results</comment>
      <translation>Testo</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="782"/>
      <source>start of line</source>
      <translation>inizio della riga</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="815"/>
      <source>Text to find (trigger pattern)</source>
      <translation>Testo da cercare (pattern trigger)</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="2785"/>
      <source>Trying to activate a trigger group, filter or trigger or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them &lt;em&gt;succeeded&lt;/em&gt;.</source>
      <translation>Tentativo &lt;em&gt;riuscito&lt;/em&gt; di attivare un gruppo di trigger, un filtro, un trigger singolo o parte del modulo &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; che li contiene.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="2787"/>
      <source>Trying to deactivate a trigger group, filter or trigger or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them &lt;em&gt;succeeded&lt;/em&gt;.</source>
      <translation>Tentativo &lt;em&gt;riuscito&lt;/em&gt; di disattivare un gruppo di trigger, un filtro, un trigger singolo o parte del modulo &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; che li contiene.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="2791"/>
      <source>&lt;b&gt;Unable to activate a filter or trigger or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them; reason: %2.&lt;/b&gt;&lt;/p&gt;
                     &lt;p&gt;&lt;i&gt;You will need to reactivate this after the problem has been corrected.&lt;/i&gt;&lt;/p&gt;</source>
      <translation>&lt;p&gt;&lt;b&gt;Impossibile attivare un filtro, un trigger o parte del modulo &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; che li contiene; motivo: %2.&lt;/b&gt;&lt;/p&gt;
                     &lt;p&gt;&lt;i&gt;Dovrai riattivare l'elemento dopo la risoluzione del problema.&lt;/i&gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="2928"/>
      <source>Trying to activate a timer group, offset timer, timer or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them &lt;em&gt;succeeded&lt;/em&gt;.</source>
      <translation>Tentativo &lt;em&gt;riuscito&lt;/em&gt; di attivare un gruppo di timer, un timer, o parte del modulo &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; che li contiene.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="2930"/>
      <source>Trying to deactivate a timer group, offset timer, timer or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them &lt;em&gt;succeeded&lt;/em&gt;.</source>
      <translation>Tentativo &lt;em&gt;riuscito&lt;/em&gt; di disattivare un gruppo di timer, un timer, o parte del modulo &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; che li contiene.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="2934"/>
      <source>&lt;p&gt;&lt;b&gt;Unable to activate an offset timer or timer or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them; reason: %2.&lt;/b&gt;&lt;/p&gt;
                     &lt;p&gt;&lt;i&gt;You will need to reactivate this after the problem has been corrected.&lt;/i&gt;&lt;/p&gt;</source>
      <translation>&lt;p&gt;&lt;b&gt;Impossibile attivare un gruppo di timer, un timer o parte del modulo &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; che li contiene; motivo: %2.&lt;/b&gt;&lt;/p&gt;
                     &lt;p&gt;&lt;i&gt;Dovrai riattivare l'elemento dopo la risoluzione del problema.&lt;/i&gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="2972"/>
      <source>Trying to activate an alias group, alias or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them &lt;em&gt;succeeded&lt;/em&gt;.</source>
      <translation>Tentativo &lt;em&gt;riuscito&lt;/em&gt; di attivare un gruppo di alias, un alias, o parte del modulo &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; che li contiene.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="2974"/>
      <source>Trying to deactivate an alias group, alias or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them &lt;em&gt;succeeded&lt;/em&gt;.</source>
      <translation>Tentativo &lt;em&gt;riuscito&lt;/em&gt; di disattivare un gruppo di alias, un alias, o parte del modulo &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; che li contiene.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="2978"/>
      <source>&lt;p&gt;&lt;b&gt;Unable to activate an alias or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them; reason: %2.&lt;/b&gt;&lt;/p&gt;
                     &lt;p&gt;&lt;i&gt;You will need to reactivate this after the problem has been corrected.&lt;/i&gt;&lt;/p&gt;</source>
      <translation>&lt;p&gt;&lt;b&gt;Impossibile attivare un gruppo di alias, un alias o parte del modulo &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; che li contiene; motivo: %2.&lt;/b&gt;&lt;/p&gt;
                     &lt;p&gt;&lt;i&gt;Dovrai riattivare l'elemento dopo la risoluzione del problema.&lt;/i&gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3076"/>
      <source>Trying to activate a script group, script or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them &lt;em&gt;succeeded&lt;/em&gt;.</source>
      <translation>Tentativo &lt;em&gt;riuscito&lt;/em&gt; di attivare un gruppo di script, uno script, o parte del modulo &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; che li contiene.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3078"/>
      <source>Trying to deactivate a script group, script or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them &lt;em&gt;succeeded&lt;/em&gt;.</source>
      <translation>Tentativo &lt;em&gt;riuscito&lt;/em&gt; di disattivare un gruppo di script, uno script, o parte del modulo &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; che li contiene.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3082"/>
      <source>&lt;p&gt;&lt;b&gt;Unable to activate a script group or script or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them; reason: %2.&lt;/b&gt;&lt;/p&gt;
                     &lt;p&gt;&lt;i&gt;You will need to reactivate this after the problem has been corrected.&lt;/i&gt;&lt;/p&gt;</source>
      <translation>&lt;p&gt;&lt;b&gt;Impossibile attivare un gruppo di script, uno script o parte del modulo &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; che li contiene; motivo: %2.&lt;/b&gt;&lt;/p&gt;
                     &lt;p&gt;&lt;i&gt;Dovrai riattivare l'elemento dopo la risoluzione del problema.&lt;/i&gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3147"/>
      <source>Trying to activate a button/menu/toolbar or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them &lt;em&gt;succeeded&lt;/em&gt;.</source>
      <translation>Tentativo &lt;em&gt;riuscito&lt;/em&gt; di attivare un bottone/menu/barra degli strumenti o parte del modulo &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; che li contiene.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3149"/>
      <source>Trying to deactivate a button/menu/toolbar or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them &lt;em&gt;succeeded&lt;/em&gt;.</source>
      <translation>Tentativo &lt;em&gt;riuscito&lt;/em&gt; di disattivare un bottone/menu/barra degli strumenti, o parte del modulo &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; che li contiene.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3153"/>
      <source>&lt;p&gt;&lt;b&gt;Unable to activate a button/menu/toolbar or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them; reason: %2.&lt;/b&gt;&lt;/p&gt;
                     &lt;p&gt;&lt;i&gt;You will need to reactivate this after the problem has been corrected.&lt;/i&gt;&lt;/p&gt;</source>
      <translation>&lt;p&gt;&lt;b&gt;Impossibile attivare un bottone/menu/barra degli strumenti o parte del modulo &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; che li contiene; motivo: %2.&lt;/b&gt;&lt;/p&gt;
                     &lt;p&gt;&lt;i&gt;Dovrai riattivare l'elemento dopo la risoluzione del problema.&lt;/i&gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3267"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="4097"/>
      <source>New trigger group</source>
      <translation>Nuovo gruppo di trigger</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3269"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="4097"/>
      <source>New trigger</source>
      <translation>Nuovo trigger</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3368"/>
      <source>New timer group</source>
      <translation>Nuovo gruppo di timer</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3370"/>
      <source>New timer</source>
      <translation>Nuovo timer</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3458"/>
      <source>Table name...</source>
      <translation>Nome tabella...</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3465"/>
      <source>Variable name...</source>
      <translation>Nome variabile...</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3522"/>
      <source>New key group</source>
      <translation>Nuovo gruppo di tasti</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3524"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="4797"/>
      <source>New key</source>
      <translation>Nuovo tasto</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3606"/>
      <source>New alias group</source>
      <translation>Nuovo gruppo di alias</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3608"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="4205"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="4275"/>
      <source>New alias</source>
      <translation>Nuovo alias</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3697"/>
      <source>New menu</source>
      <translation>Nuovo menu</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3699"/>
      <source>New button</source>
      <translation>Nuovo bottone</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3730"/>
      <source>New toolbar</source>
      <translation>Nuova barra degli strumenti</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3783"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="4524"/>
      <source>New script group</source>
      <translation>Nuovo gruppo di script</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3785"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="4524"/>
      <source>New script</source>
      <translation>Nuovo script</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="4219"/>
      <source>Alias &lt;em&gt;%1&lt;/em&gt; has an infinite loop - substitution matches its own pattern. Please fix it - this alias isn&apos;t good as it&apos;ll call itself forever.</source>
      <translation>L'alias &lt;em&gt;%1&lt;/em&gt; crea un ciclo infinito - la sostituzione inserita contiene il pattern. Correggilo!
Questo alias &apos;non è corretto&apos; perchè continuerebbe ad essere eseguito all'infinito.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="4762"/>
      <source>Checked variables will be saved and loaded with your profile.</source>
      <translation>Le variabili selezionate saranno salvate e caricate con il profilo.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="4897"/>
      <source>match on the prompt line</source>
      <translation>cerca sulla linea dei comandi</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="4900"/>
      <source>match on the prompt line (disabled)</source>
      <translation>cerca sulla riga del prompt (disabilitato)</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="4901"/>
      <source>A Go-Ahead (GA) signal from the game is required to make this feature work</source>
      <translation>Un segnale Go-Ahead (GA) dal gioco è necessario per utilizzare questa funzione</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="4951"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="5061"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8610"/>
      <source>Foreground color ignored</source>
      <comment>Color trigger ignored foreground color button, ensure all three instances have the same text</comment>
      <translation>Colore carattere ignorato</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="4955"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="5065"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8613"/>
      <source>Default foreground color</source>
      <comment>Color trigger default foreground color button, ensure all three instances have the same text</comment>
      <translation>Colore carattere predefinito</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="4959"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="5069"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8616"/>
      <source>Foreground color [ANSI %1]</source>
      <comment>Color trigger ANSI foreground color button, ensure all three instances have the same text</comment>
      <translation>Colore carattere [ANSI %1]</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="4966"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="5076"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8673"/>
      <source>Background color ignored</source>
      <comment>Color trigger ignored background color button, ensure all three instances have the same text</comment>
      <translation>Colore di sfondo ignorato</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="4970"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="5080"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8676"/>
      <source>Default background color</source>
      <comment>Color trigger default background color button, ensure all three instances have the same text</comment>
      <translation>Colore di sfondo predefinito</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="4974"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="5084"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8679"/>
      <source>Background color [ANSI %1]</source>
      <comment>Color trigger ANSI background color button, ensure all three instances have the same text</comment>
      <translation>Colore di sfondo [ANSI %1]</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="5095"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="5097"/>
      <source>fault</source>
      <translation>errore</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="5150"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="5154"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8499"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8525"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="9017"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="9018"/>
      <source>keep</source>
      <comment>Keep the existing colour on matches to highlight. Use shortest word possible so it fits on the button</comment>
      <translation>mantieni</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="5611"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8473"/>
      <source>Command:</source>
      <translation>Comando:</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="5650"/>
      <source>Menu properties</source>
      <translation>Proprietà del menu</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="5660"/>
      <source>Button properties</source>
      <translation>Proprietà del bottone</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="5668"/>
      <source>Command (down);</source>
      <translation>Comando (basso);</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="5856"/>
      <source>Aliases - Input Triggers</source>
      <translation>Alias - Trigger di input</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="5868"/>
      <source>Key Bindings</source>
      <translation>Combinazioni Tasti</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="7606"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7610"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7630"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7634"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7654"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7658"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7678"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7682"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7702"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7706"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7726"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7731"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7751"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7755"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7774"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7778"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7797"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7801"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7820"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7824"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7843"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7847"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7866"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7871"/>
      <source>Export Package:</source>
      <translation>Esporta package:</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="7606"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7610"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7630"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7634"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7654"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7658"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7678"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7682"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7702"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7706"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7726"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7731"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7751"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7755"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7774"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7778"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7797"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7801"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7820"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7824"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7843"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7847"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7866"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7871"/>
      <source>You have to choose an item for export first. Please select a tree item and then click on export again.</source>
      <translation>È necessario scegliere un elemento da esportare. Seleziona una voce della vista ad albero e quindi fai clic di nuovo su esportazione.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="7615"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7639"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7663"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7687"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7711"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7736"/>
      <source>Package %1 saved</source>
      <translation>Package %1 salvato</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="7760"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7783"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7806"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7829"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7852"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7876"/>
      <source>Copied %1 to clipboard</source>
      <translation>Copia %1 negli appunti</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="7886"/>
      <source>Export Triggers</source>
      <translation>Esporta Trigger</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="7886"/>
      <source>Mudlet packages (*.xml)</source>
      <translation>Mudlet packages (*.xml)</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="7900"/>
      <source>export package:</source>
      <translation>esporta package:</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="7900"/>
      <source>Cannot write file %1:
%2.</source>
      <translation>Impossibile scrivere il file %1:
%2.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8171"/>
      <source>Import Mudlet Package</source>
      <translation>Importa package Mudlet</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8178"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8192"/>
      <source>Import Mudlet Package:</source>
      <translation>Importa package di Mudlet:</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8178"/>
      <source>Cannot read file %1:
%2.</source>
      <translation>Impossibile leggere il file %1:
%2.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8192"/>
      <source>Package %1 is already installed.</source>
      <translation>Il package %1 è già installato.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8323"/>
      <source>Couldn&apos;t save profile</source>
      <translation>Non e&apos; possibile salvare il profilo</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8323"/>
      <source>Sorry, couldn&apos;t save your profile - got the following error: %1</source>
      <translation>Spiacenti, non e&apos; possibile salvare il tuo profilo - errore: %1</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8330"/>
      <source>Backup Profile</source>
      <translation>Backup Profilo</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8330"/>
      <source>trigger files (*.trigger *.xml)</source>
      <translation>file trigger (*.trigger *.xml)</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8460"/>
      <source>Seclect Icon</source>
      <translation>Seleziona icona</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8460"/>
      <source>Images (*.png *.xpm *.jpg)</source>
      <translation>Immagini (*.png *.xpm *.jpg)</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8469"/>
      <source>Command (down):</source>
      <translation>Comando (basso):</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8490"/>
      <source>Select foreground color to apply to matches</source>
      <translation>Seleziona il colore da applicare alle corrispondenze</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8516"/>
      <source>Select background color to apply to matches</source>
      <translation>Seleziona il colore di sfondo da applicare alle corrispondenze</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8534"/>
      <source>Choose sound file</source>
      <translation>Scegli file audio</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8538"/>
      <source>Audio files(*.aac *.mp3 *.mp4a *.oga *.ogg *.pcm *.wav *.wma);;Advanced Audio Coding-stream(*.aac);;MPEG-2 Audio Layer 3(*.mp3);;MPEG-4 Audio(*.mp4a);;Ogg Vorbis(*.oga *.ogg);;PCM Audio(*.pcm);;Wave(*.wav);;Windows Media Audio(*.wma);;All files(*.*)</source>
      <comment>This the list of file extensions that are considered for sounds from triggers, the terms inside of the &apos;(&apos;...&apos;)&apos; and the &quot;;;&quot; are used programmatically and should not be changed.</comment>
      <translation>File audio(*.aac *.mp3 *.mp4a *.oga *.ogg *.pcm *.wav *.wma);;Advanced Audio Coding-stream(*.aac);;MPEG-2 Audio Layer 3(*.mp3);;MPEG-4 Audio(*.mp4a);;Ogg Vorbis(*.oga *.ogg);;PCM Audio(*.pcm);;Wave(*.wav);;Windows Media Audio(*.wma);;Tutti i file(*. *)</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8591"/>
      <source>Select foreground trigger color for item %1</source>
      <translation>Seleziona il colore del trigger per l'elemento %1</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8655"/>
      <source>Select background trigger color for item %1</source>
      <translation>Selezionare il colore di sfondo del trigger per l'elemento %1</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8704"/>
      <source>Saving…</source>
      <translation>Salvataggio…</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8863"/>
      <source>Format All</source>
      <translation>Formatta tutto</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8866"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8872"/>
      <source>Cut</source>
      <translation>Taglia</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8870"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8876"/>
      <source>Select All</source>
      <translation>Seleziona Tutto</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="9032"/>
      <source>&lt;p&gt;Sound file to play when the trigger fires.&lt;/p&gt;</source>
      <translation>&lt;p&gt;File audio da riprodurre quando si attiva il trigger.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="780"/>
      <source>substring</source>
      <translation>sottostringa</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="103"/>
      <source>&lt;p&gt;Alias react on user input. To add a new alias:&lt;ol&gt;&lt;li&gt;Click on the &apos;Add Item&apos; icon above.&lt;/li&gt;&lt;li&gt;Define an input &lt;strong&gt;pattern&lt;/strong&gt; either literally or with a Perl regular expression.&lt;/li&gt;&lt;li&gt;Define a &apos;substitution&apos; &lt;strong&gt;command&lt;/strong&gt; to send to the game in clear text &lt;strong&gt;instead of the alias pattern&lt;/strong&gt;, or write a script for more complicated needs.&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Activate&lt;/strong&gt; the alias.&lt;/li&gt;&lt;/ol&gt;&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Note:&lt;/strong&gt; Aliases can also be defined from the command line in the main profile window like this:&lt;/p&gt;&lt;p&gt;&lt;code&gt;lua permAlias(&amp;quot;my greets&amp;quot;, &amp;quot;&amp;quot;, &amp;quot;^hi$&amp;quot;, [[send (&amp;quot;say Greetings, traveller!&amp;quot;) echo (&amp;quot;We said hi!&amp;quot;)]])&lt;/code&gt;&lt;/p&gt;&lt;p&gt;You can now greet by typing &apos;hi&apos;&lt;/p&gt;&lt;p&gt;Check the manual for &lt;a href=&apos;http://wiki.mudlet.org/w/Manual:Contents&apos;&gt;more information&lt;/a&gt;.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="113"/>
      <source>&lt;p&gt;Triggers react on game output. To add a new trigger:&lt;ol&gt;&lt;li&gt;Click on the &apos;Add Item&apos; icon above.&lt;/li&gt;&lt;li&gt;Define a &lt;strong&gt;pattern&lt;/strong&gt; that you want to trigger on.&lt;/li&gt;&lt;li&gt;Select the appropriate pattern &lt;strong&gt;type&lt;/strong&gt;.&lt;/li&gt;&lt;li&gt;Define a clear text &lt;strong&gt;command&lt;/strong&gt; that you want to send to the game if the trigger finds the pattern in the text from the game, or write a script for more complicated needs..&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Activate&lt;/strong&gt; the trigger.&lt;/li&gt;&lt;/ol&gt;&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Note:&lt;/strong&gt; Triggers can also be defined from the command line in the main profile window like this:&lt;/p&gt;&lt;p&gt;&lt;code&gt;lua permSubstringTrigger(&amp;quot;My drink trigger&amp;quot;, &amp;quot;&amp;quot;, &amp;quot;You are thirsty.&amp;quot;, function() send(&amp;quot;drink water&amp;quot;) end)&lt;/code&gt;&lt;/p&gt;&lt;p&gt;This will keep you refreshed.&lt;/p&gt;&lt;p&gt;Check the manual for &lt;a href=&apos;http://wiki.mudlet.org/w/Manual:Contents&apos;&gt;more information&lt;/a&gt;.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="124"/>
      <source>&lt;p&gt;Scripts organize code and can react to events. To add a new script:&lt;ol&gt;&lt;li&gt;Click on the &apos;Add Item&apos; icon above.&lt;/li&gt;&lt;li&gt;Enter a script in the box below. You can for example define &lt;strong&gt;functions&lt;/strong&gt; to be called by other triggers, aliases, etc.&lt;/li&gt;&lt;li&gt;If you write lua &lt;strong&gt;commands&lt;/strong&gt; without defining a function, they will be run on Mudlet startup and each time you open the script for editing.&lt;/li&gt;&lt;li&gt;If needed, you can register a list of &lt;strong&gt;events&lt;/strong&gt; with the + and - symbols. If one of these events take place, the function with the same name as the script item itself will be called.&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Activate&lt;/strong&gt; the script.&lt;/li&gt;&lt;/ol&gt;&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Note:&lt;/strong&gt; Scripts are run automatically when viewed, even if they are deactivated.&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Note:&lt;/strong&gt; Events can also be added to a script from the command line in the main profile window like this:&lt;/p&gt;&lt;p&gt;&lt;code&gt;lua registerAnonymousEventHandler(&amp;quot;nameOfTheMudletEvent&amp;quot;, &amp;quot;nameOfYourFunctionToBeCalled&amp;quot;)&lt;/code&gt;&lt;/p&gt;&lt;p&gt;Check the manual for &lt;a href=&apos;http://wiki.mudlet.org/w/Manual:Contents&apos;&gt;more information&lt;/a&gt;.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="135"/>
      <source>&lt;p&gt;Timers react after a timespan once or regularly. To add a new timer:&lt;ol&gt;&lt;li&gt;Click on the &apos;Add Item&apos; icon above.&lt;/li&gt;&lt;li&gt;Define the &lt;strong&gt;timespan&lt;/strong&gt; after which the timer should react in a this format: hours : minutes : seconds.&lt;/li&gt;&lt;li&gt;Define a clear text &lt;strong&gt;command&lt;/strong&gt; that you want to send to the game when the time has passed, or write a script for more complicated needs.&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Activate&lt;/strong&gt; the timer.&lt;/li&gt;&lt;/ol&gt;&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Note:&lt;/strong&gt; If you want the trigger to react only once and not regularly, use the Lua tempTimer() function instead.&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Note:&lt;/strong&gt; Timers can also be defined from the command line in the main profile window like this:&lt;/p&gt;&lt;p&gt;&lt;code&gt;lua tempTimer(3, function() echo(&amp;quot;hello!
&amp;quot;) end)&lt;/code&gt;&lt;/p&gt;&lt;p&gt;This will greet you exactly 3 seconds after it was made.&lt;/p&gt;&lt;p&gt;Check the manual for &lt;a href=&apos;http://wiki.mudlet.org/w/Manual:Contents&apos;&gt;more information&lt;/a&gt;.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="146"/>
      <source>&lt;p&gt;Buttons react on mouse clicks. To add a new button:&lt;ol&gt;&lt;li&gt;Add a new group to define a new &lt;strong&gt;button bar&lt;/strong&gt; in case you don&apos;t have any.&lt;/li&gt;&lt;li&gt;Add new groups as &lt;strong&gt;menus&lt;/strong&gt; to a button bar or sub-menus to menus.&lt;li&gt;&lt;li&gt;Add new items as &lt;strong&gt;buttons&lt;/strong&gt; to a button bar or menu or sub-menu.&lt;/li&gt;&lt;li&gt;Define a clear text &lt;strong&gt;command&lt;/strong&gt; that you want to send to the game if the button is pressed, or write a script for more complicated needs.&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Activate&lt;/strong&gt; the toolbar, menu or button. &lt;/li&gt;&lt;/ol&gt;&lt;p&gt;&lt;strong&gt;Note:&lt;/strong&gt; Deactivated items will be hidden and if they are toolbars or menus then all the items they contain will be also be hidden.&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Note:&lt;/strong&gt; If a button is made a &lt;strong&gt;click-down&lt;/strong&gt; button then you may also define a clear text command that you want to send to the game when the button is pressed a second time to uncheck it or to write a script to run when it happens - within such a script the Lua &apos;getButtonState()&apos; function reports whether the button is up or down.&lt;/p&gt;&lt;p&gt;Check the manual for &lt;a href=&apos;http://wiki.mudlet.org/w/Manual:Contents&apos;&gt;more information&lt;/a&gt;.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="156"/>
      <source>&lt;p&gt;Keys react on keyboard presses. To add a new key binding:&lt;ol&gt;&lt;li&gt;Click on the &apos;Add Item&apos; icon above.&lt;/li&gt;&lt;li&gt;Click on &lt;strong&gt;&apos;grab key&apos;&lt;/strong&gt; and then press your key combination, e.g. including modifier keys like Control, Shift, etc.&lt;/li&gt;&lt;li&gt;Define a clear text &lt;strong&gt;command&lt;/strong&gt; that you want to send to the game if the button is pressed, or write a script for more complicated needs.&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Activate&lt;/strong&gt; the new key binding.&lt;/li&gt;&lt;/ol&gt;&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Note:&lt;/strong&gt; Keys can also be defined from the command line in the main profile window like this:&lt;/p&gt;&lt;p&gt;&lt;code&gt;lua permKey(&amp;quot;my jump key&amp;quot;, &amp;quot;&amp;quot;, mudlet.key.F8, [[send(&amp;quot;jump&amp;quot;]]) end)&lt;/code&gt;&lt;/p&gt;&lt;p&gt;Pressing F8 will make you jump.&lt;/p&gt;&lt;p&gt;Check the manual for &lt;a href=&apos;http://wiki.mudlet.org/w/Manual:Contents&apos;&gt;more information&lt;/a&gt;.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="166"/>
      <source>&lt;p&gt;Variables store information. To make a new variable:&lt;ol&gt;&lt;li&gt;Click on the &apos;Add Item&apos; icon above. To add a table instead click &apos;Add Group&apos;.&lt;/li&gt;&lt;li&gt;Select type of variable value (can be a string, integer, boolean)&lt;/li&gt;&lt;li&gt;Enter the value you want to store in this variable.&lt;/li&gt;&lt;li&gt;If you want to keep the variable in your next Mudlet sessions, check the checkbox in the list of variables to the left.&lt;/li&gt;&lt;li&gt;To remove a variable manually, set it to &apos;nil&apos; or click on the &apos;Delete&apos; icon above.&lt;/li&gt;&lt;/ol&gt;&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Note:&lt;/strong&gt; Variables created here won&apos;t be saved when Mudlet shuts down unless you check their checkbox in the list of variables to the left. You could also create scripts with the variables instead.&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Note:&lt;/strong&gt; Variables and tables can also be defined from the command line in the main profile window like this:&lt;/p&gt;&lt;p&gt;&lt;code&gt;lua foo = &amp;quot;bar&amp;quot;&lt;/code&gt;&lt;/p&gt;&lt;p&gt;This will create a string called &apos;foo&apos; with &apos;bar&apos; as its value.&lt;/p&gt;&lt;p&gt;Check the manual for &lt;a href=&apos;http://wiki.mudlet.org/w/Manual:Contents&apos;&gt;more information&lt;/a&gt;.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="241"/>
      <source>-- add your Lua code here</source>
      <translation>-- aggiungi qui il tuo codice Lua</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="543"/>
      <source>Errors</source>
      <translation>Errori</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="682"/>
      <source>Match case precisely</source>
      <translation>Maiuscole/minuscole</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="686"/>
      <source>Include variables</source>
      <translation>Includi variabili</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="689"/>
      <source>Search variables (slower)</source>
      <translation>Cerca variabili (lento)</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="781"/>
      <source>perl regex</source>
      <translation>perl regex</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="783"/>
      <source>exact match</source>
      <translation>corrispondenza esatta</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="784"/>
      <source>lua function</source>
      <translation>funzione lua</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="785"/>
      <source>line spacer</source>
      <translation>spaziatore linea</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="786"/>
      <source>color trigger</source>
      <translation>trigger di colore</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="787"/>
      <source>prompt</source>
      <translation>prompt</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1914"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1926"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1954"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1986"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2016"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2028"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2055"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2090"/>
      <source>Trigger</source>
      <translation>Trigger</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1434"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1477"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1549"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1621"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1743"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1827"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1914"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2016"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2122"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2211"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2297"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2421"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2495"/>
      <source>Name</source>
      <translation>Nome</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1489"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1494"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1561"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1566"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1633"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1638"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1837"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1842"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1926"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1931"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2028"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2033"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2132"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2137"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2309"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2314"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2433"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2438"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2507"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2512"/>
      <source>Command</source>
      <translation>Comando</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1954"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1959"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2055"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2060"/>
      <source>Pattern {%1}</source>
      <translation>Pattern {%1}</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1519"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1524"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1591"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1596"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1713"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1718"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1797"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1802"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1884"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1889"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1986"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1991"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2090"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2095"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2179"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2184"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2265"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2270"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2389"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2394"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2463"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2468"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2537"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2542"/>
      <source>Lua code (%1:%2)</source>
      <translation>Codice Lua (%1:%2)</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1827"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1837"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1854"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1884"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2122"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2132"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2149"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2179"/>
      <source>Alias</source>
      <translation>Alias</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1854"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1859"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2149"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2154"/>
      <source>Pattern</source>
      <translation>Pattern</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1743"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1765"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1797"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2211"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2233"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2265"/>
      <source>Script</source>
      <translation>Script</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1765"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1770"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2233"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2238"/>
      <source>Event Handler</source>
      <translation>Gestore eventi</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1621"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1633"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1652"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1713"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2297"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2309"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2328"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2389"/>
      <source>Button</source>
      <translation>Bottoni</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1633"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1638"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2309"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2314"/>
      <source>Command {Down}</source>
      <translation>Comando {Basso}</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1652"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1657"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2328"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2333"/>
      <source>Command {Up}</source>
      <translation>Comando {Su}</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1681"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2357"/>
      <source>Action</source>
      <translation>Azione</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1681"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1686"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2357"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2362"/>
      <source>Stylesheet {L: %1 C: %2}</source>
      <translation>Foglio di stile {L: %1 C: %2}</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1549"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1561"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1591"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2421"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2433"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2463"/>
      <source>Timer</source>
      <translation>Timer</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1477"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1489"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1519"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2495"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2507"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2537"/>
      <source>Key</source>
      <translation>Chiave</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1434"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1448"/>
      <source>Variable</source>
      <translation>Variabile</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1448"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1454"/>
      <source>Value</source>
      <translation>Valore</translation>
    </message>
  </context>
  <context>
    <name>dlgTriggerPatternEdit</name>
    <message>
      <location filename="../src/dlgTriggerPatternEdit.cpp" line="52"/>
      <source>Text to find (anywhere in the game output)</source>
      <translation>Testo da cercare (in qualsiasi punto del testo)</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerPatternEdit.cpp" line="55"/>
      <source>Text to find (as a regular expression pattern)</source>
      <translation>Testo da cercare (come espressione regolare)</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerPatternEdit.cpp" line="58"/>
      <source>Text to find (from beginning of the line)</source>
      <translation>Testo da cercare (dall'inizio della riga)</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerPatternEdit.cpp" line="61"/>
      <source>Exact line to match</source>
      <translation>Riga esatta da verificare</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerPatternEdit.cpp" line="64"/>
      <source>Lua code to run (return true to match)</source>
      <translation>Codice Lua da eseguire (restituire true in caso di corrispondenza)</translation>
    </message>
  </context>
  <context>
    <name>dlgVarsMainArea</name>
    <message>
      <location filename="../src/dlgVarsMainArea.cpp" line="51"/>
      <location filename="../src/dlgVarsMainArea.cpp" line="78"/>
      <source>Auto-Type</source>
      <translation>Tipo automatico</translation>
    </message>
    <message>
      <location filename="../src/dlgVarsMainArea.cpp" line="52"/>
      <source>key (string)</source>
      <translation>chiave (stringa)</translation>
    </message>
    <message>
      <location filename="../src/dlgVarsMainArea.cpp" line="53"/>
      <source>index (integer number)</source>
      <translation>indice (numero intero)</translation>
    </message>
    <message>
      <location filename="../src/dlgVarsMainArea.cpp" line="54"/>
      <source>table (use &quot;Add Group&quot; to create)</source>
      <translation>tabella (utilizzare &quot;Aggiungi Gruppo&quot; per creare)</translation>
    </message>
    <message>
      <location filename="../src/dlgVarsMainArea.cpp" line="55"/>
      <source>function (cannot create from GUI)</source>
      <translation>funzione
(impossibile creare
dalla GUI)</translation>
    </message>
    <message>
      <location filename="../src/dlgVarsMainArea.cpp" line="79"/>
      <source>string</source>
      <translation>stringa</translation>
    </message>
    <message>
      <location filename="../src/dlgVarsMainArea.cpp" line="80"/>
      <source>number</source>
      <translation>numero</translation>
    </message>
    <message>
      <location filename="../src/dlgVarsMainArea.cpp" line="81"/>
      <source>boolean</source>
      <translation>booleano</translation>
    </message>
    <message>
      <location filename="../src/dlgVarsMainArea.cpp" line="82"/>
      <source>table</source>
      <translation>tabella</translation>
    </message>
    <message>
      <location filename="../src/dlgVarsMainArea.cpp" line="83"/>
      <source>function</source>
      <translation>funzione</translation>
    </message>
  </context>
  <context>
    <name>edbee::TextEditorComponent</name>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/views/components/texteditorcomponent.cpp" line="578"/>
      <source>Cut</source>
      <translation>Taglia</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/views/components/texteditorcomponent.cpp" line="579"/>
      <source>Copy</source>
      <translation>Copia</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/views/components/texteditorcomponent.cpp" line="580"/>
      <source>Paste</source>
      <translation>Incolla</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/views/components/texteditorcomponent.cpp" line="582"/>
      <source>Select All</source>
      <translation>Seleziona Tutto</translation>
    </message>
  </context>
  <context>
    <name>irc</name>
    <message>
      <location filename="../src/ui/irc.ui" line="25"/>
      <source>Mudlet IRC Client</source>
      <translation>Mudlet Client IRC</translation>
    </message>
  </context>
  <context>
    <name>keybindings_main_area</name>
    <message>
      <location filename="../src/ui/keybindings_main_area.ui" line="23"/>
      <source>Name:</source>
      <translation>Nome:</translation>
    </message>
    <message>
      <location filename="../src/ui/keybindings_main_area.ui" line="33"/>
      <source>&lt;p&gt;Choose a good, ideally unique, name for your key or key group. This will be displayed in the key tree.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Scegli un nome chiaro, idealmente univoco, per il tasto o il gruppo di tasti. Sarà utilizzato nella vista ad albero dei tasti.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/keybindings_main_area.ui" line="40"/>
      <source>Command:</source>
      <translation>Comando:</translation>
    </message>
    <message>
      <location filename="../src/ui/keybindings_main_area.ui" line="50"/>
      <source>&lt;p&gt;Type in one or more commands you want the key to send directly to the game when pressed. (Optional)&lt;/p&gt;&lt;p&gt;To send more complex commands, that could depend on or need to modifies variables within this profile a Lua script should be entered &lt;i&gt;instead&lt;/i&gt; in the editor area below.  Anything entered here is, literally, just sent to the game server.&lt;/p&gt;&lt;p&gt;It is permissable to use both this &lt;i&gt;and&lt;/i&gt; a Lua script - this will be sent &lt;b&gt;before&lt;/b&gt; the script is run.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/keybindings_main_area.ui" line="53"/>
      <source>Text to send to the game as-is (optional)</source>
      <translation>Testo da inviare direttamente al gioco (opzionale)</translation>
    </message>
    <message>
      <location filename="../src/ui/keybindings_main_area.ui" line="60"/>
      <source>Key Binding:</source>
      <translation>Combinazione Tasti:</translation>
    </message>
    <message>
      <location filename="../src/ui/keybindings_main_area.ui" line="77"/>
      <source>Grab New Key</source>
      <translation>Cattura un nuovo tasto</translation>
    </message>
  </context>
  <context>
    <name>lacking_mapper_script</name>
    <message>
      <location filename="../src/ui/lacking_mapper_script.ui" line="23"/>
      <source>No mapping script found</source>
      <translation>Nessun script di mapping trovato</translation>
    </message>
    <message>
      <location filename="../src/ui/lacking_mapper_script.ui" line="35"/>
      <source>&lt;p&gt;It seems that you don&apos;t have any &lt;a href=&quot;http://wiki.mudlet.org/w/Mapping_script&quot;&gt;mapping scripts&lt;/a&gt; installed yet - the mapper needs you to have one for your game, so it can track where you are and autowalk you. You can either make one yourself, or import an existing one that someone else made.&lt;/p&gt;&lt;p&gt;Would you like to see if any are available?&lt;/p&gt;</source>
      <translation>&lt;p&gt;Sembra che tu non abbia script del &lt;a href=&quot;http://wiki.mudlet.org/w/Mapping_script&quot;&gt;mapper&lt;/a&gt; installati - il mapper ha bisogno di avere script specifici per ogni gioco in modo da poter tenere traccia della stanza corrente. Puoi farne uno tu stesso o importarne uno esistente che qualcun altro ha fatto.&lt;/p&gt;&lt;p&gt;Vuoi visitare il sito internet e verificare se ce ne sono disponibili?&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/lacking_mapper_script.ui" line="86"/>
      <source>Close</source>
      <translation>Chiudi</translation>
    </message>
    <message>
      <location filename="../src/ui/lacking_mapper_script.ui" line="93"/>
      <source>Find some scripts</source>
      <translation>Trova script</translation>
    </message>
  </context>
  <context>
    <name>main</name>
    <message>
      <location filename="../src/main.cpp" line="169"/>
      <source>Profile to open automatically</source>
      <translation>Profilo da aprire automaticamente</translation>
    </message>
    <message>
      <location filename="../src/main.cpp" line="169"/>
      <source>profile</source>
      <translation>profilo</translation>
    </message>
    <message>
      <location filename="../src/main.cpp" line="172"/>
      <location filename="../src/main.cpp" line="178"/>
      <source>Display help and exit</source>
      <translation>Mostra aiuto e esci</translation>
    </message>
    <message>
      <location filename="../src/main.cpp" line="175"/>
      <source>Display version and exit</source>
      <translation>Mostra versione e esci</translation>
    </message>
    <message>
      <location filename="../src/main.cpp" line="188"/>
      <source>Usage: %1 [OPTION...]
       -h, --help           displays this message.
       -v, --version        displays version information.
       -q, --quiet          no splash screen on startup.
       --profile=&lt;profile&gt;  additional profile to open

There are other inherited options that arise from the Qt Libraries which are
less likely to be useful for normal use of this application:
</source>
      <translation>Sintassi: %1 [OPTION...]
       -h, --help visualizza questo messaggio.
       -v, --version visualizza le informazioni sulla versione.
       -q, --quiet nessun splash screen all'avvio.
       --profile=&lt;profile&gt;  profilo addizionale da aprire

Ci sono altre opzioni che derivano dalle librerie Qt che sono
meno utili per un uso normale di questa applicazione:
</translation>
    </message>
    <message>
      <location filename="../src/main.cpp" line="245"/>
      <source>%1 %2%3 (with debug symbols, without optimisations)
</source>
      <comment>%1 is the name of the application like mudlet or Mudlet.exe, %2 is the version number like 3.20 and %3 is a build suffix like -dev</comment>
      <translation>%1 %2%3 (simboli di debug attivi, nessuna ottimizzazione)
</translation>
    </message>
    <message>
      <location filename="../src/main.cpp" line="251"/>
      <source>Qt libraries %1 (compilation) %2 (runtime)
</source>
      <comment>%1 and %2 are version numbers</comment>
      <translation>Librerie Qt %1 (compilazione) %2 (runtime)
</translation>
    </message>
    <message>
      <location filename="../src/main.cpp" line="255"/>
      <source>Licence GPLv2+: GNU GPL version 2 or later - http://gnu.org/licenses/gpl.html
</source>
      <translation>Licenza GPLv2+: GNU GPL versione 2 o successiva http://gnu.org/licenses/gpl.html
</translation>
    </message>
    <message>
      <location filename="../src/main.cpp" line="256"/>
      <source>This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.
</source>
      <translation>Questo è software gratuito: sei libero di modificarlo e ridistribuirlo.
Non è prevista NESSUNA GARANZIA, nella misura consentita dalla legge.
</translation>
    </message>
    <message>
      <location filename="../src/main.cpp" line="236"/>
      <source>Report bugs to: https://github.com/Mudlet/Mudlet/issues
</source>
      <translation>Segnala gli errori a: https://github.com/Mudlet/Mudlet/issues
</translation>
    </message>
    <message>
      <location filename="../src/main.cpp" line="237"/>
      <source>Project home page: http://www.mudlet.org/
</source>
      <translation>Homepage progetto: https://www.mudlet.org/
</translation>
    </message>
    <message>
      <location filename="../src/main.cpp" line="254"/>
      <source>Copyright © 2008-2021  Mudlet developers
</source>
      <translation>Copyright © 2008-2021  Mudlet developers
</translation>
    </message>
    <message>
      <location filename="../src/main.cpp" line="280"/>
      <source>Version: %1</source>
      <translation>Versione: %1</translation>
    </message>
  </context>
  <context>
    <name>main_window</name>
    <message>
      <location filename="../src/ui/main_window.ui" line="95"/>
      <source>Toolbox</source>
      <translation>Strumenti</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="109"/>
      <source>Options</source>
      <translation>Opzioni</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="116"/>
      <source>Help</source>
      <translation>Aiuto</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="126"/>
      <source>About</source>
      <translation>Altro</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="134"/>
      <source>Games</source>
      <translation>Giochi</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="149"/>
      <source>Play</source>
      <translation>Connetti</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="152"/>
      <source>&lt;p&gt;Configure connection details of, and make a connection to, game servers.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Configura i dettagli di connessione e avvia una connessione ai server di gioco.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="160"/>
      <source>&lt;p&gt;Disconnect from the current game server.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Disconnetti dal server di gioco.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="168"/>
      <source>&lt;p&gt;Disconnect and then reconnect to the current game server.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Disconnetti e poi ricollega al server di gioco corrente.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="176"/>
      <source>&lt;p&gt;Configure setting for the Mudlet application globally and for the current profile.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Configura le impostazioni globali per Mudlet e per il profilo corrente.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="184"/>
      <source>&lt;p&gt;Opens the Editor for the different types of things that can be scripted by the user.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Apre l'Editor per i diversi tipi di cose che può essere programmato dall'utente.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="213"/>
      <source>IRC</source>
      <translation>IRC</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="216"/>
      <location filename="../src/ui/main_window.ui" line="253"/>
      <source>&lt;p&gt;Opens a built-in IRC chat on the #mudlet channel on Freenode IRC servers.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Apri la chat IRC integrata sul canale #mudlet sui server IRC di Freenode.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="224"/>
      <source>&lt;p&gt;Opens an (on-line) collection of &quot;Educational Mudlet screencasts&quot; in your system web-browser.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Apri una raccolta (on-line) di &quot;video educativi su Mudlet&quot; nel browser web del sistema.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="232"/>
      <source>&lt;p&gt;Load a previous saved game session that can be used to test Mudlet lua systems (off-line!).&lt;/p&gt;</source>
      <translation>&lt;p&gt;Carica una precedente sessione di gioco salvata che puoi utilizzare per testare i tuoi script Lua (off-line!).&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="240"/>
      <source>&lt;p&gt;Opens the (on-line) Mudlet Forum in your system web-browser.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Apre il forum (online) di Mudlet nel browser web.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="261"/>
      <source>&lt;p&gt;Show or hide the game map.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Mostra o nascondi la mappa del gioco.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="269"/>
      <source>&lt;p&gt;Install and remove collections of Mudlet lua items (packages).&lt;/p&gt;</source>
      <translation>&lt;p&gt;Installa o rimuove le raccolte di elementi lua di Mudlet (package).&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="277"/>
      <source>&lt;p&gt;Install and remove (share- &amp; sync-able) collections of Mudlet lua items (modules).&lt;/p&gt;</source>
      <translation>&lt;p&gt;Installa o rimuove le raccolte (condivise o sincronizzate) di elementi lua di Mudlet (moduli).&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="285"/>
      <source>&lt;p&gt;Gather and bundle up collections of Mudlet Lua items and other reasources into a module.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Raccoglie e raggruppa le raccolte di elementi Lua di Mudlet e altre risorse in un modulo.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="316"/>
      <source>&lt;p&gt;Hide / show the search area and buttons at the bottom of the screen.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Nascondi / mostra l'area di ricerca e i bottoni nella parte inferiore dello schermo.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="321"/>
      <source>Discord help channel</source>
      <translation>Canale di aiuto Discord</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="326"/>
      <location filename="../src/ui/main_window.ui" line="329"/>
      <source>Report an issue</source>
      <translation>Segnala un problema</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="332"/>
      <source>The public test build gets newer features to you quicker, and you help us find issues in them quicker. Spotted something odd? Let us know asap!</source>
      <translation>La versione pubblica di test ti permette di avere velocemente le funzioni più recenti e ci aiuti a trovare eventuali problemi. Hai notato qualcosa di strano? Facci sapere al più presto!</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="157"/>
      <source>Disconnect</source>
      <translation>Disconnetti</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="165"/>
      <source>Reconnect</source>
      <translation>Riconnetti</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="173"/>
      <source>Preferences</source>
      <translation>Impostazioni</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="181"/>
      <source>Script editor</source>
      <translation>Editor di script</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="189"/>
      <source>Notepad</source>
      <translation>Note</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="197"/>
      <source>API Reference</source>
      <translation>Riferimenti API</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="237"/>
      <source>Online forum</source>
      <translation>Forum online</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="205"/>
      <source>About Mudlet</source>
      <translation>Informazioni su Mudlet</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="192"/>
      <source>&lt;p&gt;Opens a free form text editor window for this profile that is saved between sessions.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Apre una finestra di testo personalizzabile per questo profilo che viene salvato tra le sessioni.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="200"/>
      <source>&lt;p&gt;Opens the Mudlet manual in your web browser.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Apri il manuale di Mudlet nel browser web.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="208"/>
      <source>&lt;p&gt;Inform yourself about this version of Mudlet, the people who made it and the licence under which you can share it.&lt;/p&gt;</source>
      <comment>Tooltip for About Mudlet sub-menu item and main toolbar button (or menu item if an update has changed that control to have a popup menu instead) (Used in 3 places - please ensure all have the same translation).</comment>
      <translation>&lt;p&gt;Informati su questa versione di Mudlet, le persone che l'hanno creato e la licenza con cui puoi condividerlo.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="221"/>
      <source>Video tutorials</source>
      <translation>Tutorial video</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="229"/>
      <source>Load replay</source>
      <translation>Carica replay</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="245"/>
      <source>Check for updates...</source>
      <translation>Verifica aggiornamenti...</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="250"/>
      <source>Live help chat</source>
      <translation>Chat di aiuto</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="258"/>
      <source>Show map</source>
      <translation>Mostra mappa</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="266"/>
      <source>Package manager</source>
      <translation>Gestione package</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="274"/>
      <source>Module manager</source>
      <translation>Gestione moduli</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="282"/>
      <source>Package exporter (experimental)</source>
      <translation>Esportatore package (sperimentale)</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="299"/>
      <source>MultiView</source>
      <translation>Vista multipla</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="302"/>
      <source>&lt;p&gt;Splits the Mudlet screen to show multiple profiles at once; disabled when less than two are loaded.&lt;/p&gt;</source>
      <comment>Same text is used in 2 places.</comment>
      <translation>&lt;p&gt;Divide lo schermo Mudlet per mostrare più profili contemporaneamente; disabilitato quando non ne caricati almeno due.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="307"/>
      <source>Compact input line</source>
      <translation>Compatta linea dei comandi</translation>
    </message>
  </context>
  <context>
    <name>mapper</name>
    <message>
      <location filename="../src/ui/mapper.ui" line="60"/>
      <source>^</source>
      <translation>^</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="452"/>
      <source>Area:</source>
      <translation>Area:</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="521"/>
      <source>Rooms</source>
      <translation>Stanze</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="550"/>
      <source>Exits</source>
      <translation>Uscite</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="579"/>
      <source>Round</source>
      <translation>Arrotonda</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="586"/>
      <source>Info</source>
      <translation>Info</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="602"/>
      <source>IDs</source>
      <translation>IDs</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="618"/>
      <source>Names</source>
      <translation>Nomi</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="771"/>
      <source>top + 1</source>
      <translation>superiore + 1</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="745"/>
      <source>bottom + 1</source>
      <translation>inferiore + 1</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="758"/>
      <source>bottom -1</source>
      <translation>inferiore -1</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="784"/>
      <source>top - 1</source>
      <translation>superiore - 1</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="732"/>
      <source>1 level</source>
      <translation>Livello 1</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="427"/>
      <source>3D</source>
      <translation>3D</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="680"/>
      <source>default</source>
      <translation>predefinito</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="693"/>
      <source>top view</source>
      <translation>vista dall'alto</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="706"/>
      <source>side view</source>
      <translation>vista laterale</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="719"/>
      <source>all levels</source>
      <translation>tutti i livelli</translation>
    </message>
  </context>
  <context>
    <name>module_manager</name>
    <message>
      <location filename="../src/ui/module_manager.ui" line="79"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Modules are a way to utilize a common package across many sessions - unlike packages, which are installed per-profile.&lt;/p&gt;
&lt;p&gt;Modules are loaded in ascending priority (1 will get loaded before 2 and so on), modules with the same priority will be loaded in alphabetical order.&lt;/p&gt;
&lt;p&gt;Modules with negative priority will be loaded before script packages.&lt;/p&gt;
&lt;p&gt;The &lt;b&gt;&lt;i&gt;Sync&lt;/i&gt;&lt;/b&gt; option, if it is enabled, will, when the module in &lt;b&gt;this profile&lt;/b&gt; is saved &lt;b&gt;to disk&lt;/b&gt;, cause it to be then reloaded into all profiles which also are using the same file that contains the module. To make several profiles use the same module, install it in each profile through this module manager (which should be opened when the particular profile is the one currently in the foreground).&lt;/p&gt;&lt;p&gt;
&lt;i&gt;Note: &lt;b&gt;.zip&lt;/b&gt; and &lt;b&gt;.mpackage&lt;/b&gt; modules are currently unable to be synced, only &lt;b&gt;.xml&lt;/b&gt; packages are able to be synchronized across profiles at the moment.&lt;/i&gt;&lt;/p&gt;
&lt;p&gt;For each save operation, modules are backed up to a directory, &lt;i&gt;moduleBackups&lt;/i&gt;, within your Mudlet profile directory.&lt;/p&gt;
&lt;/body&gt;&lt;/html&gt;</source>
      <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;I Moduli sono un modo di utilizzare dei package condividendoli fra differenti profili di gioco - a differenza dei package normali che sono installati per un singolo profilo.&lt;/p&gt;
&lt;p&gt;I Moduli sono caricati in ordine di priorità (il numero 1 sarà caricato prima del 2 e via di seguito), moduli con la medesima priorità saranno caricati in ordine alfabetico.&lt;/p&gt;
&lt;p&gt;I Moduli con priorità negativa saranno caricati prima degli script dei package.&lt;/p&gt;
&lt;p&gt;L'opzione &lt;b&gt;&lt;i&gt;Sincronizza&lt;/i&gt;&lt;/b&gt; se abilitata, ricarica automaticamente il modulo in tutti i profili quando viene salvato &lt;b&gt;su disco&lt;/b&gt; nel &lt;b&gt;profilo&lt;/b&gt; corrente. Per consentire a più profili di utilizzare lo stesso modulo è sufficiente installarlo in ognuno di questi utilizzando il gestore dei moduli (da aprire quando il profilo desiderato è in primo piano).&lt;/p&gt;&lt;p&gt;
&lt;i&gt;Nota: moduli con estensione &lt;b&gt;.zip&lt;/b&gt; o &lt;b&gt;.mpackage&lt;/b&gt; non possono essere sincronizzati. La sincronizzazione funziona attualmente solo con package con estensione &lt;b&gt;.xml&lt;/b&gt;.&lt;/i&gt;&lt;/p&gt;
&lt;p&gt;Ad ogni operazione di salvataggio viene fatto un backup nella cartella, &lt;i&gt;moduleBackups&lt;/i&gt;, all'interno della cartella del profilo di Mudlet.&lt;/p&gt;
&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/module_manager.ui" line="129"/>
      <source>Uninstall</source>
      <translation>Disinstalla</translation>
    </message>
    <message>
      <location filename="../src/ui/module_manager.ui" line="142"/>
      <source>Install</source>
      <translation>Installa</translation>
    </message>
    <message>
      <location filename="../src/ui/module_manager.ui" line="149"/>
      <source>Module Help</source>
      <translation>Guida ai Moduli</translation>
    </message>
  </context>
  <context>
    <name>mudlet</name>
    <message>
      <location filename="../src/mudlet.cpp" line="718"/>
      <source>Afrikaans</source>
      <extracomment>In the translation source texts the language is the leading term, with, generally, the (primary) country(ies) in the brackets, with a trailing language disabiguation after a &apos;-&apos; Chinese is an exception!</extracomment>
      <translation>Africano</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="719"/>
      <source>Afrikaans (South Africa)</source>
      <translation>Africano (Sudafrica)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="720"/>
      <source>Aragonese</source>
      <translation>Aragonese</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="721"/>
      <source>Aragonese (Spain)</source>
      <translation>Aragonese (Spagna)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="722"/>
      <source>Arabic</source>
      <translation>Arabo</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="723"/>
      <source>Arabic (United Arab Emirates)</source>
      <translation>Arabo (Emirati Arabi Uniti)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="724"/>
      <source>Arabic (Bahrain)</source>
      <translation>Arabo (Bahrain)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="725"/>
      <source>Arabic (Algeria)</source>
      <translation>Arabo (Algeria)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="727"/>
      <source>Arabic (India)</source>
      <translation>Arabo (india)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="728"/>
      <source>Arabic (Iraq)</source>
      <translation>Arabo (Iraq)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="729"/>
      <source>Arabic (Jordan)</source>
      <translation>Arabo (Giordania)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="730"/>
      <source>Arabic (Kuwait)</source>
      <translation>Arabo (Kuwait)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="731"/>
      <source>Arabic (Lebanon)</source>
      <translation>Arabo (Libano)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="732"/>
      <source>Arabic (Libya)</source>
      <translation>Arabo (Libia)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="733"/>
      <source>Arabic (Morocco)</source>
      <translation>Arabo (Marocco)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="734"/>
      <source>Arabic (Oman)</source>
      <translation>Arabo (Oman)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="735"/>
      <source>Arabic (Qatar)</source>
      <translation>Arabo (Qatar)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="736"/>
      <source>Arabic (Saudi Arabia)</source>
      <translation>Arabo (Arabia Saudita)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="737"/>
      <source>Arabic (Sudan)</source>
      <translation>Arabo (Sudan)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="738"/>
      <source>Arabic (Syria)</source>
      <translation>Arabo (Siria)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="739"/>
      <source>Arabic (Tunisia)</source>
      <translation>Arabo (Tunisia)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="740"/>
      <source>Arabic (Yemen)</source>
      <translation>Arabo (Yemen)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="741"/>
      <source>Belarusian</source>
      <translation>Bielorusso</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="742"/>
      <source>Belarusian (Belarus)</source>
      <translation>Bielorusso (Bielorussia)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="743"/>
      <source>Belarusian (Russia)</source>
      <translation>Bielorusso (Russia)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="744"/>
      <source>Bulgarian</source>
      <translation>Bulgaro (Bulgarian)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="745"/>
      <source>Bulgarian (Bulgaria)</source>
      <translation>Bulgaro (Bulgarian)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="746"/>
      <source>Bangla</source>
      <translation>Bengalese</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="747"/>
      <source>Bangla (Bangladesh)</source>
      <translation>Bengalese (Bangladesh)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="748"/>
      <source>Bangla (India)</source>
      <translation>Bengalese (India)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="749"/>
      <source>Tibetan</source>
      <translation>Tibetano</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="750"/>
      <source>Tibetan (China)</source>
      <translation>Tibetano (Cina)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="751"/>
      <source>Tibetan (India)</source>
      <translation>Tibetano (India)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="752"/>
      <source>Breton</source>
      <translation>Bretone</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="753"/>
      <source>Breton (France)</source>
      <translation>Bretone (Francia)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="754"/>
      <source>Bosnian</source>
      <translation>Bosniaco</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="755"/>
      <source>Bosnian (Bosnia/Herzegovina)</source>
      <translation>Bosniaco (Bosnia/Erzegovina)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="756"/>
      <source>Bosnian (Bosnia/Herzegovina - Cyrillic alphabet)</source>
      <translation>Bosniaco (Bosnia / Erzegovina - Alfabeto cirillico)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="757"/>
      <source>Catalan</source>
      <translation>Catalano</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="758"/>
      <source>Catalan (Spain)</source>
      <translation>Catalano (Spagna)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="759"/>
      <source>Catalan (Spain - Valencian)</source>
      <translation>Catalano (Spagna - Valenciano)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="760"/>
      <source>Central Kurdish</source>
      <translation>Curdo centrale</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="761"/>
      <source>Central Kurdish (Iraq)</source>
      <translation>Curdo centrale (Iraq)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="762"/>
      <source>Czech</source>
      <translation>Ceco</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="763"/>
      <source>Czech (Czechia)</source>
      <translation>Ceco (Repubblica Ceca)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="764"/>
      <source>Danish</source>
      <translation>Danese</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="765"/>
      <source>Danish (Denmark)</source>
      <translation>Danese (Danimarca)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="766"/>
      <source>German</source>
      <translation>Tedesco</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="767"/>
      <source>German (Austria)</source>
      <translation>Tedesco (Austria)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="768"/>
      <source>German (Austria, revised by F M Baumann)</source>
      <translation>Tedesco (Austria, revisionato da F M Baumann)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="769"/>
      <source>German (Belgium)</source>
      <translation>Tedesco (Belgio)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="770"/>
      <source>German (Switzerland)</source>
      <translation>Tedesco (Svizzera)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="771"/>
      <source>German (Switzerland, revised by F M Baumann)</source>
      <translation>Tedesco (Svizzera, revisionato da F M Baumann)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="772"/>
      <source>German (Germany/Belgium/Luxemburg)</source>
      <translation>Tedesco (Germania/Belgio/Lussemburgo)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="773"/>
      <source>German (Germany/Belgium/Luxemburg, revised by F M Baumann)</source>
      <translation>Tedesco (Germania/Belgio/Lussemburgo, revisionato da F M Baumann)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="774"/>
      <source>German (Liechtenstein)</source>
      <translation>Tedesco (Liechtenstein)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="775"/>
      <source>German (Luxembourg)</source>
      <translation>Tedesco (Lussemburgo)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="776"/>
      <source>Greek</source>
      <translation>Greco</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="777"/>
      <source>Greek (Greece)</source>
      <translation>Greco (Grecia)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="778"/>
      <source>English</source>
      <translation>Inglese</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="779"/>
      <source>English (Antigua/Barbuda)</source>
      <translation>Inglese (Antigua/Barbuda)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="780"/>
      <source>English (Australia)</source>
      <translation>Inglese (Australia)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="782"/>
      <source>English (Bahamas)</source>
      <translation>Inglese (Bahamas)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="783"/>
      <source>English (Botswana)</source>
      <translation>Inglese (Botswana)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="784"/>
      <source>English (Belize)</source>
      <translation>Inglese (Belize)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="726"/>
      <source>Arabic (Egypt)</source>
      <translation>Arabo (Egitto)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="480"/>
      <source>&lt;p&gt;Splits the Mudlet screen to show multiple profiles at once; disabled when less than two are loaded.&lt;/p&gt;</source>
      <comment>Same text is used in 2 places.</comment>
      <translation>&lt;p&gt;Divide lo schermo Mudlet per mostrare più profili contemporaneamente; disabilitato quando non ne caricati almeno due.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="492"/>
      <source>Report issue</source>
      <translation>Segnala un problema</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="781"/>
      <source>English (Australia, Large)</source>
      <comment>This dictionary contains larger vocabulary.</comment>
      <translation>Inglese (Australia, Grande)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="785"/>
      <source>English (Canada)</source>
      <translation>Inglese (Canada)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="786"/>
      <source>English (Canada, Large)</source>
      <comment>This dictionary contains larger vocabulary.</comment>
      <translation>Inglese (Canada, Grande)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="787"/>
      <source>English (Denmark)</source>
      <translation>Inglese (Danimarca)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="788"/>
      <source>English (United Kingdom)</source>
      <translation>Inglese (Regno Unito)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="789"/>
      <source>English (United Kingdom, Large)</source>
      <comment>This dictionary contains larger vocabulary.</comment>
      <translation>Inglese (Regno Unito, Grande)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="790"/>
      <source>English (United Kingdom - &apos;ise&apos; not &apos;ize&apos;)</source>
      <comment>This dictionary prefers the British &apos;ise&apos; form over the American &apos;ize&apos; one.</comment>
      <translation>Inglese (Regno Unito - &apos;ise&apos; invece che &apos;ize&apos;)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="791"/>
      <source>English (Ghana)</source>
      <translation>Inglese (Ghana)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="792"/>
      <source>English (Hong Kong SAR China)</source>
      <translation>Inglese (Hong Kong SAR China)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="793"/>
      <source>English (Ireland)</source>
      <translation>Inglese (Irlanda)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="794"/>
      <source>English (India)</source>
      <translation>Inglese (India)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="795"/>
      <source>English (Jamaica)</source>
      <translation>Inglese (Giamaica)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="796"/>
      <source>English (Namibia)</source>
      <translation>Inglese (Namibia)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="797"/>
      <source>English (Nigeria)</source>
      <translation>Inglese (Nigeria)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="798"/>
      <source>English (New Zealand)</source>
      <translation>Inglese (Nuova Zelanda)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="799"/>
      <source>English (Philippines)</source>
      <translation>Inglese (Filippine)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="800"/>
      <source>English (Singapore)</source>
      <translation>Inglese (Singapore)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="801"/>
      <source>English (Trinidad/Tobago)</source>
      <translation>Inglese (Trinidad/Tobago)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="802"/>
      <source>English (United States)</source>
      <translation>Inglese (Stati Uniti)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="803"/>
      <source>English (United States, Large)</source>
      <comment>This dictionary contains larger vocabulary.</comment>
      <translation>Inglese (Stati Uniti, Grande)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="804"/>
      <source>English (South Africa)</source>
      <translation>Inglese (Sudafrica)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="805"/>
      <source>English (Zimbabwe)</source>
      <translation>Inglese (Zimbabwe)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="806"/>
      <source>Spanish</source>
      <translation>Spagnolo</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="807"/>
      <source>Spanish (Argentina)</source>
      <translation>Spagnolo (Argentina)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="808"/>
      <source>Spanish (Bolivia)</source>
      <translation>Spagnolo (Bolivia)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="809"/>
      <source>Spanish (Chile)</source>
      <translation>Spagnolo (Cile)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="810"/>
      <source>Spanish (Colombia)</source>
      <translation>Spagnolo (Colombia)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="811"/>
      <source>Spanish (Costa Rica)</source>
      <translation>Spagnolo (Costa Rica)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="812"/>
      <source>Spanish (Cuba)</source>
      <translation>Spagnolo (Cuba)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="813"/>
      <source>Spanish (Dominican Republic)</source>
      <translation>Spagnolo (Repubblica Dominicana)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="814"/>
      <source>Spanish (Ecuador)</source>
      <translation>Spagnolo (Ecuador)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="815"/>
      <source>Spanish (Spain)</source>
      <translation>Spagnolo (Spagna)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="816"/>
      <source>Spanish (Guatemala)</source>
      <translation>Spagnolo (Guatemala)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="817"/>
      <source>Spanish (Honduras)</source>
      <translation>Spagnolo (Honduras)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="818"/>
      <source>Spanish (Mexico)</source>
      <translation>Spagnolo (Messico)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="819"/>
      <source>Spanish (Nicaragua)</source>
      <translation>Spagnolo (Nicaragua)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="820"/>
      <source>Spanish (Panama)</source>
      <translation>Spagnolo (Panama)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="821"/>
      <source>Spanish (Peru)</source>
      <translation>Spagnolo (Perù)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="822"/>
      <source>Spanish (Puerto Rico)</source>
      <translation>Spagnolo (Puerto Rico)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="823"/>
      <source>Spanish (Paraguay)</source>
      <translation>Spagnolo (Paraguay)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="824"/>
      <source>Spanish (El Savador)</source>
      <translation>Spagnolo (El Savador)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="825"/>
      <source>Spanish (United States)</source>
      <translation>Spagnolo (Stati Uniti)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="826"/>
      <source>Spanish (Uruguay)</source>
      <translation>Spagnolo (Uruguay)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="827"/>
      <source>Spanish (Venezuela)</source>
      <translation>Spagnolo (Venezuela)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="828"/>
      <source>Estonian</source>
      <translation>Estone</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="829"/>
      <source>Estonian (Estonia)</source>
      <translation>Estone (Estonia)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="830"/>
      <source>Basque</source>
      <translation>Basco</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="831"/>
      <source>Basque (Spain)</source>
      <translation>Basco (Spagna)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="832"/>
      <source>Basque (France)</source>
      <translation>Basco (Francia)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="833"/>
      <source>French</source>
      <translation>Francese (French)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="834"/>
      <source>French (Belgium)</source>
      <translation>Francese (Belgio)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="835"/>
      <source>French (Catalan)</source>
      <translation>Francese (Catalogna)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="836"/>
      <source>French (Switzerland)</source>
      <translation>Francese (Svizzera)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="837"/>
      <source>French (France)</source>
      <translation>Francese (Francia)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="838"/>
      <source>French (Luxemburg)</source>
      <translation>Francese (Lussemburgo)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="839"/>
      <source>French (Monaco)</source>
      <translation>Francese (Monaco)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="840"/>
      <source>Gaelic</source>
      <translation>Gaelico</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="841"/>
      <source>Gaelic (United Kingdom {Scots})</source>
      <translation>Gaelico (Regno Unito {Scozia})</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="842"/>
      <source>Galician</source>
      <translation>Galiziano</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="843"/>
      <source>Galician (Spain)</source>
      <translation>Galiziano (Spagna)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="844"/>
      <source>Gujarati</source>
      <translation>Gujarati</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="845"/>
      <source>Gujarati (India)</source>
      <translation>Gujarati (India)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="846"/>
      <source>Hebrew</source>
      <translation>Ebraico</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="847"/>
      <source>Hebrew (Israel)</source>
      <translation>Ebraico (Israele)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="848"/>
      <source>Hindi</source>
      <translation>Hindi</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="849"/>
      <source>Hindi (India)</source>
      <translation>Hindi (India)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="850"/>
      <source>Croatian</source>
      <translation>Croato</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="851"/>
      <source>Croatian (Croatia)</source>
      <translation>Croato (Croazia)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="852"/>
      <source>Hungarian</source>
      <translation>Ungherese</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="853"/>
      <source>Hungarian (Hungary)</source>
      <translation>Ungherese (Ungheria)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="854"/>
      <source>Armenian</source>
      <translation>Armeno</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="855"/>
      <source>Armenian (Armenia)</source>
      <translation>Armeno (Armenia)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="856"/>
      <source>Interlingue</source>
      <comment>formerly known as Occidental, and not to be mistaken for Interlingua</comment>
      <translation>Interlingue</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="857"/>
      <source>Icelandic</source>
      <translation>Islandese</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="858"/>
      <source>Icelandic (Iceland)</source>
      <translation>Islandese (Islanda)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="859"/>
      <source>Italian</source>
      <translation>Italiano (Italian)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="860"/>
      <source>Italian (Switzerland)</source>
      <translation>Italiano (Svizzera)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="861"/>
      <source>Italian (Italy)</source>
      <translation>Italiano (Italy)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="862"/>
      <source>Kazakh</source>
      <translation>Kazako</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="863"/>
      <source>Kazakh (Kazakhstan)</source>
      <translation>Kazako (Kazakistan)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="864"/>
      <source>Kurmanji</source>
      <translation>Kurmanji</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="865"/>
      <source>Kurmanji {Latin-alphabet Kurdish}</source>
      <translation>Kurmanji {Alfabeto latino Curdo}</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="866"/>
      <source>Korean</source>
      <translation>Coreano</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="867"/>
      <source>Korean (South Korea)</source>
      <translation>Coreano (Corea del Sud)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="868"/>
      <source>Kurdish</source>
      <translation>Curdo</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="869"/>
      <source>Kurdish (Syria)</source>
      <translation>Curdo (Siria)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="870"/>
      <source>Kurdish (Turkey)</source>
      <translation>Curdo (Turchia)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="871"/>
      <source>Lao</source>
      <translation>Lao</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="872"/>
      <source>Lao (Laos)</source>
      <translation>Lao (Laos)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="873"/>
      <source>Lithuanian</source>
      <translation>Lituano</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="874"/>
      <source>Lithuanian (Lithuania)</source>
      <translation>Lituano (Lituania)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="875"/>
      <source>Malayalam</source>
      <translation>Malayalam</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="876"/>
      <source>Malayalam (India)</source>
      <translation>Malayalam (India)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="877"/>
      <source>Norwegian Bokmål</source>
      <translation>Norvegese Bokmål</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="878"/>
      <source>Norwegian Bokmål (Norway)</source>
      <translation>Norvegese Bokmål (Norvegia)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="879"/>
      <source>Nepali</source>
      <translation>Nepali</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="880"/>
      <source>Nepali (Nepal)</source>
      <translation>Nepali (Nepal)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="881"/>
      <source>Dutch</source>
      <translation>Olandese (Dutch)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="882"/>
      <source>Dutch (Netherlands Antilles)</source>
      <translation>Olandese (Antille Olandesi)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="883"/>
      <source>Dutch (Aruba)</source>
      <translation>Olandese (Aruba)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="884"/>
      <source>Dutch (Belgium)</source>
      <translation>Olandese (Belgio)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="885"/>
      <source>Dutch (Netherlands)</source>
      <translation>Olandese (Paesi Bassi)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="886"/>
      <source>Dutch (Suriname)</source>
      <translation>Olandese (Suriname)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="887"/>
      <source>Norwegian Nynorsk</source>
      <translation>Norvegese Nynorsk</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="888"/>
      <source>Norwegian Nynorsk (Norway)</source>
      <translation>Norvegese Nynorsk (Norvegia)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="889"/>
      <source>Occitan</source>
      <translation>Occitano</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="890"/>
      <source>Occitan (France)</source>
      <translation>Occitano (Francia)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="891"/>
      <source>Polish</source>
      <translation>Polacco (Polish)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="892"/>
      <source>Polish (Poland)</source>
      <translation>Polacco (Polonia)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="893"/>
      <source>Portuguese</source>
      <translation>Portoghese</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="894"/>
      <source>Portuguese (Brazil)</source>
      <translation>Portoghese (Brasile)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="895"/>
      <source>Portuguese (Portugal)</source>
      <translation>Portoghese (Portogallo)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="896"/>
      <source>Romanian</source>
      <translation>Rumeno</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="897"/>
      <source>Romanian (Romania)</source>
      <translation>Rumeno (Romania)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="898"/>
      <source>Russian</source>
      <translation>Russo (Russian)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="899"/>
      <source>Russian (Russia)</source>
      <translation>Russo (Russia)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="900"/>
      <source>Northern Sami</source>
      <translation>Sami del Nord</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="901"/>
      <source>Northern Sami (Finland)</source>
      <translation>Sami Del Nord (Finlandia)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="902"/>
      <source>Northern Sami (Norway)</source>
      <translation>Sami Del Nord (Norvegia)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="903"/>
      <source>Northern Sami (Sweden)</source>
      <translation>Sami Del Nord (Svezia)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="904"/>
      <source>Shtokavian</source>
      <comment>This code seems to be the identifier for the prestige dialect for several languages used in the region of the former Yugoslavia state without a state indication</comment>
      <translation>Shtokaviano</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="905"/>
      <source>Shtokavian (former state of Yugoslavia)</source>
      <comment>This code seems to be the identifier for the prestige dialect for several languages used in the region of the former Yugoslavia state with a (withdrawn from ISO 3166) state indication</comment>
      <translation>Shtokaviano (ex Jugoslavia)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="906"/>
      <source>Sinhala</source>
      <translation>Sinhala</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="907"/>
      <source>Sinhala (Sri Lanka)</source>
      <translation>Sinhala (Sri Lanka)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="908"/>
      <source>Slovak</source>
      <translation>Slovacco</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="909"/>
      <source>Slovak (Slovakia)</source>
      <translation>Slovacco (Slovacchia)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="910"/>
      <source>Slovenian</source>
      <translation>Sloveno</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="911"/>
      <source>Slovenian (Slovenia)</source>
      <translation>Sloveno (Slovenia)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="912"/>
      <source>Somali</source>
      <translation>Somalo</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="913"/>
      <source>Somali (Somalia)</source>
      <translation>Somali (Somalia)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="914"/>
      <source>Albanian</source>
      <translation>Albanese</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="915"/>
      <source>Albanian (Albania)</source>
      <translation>Albanese (Albania)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="916"/>
      <source>Serbian</source>
      <translation>Serbo</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="917"/>
      <source>Serbian (Montenegro)</source>
      <translation>Serbo (Montenegro)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="918"/>
      <source>Serbian (Serbia)</source>
      <translation>Serbo (Serbia)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="919"/>
      <source>Serbian (Serbia - Latin-alphabet)</source>
      <translation>Serbo (Serbia - alfabeto latino)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="920"/>
      <source>Serbian (former state of Yugoslavia)</source>
      <translation>Serbo (ex Jugoslavia)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="921"/>
      <source>Swati</source>
      <translation>Swati</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="922"/>
      <source>Swati (Swaziland)</source>
      <translation>Swati (Swaziland)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="923"/>
      <source>Swati (South Africa)</source>
      <translation>Swati (Sud Africa)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="924"/>
      <source>Swedish</source>
      <translation>Svedese</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="925"/>
      <source>Swedish (Sweden)</source>
      <translation>Svedese (Svezia)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="926"/>
      <source>Swedish (Finland)</source>
      <translation>Svedese (Finlandia)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="927"/>
      <source>Swahili</source>
      <translation>Swahili</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="928"/>
      <source>Swahili (Kenya)</source>
      <translation>Swahili (Kenya)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="929"/>
      <source>Swahili (Tanzania)</source>
      <translation>Swahili (Tanzania)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="930"/>
      <source>Turkish</source>
      <translation>Turco</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="931"/>
      <source>Telugu</source>
      <translation>Telugu</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="932"/>
      <source>Telugu (India)</source>
      <translation>Telugu (India)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="933"/>
      <source>Thai</source>
      <translation>Tailandese</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="934"/>
      <source>Thai (Thailand)</source>
      <translation>Tailandese (Thailandia)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="935"/>
      <source>Tigrinya</source>
      <translation>Tigrino</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="936"/>
      <source>Tigrinya (Eritrea)</source>
      <translation>Tigrino (Eritrea)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="937"/>
      <source>Tigrinya (Ethiopia)</source>
      <translation>Tigrino (Etiopia)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="938"/>
      <source>Turkmen</source>
      <translation>Turkmeno</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="939"/>
      <source>Turkmen (Turkmenistan)</source>
      <translation>Turkmeno (Turkmenistan)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="940"/>
      <source>Tswana</source>
      <translation>Tswana</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="941"/>
      <source>Tswana (Botswana)</source>
      <translation>Tswana (Botswana)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="942"/>
      <source>Tswana (South Africa)</source>
      <translation>Tswana (Sudafrica)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="943"/>
      <source>Tsonga</source>
      <translation>Tsonga</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="944"/>
      <source>Tsonga (South Africa)</source>
      <translation>Tsonga (Sudafrica)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="945"/>
      <source>Ukrainian</source>
      <translation>Ucraino</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="946"/>
      <source>Ukrainian (Ukraine)</source>
      <translation>Ucraino (Ucraina)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="947"/>
      <source>Uzbek</source>
      <translation>Uzbeco</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="948"/>
      <source>Uzbek (Uzbekistan)</source>
      <translation>Uzbeko (Uzbekistan)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="949"/>
      <source>Venda</source>
      <translation>Venda</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="950"/>
      <source>Vietnamese</source>
      <translation>Vietnamita</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="951"/>
      <source>Vietnamese (Vietnam)</source>
      <translation>Vietnamita (Vietnam)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="952"/>
      <source>Vietnamese (DauCu varient - old-style diacritics)</source>
      <translation>Vietnamita (varietà DauCu - diacritici vecchio stile)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="953"/>
      <source>Vietnamese (DauMoi varient - new-style diacritics)</source>
      <translation>Vietnamita (varietà DauCu - diacritici nuovo stile)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="954"/>
      <source>Walloon</source>
      <translation>Vallone</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="955"/>
      <source>Xhosa</source>
      <translation>Xhosa</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="956"/>
      <source>Yiddish</source>
      <translation>Yiddish</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="957"/>
      <source>Chinese</source>
      <translation>Cinese</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="958"/>
      <source>Chinese (China - simplified)</source>
      <translation>Cinese (Cina - semplificato)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="959"/>
      <source>Chinese (Taiwan - traditional)</source>
      <translation>Cinese (Taiwan - tradizionale)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="960"/>
      <source>Zulu</source>
      <translation>Zulu</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="4322"/>
      <source>Hide tray icon</source>
      <translation>Nascondi Icona nell'Area di Notifica</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="4327"/>
      <source>Quit Mudlet</source>
      <translation>Esci da Mudlet</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="235"/>
      <source>hh:mm:ss</source>
      <comment>Formatting string for elapsed time display in replay playback - see QDateTime::toString(const QString&amp;) for the gory details...!</comment>
      <translation>hh:mm:ss</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="287"/>
      <source>Main Toolbar</source>
      <translation>Barra degli strumenti principale</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="330"/>
      <location filename="../src/mudlet.cpp" line="337"/>
      <location filename="../src/mudlet.cpp" line="339"/>
      <source>Connect</source>
      <translation>Connetti</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="342"/>
      <source>Disconnect</source>
      <translation>Disconnetti</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="401"/>
      <source>Open Discord</source>
      <translation>Apri Discord</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="406"/>
      <source>Open IRC</source>
      <translation>Apri IRC</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="458"/>
      <source>Package Exporter</source>
      <translation>Esportatore package</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="349"/>
      <source>Triggers</source>
      <translation>Trigger</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="350"/>
      <source>Show and edit triggers</source>
      <translation>Mostra/modifica trigger</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="357"/>
      <source>Aliases</source>
      <translation>Alias</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="358"/>
      <source>Show and edit aliases</source>
      <translation>Mostra/modifica alias</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="363"/>
      <source>Timers</source>
      <translation>Timer</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="364"/>
      <source>Show and edit timers</source>
      <translation>Mostra/modifica timer</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="369"/>
      <source>Buttons</source>
      <translation>Bottoni</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="370"/>
      <source>Show and edit easy buttons</source>
      <translation>Mostra e modifica bottoni</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="375"/>
      <source>Scripts</source>
      <translation>Script</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="376"/>
      <source>Show and edit scripts</source>
      <translation>Mostra e modifica script</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="381"/>
      <source>Keys</source>
      <translation>Tasti</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="382"/>
      <source>Show and edit keys</source>
      <translation>Mostra e modifica tasti</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="387"/>
      <source>Variables</source>
      <translation>Variabili</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="388"/>
      <source>Show and edit Lua variables</source>
      <translation>Mostra e modifica variabili Lua</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="414"/>
      <source>Map</source>
      <translation>Mappa</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="415"/>
      <source>Show/hide the map</source>
      <translation>Mostra/nascondi la mappa</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="420"/>
      <source>Manual</source>
      <translation>Manuale</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="421"/>
      <source>Browse reference material and documentation</source>
      <translation>Sfoglia il materiale di riferimento e la documentazione</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="426"/>
      <source>Settings</source>
      <translation>Impostazioni</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="427"/>
      <source>See and edit profile preferences</source>
      <translation>Consultare e modificare le preferenze del profilo</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="435"/>
      <source>Notepad</source>
      <translation>Note</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="436"/>
      <source>Open a notepad that you can store your notes in</source>
      <translation>Aprire un blocco note in cui è possibile memorizzare delle note</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="442"/>
      <location filename="../src/mudlet.cpp" line="449"/>
      <location filename="../src/mudlet.cpp" line="451"/>
      <source>Package Manager</source>
      <translation>Gestione Package</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="454"/>
      <source>Module Manager</source>
      <translation>Gestione Moduli</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="468"/>
      <source>Replay</source>
      <translation>Replay</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="473"/>
      <source>Reconnect</source>
      <translation>Riconnetti</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="474"/>
      <source>Disconnects you from the game and connects once again</source>
      <translation>Disconnette il gioco e si collega di nuovo</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="479"/>
      <source>MultiView</source>
      <translation>Vista multipla</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="503"/>
      <location filename="../src/mudlet.cpp" line="3445"/>
      <source>About</source>
      <translation>Altro</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="504"/>
      <location filename="../src/mudlet.cpp" line="3428"/>
      <source>&lt;p&gt;Inform yourself about this version of Mudlet, the people who made it and the licence under which you can share it.&lt;/p&gt;</source>
      <comment>Tooltip for About Mudlet sub-menu item and main toolbar button (or menu item if an update has changed that control to have a popup menu instead) (Used in 3 places - please ensure all have the same translation).</comment>
      <translation>&lt;p&gt;Informati su questa versione di Mudlet, le persone che l'hanno creato e la licenza con cui puoi condividerlo.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="962"/>
      <source>ASCII (Basic)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ASCII (Base)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="963"/>
      <source>UTF-8 (Recommended)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>UTF-8 (Consigliato)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="968"/>
      <source>ISO 8859-1 (Western European)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO-8859-1 (Europa occidentale)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="969"/>
      <source>ISO 8859-2 (Central European)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO 8859-2 (Central European)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="970"/>
      <source>ISO 8859-3 (South European)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO 8859-3 (South European)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="971"/>
      <source>ISO 8859-4 (Baltic)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO 8859-4 (Baltic)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="972"/>
      <source>ISO 8859-5 (Cyrillic)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO 8859-5 (Cyrillic)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="973"/>
      <source>ISO 8859-6 (Arabic)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO 8859-6 (Arabic)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="974"/>
      <source>ISO 8859-7 (Greek)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO 8859-7 (Greek)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="975"/>
      <source>ISO 8859-8 (Hebrew Visual)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO 8859-8 (Hebrew Visual)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="976"/>
      <source>ISO 8859-9 (Turkish)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO 8859-9 (Turkish)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="977"/>
      <source>ISO 8859-10 (Nordic)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO 8859-10 (Nordic)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="978"/>
      <source>ISO 8859-11 (Latin/Thai)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO 8859-11 (Latin/Thai)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="979"/>
      <source>ISO 8859-13 (Baltic)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO 8859-13 (Baltic)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="980"/>
      <source>ISO 8859-14 (Celtic)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO 8859-14 (Celtic)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="981"/>
      <source>ISO 8859-15 (Western)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO 8859-15 (Western)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="982"/>
      <source>ISO 8859-16 (Romanian)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO 8859-16 (Romanian)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="983"/>
      <location filename="../src/mudlet.cpp" line="984"/>
      <source>CP437 (OEM Font)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>CP437 (carattere OEM)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="985"/>
      <location filename="../src/mudlet.cpp" line="986"/>
      <source>CP667 (Mazovia)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>CP667 (Masovia)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="987"/>
      <location filename="../src/mudlet.cpp" line="988"/>
      <source>CP737 (DOS Greek)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>CP737 (DOS Greco)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="989"/>
      <source>CP850 (Western Europe)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>CP850 (Western Europe)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="990"/>
      <source>CP866 (Cyrillic/Russian)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>CP866 (Cyrillic/Russian)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="991"/>
      <location filename="../src/mudlet.cpp" line="992"/>
      <source>CP869 (DOS Greek 2)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>CP869 (DOS Greco 2)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="993"/>
      <source>CP1161 (Latin/Thai)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>CP1161 (Latino/Thai)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="994"/>
      <source>KOI8-R (Cyrillic)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>KOI8-R (Cyrillic)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="995"/>
      <source>KOI8-U (Cyrillic/Ukrainian)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>KOI8-U (Cyrillic/Ukrainian)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="996"/>
      <source>MACINTOSH</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>MACINTOSH</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="997"/>
      <source>WINDOWS-1250 (Central European)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>WINDOWS-1250 (Central European)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="998"/>
      <source>WINDOWS-1251 (Cyrillic)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>WINDOWS-1251 (Cyrillic)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="999"/>
      <source>WINDOWS-1252 (Western)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>WINDOWS-1252 (Western)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="1000"/>
      <source>WINDOWS-1253 (Greek)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>WINDOWS-1253 (Greek)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="1001"/>
      <source>WINDOWS-1254 (Turkish)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>WINDOWS-1254 (Turkish)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="1002"/>
      <source>WINDOWS-1255 (Hebrew)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>WINDOWS-1255 (Hebrew)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="1003"/>
      <source>WINDOWS-1256 (Arabic)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>WINDOWS-1256 (Arabic)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="1004"/>
      <source>WINDOWS-1257 (Baltic)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>WINDOWS-1257 (Baltic)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="1005"/>
      <source>WINDOWS-1258 (Vietnamese)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>WINDOWS-1258 (Vietnamese)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="2489"/>
      <source>Central Debug Console</source>
      <translation>Console di Debug Principale</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="516"/>
      <location filename="../src/mudlet.cpp" line="517"/>
      <source>Toggle Full Screen View</source>
      <translation>Attiva/disattiva Schermo Intero</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="496"/>
      <source>The public test build gets newer features to you quicker, and you help us find issues in them quicker. Spotted something odd? Let us know asap!</source>
      <translation>La versione pubblica di test ti permette di avere velocemente le funzioni più recenti e ci aiuti a trovare eventuali problemi. Hai notato qualcosa di strano? Facci sapere al più presto!</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="964"/>
      <source>GBK (Chinese)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>GBK (Cinese)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="965"/>
      <source>GB18030 (Chinese)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>GB18030 (Cinese)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="966"/>
      <source>Big5-ETen (Taiwan)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>Big5-ETen (Taiwan)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="967"/>
      <source>Big5-HKSCS (Hong Kong)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>Big5-HKSCS (Hong Kong)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="1550"/>
      <source>&lt;p&gt;Load a Mudlet replay.&lt;/p&gt;&lt;p&gt;&lt;i&gt;Disabled until a profile is loaded.&lt;/i&gt;&lt;/p&gt;</source>
      <translation>&lt;p&gt;Carica un replay di Mudlet.&lt;/p&gt;&lt;p&gt;&lt;i&gt;Disabilitato fino a quando un profilo non viene selezionato.&lt;/i&gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="1586"/>
      <location filename="../src/mudlet.cpp" line="2860"/>
      <source>&lt;p&gt;Load a Mudlet replay.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Carica un replay di Mudlet.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="2315"/>
      <source>%1 - notes</source>
      <translation>%1 - note</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="2368"/>
      <source>Select Replay</source>
      <translation>Seleziona Replay</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="2370"/>
      <source>*.dat</source>
      <translation>*.dat</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="2627"/>
      <source>[  OK  ]  - Profile &quot;%1&quot; loaded in offline mode.</source>
      <translation>[  OK  ]  - Profilo &quot;%1&quot; caricato in modalità offline.</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="2762"/>
      <source>&lt;p&gt;Cannot load a replay as one is already in progress in this or another profile.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Impossibile caricare una replay perchè è già in corso una riproduzione in questo o un altro profilo.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="2779"/>
      <source>Faster</source>
      <translation>Più veloce</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="2782"/>
      <source>&lt;p&gt;Replay each step with a shorter time interval between steps.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Riproduci ogni passaggio con un intervallo di esecuzione più breve.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="2786"/>
      <source>Slower</source>
      <translation>Più lento</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="2789"/>
      <source>&lt;p&gt;Replay each step with a longer time interval between steps.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Riproduci ogni passaggio con un intervallo di esecuzione più lugo.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="2799"/>
      <location filename="../src/mudlet.cpp" line="2868"/>
      <location filename="../src/mudlet.cpp" line="2881"/>
      <source>Speed: X%1</source>
      <translation>Velocità: X%1</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="2806"/>
      <location filename="../src/mudlet.cpp" line="2823"/>
      <source>Time: %1</source>
      <translation>Tempo: %1</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/mudlet.cpp" line="3439"/>
      <source>&lt;p&gt;About Mudlet&lt;/p&gt;&lt;p&gt;&lt;i&gt;%n update(s) is/are now available!&lt;/i&gt;&lt;p&gt;</source>
      <comment>This is the tooltip text for the &apos;About&apos; Mudlet main toolbar button when it has been changed by adding a menu which now contains the original &apos;About Mudlet&apos; action and a new one to access the manual update process</comment>
      <translation>
        <numerusform>&lt;p&gt;Informazioni su Mudlet&lt;/p&gt;&lt;p&gt;&lt;i&gt;%n aggiornamenti sono disponibili!&lt;/i&gt;&lt;p&gt;</numerusform>
        <numerusform>&lt;p&gt;Informazioni su Mudlet&lt;/p&gt;&lt;p&gt;&lt;i&gt;%n aggiornamenti sono disponibili!&lt;/i&gt;&lt;p&gt;</numerusform>
      </translation>
    </message>
    <message numerus="yes">
      <location filename="../src/mudlet.cpp" line="3457"/>
      <source>Review %n update(s)...</source>
      <comment>Review update(s) menu item, %n is the count of how many updates are available</comment>
      <translation>
        <numerusform>Mostra %n aggiornamento(i)...</numerusform>
        <numerusform>Mostra %n aggiornamento(i)...</numerusform>
      </translation>
    </message>
    <message numerus="yes">
      <location filename="../src/mudlet.cpp" line="3462"/>
      <source>&lt;p&gt;Review the update(s) available...&lt;/p&gt;</source>
      <comment>Tool-tip for review update(s) menu item, given that the count of how many updates are available is already shown in the menu, the %n parameter that is that number need not be used here</comment>
      <translation>
        <numerusform>&lt;p&gt;Mostra gli aggiornamenti disponibili...&lt;/p&gt;</numerusform>
        <numerusform>&lt;p&gt;Mostra gli aggiornamenti disponibili...&lt;/p&gt;</numerusform>
      </translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="3487"/>
      <source>Update installed - restart to apply</source>
      <translation>Aggiornamento installato - riavvia per completare</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="3523"/>
      <source>[ WARN ]  - Cannot perform replay, another one may already be in progress,
try again when it has finished.</source>
      <translation>[ WARN ] - Impossibile avviare il file di replay, un altro potrebbe già essere in esecuzione,
tenta di nuovo quando sarà terminato.</translation>
    </message>
  </context>
  <context>
    <name>package_manager</name>
    <message>
      <location filename="../src/ui/package_manager.ui" line="48"/>
      <source>Install</source>
      <translation>Installa</translation>
    </message>
    <message>
      <location filename="../src/ui/package_manager.ui" line="61"/>
      <source>Uninstall</source>
      <translation>Disinstalla</translation>
    </message>
  </context>
  <context>
    <name>package_manager_unpack</name>
    <message>
      <location filename="../src/ui/package_manager_unpack.ui" line="24"/>
      <source>unpacking please wait ...</source>
      <translation>decompressione, attendere prego ...</translation>
    </message>
  </context>
  <context>
    <name>profile_preferences</name>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="20"/>
      <source>Profile preferences</source>
      <translation>Impostazioni profilo</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="55"/>
      <source>General</source>
      <translation>Generale</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="61"/>
      <source>Icon sizes</source>
      <translation>Dimensione icone</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="67"/>
      <source>Icon size toolbars:</source>
      <translation>Dimensione icone barra degli strumenti:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="90"/>
      <source>Icon size in tree views:</source>
      <translation>Dimensione icone nella vista ad albero:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="110"/>
      <source>Show menu bar:</source>
      <translation>Mostra barra dei menu:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="121"/>
      <location filename="../src/ui/profile_preferences.ui" line="150"/>
      <source>Never</source>
      <translation>Mai</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="126"/>
      <location filename="../src/ui/profile_preferences.ui" line="155"/>
      <source>Until a profile is loaded</source>
      <translation>Fino al caricamento del profilo</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="131"/>
      <location filename="../src/ui/profile_preferences.ui" line="160"/>
      <source>Always</source>
      <translation>Sempre</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="139"/>
      <source>Show main toolbar</source>
      <translation>Mostra barra degli strumenti</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="239"/>
      <source>Allow server to install script packages</source>
      <translation>Consenti al server di installare automaticamente i package</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="266"/>
      <source>Game protocols</source>
      <translation>Protocolli di gioco</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="323"/>
      <location filename="../src/ui/profile_preferences.ui" line="3306"/>
      <source>Please reconnect to your game for the change to take effect</source>
      <translation>Ricollegati al tuo gioco per rendere effettive le modifiche</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="339"/>
      <source>Log options</source>
      <translation>Opzioni di log</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="348"/>
      <source>Save log files in HTML format instead of plain text</source>
      <translation>Salva i file di log in formato HTML, invece di testo semplice</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="355"/>
      <source>Add timestamps at the beginning of log lines</source>
      <translation>Aggiunti data e ora all'inizio di ogni riga di log</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="362"/>
      <source>Save log files in:</source>
      <translation>Salvare i file di log in:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="379"/>
      <source>Browse...</source>
      <translation>Sfoglia...</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="386"/>
      <source>Reset</source>
      <translation>Azzera</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="393"/>
      <source>Log format:</source>
      <translation>Formato log:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="406"/>
      <source>Log name:</source>
      <translation>Nome log:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="426"/>
      <source>.txt</source>
      <translation>.txt</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="459"/>
      <source>Input line</source>
      <translation>Linea dei comandi</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="468"/>
      <source>Input</source>
      <translation>Linea dei comandi</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="474"/>
      <source>use strict UNIX line endings on commands for old UNIX servers that can&apos;t handle windows line endings correctly</source>
      <translation>forza l'utilizzo delle terminazioni di riga UNIX per i vecchi server UNIX che non possono gestire correttamente quelle in formato Windows</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="477"/>
      <source>Strict UNIX line endings</source>
      <translation>Obbliga terminatore di riga UNIX</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="494"/>
      <source>Show the text you sent</source>
      <translation>Mostra il testo che hai inviato</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="484"/>
      <source>Auto clear the input line after you sent text</source>
      <translation>Cancella automaticamente la riga dei comandi dopo aver inviato il testo</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="201"/>
      <source>&lt;p&gt;If you are playing a non-English game and seeing � instead of text, or special letters like &lt;span style=&quot; font-weight:600;&quot;&gt;ñ&lt;/span&gt; aren&apos;t showing right - try changing the encoding to UTF-8 or to one suggested by your game.&lt;/p&gt;&lt;p&gt;For some encodings on some Operating Systems Mudlet itself has to provide the codec needed; if that is the case for this Mudlet then there will be a &lt;tt&gt;m &lt;/tt&gt; prefixed applied to those encoding names (so if they have errors the blame can be applied correctly!)&lt;/p&gt;</source>
      <translation>&lt;p&gt;Se sei collegato ad un gioco che utilizza un alfabeto non-latino e vedi il simbolo � invece del testo o i caratteri speciali accentati come &lt;span style=&quot; font-weight:600;&quot;&gt;ñ&lt;/span&gt; non sono visualizzati correttamente, prova a cambiare la codifica in UTF-8 o in quella suggerita dal tuo gioco.&lt;/p&gt;&lt;p&gt;Per alcune codifiche, in alcuni sistemi operativi, Mudlet dispone già delle informazioni di decodifica necessarie, in tal caso sarà presente una &lt;tt&gt;m&lt;/tt&gt; come prefisso al nome della codifica.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="302"/>
      <source>&lt;p&gt;Enables MSP - provides Mud Sound Protocol messages during game play for supported games&lt;/p&gt;</source>
      <translation>&lt;p&gt;Abilita MSP - accetta messaggi Mud Sound Protocol per i giochi supportati&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="345"/>
      <source>&lt;p&gt;When checked will cause the date-stamp named log file to be HTML (file extension &apos;.html&apos;) which can convey color, font and other formatting information rather than a plain text (file extension &apos;.txt&apos;) format.  If changed while logging is already in progress it is necessary to stop and restart logging for this setting to take effect in a new log file.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Seleziona questa opzione per salvare i file di log in formato HTML (estensione &apos;.html&apos;) in modo che contenga colori, tipi di carattere e altre informazioni di formattazione invece che solamente il testo ricevuto dal gioco (estensione &apos;.txt&apos;).  Se cambi l'opzione mentre il logging è attivo è necessario riavviarlo affinché la variazione venga applicata.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="514"/>
      <source>React to all keybindings on the same key</source>
      <translation>Utilizza tutte le scorciatoie da tastiera assegnato allo stesso tasto</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="524"/>
      <source>Command separator:</source>
      <translation>Separatore dei comandi:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="534"/>
      <source>Enter text to separate commands with or leave blank to disable</source>
      <translation>Inserisci il testo per separare i comandi o lascia vuoto per disabilitare</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="541"/>
      <source>Command line minimum height in pixels:</source>
      <translation>Altezza minima in pixel della linea dei comandi:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="663"/>
      <source>Main display</source>
      <translation>Finestra principale</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="675"/>
      <source>Font</source>
      <translation>Carattere</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="681"/>
      <source>Font:</source>
      <translation>Carattere:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="704"/>
      <source>Size:</source>
      <translation>Dimensione:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="726"/>
      <source>Use anti aliasing on fonts. Smoothes fonts if you have a high screen resolution and you can use larger fonts. Note that on low resolutions and small font sizes, the font gets blurry. </source>
      <translation>Usa l'anti-aliasing sui caratteri. Rende i caratteri più leggibili se hai uno schermo ad alta risoluzione, inoltre permette di usare dimensioni di carattere superiori. Ricordati che con basse risoluzioni e dimensioni ridotte del carattere potrebbero esserci delle sfocature. </translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="729"/>
      <source>Enable anti-aliasing</source>
      <translation>Abilita anti-aliasing</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="758"/>
      <source>Display Border</source>
      <translation>Mostra Bordo</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="779"/>
      <source>Top border height:</source>
      <translation>Dimensione bordo superiore:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="823"/>
      <source>Left border width:</source>
      <translation>Dimensione bordo sinistro:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="867"/>
      <source>Bottom border height:</source>
      <translation>Dimensione bordo inferiore:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="911"/>
      <source>Right border width:</source>
      <translation>Dimensione bordo destro:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="952"/>
      <source>Word wrapping</source>
      <translation>Ritorno a capo</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="976"/>
      <source>Wrap lines at:</source>
      <translation>Torna a capo a:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="996"/>
      <location filename="../src/ui/profile_preferences.ui" line="1044"/>
      <source>characters</source>
      <translation>caratteri</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1024"/>
      <source>Indent wrapped lines by:</source>
      <translation>Indenta i ritorni a capo di:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1057"/>
      <source>Double-click</source>
      <translation>Doppio-click</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1063"/>
      <source>Stop selecting a word on these characters:</source>
      <translation>Interrompi la selezione di una parola su questi caratteri:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1073"/>
      <source>&apos;&quot;</source>
      <translation>&apos;&quot;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1086"/>
      <source>Display options</source>
      <translation>Opzioni di visualizzazione</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1095"/>
      <source>Fix unnecessary linebreaks on GA servers</source>
      <translation>Correggi interruzioni di linea non necessarie sui server che supportano GA</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1105"/>
      <source>Show Spaces/Tabs</source>
      <translation>Mostra Spazi/Tabs</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1115"/>
      <source>Use Mudlet on a netbook with a small screen</source>
      <translation>Utilizza Mudlet su un netbook con lo schermo piccolo</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1125"/>
      <source>Show Line/Paragraphs</source>
      <translation>Mostra Riga/Paragrafi</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1135"/>
      <source>Echo Lua errors to the main console</source>
      <translation>Mostra errori Lua nella console principale</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1142"/>
      <source>Make &apos;Ambiguous&apos; E. Asian width characters wide</source>
      <translation>Uniforma i caratteri Est Asiatici di larghezza &apos;variabile&apos;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1176"/>
      <source>Editor</source>
      <translation>Editor</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1182"/>
      <source>Theme</source>
      <translation>Tema</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1252"/>
      <source>Updating themes from colorsublime.github.io...</source>
      <translation>Aggiornamento dei temi da colorsublime.github.io...</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1292"/>
      <source>Color view</source>
      <translation>Colori</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1298"/>
      <source>Select your color preferences</source>
      <translation>Selezionare le preferenze di colore</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1304"/>
      <source>Foreground:</source>
      <translation>Colore carattere:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1327"/>
      <source>Background:</source>
      <translation>Sfondo:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1347"/>
      <source>Command line foreground:</source>
      <translation>Colore linea dei comandi:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1364"/>
      <source>Command line background:</source>
      <translation>Sfondo linea di comandi:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1381"/>
      <source>Command foreground:</source>
      <translation>Colore comandi:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1401"/>
      <source>Command background:</source>
      <translation>Sfondo comandi:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="272"/>
      <source>&lt;p&gt;Enables GMCP - note that if you have MSDP enabled as well, some servers will prefer one over the other&lt;/p&gt;</source>
      <translation>&lt;p&gt;Abilita GMCP - se hai anche MSDP abilitato, alcuni server potrebbero preferire solo uno dei due&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="292"/>
      <source>&lt;p&gt;Enables MSDP - note that if you have GMCP enabled as well, some servers will prefer one over the other&lt;/p&gt;</source>
      <translation>&lt;p&gt;Abilita MSDP - se hai anche GMCP abilitato, alcuni server potrebbero preferire solo uno dei due&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="171"/>
      <source>Language &amp;&amp; data encoding</source>
      <translation>Lingua &amp;&amp; Codifica</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="177"/>
      <source>Interface language:</source>
      <translation>Lingua interfaccia:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="191"/>
      <source>Server data encoding:</source>
      <translation>Codifica dati server:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="213"/>
      <source>Please restart Mudlet to apply the new language</source>
      <translation>Riavvia Mudlet per attivare la nuova lingua</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="223"/>
      <source>Miscellaneous</source>
      <translation>Altre impostazioni</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="275"/>
      <source>Enable GMCP  (Generic Mud Communication Protocol)</source>
      <translation>Abilita GMCP  (Generic Mud Communication Protocol)</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="295"/>
      <source>Enable MSDP  (Mud Server Data Protocol)</source>
      <translation>Abilita MSDP  (Mud Server Data Protocol)</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="282"/>
      <source>&lt;p&gt;Enables MSSP - provides Mud Server Status Protocol information upon connection for supported games&lt;/p&gt;</source>
      <translation>&lt;p&gt;Abilita MSSP - fornisce informazioni sullo stato del server del MUD durante il collegamento ai giochi supportati&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="285"/>
      <source>Enable MSSP  (Mud Server Status Protocol)</source>
      <translation>Abilita MSSP  (Mud Server Status Protocol)</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="491"/>
      <source>&lt;p&gt;Echo the text you send in the display box.&lt;/p&gt;&lt;p&gt;&lt;i&gt;This can be disabled by the game server if it negotiates to use the telnet ECHO option&lt;/i&gt;&lt;/p&gt;</source>
      <translation>&lt;p&gt;Scrive il testo inviato nella casella di visualizzazione.&lt;/p&gt;&lt;p&gt;&lt;i&gt;Questo può essere disabilitato dal server di gioco se imposta di utilizzare l'opzione di telnet ECHO&lt;/i&gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="511"/>
      <source>&lt;p&gt;Check all Key-bindings against key-presses.&lt;/p&gt;&lt;p&gt;&lt;i&gt;Versions of Mudlet prior to &lt;b&gt;3.9.0&lt;/b&gt; would stop checking after the first matching combination of&lt;/i&gt; KeyCode &lt;i&gt;and&lt;/i&gt; KeyModifier &lt;i&gt;was found and then send the command and/or run the script of that Key-binding only.  This&lt;/i&gt; per-profile &lt;i&gt;option tells Mudlet to check and run the remaining matches; but, to retain compatibility with previous versions, defaults to the &lt;b&gt;un&lt;/b&gt;-checked state.&lt;/i&gt;&lt;/p&gt;</source>
      <translation>&lt;p&gt;Controlla tutte le combinazioni di tasti configurate quando si preme un tasto.&lt;/p&gt;&lt;p&gt;&lt;i&gt;Le versioni di Mudlet precedenti alla &lt;b&gt;3.9.0&lt;/b&gt; smettevano di effettuare controlli una volta trovata la prima corrispondenza della&lt;/i&gt; combinazione tasti &lt;i&gt; e eseguivano solo lo script di questo abbinamento.  L'opzione, valida solo per il&lt;/i&gt; profilo corrente &lt;i&gt;, attiva il controllo di tutte le ulteriori combinazioni di tasti, ma per mantenere la compatibilità con le versioni precedenti il valore predefinito è &lt;b&gt;disattivo&lt;/b&gt;.&lt;/i&gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="567"/>
      <source>Spell checking</source>
      <translation>Controllo ortografico</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="573"/>
      <source>&lt;p&gt;This option controls spell-checking on the command line in the main console for this profile.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Questa opzione attiva il controllo ortografico sulla riga comandi nella finestra principale per il profilo corrente.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="576"/>
      <source>System/Mudlet dictionary:</source>
      <translation>Dizionario di sistema/Mudlet:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="583"/>
      <source>&lt;p&gt;Select one dictionary which will be available on the command line and in the lua sub-system.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Seleziona un dizionario che sarà disponibile sulla riga comandi e nel sottosistema lua.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="611"/>
      <source>User dictionary:</source>
      <translation>Dizionario utente:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="617"/>
      <source>&lt;p&gt;A user dictionary specific to this profile will be available. This will be on the command line (words which are in it will appear with a dashed cyan underline) and in the lua sub-system.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Un dizionario utente specifico è disponibile in questo profilo. E'utilizzato nella riga dei comandi (le parole digitate avranno una sottolineatura tratteggiata in ciano) e nel sottosistema lua.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="620"/>
      <source>Profile</source>
      <translation>Profilo</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="627"/>
      <source>&lt;p&gt;A user dictionary that is shared between all profiles (which have this option selected) will be available. This will be on the command line (words which are in it will appear with a dashed cyan underline) and in the lua sub-system.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Un dizionario utente è disponibile per la condivisone con tutti i profili (che hanno quest'opzione abilitata). E'utilizzato nella riga dei comandi (le parole digitate avranno una sottolineatura tratteggiata in ciano) e nel sottosistema lua.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="630"/>
      <source>Shared</source>
      <translation>Condiviso</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="719"/>
      <source>The selected font doesn&apos;t work with Mudlet, please pick another</source>
      <translation>Il carattere selezionato non funziona con Mudlet, scegline un altro</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="776"/>
      <location filename="../src/ui/profile_preferences.ui" line="792"/>
      <source>&lt;p&gt;Extra space to have before text on top - can be set to negative to move text up beyond the screen&lt;/p&gt;</source>
      <translation>&lt;p&gt;Spazio extra da lasciare in alto prima del testo - può essere impostato un valore negativo per spostare il testo fuori dallo schermo&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="820"/>
      <location filename="../src/ui/profile_preferences.ui" line="836"/>
      <source>&lt;p&gt;Extra space to have before text on the left - can be set to negative to move text left beyond the screen&lt;/p&gt;</source>
      <translation>&lt;bp&gt;Spazio extra da lasciare a sinistra prima del testo - può essere impostato un valore negativo per spostare il testo fuori dallo schermo&lt;b/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="864"/>
      <location filename="../src/ui/profile_preferences.ui" line="880"/>
      <source>&lt;p&gt;Extra space to have before text on the bottom - can be set to negative to allow text to go down beyond the screen&lt;/p&gt;</source>
      <translation>&lt;bp&gt;Spazio extra da lasciare in basso dopo il testo - può essere impostato un valore negativo per spostare il testo fuori dallo schermo&lt;b/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="908"/>
      <location filename="../src/ui/profile_preferences.ui" line="924"/>
      <source>&lt;p&gt;Extra space to have before text on the right - can be set to negative to move text right beyond the screen&lt;/p&gt;</source>
      <translation>&lt;bp&gt;Spazio extra da lasciare a destra dopo il testo - può essere impostato un valore negativo per spostare il testo fuori dallo schermo&lt;b/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1070"/>
      <source>&lt;p&gt;Enter the characters you&apos;d like double-clicking to stop selecting text on here. If you don&apos;t enter any, double-clicking on a word will only stop at a space, and will include characters like a double or a single quote. For example, double-clicking on the word &lt;span style=&quot; font-style:italic;&quot;&gt;Hello&lt;/span&gt; in the following will select &lt;span style=&quot; font-style:italic;&quot;&gt;&amp;quot;&lt;/span&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;Hello!&amp;quot;&lt;/span&gt;&lt;/p&gt;&lt;p&gt;You say, &lt;span style=&quot; font-weight:600;&quot;&gt;&amp;quot;Hello!&amp;quot;&lt;/span&gt;&lt;/p&gt;&lt;p&gt;If you set the characters in the field to &lt;span style=&quot; font-weight:600;&quot;&gt;&apos;&amp;quot;! &lt;/span&gt;which will mean it should stop selecting on &apos; &lt;span style=&quot; font-style:italic;&quot;&gt;or&lt;/span&gt; &amp;quot; &lt;span style=&quot; font-style:italic;&quot;&gt;or&lt;/span&gt; ! then double-clicking on &lt;span style=&quot; font-style:italic;&quot;&gt;Hello&lt;/span&gt; will just select &lt;span style=&quot; font-style:italic;&quot;&gt;Hello&lt;/span&gt;&lt;/p&gt;&lt;p&gt;You say, &amp;quot;&lt;span style=&quot; font-weight:600;&quot;&gt;Hello&lt;/span&gt;!&amp;quot;&lt;/p&gt;</source>
      <translation>&lt;p&gt;Inserisci i caratteri da utilizzare per interrompere la selezione del testo in caso di doppio clic. Se lasci vuoto questo campo, il doppio clic su una parola si fermerà solo su uno spazio, e includerà caratteri come un singolo o doppio apice. Per esempio, facendo doppio clic sulla parola &lt;span style=&quot; font-style:italic;&quot;&gt;Ciao&lt;/span&gt; nel seguente modo si selezionerà &lt;span style=&quot; font-style:italic;&quot;&gt;&amp;quot;&amp;quot;&lt;/span&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;Ciao!&amp;quot;&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Hai detto, &lt;span style=&quot; font-weight:600;&quot;&gt;&amp;quot;Ciao!&amp;quot;&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Se imposti il campo su &lt;span style=&quot; font-weight:600;&quot;&gt;&apos;&amp;quot;! &lt;/span&gt; significa che la selezione si fermerà alla &apos; &lt;span style=&quot; font-style:italic;&quot;&gt;o&lt;/span&gt; &amp;quot; &lt;span style=&quot; font-style:italic;&quot;&gt;o&lt;/span&gt; ! poi facendo doppio clic su &lt;span style=&quot; font-style:italic;&quot;&gt;Ciao&lt;/span&gt; verrà selezionato &lt;span style=&quot; font-style:italic;&quot;&gt;Ciao&lt;/span&gt;&lt;/p&gt;&lt;p&gt;Hai detto, &amp;quot;&lt;span style=&quot; font-weight:600;&quot;&gt;Ciao&lt;/span&gt;!&amp;quot;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1076"/>
      <source>(characters to ignore in selection, for example &apos; or &quot;)</source>
      <translation>(caratteri da ignorare nella selezione automatica, per esempio &apos; o &quot;)</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1092"/>
      <source>&lt;p&gt;Some games (notably all IRE MUDs) suffer from a bug where they don&apos;t properly communicate with the client on where a newline should be. Enable this to fix text from getting appended to the previous prompt line.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Alcuni giochi (in particolare tutti i MUD IRE) soffrono di un problema per cui non comunicano correttamente a Mudlet quando inserire il carattere di nuova linea. Abilita questa opzione per evitare che il testo sia accodato erroneamente alla riga precedente.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1102"/>
      <source>&lt;body&gt;&lt;p&gt;When displaying Lua contents in the main text editor area of the Editor show tabs and spaces with visible marks instead of whitespace.&lt;/p&gt;</source>
      <translation>&lt;body&gt;&lt;p&gt;Mostra tabulazioni e spazi con segni visibili invece di spazi bianchi, quando si visualizzi il contenuto Lua nell'editor di testo principale.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1112"/>
      <source>&lt;p&gt;Select this option for better compatability if you are using a netbook, or some other computer model that has a small screen.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Seleziona questa opzione per una migliore compatibilità in caso si utilizzi un netbook o qualche altro modello di computer che dispone di uno schermo piccolo.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1122"/>
      <source>&lt;body&gt;&lt;p&gt;When displaying Lua contents in the main text editor area of the Editor show  line and paragraphs ends with visible marks as well as whitespace.&lt;/p&gt;</source>
      <translation>&lt;body&gt;&lt;p&gt;Mostra linee e paragrafi con segni visibili invece di spazi bianchi, quando si visualizzi il contenuto Lua nell'editor di testo principale.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1132"/>
      <source>&lt;p&gt;Prints Lua errors to the main console in addition to the error tab in the editor.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Stampa gli errori Lua nella finestra principale oltre che nella scheda di errore dell'editor.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1152"/>
      <source>Enable text analyzer</source>
      <translation>Abilita analisi testo</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3473"/>
      <source>h:mm:ss.zzz</source>
      <comment>Used to set a time interval only</comment>
      <translation>h:mm:ss.zzz</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1262"/>
      <source>Autocomplete</source>
      <translation>Completamento automatico</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="229"/>
      <source>Notify on new data</source>
      <translation>Notifica nuovi dati</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="232"/>
      <source>&lt;p&gt;Show a toolbar notification if Mudlet is minimized and new data arrives.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Mostra una notifica sulla barra degli strumenti se Mudlet è ridotto a icona e arrivano nuovi dati.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="246"/>
      <source>Auto save on exit</source>
      <translation>Salva all'uscita</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="253"/>
      <source>Allow server to download and play media</source>
      <translation>Consenti al server di scaricare/riprodurre file multimediali</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="256"/>
      <source>&lt;p&gt;This also needs GMCP to be enabled in the next group below.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Richiede anche che GMCP sia abilitato nel gruppo sottostante.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="305"/>
      <source>Enable MSP  (Mud Sound Protocol)</source>
      <translation>Abilita MSP  (Mud Sound Protocol)</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="501"/>
      <source>Highlights your input line text when scrolling through your history for easy cancellation</source>
      <translation>Evidenzia il testo della riga di input durante lo scorrimento della cronologia per facilitarne la cancellazione</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="504"/>
      <source>Highlight history</source>
      <translation>Evidenzia la cronologia</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="741"/>
      <source>This font is not monospace, which may not be ideal for playing some text games:
you can use it but there could be issues with aligning columns of text</source>
      <comment>Note that this text is split into two lines so that the message is not too wide in English, please do the same for other locales where the text is the same or longer</comment>
      <translation>Questo font non è monospaziato, perciò potrebbe non essere l'ideale per alcuni giochi testuali: è possibile utilizzarlo, ma potrebbero esserci problemi con l'allineamento delle colonne del testo</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1268"/>
      <source>Autocomplete Lua functions in code editor</source>
      <translation>Completamento automatico funzioni Lua nell'editor di codice</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1311"/>
      <source>&lt;p&gt;The foreground color used by default for the main console (unless changed by a lua command or the game server).&lt;/p&gt;</source>
      <translation>&lt;p&gt;Il colore del testo utilizzato per impostazione predefinita nella finestra principale (a meno che non sia modificato da un comando lua o dal server di gioco).&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1334"/>
      <source>&lt;p&gt;The background color used by default for the main console (unless changed by a lua command or the game server).&lt;/p&gt;</source>
      <translation>&lt;p&gt;Il colore di sfondo utilizzato per impostazione predefinita nella la finestra principale (a meno che non sia modificato da un comando lua o dal server di gioco).&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1354"/>
      <source>&lt;p&gt;The foreground color used for the main input area.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Il colore del testo utilizzato per l'area di inserimento principale.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1371"/>
      <source>&lt;p&gt;The background color used for the main input area.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Il colore di sfondo utilizzato per l'area di inserimento principale.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1388"/>
      <source>&lt;p&gt;The foreground color used for text sent to the game server.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Il colore utilizzato per il testo inviato al server di gioco.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1408"/>
      <source>&lt;p&gt;The background color used for text sent to the game server.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Il colore di sfondo utilizzato per il testo inviato al server di gioco.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1434"/>
      <source>These preferences set how you want a particular color to be represented visually in the main display:</source>
      <translation>Queste opzioni determinano come un colore è rappresentato nella finestra principale:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1444"/>
      <location filename="../src/ui/profile_preferences.ui" line="2262"/>
      <source>Black:</source>
      <translation>Nero:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1451"/>
      <source>ANSI Color Number 0</source>
      <translation>Colori ANSI Numero 0</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1464"/>
      <location filename="../src/ui/profile_preferences.ui" line="2279"/>
      <source>Light black:</source>
      <translation>Nero chiaro:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1471"/>
      <source>ANSI Color Number 8</source>
      <translation>Colori ANSI Numero 8</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1484"/>
      <location filename="../src/ui/profile_preferences.ui" line="2296"/>
      <source>Red:</source>
      <translation>Rosso:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1491"/>
      <source>ANSI Color Number 1</source>
      <translation>Colori ANSI Numero 1</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1504"/>
      <location filename="../src/ui/profile_preferences.ui" line="2313"/>
      <source>Light red:</source>
      <translation>Rosso chiaro:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1511"/>
      <source>ANSI Color Number 9</source>
      <translation>Colori ANSI Numero 9</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1524"/>
      <location filename="../src/ui/profile_preferences.ui" line="2330"/>
      <source>Green:</source>
      <translation>Verde:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1531"/>
      <source>ANSI Color Number 2</source>
      <translation>Colori ANSI Numero 2</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1544"/>
      <location filename="../src/ui/profile_preferences.ui" line="2347"/>
      <source>Light green:</source>
      <translation>Verde chiaro:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1551"/>
      <source>ANSI Color Number 10</source>
      <translation>Colori ANSI Numero 10</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1564"/>
      <location filename="../src/ui/profile_preferences.ui" line="2364"/>
      <source>Yellow:</source>
      <translation>Giallo:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1571"/>
      <source>ANSI Color Number 3</source>
      <translation>Colori ANSI Numero 3</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1584"/>
      <location filename="../src/ui/profile_preferences.ui" line="2381"/>
      <source>Light yellow:</source>
      <translation>Giallo chiaro:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1591"/>
      <source>ANSI Color Number 11</source>
      <translation>Colori ANSI Numero 11</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1604"/>
      <location filename="../src/ui/profile_preferences.ui" line="2398"/>
      <source>Blue:</source>
      <translation>Blu:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1611"/>
      <source>ANSI Color Number 4</source>
      <translation>Colori ANSI Numero 4</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1624"/>
      <location filename="../src/ui/profile_preferences.ui" line="2415"/>
      <source>Light blue:</source>
      <translation>Azzurro chiaro:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1631"/>
      <source>ANSI Color Number 12</source>
      <translation>Colori ANSI Numero 12</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1644"/>
      <location filename="../src/ui/profile_preferences.ui" line="2432"/>
      <source>Magenta:</source>
      <translation>Magenta:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1651"/>
      <source>ANSI Color Number 5</source>
      <translation>Colori ANSI Numero 5</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1664"/>
      <location filename="../src/ui/profile_preferences.ui" line="2449"/>
      <source>Light magenta:</source>
      <translation>Magenta chiaro:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1671"/>
      <source>ANSI Color Number 13</source>
      <translation>Colori ANSI Numero 13</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1684"/>
      <location filename="../src/ui/profile_preferences.ui" line="2466"/>
      <source>Cyan:</source>
      <translation>Ciano:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1691"/>
      <source>ANSI Color Number 6</source>
      <translation>Colori ANSI Numero 6</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1704"/>
      <location filename="../src/ui/profile_preferences.ui" line="2483"/>
      <source>Light cyan:</source>
      <translation>Ciano chiaro:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1711"/>
      <source>ANSI Color Number 14</source>
      <translation>Colori ANSI Numero 14</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1724"/>
      <location filename="../src/ui/profile_preferences.ui" line="2500"/>
      <source>White:</source>
      <translation>Bianco:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1731"/>
      <source>ANSI Color Number 7</source>
      <translation>Colori ANSI Numero 7</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1744"/>
      <location filename="../src/ui/profile_preferences.ui" line="2517"/>
      <source>Light white:</source>
      <translation>Bianco chiaro:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1751"/>
      <source>ANSI Color Number 15</source>
      <translation>Colori ANSI Numero 15</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1764"/>
      <location filename="../src/ui/profile_preferences.ui" line="2534"/>
      <source>Reset all colors to default</source>
      <translation>Ripristina i colori predefiniti</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1771"/>
      <source>&lt;p&gt;If this option is checked the Mud Server may send codes to change the above 16 colors or to reset them to their defaults by using standard ANSI &lt;tt&gt;OSC&lt;/tt&gt; Escape codes.&lt;/p&gt;&lt;p&gt;Specifically &lt;tt&gt;&amp;lt;OSC&amp;gt;Pirrggbb&amp;lt;ST&amp;gt;&lt;/tt&gt; will set the color with index &lt;i&gt;i&lt;/i&gt; to have the color with the given &lt;i&gt;rr&lt;/i&gt; red, &lt;i&gt;gg&lt;/i&gt; green and &lt;i&gt;bb&lt;/i&gt;  blue components where i is a single hex-digit (&apos;0&apos; to &apos;9&apos; or &apos;a&apos; to &apos;f&apos; or &apos;A&apos; to &apos;F&apos; to give a number between 0 an d15) and rr, gg and bb are two digit hex-digits numbers (between 0 to 255); &amp;lt;OSC&amp;gt; is &lt;i&gt;Operating System Command&lt;/i&gt; which is normally encoded as the ASCII &amp;lt;ESC&amp;gt; character followed by &lt;tt&gt;[&lt;/tt&gt; and &amp;lt;ST&amp;gt; is the &lt;i&gt;String Terminator&lt;/i&gt; which is normally encoded as the ASCII &amp;lt;ESC&amp;gt; character followed by &lt;tt&gt;\&lt;tt&gt;.&lt;/p&gt;&lt;p&gt;Conversely &lt;tt&gt;&amp;lt;OSC&amp;gt;R&amp;lt;ST&amp;gt;&lt;/tt&gt; will reset the colors to the defaults like the button to the right does.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Se attivi questa opzione il server di gioco può inviare appositi comandi, per variare le combinazioni dei 16 colori indicati qui sopra o per reimpostarle ai valori predefiniti, utilizzando il codice di escape dello standard ANSI &lt;tt&gt;OSC&lt;/tt&gt;.&lt;/p&gt;&lt;p&gt;In particolare &lt;tt&gt;&amp;lt;OSC&amp;gt;Pirrggbb&amp;lt;ST&amp;gt;&lt;/tt&gt; imposta il gruppo con indice &lt;i&gt;i&lt;/i&gt; al colore ottenibile mescolando &lt;i&gt;rr&lt;/i&gt; rosso, &lt;i&gt;gg&lt;/i&gt; verde e &lt;i&gt;bb&lt;/i&gt; blu. Il campo i che corrisponde ad un singolo valore esadecimale (da &apos;0&apos; a &apos;9&apos;, da &apos;a&apos; a &apos;f&apos; o da &apos;A&apos; a &apos;F&apos; ovvero un corrispondente numero decimale compreso tra 0 e 15) mentre rr, gg e bb sono valori esadecimali a due cifre (corrispondenti a un numero decimale compreso tra 0 e 255); &amp;lt;OSC&amp;gt; significa &lt;i&gt;Operating System Command&lt;/i&gt; che viene codificato come il carattere ASCII &amp;lt;ESC&amp;gt; seguito da &lt;tt&gt;[&lt;/tt&gt;. &amp;lt;ST&amp;gt; è il &lt;i&gt;Terminatore di Stringa&lt;/i&gt; che viene codificato come il carattere ASCII &amp;lt;ESC&amp;gt; seguito da &lt;tt&gt;\&lt;tt&gt;.&lt;/p&gt;&lt;p&gt;Invece&lt;tt&gt;&amp;lt;OSC&amp;gt;R&amp;lt;ST&amp;gt;&lt;/tt&gt; reimposta i colori ai valori predefiniti, come avviene premendo il bottone sulla destra.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1774"/>
      <source>Server allowed to redefine these colors</source>
      <translation>Autorizza il server del gioco a ridefinire questi colori</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1798"/>
      <source>Mapper</source>
      <translation>Mapper</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1804"/>
      <source>Map files</source>
      <translation>File di mappa</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1810"/>
      <source>Save your current map:</source>
      <translation>Salva la mappa corrente:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1820"/>
      <source>Press to choose location and save</source>
      <translation>Scegli dove salvare la mappa</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1827"/>
      <source>Load another map file in:</source>
      <translation>Carica un altro file di mappa in:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1837"/>
      <source>Press to choose file and load</source>
      <translation>Scegli il file da cui caricare la mappa</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1844"/>
      <source>&lt;p&gt;Mudlet now does some sanity checking and repairing to clean up issues that may have arisen in previous version due to faulty code or badly documented commands. However if significant problems are found the report can be quite extensive, in particular for larger maps.&lt;/p&gt;&lt;p&gt;Unless this option is set, Mudlet will reduce the amount of on-screen messages by hiding many texts and showing a suggestion to review the report file instead.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Mudlet ora esegue alcuni controlli e riparazioni per risolvere i problemi che potrebbero essere sorti nella versione precedente a causa di codice difettoso o comandi mal documentati. Tuttavia, se si riscontrano problemi significativi, il rapporto può essere piuttosto esteso, in particolare per i file di mappa più grandi.&lt;/p&gt;&lt;p&gt;A meno che questa opzione non sia impostata, Mudlet ridurrà la quantità di messaggi sullo schermo e mostrando un suggerimento per rivedere il file contenente il rapporto.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1928"/>
      <source>&lt;p&gt;Change this to a lower version if you need to save your map in a format that can be read by older versions of Mudlet. Doing so will lose the extra data available in the current map format&lt;/p&gt;</source>
      <translation>&lt;p&gt;Cambia la versione del tuo file di mappa in una inferiore, in modo che sia leggibile dalle versioni precedenti di Mudlet. Andranno persi i dati aggiuntivi disponibili nel formato di mappa corrente&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1958"/>
      <source>Download latest map provided by your game:</source>
      <translation>Scarica il file di mappa aggiornato fornito dal tuo gioco:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1987"/>
      <source>&lt;p&gt;This enables anti-aliasing (AA) for the 2D map view, making it look smoother and nicer. Disable this if you&apos;re on a very slow computer.&lt;/p&gt;&lt;p&gt;3D map view always has anti-aliasing enabled.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Questa opzione abilita l'anti-aliasing (AA) per la vista mappa 2D, rendendola più leggibile e bella. Disabilita questo se utilizzi un computer molto lento.&lt;/p&gt;&lt;p&gt;La vista mappa mappa 3D ha sempre l'opzione anti-aliasing abilitata.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1997"/>
      <source>&lt;p&gt;The default area (area id -1) is used by some mapper scripts as a temporary &apos;holding area&apos; for rooms before they&apos;re placed in the correct area&lt;/p&gt;</source>
      <translation>&lt;p&gt;L'area predefinita (Area Id -1) è utilizzata da alcuni script mapper come area temporanea &apos;per posizionare&apos; le stanze prima di &apos;salvarle nell'area corretta&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2049"/>
      <source>2D map player room marker style:</source>
      <translation>Simbolo della stanza del giocatore nella mappa 2D:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2059"/>
      <source>Outer ring color</source>
      <translation>Colore esterno del cerchio</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2069"/>
      <source>Inner ring color</source>
      <translation>Colore interno del cerchio</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2083"/>
      <source>Original</source>
      <translation>Originale</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2088"/>
      <source>Red ring</source>
      <translation>Cerchio rosso</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2093"/>
      <source>Blue/Yellow ring</source>
      <translation>Cerchio blu/giallo</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2098"/>
      <source>Custom ring</source>
      <translation>Cerchio personalizzato</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2106"/>
      <source>&lt;p&gt;Percentage ratio (&lt;i&gt;the default is 120%&lt;/i&gt;) of the marker symbol to the space available for the room.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Rapporto percentuale (&lt;i&gt;il valore predefinito è 120%&lt;/i&gt;) del simbolo rispetto allo spazio disponibile per la stanza.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2112"/>
      <location filename="../src/ui/profile_preferences.ui" line="2140"/>
      <source>%</source>
      <translation>%</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2115"/>
      <source>Outer diameter: </source>
      <translation>Diametro esterno: </translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2134"/>
      <source>&lt;p&gt;Percentage ratio of the inner diameter of the marker symbol to the outer one (&lt;i&gt;the default is 70%&lt;/i&gt;).&lt;/p&gt;</source>
      <translation>&lt;p&gt;Rapporto percentuale tra il diametro interno del simbolo e quello esterno (&lt;i&gt;il valore predefinito è 70%&lt;/i&gt;).&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2143"/>
      <source>Inner diameter: </source>
      <translation>Diametro interno: </translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2159"/>
      <source>&lt;p&gt;This enables borders around room. Color can be set in Mapper colors tab&lt;/p&gt;</source>
      <translation>&lt;p&gt;Permette di delimitare i bordi attorno ad una stanza. Il colore può essere impostato nella scheda colori Mapper&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2162"/>
      <source>Show room borders</source>
      <translation>Mostra bordo stanze</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2238"/>
      <source>Room border color:</source>
      <translation>Colore bordo stanze:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2558"/>
      <source>Chat</source>
      <translation>Chat</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3250"/>
      <source>Special options needed for some older game drivers (needs client restart to take effect)</source>
      <translation>Opzioni avanzate utilizzate da alcuni vecchi giochi (è necessario il riavvio di Mudlet)</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3288"/>
      <source>Force CHARSET negotiation off</source>
      <translation>Forza la negoziazione del CHARSET disattiva</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3390"/>
      <source>the computer&apos;s password manager (secure)</source>
      <translation>il gestore di password del computer (sicuro)</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3395"/>
      <source>plaintext with the profile (portable)</source>
      <translation>testo in chiaro nel profilo (portabile)</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3486"/>
      <source>&lt;p&gt;If checked this will cause all problem Unicode codepoints to be reported in the debug output as they occur; if cleared then each different one will only be reported once and summarized in as a table when the console in which they occurred is finally destroyed (when the profile is closed).&lt;/p&gt;</source>
      <translation>&lt;p&gt;Quando l'opzione è attiva tutti i problemi con la mappa caratteri Unicode saranno segnalati nella finestra di debug appena si verificano; se disattiva ogni problema sarà segnalato una sola volta e riassunto in una tabella mostrata quando la console in cui si verifica viene distrutta (ovvero quando il profilo viene chiuso).&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3372"/>
      <source>&lt;p&gt;Some MUDs use a flawed interpretation of the ANSI Set Graphics Rendition (&lt;b&gt;SGR&lt;/b&gt;) code sequences for 16M color mode which only uses semi-colons and not colons to separate parameter elements i.e. instead of using a code in the form: &lt;br&gt;&lt;tt&gt;\e[&lt;/tt&gt;...&lt;tt&gt;38:2:&lt;/tt&gt;&amp;lt;Color Space Id&amp;gt;&lt;tt&gt;:&lt;/tt&gt;&amp;lt;Red&amp;gt;&lt;tt&gt;:&lt;/tt&gt;&amp;lt;Green&amp;gt;&lt;tt&gt;:&lt;/tt&gt;&amp;lt;Blue&amp;gt;&lt;tt&gt;:&lt;/tt&gt;&amp;lt;Unused&amp;gt;&lt;tt&gt;:&lt;/tt&gt;&amp;lt;Tolerance&amp;gt;&lt;tt&gt;:&lt;/tt&gt;&amp;lt;Tolerance Color Space (0=CIELUV; 1=CIELAB)&amp;gt;&lt;tt&gt;;&lt;/tt&gt;...&lt;tt&gt;m&lt;/tt&gt;&lt;br&gt;where the &lt;i&gt;Color Space Id&lt;/i&gt; is expected to be an empty string to specify the usual (default) case and all of the &lt;i&gt;Parameter Elements&lt;/i&gt; (the &quot;2&quot; and the values in the &lt;tt&gt;&amp;lt;...&amp;gt;&lt;/tt&gt;s) may, technically, be omitted; they use: &lt;br&gt;&lt;tt&gt;\e[&lt;/tt&gt;...&lt;tt&gt;38;2;&lt;/tt&gt;&amp;lt;Red&amp;gt;&lt;tt&gt;;&lt;/tt&gt;&amp;lt;Green&amp;gt;&lt;tt&gt;;&lt;/tt&gt;&amp;lt;Blue&amp;gt;&lt;tt&gt;;&lt;/tt&gt;...&lt;tt&gt;m&lt;/tt&gt;&lt;br&gt;or: &lt;br&gt;&lt;tt&gt;\e[&lt;/tt&gt;...&lt;tt&gt;38;2;&lt;/tt&gt;&amp;lt;Color Space Id&amp;gt;&lt;tt&gt;;&lt;/tt&gt;&amp;lt;Red&amp;gt;&lt;tt&gt;;&lt;/tt&gt;&amp;lt;Green&amp;gt;&lt;tt&gt;;&lt;/tt&gt;&amp;lt;Blue&amp;gt;&lt;tt&gt;;&lt;/tt&gt;...&lt;tt&gt;m&lt;/tt&gt;&lt;/p&gt;&lt;p&gt;It is not possible to reliably detect the difference between these two so checking this option causes Mudlet to expect the last one with the additional (but empty!) parameter.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3375"/>
      <source>Expect Color Space Id in SGR...(3|4)8;2;...m codes</source>
      <translation>Gestisci lo spazio color in SGR...(3|4)8:2;...m codes</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3382"/>
      <source>Store character login passwords in:</source>
      <translation>Memorizza le password di accesso in:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3408"/>
      <source>TextLabel</source>
      <translation>TextLabel</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2816"/>
      <source>TLS/SSL secure connection</source>
      <translation>Connessione sicura TLS/SSL</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3120"/>
      <source>Accept self-signed certificates</source>
      <translation>Accetta certificati autofirmati</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3130"/>
      <source>Accept expired certificates</source>
      <translation>Accetta certificati scaduti</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2834"/>
      <source>Certificate</source>
      <translation>Certificato</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2894"/>
      <source>Serial:</source>
      <translation>Seriale:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2843"/>
      <source>Issuer:</source>
      <translation>Emittente:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2860"/>
      <source>Issued to:</source>
      <translation>Rilasciato a:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2877"/>
      <source>Expires:</source>
      <translation>Scadenza:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3140"/>
      <source>Accept all certificate errors       (unsecure)</source>
      <translation>Accetta tutti gli errori del certificato (sconsigliato)</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1847"/>
      <source>Report map issues on screen</source>
      <translation>Segnala sullo schermo i problemi del file di mappa</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1861"/>
      <source>Copy map to other profile(s):</source>
      <translation>Copia il file di mappa in altri profili:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1877"/>
      <source>Press to pick destination(s)</source>
      <translation>Clicca per selezionare la destinazione</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1890"/>
      <source>Copy to destination(s)</source>
      <translation>Copia nella destinazione</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1902"/>
      <source>An action above happened</source>
      <translation>Un'azione di quelle sopra è accaduta</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1909"/>
      <source>Map format version:</source>
      <translation>Versione file di mappa:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1934"/>
      <location filename="../src/ui/profile_preferences.ui" line="1938"/>
      <source># {default version}</source>
      <translation># {versione predefinita}</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1949"/>
      <source>Map download</source>
      <translation>Download mappa</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1971"/>
      <source>Download</source>
      <translation>Download</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1981"/>
      <source>Map view</source>
      <translation>Visualizzazione mappa</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2010"/>
      <source>2D Map Room Symbol Font</source>
      <translation>Carattere dei simboli per le mappe 2D</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1990"/>
      <source>Use high quality graphics in 2D view</source>
      <translation>Utilizza grafica in alta qualità per la vista 2D</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="184"/>
      <source>&lt;p&gt;Can you help translate Mudlet?&lt;/p&gt;&lt;p&gt;If so, please visit: &lt;b&gt;https://www.mudlet.org/translate&lt;/b&gt;.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Vuoi aiutare a tradurre Mudlet?&lt;/p&gt;&lt;p&gt;visita: &lt;b&gt;https://www.mudlet.org/translate&lt;/b&gt;.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1874"/>
      <source>&lt;p&gt;Select profiles that you want to copy map to, then press the Copy button to the right&lt;/p&gt;</source>
      <translation>&lt;p&gt;Seleziona i profili in cui si desidera copiare il file di mappa, poi premi il bottone Copia a destra&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1887"/>
      <source>&lt;p&gt;Copy map into the selected profiles on the left&lt;/p&gt;</source>
      <translation>&lt;p&gt;Copia il file di mappa nei profili selezionati a sinistra&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1955"/>
      <location filename="../src/ui/profile_preferences.ui" line="1968"/>
      <source>&lt;p&gt;On games that provide maps for download, you can press this button to get the latest map. Note that this will &lt;span style=&quot; font-weight:600;&quot;&gt;overwrite&lt;/span&gt; any changes you&apos;ve done to your map, and will use the new map only&lt;/p&gt;</source>
      <translation>&lt;p&gt;Nei giochi che mettono a disposizione file di mappa per il download, puoi utilizzare questo bottone per scaricarne l'ultima versione. Nota: questa operazione &lt;span style=&quot; font-weight:600;&quot;&gt;sovrascrive&lt;/span&gt; ogni cambiamento che hai effettuato sui tuoi file di mappa.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2000"/>
      <source>Show the default area in map area selection</source>
      <translation>Mostra l'area predefinita nella scelta mappa</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2020"/>
      <source>Only use symbols (glyphs) from chosen font</source>
      <translation>Utilizza solo simboli (glifi) dal carattere selezionato</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2027"/>
      <source>Show symbol usage...</source>
      <translation>Mostra utilizzo simboli...</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2189"/>
      <source>Mapper colors</source>
      <translation>Colori Mapper</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2195"/>
      <source>Select your color preferences for the map display</source>
      <translation>Seleziona le preferenze di colore per la mappa</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2201"/>
      <source>Link color</source>
      <translation>Colore dei link</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2221"/>
      <source>Background color:</source>
      <translation>Colore di sfondo:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3244"/>
      <source>Special Options</source>
      <translation>Opzioni avanzate</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3256"/>
      <source>Force compression off</source>
      <translation>Forza compressione disattivata</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3274"/>
      <source>Force telnet GA signal interpretation off</source>
      <translation>Forza l'interpretazione del segnale telnet GA disattivata</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3263"/>
      <source>This option adds a line line break &lt;LF&gt; or &quot;
&quot; to your command input on empty commands. This option will rarely be necessary.</source>
      <translation>Questa opzione aggiunge un ritorno a capo &lt;LF&gt; o &quot;
&quot; al comando inviato al gioco in caso sia vuoto. Quest'opzione è utilizzata solo raramente.</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3267"/>
      <source>Force new line on empty commands</source>
      <translation>Forza la nuova linea sui comandi vuoti</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3281"/>
      <source>Force MXP negotiation off</source>
      <translation>Forza la negoziazione MXP disattiva</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2635"/>
      <source>Discord privacy</source>
      <translation>Privacy di Discord</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2668"/>
      <source>Don&apos;t hide small icon or tooltip</source>
      <translation>Non nascondere le icone piccole e i suggerimenti</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2673"/>
      <source>Hide small icon tooltip</source>
      <translation>Nascondi i suggerimenti delle icone piccole</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2678"/>
      <source>Hide small icon and tooltip</source>
      <translation>Nascondi le icone piccole e i suggerimenti</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2700"/>
      <source>Hide timer</source>
      <translation>Nascondi timer</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2723"/>
      <location filename="../src/ui/profile_preferences.ui" line="2736"/>
      <location filename="../src/ui/profile_preferences.ui" line="2752"/>
      <location filename="../src/ui/profile_preferences.ui" line="2768"/>
      <source>&lt;p&gt;Mudlet will only show Rich Presence information while you use this Discord username (useful if you have multiple Discord accounts). Leave empty to show it for any Discord account you log in to.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Mudlet mostrerà le informazioni estese sulla presenza quando utilizzi questo nome utente Discord (utile se si dispone di account Discord multipli). Lascia vuoto per mostrare le informazioni per qualsiasi account di Discord di cui si esegue il login.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2729"/>
      <source>Restrict to:</source>
      <translation>Limita a:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2642"/>
      <source>Don&apos;t hide large icon or tooltip</source>
      <translation>Non nascondere le icone grandi e i suggerimenti</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2647"/>
      <source>Hide large icon tooltip</source>
      <translation>Nascondi la descrizione delle icone grandi</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2652"/>
      <source>Hide large icon and tooltip</source>
      <translation>Nascondi la descrizione e le icone grandi</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2707"/>
      <source>&lt;p&gt;Allow Lua to set Discord status&lt;/p&gt;</source>
      <translation>&lt;p&gt;Consenti a Lua di impostare lo stato Discord&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2710"/>
      <source>Enable Lua API</source>
      <translation>Abilita API Lua</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2742"/>
      <source>specific Discord username</source>
      <translation>specifica il tuo nome utente Discord</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2686"/>
      <source>Hide state</source>
      <translation>Nascondi stato</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2693"/>
      <source>Hide party details</source>
      <translation>Nascondi dettagli del gruppo</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2660"/>
      <source>Hide detail</source>
      <translation>Nascondi dettagli</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2564"/>
      <source>IRC client options</source>
      <translation>Opzioni client IRC</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2580"/>
      <source>irc.example.net</source>
      <translation>irc.example.net</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2587"/>
      <source>Port:</source>
      <translation>Porta:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2625"/>
      <source>#channel1 #channel2 #etc...</source>
      <translation>#canale1 #channel2 #ecc...</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2611"/>
      <source>MudletUser123</source>
      <translation>MudletUser123</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2570"/>
      <source>Server address:</source>
      <translation>Indirizzo server:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2618"/>
      <source>Auto-join channels: </source>
      <translation>Canali join automatico: </translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2604"/>
      <source>Nickname:</source>
      <translation>Nickname:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2597"/>
      <source>6667</source>
      <translation>6667</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3338"/>
      <source>Search Engine</source>
      <translation>Motori di Ricerca</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3322"/>
      <source>Mudlet updates</source>
      <translation>Aggiornamenti Mudlet</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3328"/>
      <source>Disable automatic updates</source>
      <translation>Disabilita aggiornamenti automatici</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3350"/>
      <source>Other Special options</source>
      <translation>Altre opzioni Speciali</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3356"/>
      <source>Show icons on menus</source>
      <translation>Mostra le icone nei menu</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2810"/>
      <source>Connection</source>
      <translation>Connessione</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3150"/>
      <source>Connect to the game via proxy</source>
      <translation>Connettiti al gioco tramite proxy</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3165"/>
      <source>Address</source>
      <translation>Indirizzo</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3185"/>
      <source>port</source>
      <translation>porta</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3195"/>
      <source>Username for logging into the proxy if requred</source>
      <translation>Nome utente per accedere al proxy se richiesto</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3201"/>
      <source>username (optional)</source>
      <translation>nome utente (opzionale)</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3211"/>
      <source>Password for logging into the proxy if requred</source>
      <translation>Password per accedere al proxy se richiesto</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3217"/>
      <source>password (optional)</source>
      <translation>password (opzionale)</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3436"/>
      <source>Show debug messages for timers not smaller than:</source>
      <translation>Mostra i messaggi di debug per i timer non inferiori di:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3442"/>
      <source>&lt;p&gt;Show &apos;LUA OK&apos; messages for Timers with the specified minimum interval (h:mm:ss.zzz), the minimum value (the default) shows all such messages but can render the &lt;i&gt;Central Debug Console&lt;/i&gt; useless if there is a very small interval timer running.&lt;/p&gt;</source>
      <comment>The term in &apos;...&apos; refer to a Mudlet specific thing and ought to match the corresponding translation elsewhere.</comment>
      <translation>&lt;p&gt;Mostra il messaggio &apos;LUA OK&apos; per Timer con l'intervallo minimo (h:mm:ss.zzz). Il valore minimo (predefinito) mostra tutti questi messaggi, ma può rendere inutilizzabile la &lt;i&gt;Console Centrale di Debug&lt;/i&gt; se c'è un timer con intervallo molto piccolo in funzione.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3483"/>
      <source>Report all Codepoint problems immediately</source>
      <translation>Segnala immediatamente tutti i problemi della mappa caratteri</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3541"/>
      <source>Save</source>
      <translation>Salva</translation>
    </message>
  </context>
  <context>
    <name>room_exits</name>
    <message>
      <location filename="../src/ui/room_exits.ui" line="37"/>
      <source>General exits:</source>
      <translation>Uscite:</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="96"/>
      <source>NW exit...</source>
      <translation>Uscita NO...</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="106"/>
      <location filename="../src/ui/room_exits.ui" line="246"/>
      <location filename="../src/ui/room_exits.ui" line="386"/>
      <location filename="../src/ui/room_exits.ui" line="526"/>
      <location filename="../src/ui/room_exits.ui" line="669"/>
      <location filename="../src/ui/room_exits.ui" line="876"/>
      <location filename="../src/ui/room_exits.ui" line="1013"/>
      <location filename="../src/ui/room_exits.ui" line="1171"/>
      <location filename="../src/ui/room_exits.ui" line="1311"/>
      <location filename="../src/ui/room_exits.ui" line="1451"/>
      <location filename="../src/ui/room_exits.ui" line="1591"/>
      <location filename="../src/ui/room_exits.ui" line="1731"/>
      <source>&lt;p&gt;Set to a positive value to override the default (Room) Weight for using this Exit route, zero value assigns the default.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Imposta un valore numerico positivo per sovrascrivere il peso dell'uscita della stanza. Il valore zero ripristina il valore predefinito.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="236"/>
      <source>N exit...</source>
      <translation>Uscita N...</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="376"/>
      <source>NE exit...</source>
      <translation>Uscita NE...</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="516"/>
      <source>Up exit...</source>
      <translation>Uscita Alto...</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="659"/>
      <source>W exit...</source>
      <translation>Uscita O...</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="767"/>
      <source>ID:</source>
      <translation>ID:</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="790"/>
      <source>Weight:</source>
      <translation>Peso:</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="866"/>
      <source>E exit...</source>
      <translation>Uscita E...</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1003"/>
      <source>Down exit...</source>
      <translation>Uscita in basso...</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1155"/>
      <source>SW exit...</source>
      <translation>Uscita SO...</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1301"/>
      <source>S exit...</source>
      <translation>Uscita S...</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1441"/>
      <source>SE exit...</source>
      <translation>Uscita SE...</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1581"/>
      <source>In exit...</source>
      <translation>In ingresso...</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1721"/>
      <source>Out exit...</source>
      <translation>In uscita...</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1826"/>
      <source>Key:</source>
      <translation>Chiave:</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1844"/>
      <source>No route</source>
      <translation>Nessun percorso</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1859"/>
      <source>Stub Exit</source>
      <translation>Uscita temporanea</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="67"/>
      <location filename="../src/ui/room_exits.ui" line="207"/>
      <location filename="../src/ui/room_exits.ui" line="347"/>
      <location filename="../src/ui/room_exits.ui" line="487"/>
      <location filename="../src/ui/room_exits.ui" line="627"/>
      <location filename="../src/ui/room_exits.ui" line="837"/>
      <location filename="../src/ui/room_exits.ui" line="974"/>
      <location filename="../src/ui/room_exits.ui" line="1120"/>
      <location filename="../src/ui/room_exits.ui" line="1272"/>
      <location filename="../src/ui/room_exits.ui" line="1412"/>
      <location filename="../src/ui/room_exits.ui" line="1552"/>
      <location filename="../src/ui/room_exits.ui" line="1692"/>
      <location filename="../src/ui/room_exits.ui" line="2057"/>
      <source>&lt;p&gt;Prevent a route being created via this exit, equivalent to an infinite exit weight.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Impedisci l'utilizzo di questa uscita per creare un percorso, equivale a un uscita di peso infinito.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="83"/>
      <location filename="../src/ui/room_exits.ui" line="223"/>
      <location filename="../src/ui/room_exits.ui" line="363"/>
      <location filename="../src/ui/room_exits.ui" line="503"/>
      <location filename="../src/ui/room_exits.ui" line="643"/>
      <location filename="../src/ui/room_exits.ui" line="853"/>
      <location filename="../src/ui/room_exits.ui" line="990"/>
      <location filename="../src/ui/room_exits.ui" line="1142"/>
      <location filename="../src/ui/room_exits.ui" line="1288"/>
      <location filename="../src/ui/room_exits.ui" line="1428"/>
      <location filename="../src/ui/room_exits.ui" line="1568"/>
      <location filename="../src/ui/room_exits.ui" line="1708"/>
      <source>&lt;p&gt;Create an exit in this direction with unknown destination, mutually exclusive with an actual exit roomID.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Crea un'uscita in questa direzione con destinazione sconosciuta, non è impossibile impostare un'uscita con StanzaID.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="93"/>
      <source>&lt;p&gt;Set the number of the room northwest of this one, will be blue for a valid number or red for invalid.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Imposta il numero della stanza a nord-ovest rispetto a quella selezionata, il colore di sfondo diventerà blu se il numero inserito è valido o rosso in caso non lo sia.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="119"/>
      <location filename="../src/ui/room_exits.ui" line="259"/>
      <location filename="../src/ui/room_exits.ui" line="399"/>
      <location filename="../src/ui/room_exits.ui" line="539"/>
      <location filename="../src/ui/room_exits.ui" line="682"/>
      <location filename="../src/ui/room_exits.ui" line="886"/>
      <location filename="../src/ui/room_exits.ui" line="1026"/>
      <location filename="../src/ui/room_exits.ui" line="1184"/>
      <location filename="../src/ui/room_exits.ui" line="1324"/>
      <location filename="../src/ui/room_exits.ui" line="1464"/>
      <location filename="../src/ui/room_exits.ui" line="1604"/>
      <location filename="../src/ui/room_exits.ui" line="1744"/>
      <source>&lt;p&gt;No door symbol is drawn on 2D Map for this exit.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Nessun simbolo è disegnato sulla Mappa 2D per questa uscita.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="138"/>
      <location filename="../src/ui/room_exits.ui" line="278"/>
      <location filename="../src/ui/room_exits.ui" line="418"/>
      <location filename="../src/ui/room_exits.ui" line="701"/>
      <location filename="../src/ui/room_exits.ui" line="905"/>
      <location filename="../src/ui/room_exits.ui" line="1203"/>
      <location filename="../src/ui/room_exits.ui" line="1343"/>
      <location filename="../src/ui/room_exits.ui" line="1483"/>
      <source>&lt;p&gt;Green (Open) door symbol is drawn on 2D Map, can be set on either a stub or a real exit.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Il simbolo porta di colore verde (Aperto) viene disegnato sulla Mappa 2D, può essere impostato sia per le uscite reali che per quelle stub.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="154"/>
      <location filename="../src/ui/room_exits.ui" line="294"/>
      <location filename="../src/ui/room_exits.ui" line="434"/>
      <location filename="../src/ui/room_exits.ui" line="717"/>
      <location filename="../src/ui/room_exits.ui" line="921"/>
      <location filename="../src/ui/room_exits.ui" line="1219"/>
      <location filename="../src/ui/room_exits.ui" line="1359"/>
      <location filename="../src/ui/room_exits.ui" line="1499"/>
      <source>&lt;p&gt;Orange (Closed) door symbol is drawn on 2D Map, can be set on either a stub or a real exit.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Il simbolo porta di colore arancio (Chiuso) viene disegnato sulla Mappa 2D, può essere impostato sia per le uscite reali che per quelle stub.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="170"/>
      <location filename="../src/ui/room_exits.ui" line="310"/>
      <location filename="../src/ui/room_exits.ui" line="450"/>
      <location filename="../src/ui/room_exits.ui" line="733"/>
      <location filename="../src/ui/room_exits.ui" line="937"/>
      <location filename="../src/ui/room_exits.ui" line="1235"/>
      <location filename="../src/ui/room_exits.ui" line="1375"/>
      <location filename="../src/ui/room_exits.ui" line="1515"/>
      <source>&lt;p&gt;Red (Locked) door symbol is drawn on 2D Map, can be set on either a stub or a real exit.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Il simbolo porta di colore rosso (Bloccato) viene disegnato sulla Mappa 2D, può essere impostato sia per le uscite reali che per quelle stub.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="233"/>
      <source>&lt;p&gt;Set the number of the room north of this one, will be blue for a valid number or red for invalid.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Imposta il numero della stanza a nord rispetto a quella selezionata, il colore di sfondo diventerà blu se il numero inserito è valido o rosso in caso non lo sia.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="373"/>
      <source>&lt;p&gt;Set the number of the room northeast of this one, will be blue for a valid number or red for invalid.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Imposta il numero della stanza a nord-est rispetto a quella selezionata, il colore di sfondo diventerà blu se il numero inserito è valido o rosso in caso non lo sia.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="513"/>
      <source>&lt;p&gt;Set the number of the room up from this one, will be blue for a valid number or red for invalid.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Imposta il numero della stanza in alto rispetto a quella selezionata, il colore di sfondo diventerà blu se il numero inserito è valido o rosso in caso non lo sia.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="558"/>
      <location filename="../src/ui/room_exits.ui" line="1045"/>
      <location filename="../src/ui/room_exits.ui" line="1623"/>
      <location filename="../src/ui/room_exits.ui" line="1763"/>
      <source>&lt;p&gt;A symbol is drawn with a green (Open) fill color on 2D Map, can be set on either a stub or a real exit.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Il simbolo viene disegnato in verde (Aperto) sulla Mappa 2D, può essere impostato sia per le uscite reali che per quelle stub.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="574"/>
      <location filename="../src/ui/room_exits.ui" line="1061"/>
      <location filename="../src/ui/room_exits.ui" line="1639"/>
      <location filename="../src/ui/room_exits.ui" line="1779"/>
      <source>&lt;p&gt;A symbol is drawn with an orange (Closed) fill color on 2D Map, can be set on either a stub or a real exit.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Il simbolo viene disegnato in arancio (Chiuso) sulla Mappa 2D, può essere impostato sia per le uscite reali che per quelle stub.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="590"/>
      <location filename="../src/ui/room_exits.ui" line="1077"/>
      <location filename="../src/ui/room_exits.ui" line="1655"/>
      <location filename="../src/ui/room_exits.ui" line="1795"/>
      <source>&lt;p&gt;A symbol is drawn with a red (Locked) fill color on 2D Map, can be set on either a stub or a real exit.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Il simbolo viene disegnato in rosso (Bloccato) sulla Mappa 2D, può essere impostato sia per le uscite reali che per quelle stub.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="653"/>
      <source>&lt;p&gt;Set the number of the room west of this one, will be blue for a valid number or red for invalid.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Imposta il numero della stanza a ovest rispetto a quella selezionata, il colore di sfondo diventerà blu se il numero inserito è valido o rosso in caso non lo sia.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="780"/>
      <source>&lt;p&gt;This is the Room ID Number for this room - it cannot be changed here!</source>
      <translation>&lt;p&gt;Questo è il numero Stanza ID per questa stanza - non può essere cambiato qui!</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="803"/>
      <source>&lt;p&gt;This is the default weight for this room, which will be used for any exit &lt;i&gt;that leads to &lt;u&gt;this room&lt;/u&gt;&lt;/i&gt; which does not have its own value set - this value cannot be changed here.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Questo è il peso predefinito per questa stanza, verrà utilizzato per qualsiasi uscita &lt;i&gt;che porta a &lt;u&gt;questa stanza&lt;/u&gt;&lt;/i&gt; che non ha un proprio valore impostato - non puoi modificare il peso da questa finestra.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="863"/>
      <source>&lt;p&gt;Set the number of the room east of this one, will be blue for a valid number or red for invalid.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Imposta il numero della stanza a est rispetto a quella selezionata, il colore di sfondo diventerà blu se il numero inserito è valido o rosso in caso non lo sia.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1000"/>
      <source>&lt;p&gt;Set the number of the room down from this one, will be blue for a valid number or red for invalid.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Imposta il numero della stanza in basso rispetto a quella selezionata, il colore di sfondo diventerà blu se il numero inserito è valido o rosso in caso non lo sia.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1152"/>
      <source>&lt;p&gt;Set the number of the room southwest of this one, will be blue for a valid number or red for invalid.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Imposta il numero della stanza a sud-ovest rispetto a quella selezionata, il colore di sfondo diventerà blu se il numero inserito è valido o rosso in caso non lo sia.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1298"/>
      <source>&lt;p&gt;Set the number of the room south of this one, will be blue for a valid number or red for invalid.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Imposta il numero della stanza a sud rispetto a quella selezionata, il colore di sfondo diventerà blu se il numero inserito è valido o rosso in caso non lo sia.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1438"/>
      <source>&lt;p&gt;Set the number of the room southeast of this one, will be blue for a valid number or red for invalid.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Imposta il numero della stanza a sud-est rispetto a quella selezionata, il colore di sfondo diventerà blu se il numero inserito è valido o rosso in caso non lo sia.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1578"/>
      <source>&lt;p&gt;Set the number of the room in from this one, will be blue for a valid number or red for invalid.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Imposta il numero della stanza in ingresso rispetto a quella selezionata, il colore di sfondo diventerà blu se il numero inserito è valido o rosso in caso non lo sia.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1718"/>
      <source>&lt;p&gt;Set the number of the room out from this one, will be blue for a valid number or red for invalid.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Imposta il numero della stanza in uscita rispetto a quella selezionata, il colore di sfondo diventerà blu se il numero inserito è valido o rosso in caso non lo sia.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1871"/>
      <source>&lt;p&gt;Set the number of the room that&apos;s to the southwest here.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Imposta il numero della stanza a sud-ovest rispetto a quella selezionata, il colore di sfondo diventerà blu se il numero inserito è valido o rosso in caso non lo sia.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1874"/>
      <source>Exit RoomID number</source>
      <translation>StanzaID uscita</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1901"/>
      <source>No door</source>
      <translation>Nessuna porta</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1916"/>
      <source>Open door</source>
      <translation>Porta aperta</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1928"/>
      <source>Closed door</source>
      <translation>Porta chiusa</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1940"/>
      <source>Locked door</source>
      <translation>Porta bloccata</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1975"/>
      <source>&lt;p&gt;Use this button to save any changes, will also remove any invalid Special exits.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Utilizza questo bottone per salvare le modifiche, eliminerà anche le eventuali uscite speciali non valide.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1991"/>
      <source>&lt;p&gt;Use this button to close the dialogue without changing anything.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Utilizza questo bottone per chiudere la finestra di dialogo senza salvare nulla.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2010"/>
      <source>&lt;p&gt;Click on an item to edit/change it, to DELETE a Special Exit set its Exit Room ID to zero.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Fai clic su un elemento per poterlo modificare, per CANCELLARE un uscita speciale imposta Stanza ID a zero.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2048"/>
      <source>&lt;p&gt;Set the number of the room that this exit leads to, if set to zero the exit will be removed on saving the exits.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Imposta il numero della stanza a cui l'uscita si riferisce, se l'uscita è impostato a zero sarà rimossa al salvataggio.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2075"/>
      <source>&lt;p&gt;No door symbol is drawn on 2D Map for this exit (only functional choice currently).&lt;/p&gt;</source>
      <translation>&lt;p&gt;Nessuna porta è disegnato sulla Mappa 2D per questa uscita (attualmente ha solo un utilizzo funzionale).&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2084"/>
      <source>&lt;p&gt;Green (Open) door symbol would be drawn on 2D Map (but not currently).&lt;/p&gt;</source>
      <translation>&lt;p&gt;Il simbolo porta di colore Verde (Aperto) dovrebbe essere disegnato sulla mappa 2D (ma non al momento).&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2093"/>
      <source>&lt;p&gt;Orange (Closed) door symbol would be drawn on 2D Map (but not currently).&lt;/p&gt;</source>
      <translation>&lt;p&gt;Il simbolo porta di colore Arancio (Chiuso) dovrebbe essere disegnato sulla mappa 2D (ma non al momento).&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2102"/>
      <source>&lt;p&gt;Red (Locked) door symbol would be drawn on 2D Map (but not currently).&lt;/p&gt;</source>
      <translation>&lt;p&gt;Il simbolo porta di colore Rosso (Bloccato) dovrebbe essere disegnato sulla mappa 2D (ma non al momento).&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2111"/>
      <source>&lt;p&gt;(Lua scripts need to be prefixed with &quot;script:&quot;).&lt;/p&gt;</source>
      <translation>&lt;p&gt;(Gli script Lua devono essere preceduti dalla parola chiave &quot;script:&quot;).&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2128"/>
      <source>&lt;p&gt;Add an empty item to Special exits to be edited as required.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Aggiungi un elemento vuoto da modificare alle uscite speciali.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2147"/>
      <source>&lt;p&gt;Press this button to deactivate the selection of a Special exit.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Premi questo pulsante per disattivare la selezione di un'uscita speciale.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1978"/>
      <source>&amp;Save</source>
      <translation>&amp;Salva</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1886"/>
      <source>Exit Weight (0=No override)</source>
      <translation>Peso dell'uscita (0 = Nessun valore)</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1994"/>
      <source>&amp;Cancel</source>
      <translation>&amp;Annulla</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2001"/>
      <source>Special exits:</source>
      <translation>Uscite speciali:</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2044"/>
      <source>Exit
Room ID</source>
      <translation>Uscita
ID Stanza</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2053"/>
      <source>No
Route</source>
      <translation>Nessun
Percorso</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2062"/>
      <source>Exit
Weight</source>
      <translation>Uscita
Peso</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2066"/>
      <source>&lt;p&gt;Set to a positive integer value to override the default (Room) Weight for using this Exit route, a zero value assigns the default.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Imposta un valore numerico positivo per sovrascrivere il peso dell'uscita della stanza. Il valore zero ripristina il valore predefinito.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2071"/>
      <source>Door
None</source>
      <translation>Porte
Nessuna</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2080"/>
      <source>Door
Open</source>
      <translation>Porta
Aperta</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2089"/>
      <source>Door
Closed</source>
      <translation>Porta
Chiusa</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2098"/>
      <source>Door
Locked</source>
      <translation>Porta
Bloccata</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2107"/>
      <source>Command
or LUA script</source>
      <translation>Comando
o script LUA</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2131"/>
      <source>&amp;Add special exit</source>
      <translation>&amp;Aggiungi uscita speciale</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2150"/>
      <source>&amp;End S. Exits editing</source>
      <translation>T&amp;ermina mod. Uscita S.</translation>
    </message>
  </context>
  <context>
    <name>room_symbol</name>
    <message>
      <location filename="../src/ui/room_symbol.ui" line="14"/>
      <location filename="../src/ui/room_symbol.ui" line="112"/>
      <source>Room symbol</source>
      <translation>Simbolo stanza</translation>
    </message>
    <message>
      <location filename="../src/ui/room_symbol.ui" line="141"/>
      <source>Color of to use for the room symbol(s)</source>
      <translation>Colore da utilizzare per il simbolo della stanza</translation>
    </message>
    <message>
      <location filename="../src/ui/room_symbol.ui" line="147"/>
      <source>Symbol color</source>
      <translation>Colore simbolo</translation>
    </message>
    <message>
      <location filename="../src/ui/room_symbol.ui" line="154"/>
      <source>Reset</source>
      <translation>Azzera</translation>
    </message>
  </context>
  <context>
    <name>scripts_main_area</name>
    <message>
      <location filename="../src/ui/scripts_main_area.ui" line="23"/>
      <source>Name:</source>
      <translation>Nome:</translation>
    </message>
    <message>
      <location filename="../src/ui/scripts_main_area.ui" line="40"/>
      <source>Registered Event Handlers:</source>
      <translation>Gestori di Eventi registrati:</translation>
    </message>
    <message>
      <location filename="../src/ui/scripts_main_area.ui" line="33"/>
      <source>&lt;p&gt;Choose a good, (ideally, though it need not be, unique) name for your script or script group. This will be displayed in the script tree.&lt;/p&gt;&lt;p&gt;If a function withn the script is to be used to handle events entered in the list below &lt;b&gt;&lt;u&gt;it must have the same name as is entered here.&lt;/u&gt;&lt;/b&gt;&lt;/p&gt;</source>
      <translation>&lt;p&gt;Scegli un nome chiaro, idealmente univoco, per il tuo script o il gruppo di script. Sarà utilizzato nella vista ad albero degli script.&lt;/p&gt;&lt;p&gt;Se una funzione all'interno dello script deve essere utilizzata per gestire l'evento indicato nella lista sottostante &lt;b&gt;&lt;u&gt;deve avere lo stesso nome inserito qui.&lt;/u&gt;&lt;/b&gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/scripts_main_area.ui" line="88"/>
      <source>&lt;p&gt;Remove (selected) event handler from list.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Rimuovi la voce selezionata dall'elenco del gestore eventi.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/scripts_main_area.ui" line="91"/>
      <source>-</source>
      <translation>-</translation>
    </message>
    <message>
      <location filename="../src/ui/scripts_main_area.ui" line="98"/>
      <source>Add User Event Handler:</source>
      <translation>Aggiungi gestore eventi utente:</translation>
    </message>
    <message>
      <location filename="../src/ui/scripts_main_area.ui" line="133"/>
      <source>&lt;p&gt;Add entered event handler name to list.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Aggiungi all'elenco, il nome del gestore eventi inserito.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/scripts_main_area.ui" line="136"/>
      <source>+</source>
      <translation>+</translation>
    </message>
  </context>
  <context>
    <name>set_room_area</name>
    <message>
      <location filename="../src/ui/set_room_area.ui" line="14"/>
      <source>Move rooms to another area</source>
      <translation>Sposta le stanze in un'altra area</translation>
    </message>
    <message>
      <location filename="../src/ui/set_room_area.ui" line="20"/>
      <source>Which area would you like to move the room(s) to?</source>
      <translation>In quale area vuoi spostare questa stanza?</translation>
    </message>
  </context>
  <context>
    <name>source_editor_area</name>
    <message>
      <location filename="../src/ui/source_editor_area.ui" line="26"/>
      <source>Form</source>
      <translation>Modulo</translation>
    </message>
  </context>
  <context>
    <name>timers_main_area</name>
    <message>
      <location filename="../src/ui/timers_main_area.ui" line="29"/>
      <source>Name:</source>
      <translation>Nome:</translation>
    </message>
    <message>
      <location filename="../src/ui/timers_main_area.ui" line="64"/>
      <source>Command:</source>
      <translation>Comando:</translation>
    </message>
    <message>
      <location filename="../src/ui/timers_main_area.ui" line="169"/>
      <source>Time:</source>
      <translation>Tempo:</translation>
    </message>
    <message>
      <location filename="../src/ui/timers_main_area.ui" line="39"/>
      <source>&lt;p&gt;Choose a good, (ideally, though it need not be, unique) name for your timer, offset-timer or timer group. This will be displayed in the timer tree.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Scegli un nome chiaro, idealmente univoco, per il timer o il gruppo di timer. Sarà utilizzato nella vista ad albero dei timer.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/timers_main_area.ui" line="74"/>
      <source>&lt;p&gt;Type in one or more commands you want the timer to send directly to the game when the time has elapsed. (Optional)&lt;/p&gt;&lt;p&gt;To send more complex commands, that could depend on or need to modifies variables within this profile a Lua script should be entered &lt;i&gt;instead&lt;/i&gt; in the editor area below.  Anything entered here is, literally, just sent to the game server.&lt;/p&gt;&lt;p&gt;It is permissable to use both this &lt;i&gt;and&lt;/i&gt; a Lua script - this will be sent &lt;b&gt;before&lt;/b&gt; the script is run.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/timers_main_area.ui" line="77"/>
      <source>Text to send to the game as-is (optional)</source>
      <translation>Testo da inviare direttamente al gioco (opzionale)</translation>
    </message>
    <message>
      <location filename="../src/ui/timers_main_area.ui" line="89"/>
      <source>&lt;p&gt;hours&lt;/p&gt;</source>
      <translation>&lt;p&gt;ore&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/timers_main_area.ui" line="104"/>
      <source>&lt;p&gt;minutes&lt;/p&gt;</source>
      <translation>&lt;p&gt;minuti&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/timers_main_area.ui" line="119"/>
      <source>&lt;p&gt;seconds&lt;/p&gt;</source>
      <translation>&lt;p&gt;secondi&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/timers_main_area.ui" line="134"/>
      <source>&lt;p&gt;miliseconds&lt;/p&gt;</source>
      <translation>&lt;p&gt;millisecondi&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/timers_main_area.ui" line="184"/>
      <source>&lt;p&gt;The &lt;b&gt;hour&lt;/b&gt; part of the interval that the timer will go off at.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Numero di &lt;b&gt;ore&lt;/b&gt; dell'intervallo prima che il timer venga attivato.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/timers_main_area.ui" line="392"/>
      <source>&lt;p&gt;The &lt;b&gt;millisecond&lt;/b&gt; part of the interval that the timer will go off at (1000 milliseconds = 1 second).&lt;/p&gt;</source>
      <translation>&lt;bp&gt;Numero di &lt;bb&gt;millisecondi&lt;b/b&gt; dell'intervallo prima che il timer venga attivato (1000 millisecondi = 1 secondo).&lt;b/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/timers_main_area.ui" line="260"/>
      <source>&lt;p&gt;The &lt;b&gt;minute&lt;/b&gt; part of the interval that the timer will go off at.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Numero di &lt;b&gt;minuti&lt;/b&gt; dell'intervallo prima che il timer venga attivato.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/timers_main_area.ui" line="326"/>
      <source>&lt;p&gt;The &lt;b&gt;second&lt;/b&gt; part of the interval that the timer will go off at.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Numero di &lt;b&gt;secondi&lt;/b&gt; dell'intervallo prima che il timer venga attivato.&lt;/p&gt;</translation>
    </message>
  </context>
  <context>
    <name>trigger_editor</name>
    <message>
      <location filename="../src/ui/trigger_editor.ui" line="152"/>
      <location filename="../src/ui/trigger_editor.ui" line="200"/>
      <location filename="../src/ui/trigger_editor.ui" line="245"/>
      <location filename="../src/ui/trigger_editor.ui" line="290"/>
      <location filename="../src/ui/trigger_editor.ui" line="335"/>
      <location filename="../src/ui/trigger_editor.ui" line="380"/>
      <location filename="../src/ui/trigger_editor.ui" line="428"/>
      <location filename="../src/ui/trigger_editor.ui" line="590"/>
      <source>1</source>
      <translation>1</translation>
    </message>
    <message>
      <location filename="../src/ui/trigger_editor.ui" line="436"/>
      <source>Show normally hidden variables</source>
      <translation>Mostra le variabili solitamente nascoste</translation>
    </message>
    <message>
      <location filename="../src/ui/trigger_editor.ui" line="476"/>
      <source>&lt;p&gt;Enter text here to search through your code.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Inserisci il testo qui per cercare nel tuo codice.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/trigger_editor.ui" line="510"/>
      <source>&lt;p&gt;Toggles the display of the search results area.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Attiva/Disattiva la visualizzazione dei risultati di ricerca.&lt;/p&gt;</translation>
    </message>
  </context>
  <context>
    <name>trigger_main_area</name>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="65"/>
      <source>Name:</source>
      <translation>Nome:</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="85"/>
      <source>&lt;p&gt;Use this control to show or hide the extra controls for the trigger; this can be used to allow more space to show the trigger &lt;i&gt;items&lt;/i&gt; on smaller screen.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Utilizza questo bottone per mostrare/nascondere le opzioni avanzate per il trigger; in questo modo hai a disposizione più spazio per mostrare i &lt;i&gt;trigger&lt;/i&gt; sugli schermi di piccole dimensioni.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="111"/>
      <source>Command:</source>
      <translation>Comando:</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="127"/>
      <source>Text to send to the game as-is (optional)</source>
      <translation>Testo da inviare direttamente al gioco (opzionale)</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="201"/>
      <source>&lt;p&gt;The trigger will only fire if &lt;u&gt;all&lt;/u&gt; conditions on the list have been met within the specified line delta, and captures will be saved in &lt;tt&gt;multimatches&lt;/tt&gt; instead of &lt;tt&gt;matches&lt;/tt&gt;.&lt;/p&gt;
&lt;p&gt;If this option is &lt;b&gt;not&lt;/b&gt; set the trigger will fire if &lt;u&gt;any&lt;/u&gt; condition on the list have been met.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Il trigger viene attivato solo se &lt;u&gt;Tutte&lt;/u&gt; le condizioni dell'elenco sono verificate all'interno di un determinato numero di linee (delta). Tutti i riscontri saranno salvati nella variabile &lt;tt&gt;multimatches&lt;/tt&gt; invece che &lt;tt&gt;matches&lt;/tt&gt;.&lt;/p&gt;
&lt;p&gt;Se questa opzione &lt;b&gt;Non&lt;/b&gt; è selezionata il trigger sarà attivato quando &lt;u&gt;una qualsiasi&lt;/u&gt; condizione dell'elenco viene soddisfatta.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="208"/>
      <source>AND / Multi-line (delta)</source>
      <translation>E / multi-linea (delta)</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="260"/>
      <source>&lt;p&gt;When checked, only the filtered content (=capture groups) will be passed on to child triggers, not the initial line (see manual on filters).&lt;/p&gt;</source>
      <translation>&lt;p&gt;Se attivo, solo il contenuto filtrato (=gruppi di cattura) verrà trasmesso ai trigger figli, non la riga iniziale (consulta il manuale sui filtri).&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="266"/>
      <source>only pass matches</source>
      <translation>restituisci solo i risultati della ricerca</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="302"/>
      <source>Do not pass whole line to children.</source>
      <translation>Non passare tutta la riga ai trigger figli.</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="324"/>
      <source>&lt;p&gt;Choose this option if you want to include all possible matches of the pattern in the line.&lt;/p&gt;&lt;p&gt;Without this option, the pattern matching will stop after the first successful match.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Seleziona questa opzione se desideri includere tutte le possibili corrispondenze del pattern nella linea.&lt;/p&gt;&lt;p&gt;Senza questa opzione la ricerca restituisce solo il primo risultato.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="360"/>
      <source>Match all occurences of the pattern in the line.</source>
      <translation>Trova tutte le corrispondenze del pattern nella riga.</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="415"/>
      <source>&lt;p&gt;Keep firing the script for this many more lines, after the trigger or chain has matched.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Continua ad eseguire lo script per questo numero di righe, dopo che è stata trovata una corrispondenza per il trigger o la catena.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="421"/>
      <source>fire length (extra lines)</source>
      <translation>lunghezza trigger (linee extra)</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="479"/>
      <source>&lt;p&gt;Play a sound file if the trigger fires.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Riproduci un file audio all'attivazione del trigger.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="524"/>
      <source>&lt;p&gt;Use this to open a file selection dialogue to find a sound file to play when the trigger fires.&lt;/p&gt;
&lt;p&gt;&lt;i&gt;Cancelling from the file dialogue will not make any changes; to clear the file use the clear button to the right of the file name display.&lt;/i&gt;&lt;/p&gt;</source>
      <comment>This is the button used to select a sound file to be played when a trigger fires.</comment>
      <extracomment>Please ensure the text used here is duplicated within the tooltip for the QLineEdit that displays the file name selected.</extracomment>
      <translation>&lt;p&gt;Utilizza questa opzione per aprire la finestra di dialogo con cui selezionare il file audio da avviare quando il trigger viene attivato.&lt;/p&gt;
&lt;p&gt;&lt;i&gt;Annullare la finestra di dialogo non apporterà alcuna modifica; per eliminare l'associazione con il file utilizza il pulsante a destra del pannello nome file.&lt;/i&gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="528"/>
      <source>Choose file...</source>
      <translation>Scegli file...</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="559"/>
      <source>no file</source>
      <translation>nessun file</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="620"/>
      <source>&lt;p&gt;Enable this to highlight the matching text by changing the fore and background colors to the ones selected here.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Abilita questa opzione per evidenziare il testo corrispondente modificando i colori del testo e dello sfondo come indicato qui.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="663"/>
      <source>Background</source>
      <translation>Sfondo</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="679"/>
      <location filename="../src/ui/triggers_main_area.ui" line="692"/>
      <source>keep</source>
      <comment>Keep the existing colour on matches to highlight. Use shortest word possible so it fits on the button</comment>
      <translation>mantieni</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="653"/>
      <source>Foreground</source>
      <translation>Colore carattere</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="482"/>
      <source>play sound</source>
      <translation>riproduci suono</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="78"/>
      <source>&lt;p&gt;Choose a good, (ideally, though it need not be, unique) name for your trigger or trigger group. This will be displayed in the trigger tree.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Scegli un nome chiaro, idealmente univoco, per il trigger o il gruppo di trigger. Sarà utilizzato nella vista ad albero dei trigger.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="124"/>
      <source>&lt;p&gt;Type in one or more commands you want the trigger to send directly to the game if it fires. (Optional)&lt;/p&gt;&lt;p&gt;To send more complex commands, that could depend on or need to modifies variables within this profile a Lua script should be entered &lt;i&gt;instead&lt;/i&gt; in the editor area below.  Anything entered here is, literally, just sent to the game server.&lt;/p&gt;&lt;p&gt;It is permissable to use both this &lt;i&gt;and&lt;/i&gt; a Lua script - this will be sent &lt;b&gt;before&lt;/b&gt; the script is run.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="247"/>
      <source>&lt;p&gt;Within how many lines must all conditions be true to fire the trigger?&lt;/p&gt;</source>
      <translation>&lt;bp&gt;Entro quante righe devono verificarsi tutte le condizioni per attivare il trigger?&lt;b/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="330"/>
      <source>match all</source>
      <translation>trova tutti</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="463"/>
      <source>&lt;p&gt;How many more lines, after the one that fired the trigger, should be passed to the trigger&apos;s children?&lt;/p&gt;</source>
      <translation>&lt;p&gt;Quante altre righe, dopo quella che ha attivato il trigger, devo passare agli elementi figlio?&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="550"/>
      <source>&lt;p&gt;Sound file to play when the trigger fires.&lt;/p&gt;</source>
      <comment>This is the tooltip for the QLineEdit that shows - but does not permit changing - the sound file used for a trigger.</comment>
      <translation>&lt;p&gt;File audio da riprodurre quando si attiva il trigger.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="572"/>
      <source>&lt;p&gt;Click to remove the sound file set for this trigger.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Premi per eliminare il file audio impostato per questo trigger.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="626"/>
      <source>highlight</source>
      <translation>evidenzia</translation>
    </message>
  </context>
  <context>
    <name>trigger_pattern_edit</name>
    <message>
      <location filename="../src/ui/trigger_pattern_edit.ui" line="124"/>
      <source>Foreground color ignored</source>
      <translation>Colore carattere ignorato</translation>
    </message>
    <message>
      <location filename="../src/ui/trigger_pattern_edit.ui" line="148"/>
      <source>Background color ignored</source>
      <translation>Colore di sfondo ignorato</translation>
    </message>
    <message>
      <location filename="../src/ui/trigger_pattern_edit.ui" line="175"/>
      <source>match on the prompt line</source>
      <translation>cerca sulla linea dei comandi</translation>
    </message>
  </context>
  <context>
    <name>vars_main_area</name>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="109"/>
      <source>Name:</source>
      <translation>Nome:</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="175"/>
      <source>⏴ Key type:</source>
      <translation>⏴ Tipo Indice:</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="125"/>
      <source>&lt;p&gt;Set the &lt;i&gt;global variable&lt;/i&gt; or the &lt;i&gt;table entry&lt;/i&gt; name here. The name has to start with a letter, but can contain a mix of letters and numbers.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Imposta qui il nome della &lt;i&gt;variabile globale&lt;/i&gt; o della &lt;i&gt;voce nella tabella&lt;/i&gt;. Il nome deve iniziare con una lettera, ma può contenere sia lettere che numeri.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="138"/>
      <source>&lt;p&gt;Tables can store values either in a list, and/or a hashmap.&lt;/p&gt;&lt;p&gt;In a &lt;b&gt;list&lt;/b&gt;, &lt;i&gt;unique indexed keys&lt;/i&gt; represent values - so you can have values at &lt;i&gt;1, 2, 3...&lt;/i&gt;&lt;/p&gt;&lt;p&gt;In a &lt;b&gt;map&lt;/b&gt; {a.k.a. an &lt;i&gt;associative array}&lt;/i&gt;, &lt;i&gt;unique keys&lt;/i&gt; represent values - so you can have values under any identifier you would like (theoretically even a function or other lua entity although this GUI only supports strings).&lt;/p&gt;&lt;p&gt;This, for a newly created table (group) selects whenever you would like your table to be an indexed or an associative one.&lt;/p&gt;&lt;p&gt;In other cases it displays other entities (&lt;span style=&quot; font-style:italic;&quot;&gt;functions&lt;/span&gt;) which cannot be modifed from here.&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="51"/>
      <location filename="../src/ui/vars_main_area.ui" line="145"/>
      <source>Auto-Type</source>
      <translation>Tipo automatico</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="128"/>
      <source>Variable name ...</source>
      <translation>Nome variabile ...</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="150"/>
      <source>key (string)</source>
      <translation>chiave (stringa)</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="155"/>
      <source>index (integer)</source>
      <translation>indice (numero intero)</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="71"/>
      <location filename="../src/ui/vars_main_area.ui" line="160"/>
      <source>table</source>
      <translation>tabella</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="165"/>
      <source>function
(cannot create
from GUI)</source>
      <translation>funzione
(impossibile creare
dalla GUI)</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="185"/>
      <source>&lt;p&gt;If checked this item (and its children, if applicable) does not show in area to the left unless &lt;b&gt;Show normally hidden variables&lt;/b&gt; is checked.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Seleziona questa voce (e quella dei figli, se applicabile) per non mostrarla nell'area a sinistra a meno che sia attiva l'opzione &lt;b&gt;Mostra variabili nascoste&lt;/b&gt;.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="188"/>
      <source>hidden variable</source>
      <translation>variabile nascosta</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="84"/>
      <source>⏷ Value type:</source>
      <translation>Tipo di valore:</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="56"/>
      <source>string</source>
      <translation>stringa</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="61"/>
      <source>number</source>
      <translation>numero</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="66"/>
      <source>boolean</source>
      <translation>booleano</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="76"/>
      <source>function</source>
      <translation>funzione</translation>
    </message>
  </context>
</TS>
