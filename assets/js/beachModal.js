export default function initShowModalBeach() {
    const beachModal = document.querySelector(".modal_beach-section");
    const modalSection = document.querySelector(".modal_beach-section")
    const beachPicture = document.querySelector(".beachPicture");
    const beachName = document.querySelector(".beach-name");
    const closeModalBtn = document.getElementById("closeModalBtn");
    closeModalBtn.addEventListener("click", closeModal)
    


    const localBtns = document.querySelectorAll(".localBtn");
    localBtns.forEach(localBtn => {
        localBtn.addEventListener("click",  () => {
            const previousElement = localBtn.previousElementSibling;
            const imgSrc = previousElement.getAttribute("id");
            beachName.textContent = previousElement.textContent;
            beachPicture.setAttribute("src", `assets/images/${imgSrc}.webp`);
            beachModal.style.display = "flex"


        });
    })

    function closeModal() {
        beachModal.style.display = "none";
    }

    modalSection.addEventListener("click", () => {
        if(event.target === beachModal) {
            closeModal();
        }
    })
    
}

