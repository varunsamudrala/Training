function main(){   // lexical scope or scope change 
    let a = 10;
    function chlid(){
        console.log(a);
    }
    chlid();
}
main();