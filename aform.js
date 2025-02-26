window.onload = () => {
    let aform = document.querySelectorAll('a[data-form]');
    [...aform].forEach((v,i) => {
        v.onclick = e => {
            e.preventDefault();
            let form_temp = document.createElement('form');
            form_temp.setAttribute('method', e.target.dataset.method);
            form_temp.setAttribute('action', e.target.dataset.action);
            form_temp.style.display = 'none';
            let data_aform = JSON.parse(e.target.dataset.value);
            for (let key in data_aform) {
                let input_temp = document.createElement('input');
                input_temp.setAttribute('name', key);
                input_temp.setAttribute('value', data_aform[key]);
                input_temp.setAttribute('type', 'text');
                form_temp.appendChild(input_temp);
            }
            
            document.body.appendChild(form_temp);
            form_temp.submit();
        }
    })
}
