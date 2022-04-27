const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms));
}

const url = 'https://jsonplaceholder.typicode.com/posts'

function fetchPosts() {
    console.log('Started fetch posts')
    return delay(2000)
        .then(() => fetch(url))
        .then(resp => resp.json())
        .then(data => data.forEach(element => console.log(element.title)))
        .catch(e => console.error(e))
}

async function asyncFetchPosts() {
    console.log('Started fetch posts')
    try {
        await delay(2000);
        const resp = await fetch(url);
        const data = await resp.json();
        return data.forEach(element => console.log(element.title));
    } catch (e) {
        return console.error(e);
    }
}

function fetchPosts1() {
    console.log('Started fetch posts')
    fetch(url)
        .then(resp => resp.json())
        .then(data => data.forEach(element => console.log(element.title)))
        .catch(e => console.error(e))
}

// fetchPosts()