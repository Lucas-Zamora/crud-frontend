(function() {
    var data = localStorage.getItem('pedestres');
    if (!data) return;
    var parsedData = JSON.parse(data);

    var template = '';
    parsedData.forEach(function(value, index){

      template += `
                <tr>
                    <td scope="row">${++index}</td>
                    <td>${value.name}</td>
                    <td>${value.cpf}</td>
                    <td>${value.birthdate}</td>
                    <td>${value.transportType}</td>
                    <td>${value.company}</td>
                    <td>${value.travelTime}</td>
                    <td>${value.addres}, ${value.number}, ${value.neighborhood} - ${value.city}</td>
                    <td></td>
                    <td><button type="button" class="btn btn-danger" data-apagar="${value.cpf}">
                    Apagar</button></td>
                </tr>
      `;
    })
    var tBody = document.querySelector('#tBody');
    tBody.insertAdjacentHTML('beforeend', template);

    function apagarColuna(indiceRemover){
      var newParsedData = parsedData.filter(function(value,index){
        return parseInt(value.cpf) !== indiceRemover

      })
      if (window.confirm("Deseja realmente apagar esse cadastro?")) {
        localStorage.setItem('pedestres', JSON.stringify(newParsedData));
        window.location.reload()
      }
    }

    document.addEventListener('click', function(event) {
      var element = event.target;
      if (!element.hasAttribute('data-apagar')) return;
      apagarColuna(+element.dataset.apagar);
    });
    
  })();

  // <td><button type="button" class="btn text-white btn-warning">
  // Editar</button></td>