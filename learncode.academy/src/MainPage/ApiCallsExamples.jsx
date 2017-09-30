//axios

axios.get('https://restcountries.eu/rest/v2/all')
    .then((response) => {
        this.setState({
            test: response.data
        })
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error);
    });

//fetch

// fetch('https://restcountries.eu/rest/v2/all')
//         .then((res) => {
//             res.json().then((data) => {
//                 this.setState({
//                     country: data
//                 })
//             })
//
//         })
//         .catch((err) => {
//             console.log(err)
//         })
