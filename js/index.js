// header 
$(function() {
    let header = $("#header"),
        scrollOffSet = $(this).scrollTop();

    if( scrollOffSet > 10){
        header.addClass("fixed");
    } else {
        header.removeClass("fixed");
    }
    
    $(window).on("scroll", function(){
        scrollOffSet = $(this).scrollTop();
        if( scrollOffSet > 10){
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });

});
    
// testimonials 
let defaultTitle = document.getElementById("testimonial-title").innerHTML;
let defaultText = document.getElementById("testimonial-text").innerHTML;
let defaultCustomerName = document.getElementById("customer-name").innerHTML;
let defaultCustomerJob = document.getElementById("customer-job").innerHTML;

document.addEventListener('click', function handleClick(event) {
    switch (event.target.classList[1]) {
        case "t-b-1":
            document.getElementById("testimonial-title").innerHTML = defaultTitle;
            document.getElementById("testimonial-text").innerHTML = defaultText;
            document.getElementById("customer-name").innerHTML = defaultCustomerName;
            document.getElementById("customer-job").innerHTML = defaultCustomerJob;

            event.target.classList.add('active-testimonial-button');

            document.getElementsByClassName("t-b-2")[0].classList.remove('active-testimonial-button');
            document.getElementsByClassName("t-b-3")[0].classList.remove('active-testimonial-button');
            break;

        case "t-b-2":
            document.getElementById("testimonial-title").innerHTML = "Quod explicabo quasi";
            document.getElementById("testimonial-text").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod explicabo quasi dicta vel omnis tenetur voluptatem, dolorum, amet aliquam optio animi.";
            document.getElementById("customer-name").innerHTML = "Lorem Ipsum";
            document.getElementById("customer-job").innerHTML = "Web Designer";

            event.target.classList.add('active-testimonial-button');

            document.getElementsByClassName("t-b-1")[0].classList.remove('active-testimonial-button');
            document.getElementsByClassName("t-b-3")[0].classList.remove('active-testimonial-button');
            break;

        case "t-b-3":
            document.getElementById("testimonial-title").innerHTML = "Dolorum, dicta, amet!";
            document.getElementById("testimonial-text").innerHTML = "Quod explicabo quasi dicta vel omnis tenetur voluptatem, dolorum, amet aliquam optio animi. Lorem ipsum dolor sit amet consectetur adipisicing.";
            document.getElementById("customer-name").innerHTML = "Quod Explicabo";
            document.getElementById("customer-job").innerHTML = "Project Manager";

            event.target.classList.add('active-testimonial-button');

            document.getElementsByClassName("t-b-1")[0].classList.remove('active-testimonial-button');
            document.getElementsByClassName("t-b-2")[0].classList.remove('active-testimonial-button');
            break;
    }
});

//contact form
const ContactFormValidate = () => {
    let contactName = document.getElementById("name");
    let contactEmail = document.getElementById("email");
    let contactSubject = document.getElementById("subject");
    let contactMessage = document.getElementById("message");
    
    let contactButtonSubmit = document.getElementById("contact-button-submit");
    
    //bad practice... never do that again
    if(contactName.value === ""){
        contactName.classList.add("input-error");
        return false;
    } else {
        contactName.classList.remove("input-error");
    }

    if(!contactEmail.value.includes("@")){
        contactEmail.classList.add("input-error");
        return false;
    }else {
        contactEmail.classList.remove("input-error");
    }

    if(contactSubject.value === ""){
        contactSubject.classList.add("input-error");
        return false;
    }else {
        contactSubject.classList.remove("input-error");
    }

    if(contactMessage.value === ""){
        contactMessage.classList.add("input-error");
        return false;
    }else {
        contactMessage.classList.remove("input-error");
    }
}

// footer email input
let footerEmailInput = document.getElementById("footer-input");

footerEmailInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        if(!footerEmailInput.value.includes("@")){
            footerEmailInput.classList.add("input-error");
        } else {
            footerEmailInput.classList.remove("input-error");
            document.getElementById("footer-input-submit").click();
        }
    }
});


