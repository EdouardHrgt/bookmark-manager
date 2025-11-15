const useResetObject = (obj, defaultValue = '') => {
  return Object.fromEntries(Object.keys(obj).map((key) => [key, typeof obj[key] === 'boolean' ? false : defaultValue]))
}
export default useResetObject
