export let params ={
  category: "",
  page: "1",
  limit: "8",
  sort: '',
  order: '',
  q: ""
}
export const searchInput = document.querySelector("#search input")
export const searchButton = document.querySelector("#search button")
export const pagiPrev = document.querySelector("#paginationPrev")
export const pagiNext = document.querySelector("#paginationNext")
export const pagiNumber = document.querySelector("#paginationNumber")