// isNaN will check number or string but only charater
function main(m,n) {
    new Promise((resolve,reject) => {
        setTimeout(() =>{
            if(isNaN(m) || isNaN(n)) {
                return reject();
            } for(let i = m; i<=n; i++) {
                console.log(i); 
            }
            return resolve()
        }, 2000)
    })
    .then(() => console.log("working..."))
    .catch(() => console.log("failed"))

}    
main(1,10)

// using multiple then methods is call promise chaining
// async and await keywords for avoid the promise chaining
// dom(document object model):
// BOM(browser object model)
// 1) window is the root element of the BOM(by window only we can access)
//  . window APIS are screen, history, fetch, navigator, storage,DOM
//  . document is a property of window object
// 2) DOM as a root element is document
//  .html is stored in a document in tree like structure
//  .html has head(in head it has meta , title) and body(in body it as all tags) this  all are nodes
//  when it comes to DOM its an object and it is provided by window and its root element is document and its life span is util page reload
// it is used to create updates modify delete an element
// we can provide style using DOM