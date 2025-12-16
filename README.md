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
