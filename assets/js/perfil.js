export default function initPerfil() {
    console.log('perfil')
    const perfilUserData = localStorage.getItem("userData");
    const perfilUserObj = perfilUserData ? JSON.parse(perfilUserData) : {};
    const inputFile = document.querySelector("#picture_input");
    const pictureImage = document.querySelector(".picture_image");
    const pictureText = "Choose";
    const pictureImageNav = document.querySelector(".perfil_image-navbar")
    pictureImage.innerHTML = pictureText;
    
    loadProfilePicture()

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
                takePicture(perfilUserObj);
                
                localStorage.setItem("userData", JSON.stringify(perfilUserObj));
               
            })
            reader.readAsDataURL(file);
            console.log(perfilUserObj)

        }else {
            pictureImage.innerHTML = pictureText;
        } 

    })
    function loadProfilePicture() {
        
        if(perfilUserObj.imgSrc) {
            //perfil principal
            const img = document.createElement("img");
            img.src = perfilUserObj.imgSrc;
            img.classList.add("perfil_picture");
            pictureImage.innerHTML = "";
            pictureImage.appendChild(img);

            //perfil Nav
            const imgNav = document.createElement("img");
            imgNav.src = perfilUserObj.imgSrc;
            imgNav.classList.add("perfil_picture");
            pictureImageNav.innerHTML = ""; 
            pictureImageNav.appendChild(imgNav);
        }else {
            pictureImage.innerHTML = pictureText;
    
        }

    }

    // Jogar imagem no perfil

    function takePicture(userObj) {
        const imgNav = document.createElement("img");
        imgNav.src = userObj.imgSrc;
        imgNav.classList.add("perfil_picture");
        pictureImageNav.innerHTML = ""; 
        pictureImageNav.appendChild(imgNav);

    }
    const perfilBtn = document.querySelector('.perfil');
    perfilBtn.addEventListener('click', breedPerfil);

    function breedPerfil() {
        //breed dados no ato do login
        // insc no ato da inscricao
        const perfilName = document.querySelector('.perfil_name');
        perfilName.textContent = perfilUserObj.name;

        const perfilSex = document.querySelector('.sex');
        perfilSex.textContent = perfilUserObj.gen;

        const perfilCategory = document.querySelector('.category');
        perfilCategory.textContent = perfilUserObj.category;
        console.log(perfilUserObj)

    }
    
}