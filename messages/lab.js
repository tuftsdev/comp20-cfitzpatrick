function parse(){

        request = new XMLHttpRequest();

        request.open("GET", "https://messagehub.herokuapp.com/messages.json", true);

        request.onreadystatechange = makeCall;

        request.send(null);

        function makeCall (){

                if (request.readyState == 4 && request.status == 200){
                        result = "";
                        rawResponse = request.responseText;
                        messageData = JSON.parse(rawResponse);
                        elements = document.getElementById("messages");

                        for (i = 0; i < 2; i++){
                                result += "<p>" + messageData[i]["content"] + " from: " + messageData[i]["username"] + "</p>";
                        }

                        elements.innerHTML = result;
                }

                else if (request.readyState == 4 && request.status != 200) {
                                document.getElementById("messages").innerHTML = "<p>broken :/</p>";
                }
        }
}