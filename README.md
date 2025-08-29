1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
=>
getElementById("uniqueId"): When know the exact unique ID. then finds by getElementById("uniqueId")
getElementsByClassName("class"): This tag finds all elements with a certain class name
querySelector: This tag finds the first element that matches a CSS selector(like .class, #id, div p)
querySelectorAll: This tag grab all the elements

2. How do you **create and insert a new element into the DOM**?
=>
const newDiv = document.createElement("div");  
newDiv.innerText = "Hello, I’m new here!";    
document.body.appendChild(newDiv);

3. What is **Event Bubbling** and how does it work?How do you **create and insert a new element into the DOM**?
=>
Event bubbling is the process where an event triggered on a child element propagates upward through its parent elements in the DOM tree. Example- If we click on a <button> inside a <div>, first the button’s click handler runs, then the div’s, then the body’s, then document’s — unless you stop it.
   
4. What is **Event Delegation** in JavaScript? Why is it useful?
=>
Event delegation takes the advantage of event bubbling. Instead of attaching an event listener to lots of child elements, we attach one listener to a parent and let the event bubble up. Then we check which child triggered it.
Example-
document.getElementById("list").addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        alert("clicked on: " + e.target.innerText);
    }
});

5. What is the difference between **preventDefault() and stopPropagation()** methods?
=>
preventDefault(): This tag stops the browser’s default behavior. like when we dont want the browser's default action
stopPropagation(): This tag stops the event from bubbling up. So the event won’t trigger parent handlers.
