
let val = document.getElementById("div").style.color;

 function clickMeevent(obj) {

    let droned = document.getElementById("div");
    let col = droned.style.color;

    if (obj.innerHTML == "Click Me"){

        

        obj.innerHTML = "Click Me<br>Click Me Again";
        return;
}

   if (obj.innerHTML == "Click Me<br>Click Me Again")
{

        obj.innerHTML = "Thank You";
        return;

}

    if (obj.innerHTML == "Thank You"){

        obj.innerHTML = "GoodBye";
        return;
}

    if (obj.innerHTML == "GoodBye"){

        obj.style.color = "red";
        
        return;


    }

   
    
    /* const element = document.querySelector('.element')

    const fontSize = element.style.fontSize
    console.log(fontSize) // 2em
    
    const color = element.style.color
    console.log(color) // red */

   


       
 }
 


     function newFunction() {
         alert('it works!');
     }


//document.getElementById("myColor").value = "#FF8040";
//alert(document.getElementById("div").style.color);


function go(){
    
    let droned = document.getElementById("div");
    let col = droned.style.color;
    document.getElementById(btn);
    droned.style.color = "yellow";
    btn.style.width = "150px";
    document.getElementById("myAnchor").setAttribute("href", "https://www.w3schools.com");
    console.log(col);
}


function change_myselect(sel) {
    var obj, dbParam, xmlhttp, myObj, x, txt = "";
    obj = { table: sel, limit: 20 };
    dbParam = JSON.stringify(obj);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        txt += "<table border='1'>"
        for (x in myObj) {
          txt += "<tr><td>" + myObj[x].name + "</td></tr>";
        }
        txt += "</table>"    
        document.getElementById("demo").innerHTML = txt;
        }
      };
    xmlhttp.open("POST", "json_demo_db_post.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);
  } 