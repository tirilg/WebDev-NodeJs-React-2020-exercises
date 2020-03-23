
$.get("cars", ({ response }) => {
    response.map((car) => {
        const carCard = `
            <div id="car-${ car.id }" class="car-card">
                <button onClick=deleteCar(${car.id})>X</button>
                <button onClick=editCar(${car.id})>Edit</button>
                <div>
                    <p>Brand: ${ car.brand ? car.brand : "no brand" }</p>
                    <p>Type: ${ car.type ? car.type : "no type" }</p>
                </div>
            </div>
        `;
        $('#wrapper').append(carCard);
    })  
});


function deleteCar(carId) {
    $.ajax({
        url: 'cars/' + carId,
        type: 'DELETE'
    }).done(({response}) => {
        $('#car-' + carId).remove();
        console.log(response);
    });
}

function editCar(carId) {
    
    $.ajax({
        url:'cars/' + carId,
        type: 'PUT'
    }).done(response => {
        console.log(response)
    }) 
}

const $form = $('#addCar');
$form.on('submit', addCar);

function addCar (e) {
  e.preventDefault();
  $.ajax({
    url: 'cars/',
    type:'POST',
    data: $form.serialize()
  }).done(response => {
        const car = response.response;
        console.log(car);
        const carCard = `
            <div id="car-${car.id}" class="car-card">
                <button onClick=deleteCar(${ car.id })>X</button>
                <p>Brand: ${ car.brand ? car.brand : "no brand" }</p>
                <p>Type: ${ car.type ? car.type : "no type" }</p>
            </div>
        `;
        $('#wrapper').append(carCard);
  });
}

