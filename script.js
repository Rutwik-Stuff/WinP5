document.addEventListener("DOMContentLoaded", function() {
    const installBtn = document.getElementById("install-btn");
    const progressBar = document.querySelector(".progress");
    const errorMessage = document.getElementById("error-message");

    installBtn.addEventListener("click", function() {
        startInstallation();
    });

    function startInstallation() {
        progressBar.style.width = "5%";
        setTimeout(() => {
            progressBar.style.width = "17%";
            fakeError();
        }, 2000);
    }

    function fakeError() {
        setTimeout(() => {
            errorMessage.style.display = "block";
        }, 3000);
    }

    window.closeError = function() {
        errorMessage.style.display = "none";
        continueChaos();
    }

    function continueChaos() {
        setTimeout(() => {
            progressBar.style.width = "43%";
            setTimeout(() => {
                progressBar.style.width = "89%";
                finalCrash();
            }, 2500);
        }, 1500);
    }

    function finalCrash() {
        setTimeout(() => {
            alert("Installation Failed: Unknown Error. Please restart the installer and hope for the best.");
            progressBar.style.width = "3%"; // Back to square one
        }, 2000);
    }
});
