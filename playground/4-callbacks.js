// setTimeout is asyncoronous callback function
setTimeout(()=>{
    console.log("2 seconds are up");
}, 2000)

// Filter is syncronus callback function
const names = ['michael', 'volovsky']

const shortNames = names.filter((name)=>{
    return name.length < 8;
})




const geocode = (address, callback) => {
    setTimeout(() => {
                const data = {
            latitude: 0,
            longtitude: 0
        };
        return data;
    }, 2000)
};

const data = geocode('Philadelphia');
// the function would be run immediatly therefore no data is returned, as timmer didnot finished
// main function is terminated first, and then callbackAPI is run
console.log(data);



// This is why should add a callback

const geocode_with_callback = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longtitude: 0
        };
        callback(data);
    }, 2000)
};

geocode_with_callback('Philadelphia', (data) => {
    console.log(data);
});







// EXAMPLE from http://links.mead.io/callback
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!


const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a+b);
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})

