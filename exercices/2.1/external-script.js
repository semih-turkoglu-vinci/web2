let message = "C'est le meilleur moment pour charger cette page !";

alert(addDateTime(message));

function addDateTime(message) {
    const date = new Date();
    const dateTimeNow = date.toLocaleDateString();
    const timeNow = date.toLocaleTimeString();
    console.log(dateTimeNow); // 17/08/2020
    console.log(timeNow); // 13:26:15
    return  dateTimeNow +" "+ timeNow + " : " + message;
};

