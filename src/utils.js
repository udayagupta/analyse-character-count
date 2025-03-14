export const timeByWords = (words) => {
    const WPM = 200;
    const time = Math.ceil(words / WPM);

    if (time <= 1) return `<1 Minute(s)`;
    console.log(time, 'time')

    return `${time} Minute(s)`;
}

const sortObject = (obj) => {
    let sortedObj = Object.fromEntries(
        Object.entries(obj).sort(([, a], [, b]) => b - a)
    );

    return sortedObj
}


export const densityOfEachLetter = (text) => {
    let density = {}

    for (const char of text) {
        if ("abcdefghijklmnopqrstuvwxyz".includes(char.toLowerCase())) {
            const upperChar = char.toUpperCase()
            // if (density[upperChar] === undefined) {
            //     density[upperChar] = 1
            // } else {
            //     density[upperChar]++
            // }
            density[upperChar] = (density[upperChar] || 0) + 1;
        }
    }

    return sortObject(density)
} 


export const getTotalLetter = (text) => {
    const lettersOnly = text.replace(/[^a-zA-Z]/g, '');
    return lettersOnly.length;
}


