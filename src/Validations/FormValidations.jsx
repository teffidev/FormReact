const FormValidations = () => {
    //Creamos una función para validar el nombre de usuario
    const validateUserName = (userName) => {
        //Eliminamos los espacios en blanco
        const withoutSpaces = userName.trim();
        //Validamos la extensión
        if (withoutSpaces.lenght > 2) {
            return true;
        }  else {
            return false;
        }
    };
    
    //Creamos una función para validar el password
    const validatePassword = (password) => {
        //Eliminamos los espacios en blanco
        const withoutSpaces = password.trim();
        //Separamos el string en un array para luego recorrerlo y validar si existe al menos un número
        const passwordAsArray = password.split("");
        //El método some() nos retorna true si al menos una de las iteraciones es verdadera
        const hasNumber = passwordAsArray.some((character) => {
            //Si el valor es NaN, no es un número
            if (isNaN(character)) {
                return false;
            } else {
                return true;
            }
        });
    
        //Validamos la extensión y que haya al menos un número
        if (withoutSpaces.lenght > 5 && hasNumber) {
            return true;
        } else {
            return false;
        }
    };

    const onSubmitForm = (e) => {
        e.preventDefault();

        //Realizamos las validaciones con los valores almacenados en el estado
        const isUserNameValid = validateUserName(userName);
        const isPasswordValid = validatePassword(password);

        //Si al menos una de las validaciones es falsa mostramos un mensaje de error
        if (!isPasswordValid || !isUserNameValid) {
            alert("Some of the data entered are not correct.")
        } else {
            //Por ahora solo mostramos el nombre del usuario
            alert(`Bienvenido: ${userName}`)
        }
    }

};

export default FormValidations;
