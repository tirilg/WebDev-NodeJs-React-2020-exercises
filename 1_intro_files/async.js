

function ringingCustomerUp(name) {
    console.log("we are ready to help you,", name);
}

function waiting(number) {
    console.log("You are number " + number +  " in line")
}


function itHelpDesk(name, callback) {
    //things happen... 
    callback(name);
}

/* itHelpDesk(3, waiting); */


const ringingCustomerUpRude = (name) => {
    console.log("what do you want,", name);
}

//itHelpDesk("James", ringingCustomerUpRude);
/* 
new Promise((resolve, reject) => {
    //code happens
    try {
        setTimeout(() => {
            resolve("Everything went well");
        }, 4000);
    } catch(error) {
        reject("Something went wrong")
    }
}).then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});
 */

function myPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("it worked")
        }, 2000)
       
    })
}

myPromise();

//async await uses promises under the hood

async function callMyPromise() {
    //myPromise().then(message => console.log(message));
    const message = await myPromise();
    console.log(message);
}

callMyPromise()

const AwaitArrowFunction = async () => {
    const message = await myPromise();
    console.log(message);
}
