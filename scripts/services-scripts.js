// Wellness service cards controls
const wellnessPrev = document.getElementById('wellness-prev');
const wellnessNext = document.getElementById('wellness-next');

wellnessPrev.onclick = function () {
    document.getElementById('wellness-row').scrollLeft -= 250;
};
wellnessNext.onclick = function () {
    document.getElementById('wellness-row').scrollLeft += 250;
};


// Diagnosis service cards controls
const diagnosisPrev = document.getElementById('diagnosis-prev');
const diagnosisNext = document.getElementById('diagnosis-next');

diagnosisPrev.onclick = function () {
    document.getElementById('diagnosis-row').scrollLeft -= 250;
};
diagnosisNext.onclick = function () {
    document.getElementById('diagnosis-row').scrollLeft += 250;
};


// Hospitality service cards controls
const hospitalityPrev = document.getElementById('hospitality-prev');
const hospitalityNext = document.getElementById('hospitality-next');

hospitalityPrev.onclick = function () {
    document.getElementById('hospitality-row').scrollLeft -= 250;
};
hospitalityNext.onclick = function () {
    document.getElementById('hospitality-row').scrollLeft += 250;
};
