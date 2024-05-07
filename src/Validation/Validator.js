export const IsEmail=(email)=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
export const IsPassword=(password)=>{
    return password.length>=5
}
