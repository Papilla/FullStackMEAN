export default function createImage(nombre) {
    if (nombre.match(/\.jpe?g$/)) {
        return new ImageJpeg(nombre);
    } else if (nombre.match(/\.gif$/)) {
        return new ImageGif(nombre);
    } else if (nombre.match(/\.png$/)) {
        return new ImagePng(nombre);
    } else {
        throw new Error('El formato de la imagen no es compatible');
    }
}