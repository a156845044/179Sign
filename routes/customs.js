var express = require('express');
var router = express.Router();
var client = require('./../services/customs/client');
/**
 * @typedef signRequest
 * @property {string} plaintext.required - 待加密的明文
 */

/**
 * @typedef signResponse
 * @property {boolean} Result - 操作结果
 * @property {Array.<string>} Data - 加密结果
 * @property {Array.<string>} Error - 错误信息
 */


/**
 * 179海关签名
 * @route POST /customs/179sign
 * @group customs - 海关相关业务
 * @param {signRequest.model} signRequest.body.required - 请求实体
 * @returns {signResponse.model} 200 - 签名结果
 * @returns {Error}  default - Unexpected error
 */
router.post('/179sign', function(req, res, next) {
  var bodyjson = req.body;
  client.cusSpcSignDataAsPEM(bodyjson.plaintext,"替换你的加密狗密码",function(msg,msgJson){
    res.send(msg);
	});
});

module.exports = router;
