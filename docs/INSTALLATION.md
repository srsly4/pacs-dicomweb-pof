# Instalacja

Jedynym wymaganiem jest posiadanie zainstalowanego środowiska `docker` wraz z narzędziem `docker-compose`

### Krok 1.

Aby uruchomić infrastrukturę lokalnie, przygotowaliśmy plik [docker-compose.yml](../docker-compose.yml), który opisuje całą infrastrukturę i pozwala uruchomić całość przy pomocy jednego polecenia:

```bash
$ docker-compose up
```

### Krok 2.

Po pierwszym uruchomieniu, w trakcie działania infrstruktury, należy z poziomu głównego katalogu projektu wykonać polecenie, które odpowiada za konfigurację bazy danych Postgres dla serwera Conquest:

```bash
$ docker-compose exec conquest ./dgate -v -r
```

**Ważne**: Jeżeli serwerowi Conquest nie udało się połączyć z bazą danych Postgres przy pierwszym uruchomieniu, należy wykonać powtórnie krok 1.


### Serwisy dostępne po poprawnym uruchomieniu

1.     https://localhost/ (domyślny klient i API Orthanc z ograniczonym dostępem, dostęp: ala:ala)
2.     https://localhost/admin/ (domyślny klient i API Orthanc z pełnym dostępem, dostęp: admin:admin)
3.     https://localhost/client/ (przykładowy klient webowy napisany w React)
   
   
