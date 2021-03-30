import qs from "qs";
export function login(data) {
  var formData = qs.stringify(data);
  return uni.request.post('http://117.50.40.186:6060/connect/token', formData)
}
export function getMyProfile() {
  return uni.request({
    url: '/api/abp/api-definition',
    method: 'GET'
  })
}
export function getUsers() {
  return uni.request({
    url: '/api/identity/users',
    method: 'GET'
  })
}
export function endSession() {
  return uni.request({
    url: '/connect/endsession',
    method: 'POST'
  })
}
export function checkSession() {
  return uni.request({
    url: '/connect/checksession',
    method: 'POST'
  })
}
export function introspect() {
  return uni.request({
    url: '/connect/introspect',
    method: 'POST'
  })
}


