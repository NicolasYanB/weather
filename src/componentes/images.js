const images = [
    {
        name: 'weather01.png',
        image: require('../images/weather01.png')
    },
    {
        name: 'wind.png',
        image: require('../images/wind.png')
    },
    {
        name: 'feels_like.png',
        image: require('../images/feels_like.png')
    },
    {
        name: 'index_uv.png',
        image: require('../images/index_uv.png')
    },
    {
        name: 'pressure.png',
        image: require('../images/pressure.png')
    },
    {
        name: 'weather02.png',
        image: require('../images/weather02.png')
    },
    {
        name: 'weather03.png',
        image: require('../images/weather03.png')
    },
    {
        name: 'weather04.png',
        image: require('../images/weather04.png')
    },
    {
        name: 'weather05.png',
        image: require('../images/weather05.png')
    }
]

function getImage(name) {
    const found = images.find(e => e.name === name)
    return found.image;
}

export default getImage