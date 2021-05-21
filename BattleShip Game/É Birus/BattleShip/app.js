

function changebgcolor_black(){
    document.getElementById("intro-btn").style.color = "white";
}

function changebgcolor_white(){
    document.getElementById("intro-btn").style.color = "white";
}

function bgChanger(){
    if(window.scrollY > window.innerHeight / 2){
        document.body.classList.add("bg-active");
        window.setTimeout(changebgcolor_black, 300);
    }
    else{
        document.body.classList.remove("bg-active");
        window.setTimeout(changebgcolor_white, 300); 
    }
}



window.addEventListener("scroll", bgChanger);



const alphabet = "abcdef";
const numbers = "123456";

//var location_1 = 3;
var location_1 =  (alphabet[Math.floor(Math.random() * alphabet.length)]) + (numbers[Math.floor(Math.random() * numbers.length)]);

var location_2 = (alphabet[Math.floor(Math.random() * alphabet.length)]) + (numbers[Math.floor(Math.random() * numbers.length)]);

var location_3 = (alphabet[Math.floor(Math.random() * alphabet.length)]) + (numbers[Math.floor(Math.random() * numbers.length)]);

console.log(location_1);
console.log(location_2);
console.log(location_3);



var hits = 0;

var guesses = 0;

var isNotSunk = true;





function play_game(){
    var guess = document.getElementById("name").value;
    //console.log(guess);
    var guess_str = guess.toString();
    //console.log(guess_str);
    

    if(guess_str == "" || guess == null || guess_str == "0"){document.getElementById("h1-page2").innerHTML = "Invalid Guess";}

    //document.getElementById("h1-page2").innerHTML = guess;

    else if(guess_str == location_1){
        document.getElementById(guess_str).style.backgroundColor = "red";
        document.getElementById("h1-page2").innerHTML = "Nice Shot";
        location_1 = 0;
    }

    else if(guess_str == location_2){
        document.getElementById(guess_str).style.backgroundColor = "red";
        document.getElementById("h1-page2").innerHTML = "Nice Shot";
        location_2 = 0;
    }

    else if(guess_str == location_3){
        document.getElementById(guess_str).style.backgroundColor = "red";
        document.getElementById("h1-page2").innerHTML = "Nice Shot";
        location_3 = 0;
    }

    else{
        document.getElementById(guess_str).style.backgroundColor = "blue";
        document.getElementById("h1-page2").innerHTML = "Water";
    }

    guesses = guesses + 1;
    document.getElementById("guesses").innerHTML = "Guesses: " + guesses;

    if(location_1 == 0 && location_2 == 0 && location_3 == 0){
        
        GameOver();
        
    }

}

function GameOver(){
    console.log("Game Over");
    document.getElementById("name").style.display = "none";
    document.getElementById("btn").style.display = "none";
    document.getElementById("h1-page2").innerHTML = "You Won!";
}


function reset_game(){
    window.location.reload();
}


document.getElementById("btn").onclick = play_game;
document.getElementById("reset-btn").onclick = reset_game;

/*
function startgame(){

    const alphabet = "abcdef";
    const numbers = "123456";

    //var location_1 = 3;
    var location_1 =  (alphabet[Math.floor(Math.random() * alphabet.length)]) + (numbers[Math.floor(Math.random() * numbers.length)]);
    
    var location_2 = (alphabet[Math.floor(Math.random() * alphabet.length)]) + (numbers[Math.floor(Math.random() * numbers.length)]);;

    var location_3 = (alphabet[Math.floor(Math.random() * alphabet.length)]) + (numbers[Math.floor(Math.random() * numbers.length)]);;

    console.log(location_1);
    console.log(location_2);
    console.log(location_3);

    var guess;

    var hits = 0;

    var guesses = 0;



    var isNotSunk = true;



    while(isNotSunk){

        guess = prompt("Where is the ship?");
    


        if(guess == null){break}

        if(hits == 0){
            if(guess == ""){
                alert("If You don't want to play that's fine");
                break
            }
        }
    
        
    
        if(guess <= 0 || guess.length !== 2){
    
            alert("Invalid Input");
    
        }
    
        //console.log(guess_int);
    
    
    
        else if(guess == location_1){
    
            console.log("Hit");
    
            alert("You Hit The First Ship");
            location_1 = location_1.toString();
            changebgcolor_cells();
    
            location_1 = 0;
            
    
        }
    
        else if(guess == location_2){
    
            console.log("Hit");
    
          alert("You Hit one of the ships");
    
          location_2 = 0;
    
        }
    
        else if(guess == location_3){
    
            console.log("Hit");
    
            alert("You Hit one of the ships");
    
            location_3 = 0;
    
        }
    
        
    
        else{
    
            console.log("Water");
    
            alert("You missed the shot");
    
        }
    
        
    
        ///////////////////////////////////////
    
        if(location_1 == 0 && location_2 == 0 && location_3 == 0){
    
            console.log("Game Over");
    
            alert("Game Over!");
    
            break
    
        }
    
        ///////////////////////////////////////
    
        
    
        
    
        
    
      
    
    }
}*/