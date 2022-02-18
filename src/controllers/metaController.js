
const urlMetadata = require('url-metadata')
//run "npm i url-metadata" to install Url - Metadata Package
//this package helps to access metaData of any url(website)

//validating Url
function validateUrl(url) {
  //expression from GFG 
  let expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  let regex = new RegExp(expression);
  return url.match(regex);//returns null(false):arrayofUrl 
}

//-------------------------- first Api (fetching required tag data)----------------------------------------------
const getMetaData = async function (req, res) {
  try {
    // req.body.inputUrl; ---->Input Url
    // req.body.customMetaTag;----->Input Custom Tag

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

        //console.log("custom"+metadata[req.body.customMetaTag])// send res not present
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

  } 
  catch (e) {
    return res.status(500).send({ status: false, message: e.message })
  }

}


//------------------------    2nd Api to featch txt record   -------------------------------------------------

// Accessing dns module
const dns = require('dns');


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
      let getTheHostName;
      if (Url.indexOf("//") > -1) {
        getTheHostName = Url.split('/')[2];
        //
      } else {
        getTheHostName = Url.split('/')[0];
        //
      }
      getTheHostName = getTheHostName.split(':')[0];
      //
      getTheHostName = getTheHostName.split('?')[0];
      //
      return getTheHostName.replace("www.", "");


    }

    //console.log(domainName(req.body.inputUrl))

    //access test records from Hostname/Domain,paramerts:(hostname,callback)
    dns.resolveTxt(domainName(req.body.inputUrl), function (err, addresses) {//callback
      if (err) {
        return res.status(500).send({ status: false, message: err.message })
      }
      let len = addresses.length;
      //console.log(addresses) //txt-records
      if (len) {
        for (value of addresses) {
          if (value.includes(req.body.dnsTXTrecord)) {
            console.log(true)
            return res.status(200).send({ status: true, "TXT records": req.body.dnsTXTrecord })
          }
        }
        console.log(false)
        return res.status(400).send({ status: false, message: `TXT record is not present` })

      } else {
        return res.status(400).send({ status: false, message: `TXT record is not present` })
      }

    });

  } catch (err) {
    return res.status(500).send({ status: false, data: err.message })
  }

}

//exporting Api's
module.exports =
{
  getMetaData,
  getDNStxt

}

