var soap = require('soap');

var url = 'https://dev-3dsecure.mygateglobal.com/ws3DSecure.WSDL';

soap.createClient(url, function(err, result) {
  console.log('in callback', { err: err, result: result });
});
console.log('waiting for callback...');
