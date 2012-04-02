
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.version = function(req, res){
  res.json({version: '2.0'})
};
