document.addEventListener('DOMContentLoaded', function() {
    var pc = document.getElementById("pc");
    var msg = document.getElementById("msg");

    pc.addEventListener('input', function() {
        var strength = 0;
        var message = "";

        if (pc.value.length > 0) {
            if (pc.value.length >= 1) {
                strength++;
            }
            
            if (/[a-z]/.test(pc.value) && /[A-Z]/.test(pc.value)) {
                strength++;
            }
            
            if (/\d/.test(pc.value)) {
                strength++;
            }
            
            if (/[^a-zA-Z0-9]/.test(pc.value)) {
                strength++;
            }

            switch (strength) {
                case 1:
                    message = "weak";
                    msg.style.color = "red";
                    pc.style.borderColor = "red";
                    break;
                case 2:
                    message = "medium";
                    msg.style.color = "orange";
                    pc.style.borderColor = "orange";
                    break;
                case 3:
                case 4:
                    message = "strong";
                    msg.style.color = "blue";
                    pc.style.borderColor = "blue";
                    break;
                default:
                    message = "";
            }
        } else {
            message = "";
        }

        msg.textContent = "Password is " + message;
    });
});
function copyPass(){
    pc.select();
    document.execCommand("copy");
}