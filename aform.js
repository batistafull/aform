window.onload = () => {
    let aform = document.querySelectorAll('a[data-form]');
    [...aform].forEach((v,i) => {
        v.onclick = e => {
            e.preventDefault();
            let form_temp = document.createElement('form');
            form_temp.setAttribute('method', e.target.dataset.method);
            form_temp.setAttribute('action', e.target.dataset.action);
            form_temp.style.display = 'none';

            let input_temp = document.createElement('input');
            input_temp.setAttribute('name', e.target.dataset.name);
            input_temp.setAttribute('value', e.target.dataset.value);
            input_temp.setAttribute('type', e.target.dataset.type);

            form_temp.appendChild(input_temp);
            document.body.appendChild(form_temp);
            form_temp.submit();
        }
    })
}
