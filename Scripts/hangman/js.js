//List of possible random words
var possiblewords = ['abruptly', 'absurd', 'abyss', 'affix', 'askew', 'avenue', 'awkward', 'axiom', 'azure', 'bagpipes', 'bandwagon', 'banjo', 'bayou', 'beekeeper', 'bikini', 'blitz', 'blizzard', 'boggle', 'bookworm', 'boxcar', 'boxful', 'buckaroo', 'buffalo', 'buffoon', 'buxom', 'buzzard', 'buzzing', 'buzzwords', 'caliph', 'cobweb', 'cockiness', 'croquet', 'crypt', 'curacao', 'cycle', 'daiquiri', 'dirndl', 'disavow', 'dizzying', 'duplex', 'dwarves', 'embezzle', 'equip', 'espionage', 'euouae', 'exodus', 'faking', 'fishhook', 'fixable', 'fjord', 'flapjack', 'flopping', 'fluffiness', 'flyby', 'foxglove', 'frazzled', 'frizzled', 'fuchsia', 'funny', 'gabby', 'galaxy', 'galvanize', 'gazebo', 'giaour', 'gizmo', 'glowworm', 'glyph', 'gnarly', 'gnostic', 'gossip', 'grogginess', 'haiku', 'haphazard', 'hyphen', 'iatrogenic', 'icebox', 'injury', 'ivory', 'ivy', 'jackpot', 'jaundice', 'jawbreaker', 'jaywalk', 'jazziest', 'jazzy', 'jelly', 'jigsaw', 'jinx', 'jiujitsu', 'jockey', 'jogging', 'joking', 'jovial', 'joyful', 'juicy', 'jukebox', 'jumbo', 'kayak', 'kazoo', 'keyhole', 'khaki', 'kilobyte', 'kiosk', 'kitsch', 'kiwifruit', 'klutz', 'knapsack', 'larynx', 'lengths', 'lucky', 'luxury', 'lymph', 'marquis', 'matrix', 'megahertz', 'microwave', 'mnemonic', 'mystify', 'naphtha', 'nightclub', 'nowadays', 'numbskull', 'nymph', 'onyx', 'ovary', 'oxidize', 'oxygen', 'pajama', 'peekaboo', 'phlegm', 'pixel', 'pizazz', 'pneumonia', 'polka', 'pshaw', 'psyche', 'puppy', 'puzzling', 'quartz', 'queue', 'quips', 'quixotic', 'quiz', 'quizzes', 'quorum', 'razzmatazz', 'rhubarb', 'rhythm', 'rickshaw', 'schnapps', 'scratch', 'shiv', 'snazzy', 'sphinx', 'spritz', 'squawk', 'staff', 'strength', 'strengths', 'stretch', 'stronghold', 'stymied', 'subway', 'swivel', 'syndrome', 'thriftless', 'thumbscrew', 'topaz', 'transcript', 'transgress', 'transplant', 'triphthong', 'twelfth', 'twelfths', 'unknown', 'unworthy', 'unzip', 'uptown', 'vaporize', 'vixen', 'vodka', 'voodoo', 'vortex', 'voyeurism', 'walkway', 'waltz', 'wave', 'wavy', 'waxy', 'wellspring', 'wheezy', 'whiskey', 'whizzing', 'whomever', 'wimpy', 'witchcraft', 'wizard', 'woozy', 'wristwatch', 'wyvern', 'xylophone', 'yachtsman', 'yippee', 'yoked', 'youthful', 'yummy', 'zephyr', 'zigzag', 'zigzagging', 'zilch', 'zipper', 'zodiac', 'zombie'];

var guesscount = 10;
var answer = "";
var answerdisp = "-------";
var guessedletters = "";
var gamerunning = false

//Function to choose a new word from the array of possible words and return displays to default
function newgame(){
    document.getElementById("button").innerHTML = "Guess Letter";
    rand = Math.floor(Math.random()*possiblewords.length);
    answer = possiblewords[rand];
    answerdisp = "-".repeat(answer.length);
    guessedletters = "";
    guesscount = 10;
    document.getElementById("hangimage").src = "Images/hangman/hangman10.jpg";
    document.getElementById("placeholder").innerHTML = answerdisp;
    document.getElementById("gamestatus").innerHTML = "Game is running, try guessing letters!";
    gamerunning = true;
}

//A function to run every time the guess letter button is pressed
function guessletter(){

    //Makes sure the game is running and that a letter is typed
    if(gamerunning && document.getElementById("guessinput").value.length != 0){

    //Define letter based on input
    var letter = document.getElementById("guessinput").value[0];

    //check to see if the letter is in the answer
    if(answer.indexOf(letter) != -1) {

        //Modifies the placeholder display to show the newly found letter
        for(x = 0; x <= answer.length; x++){
            if(answer[x] == letter){
                answerdisp = answerdisp.substr(0,x)+letter+answerdisp.substr(x+1, answerdisp.length);
                document.getElementById("placeholder").innerHTML = answerdisp;
            }
        }
    } else {

        //Updates the guess counts to reflect an incorrect choice
        guesscount--;
        document.getElementById("hangimage").src = "Images/hangman/hangman"+guesscount+".jpg";

    }

    //Updates the guessed letter display if it isn't currently there
    if(guessedletters.indexOf(letter) == -1){
        guessedletters = guessedletters+" "+letter;
        document.getElementById("guessedletters").innerHTML = guessedletters;
    }

    //Checks to see if the game is over
    if(answerdisp.indexOf("-") == -1){
        document.getElementById("hangimage").src = "Images/hangman/hangman_win.jpg";
        document.getElementById("gamestatus").innerHTML = "The game is over. YOU WON!!";
        gamerunning = false;
    } else if(guesscount == 0){
        document.getElementById("gamestatus").innerHTML = "The game is over. You lost :( <br> The correct answer was <b>"+answer+"</b>";
        gamerunning = false;
    }

    //Empties the value box
    document.getElementById("guessinput").value = "";
    }
}

//Add functions to buttons in the HTML
document.getElementById("newgame").onclick = newgame;
document.getElementById("button").onclick = guessletter;