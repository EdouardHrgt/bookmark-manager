export const addBmark = (bookmark, datas) => {
  datas.value.push(bookmark)
}

export const getBmarks = (datas, item) => {
  if (item && datas.value.length > 0) {
    return datas.value.find((bmark) => bmark.id === item.id)
  }
  return datas.value
}

export const editBmark = (updatedBookmark, datas) => {
  const index = datas.value.findIndex((bmark) => bmark.id === updatedBookmark.id)

  if (index !== -1) {
    datas.value.splice(index, 1, updatedBookmark)
  }
}

export const deleteBmark = (bookmark, datas) => {
  const index = datas.value.findIndex((bmark) => bmark.id === bookmark.id)

  if (index !== -1) {
    datas.value.splice(index, 1)
  }
}
