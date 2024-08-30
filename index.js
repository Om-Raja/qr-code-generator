// Using inquirer to give prompt to user and take user input 
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {message: "Paste a URL: ",
      name: "URL"
    }
  ])
  .then((answers) => {
    console.log(answers);
    const url = answers.URL;

    var qr_png = qr.image(url); // default type = png
    qr_png.pipe(fs.createWriteStream('qr.png'));

    fs.writeFile("url.txt", url, (err)=>{
      if(err) throw err;
      console.log("File saved");
    })

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
