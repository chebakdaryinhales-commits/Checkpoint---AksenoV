const locacii = [
    ['Parij', [69, 67]],
    ['USSR', [420, 5]],
    ['Germanima', [24, 1488]],
    ['Amerima', [1783, 50]]
]

const gdeYa = [69, 67]

function gdeYaYepta(locacii, gdeYa){
    for (let i = 0; i < locacii.length; i++){
        const [name, coords] = locacii[i]

    if (coords[0] == gdeYa[0] && coords[1] == gdeYa[1]) {
        console.log(`Вы находитесь в ${name}`)
        }
    }
    return gdeYa;
}

console.log(gdeYaYepta(locacii, gdeYa))