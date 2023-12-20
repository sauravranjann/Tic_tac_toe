import React from "react";

function GridTable() {
  var i=1;
  var arr=new Array(9);
  var turn=1;
  function onxclick (id){
    if(i%2===0 && turn===1){
      document.getElementById(id).innerHTML="O";
      arr[id-1]="O";
      i++;
    }
    else{
     if(turn===1){ document.getElementById(id).innerHTML="X";
      arr[id-1]="X";
      i++;}
    }
    if(i>3){
      if(arr[0]===arr[1] && arr[1]===arr[2]&&arr[0]!==undefined){
      document.getElementById("10").innerHTML =
        "<b>Winner is " + arr[0] + "<br>Click reset to start a new game</b>";
      document.getElementById("10").style.color = "blue";
      turn=0;
     
    }
    else if(arr[3]===arr[4] && arr[4]===arr[5] && arr[3]!==undefined){
     document.getElementById("10").innerHTML =
       "<b>Winner is " + arr[3] + "<br>Click reset to start a new game</b>";
     document.getElementById("10").style.color = "blue";
      turn=0;
     
    }
    else if(arr[6]===arr[7] && arr[7]===arr[8] && arr[6]!==undefined){
     document.getElementById("10").innerHTML =
       "<b>Winner is " + arr[6] + "<br>Click reset to start a new game</b>";
     document.getElementById("10").style.color = "blue";
      turn=0;
      
    }
    else if(arr[0]===arr[3] && arr[3]===arr[6]  && arr[0]!==undefined){
     document.getElementById("10").innerHTML =
       "<b>Winner is " + arr[0] + "<br>Click reset to start a new game</b>";
      document.getElementById("10").style.color = "blue";
      turn=0;
      
    }
    else if(arr[1]===arr[4] && arr[4]===arr[7]  && arr[1]!==undefined){
      document.getElementById("10").innerHTML =
        "<b>Winner is " + arr[1] + "<br>Click reset to start a new game</b>";
      document.getElementById("10").style.color = "blue";
      turn=0;
      
    }
    else if(arr[2]===arr[5] && arr[5]===arr[8]  && arr[2]!==undefined){
      document.getElementById("10").innerHTML =
        "<b>Winner is " + arr[2] + "<br>Click reset to start a new game</b>";
      document.getElementById("10").style.color = "blue";
      turn=0;
      
    }
    else if(arr[0]===arr[4] && arr[4]===arr[8]  && arr[0]!==undefined){
     document.getElementById("10").innerHTML =
       "<b>Winner is " + arr[0] + "<br>Click reset to start a new game</b>";
     document.getElementById("10").style.color = "blue";
      turn=0;
      
    }
    else if(arr[2]===arr[4] && arr[4]===arr[6]  && arr[2]!==undefined){
      document.getElementById("10").innerHTML =
        "<b>Winner is " + arr[2] + "<br>Click reset to start a new game</b>";
      document.getElementById("10").style.color="blue";
      turn=0;
      
    }
    else if(i===10){
     document.getElementById("10").innerHTML="Match Draw";
     setTimeout(() => {
       window.location.reload();
     }, 2000);
     
    }}
  }
 let saurav = document.getElementById("reset");
 if (saurav) {
   saurav.addEventListener("click", () => {
     let cells = document.getElementsByClassName("cell");
     for (let i = 0; i < cells.length; i++) {
       cells[i].innerHTML = "";

     }
      document.getElementById("10").innerHTML ='<b> first player always have "X" and second player always have "O"';
      turn=1;

   });
 }

  


    return (
      <div>
        <div className="grid-container">
          <table>
            <tbody>
              <tr className="row1">
                <td className="cell" id="1" onClick={() => onxclick("1")}></td>
                <td className="cell" id="2" onClick={() => onxclick("2")}>
                  {" "}
                </td>
                <td className="cell" id="3" onClick={() => onxclick("3")}></td>
              </tr>
              <tr className="row2">
                <td className="cell" id="4" onClick={() => onxclick("4")}></td>
                <td className="cell" id="5" onClick={() => onxclick("5")}></td>
                <td className="cell" id="6" onClick={() => onxclick("6")}></td>
              </tr>
              <tr className="row3">
                <td className="cell" id="7" onClick={() => onxclick("7")}></td>
                <td className="cell" id="8" onClick={() => onxclick("8")}></td>
                <td className="cell" id="9" onClick={() => onxclick("9")}></td>
              </tr>
            </tbody>
          </table>
        </div>
        <button type="button" className="btn btn-primary" id="reset">
          Reset
        </button>

        <div className="container toto" id="10">
          <b>
            first player always have "X" and second player always have "O";
          </b>
        </div>
      </div>
    );

    }

export default GridTable;