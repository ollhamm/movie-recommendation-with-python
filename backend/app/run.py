from flask import Flask, request, jsonify
from flask_cors import CORS
from joblib import load
import joblib
from models import recommend_movie


app = Flask(__name__)
CORS(app)  # Added CORS middleware

cosine_sim = joblib.load('models/cosine_similarity.joblib')

@app.route('/recommend', methods=['POST'])
def get_recommendation():
    data = request.get_json()
    recommended_movies = recommend_movie(data)
    print('recomended:', recommended_movies)
    return jsonify(recommended_movies)

if __name__ == '__main__':
    app.run(debug=True)