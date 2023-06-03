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
Using docker. Run "deploy.cmd" in root of project.

Docker must be locally configured to push to google storage buckets.
[Setup docker](https://cloud.google.com/sdk/gcloud/reference/auth/configure-docker)

After the push a new revision must be made to the Google run instance for changes to take effect.
[Managing revisions](https://cloud.google.com/run/docs/managing/revisions)