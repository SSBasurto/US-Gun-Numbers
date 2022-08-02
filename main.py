from flask import Flask, render_template      

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("main.html")
    
@app.route("/GUn_Stats")
def salvador():
    return "Blue_vs_Red"
    
if __name__ == "__main__":
    app.run(debug=True)
  We made two new changes