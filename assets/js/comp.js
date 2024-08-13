export default function initComp() {
    const compUserData = localStorage.getItem("userData");
    const userObjComp = JSON.parse(compUserData);

    document.addEventListener("logSucess", () => {
        verifyCategory(userObjComp);
        let insc = checkInsc(userObjComp,competitions);
        let compArray = competitionBtnCheck(insc);
        console.log(userObjComp)
        
        
    })

    function verifyCategory(user) {
        if (user.age <= 12) {
            user.category = "Sub-12";
        } else if (user.age <= 14) {
            user.category = "Sub-14";
        } else if (user.age <= 16) {
            user.category = "Sub-16";
        } else if (user.age <= 18) {
            user.category = "Sub-18";
        } else if (user.age <= 35) {
            user.category = "Open";
        } else if (user.age <= 40) {
            user.category = "Masters";
        } else if (user.age <= 45) {
            user.category = "Grand Masters";
        } else if (user.age <= 50) { 
            user.category = "Kahunas";
        } else if (user.age <= 55) {
            user.category = "Grand Kahunas";
        } else {
            user.category = "Legends"; 
        }
        
    }

    let competitions = {
        compRip : ["Sub-12", "Sub-14", "Sub-16", "Sub-18"],
        compPan : ["Open"],
        compAus : ["Sub-14", "Sub-16", "Sub-18", "Open", "Masters", "Grand Masters", "Kahunas", "Grand Kahunas", "Legends"],
        compIsa : ["Sub-16", "Sub-18"],
        compBill : ["Sub-12", "Sub-14", "Sub-16", "Sub-18"],

    }

    function checkInsc (user, competition) {
        let result = {};
        for(let comp in competition) {
            if(competition[comp].includes(user.category)) {
                result[comp] = true;
            }else {
                result[comp] = false;
            }
        }

        return result;
    }
    function competitionBtnCheck(insc) {
        let inscCompetitions = [];
        
        for(let compCheck in insc) {
            let btnOk = document.querySelector(`[data-btn = "${compCheck}"]`);
            if(insc.hasOwnProperty(compCheck) && insc[compCheck] === true) {
                btnOk.style.background = "#77dd77";
               
            }else {
                btnOk.style.background = "#FF6961";
                btnOk.setAttribute("id", "dis");

            }
        }
        const inscBtns = document.querySelectorAll("[data-btn]");
        inscBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                if(btn.getAttribute("id") === "dis") {
                    Toastify({ //Lib de alert 
                        text: `Impossivel fazer inscricao!`,
                        duration: 3000,
                        close: true,
                        gravity: "bottom", 
                        position: "right",
                        stopOnFocus: true, 
                        style: {
                          background: "red",
                        },
                        
                    }).showToast();
                }else {
                    Toastify({ //Lib de alert 
                        text: `Inscrito com sucesso!`,
                        duration: 3000,
                        close: true,
                        gravity: "bottom", 
                        position: "right",
                        stopOnFocus: true, 
                        style: {
                          background: "green",
                          color: "white",
                        },
                    }).showToast();
                    inscCompetitions.push(btn.getAttribute("data-btn"));
                    
                    


                    userObjComp.comp = inscCompetitions;
                    localStorage.setItem("UserData", JSON.stringify(userObjComp));
                    return userObjComp;
                    
                }

            });
        }) 
        
    }
    // function compPerfil(userObjPerfil) {
    //     const competicoesPerfil = document.querySelector(".competicoes_perfil");
    //     const comp = document.createElement("div");
    //     comp.classList.add("competicao");
    //     const conteudoCompeticao = 
    //     `
    //     <h5>ISA World Junior Surfing</h5>
    //     <name style="display: none;" id="compIsaPic">Oceanside Pier, Califórnia - 🇺🇸</name>
    //     <i class="fa-solid fa-location-dot localBtn"></i>
    //     <span>29/08/2024</span>
    //     `
    // }
        
}