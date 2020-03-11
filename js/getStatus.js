function getStatus() {
    document.getElementById("progress").style.display="";
    var ip = document.getElementById("ip");
    var port = document.getElementById("port");
    if (ip.value == ""){
        alert("请输入服务器IP地址!")
        return false;
    };
    if (port.value == ""){
        port.value = 25565
    };
    var httpRequest = new XMLHttpRequest();
        httpRequest.open('GET', "https://api.tzg6.com/api/mcstatus?ip=" + ip.value + "&port=" + port.value, true);
        httpRequest.send();
        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState == 4 && httpRequest.status == 200) {
                var json = httpRequest.responseText;
                console.log(json);
                var result = eval('(' + json + ')');
                document.getElementById("result").style.display="inline";
                document.getElementById("result-ip").innerText = result.address;
                document.getElementById("result-port").innerText = result.port;
                document.getElementById("result-online").innerText = result.online;
                if (result.online == true){
                    document.getElementById("result-latency-style").style.display="";
                    document.getElementById("result-version-style").style.display="";
                    document.getElementById("result-motd-style").style.display="";
                    document.getElementById("result-current_players-style").style.display="";
                    document.getElementById("result-max_players-style").style.display="";
                    document.getElementById("result-latency").innerText = result.latency;
                    document.getElementById("result-version").innerText = result.version;
                    document.getElementById("result-motd").innerText = result.motd;
                    document.getElementById("result-current_players").innerText = result.current_players;
                    document.getElementById("result-max_players").innerText = result.max_players;
                    document.getElementById("progress").style.display="none";
                }
                else{
                    document.getElementById("result-latency-style").style.display="none";
                    document.getElementById("result-version-style").style.display="none";
                    document.getElementById("result-motd-style").style.display="none";
                    document.getElementById("result-current_players-style").style.display="none";
                    document.getElementById("result-max_players-style").style.display="none";
                    document.getElementById("progress").style.display="none";
                }
            }
        };
}