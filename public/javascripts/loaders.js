export { fetchJSON };

async function fetchJSON(path) {
    // YOUR CODE HERE
    const response = await fetch(`public/json/${path}.json`)
    return await response.json()
}
