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
