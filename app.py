from Flask import Flask, render_template      

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")
    
@app.route("/graphs")
def graphs():
    return "Gun Stats"
    
if __name__ == "__main__":
    app.run(debug=True)
  