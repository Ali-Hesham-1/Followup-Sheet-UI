const leadCards = document.querySelectorAll(".lead-card")
const leadWhatsAppNumberLinks = document.querySelectorAll(".leadWhatsAppNumber")
const leadAssignBtn = document.getElementById("lead-assign-btn")

leadCards.forEach(leadCard => {
    leadCard.addEventListener("click", function(e) {
        // Check if the click is on the select element or its descendants
        if (e.target.matches('.form-control') || e.target.closest('.form-control') || e.target.matches('.lead-assign-btn') || e.target.closest('.lead-assign-btn') ) {
            return; // Exit the function if the click was on the select list
        }
        alert("lead-card is Clicked");
    });
});


leadWhatsAppNumberLinks.forEach(leadWhatsAppNumber =>{
    leadWhatsAppNumber.addEventListener("click" , function(e){
        alert("whatsApp Number Link is Clicked")
        e.stopPropagation();
    })
})

leadAssignBtn.addEventListener("click" , function(e){
    alert("Assigned is Confirmed")
})