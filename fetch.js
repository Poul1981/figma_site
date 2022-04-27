const url = "https://jsonplaceholder.typicode.com/todos";

// GET
// async function sendRequest(method, url, body = null) {
//     const responce = await fetch(url);
//     const data = await responce.json();
//     return data;
// }
function sendRequest(method, url, body = null) {
    return fetch(url)
        .then(resp => resp.json());
}

sendRequest("GET", url)
    .then(data => console.log(data[3]))
    .catch(er => console.error(er))

// POST

function sendRequestPost(method, url, body) {
    const headers = {
        'Content-Type': 'application/json'
    }
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(resp => {
        if (resp.ok) {
            return resp.json()
        }
    })
}
const body = {
    name: 'Lenin1',
    age: 55
}

sendRequestPost('POST', url, body)
    .then(data => console.log(data))
    .catch(err => console.log(err))