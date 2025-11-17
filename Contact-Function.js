

  const scriptURL = 'https://script.google.com/macros/s/AKfycbw6XAJX34ZEmPSKb9PZkRdhZCDtNLOoC_HjU31p0Et14Wil0ZKQqgysA0UaLGEMcCny/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
