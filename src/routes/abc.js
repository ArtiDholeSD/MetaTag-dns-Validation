
const urlMetadata = require('url-metadata')
//run "npm i url-metadata" to install Url - Metadata Package

const getMetaData = async function(req,res)
{
  try{
         let inputUrl = req.body.inputUrl;
         var inputTag = req.body.customMetaTag;

        if(req.body.inputUrl){
                        
         // using packg
          urlMetadata(req.body.inputUrl).then(
            function (metadata) { // success handler
             
              console.log( metadata[req.body.customMetaTag])// send res not present
              if(!metadata[req.body.customMetaTag]){
               res.status(400).send({ status: false, message: `This metaTag is not present` })
              }
                 
              let  meta = {
                customMetaTag:metadata[req.body.customMetaTag],
                meta:metadata
              }
              console.log(meta)
              res.status(200).send({status:true,metadata:meta})
            
              //console.log(Object.keys(metadata))
              //console.log('author :'+ metadata.author)
            },
            function (error) { // failure handler
              console.log(error)
            })
  }
      //     urlMetadata(req.body.inputUrl).then(
      //       function (metadata) { // success handler
      //         console.log( metadata[req.body.customMetaTag])
      // // res.status(200).send({status:true,message:metadata})

      //       },
      //       function (error) { // failure handler
      //         console.log(error)
      //       }) 

      //       let val = await urlMetadata(req.body.inputUrl)
      //      // console.log( val[req.body.customMetaTag])

       
  }catch(e){
    return res.status(500).send({status:false,message:e.message})
  }

}
// Accessing dns module
const dns = require('dns');
const getDNStxt = async function(req,res)
{
  try{
         let inputUrl = req.body.inputUrl;
    
         dns.resolveTxt(inputUrl, function(err, addresses){
            if(err){
              console.log(err)
            }
            //console.log('TXT records:', addresses);
            res.json({"TXT records": addresses})
          });
          
        }catch(e){
    return res.status(500).send({status:false,message:e.message})
  }

}
module.exports=
{
  getMetaData,
  getDNStxt
   
}




let abc = 'https://practice.geeksforgeeks.org'
  


// urlMetadata(abc).then(
//   function (metadata) { // success handler
//     console.log( metadata)
//     console.log( metadata.abc)// send res not present

//     //console.log(Object.keys(metadata))
//     //console.log('author :'+ metadata.author)
//   },
//   function (error) { // failure handler
//     console.log(error)
//   })





// Node.js program to demonstrate the   
// dns.resolveTxt() method
  
// Accessing dns module
//const dns = require('dns');
  
// Calling dns.resolveTxt() method for hostname
// geeksforgeeks.org and displaying them in
// console as a callback

  //  let abs = dns.resolveTxt('geeksforgeeks.org', (err, 
  //   callback)=>
  //   console.log('TXT records:', addresses));

  

 




//npm install html-metadata-parser
//const { parser } = require('html-metadata-parser');

// var Meta = require('html-metadata-parser');

// Meta.parser('https://www.youtube.com/watch?v=GN2nFJ9Ku6Q', function (err, result) {

//     console.log(result);
// })
// // async 
// // const { parser } = require('html-metadata-parser');
// // (async () => {
// //     var result = await parse('https://www.youtube.com/watch?v=eSzNNYk7nVU');
// //     console.log(JSON.stringify(result, null, 3));
// // })();

// (async () => {

//     var result = await Meta.parser('https://www.youtube.com/watch?v=GN2nFJ9Ku6Q');

//      console.log(JSON.stringify(result, null, 3));


// })();


//------------------------------------------------------------------------------------------------------------