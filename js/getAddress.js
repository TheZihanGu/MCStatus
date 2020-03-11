function getAddress() {
    var ip = document.getElementById("ip");
    var port = document.getElementById("port");
    document.getElementById("address").innerText = "https://api.tzg6.com/api/mcstatus?ip=" + ip.value + "&port=" + port.value
}