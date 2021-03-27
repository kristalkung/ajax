"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    $.get('/fortune', (FORTUNES) => {
        $('#fortune-text').html(FORTUNES);
    });
}

$('#get-fortune-button').on('click', showFortune);


// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};


    // TODO: request weather with that URL and show the forecast in #weather-info
    $.get(url, formData, (response) => {
        $('#weather-info').html(response.forecast);
        console.log('this is the response');
    });
}

$("#weather-form").on('submit', showWeather);


// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)

    const formInputs = {
        'melon_type': $('#melon-type-field').val(),
        'qty': $('#qty-field').val()
    };
    
    $.post('/order-melons.json', formInputs, (response) => {
        $('#order-status').html(response);
    });
}

$("#order-form").on('submit', orderMelons);


