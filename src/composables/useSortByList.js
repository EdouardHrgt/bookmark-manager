const useSortByList = (option, list) => {
  if (!list || list.length === 0) return []
  const opt = option.toLowerCase()
  const sortedList = [...list]

  if (opt === 'recently added') {
    return sortedList.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  }

  if (opt === 'recently visited') {
    return sortedList.sort((a, b) => new Date(b.lastVisited) - new Date(a.lastVisited))
  }

  if (opt === 'most visited') {
    return sortedList.sort((a, b) => b.visitCount - a.visitCount)
  }

  return list
}

export default useSortByList
