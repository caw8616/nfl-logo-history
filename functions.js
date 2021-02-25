//loadFunction()
        function loadFunction(){
        //var getName=prompt('Hi! First time here, what is your name?','');

            cookies();
            var div = document.createElement("div");
            div.setAttribute("onchange","move(this)");
           
            div.setAttribute("id","div1");
            document.getElementById("form").appendChild(div);
             var choices = data['leagues'];
            var question = document.createTextNode(choices[0]);
            div.appendChild(question);
            var sel1 = document.createElement("SELECT");
            sel1.setAttribute("id","select1");
            sel1.setAttribute("onchange", "changeTeam(this.value)");
            div.appendChild(sel1);
           
            for (i=0; i<choices.length;i++){
                var opt = document.createElement("OPTION");
                var ch = document.createTextNode(choices[i]);  
                opt.appendChild(ch);
                sel1.appendChild(opt); 
            }
        }
//changeTeam()        
        function changeTeam(choice){
            var nodelist = document.getElementsByTagName("DIV").length;
           // console.log(nodelist);
            var choices = data[choice];
        
            if(choices[0]=="End"){
                var summary=document.getElementById("sum");
                 if (summary !=null){
            summary.parentNode.removeChild(summary);

       }
                storeValues();
           
                var span = document.createElement("span");

                span.setAttribute("id","sum");
                document.body.appendChild(span);
                
              // var statement=document.createTextNode(summary);
             //   span.appendChild(statement);

                // var statement=document.createTextNode(summary);
                span.appendChild(document.createTextNode("Division:   "+choices[1]));
                //span.appendChild(statement);
               span.appendChild(document.createElement("br")); span.appendChild(document.createTextNode("Team:   "+choices[2]));
               span.appendChild(document.createElement("br")); span.appendChild(document.createTextNode("Logo Years:   "+choices[3]));
                span.appendChild(document.createElement("br"));
             
                
                var span2 = document.createElement("span");
                span2.setAttribute("id","jersey");
                span.appendChild(span2);
                 var y = document.createElement("IMG");
                //y.setAttribute("id","jersey")
                 y.setAttribute("src", "jersey.jpg");
                y.setAttribute("width", "500px")
                span2.appendChild(y);
                
                var span3 = document.createElement("span");
                span3.setAttribute("id","logo");
                span.appendChild(span3);
                var x = document.createElement("IMG");
                 x.setAttribute("src", choices[4]);
                //x.setAttribute("id","logo")

                x.setAttribute("width", "200px")
                span3.appendChild(x);
            }
            
            else{
                
			var myNode = document.getElementById(event.target.parentNode.id);
                var num=nodelist+1;
                removeOld(myNode);
             var div = document.createElement("div");
            div.setAttribute("id","div"+num);
            div.setAttribute("onchange","move(this)");

            document.getElementById("form").appendChild(div);
            
            var question = document.createTextNode(choices[0] );
            div.appendChild(question);
            var sel1 = document.createElement("SELECT");
           sel1.setAttribute("id","select"+num);
            sel1.setAttribute("onchange", "changeTeam(this.value)");
            div.appendChild(sel1);
           
            for (i=0; i<choices.length;i++){
                var opt = document.createElement("OPTION");
                var ch = document.createTextNode(choices[i]);  
                opt.appendChild(ch);
                sel1.appendChild(opt);  
            }
            }
        }
        
//removeOld()        
		function removeOld(myDiv){
            var summary=document.getElementById("sum");
            console.log(summary);
       if (summary !=null){
            summary.parentNode.removeChild(summary);

       }
		while (myDiv.firstChild && myDiv.nextSibling !=null)
		myDiv.parentNode.removeChild(myDiv.nextSibling);
        
        }


//move 
    function move(ele, val)
    	{
      var curLeft = parseInt(window.getComputedStyle(ele).left);
      var newLeft = curLeft + 10;
      
      ele.style.left = newLeft + "px";

      if (newLeft <= 900)
      {
        setTimeout(function()
        {
          move(ele);
        }, 50);        
      }
	else{
	
	}
    }

//removeAll
    function removeAll(){
        	var divs = document.getElementsByTagName('div');
		var len = divs.length;
       // console.log(len);
		//debugger;
		for( var i=0; i<len; i++){
			document.getElementById('form').removeChild(divs[0]);
		} // end for
        
          var summary=document.getElementById("sum");
        
        //summary.parentNode.removeChild(summary);
       // console.log(summary);
       if (summary !=null){
            summary.parentNode.removeChild(summary);
            
       }
        loadFunction();
    }

//cookies
    function cookies(){
        console.log("Cookies enabled is " + navigator.cookieEnabled);
        if(navigator.cookieEnabled==false){
            alert("Cookies Not Enabled");
           var win=window.open( "http://filehippo.com/software/internet/browsers/");
        }  
    }
function storeValues(){
    var select = document.getElementsByTagName('select');
    var len = select.length;
    for(var i=1; i<len; i++){
     localStorage.setItem('sel'+[i], select[i].value);
    }
    
}

               