import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
inquirer
    .prompt([
        {
            "message":"Enter your URL here: ",
            "name" : "URL"
        }
    ])
    .then((answers) => {
        var qr_svg = qr.image(answers.URL);
        qr_svg.pipe(fs.createWriteStream('qr.png'));   
        
        fs.writeFile("url.txt", answers.URL , (err)=>{
            if(err) throw err;
            console.log("success in writing URL file")
        })
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log(' Prompt couldnt be rendered in the current environment');
        } else {
            // Something else went wrong
        }
    });

// var svg_string = qr.imageSync('I love QR!', { type: 'svg' });