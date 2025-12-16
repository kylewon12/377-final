# 377-final

# Website Link Checker
<p>
 My website/project was made to help those who use the internet a alot and who may also come across suspicious links. As a person who is interested in cybersecurity and data privacy, staying safe online has always been a topic I have been interested in. This website uses Google's Safe Browsing API that contains data regarding websites flagged as dangerous by Google while simultaneously levergaging a Supabase database to house user-submitted data. I hope this website will help future users stay safe while using the internet. 

This project was developed using Google Chrome on Windows 11 OS, and is designed to operate on the stated platforms. Mac compatability may be a future venture when funds are secured for a system that can run Mac OS.
</p>

# Developer Manual
## Applications and Dependencies

### Github/VS Code
<p>A Github account is a requirement for this application. It is free an a free account can be created at https://github.com.

This website was also built on VS Code and should be used for the best experience.</p>
### Node.js
<p> Node.js helps web developers create a remote environment to run their applications, similar to the "Go Live" feature in VS Code. 
 
To download Node.js go to https://nodejs.org/en/download and use the installer for the appropriate OS. </p>

### Nodemon
<p> Node.js is required for Nodemon, hence it being downloaded first. Nodemon is an application that automatically restarts the server page when edits are being made from the IDE, removing the need to mangually refresh the live page every time an edit is made. 

Once Node.js is installed, open Windows terminal using `Windows + r` and then typing `cmd`. Once in the terminal, type `npm install -g nodemon` to install Nodemon. Once installed, type `nodemon "your app/file"</p>` in your IDE's terminal.

### Supabase 
<p>Supabase allows developers to create databases for their web applications. It is preferred because it provides plenty of options for developers not wanting to spend a lot of money.

To install Supabase, go to your IDE terminal and type: `npm install @supabase/supabase-js
`. Once supabase is installed, create a .env file and create two variables called `SUPABASE_URL` and `SUPABASE_KEY`. Enter the appropriate information for each variable. </p>

### Vercel
<p>Vercel allows developers to deploy web applications by connecting with Github and using files in the repository to build your app. It is different than Node.js as it creates a real website while Node.js creates a live runtime environment.

No installation is required, however linking your Github repository to Vercel is required for it to work. </p>

## Running Application On a Server
### Using a Local Server
<p>With npm installed, type `npm start` in your working environment terminal. After running, text should appear stating that a server is running on port 3000. Now type localhost:3000 to access this server</p>

### Using Vercel
<p>After linking Github and Vercel, deploy your project by first importing the repository from Github

Once you have pushed changes using git in your working directory terminal, click the link that says "Domain" to open your app.
</p>

## Software Testing
<p>
 Google Safe Browsing API is not a comprehensive database of all websites and as a result, some links that seems malicious might not be flagged. In order to test the API request, use this link:

https://377-final-xi.vercel.app/review.html
</p>

## APIs
**Safe Browsing POST**
<p>
This post request is used with the Safe Browsing API that checks the URL for suspicious behavior. This request returns a JSON object with data regarding the request. Example: 
 </p>
`{
  "matches": [{
    "threatType":      "MALWARE",
    "platformType":    "WINDOWS",
    "threatEntryType": "URL",
    "threat":          {"url": "http://www.urltocheck1.org/"},
    "threatEntryMetadata": {
      "entries": [{
        "key": "malware_threat_type",
        "value": "landing"
     }]
    },
    "cacheDuration": "300.000s"
  }, {
    "threatType":      "MALWARE",
    "platformType":    "WINDOWS",
    "threatEntryType": "URL",
    "threat":          {"url": "http://www.urltocheck2.org/"},
    "threatEntryMetadata": {
      "entries": [{
        "key":   "malware_threat_type",
        "value": "landing"
     }]
    },
    "cacheDuration": "300.000s"
  }]
}`

**Create Review POST**
<p>This POST request allows the user to create a review to display in the Supabase database</p>

**Load Review Data GET**
<p>This GET request gets the entire table of reviews from the Supabase DB</p>

**Get Fact GET** 
<p>This GET request gets the fact of the day from the api-ninjas API</p>

**BTC GET** 
<p>This GET request gets Bitcoin closing price data from July 2024 to December 2024 to display on a chart</p>

**Password Generator GET** 
<p>This GET request gets a random password from the random password generator API</p>

**`app.get('/', (req,res))`**
<p>This get request takes the html file and creates a webpage out of it</p>

**`app.get('/reviews', async(req,res))`**
<p>This allows for retrieval of reviews into Supabase</p>

**`app.post('/reviews', async(req,res))`**
<p>This allows for insertion of reviews into Supabase</p>
