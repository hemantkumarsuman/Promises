/** Basic Promise Handling: Write a Promise that resolves with the value "Hello, Promises!" after 2 seconds. Then, log the resolved value to the console. **/

// const promise = new Promise((resolve,reject)=>{
       
//     setTimeout(()=>{
//         resolve('Hello,Promise')
//     },5000);
// });

// promise.then((res)=>{
//     console.log(res);
    
// });


/** Error Handling: Create a Promise that simulates a failing API call. If the operation fails, reject the Promise with the message "API call failed". 
    Use .catch() to handle the error. **/

// const promise = new Promise((resolve,reject)=>{
//     fetch('https://fakestoreapi.com/products')
//         .then((res)=>{
//             if(!res.ok){
//                 reject(`HTTP ERROR ${res.status}`);
//             }
//             return res.json();
//         })
//         .then((res)=>{
//             resolve(res)
//         })
//         .catch((e)=>reject(e));
// });


// promise.then((res)=>{
//     console.log(res);
    
// }).catch((e)=>console.log(e));

/**
 * 
 * 
 *  Chaining Promises: Create a Promise that resolves with a number (e.g., 10). Chain multiple .then() calls to:
    Add 5 to the number.
    Multiply the result by 2.
    Subtract 3. Finally, log the result.
 */

// function operation(num){
//     const p = new Promise((resolve,reject)=>{
//         if(typeof num !== 'number'){
//             reject("Enter Valid Number");
//         }       
        
//         else resolve(num);
//     })
    
//     p.then((res)=>{
        
        
//         return res+5;
//     }).then((res)=>{
//         return res*2;
//     }).then((res)=>{
//         return res-3;
//     }).then((res)=>console.log(res))
//     .catch(e=>console.log(e));
    
// }

// let num = 10;
// let ans = operation(num);


/**
 * 
 *  Promise in a Function: Write a function fetchData(url) that simulates fetching data from an API:
    If the URL is "good-url", resolve with {"data": "Sample Data"} after 1 second.
    If the URL is "bad-url", reject with the error "Invalid URL" after 1 second.
 * 
 * 
 */

// function fetchData(url){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             fetch(url)
//             .then((res)=>{
//                 if(!res.ok){
    
//                     reject("Invalid URL")
//                 }
//                 else return res.json();
//             })
//             .then((res)=>{
//                 resolve(res);
//             })
//             .catch((e)=>{
//                 reject(`Error: ${e}`)
//             })
//         },2000);
//     })
        
// }

// fetchData('https://fakestoreapi.com/products')
//     .then((res)=>{
//         console.log(res);
        
//     }).catch((e)=>console.log(e));


/**
 * Error Handling in Chains
Write a function processData(data) that:

Resolves with data * 2 if data is a number.
Rejects with "Invalid data" otherwise.
Use it to:

Double the number 5.
Handle the error if the input is "hello".
Always log "Process complete" at the end using .finally().

 */

// function processData(data){
//     return new Promise((resolve,reject)=>{
//         if(typeof data !== 'number'){
//             reject("Invalid Data");
//         }

//         resolve(data*2);
//     })
// }

// let data=20;
// processData(data)
// .then((res)=>{
//     console.log("Result:", res);
    
// })
// .catch((e)=>console.log(e))
// .finally(()=>{
//     console.log("Process COmplete");
    
// });


/**
 *  Create two Promises:
 *  fetchFastData() resolves with "Fast Data" in 500ms.
    fetchSlowData() resolves with "Slow Data" in 2000ms.
    Use Promise.race() to log the faster result.
 */
// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Fast Data");
//     },2000)
// });

// const p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Slow Data");
//     },3000)
// });

// Promise.race([p1,p2]).then((value)=>{
//     console.log(value);
    
// })


/**
 * 
 *  Write two functions, fetchUserData() and fetchPosts(userId), that return Promises.

    fetchUserData() resolves with a user object { id: 1, name: "John" } after 1 second.
    fetchPosts(userId) resolves with a list of posts [{ id: 1, title: "Post 1" }] after 1 second if userId is valid, otherwise rejects with "Invalid userId".

    Use chaining to:
    Fetch the user data.
    Use the userId to fetch their posts.
    Log the posts or any errors.
 * 
 */

// function fetchUsers(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve({ id: 1, name: "John" } )
//         },2000)
//     })
// }

// function fetchPosts(id){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(id===1){
//                 resolve([{ id: 1, title: "Post 1" }] );
//             }
//             else{
//                 reject("Invalid Object");
//             }
//         },2000)
//     })

// }

// fetchUsers()
// .then((res)=>{
//     console.log("User Data:",res);
//     return fetchPosts(res.id);
// })
// .then((res)=>{
//     console.log("Post: ",res);
    
// })
// .catch((e)=>console.log(e))



