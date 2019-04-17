
function debuggingTool() {
    this.write = function(txt) {
        var parent = document.getElementById("log");
        
        var el = document.createElement("div");
        el.setAttribute("id", "log-element");
        el.setAttribute("class", "log-element");
         var p = document.createElement("p");
         p.innerHTML = txt;

         var items = document.getElementsByClassName("log-element");

         if(items) {
            var l = items.length;
            if(l % 2 == 0) {
              //  p.setAttribute("style", "background-color: rgb(160,120,20);");
            } else {
                p.setAttribute("style", "background-color: rgb(179, 198, 255);")
            }
         }



         el.appendChild(p);

         parent.appendChild(el);

    }
}


const teller = new debuggingTool();



