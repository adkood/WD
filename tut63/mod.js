// console.log("this is custom module");
function average(arr)
{
    let sum=0;
    arr.forEach(element => {
        sum+=element;
    });
    return sum/arr.length;
}

module.exports=average;