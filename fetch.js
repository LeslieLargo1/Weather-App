import { displayData } from "./displayData.js"
export const fetchData = () => {
    const select = document.getElementById('select')

    const countryOptions = (countrynames) => {
        const sortCountry = []

        const countrynamesLength = Object.keys(countrynames).length
        for (let i = 0; i < countrynamesLength; i++) {
            const countryName = Object.values(countrynames)[i].name.common
            sortCountry.push(countryName)
        }
        const sorted = sortCountry.sort()
        for (let i = 0; i < sorted.length; i++) {
            const options = document.createElement('option')
            options.textContent = sorted[i]
            select.appendChild(options)
        }
    }


    const fetchCountries = () => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then((data) => {
                countryOptions(data)
            })
    }

    fetchCountries()

    const weather = (longetude, latitude) => {
        fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longetude}&appid=0cef584b154dece75b1d8db575693acd&units=metric`)
            .then(response => response.json())
            .then((data) => {

                displayData(data)

            })
    }


    const fetchLocation = (country, city) => {

        const geocoding = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&appid=0cef584b154dece75b1d8db575693acd`
        fetch(geocoding)
            .then(response => response.json())
            .then((data) => {
                const lat = Object.values(data)[0].lat
                const lon = Object.values(data)[0].lon
                weather(lon, lat)
            })
    }

    const getInput = (event) => {
        const getSelected = document.getElementById('select')
        const selectedCountry = getSelected.value
        const city = document.getElementById('enterCity')
        const inputCity = city.value
        fetchLocation(selectedCountry, inputCity)

    }
    const entercity = document.getElementById('enterCity')
    const button = document.getElementById('search')

    button.addEventListener('click', getInput)


    entercity.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            getInput();
        }

    })


}