
let num = [1, 2, 3 ,4 ,5 ,6 ,7 ,8 ,9,9 , 4, 5, 67,32 ,3 ,5,6 ,7 ,7 , 2]

function findValue(){

    let count ={}
    let uniqueValue=[]
    let repetitiveValue =[]


    for(let i=0; i<num.length-1; i++){   
        
        let n = num[i]
        
     if(count[n]){
            count[n]+=1
        }else{
            count[n]=1
        }
    }


    for(let key in count){
        if(count[key]===1){
            uniqueValue.push(Number(key))
        }else{
            repetitiveValue.push(Number(key))
        }
    }


    console.log("count :",count)
    console.log("Unique Value :", uniqueValue)
    console.log("Repetitive Value :", repetitiveValue)
}

findValue()