We'll talk to Mongo using Monk: https://github.com/Automattic/monk

### STOP - Create a sequence diagram
  browser -> express: GET Album
  express -> browser: Render Album Index
  browser -> express : GET new albums
  express -> browser: Render new albums
  browser -> express: POST albums
  express -> mongo: insert album data
  express -> browser: redirect
  browser -> express: GET Album
  express -> browser: Final Render

http://www.websequencediagrams.com/cgi-bin/cdraw?lz=YnJvd3NlciAtPiBleHByZXNzOiBHRVQgQWxidW0gCgANByAtPiAAIwc6IFJlbmRlcgAbB0luZGV4IAoANRIgAEIGbmV3IGFsYnVtcwAwHQAbDACAfxRQT1NUADQUbW9uZ286IGluc2VydABjBiBkYXRhAIEkFnJlZGlyZWN0AE4WAIFuCQCBYRVGaW5hbACBdAggCgoKCgoKCgoKCg&s=magazine

- You can see how to define dynamic routes from the show route
- You can see how to find the individual record from the show route
- You know how to update a mongo doc at the command line, and you have a link to the [Monk docs](https://github.com/Automattic/monk) so you can figure out how to make the update
- You know how to redirect from the create route

### BUT STOP - Create a sequence diagram _first_

Draw a sequence diagram of what the update action will be.  Include the redirect to the show page.

# put your code here

Paste your image here.

### And finally, delete

Delete's a little tricky.  You need to add a form to the show page that will post to `/albums/:id/delete`.

Then add your delete route that will remove the document from the collection, and also redirect to the index page.
