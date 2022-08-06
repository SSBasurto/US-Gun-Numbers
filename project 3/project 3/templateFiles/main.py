from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
import guns.project3

# Create an instance of Flask
app = Flask(__name__)

# Use PyMongo to establish Mongo connection
mongo = PyMongo(app, uri="mongodb://localhost:27017/guns.project3")


# Route to render index.html template using data from Mongo
@app.route("/")
def home():

    # Find one record of data from the mongo database
    destination_data = mongo.db.collection.find_one()

    # Return template and data
    return render_template("templates\dbrender.html", Rankings=guns.project3_data)


# Route that will trigger the scrape function
@app.route("/scrape")
def scrape():

    # Run the scrape function
    guns_data = guns.project3.scrape_info()

    # Update the Mongo database using update and upsert=True
    mongo.db.collection.update_one({}, {"$set": guns.project3}, upsert=True)

    # Redirect back to home page
    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True)


