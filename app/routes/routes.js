module.exports = function(router) {
	router.get('*', function(req, res) {
		res.sendfile('./public/index.html'); 
	});
};