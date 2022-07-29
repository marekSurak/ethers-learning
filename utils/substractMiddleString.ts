export const substractMiddleString = (data: string) => {
  if (data.length > 15) {
    return data.substr(0, 7) + '...' + data.substr(data.length - 7, data.length)
  }
  return data
}
