const useToggle = (refValue, bool) => {

  if (bool !== undefined) {
    if (typeof bool === 'boolean') {
      refValue.value = bool
    } else {
      refValue.value = !refValue.value
    }
  }

  else {
    return (bool) => {
      if (typeof bool === 'boolean') {
        refValue.value = bool
      } else {
        refValue.value = !refValue.value
      }
    }
  }
}

export default useToggle
