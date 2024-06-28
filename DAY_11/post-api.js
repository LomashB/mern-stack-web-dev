
async function getData() {
    // simulating gettingg data from a server 
    // awaiting data 2 times one time for getting data and one time for parsing data into json  
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    body: JSON.stringify({
                        title: 'foo',
                        body: 'bar',
                        userId: 1,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
    let data = await x.json()
    console.log(data)
    return data
}

async function main() {

    console.log("Loading modules")

    console.log('Do something else')

    console.log("load data")

    let data = await getData()

    console.log(data)

    console.log("process data")

    console.log("Task 2")

}

main()

