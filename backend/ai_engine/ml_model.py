import pandas as pd
from sklearn.pipeline import Pipeline
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from joblib import dump, load

# Sample training function
def train_model():
    df = pd.read_csv("ai_engine/sample_job_dataset.csv")  
    X = df[["skills", "location", "role"]]
    y = df["label"]  

    # Combine text features
    X["combined"] = X["skills"] + " " + X["location"] + " " + X["role"]

    X_train, X_test, y_train, y_test = train_test_split(X["combined"], y, test_size=0.2)

    pipeline = Pipeline([
        ('tfidf', TfidfVectorizer()),
        ('clf', LogisticRegression())
    ])
    pipeline.fit(X_train, y_train)

    dump(pipeline, "ai_engine/job_match_model.joblib")
