// Add your code here
function submitData(name, email) {
    fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({name: `${name}`, email:`${email}`})})
    .then(Response => Response.json())
    .then(data => {
        console.log(data)
        document.body.innerHTML = data.id
    })
    .catch(function (error) { 
       document.body.innerHTML = error.message
       console.log(error)
       console.log(error.message)
    })
}

    