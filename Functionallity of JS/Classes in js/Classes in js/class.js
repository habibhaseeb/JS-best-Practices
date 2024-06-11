class User{
    constructor(username, password , address) {
       this.username = username;
       this.password = password;
       this.address = address;       
    }
    encryptedPass() {
       return (`${this.password} this is your password`)
    }
    formatUserName() {
       return (`${this.username.toUpperCase()}`)
    }

}
const userDetails = new User("Habibullah", "" , "abc");
console.log(userDetails.username +'  '+ "this is printed statement of USER class");
console.log(userDetails.formatUserName());

//__________________--------------------_____________________------------------_____________________
