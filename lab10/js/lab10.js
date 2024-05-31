//Daniel Gallegos
//Lab 10: JavaScript for the Web
// 17 May 2024

function generateRandomText() {
    const text = "Alpha, Bravo, Charlie, Delta, Echo, Foxtrot, Golf, Hotel, India, Juliet, Kilo, Lima, Mike, November, Oscar, Papa, Quebec, Romeo, Sierra, Tango, Uniform, Victor, Wiskey, Xray, Yankee, Zulu";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random()*(max - min + 1)) + min;
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    return text.slice(randStart, randStart + randLen);
}
//click listener for button
$("#make-convo").click(function(){
    const newText = generateRandomText();
    console.log("Button is clicked");
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});