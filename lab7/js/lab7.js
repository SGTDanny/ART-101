// Lab 7: Functions
// Author: Daniel Gallegos
// Date: 03 May 2024


//sortUserName
function sortUserName() {
    var userName = window.prompt("Ah. You're awake traveler. What is your given name?");
    console.log("userName =", userName);
    //split string to array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    // sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    // join array back to a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    // Note that I could have done the above lines asa a single line:
    // usweName.toLower().split("").sort().join("")
    return nameSorted;
}

//output
document.writeln("From now on you will be known as: ",
    sortUserName(), "</br>");