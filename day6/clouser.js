// function main(){   // lexical scope or scope change 
//     let a = 10;
//     function chlid(){
//         console.log(a);
//     }
//     return chlid
// }
// main()()




function main(){   // lexical scope or scope change 
    function chlid(){
        console.log("chlid");
        function chlid1_1(){
            console.log("chlid1-1");
        }
        return chlid1_1
    }
    function chlid2(){
        console.log("chlid2");
    }
    return [chlid, chlid2]
}
main()[0]()()
main()[1]()
