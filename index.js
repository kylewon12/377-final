
const express = require('express');
const bodyParser = require('body-parser');
const supabaseClient = require('@supabase/supabase-js');
const dotenv = require('dotenv');
const app = express();
const port = 3000;
dotenv.config()
app.use(bodyParser.json());

// initialize supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = supabaseClient.createClient(supabaseUrl,supabaseKey);


app.get('/reviews', async(req,res) =>{
console.log('Attempting to GET all reviews');

    const {data, error} = await supabase.from('review').select();
    if  (error) {
        console.log(`Error: ${error}`)
        res.statusCode = 500;
        res.send(error);
        return;
    } else {
        res.send(data)
    }
});

app.post('/review',  async(req, res) => {
    console.log('Adding review');
    console.log('Request:', req.body)

    const name = req.body.firstName;
    const website = req.body.lastName;
    const review = req.body.state;

    const {data, error} = await supabase.from('review').insert({
        name:name,
        website:website,
        review: review
    })
    .select();

    if  (error) {
        console.log(`Error: ${error}`)
        res.statusCode = 500;
        res.send(error);
        return;
    } else {
        res.send(data)
    }
    res.send(req.body);
    
});


app.listen(port, () => {
    console.log('App is available on port:', port)
})
