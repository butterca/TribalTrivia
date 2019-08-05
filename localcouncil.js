//=========================================================================================
//=============================Initializing Firebase=======================================
//=========================================================================================
  var config = {
    apiKey: "AIzaSyBYFOuocBhI3ZMa34HTQQ3OG5iDfItdSS4",
    authDomain: "mywebapp-7bc86.firebaseapp.com",
    databaseURL: "https://mywebapp-7bc86.firebaseio.com",
    projectId: "mywebapp-7bc86",
    storageBucket: "mywebapp-7bc86.appspot.com",
    messagingSenderId: "858961654254"
  };
  firebase.initializeApp(config);

var firestore = firebase.firestore();


//=========================================================================================
//=============================Creating References to Database===============================
//=========================================================================================
//Room Reference - players in in
var docRefRoom;

//Room Data Reference - total players, page number
var docRefRoomData;

//Player Reference
var docRefPlayer;

//Question Reference
var docRefQuestion;

//REsponse Reference
var docRefResponseData;

//Response answer Ref
var docRefPlayerResponses;

//=========================================================================================
//=================================HTMLTEXTS/BUTTONS=======================================
//=========================================================================================
//Lives
//HEADER
const header = document.getElementById("header");

const lives = document.getElementById("lives");

//Output room# and Input room#
const roomNumberShown = document.querySelector("#roomNumberShown");
const roomID = document.querySelector("#roomID");

//Output playerName and Input playerName
const playerNameShown = document.querySelector("#nicknameOutput");
const playerName = document.querySelector("#playerName");

//Join Room Button
const joinGameButton = document.getElementById("joinGame");

//Start Game Button
const startGameButton = document.getElementById("startGame");

//Question Output header
const questionOutput = document.getElementById("questionOutput");

//Question pic
const questionPic = document.getElementById("questionPic");

//Response Text Field
const response1 = document.getElementById("response1");
const response2 = document.getElementById("response2");
const response3 = document.getElementById("response3");

//Submit response button
const submitResponse = document.getElementById("submitResponse");

//MC ABCD Buttons
const buttonA = document.getElementById("buttonA");
const buttonB = document.getElementById("buttonB");
const buttonC = document.getElementById("buttonC");
const buttonD = document.getElementById("buttonD");

//TF Buttons
const trueButton = document.getElementById("true");
const falseButton = document.getElementById("false");

//Additional Buttons

const buttonAdd0 = document.getElementById("buttonAdd0");
const buttonAdd1 = document.getElementById("buttonAdd1");
const buttonAdd2 = document.getElementById("buttonAdd2");
const buttonAdd3 = document.getElementById("buttonAdd3");
const buttonAdd4 = document.getElementById("buttonAdd4");
const buttonAdd5 = document.getElementById("buttonAdd5");
const buttonAdd6 = document.getElementById("buttonAdd6");
const buttonAdd7 = document.getElementById("buttonAdd7");
const buttonAdd8 = document.getElementById("buttonAdd8");
const buttonAdd9 = document.getElementById("buttonAdd9");
const buttonAdd10 = document.getElementById("buttonAdd10");
const buttonAdd11 = document.getElementById("buttonAdd11");
const buttonAdd12 = document.getElementById("buttonAdd12");
const buttonAdd13 = document.getElementById("buttonAdd13");
const buttonAdd14 = document.getElementById("buttonAdd14");
const buttonAdd15 = document.getElementById("buttonAdd15");
const buttonAdd16 = document.getElementById("buttonAdd16");
const buttonAdd17 = document.getElementById("buttonAdd17");
const buttonAdd18 = document.getElementById("buttonAdd18");
const buttonAdd19 = document.getElementById("buttonAdd19");
const buttonAdd20 = document.getElementById("buttonAdd20");
const buttonAdd21 = document.getElementById("buttonAdd21");
const buttonAdd22 = document.getElementById("buttonAdd22");
const buttonAdd23 = document.getElementById("buttonAdd23");
const buttonAdd24 = document.getElementById("buttonAdd24");

