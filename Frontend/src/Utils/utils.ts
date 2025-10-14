import _ from "lodash";

export const validateEmail = (email:string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const valid = emailRegex.test(email);
  return valid ? 
            [true, 'Valid Email Address']  
            : [false, 'Please enter a valid email address (e.g., user@example.com).'];
}

export const validatePassword = (password: string) => {
    if(_.isEmpty(password)){
        return [false, 'Please enter valid password'];
    }
    if(password.length < 8 || password.length >= 32){
        return [false, 'Password length must be greater than 7 and less than 32 characters']
    }
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isStrongPassword = strongPasswordRegex.test(password);
    return isStrongPassword ? 
            [true, 'Valid Password'] 
            : [false, 'Password must be contain a mix of uppercase, lowercase, numbers, and special characters.'];
}

export const validateUsername = (name: string) => {
    if(_.isEmpty(name)){
        return [false, 'Please enter valid username.']
    }
    if(name.length < 3 || name.length >= 100){
        return [false, 'Username length must be greater than 3 and less than 100 characters']
    }
    return [true, 'Valid Username']
}