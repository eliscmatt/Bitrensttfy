function validateDate() {

        let date = document.getElementById("data_nascimento_cadastro").value;
        let isValid = validDate(date);
        let respLabel = document.querySelector(".resp");

        if (isValid) {
            respLabel.innerHTML = "<small>Data correta!</small>";
            respLabel.classList.add("correct");
        } else {
            respLabel.innerHTML = "<small>Data incorreta!</small>";
            respLabel.classList.add("incorrect");
        }
        respLabel.classList.remove("hidden");
    }

  
    function validDate(dateString) {
        if (dateString === '') {
            return false;
        }

        let dateValue = dateString.split('/');
        let day = parseInt(dateValue[0], 10);
        let month = parseInt(dateValue[1], 10) - 1;
        let year = parseInt(dateValue[2], 10);
        let date = new Date(year, month, day);

    if (
        date.getFullYear() === year &&
        date.getMonth() === month &&
        date.getDate() === day && year >= 1900
    ) {
        return true;
    } else {
        return false;
    }
}
