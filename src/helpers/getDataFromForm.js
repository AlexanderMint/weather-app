export default function (form) {
  const formDataJSON = {};
  const formElements = form.querySelectorAll('input, select, textarea');
  formElements.forEach((element) => {
    if (element.getAttribute('data-hidden') !== 'true') {
      const value = element.type === 'checkbox' ? element.checked : element.value;
      formDataJSON[element.name] = value;
    }
  });

  return formDataJSON;
}
