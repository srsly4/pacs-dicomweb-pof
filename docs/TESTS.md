# Testy

Przeprowadziliśmy próbę wgrania plików DICOM różnego rozmiaru na serwer w chmurze Azure. Użyliśmy do tego plików pozyskanych ze strony [UPMC Breast Tomography and FFDM Collection](http://www.dclunie.com/pixelmedimagearchive/upmcdigitalmammotomocollection/index.html), a konkretnie [Case 14](https://dl.dropbox.com/s/iluqskc0ybo4zkl/MammoTomoUPMC_Case14.tar.bz2?dl=1).
Kolekcja zawierała 25 plików dicom, ich rozmiary były z zakresu od kilkunastu do kilkuset MB.

Próba transferu wszystkich plików (~5GB) przy użyciu internetu z prędkością wysyłania ~7 Mbps (wg. [www.speedtest.net](https://www.speedtest.net)) zakończyła się po około 20 minutach.

Nie wszystkie pliki udało się jednak wgrać, wgrywanie plików o rozmiarze powyżej ~50MB zakończyło się niepowodzeniem, powodem jest zbyt mała ilość pamięci RAM na małych instancjach Azure 
