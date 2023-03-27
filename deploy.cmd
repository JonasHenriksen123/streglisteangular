@ECHO OFF

docker build . --tag gcr.io/sukkeregern-stregliste-277311/streglisteangular:latest

docker push gcr.io/sukkeregern-stregliste-277311/streglisteangular:latest