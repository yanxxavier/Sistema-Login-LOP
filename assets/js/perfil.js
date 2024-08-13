export default function initPerfil() {
    const perfilUserData = localStorage.getItem("userData");
    const perfilUserObj = JSON.parse(perfilUserData);
    const inputFile = document.querySelector("#picture_input");
    const pictureImage = document.querySelector(".picture_image");
    const pictureText = "Choose";
    pictureImage.innerHTML = pictureText;


    inputFile.addEventListener("change", (e) => {
        const inputTarget = e.target;
        const file = inputTarget.files[0];
        

        if(file) {


            const reader = new FileReader();
            reader.addEventListener("load", (e) => {
                const readerTarget = e.target;
                const img = document.createElement("img");
                img.src = readerTarget.result;
                img.classList.add("perfil_picture");
                pictureImage.innerHTML = "";
                pictureImage.appendChild(img);
                perfilUserObj.imgSrc = readerTarget.result;
                
                
            })
            reader.readAsDataURL(file);
            console.log(perfilUserObj)

        }else {
            pictureImage.innerHTML = pictureText;
        } 
    })
}