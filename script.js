function getData(key){
    return new Promise((resolve,reject)=>{
    console.log("Getting Data...")
    setTimeout(()=>{
        if(key==="abc123"){
            const data = "rawData"
            resolve(data)
        }else{
            reject("Invalid Key")
        }
    },1000);
    });
}

function processData(rawData){
    return new Promise((resolve,reject)=>{
    console.log("Processing Data...")
    setTimeout(()=>{
        const processedData = rawData + " is processed";
        resolve(processedData)
    },1000); 
    });
}

function formatData(processData){
    return new Promise((resolve,reject)=>{
    console.log("Formatting Data...")
    setTimeout(()=>{
        const formattedData = processData + " and formatted";
        resolve(formattedData)
    },1000);
    });
}


function displayData(){
    getData("abc123")
    .then(processData)
    .then(formatData)
    .then((result)=>console.log("Displaying", result))
    .catch((error)=>console.log(error))
}

displayData();