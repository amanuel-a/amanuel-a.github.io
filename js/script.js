document.addEventListener("DOMContentLoaded", function () {
    // Show the first page
    document.getElementById("firstPage").style.display = "block";

    // Set a timeout to hide the first page and show the second page after 10 seconds
    setTimeout(function () {
        document.getElementById("firstPage").style.display = "none";
        document.getElementById("secondPage").style.display = "block";
    }, 7000);
});
