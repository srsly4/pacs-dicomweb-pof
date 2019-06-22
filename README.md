# Simple PACS/Dicom-web infrastructure using Osimis-Orthanc

The infrastructure contains PACS (Picture archiving and communication system) and web application.

Start with:

```bash
docker-compose up
```

If the database for conquest is freshly created you have to execute:

```bash
docker-compose exec conquest ./dgate -v -r
``` 

The web apllication will be hosted on localhost.
