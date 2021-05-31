var text
function BrowserCrash(){
    var n = prompt("Quantas pizzas queres?")
    while (n != null) {

        var i = 1

        if (i > n) {
            alert("Não gostas de pizza? :(");
            break
            }

        else if (i <= n){
            //console.log("depois else if");
            text = ""
            while (i <= n) {
                //console.log("depois while");
                text = text + "pizza, "
                i = i + 1
            }
            //console.log("fim");
            document.getElementById("p-pizzas").innerHTML = text;
            break
            }
    }
}




