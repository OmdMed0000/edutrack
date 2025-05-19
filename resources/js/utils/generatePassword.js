export const generateStrongPassword = () => {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?`~';
    
    // Ensure we have at least one of each required character type
    const randomLower = lowercase[Math.floor(Math.random() * lowercase.length)];
    const randomUpper = uppercase[Math.floor(Math.random() * uppercase.length)];
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
    
    // Combine all characters
    const allChars = lowercase + uppercase + numbers + symbols;
    let password = randomLower + randomUpper + randomNumber + randomSymbol;
    
    // Fill the rest to meet minimum length (8)
    for (let i = 4; i < 12; i++) {  // Generates passwords between 8-12 characters
      password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    
    // Shuffle the password to mix the required characters
    return password.split('').sort(() => 0.5 - Math.random()).join('');
  }