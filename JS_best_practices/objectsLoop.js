let LoopedObj = {
    name: "habib",
    qualification: "intermidiate",
    address: "ABC",
    isloggedIn: true,
    arr: [10,21,35,5]
}

    for(const loop in LoopedObj){
    console.log("your objects are looped...")    
}
if(LoopedObj.arr[0] < LoopedObj.arr[1]){
    console.log("your loop is looped ....")
}
else{
    console.error(Error)
}