//Progress bar for timer
const progressBar =document.getElementById("progressBar");

//Picture elements
var fileButton = document.getElementById('fileButton');
var fileButtonHolder = document.getElementById('fileButtonHolder');
var uploader = document.getElementById('uploader');
var profPic = document.getElementById('profPic');

//Additional picture elements
var image1 = document.getElementById("img1");
var image2 = document.getElementById("img2");
var image3 = document.getElementById("img3");
var image4 = document.getElementById("img4");
var image5 = document.getElementById("img5");
var image6 = document.getElementById("img6");
var image7 = document.getElementById("img7");
var image8 = document.getElementById("img8");
var image9 = document.getElementById("img9");
var image10 = document.getElementById("img10");
var image11 = document.getElementById("img11");
var image12 = document.getElementById("img12");
var image13 = document.getElementById("img13");
var image14 = document.getElementById("img14");
var image15 = document.getElementById("img15");
var image16 = document.getElementById("img16");
var image17 = document.getElementById("img17");
var image18 = document.getElementById("img18");
var image19 = document.getElementById("img19");
var image20 = document.getElementById("img20");
var image21 = document.getElementById("img21");
var image22 = document.getElementById("img22");
var image23 = document.getElementById("img23");
var image24 = document.getElementById("img24");


//=========================================================================================
//========================================LOCAL/GLOBAL VARIABLES===================================
//=========================================================================================
// SMART TO SAVE EACH PLAYERS DATA GLOBALLY AND RE-ACCESS IT
// BETTER THAN COOKIES FOR SURE

//ROOM SIZE
var roomSize;

//USERS PLAYERNAME
var localPlayerName;

//USERS PLAYERNUMBER
var localPlayerNumber;

//USERS LIVES
var localPlayerLives = 1;
var changePlayerLivesBool = false;

//USERS ROOM
var playerRoom;

// VARIABLE CURRENT PAGE = 0, then after they enter increment
var currentPage = 0;

//ANSWERS
//for response question
var currentResponseAnswer;
var correctResponseAnswer;

//for trivia question
var currentTriviaAnswer;
var correctTriviaAnswer;


//NEW MC ANSWER
var currentMCAnswer;
var correctMCAnswer;


//CURRENT QUESTION
var currentQuestion;

//SCORE
var currentLeaderLives = 0;

//================================================================================================
//==========================================SETUP ROOM/GAME==========================================
//=================================================================================================
//JOIN ROOM BUTTON CLICK
//First - save the room# input and playerName input to firestore
//Second - put the room# and playerName at the top of the screen
//Third - erase the unneeded text field and buttons
//Fourth - call the changeQuestion function
//         ...this function gets a question from the database and displays it
//          ...this function also unblocks a text entry and button to collect responses
//var docRef1;

