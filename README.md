
#  MetaData-Validation



 This project based on Retriving MetaData(proided tags from Url) and DNS TXT records from Url (Domain Name) .

 I have written this project In Vs code For, Better coding experience

##### This project based on Nodejs that means you have to install nodejs in our Computer system with all configuration
   - Express Framework , Run command as "npm i Express"
   - url-metadata package , Run command "npm i url-metadata"


# Usage/Examples

WAY-1
 Extract ZipFile (follow steps)
 
WAY-2
clone this project (follow steps) NOTE:you have to install node modules,"npm i"

Step1: Extract ZipFile , open Folder(MetaProject) in Vs code.

Step2:open the terminal in Vs code And Type "cd src",As required module are located in src folder.
```bash
cd src
```

Step3:Type "node index.js" in terminal 

```bash
node index.js
```


### This project is tested on POSTMAN (Two EndPonts)
   1.get Metadata from url : http://localhost:3000/getMetadataFromUrl
   
  2.get dns TXT record from url : http://localhost:3000/getgetDNStxt

Step4:Open the postMan.
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


