// Conversion de temperatura
// Celcius a Fahrenheit
function caf(Celcius) {
    return Celcius * (9 / 5) + 32;
}
// Celsius a Kelvin
function cak(Celcius) {
    return Celcius + 273.15;
}
// Fahrenheit a Celsius
function fac(Fahrenheit) {
    return (Fahrenheit - 32) / (9 / 5);
}
// Kelvin a Celsius
function kac(Kelvin) {
    return Kelvin - 273.15;
}
// Fahrenheit a Kelvin
function fak(Fahrenheit) {
    return cak(fac(Fahrenheit));
}
// Kelvin a Fahrenheit
function kaf(Kelvin) {
    return caf(kac(Kelvin));
}

// Funcion completa
export default function conversor(inMode, outMode, Entrada) {
    if (inMode == outMode) {
        return Entrada;
    }
    if ((inMode == "C") & (outMode == "F")) {
        return caf(Entrada);
    }
    if ((inMode == "C") & (outMode == "K")) {
        return cak(Entrada);
    }
    if ((inMode == "F") & (outMode == "C")) {
        return fac(Entrada);
    }
    if ((inMode == "F") & (outMode == "K")) {
        return fak(Entrada);
    }
    if ((inMode == "K") & (outMode == "C")) {
        return kac(Entrada);
    }
    if ((inMode == "K") & (outMode == "F")) {
        return kaf(Entrada);
    }
}