//Hide all question/game/pic stuff
function startGameHide(){
    startGameButton.style.display = "none";
    header.style.display = "none";
    buttonA.style.display = "none";
     buttonB.style.display = "none";
     buttonC.style.display = "none";
     buttonD.style.display = "none";
     trueButton.style.display = "none";
     falseButton.style.display = "none";
    buttonAdd0.style.display = "none";
    buttonAdd1.style.display = "none";
    buttonAdd2.style.display = "none";
    buttonAdd3.style.display = "none";
    buttonAdd4.style.display = "none";
    buttonAdd5.style.display = "none";
    buttonAdd6.style.display = "none";
    buttonAdd7.style.display = "none";
    buttonAdd8.style.display = "none";
    buttonAdd9.style.display = "none";
    buttonAdd10.style.display = "none";
    buttonAdd11.style.display = "none";
    buttonAdd12.style.display = "none";
    buttonAdd13.style.display = "none";
    buttonAdd14.style.display = "none";
    buttonAdd15.style.display = "none";
    buttonAdd16.style.display = "none";
    buttonAdd17.style.display = "none";
    buttonAdd19.style.display = "none";
    buttonAdd18.style.display = "none";
    buttonAdd20.style.display = "none";
    buttonAdd21.style.display = "none";
    buttonAdd22.style.display = "none";
    buttonAdd23.style.display = "none";
    buttonAdd24.style.display = "none";
    
    lives.style.display = "none";
    
    questionOutput.style.display = "none";
    questionPic.style.display = "none";
    
    response1.style.display = "none";
     response2.style.display = "none";
     response3.style.display = "none";
    
    submitResponse.style.display = "none";
    
    progressBar.style.display = "none";
    
    fileButtonHolder.style.display = "none";
    fileButton.style.display = "none";
    
    uploader.style.display = "none";
    
    profPic.style.display = "none";
    
    image1.style.display = "none";
     image2.style.display = "none";
     image3.style.display = "none";
     image4.style.display = "none";
     image5.style.display = "none";
     image6.style.display = "none";
     image7.style.display = "none";
     image8.style.display = "none";
     image9.style.display = "none";
     image10.style.display = "none";
     image11.style.display = "none";
     image12.style.display = "none";
     image13.style.display = "none";
     image14.style.display = "none";
     image15.style.display = "none";
     image16.style.display = "none";
     image17.style.display = "none";
     image18.style.display = "none";
     image19.style.display = "none";
     image20.style.display = "none"
     image21.style.display = "none"
     image22.style.display = "none"
     image23.style.display = "none"
     image24.style.display = "none"
}


console.log("HIDE THIS SHIT");
startGameHide();

 


joinGameButton.addEventListener("click", function(){
    //Save room and player name
    const roomToSave = roomID.value;
    const playerToSave = playerName.value;
    //console.log("I am going to save " + roomToSave + " and " + playerToSave + " to Firestore");
    
       
    //Save Local Player Data
    window.playerRoom = roomToSave;
    window.localPlayerName = playerToSave;
    
    //create correct Data Refs
    docRefRoom = firestore.collection(roomToSave);
    docRefRoomData = firestore.collection("RoomData").doc(roomToSave);
    docRefPlayer = docRefRoom.doc(window.localPlayerName);
    docRefQuestion = firestore.collection("questions");
    docRefResponseData = firestore.collection("responses").doc(playerRoom);
    

    
    //console.log("WHAT THE FUCK IS THE PLAYER NUMBER GONNA BE? " + localPlayerNumber);
    //SETTING PLAYER DATA
    docRefPlayer.set({
        playerName: playerToSave,
        playerID: docRefPlayer.id,
        roomNumber: roomToSave,
        lives: 1
        }).then(function(){
        //console.log("Document written with Room ID: ", docRef1.id);
        playerNameShown.innerHTML = "Name: " + playerToSave;
        roomNumberShown.innerHTML = "Game#: " + roomToSave;

        //need to change the way the page looks!
        playerNameShown.style.fontSize = "12px";

        //hiding playername entry
        playerName.style.display = "none";

        //showing room
        roomNumberShown.style.fontSize = "12px";
        //hiding room entry
        roomID.style.display = "none";

        //adding lives board
        lives.style.fontSize = "12px";
        lives.style.display = "block";
        lives.innerText = "Lives: " + localPlayerLives;

        //hiding join room button
        joinGameButton.style.display = "none";


         //Adding start button for first person that joins
            docRefRoom.get().then(res => {
                console.log(res.size);
                if(res.size ==  1){
                    startGameButton.style.display = "block";
                }else{
                    console.log("room size = " + res.size);
                }
                localPlayerNumber = res.size;
                });
        
        //getting realtime updates
        getRealtimeUpdates();

        }).catch(function(error){
        console.error("Got an error: ", error);
    });

    
    //CAll to allow player to post pic as well
    setProfilePic();


})


//================================================================================================
//==============================================FUNCTIONS==========================================
//==============================================================================================

//add  player numbers

