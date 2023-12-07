import inquirer from "inquirer"
import qr from "qr-image"
import fs from "fs"

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message:"Enter the URL:",
        name:"URL"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url=answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('your-qr.png'));
    fs.writeFile('qr-text.txt', url, function(err) {})
  })
  .catch((err) => {
    if (err.isTtyError) {
      // Prompt couldn't be rendered in the current environment
       console.error("Prompt couldn't be rendered in the current environment.");
    } else {
      // Something else went wrong
       console.error("An error occurred:", error);
    }
  });
  
