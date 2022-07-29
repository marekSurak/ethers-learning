export const substractMiddleString = (data: string) => {
  if (data.length > 15) {
    return data.substr(0, 6) + '...' + data.substr(data.length - 4, data.length)
  }
  return data
}
