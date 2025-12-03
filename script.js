function calculateQSD() {
    let safeFixed = parseFloat(document.getElementById("safeFixed").value);
    let riskyFixed = parseFloat(document.getElementById("riskyFixed").value);
    let safeFloat = parseFloat(document.getElementById("safeFloat").value);
    let riskyFloat = parseFloat(document.getElementById("riskyFloat").value);

    let fixedDiff = riskyFixed - safeFixed;
    let floatDiff = riskyFloat - safeFloat;

    let qsd = fixedDiff - floatDiff;

    document.getElementById("result").innerHTML =
        "<h2>QSD = " + qsd.toFixed(2) + "%</h2>";
}
