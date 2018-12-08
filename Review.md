# Review Questions

## What is Node.js?
> Node.js is a runtime environment (a program that runs other programs), a platform used to execute JavaScript applications outside the browser.
## What is Express?
> Expresss sits on top of the raw http server module provided by Node.js and adds extra functionality, like routing and middleware support, and a simpler API.

## Mention two parts of Express that you learned about this week.
> Routing and middleware
## What is Middleware?
> Code that works between the application and the OS that manipulates code to make it usable for the next piece.
## What is a Resource?
> A resource is anything that is being sent from our front end to our back end.
## What can the API return to help clients know if a request was successful?
> A HTTP res status.
## How can we partition our application into sub-applications?
> We can have individual files that only handle one thing, for example, user middleware in one file, user routes in one file, etc.
## What is express.json() and why do we need it?
> express.json() allows us to parse and format data we are recieving into JSON so that we can have a standard to keep with from font end to back end and everywhere in between. it keeps things consistent.