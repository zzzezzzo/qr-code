function create(){
    const txt = document.getElementById("input").value;
    const url = document.getElementById("qr-image").src = 'https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=' + txt;
    document.getElementById("myForm").reset();
}