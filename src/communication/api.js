let apiHost = "https://noahadrap-mynearbyplaces.herokuapp.com"

let getPlaces = () => {
    return fetch(apiHost + '/places')
    .then (response => response.json());
}

let getReviews = () => {
    return fetch(apiHost + '/reviews')
    .then (response => response.json());
}

let savePlace = (place) => {
    return fetch(apiHost + '/addPlace', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(place)
    });
}

let saveReviews = (place) => {
    return fetch(apiHost + '/addReview', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(place)
    });
}

let deletePlace = (place) => {
    return fetch(apiHost + '/deletePlace', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(place)
    });
}

let editPlace = (place) => {
    return fetch(apiHost + '/editPlace', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(place)
    });
}




let api = {
    getPlaces : getPlaces,
    getReviews : getReviews,
    savePlace : savePlace,
    deletePlace : deletePlace,
    editPlace : editPlace,
    saveReviews : saveReviews
};

export default api;