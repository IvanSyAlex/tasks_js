let addressBar = "/users/download/index.htm";

function substringSearch(string){

    let str = '.html';

    if(string.includes(str)){
        return true;
    }else{
        return false;
    }
}
console.log(substringSearch(addressBar));