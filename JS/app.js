
const form = document.querySelector("#SearchForm")
form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const searchTerm = form.elements.query.value
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
    console.log(res.data)
    makeimages(res.data)
    form.elements.query.value = ""
    // console.log(res.data[0].show.image.medium);
})

const makeimages = (shows) => {
    for (let result of shows) {
        try {
            const img = document.createElement('img')
            img.src = result.show.image.medium;
            document.body.append(img)
            img.classList.add("img1")
        } catch (error) {
            console.log("No image availabe")
        }
    } 
}
