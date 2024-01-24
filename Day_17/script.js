const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// ^function to make sure the srting is by name and not article
function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim();
}

// sort 
const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

document.querySelector('#bands').innerHTML =
    sortedBands
        .map(band => `<li>${band}</li>`)
        .join('');

console.log(sortedBands);

//join is to make sure to remove the ,