const yearOfbirth = prompt('What is your year of birth?')

if (yearOfbirth === null) {
    alert (`You haven't typed the year of birth :(`)
   
} 

const yourCity = prompt('What city do you live in?')

if (yourCity === null) {
    alert (`You haven't typed your city :(`)
    
} 

const sport = prompt('What is your favorite sport?')

if (sport === null) {
    alert (`You haven't typed your favorite sport :(`)
    
} 




const year = new Date().getFullYear()

if (yourCity === 'Kyiv'|| yourCity === 'London' || yourCity === 'Washington'){

    if (sport === 'Box') {
        alert (`You are ${year - yearOfbirth} years old,
    You live in the capital ${yourCity}
    Awesome! You want to become like W.Klichko`)
    }
    else if (sport === 'Football') {
        alert (`You are ${year - yearOfbirth} years old,
    You live in the capital ${yourCity}
    Awesome! You want to become like A.Shevchenko`)
    }
    else if (sport === 'Basketball') {
        alert (`You are ${year - yearOfbirth} years old,
    You live in the capital ${yourCity}
    Awesome! You want to become like M.Jordan`)
    }
    else {
        alert (`You are ${year - yearOfbirth} years old,
    You live in the capital ${yourCity}
    ${sport} is a great kind of sport!`)
    }
} 



if (yourCity !== 'Kyiv'&& yourCity !== 'London' && yourCity !== 'Washington'){

    if (sport === 'Box') {
        alert (`You are ${year - yearOfbirth} years old,
    You live in ${yourCity}
    Awesome! You want to become like W.Klichko`)
    }
    else if (sport === 'Football') {
        alert (`You are ${year - yearOfbirth} years old,
    You live in ${yourCity}
    Awesome! You want to become like A.Shevchenko`)
    }
    else if (sport === 'Basketball') {
        alert (`You are ${year - yearOfbirth} years old,
    You live in ${yourCity}
    Awesome! You want to become like M.Jordan`)
    }
    else {
        alert (`You are ${year - yearOfbirth} years old,
    You live in ${yourCity}
    ${sport} is a great kind of sport!`)
    }
} 


















