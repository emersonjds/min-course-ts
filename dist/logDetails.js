"use strict";
// when we use | it's a union type in Typescript
var firstName;
function logDetails(uid, item) {
    console.log("a product with " + uid + " has a title " + item + " name");
}
function logInfo(id, user) {
    console.log("an user with " + id + " has a name " + user);
}
function renderPlatform(platform) {
    return platform;
}
logDetails(123, 'sapato');
logDetails('123', ' sapato');
