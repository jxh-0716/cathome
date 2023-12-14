import service from '../index'
export const login = (val) => {
    return service.post(`/user/login?name=${val.name}&password=${val.password}`)
}
export const register = (val) => {
    return service.post(`/user/register?name=${val.name}&password=${val.password}&email=${val.email}&gender=${val.gender}&nickname=${val.nickname}&phonenumber=${val.phonenumber}`)
}