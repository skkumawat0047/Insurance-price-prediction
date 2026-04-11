from flask import Flask, render_template, request
import pickle

app = Flask(__name__)

model = pickle.load(open("insurance_model.pkl", "rb"))

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/predict', methods=['POST'])
def predict():
    age = int(request.form.get("age"))
    gender = int(request.form.get("gender"))
    bmi = float(request.form.get("bmi"))
    children = int(request.form.get("children"))
    smoker = int(request.form.get("smoker"))

    prediction = model.predict([[age, gender, bmi, children, smoker]])

    return render_template("index.html", result=round(prediction[0], 2))

if __name__ == "__main__":
    app.run(debug=True)