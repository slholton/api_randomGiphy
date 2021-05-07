const apiKey = "rHHBI9CJPBptdo9vMBGyRIT61xXU5Yj1"
let metadata = `https://api.giphy.com/v1/randomid?api_key=${rHHBI9CJPBptdo9vMBGyRIT61xXU5Yj1}`

const displayGiphy = () => {
    const baseURL = 'https://api.giphy.com/v1/randomid'
    fetch(baseURL)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            displayResults(json)
        })
}