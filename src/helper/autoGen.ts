export const generateCode = (length: number, firstCode: string) => {
  let text = ''
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  const randomDigits = Math.floor(10000 + Math.random() * 90000)

  return firstCode + text + randomDigits.toString()
}
