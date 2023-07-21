const express = require('express');
const app = express();
const PORT = 8080;

app.use('/css', express.static('styles'));
app.use('/js', express.static('scripts'));

app.get('/', (_req, res) => {
	console.log('hello');
	res.send('hello, this is big-clock');
})


app.listen(PORT, () => {
	console.log(`listening on ${PORT}`);
})
