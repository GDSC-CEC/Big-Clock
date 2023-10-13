const express = require('express');
const app = express();
const PORT = 8080;

app.use('/css', express.static('styles'));
app.use('/js', express.static('scripts'));
app.set('view engine', 'ejs');
menu = {
    MODE: 'clock', 
    THEME: 'dark',
    DATE: 'on',
    TZ: 'Asia/Kolkata' 
};

app.get('/clock', (_req, res) => {
    res.render( 'clock', menu);
})

app.get('/timer', (_req, res) => { res.render('timer', menu); })
app.get('/stopwatch', (_req, res) => { res.render('stopwatch', menu); })

app.listen(PORT, () => {
	console.log(`listening on ${PORT}`);
})
