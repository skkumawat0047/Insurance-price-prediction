function predict() {
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let bmi = document.getElementById("bmi").value;
    let children = document.getElementById("children").value;
    let smoker = document.getElementById("smoker").value;

    fetch("/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            age: parseInt(age),
            bmi: parseFloat(bmi),
            children: parseInt(children),
            gender: parseInt(gender),
            smoker: parseInt(smoker)
        })
    })
        .then(res => res.json())
        .then(data => {
            document.getElementById("predict").innerText =
                "Predicted Price: " + data.prediction;
        });
}