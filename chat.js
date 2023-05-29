function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();
    if(hours < 10){hours = "0" + hours;}
    if (minutes < 10) {minutes = "0" + minutes;
    }
    let time = hours + ":" + minutes;
    return time;
}
// Gets the first message
function firstBotMessage() {
    let firstMessage = "hi here Arish and what about you !, i can play 'rock','paper','scissors' , write your choise which you want in small letters";
    document.getElementById("botStarterMessage1").innerHTML = '<p id="botStarterMessage1" class="botText" style="color:crimson;"><span>'+firstMessage+'</span></p>';
    let time = getTime();
 document.getElementById("botStarterMessage").innerHTML = '<h5 class="time">' + time + '</h5>';
}

firstBotMessage();

function getResponse() {
    let userText = $("#text1").val();

    if (userText == "") {
        userText = "check the sending message!";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#text1").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

function sendButton() {
    getResponse();
}

// Retrieves the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    setTimeout(() => {
    getHardResponse(sampleText);
    }, 1000)
}


function getBotResponse(input) {
  //rock paper scissors
    var word = ['rock','paper','scissors'];
    
    if (input == "rock") {
        rand = word[Math.floor(Math.random()*word.length)] ;
        if(rand == "rock"){
            result = rand+"  Match Draw ";   
        }
        else if(rand == "paper"){
            result = rand+" My Victory";
        }
        else if(rand == "scissors"){
            result = rand+" oooh My Bad Luck";
        }
        return (result);
    }
     else if (input == "paper") {
        rand = word[Math.floor(Math.random()*word.length)] ;
        if(rand == "rock"){
            result = rand+" oooh My Bad Luck";   
        }
        else if(rand == "paper"){
            result = rand+"  Match Draw ";
        }
        else if(rand == "scissors"){
            result = rand+" My Victory";
        }
        return (result);
    }
     else if (input == "scissors") {
        rand = word[Math.floor(Math.random()*word.length)] ;
        if(rand == "rock"){
            result = rand+" My Victory";   
        }
        else if(rand == "paper"){
            result = rand+" oooh My Bad Luck";
        }
        else if(rand == "scissors"){
            result = rand+"  Match Draw ";
        }
        return (result);
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}
