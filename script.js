var converstionId;
var clientId;
var finalmessage;

function makeFirstCall() {
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/conversationPost"
    }).done(function(data) {
        console.log(data);
        var responseArray = data.response[0].toString();
        var json = JSON.stringify(eval("(" + responseArray + ")"));
        var obj = JSON.parse(json);
        console.log(obj);
        finalmessage = obj.message;
        console.log(finalmessage);

        converstionId = data.conversation_id;
        clientId = data.client_id;

    });

}

function makeSecondCall() {
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/conversationPost",
        data: {
            coid: converstionId,
            cid: clientId,
            uin: "Januka",
        }
    }).done(function(data) {
        console.log(data);
        for (i = 0; i < 2; i++) {
            var responseArray = data.response[i].toString();
            var json = JSON.stringify(eval("(" + responseArray + ")"));
            var obj = JSON.parse(json);
            console.log(obj);
            finalmessage = obj.message;
            console.log(finalmessage);

            if (obj.hashCode == "#123") {
                console.log("**********************");
                document.getElementById("yesBtn").disabled = false;
                document.getElementById("noBtn").disabled = false;
            }
        }
        converstionId = data.conversation_id;
        clientId = data.client_id;

    });

}

function yesAnswer() {
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/conversationPost",
        data: {
            coid: converstionId,
            cid: clientId,
            uin: "YES",
        }
    }).done(function(data) {
        console.log(data);
        var responseArray = data.response[2].toString();
        var json = JSON.stringify(eval("(" + responseArray + ")"));
        var obj = JSON.parse(json);
        console.log(obj);
        finalmessage = obj.message;
        console.log(finalmessage);

        converstionId = data.conversation_id;
        clientId = data.client_id;

    });

}

function noAnswer() {
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/conversationPost",
        data: {
            coid: converstionId,
            cid: clientId,
            uin: "NO",
        }
    }).done(function(data) {
        console.log(data);
        var responseArray = data.response[0].toString();
        var json = JSON.stringify(eval("(" + responseArray + ")"));
        var obj = JSON.parse(json);
        console.log(obj);
        finalmessage = obj.message;
        console.log(finalmessage);

        converstionId = data.conversation_id;
        clientId = data.client_id;

    });

}