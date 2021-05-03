"use strict";
var UserAccount = /** @class */ (function () {
    function UserAccount(name, age) {
        this.name = name;
        this.age = age;
    }
    //method
    UserAccount.prototype.logDetails = function () {
        console.log("The player " + this.name + " has " + this.age + " years old");
    };
    return UserAccount;
}());
var user = new UserAccount('Emerson', 31);
