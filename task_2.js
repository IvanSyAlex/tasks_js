let objHumanWorks = [
    {name:"Albert",salary:1200},
    {name:"Sophia",salary:1500},
    {name:"Alexander",salary:125},
    {name:"Radion",salary:100},
    {name:"Yroslava",salary:25000},
    {name:"Vaselisa",salary:1698},
    {name:"Constantin",salary:1000}];

    function getEmployees(obj){
        let highlyPaidEmployees = '';
        for( let i=0;i<obj.length;i++){
            if(obj[i].salary>1000){
                highlyPaidEmployees += obj[i].name +', ';
            }
        }
        highlyPaidEmployees = highlyPaidEmployees.replace(/,\s*$/, "");
        return highlyPaidEmployees; 
    }
    console.log(getEmployees(objHumanWorks));
