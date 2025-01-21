function add(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}

export { add, sub }
export default function exports() { console.log("Hello, this is export module") }