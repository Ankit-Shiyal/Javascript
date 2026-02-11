
function number2(){
    let number1 = 0;

    for(let i = 0;i < arguments.length;i++){
        number1 += arguments[i]
    }
    console.log(number1)
}

number2(10,20,30,40,50)


function number1(){
    let number2 = 0;

    for(let i = 0; i < arguments.length; i++){
        number2 += arguments[i]
    }

    console.log(number2)
}

number1(100,200,300)
