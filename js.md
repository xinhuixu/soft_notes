###1214

DOM
```
document.getElementById(ID);
// TagName
// ClassName

var h = document.getElementById("h");
h.innerHTML = "ashfsklfcsdklc"; //not a method but an Attribute, no(). set with =

document.createElement(<html tag name>)
.appendChild(e)

.setAttribute(name, val)
.getAtt(name)
```
```
.addEventListener(event, func)

var b = document.getElementsByTagName('button')[0];
b.addEL("click", alert("aksduyf"));
//doesnt really work

js is structured like scheme: funcs are 1st-class objects, have utilies like any other val
  - functional pl
  - remember lambda
b.addEL("click", function() { alert("ajsdgyf"); }); //anon function

var f = function() {...};
b.addEL("click",f); //NOT f(), not calling, but Adding

>f
function...
>f()
(fucntion actually runs)
```
```
var f = function(e) {console.log(e)};
b.addEl("click", f); //e or any other name is the event that triggered. contains att
...{console.log(this)};
```

##1219
```
list.childElementCount();
```
```
var t0 = performance.now();
...
var t1 = performance.now();
console.log((t1 - t0).toFixed(4)); //four places after
//checks time


```
##0111

AJAX (Asynchronous Js And XML)
A system of technologies which sends data to server without reloading a page or wait for server to acknowledge change.
Js, html, DOM, xml
send data to server using GET or POST and then catch data sent by the server in response
xml was originally the only supported format

using jquery for AJAX
  the jq library provides clean wrapper func for making AJAX calls
  ```
  $.ajax( <SETTINGS> );
  ```
  settings is an associative array {} containing all the information required to make the given ajax call
  - url: server target link
  - type: method
