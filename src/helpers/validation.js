import validate from 'validate.js';

const useValidate = () => {
    const validateForm = (form, rule) => validate(form , rule);

    const validateEmail = (email, regex) => ( validate({email}, regex  ))

    return{ 
        validateEmail,
        validateForm  
    }

}

export default useValidate





// import validate from 'validate.js';


// export function validateEmail(form, constrants){(validate(form , constrants))} 
