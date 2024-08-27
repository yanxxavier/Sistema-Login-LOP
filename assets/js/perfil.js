import { setUserData, getUserData } from './localStorage.js';
export default function initPerfil() {
    console.log('perfil')
    const user = getUserData();
  
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

                user.imgSrc = readerTarget.result;
                takePicture(user);
                
                setUserData(user);
               
            })
            reader.readAsDataURL(file);
            console.log(user)

        }else {
            pictureImage.innerHTML = pictureText;
        } 

    })
    function loadProfilePicture() {
        
        if(user.imgSrc) {
            //perfil principal
            const img = document.createElement("img");
            img.src = user.imgSrc;
            img.classList.add("perfil_picture");
            pictureImage.innerHTML = "";
            pictureImage.appendChild(img);

            //perfil Nav
            const imgNav = document.createElement("img");
            imgNav.src = user.imgSrc;
            imgNav.classList.add("perfil_picture");
            pictureImageNav.innerHTML = ""; 
            pictureImageNav.appendChild(imgNav);

            setUserData(user);
        }else {
            pictureImage.innerHTML = pictureText;
    
        }

    }

    // Jogar imagem no perfil

    function takePicture(user) {
        const imgNav = document.createElement("img");
        imgNav.src = user.imgSrc;
        imgNav.classList.add("perfil_picture");
        pictureImageNav.innerHTML = ""; 
        pictureImageNav.appendChild(imgNav);

    }
    const perfilBtn = document.querySelector('.perfil');
    perfilBtn.addEventListener('click', () => {
        console.log(user)
        breedPerfil()
        createCompPerfil();
    });

    function breedPerfil() {
        //breed dados no ato do login
        // insc no ato da inscricao
        const perfilName = document.querySelector('.perfil_name');
        perfilName.textContent = user.name;

        //const perfilSex = document.querySelector('.sex');
        //perfilSex.textContent = user.gen;

        //const perfilCategory = document.querySelector('.category');
        //perfilCategory.textContent = user.category;
        //console.log(user.comp)

        const contadorComp = document.querySelector('.contador');
        contadorComp.textContent = (user.comp.length)

    }
    
    function createCompPerfil() {
        const compPerfilContainer = document.querySelector('.competicoes_perfil');
        let competicoes = user.comp;
        competicoes.forEach(comp => {
            const btnComp = document.querySelector(`[data-btn = "${comp}"]`);
            btnComp.style.display = 'none'
            const compStructure = btnComp.parentNode;
            compPerfilContainer.appendChild(compStructure);
        })
       
    }
}