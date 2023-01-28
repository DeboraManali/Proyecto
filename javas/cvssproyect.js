// comportamiento del modal 
var myModal = new bootstrap.Modal(document.getElementById('modal'), {})
myModal.toggle()


// Comportamiento de botón Más Info
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
