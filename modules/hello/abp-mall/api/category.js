export function getCountries(query) {
  return uni.request({
    url: 'https://www.lintsense.cn/hello/api/app/country',
    method: 'GET',
    params: query
  })
}
export function createCountry(country) {
  return uni.request({
    url: '/api/app/country',
    method: 'POST',
    country
  })
}
export function updateCountry(item) {
  return uni.request.put(`/api/app/country/${country.id}`, item)
}
export function deleteCountry(id) {
  return uni.request({
    url: '/api/app/country',
    method: 'DELETE',
    id
  })
}

export function getStateProvinces(query) {
  return uni.request({
    url: '/api/app/state-province/paged-list?maxResultCount=50&sorting=Name',
    method: 'get',
    params: query
  })
}
export function createStateProvince(stateProvince) {
  return uni.request({
    url: '/api/app/contact/create',
    method: 'post',
    stateProvince
  })
}
export function updateStateProvince(stateProvince) {
  var item = {};
  item.id = stateProvince.id;
  item.chineseName = stateProvince.chineseName;
  item.countryCode = stateProvince.countryCode;
  item.countryId = stateProvince.countryId;
  item.name = stateProvince.name;
  item.stateProvinceCode = stateProvince.stateProvinceCode;
  item.territory = stateProvince.territory;
  return uni.request.put(`/api/app/state-province/${stateProvince.id}`, item)
}
export function deleteStateProvince(data) {
  return uni.request({
    url: '/api/app/contact/update',
    method: 'post',
    data
  })
}

export function getCities(query) {
  return uni.request({
    url: '/api/app/city/paged-list?maxResultCount=150&sorting=Name',
    method: 'get',
    params: query
  })
}
export function createCity(data) {
  return uni.request({
    url: '/api/app/contact/create',
    method: 'post',
    data
  })
}
export function updateCity(data) {
  return uni.request({
    url: '/api/app/contact/update',
    method: 'post',
    data
  })
}
export function deleteCity(data) {
  return uni.request({
    url: '/api/app/contact/update',
    method: 'post',
    data
  })
}
