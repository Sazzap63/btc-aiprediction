from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class PredictionResponse(BaseModel):
    probability_up: float
    prediction: str
    model_version: str

@app.get("/health")
def health():
    return {"status": "ok"}

@app.get("/predict", response_model=PredictionResponse)
def predict():
    # Fake pour l’instant, juste pour tester le flux
    return PredictionResponse(
        probability_up=0.63,
        prediction="UP",
        model_version="0.0.1"
    )
