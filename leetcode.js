// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
var filter = function(arr, fn) {
    filteredArr=[];
    for(let i =0;i<arr.length;i++){
        if(fn(arr[i],i)){
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
};