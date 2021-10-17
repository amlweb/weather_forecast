`yarn start` run project  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Test Task
Przygotuj stronę internetową w technologii Single Page Application, dzięki której będzie można sprawdzić obecną pogodę i najbliższą prognozę dla lokalizacji, którą może wyszukać użytkownik.

### Założenia
- [x] Źródłem prognoz pogodowych może być dowolne publiczne API, posiadające informacje na temat miast w Polsce i za granicą.  
- [x] Aplikacja powinna składać się z:
  - [x] Formularza wyszukiwania zawierającego wyłącznie pole lokalizacji oraz przycisku szukaj.
  - [x] Widoku prezentacji prognozy pogody dla wyszukanego miejsca.
  - [x] Panelu zawierającego porównanie parametrów pogodowych obecnie wybranej lokalizacji z kilkoma najpopularniejszymi miastami w Polsce.
- [x] Każdy widok powinien zawierać formularz szukania.
- [x] Wygląd oraz ułożenie strony nie jest najważniejszym punktem, aczkolwiek prosty i estetyczny wygląd (przygotowany chociażby z wykorzystaniem gotowym frameworków CSS) będzie dużym plusem.
- [x] Kod aplikacji powinien być pisany w ES6 lub TypeScripcie.
- [x] Przesłana aplikacja powinna zawierać kompletny kod źródłowy oraz przygotowaną konfigurację uruchomieniową (np. npm), która będzie budować projekt i uruchamiać serwer lokalny.


### Informacje
Aplikacja powinna mieć trzy widoki:
1. `/` - główny widok, w którym będzie prezentowana wyszukiwarka,
2. `/:city/` - widok prezentacji prognozy pogody dla wybranego miasta oraz panel porównujący parametry pogodowe (np. w postaci tabeli oraz informacji: Warszawa: zimniej o 3 stopnie, wilgotność większa o 15% itp.),
3. Strona 404 - nie znaleziono lokalizacji.

Rodzaj wyświetlanych informacji pogodowych nie jest najważniejszy, aczkolwiek może przykładowo zawierać:
- temperaturę,
- wilgotność,
- prędkość wiatru