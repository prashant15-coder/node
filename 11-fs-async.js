const { readFile, writeFile}=require('fs');

readFile('./content/first.txt','utf8',  (err,result)=>{
    if(err){    //we only get result if we use it as a callback fn otherwise it will give an error

        console.log(err)
    }
    console.log(result);
    const first=result
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const second = result
        writeFile(
            './content/result-async.txt',
            `here is the result : ${first},${second}`,(err,rseult)=>{
              if(err){
                console.log(err);
                return 
              }
              console.log(result);  
            }
        )
    })
})