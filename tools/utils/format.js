export const formatDataCountries = data => {
  const newData = []
  data.map(function(e) {
    newData.push(e.name)
  })
  return newData
}
