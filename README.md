# streglisteangular
Website for klan sukkeregern stregliste.

## Tech stack
### Backend
<t>ASP.NET</t>  using C#.

### Frontend
Angular CLI using typescript.

## Developing

### Local development
"ng serve" in "streglisteangular\ClientApp"

### Deployment
Using docker. "deploy.cmd" in root of project.
Docker must be locally configured to push to google storage buckets.

After the push a new revision must be made to the Google run instance to for changes to take effect.

