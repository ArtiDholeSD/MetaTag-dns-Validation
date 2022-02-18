const express = require('express');
const router = express.Router();

//importing controller
const metaController = require('../controllers/metaController')

//EndPoints

router.post('/getMetadataFromUrl',metaController.getMetaData);

router.post('/getgetDNStxt',metaController.getDNStxt);





module.exports = router;