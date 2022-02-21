
const urlMetadata = require('url-metadata')
//run "npm i url-metadata" to install Url - Metadata Package
function validateUrl(url) {
   let expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
   let regex = new RegExp(expression);
   return url.match(regex);//returns null(false):arrayofUrl 
}


const getMetaData = async function (req, res) {
  try {
    // req.body.inputUrl; ---->Input Url
    // req.body.customMetaTag;----->Input Custom Tag
    console.log("validating  "+validateUrl(req.body.inputUrl))
     //if not valid Url
    if (!validateUrl(req.body.inputUrl)) {
     return res.status(400).send({ status: false, message: `Enter Valid Url` })
    }
    //if not valid customMetaTag
    if (!req.body.customMetaTag) {
     return res.status(400).send({ status: false, message: `Enter Valid MetaTag` })
    }

      // using package
      urlMetadata(req.body.inputUrl).then(
        function (metadata) { // success handler

          console.log("custom"+metadata[req.body.customMetaTag])// send res not present
          if (!metadata[req.body.customMetaTag]) {
            res.status(400).send({ status: false, message: `This metaTag is not present` })
          }

          let meta = {
            customMetaTag: metadata[req.body.customMetaTag],
            // meta:metadata
          }
          console.log(meta)
          res.status(200).send({ status: true, metadata: meta })

        },
        function (error) { // failure handler
          return res.status(400).send({ status: false, message: error.message })
        })
    //}
   // res.status(400).send({ status: false, message: `Enter Url` })

  } catch (e) {
    return res.status(500).send({ status: false, message: e.message })
  }

}
// Accessing dns module
const dns = require('dns');
//const { url } = require('inspector')

const getDNStxt = async function (req, res) {
  try {
    // req.body.inputUrl;
    //req.body.dnsTXTrecord;
   // console.log("out present "+req.body.dnsTXTrecord)

    if (!validateUrl(req.body.inputUrl)) {
      return res.status(400).send({ status: false, message: `Enter Valid Url` })
     }
     if (!req.body.dnsTXTrecord) {
      return res.status(400).send({ status: false, message: `Enter Valid dns TXT record` })
     }

    function domainName(Url) { // reference from TutorialsPoint
//        let getTheHostName;
//       if (Url.indexOf("//") > -1) {
//         getTheHostName = Url.split('/')[2];
      
//       } else {
//         getTheHostName = Url.split('/')[0];
       
//       }
//       getTheHostName = getTheHostName.split(':')[0];
     
//       getTheHostName = getTheHostName.split('?')[0];
     
//       return getTheHostName.replace("www.", "");
        let url = new URL(Url);
      return ((url.hostname).replace("www.",""))
 }

    //console.log(domainName(req.body.inputUrl))

    dns.resolveTxt(domainName(req.body.inputUrl), function (err, addresses) {//callback
      if (err) {
        return res.status(500).send({ status: false, message: err.message })
      }
      let len =  addresses.length ;
      console.log(addresses)
      if(len ){
         for(value of addresses){
           if(value.includes(req.body.dnsTXTrecord)){
             console.log (true)
            return  res.status(200).send({ status: true, "TXT records": req.body.dnsTXTrecord })
          }
          }
          console.log (false)
          return res.status(400).send({ status: false, message: `TXT record is not present` })

       }else{
        return res.status(400).send({ status: false, message: `TXT record is not present` })
      }
      
    });

  } catch (err) {
    return res.status(500).send({ status: false, data: err.message })
  }

}


module.exports =
{
  getMetaData,
  getDNStxt

}

