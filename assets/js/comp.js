import { setUserData, getUserData, clearCategory } from './localStorage.js';

export default function initComp() {
    console.log('competi')
    const user = getUserData();
    
    document.addEventListener("logSucess", () => {
        clearCategory();
        verifyCategory(user);  // Atualiza a categoria do usuário
        let insc = checkInsc(user, competitions);
        competitionBtnCheck(insc);  // Atualiza os botões de competição
    });

    function verifyCategory(user) {
        if (user.age <= 12) {
            user.cat = "Sub-12";
        } else if (user.age <= 14) {
            user.cat = "Sub-14";
        } else if (user.age <= 16) {
            user.cat = "Sub-16";
        } else if (user.age <= 18) {
            user.cat = "Sub-18";
        } else if (user.age <= 35) {
            user.cat = "Open";
        } else if (user.age <= 40) {
            user.cat = "Masters";
        } else if (user.age <= 45) {
            user.cat = "Grand Masters";
        } else if (user.age <= 50) { 
            user.cat = "Kahunas";
        } else if (user.age <= 55) {
            user.cat = "Grand Kahunas";
        } else {
            user.cat = "Legends"; 
        }
        setUserData(user);
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
            if(competition[comp].includes(user.cat)) {
                result[comp] = true;
            }else {
                result[comp] = false;
            }
        }
        
        return result;
    }
    function competitionBtnCheck(insc) {
        let inscCompetitions = [];
        for (let compCheck in insc) {
            let btnOk = document.querySelector(`[data-btn = "${compCheck}"]`);
            if (insc.hasOwnProperty(compCheck) && insc[compCheck] === true) {
                btnOk.style.background = "#77dd77";
            } else {
                btnOk.style.background = "#FF6961";
                btnOk.setAttribute("id", "dis");
            }
        }
        const inscBtns = document.querySelectorAll("[data-btn]");
        inscBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                if (btn.getAttribute("id") === "dis") {
                    Toastify({ // Lib de alert
                        text: `Impossível fazer inscrição ou já inscrito!`,
                        duration: 3000,
                        close: true,
                        gravity: "bottom",
                        position: "right",
                        stopOnFocus: true,
                        style: {
                            background: "red",
                        },
                    }).showToast();
                } else {
                    Toastify({ // Lib de alert
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
                    btn.setAttribute("id", "dis");
    
                    user.comp = inscCompetitions;
                    setUserData(user);  // Atualiza as competições no localStorage
    
                   
                }
            });
        });
    }
    
        
}