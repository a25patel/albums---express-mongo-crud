1. How does an HTTP redirect work?
  >The redirect takes you to a new page or reroutes you. instead of hitting refresh where any
  filled in forms would just be reprocessed, the redirect submits and takes you to a new page. This makes the consumer happy because they aren't being duplicately charged or submitting multiple of the same form unintended

2. What's the difference between rendering and redirecting?
  > render is like a go button, it does the submit and takes all the data, sends it through and spits it back out where intended but nothing happens on the page, so the user may not realize that a submission has occured
  > redirect does the same thing as render but takes the user to a different page in the chain therefore offering more of a verification to the user that submission was successful

3. Briefly describe what's happening with the "create route" (that is, the post to /albums that inserts a new document)
  > the create route is taking the data one has submitted in the form and inserting into the database as a new collection. the user types up all information in the browser, once that is subitted, the information is taken by express and sent to mongo in order to collect the information in the database. Therefore when needed express can call for it. 
