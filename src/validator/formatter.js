let string  = "          functionup         ";
const trimmer = () => {
    return string.trim();
}
let line = "i Am AnIKet KhAwALe";

const upper = () => {
    return line.toUpperCase();
}

const lower = () => {
    return line.toLowerCase();
}

module.exports = {trimmer, upper, lower};