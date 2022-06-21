$(document).ready(() => {

    $(".logout").click(() => {
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    
        fetch("/logout", options)
            .then(response => response.json())
            .then(data => {
                window.location = "/login";
            })
            .catch(function (error) {
                console.log(error);
                alert("Lỗi hệ thống");
            })
    })
    
})