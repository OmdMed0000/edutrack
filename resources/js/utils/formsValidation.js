export const calculateAge =(birthDate) =>{
    const birth = new Date(birthDate);
    const today = new Date();
  
    let age = today.getFullYear() - birth.getFullYear();
  
    // Adjust if the birthday hasn't occurred yet this year
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
  
    return age;
}

export const userValidation = {
    fullName: {
        message: 'The name should not contain symbols or numbers',
        regex: /^[A-Za-z]+(\s[A-Za-z]+)*$/
    },

    birthDate: {
        message: 'The age should be between 18 and 65',
        validateFunc: (birthDate) => {
            const age = calculateAge(birthDate);
            return age >= 18 && age <= 65;
        },
    },

    matricule: {
        message: 'The matricule should not contain symbols',
        regex: /^[a-zA-Z0-9]+$/
    },

    email: {
        regex: /^[a-zA-Z0-9][a-zA-Z0-9._%+-]*@ofppt\.ma$/ ,
        message: 'invalid email , enter profetionnal email'
    },

    password : {
        message : 'Your password must be at least 8 characters long, and include lowercase and uppercase letters, numbers and symbols',
        regex : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)[A-Za-z\d\W]{8,}$/
    },

    confirmPassword : {
        message : 'The passwords do not match. Please make sure both password fields are identical.',
        check : 'password'
    }

}

