const STORAGE_KEY = 'BOOKMARKS'

const getBookmarks = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
}

const saveBookmarks = (bookmarks) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks))
}

export const addBmark = (bookmark) => {
  const bookmarks = getBookmarks()
  bookmarks.push(bookmark)
  saveBookmarks(bookmarks)
}

export const getBmarks = (item) => {
  const bookmarks = getBookmarks()
  if (item && bookmarks.length > 0) {
    return bookmarks.find((bmark) => bmark.id === item.id)
  }
  return bookmarks
}

export const editBmark = (updatedBookmark) => {
  const bookmarks = getBookmarks()
  const index = bookmarks.findIndex((bmark) => bmark.id === updatedBookmark.id)

  if (index !== -1) {
    bookmarks.splice(index, 1, updatedBookmark)
    saveBookmarks(bookmarks)
  }
}

export const deleteBmark = (bookmark) => {
  const bookmarks = getBookmarks()
  const index = bookmarks.findIndex((bmark) => bmark.id === bookmark.id)

  if (index !== -1) {
    bookmarks.splice(index, 1)
    saveBookmarks(bookmarks)
  }
}
