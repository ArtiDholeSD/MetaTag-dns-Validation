
#  MetaData-Validation



 This project based on Retriving MetaData(proided tags from Url) and DNS TXT records from Url (Domain Name) .

 I have written this project In Vs code For, Better coding experience (must have IDE to run this project i will suggest 1.Visual studio Code, 2.Postman(as a Client), 3.Nodejs)

##### This project based on Nodejs that means you have to install nodejs in our Computer system with all configuration
   - Express Framework , Run command as "npm i Express"
   - url-metadata package , Run command "npm i url-metadata"
  
 ### Modules
 #
1.	The first endpoint is taking the url of a site and a metatag name and validate if the metatag is present or not.
2.	The first endpoint is returning the metatag content if the metatag is present.
3.	The first endpoint is working with custom metatag.
4.	The second endpoint is taking the url of a site and a dns txt record and validate if the dns txt record is present in the domain or not.
5.	The second endpoint is returning the dns txt record if the dns txt record is present



# Usage/Examples
 
Heroku App Link - https://extraction-url-meatadata.herokuapp.com/
or https://git.heroku.com/extraction-url-meatadata.git   [Note : not attached with frontend so it will not show page but it is deployed]

WAY-1
 Extract ZipFile (follow steps)
 
WAY-2
clone this project (follow steps) NOTE:you have to install node modules,"npm i"

Step1:  open Folder(MetaProject) in Vs code.

Step2:  open the terminal in Vs code And Type "cd src",As required module are located in src folder.
```bash
cd src
```

Step3:Type "node index.js" in terminal 

```bash
node index.js
```
Note: if you not use zip file , if you clone project from github you have to run 3 commands in terminal
-Installing NodeModules - Run 'npm i' or (npm install)

```bash
   npm i    //or (npm install)
  ```
-Installing Express:(if not available)
Express Framework , Run command as "npm i Express"
```bash
   npm i Express  
  ```
-installing  url-metadata package , Run command "npm i url-metadata"

```bash
  npm i url-metadata
  
  ```
Run again "node index.js" in terminal 


### This project is tested on POSTMAN (Two EndPonts)
   1.get Metadata from url : http://localhost:3000/getMetadataFromUrl
   
  2.get dns TXT record from url : http://localhost:3000/getgetDNStxt

Step4:    Open the postMan.
      Create a New Collection i.e."Test-MetaProject"(you can choose any Name) 
      right Click on Test-MetaProject,
      create a "New request" : Type "http://localhost:3000/getMetadataFromUrl" and select  "Post" Method.


Step5:Select the "Body" In Postman and then select "raw" and select format "json"

Step6:Type the instructed data in Body as Given below:

```javascript 
   {
    "inputUrl":"https://practice.geeksforgeeks.org",
    "customMetaTag":"url"
   }

```


Step7: Click on Send 
NOTE: 
#
1. add any Url in "inputUrl" field as input, 
2. add any tag in "customMetaTag" field as input

#
Step8: In the same Collection, right Click on Test-MetaProject, 
create a "New request" : Type "http://localhost:3000/getgetDNStxt" and select  "Post" Method 

Step9:Select the "Body" In Postman and then select "raw" and select format "json"

Step10:Type the instructed data in Body as Given below:
   
   ```javascript 
    {
     "inputUrl":"https://www.google.com",
    "dnsTXTrecord":"google-site-vation=TV9-DBe4R80X4v0M4U_bd_J9cpOJM0nikft0jAgjmsQ"
  }


```
  
Step11: Click on Send 
#
NOTE: 
1. add any url in "inputUrl" field as input
2. add any txt record in "dnsTXTrecord" field as input



## Authors

- [@ArtiDholeSD](https://www.github.com/octokatherine)

