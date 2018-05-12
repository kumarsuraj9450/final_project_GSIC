// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(r, c, h , w, color) 
{// Your code goes here!
	
      var canvasBox = $("#pixelCanvas");
    var mTd = "<td height='"+h+"' width='"+w+"'></td>";
    
    var canvasHTML = "";
   canvasHTML += "<table id='pixelCanvas'><tbody>";
    
		for (var i = 1; i <= r; i++) 
		{
			console.log("added new row : "+i);
	        canvasHTML += "<tr>";
			for (var j = 1; j <=c; j++) 
			{
               canvasHTML += "<td id='"+i+"-"+j+"'";
               canvasHTML += "class='box' height='"+h+"' width='"+w+"'";
              // canvasHTML += "onclick='onCellListener(this.id)'";
                canvasHTML += "></td>";
                
			console.log("added new cell : "+i+","+j);
				//canvasHTML += mTd);
				
			}

			canvasHTML += "</tr>";
//			canvasHTML += "<br/>";
			
		}
   // console.log(canvasHTML);
    canvasHTML += "</tbody></table>";
    $("#pixelCanvas").replaceWith(canvasHTML);
//    canvasBox.innerHTML = canvasHTML;
    $(".box").click(function(){
        if($(this).css("background-color")==color){
            $(this).css("background-color","white"); 

        }else{
            $(this).css("background-color",color);
        }
        console.log("changed color to "+color);
     
    });
    
}


//var button = $("#sizePicker.input[type=submit]");
/*
var button = $("#submit");
button.onclick = onSubmit;
*/
    
//var color = "#FFFFFF";
function onSubmit(){
    //alert("submit clicked");
     var rows =document.getElementById("inputHeight").value;
      var columns =document.getElementById("inputWidth").value; 
      var color =document.getElementById("colorPicker").value; 

    console.log(rows);
       console.log(columns);
       console.log(color); 
    
       var heightCanvas = window.innerHeight*0.8;;
       var widthCanvas = heightCanvas;
    

     var boxWidth = (widthCanvas/columns);
    var boxHeight = (heightCanvas/rows);

    
    console.log(widthCanvas);
       console.log(heightCanvas);
       console.log(boxWidth);
       console.log(boxHeight);
    
        $("#pixelCanvas").width(widthCanvas);
        $("#pixelCanvas").height(heightCanvas);
       // $("#pixelCanvas.tbody").remove();

        makeGrid(rows, columns, boxWidth, boxHeight, color);

}

