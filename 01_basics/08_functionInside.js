var z="Jimiwal";
b();
{
     var z="Amit";
     console.log(z); //Amit and change the global var declaration above to "Amit" not "Jimiwal"
} //var didnt understand the block scope.
function b(){
     var z="Abhinav";
     console.log(z);
}
console.log(z);