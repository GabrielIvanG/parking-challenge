const server = require('./src/server.js');
const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
	console.log('%s listening at 3001');
});
