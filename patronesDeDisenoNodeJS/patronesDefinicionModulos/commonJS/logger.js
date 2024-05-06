exports.info = (mensaje) => {
    console.log(`info: ${mensaje}`);
}

exports.error = (mensaje) => {
    console.log(`error: ${mensaje}`);
}

module.exports.debug = (mensaje) => {
    console.log(`debug: ${mensaje}`);
}