function addPlayerNumbers(){
    
    docRefPlayer.update({
                        playerNumber: localPlayerNumber
            }).catch(function(error){
                        console.error("got an error", error);
            });
    
    
    //update room size for players w/o start button 
     
    docRefRoom.get().then(res => {
        
        console.log("room size.... is .... " + res.size);
        
        roomSize = res.size;

            
     });
    
    console.log("players Number is " + localPlayerNumber + " and room size is " + roomSize);
    
    fileButtonHolder.style.display = "none";
    
    //nextPage();
    
    if(localPlayerNumber == 1){
        
        const increment = firebase.firestore.FieldValue.increment(1);
        docRefRoomData.update({ pageNumber: increment })
        
    }
    
}

startGame.addEventListener("click", function(){
    
    console.log("GAME HAS BEEN STARTED");

    docRefResponseData.set({ responses: 0 });
    
    docRefRoom.get().then(res => {
        
        roomSize = res.size;
        
            docRefRoomData.set({
                roomNumber: playerRoom,
                numberOfPlayers: roomSize,
                pageNumber: 1
            }).then(function(){

            }).catch(function(error){
                console.error("Got an error: ", error);
            });
            
     });
    
    console.log("THE PLAYERS ROOM = " + playerRoom);
    
    startGameButton.style.display = "none";
    
    
})

//CLEARING TEXT FIELD
function ClearTextField() {
     response.value = "";
}



//=======================================TRIVIA QUESTION===================================
// ======================= NEW GET/CHECK MC QUESTION ====================================


function getMCQuestion(i){
    
    
    questionOutput.style.display = "block";
    console.log("GETTING MC QUESTION");
    //show ABCD Buttons
    buttonA.style.display = "block";
    buttonB.style.display = "block";
    buttonC.style.display = "block";
    buttonD.style.display = "block";
    
    //show lives
//    lives.style.display = "block";
//    lives.style.fontSize = "12px";

    //Getting trivia questions
    const qName = i.toString();

    const docRefTQ = firestore.collection("questions").doc(qName);
    //var correctAnswer;
    
    //RESET RESPONSE # BEFORE GETTING QUESTION
    docRefResponseData.update({ responses: 0});

    docRefTQ.get().then(function(doc){
            if(doc.exists){
                const questionData = doc.data();
                
                correctMCAnswer = questionData.correctAnswer;
                //console.log("the doc data IS HERE= ", questionData.question);
                
                questionOutput.innerText = questionData.question;
                buttonA.innerText = questionData.optionA;
                buttonB.innerText = questionData.optionB;
                buttonC.innerText = questionData.optionC;
                buttonD.innerText = questionData.optionD;

                //make sure its working
                //console.log("the correct answer is saved as" + correctTriviaAnswer);


            }else{
                console.log("no such");
            }
        }).catch(function(error){
            console.log("error", error);
        });
    
}

function checkMCAnswer(buttonID){
    //console.log("option1 = " + option1.innerText + "and the correct option is " + correctMCAnswer);
        const increment = firebase.firestore.FieldValue.increment(1);
    
    
    docRefResponseData.update({ responses: increment });
    
    console.log("BUTTONID = " + buttonID);
    
    currentMCAnswer = document.getElementById(buttonID);
    
    
    
    //CHECK ANSWER
    if(currentMCAnswer.innerText == correctMCAnswer){
        
        localPlayerLives += 1;
        //changePlayerLivesBool = true;
        //changePlayerLivese();
        
        
    }else{
        
        localPlayerLives -= 1;
        //changePlayerLivesBool = false;
    }
    
    
    
    questionOutput.style.display = "none";
    //HIDE STUFF
    buttonA.style.display = "none"; 
    buttonB.style.display = "none";
    buttonC.style.display = "none";
    buttonD.style.display = "none";
    
    header.style.display = "block";
    header.innerText = "waiting for others to answer";
    
    
    //CHANGE PAGE AFTER LAST PLAYER ANSWERS
    

    
    //docRefRoomData.update({ responses: increment });
      //var docRefResponseData = firestore.collection("responses").doc(playerRoom);
    
    
    

    setTimeout(checkForAllResponses, 1000);
    
    
}

