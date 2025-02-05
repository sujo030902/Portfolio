var menubtn = document.querySelector("#menubtn");
var trigger = 0;

menubtn.addEventListener("click", function() {
    var menu = document.querySelector("#menu");

    if (trigger == 0){
        menu.style.display = "block";
        trigger = 1;
    } else {
        menu.style.display = "none";
        trigger = 0;
        
    }
});

document.querySelectorAll(".menu-items").forEach(function(item) {
    item.addEventListener("click", function() {
        document.querySelector("#menu").style.display = "none";
        trigger = 0;
    });
});



var tl = gsap.timeline();

tl.from("#logo", {
    y: -30,
    opacity: 0,
    duration: 0.7,  
    delay: 1
})

tl.from("#nav-items", {
    y: -30,
    opacity: 0,
    duration: 0.6  
})

tl.from("#pfp", {
    x: -20,
    opacity: 0,
    duration: 0.8 
})

tl.from(".info", {
    y: 40,
    opacity: 0,
    duration: 0.6,  
    stagger: 0.2  
})

tl.from("#contact-icons", {
    x: -40,
    opacity: 0,
    duration: 0.6,  
    })


gsap.from(" #projects #projectheading", {
    opacity: 0,
    duration: 1,
    x: -30,
    scrollTrigger: {
        trigger:" #projects #projectheading",
        start: "top 30%"
    }
})

gsap.from(" #projects #project-container", {
    opacity: 0,
    duration: 1,
    x: 30,
    scrollTrigger: {
        trigger:" #projects #project-container",
        start: "top 30%"
    }
})

gsap.from("#skills #skills-heading", {
    opacity: 0,
    duration: 0.6,
    x: -30,
    scrollTrigger: {
        trigger:" #skills #skills-heading",
        start: "top 30%"
    }
})

gsap.from("#skills #mainskills", {
    opacity: 0,
    duration: 0.4,
    x: -30,
    stagger: 0.2,
    scrollTrigger: {
        trigger:" #skills #mainskills",
        start: "top 30%"
    }
})


gsap.from(" #contact #contactheading", {
    opacity: 0,
    duration: 1,
    x: -30,
    scrollTrigger: {
        trigger:" #contact #contactheading",
        start: "top 30%"
    }
})


gsap.from(" #contact #contactContainer", {
    opacity: 0,
    duration: 1,
    x: 30,
    scrollTrigger: {
        trigger:" #contact #contactContainer",
        start: "top 30%"
    }
})

//E-mail js integration...

function SendMail(){
    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value    
    }
    emailjs.send("service_nem8mic", "template_p8m6dug", params).then(function (res){
        alert("Message Sent!" + res.status);
    })
}