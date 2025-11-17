const useSortByList = (option, list) => {
  if (!list || list.length === 0) return []

  const opt = option.toLowerCase()
  let sortedList = [...list]

  if (opt === 'recently added') {
    sortedList.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  } else if (opt === 'recently visited') {
    sortedList.sort((a, b) => new Date(b.lastVisited) - new Date(a.lastVisited))
  } else if (opt === 'most visited') {
    sortedList.sort((a, b) => b.visitCount - a.visitCount)
  }
  sortedList.sort((a, b) => {
    return (b.pinned === true) - (a.pinned === true)
  })

  return sortedList
}

export default useSortByList
