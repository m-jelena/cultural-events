function isNumber(n): boolean {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function isFractionalChar(n): boolean {
    let c = n.charCodeAt();
    return (c >= 188 && c <= 190) || (c >= 8531 && c <= 8542);
}

function indexFractionalChar(m) {
    m += '';
    let a = m.split(''), i;
    for(i in a) {
        if(isFractionalChar(a[i]))
            return i;
    }
    return false;
}

export function splitAddress(x) {
    let a = x.trim().split(' '), number: string;
    if(isNumber(a[a.length - 1].substr(0, 1)) || isFractionalChar(a[a.length - 1].substr(0, 1))) {
        number = a.pop();
    } else {
        return { number: '', space: '', street: x.trim() };
    }
    if(/[0-9]\/[0-9]/.exec(a[a.length - 1]) || indexFractionalChar(a[a.length - 1] !== false))
        number += ' ' + a.pop();
    return { number: number, space: ' ', street: a.join(' ') };
}

export function splitName(name: string) {
    const [firstName, ...lastName] = name.split(' ').filter(Boolean);
    return {
      firstName: firstName,
      lastName: lastName.join(' ')
    };
}