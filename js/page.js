/**
 * TheZihanGu/MCStatus
 * https://mcstatus.tzg6.com
 * repo: https://github.com/TheZihanGu/MCStatus
 */

// Vue Setup
var resultip = new Vue({el: '#result-ip',data: {message: 'undefined'}})
var resultport = new Vue({el: '#result-port',data: {message: 'undefined'}})
var resultonline = new Vue({el: '#result-online',data: {message: 'undefined'}})
var resultlatency = new Vue({el: '#result-latency',data: {message: 'undefined'}})
var resultversion = new Vue({el: '#result-version',data: {message: 'undefined'}})
var resultmotd = new Vue({el: '#result-motd',data: {message: 'undefined'}})
var resultcurrent_players = new Vue({el: '#result-current_players',data: {message: 'undefined'}})
var resultmax_players = new Vue({el: '#result-max_players',data: {message: 'undefined'}})
var address = new Vue({el: '#address',data: {message: 'undefined'}})

// Main Function
function getStatus() {
    document.getElementById("progress").style.display="";
    var ip = document.getElementById("ip");
    var port = document.getElementById("port");
    if (ip.value == ""){
        document.getElementById("progress").style.display="none";
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
            resultip.message = result.address;
            resultport.message = result.port;
            resultonline.message = result.online;
            if (result.online == true){
                document.getElementById("result-latency").style.display="";
                document.getElementById("result-version").style.display="";
                document.getElementById("result-motd").style.display="";
                document.getElementById("result-current_players").style.display="";
                document.getElementById("result-max_players").style.display="";
                resultlatency.message = result.latency;
                resultversion.message = result.version;
                resultmotd.message = result.motd;
                resultcurrent_players.message = result.current_players;
                resultmax_players.message = result.max_players;
                document.getElementById("progress").style.display="none";
            }
            else{
                document.getElementById("result-latency").style.display="none";
                document.getElementById("result-version").style.display="none";
                document.getElementById("result-motd").style.display="none";
                document.getElementById("result-current_players").style.display="none";
                document.getElementById("result-max_players").style.display="none";
                document.getElementById("progress").style.display="none";

            }
        }
    }
}
// Get Address
function getAddress() {
    var ip = document.getElementById("ip");
    var port = document.getElementById("port");
    address.message = "https://api.tzg6.com/api/mcstatus?ip=" + ip.value + "&port=" + port.value
}