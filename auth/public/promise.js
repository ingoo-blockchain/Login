// Object
//                     // callback 함수 
// const pr = new Promise((resolve,reject)=>{ // 매개변수 2개 resolve 성공, reject 실패
//     // ... code 
//     // 끝나는 시점을 resolve 함수에다가 내용을 넣는다.  인자값
//     // 끝나는 시점을 혹시 에러가났니? reject 함수에다가 실패에 대한 내용을 적습니다. 
//     resolve(1)
// }) 


// // Pr 로부터 1이라는 값을 꺼내올려면 어떻게해야하나요? 


// // pr.then( (data)=> {
// //     console.log(data)
// // })


// const fn = (num) => {
//     // code 안에서.. 비동기 코드가 들어갈경우...
//     setTimeout(()=>{
//         return num + 1
//     },0)
// }

// // setTimeout() 
// // XMLHttpReuqest 
// console.log(fn(1))


// // const pr2 = new Promise((resolve,reject)=>{
// //     setTimeout(()=>{
// //         resolve(1)
// //     },0)
// // })


// // pr2.then(data=>{
// //     console.log(data+1)
// // })




// function ajax() {
//     const data = JSON.stringify({userid:'admin'})
//     const xhr = new XMLHttpRequest()
//     xhr.open('POST','/idcheck',true) 
//     xhr.setRequestHeader('Content-type','application/json') 
//     xhr.send(data) 
//     let result

//     xhr.onreadystatechange = () => {
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             try {
//                 return xhr.response
//             } catch (e) {
            
//             }
//         }
//     }

//     return result
// }

// console.log( ajax() )

// // promise 

// const ajax2 = new Promise((resvole,reject)=>{
//     const data = JSON.stringify({userid:'admin'})
//     const xhr = new XMLHttpRequest()
//     xhr.open('POST','/idcheck',true) 
//     xhr.setRequestHeader('Content-type','application/json') 
//     xhr.send(data) 

//     xhr.onreadystatechange = () => {
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             try {
//                 // 성공적인 부분
//                 resvole(xhr.response)
//             } catch (e) {
//                 // 실패적인 부분
//                 reject('나 실패함 ^^')
//             }
//         }
//     }
// })


// function test(){
//     ajax2.then(data=>{
//         console.log(2)
//         console.log(data) // {"result":2}
//         // code ...
//     })
//     // console.log(data) // undeifned 

//     return 0
// }

// test()


// console.log(1)
// setTimeout(()=>{
//     console.log(2)
// },0)
// console.log(3)


// // async/await 


// async function test2(){ // 나 앞으로 이함수는 promise 객체를 관리하는 함수로 선언하겠따.!
//     // 앞으로 프로미스 객체 사용할떄 앞에 await 달아줘. 
//     // then쓰면 코드모양이 콜백에 들어가니깐 안쓸거야 그거.
//     const a = await ajax2 // resolve 
//     console.log('나됨!! : ',a)
// } // return 을 할수없어요 

// test2()


// async function test3() { // promise 만든다 
//     // code 영역은 promise 객체를 컨트롤하는 영역이라서 마음대로 할수있따.
    
//     // 다른 프로미스 가져와서 then문없이 바로 가져와서 쓸수잇다.

//     return 1 // resolve 
// }

// console.log(' async :',test3())


// const test4 = new Promise((resolve,reject)=>{
//     resolve(1)
// })

// console.log('promise : ',test4)

/* 아반떼 , 소나타 , 그랜저 */

const 아반떼 = (cb) => {
    setTimeout(()=>{
        cb()
        console.log(`아반떼 go`)
    },1000)
}

const 소나타 = (cb) => {
    setTimeout(()=>{
        cb()
        console.log(`소나타 go`)
    },2000)
}

const 그랜저 = () => {
    setTimeout(()=>{
        console.log(`그랜저 go`)
    },3000)    
}


아반떼(()=>{
    소나타(()=>{
        그랜저()
    })
})


const 아반떼2 = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('아반떼 go')
        },1000)
    })
}


const 소나타2 = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('소나타 go')
        },2000)
    })
}

const 그랜저2 = () => {
    return new Promise((resolve,reject)=>{
        resolve('그랜저 go')
    },3000)
}

// 프로미스 체이닝
아반떼2().then(data=>{
    console.log(`promise : `,data)
    return 소나타2()
}).then(data=>{
    console.log(`promise : `,data)
    return 그랜저2()
}).then(data=>{
    console.log(`promise : `,data)
})


async function example(){
    const a = await 아반떼2()
    console.log(`1`,a)

    const b = await 소나타2()
    console.log(`2`,b)

    const c = await 그랜저2()
    console.log(`3`,c)
}



params = {
    method:'POST',
}

function ingoo_fetch(url,method) {
    return new Promise((resolve,reject)=>{
        const data = JSON.stringify({userid:'admin'})
        const xhr = new XMLHttpRequest()
        xhr.open(method,url,true) 
        xhr.setRequestHeader('Content-type','application/json') 
        xhr.send(data) 

        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                try {
                    // 성공적인 부분
                    resolve(xhr.response)
                } catch (e) {
                    // 실패적인 부분
                    reject('나 실패함 ^^')
                }
            }
        }
    })
}

ingoo_fetch('http://localhost:3000/idcheck','post').then(data=>{
    console.log(`fetch 만들기 `,data)
})
