document.getElementById("form").addEventListener("submit",(e)=>{

    e.preventDefault();
    let marks = document.getElementById("marks").value;

    let result = document.getElementById("result");

    if(marks >=90){
        result.textContent="your have achieved A grade "
    }
    else if(marks >=70){
        result.textContent="your have achieved B grade "
        
    }
     else if(marks >=50){
        result.textContent="your have achieved C grade "
        
    }
     else if(marks >=35){
        result.textContent="your have achieved D grade "
        
    }

    else{
        result.textContent="your have fail this exam "

    }


})