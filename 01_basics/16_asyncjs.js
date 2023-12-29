//asynchronous programming in JavaScript
function logA() {
     console.log("A");
   }
   function logB() {
     console.log("B");
   }
   function logC() {
     console.log("C");
   }
   function logD() {
     console.log("D");
   }
   
   logA();
   setTimeout(logB, 0);
   Promise.resolve().then(logC);
   logD();
   console.log("Start");
   setInterval(function() {
        console.log("Interval");
   }, 1000);
   setTimeout(function() {
        console.log("Timeout");
   }, 3000);
   console.log("End");
   console.log("End");
   console.log("End");
   console.log("End");
   console.log("End");
   
   //Visualize this- https://www.jsv9000.app/