(function(){
    var $ = function(id) {
        return document.getElementById(id);
    };

    var removeSpace = function(s){
        return s.replace(/\s+/g, "");
    };

    var $meetID = $("meet_id");
    var $passcode = $("passcode");
    var $qrHolder = $("qr");
    var $zoomURI = $("zoom_uri");

    var generate = function(){
        var meetID = removeSpace($meetID.value);
        var passcode = removeSpace($passcode.value);

        var zoomURI =
            "zoom.us/join?confno=" + meetID +
            "&pwd=" + passcode;
        
        var qr = qrcode(0, "H");
        qr.addData('zoomus://' + zoomURI);
        qr.make();
        $qrHolder.innerHTML = qr.createImgTag();

        $zoomURI.innerText = "zoommtg://" + zoomURI;
        $zoomURI.href = $zoomURI.innerText
    }

    generate();
    $meetID.addEventListener("input", generate);
    $passcode.addEventListener("input", generate);

})();