function checkForAllResponses(){
    
    updateRoomSize();
    
      docRefResponseData.get().then(function(doc){
            if(doc.exists){
                const responseData = doc.data();
                const currentResponses = responseData.responses;
                //changePlayerLives();
                
                console.log("RESPONSES so far = " + currentResponses + "CURRENT room size = " + roomSize);
                
                 console.log(responseData.responses + " RESPONSES");
                if(currentResponses == roomSize){
                    
                    console.log(responseData.responses + " RESPONSES");
                    
                    const increment = firebase.firestore.FieldValue.increment(1);
                    docRefRoomData.update({ pageNumber: increment })
                    
                    //docRefResponseData.update({ responses: 0});
                    
                    console.log("RESET RESPONSEEEESSSS");
                }


            }else{
                console.log("no such");
            }
        }).catch(function(error){
            console.log("error", error);
        });
    
}


//===================================RESPONSETOMCQUESTION==================================

var buttonNumberArray;

function getRMCQuestion(qNum){
    
    questionOutput.style.display = "block";
    console.log("GETTING RMC QUESTION");
    
    //Getting trivia questions
    const qName = qNum.toString();

    const docRefRMC = firestore.collection("questions").doc(qName);
    
    console.log("question name = " + qName);
    //var correctAnswer;
    
    currentQuestion = qName;
    
    //RESET RESPONSE # BEFORE GETTING QUESTION
    docRefResponseData.update({ responses: 0});

    //GETTING QUESTION
    docRefRMC.get().then(function(doc){
            if(doc.exists){
                const questionData = doc.data();
                
                correctMCAnswer = questionData.correctAnswer;
                //console.log("the doc data IS HERE= ", questionData.question);
                
                questionOutput.innerText = questionData.question;

            }else{
                console.log("no such");
            }
        }).catch(function(error){
            console.log("error", error);
        });
    
    //allowing player to submit response
    
    
    response1.style.display = "block";
    submitResponse.style.display = "block";
    
    
    
}


submitResponse.addEventListener("click", function(){
    
    //const questionToSave = questionOutput.innerText;
    
    //currentQuestion = questionToSave.toString();
    
//    const increment = firebase.firestore.FieldValue.increment(1);
//    
//    docRefResponseData.update({ responses: increment });
    
    
    //check to make sure response is not the answer
    //if it is the answer, tell user to enter a fake response
    
    const responseToSave = response1.value;
    
    if(responseToSave == correctMCAnswer){
        header.style.display = "block";
        header.innerText = "you were correct, enter a new answer to fool others";
        getRMCQuestion();
    }
    
    const buttonToSaveResponseTo = "buttonAdd" + localPlayerNumber;
    
    var playerNumString = localPlayerNumber.toString(); 
    
    //save response in database
    docRefPlayerResponses = firestore.collection("responses").doc(playerRoom).collection(currentQuestion);
    
    
    docRefPlayerResponses.doc(playerNumString).set({
        response: responseToSave 
    })
    
    
    //HIDE STUFF
    
    response1.style.display = "none";
    submitResponse.style.display = "none";
    
    //document.getElementById(buttonToSaveResponseTo).innerText = responseToSave;
    
    console.log("calling check RMC responses!!");
    //place to increment the # of responses gotten
    setTimeout(checkRMCResponses, 1000);
    //getCreatedRMCQuestion();
    
    

})

function checkRMCResponses(){
    
    //track roomSize
        docRefPlayerResponses.get().then(res => {
            
            var rss = res.size;
            console.log("player responses = " + rss + "room size = " + roomSize);
            
            //set question up
//            setupRMCQuestion();
            
            

            if(res.size == roomSize){
                
                console.log("THHEFUCKISTHEPAGENUMBER=====    " + currentPage);
                //displaying RMCQuestion
                //getCreatedRMCQuestion();
                //currentPage++;
                //nextPage();
                //setTimeout(showRMCQuestion, 1000);
                docRefRoomData.update({
                        pageNumber: 7
                    }).catch(function(error){
                        console.error("got an error", error);
                    });
                
            }
            
         });
    
    
}

