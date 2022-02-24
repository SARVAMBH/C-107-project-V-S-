function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    Classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/sLfCzjdCd/model.jsonks',modelReady);
}

function modelReady()
{
    Classifier.classify(gotResults);
}