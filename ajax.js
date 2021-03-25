function send() {
    var xhr = XMLHttpRequest();
    var data = '{"__proto__":{"status":"polluted"}, "name": "asd", "status":"3323"}';
    xhr.onload = function() {
        if (xhr.status === 200 || xhr.status === 201) {
            console.log(1)
    }   else
            console.log(2)
    };
    xhr.open('POST', '/');
    xhr.setRequestHeader('Content-Type', 'application/json'); 
    xhr.send(data);
};send();

//git hub commit test