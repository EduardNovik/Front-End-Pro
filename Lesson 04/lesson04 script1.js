const yearOfbirth = prompt('What is your year of birth?')

if (yearOfbirth === null) {
    alert (`You haven't typed the year of birth :(`)
    exit()
}

const yourCity = prompt('What city do you live in?')

if (yourCity === null) {
    alert (`You haven't typed your city :(`)
    exit()
}

const sport = prompt('What is your favorite sport?')

if (sport === null) {
    alert (`You haven't typed your favorite sport :(`)
    exit()
}


if (yourCity === 'Kyiv'|| yourCity === 'London' || yourCity === 'Washington'){

    if (sport === 'Box') {
        alert (`You are ${yearOfbirth} years old,
    You live in the capital ${yourCity}
    Awesome! You want to become like W.Klichko`)
    }
    else if (sport === 'Football') {
        alert (`You are ${yearOfbirth} years old,
    You live in the capital ${yourCity}
    Awesome! You want to become like A.Shevchenko`)
    }
    else if (sport === 'Basketball') {
        alert (`You are ${yearOfbirth} years old,
    You live in the capital ${yourCity}
    Awesome! You want to become like M.Jordan`)
    }
    else {
        alert (`You are ${yearOfbirth} years old,
    You live in the capital ${yourCity}
    ${sport} is a great kind of sport!`)
    }
} 



if (yourCity !== 'Kyiv'&& yourCity !== 'London' && yourCity !== 'Washington'){

    if (sport === 'Box') {
        alert (`You are ${yearOfbirth} years old,
    You live in ${yourCity}
    Awesome! You want to become like W.Klichko`)
    }
    else if (sport === 'Football') {
        alert (`You are ${yearOfbirth} years old,
    You live in ${yourCity}
    Awesome! You want to become like A.Shevchenko`)
    }
    else if (sport === 'Basketball') {
        alert (`You are ${yearOfbirth} years old,
    You live in ${yourCity}
    Awesome! You want to become like M.Jordan`)
    }
    else {
        alert (`You are ${yearOfbirth} years old,
    You live in ${yourCity}
    ${sport} is a great kind of sport!`)
    }
} 


