function showRMCQuestion(){
    //hide submit response and text field
    response1.style.display = "none";
    submitResponse.style.display = "none";
    
    
      //show playerButtons
    
    for(var i = 1; i<= roomSize; i++){
        var buttonIDsToShow = "buttonAdd" + i;
        
        //console.log("button id lookin for = " + buttonIDsToShow);
        
        document.getElementById(buttonIDsToShow).style.display = "block";
        
        //buttonIDsToShow.style.display = "block";
        
    }
    
    firestore.collection("questions").doc("rmc").get().then(function(doc){
            if(doc.exists){
                const questionData = doc.data();
                
                currentMCAnswer = questionData.correctAnswer;
    
                buttonAdd0.innerText = currentMCAnswer;
                
                
                buttonAdd0.style.display = "block";

            }else{
                console.log("no such");
            }
        }).catch(function(error){
            console.log("error", error);
        });
        
    
}

function setupRMCQuestion(){

    for(var i = 1; i<= roomSize; i++){
        
        var buttonIDsToShow = "buttonAdd" + i;
        
        console.log("button id lookin for = " + buttonIDsToShow);
        
        console.log("WHAT IS I.. " + i);
        
        //setandshow RMC
        setShowRMC(i);
        
        //buttonIDsToShow.style.display = "block";
        
    }
    
}

function setShowRMC(i){
    
        var docRefPR = firestore.collection("responses").doc(playerRoom).collection(currentQuestion).doc(i.toString());
        
        docRefPR.get().then(function(doc){
            if(doc.exists){
                const responseData = doc.data();
                console.log("FUCKKKKKKKKKKKK");
                
                console.log("player # " + i + "'s response = " + responseData.response);
                
                var buttonIDsToShow = "buttonAdd" + i;
                document.getElementById(buttonIDsToShow).innerText = responseData.response;

            }else{
                console.log("no such");
            }
        }).catch(function(error){
            console.log("error", error);
        });
        
        
}

function checkRMCAnswer(buttonID){
    //console.log("option1 = " + option1.innerText + "and the correct option is " + correctMCAnswer);
    const increment = firebase.firestore.FieldValue.increment(1);
    
    
    docRefResponseData.update({ responses: increment });
    
    console.log("BUTTONID = " + buttonID);
    
    currentMCAnswer = document.getElementById(buttonID);
    
    
    
    //CHECK ANSWER
    if(currentMCAnswer.innerText == correctMCAnswer){
        
        localPlayerLives += 1;
        //changePlayerLivesBool = true;
        //changePlayerLivese();
        
        
    }else{
        
        localPlayerLives -= 1;
        //changePlayerLivesBool = false;
    }
    
    
    
    questionOutput.style.display = "none";
    buttonAdd0.style.display = "none";
    
    //HIDE BUTTONS
     for(var i = 1; i<= roomSize; i++){
        
        var buttonIDsToShow = "buttonAdd" + i;
        
        
        document.getElementById(buttonIDsToShow).style.display = "none";
        
    }
    
    
    header.style.display = "block";
    header.innerText = "waiting for others to answer";
    
    
    //CHANGE PAGE AFTER LAST PLAYER ANSWERS
    

    
    //docRefRoomData.update({ responses: increment });
      //var docRefResponseData = firestore.collection("responses").doc(playerRoom);
    
    
    

    setTimeout(checkForAllResponses, 1000);
    
    
}



//======================================PLAYER Lives=============================================

function changePlayerLives(){
    
        //change the player lives in database
          firestore.collection(playerRoom).doc(localPlayerName).update({
                        lives: localPlayerLives
                    }).catch(function(error){
                        console.error("got an error", error);
                    });
    
        //change the player lives displayed on site
        lives.innerText = "Lives: " + localPlayerLives;
        
}


//==============================================PIC STUFF=========================================
// UPLOADING PICS TO DATABASE

