const PasswordBox = document.getElementById("Password");
const length = 12;

const Uppercase="ABCEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "@$%^&*()!{}[]-_=<>?/";

const allcars = Uppercase + lowercase + number + symbols;

function createpassword() {
    let Password = "";
    
    Password += Uppercase[Math.floor(Math.random()* Uppercase.length)];
    Password += lowercase[Math.floor(Math.random()* lowercase.length)];
    Password += number[Math.floor(Math.random()* number.length)];
    Password += symbols[Math.floor(Math.random()* symbols.length)];

    
    while (length > Password.length) {
        Password += allcars[Math.floor(Math.random()* allcars.length)];
    }
    PasswordBox.value = Password;
}
