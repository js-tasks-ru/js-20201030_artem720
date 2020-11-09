/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {

    return arr.slice().sort((a,b)=> {
        if(param == 'asc'){
           return compareStrings(a,b);
        } else{
            return compareStrings(b,a);
        }
    })
};
function compareStrings(str, compStr){
    return str.localeCompare(compStr, ['ru', 'en'], {caseFirst:'upper'})
}
