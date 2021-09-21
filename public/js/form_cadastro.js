document.addEventListener('submit', function(event){
    event.preventDefault();
    var form = document.querySelector('form');
    var formData = new FormData(form);
    var data = {};
    for(let [name, value] of formData) {
        data[name] = value;
      }
    var oldStorage = localStorage.getItem('pedestres');
    if(oldStorage){
        let parsedData = JSON.parse(oldStorage);
        console.log(parsedData);
        parsedData.push(data)
        localStorage.setItem('pedestres', JSON.stringify(parsedData));
    } else {
       localStorage.setItem('pedestres', JSON.stringify([data]))
    }
    alert('Cadastro efetuado com sucesso')
    window.location.href = '/'
})


// let arrPessoa = [];

// function populateStorage() {
// 	let name = document.getElementById('inputName');
// 	let cpf = document.getElementById('inputCPF4');
// 	let birthdate = document.getElementById('inputDate');
// 	let transportType = document.getElementById('inputType');
// 	let company = document.getElementById('inputName5');
// 	let travelTime = document.getElementById('inputTime');
// 	let addres = document.getElementById('inputLog');
// 	let neighborhood = document.getElementById('inputBar');
// 	let number = document.getElementById('inputNum');
// 	let city = document.getElementById('inputCity');

// 	let pessoa = {
// 		test1: name.value,
// 		test2: cpf.value,
// 		test3: birthdate.value,
// 		test4: transportType.value,
// 		test5: company.value,
// 		test6: travelTime.value,
// 		test7: addres.value,
// 		test8: neighborhood.value,
// 		test9: number.value,
// 		test0: city.value,
// 	}

//     arrPessoa.push(pessoa)

// 	// localStorage.setItem('name', document.getElementById('inputName').value);
// 	// localStorage.setItem('cpf', document.getElementById('inputCPF4').value);
// 	// localStorage.setItem('birthdate', document.getElementById('inputDate').value);
// 	// localStorage.setItem('transportType', document.getElementById('inputType').value);
// 	// localStorage.setItem('company', document.getElementById('inputName5').value);
// 	// localStorage.setItem('travelTime', document.getElementById('inputTime').value);
// 	// localStorage.setItem('addres', document.getElementById('inputLog').value);
// 	// localStorage.setItem('neighborhood', document.getElementById('inputBar').value);
// 	// localStorage.setItem('number', document.getElementById('inputNum').value);
// 	// localStorage.setItem('city', document.getElementById('inputCity').value);
// }

// document.querySelector('#btnAdicionar').addEventListener('click', function(event){
//     event.preventDefault();
//     var form = document.querySelector('form');
//     var formData = new FormData(form);
//     var data = {};
//     for(let [name, value] of formData) {
//         data[name] = value;
//       }
//     var oldStorage = localStorage.getItem('pessoa');
//     if(oldStorage){
//         let parsedData = JSON.parse(oldStorage);
//         parsedData.push(arrPessoa)
//         localStorage.setItem('pessoa', JSON.stringify(parsedData));
//     } else {
//        localStorage.setItem('pessoa', JSON.stringify([arrPessoa]))
//     }
//     alert('Cadastro efetuado com sucesso')

//     localStorage.setItem('pessoas', JSON.stringify(arrPessoa));
//     window.location.href = 'index.html'
// })

