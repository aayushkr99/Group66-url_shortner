const express = require('express');
const router = express.Router();

const urlController = require("../controller/urlController")

router.post("/url/shorten", urlController.urlShort)
router.get('/:urlCode', urlController.getUrlRedis )


module.exports = router;