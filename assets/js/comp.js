export default function initComp() {
    document.addEventListener("logSucess", () => {
        const compUserData = localStorage.getItem("userData");
        const userObjComp = JSON.parse(compUserData);
    
        verifyCategory(userObjComp);
        console.log(userObjComp)



        
        
    })

    function verifyCategory(user) {
        if (user.age <= 12) {
            user.category = "Sub-12";
        } else if (user.age <= 14) {
            user.category = "Sub-14";
        } else if (user.age <= 16) {Conheça
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
    }
  
        
}