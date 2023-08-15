"use strict";
const $ = (selector, el=null) => {
    if (!el) el = document;
    return el.querySelector(selector);
}


document.addEventListener("DOMContentLoaded", () => {
    
    $("#sub").addEventListener("click", (event)=>{
        event.preventDefault();
        window.location.href = "payment.html";
    });
});