function setProfilePic(){
    fileButtonHolder.style.display = "block";
}

fileButton.addEventListener('change', function(e){
    //get file

    var file = e.target.files[0];

    //create storage ref
    var storageRef = firebase.storage().ref(playerRoom + '/' + localPlayerName + '/' + file.name);

    //save file name
    picName = file.name;
    
    //upload file

    var task = storageRef.put(file);
    //update progress bar
    task.on('state_changed',

            function progress(snapshot){
        var percentage = snapshot.bytesTransferred / snapshot.totalBytes *100;
        uploader.value = percentage;
    },
            function error(err){

    },
            function complete(){
        addProfilePic();

    }  
           );          
                            });

//adding function to immediantely upload profile pic
function addProfilePic(){
    
   profPic.style.display = "block";
    
    var storage2 = firebase.storage();

    var storage2Ref = storage2.ref();
    var spaceRef = storage2Ref.child(playerRoom + '/' + localPlayerName + '/' + picName);

    console.log("made it into showpic function");

            // Get the download URL
        storage2Ref.child(playerRoom + '/' + localPlayerName + '/' + picName).getDownloadURL().then(function(url) {
          // Insert url into an <img> tag to "download"
            var test = url;
            document.getElementById('profPic').src = test;
        }).catch(function(error) {
            console.log("didn't work ");
        });
    
    
    //Adding pic file name to player data
    console.log("ROOM IS " + playerRoom + "PLAYER IS " + localPlayerName);
    firestore.collection(playerRoom).doc(localPlayerName).update({
                        picFileName: picName
                    }).catch(function(error){
                        console.error("got an error", error);
                    });
    
    fileButtonHolder.style.display = "none";
    
    header.style.display = "block";
    
    
}


//================================END GAME / SHOW LEADERBOARDS ==============================

function endGame(){
    //window.location.href = "./mainscreen.html";
    window.location.href = "./mainscreen.html";
}
//
//function showLeaderboards(){
//    
//}

function showScoreboard(){
    
    console.log("made it into scoreboard function");
     docRefRoom.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                const myData = doc.data();
                // doc.data() is never undefined for query doc snapshots
                //console.log("something");
                //console.log("the players scores" + myData.playerName + "  " + myData.score);
                //console.log(doc.id, " => ", doc.data());
                
                console.log("what is my score??" + myData.score);
                
                if(myData.lives > currentLeaderLives){
                    
                    currentLeaderLives = myData.lives;
                    
                    header.style.display = "block";
                    header.innerText = "WINNER = " + myData.playerName;
                    //get pic file name by adding pic file name to each player when upload pic
                    
                    var path = myData.roomNumber + '/' + myData.playerName + '/' + myData.picFileName;
                    image1.style.display = "block";
                    showLeaderPic(path);
                   
                }
                
            });
        });
}

function showLeaderPic(path){
    console.log("made it into showLeaderpic function");
    
    //var apath = path.toString();
        var storage2 = firebase.storage();

        var storage2Ref = storage2.ref();
    
    //console.log("PATH IS: " + path);
    
        // Get the download URL
        storage2Ref.child(path).getDownloadURL().then(function(url) {
          // Insert url into an <img> tag to "download"
            var test = url;
            document.getElementById('img1').src = test;
        }).catch(function(error) {
            console.log("didn't work ");
        });
    
}

//=========================================================================================
// ====================================PAGE UPDATING STUFF ================================
//=========================================================================================

//NEXT PAGE FUNCTION
function nextPage(){
  
    //console.log("WHAT IS THE CURRENT PAGE FOR THIS PLAYER " + window.currentPage);
    //console.log("WHAT IS THE LOCAL PLAYER NAMEEEE " + window.localPlayerName);
    
    window.currentPage += 1;
    
    console.log("THE PLAYERS ROOM dasgh= " + playerRoom);
    //console.log("CHANGING CURRENT PAGE HEREEE TO " + window.currentPage);
       docRefRoomData.update({
                        pageNumber: currentPage
                    }).catch(function(error){
                        console.error("got an error", error);
                    });
    
    getRealtimeUpdates();
    
}

