export default function HomePageIT() {
  const homePageStringsIT = {};

  homePageStringsIT["title"] = "Benvenuti nel mio sito!";
  homePageStringsIT["clickToRun"] =
    "Clicca sul pulsante per avviare la compilazione";

  homePageStringsIT["compilerMessage"] = `Ricompilazione avviata...<br/>
>------ Inizio ricompilazione: Progetto: Sito Web, Configurazione: Debug x64 ------<br/>
>homepage.cpp</br>
>about.cpp</br>
>info.cpp</br>
>main.cpp</br>
>C:\\users\\myself\\website\\main.cpp(3,13): warning C4326: il tipo restituito di 'main' dovrebbe essere 'int' invece di 'void'<br/>
>Generazione del codice in corso...<br/>
>Sito Web.vcxproj -> C:\\users\\myself\\website\\x64\\Debug\\Sito Web.exe<br/>
>Compilazione progetto "Sito Web.vcxproj" completata.<br/>
========== Ricompilazione: 1 completate, 0 non riuscite, 0 ignorate ==========<br/>`;

  return homePageStringsIT;
}
