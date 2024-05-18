const handleSearch = () => {
    document.getElementById('productContainer').innerHTML = ''
    document.getElementById('showOnClick').innerHTML = ''
    const text = document.getElementById('search-box').value;

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
        .then(res => res.json())
        .then(data => {
            showData(data)
        })

    document.getElementById('search-box').value = ''
}

const showData = (element) => {
    // const productContainer = document.getElementById('productContainer')
    console.log(element.meals)
    if (element.meals == null) {
        const h4 = document.createElement('h4')
        // h4.innerText =
        document.getElementById('noDataFound').className = 'd-flex text-align-center'
        document.getElementById('noDataFound').innerText = 'No data found'
    }
    else {
        document.getElementById('noDataFound').className = 'd-none'
        for (const m of element.meals) {
            const div = document.createElement('div')
            div.className = 'card'
            div.addEventListener('click', () => {
                showCardOnClick(m)
            })
            div.style = "width: 18rem;box-shadow: 4px 4px 4px gray"
            let card = `
                <img src="${m.strMealThumb}" class="card-img-top" alt="}">
                <div class="card-body">
                    <h5 class="card-title">${m.strArea}</h5>
                    <p class="card-text">${m.strInstructions.slice(0, 150)}</p>
                </div>    
            `
            div.innerHTML = card
            document.getElementById('productContainer').appendChild(div)
        }
    }
}

const showCardOnClick = (data) => {
    document.getElementById('showOnClick').className = 'd-block col-6 border'
    let card = `
            <img src="${data.strMealThumb}" class="card-img-top" alt="}">
            <div class="card-body">
                <h5 class="card-title">${data.strArea}</h5>
                <p class="card-text">${data.strInstructions}</p>
            </div>    
        `
    document.getElementById('showOnClick').innerHTML = card

}