//PROGRESS BAR
//============================= MC QUESTION TIMER ================================
function startTimer(time){
    var timeleft = parseInt(time);
    var downloadTimer = setInterval(function(){
        document.getElementById("progressBar").value = 10 - timeleft;
        timeleft -= 1;
        
        console.log("TIME LEFT = " + timeleft);
            if(timeleft <= 0){
                //clearPage();
               
                    changePlayerLives();
                
                
                nextPage();
                clearInterval(downloadTimer);
            }
        }, 1000);
}


function removePlayers(){
    
        if(localPlayerLives ==0){
                //DELETE PLAYER DOCUMENT
                docRefPlayer.delete().then(function() {
                    console.log("Document successfully deleted!");
                }).catch(function(error) {
                    console.error("Error removing document: ", error);
                });
                
            //END GAME
             endGame();
        }
}
        
function updateRoomSize(){
        
        //track roomSize
        docRefRoom.get().then(res => {
            
            roomSize = res.size;

            docRefRoomData.update({
                    numberOfPlayers: res.size
                    }).catch(function(error){
                        console.error("got an error", error);
                    });
            
         });
    
    console.log("THE ROOM SIZE IS NOWWW " + roomSize);
}
        
        
       



//CHANGING PAGE NUMBER
function updateScreen(doc){
    
    //check for players to remove everytime
    removePlayers();
    //make sure room size is updated everytime
    updateRoomSize();
    
    
    if(doc && doc.exists){
        const myData = doc.data();
        console.log("MADE IT INTO THE DOCUMENTTTTT " + myData.pageNumber);
       
        // AFTER GAME IS STARTED
        if(myData.pageNumber == 1){
            
            addPlayerNumbers();
            
            
        }
        else if(myData.pageNumber == 2){
            
            header.style.display = "none";
            
            getMCQuestion(11);
//            if(localPlayerNumber==1){
//            startTimer(10);
//            }
            
            //checkForAllResponses();
    
        }
        else if(myData.pageNumber == 3){
            
            header.style.display = "none";
            
            
            changePlayerLives();
            getMCQuestion(0);
            
            //startTimer(10);
            
                         
        }
        else if(myData.pageNumber == 4){
            
            header.style.display = "none";
            
             changePlayerLives()
            
            getMCQuestion(2);
        }
        else if(myData.pageNumber == 5){
            
            header.style.display = "none";
             
             changePlayerLives()
            
            getMCQuestion(1);
            
            
        } 
        else if(myData.pageNumber == 6){
            
            header.style.display = "none";
             
            changePlayerLives();
            
            getRMCQuestion("rmc");
            
        } 
          else if(myData.pageNumber == 7){
              
            setupRMCQuestion();  
             
            setTimeout(showRMCQuestion, 1000);
            
        } 
           else if(myData.pageNumber == 8){
            
            header.style.display = "none";
            profPic.style.display = "none";
               
            changePlayerLives();
               
            showScoreboard();
            
        } 
        
    }
}


getRealtimeUpdates = function () {
    //console.log("DocRefRoom = " + playerRoom);
    docRefRoomData.onSnapshot( function(doc){
        console.log("MADE IT INTO update screen");
        updateScreen(doc);
    });
}

//console.log("heregha");
//console.log("player roommmmmmmmmmmm = " + playerRoom);

if(playerRoom != null){
getRealtimeUpdates();
}

//RESET FIRESTORE TO PAGE 0 on EXIT
window.onbeforeunload = confirmExit;

function confirmExit(){
    alert("confirm exit is being called");
    firestore.collection("RoomData").doc(playerRoom).update({
                        pageNumber: 0
                    }).catch(function(error){
                        console.error("got an error", error);
                    });
    return false;
    
    
    
    
    //DELETE EVERYTHING!!!
    //deleteCollection(playerRoom);
    

}



