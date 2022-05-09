Develop a nodejs server based on express. Connect the mongodb database.

Stack:

- NodeJS
- typescript
- express
- mongodb (mongoose)
- axios (or any http client library)

What should be done:

1. Create collections (tables) in the database.

- users (login, email, password (md5), registerDate (data))
- photos (albumId (ref to album collection), title, url, thumbnailUrl, owner (ref to users collection))
- albums (title, owner)

**All proccess features of login and register should be in auth module and we shouldn't create controllers, beacuse we run this modules only in user controller. In user controller we should just call this module to run there services**

2. Authorization endpoint (/login). Accepts login (or mail) and password.
   If mail arrives - validate and search by mail, otherwise search by login.
   If the data was found in the database, give the user a token (you can use jwt).
   If the data is not found, display an error.

3. Registration endpoint (/register). Accepts username, email, password.

4. Photo loading endpoint (/load-photos).
   Make an authorization check
   If the user is authorized, upload photos from the site to the database under his name
   http://jsonplaceholder.typicode.com/photos, split into albums. As
   there is no album name in the request, you can just write the serial number

5. Endpoint for getting all photos with the ability to select a page (/get-photos).
   Accepts ownerid, page, maxcount
   ownerid - if present, displays photos of the specified user
   page - page
   maxcount - the maximum number of photos that will be returned

6. Photo delete endpoint (/delete-photo)
   Make an authorization check
   Accepts photoid (id of the photo from the base, can have several values separated by commas)

7. Album deletion endpoint (/delete-album)
   Make an authorization check
   Accepts albumid (id of the photo from the base, can have several values separated by commas)
   When deleting an album - delete all photos from this album

8. Album title change endpoint (/change-album-title)
   Make an authorization check
   Accept albumid, new_album_name

Will be a plus:

- Use of aggregations where possible

Necessarily:

- Write in typescript with a description of all structures

After completing the test task, send us the link by e-mail.
