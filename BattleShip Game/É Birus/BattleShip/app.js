

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



const alfabeto = "abcdef";
const numeros = "123456";


var localizacao_1 =  (alfabeto[Math.floor(Math.random() * alfabeto.length)]) + (numeros[Math.floor(Math.random() * numeros.length)]);

var localizacao_2 = (alfabeto[Math.floor(Math.random() * alfabeto.length)]) + (numeros[Math.floor(Math.random() * numeros.length)]);

var localizacao_3 = (alfabeto[Math.floor(Math.random() * alfabeto.length)]) + (numeros[Math.floor(Math.random() * numeros.length)]);

console.log(localizacao_1);
console.log(localizacao_2);
console.log(localizacao_3);

var suposicoes = 0;






function play_game(){
    var suposicao = document.getElementById("coordenada").value;
    //console.log(suposicao);
    var suposicao_str = suposicao.toString();
    //console.log(suposicao_str);
    

    if(suposicao_str == "" || suposicao == null || suposicao_str == "0"){document.getElementById("h1-page2").innerHTML = "Valor Inválido";}

    //document.getElementById("h1-page2").innerHTML = suposicao;

    else if(suposicao_str == localizacao_1){
        document.getElementById(suposicao_str).style.backgroundColor = "red";
        document.getElementById("h1-page2").innerHTML = "Acertaste";
        localizacao_1 = 0;
    }

    else if(suposicao_str == localizacao_2){
        document.getElementById(suposicao_str).style.backgroundColor = "red";
        document.getElementById("h1-page2").innerHTML = "Acertaste";
        localizacao_2 = 0;
    }

    else if(suposicao_str == localizacao_3){
        document.getElementById(suposicao_str).style.backgroundColor = "red";
        document.getElementById("h1-page2").innerHTML = "Acertaste";
        localizacao_3 = 0;
    }

    else{
        document.getElementById(suposicao_str).style.backgroundColor = "blue";
        document.getElementById("h1-page2").innerHTML = "Água";
    }

    suposicoes = suposicoes + 1;
    document.getElementById("guesses").innerHTML = "Tentativas: " + suposicoes;

    if(localizacao_1 == 0 && localizacao_2 == 0 && localizacao_3 == 0){
        
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
