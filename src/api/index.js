const BASE = 'http://13.59.141.149:8080'

let getEwoks = function() {
    return fetch(BASE + '/ewoks')
        .then((resp) =>{
        let json = resp.json()
        console.log(json)
        return json
    })

}

let createEwok = function(ewok){
    return fetch(BASE + '/ewoks', {
        body: JSON.stringify(ewok),
        headers: {
                'Content-Type': 'application/json'
        },
        method: "POST"
    })
     .then((resp) => {
         let json = resp.json()
         if( resp.status === 200){
             window.location.href = '/'
         } else {
             console.log("no worky");
         }
         return json
     })
}


export {
    getEwoks,
    createEwok
}
