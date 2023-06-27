
export function InitApp(template) {
  document.body.innerHTML = template
}

export function Query(teid) {
  return document.querySelector(`#${teid}`)
}

export function UpdateInner(teid, updated) {
  document.querySelector(`#${teid}`).innerHTML = updated
}
