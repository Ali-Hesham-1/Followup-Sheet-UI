const leadCards = document.querySelectorAll(".lead-card")
const cardsSection = document.getElementById("lead-cards-section")
const dataSection = document.getElementById("data-section")
const leadWhatsAppNumberLinks = document.querySelectorAll(".leadWhatsAppNumber")
const leadAssignBtn = document.getElementById("assignToButton")
const backToCardsSection = document.getElementById("backToCardsSection-btn")

leadCards.forEach(leadCard => {
    leadCard.addEventListener("click", function(e) {
        // Check if the click is on the select element or its descendants
        if (e.target.matches('.form-control') || e.target.closest('.form-control') || e.target.matches('.assignToButton') || e.target.closest('.assignToButton') || e.target.matches('.whatsAppNumber') || e.target.closest('.whatsAppNumber') ) {
            return; // Exit the function if the click was on the select list
        }
        cardsSection.classList.add("d-none")
        dataSection.classList.remove("d-none")
    });
});


leadWhatsAppNumberLinks.forEach(leadWhatsAppNumber =>{
    leadWhatsAppNumber.addEventListener("click" , function(e){
        alert("whatsApp Number Link is Clicked")
        if (e.target.matches('.form-control') || e.target.closest('.form-control') || e.target.matches('.assignToButton') || e.target.closest('.assignToButton') ) {            
            return; // Exit the function if the click was on the select list
        };
    })
})

leadAssignBtn?.addEventListener("click" , function(e){
    alert("Assigned is Confirmed")
})

backToCardsSection.addEventListener("click" , function(){
    cardsSection.classList.remove("d-none")
    dataSection.classList.add("d-none")
})