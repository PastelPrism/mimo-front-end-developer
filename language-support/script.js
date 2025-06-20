let message = "";
let language = "English";
language = "Japanese";
language = "Spanish";
language = "German";
language = "Dutch";

if (language === "English") {
  message = "Thank You";
} else if (language === "Spanish") {
  message = "Gracias"; 
} else if (language === "German") {
  message = "Danke";
} else if (language === "Dutch") {
  message = "Bedankt";
} else {
   message = "We don't support " + language;
}

console.log(message);
