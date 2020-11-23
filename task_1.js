let  string = " Ау Создать переменную со строковым значением. Сформировать переменную которая будет состоять только из";
function getVowels(string){
    let newString = 'Результат строки - ';
    const vowel = ['А','Е','И','О','У','Ю','Ы','Э','Я','а','е','и','о','у','ю','ы','э','я'];
    for (let i=0; i<string.length;i++){
        for(let n=0; n<vowel.length;n++){
            if(string[i] == vowel[n]){
                newString += string[i];
            }
        }
    }
    return newString;
}
console.log(getVowels(string));
