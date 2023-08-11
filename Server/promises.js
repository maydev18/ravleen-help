// const student = {
//     name : "Mayank",
//     age : 20,
//     printdetails(){
//         console.log("My name is "+ this.name + " my age is "+ this.age);
//     }
// }
// const fun = ({name,age})=>{
//     return [name,age];
// }
// console.log(fun(student));
// const server = ()=>{
//     let promise = new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//             resolve("your name is mayank");
//         },2000);
//     })  
//     return promise;
// }
// setTimeout(()=>{
//     console.log("requesting the server for data");
//     server()
//         .then((serverdata)=>{
//             console.log(serverdata);
//             return new Promise((resolve , reject)=>{
//                 setTimeout(()=>{
//                     resolve("your age is 19");
//                 },2000)
//             });
//         })
//         .then((age)=>{
//             console.log(age);
//         })
//         .catch(error=>{
//             console.log(error);
//         })
// },2000);