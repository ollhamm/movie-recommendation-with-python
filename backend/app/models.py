import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.decomposition import TruncatedSVD
from sklearn.metrics.pairwise import cosine_similarity
import re
import string
from joblib import dump, load

# Load dataset
film_data = pd.read_csv('data/filmtv.csv')

sample_size = 3000
film_data = film_data.sample(n=sample_size, random_state=42)

film_data['description'] = film_data['description'].fillna('')

# Fungsi untuk membersihkan teks
def clean_text(text):
    text = re.sub(r'\[.*?\]', '', str(text))  # Menghapus tanda kurung siku dan konten di dalamnya
    text = re.sub(r'[%s]' % re.escape(string.punctuation), '', text)  # Menghapus tanda baca
    text = re.sub(r'\w*\d\w*', '', text)  # Menghapus angka dan karakter khusus
    text = re.sub(r'\n', '', text)  # Menghapus karakter newline
    text = text.lower()  # lowercase
    return text

film_data['clean_description'] = film_data['description'].apply(clean_text)

tfidf_vectorizer = TfidfVectorizer(stop_words='english')

tfidf_matrix = tfidf_vectorizer.fit_transform(film_data['clean_description'])

svd = TruncatedSVD(n_components=100)
tfidf_matrix_reduced = svd.fit_transform(tfidf_matrix)

cosine_sim = cosine_similarity(tfidf_matrix_reduced, tfidf_matrix_reduced)

# Simpan model yang telah dilatih
dump(cosine_sim, 'models/cosine_similarity.joblib')

def recommend_movie(input_data):
    filtered_data = film_data.copy()
    
    is_criteria_given = any(input_data.values())
    
    if not is_criteria_given:
        return "No search criteria provided."
    
    if input_data.get('genre'):  
        filtered_data = filtered_data[filtered_data['genre'].str.contains(input_data['genre'], na=False, case=False)]
    if input_data.get('year'):
        try:
            year = int(input_data['year'])
            if year <= 0:
                return "Invalid year. Please provide a positive value."
            filtered_data = filtered_data[filtered_data['year'] == year]
        except ValueError:
            return "Invalid year format. Please provide a valid number for year."
    if input_data.get('country'):
        filtered_data = filtered_data[filtered_data['country'].str.contains(input_data['country'], na=False, case=False)]

    if filtered_data.empty:
        return "No movies found matching the search criteria."

    tfidf_matrix_filtered = tfidf_vectorizer.transform(filtered_data['clean_description'])
    tfidf_matrix_reduced_filtered = svd.transform(tfidf_matrix_filtered)
    cosine_sim_filtered = cosine_similarity(tfidf_matrix_reduced_filtered, tfidf_matrix_reduced_filtered)

    indices_filtered = filtered_data.index

    idx_filtered = 0  

    sim_scores_filtered = list(enumerate(cosine_sim_filtered[idx_filtered]))

    sim_scores_filtered = sorted(sim_scores_filtered, key=lambda x: x[1], reverse=True)

    sim_scores_filtered = sim_scores_filtered[1:11]

    movie_indices_filtered = [i[0] for i in sim_scores_filtered]

    return filtered_data.iloc[movie_indices_filtered][['title']].to_dict(orient='records')
