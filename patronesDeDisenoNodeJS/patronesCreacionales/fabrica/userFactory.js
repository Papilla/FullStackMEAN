export function createUser(nombre) {
    const privateProperties = {};

    const user = {
        setName(nombre) {
            if (!nombre) {
                throw new Error('El usuario debe tener un nombre');
            }

            privateProperties.nombre = nombre;
        },
        getName() {
            return privateProperties.nombre;
        },
    };

    user.setName(nombre);
    return user;
}