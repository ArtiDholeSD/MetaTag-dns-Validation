# MetaData-Validation

## This project based on Retriving MetaData(proided tags from Url) and DNS TXT records from Url (Domain Name) .

### I have written this project In Vs code For, Better coding experience

### This project based on Nodejs that means you have to install nodejs in our Computer system with all configuration
   - Express Framework , Run command as "npm i Express"

### This project is tested on POSTMAN (Two EndPonts)
   1.get Metadata from url : http://localhost:3000/getMetadataFromUrl
   
  2.get dns TXT record from url : http://localhost:3000/getgetDNStxt

### Please follow the instructions to run this project
Step1: Extract ZipFile , open Folder(MetaProject) in Vs code.

Step2:open the terminal in Vs code And Type "cd src",As required module are located in src folder.

Step3:Type "node index.js" in terminal 

Step4:Open the postMan, Create a New Collection i.e."Test-MetaProject"(you can choose any Name) right Click on Test-MetaProject, create a "New request" : Type "http://localhost:3000/getMetadataFromUrl" and select  "Post" Method.

Step5:Select the "Body" In Postman and then select "raw" and select format "json"

Step6:Type the instructed data in Body as Given below:
   
   {
    "inputUrl":"https://practice.geeksforgeeks.org",
    "customMetaTag":"url"
   }

Step7: Click on Send [NOTE: 1. add any Url in "inputUrl" field as input, 2. add any tag in "customMetaTag" field as input]


Step8: In the same Collection, right Click on Test-MetaProject, create a "New request" : Type "http://localhost:3000/getgetDNStxt" and select  "Post" Method 

Step9:Select the "Body" In Postman and then select "raw" and select format "json"

Step10:Type the instructed data in Body as Given below:
   
   {
    "inputUrl":"google.com"
    dnsTXTrecord
  }

Step11: Click on Send [NOTE: 1. add any url in "inputUrl" field as input]
