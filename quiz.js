// quiz.js
// Handles quiz grading and displaying results

document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const answers = {
        q1: 'positive',
        q2: 'undefined',
        q3: 'y=-2x+5',
        q4: '3',
        q5: 'yes'
    };
    const userAnswer1 = document.querySelector('input[name="q1"]:checked');
    const userAnswer2 = document.querySelector('input[name="q2"]:checked');
    const userAnswer3 = document.querySelector('input[name="q3"]:checked');
    const userAnswer4 = document.querySelector('input[name="q4"]:checked');
    const userAnswer5 = document.querySelector('input[name="q5"]:checked');
    const resultsDiv = document.getElementById('results');
    let correct = 0;
    let total = 5;
    resultsDiv.innerHTML = '';

    // Grade question 1
    if (userAnswer1 && userAnswer1.value === answers.q1) {
        resultsDiv.innerHTML += '<p class="correct">1. Correct! The slope is positive.</p>';
        correct++;
    } else {
        resultsDiv.innerHTML += '<p class="incorrect">1. Incorrect. The correct answer is Positive.</p>';
    }

    // Grade question 2
    if (userAnswer2 && userAnswer2.value === answers.q2) {
        resultsDiv.innerHTML += '<p class="correct">2. Correct! The slope is undefined.</p>';
        correct++;
    } else {
        resultsDiv.innerHTML += '<p class="incorrect">2. Incorrect. The correct answer is Undefined.</p>';
    }

    // Grade question 3
    if (userAnswer3 && userAnswer3.value === answers.q3) {
        resultsDiv.innerHTML += '<p class="correct">3. Correct! The equation is y = -2x + 5.</p>';
        correct++;
    } else {
        resultsDiv.innerHTML += '<p class="incorrect">3. Incorrect. The correct answer is y = -2x + 5.</p>';
    }

    // Grade question 4
    if (userAnswer4 && userAnswer4.value === answers.q4) {
        resultsDiv.innerHTML += '<p class="correct">4. Correct! The slope is 3.</p>';
        correct++;
    } else {
        resultsDiv.innerHTML += '<p class="incorrect">4. Incorrect. The correct answer is 3.</p>';
    }

    // Grade question 5
    if (userAnswer5 && userAnswer5.value === answers.q5) {
        resultsDiv.innerHTML += '<p class="correct">5. Correct! (2, 7) is on the line.</p>';
        correct++;
    } else {
        resultsDiv.innerHTML += '<p class="incorrect">5. Incorrect. The correct answer is Yes.</p>';
    }

    resultsDiv.innerHTML = `<div style=\"font-size:2em;font-weight:bold;margin-bottom:20px;\">Score: ${correct} / ${total}</div>` + resultsDiv.innerHTML;

    // Show the solution for all questions
    var sol1 = document.getElementById('solution1');
    if (sol1) sol1.style.display = 'block';
    var sol2 = document.getElementById('solution2');
    if (sol2) sol2.style.display = 'block';
    var sol3 = document.getElementById('solution3');
    if (sol3) sol3.style.display = 'block';
    var sol4 = document.getElementById('solution4');
    if (sol4) sol4.style.display = 'block';
    var sol5 = document.getElementById('solution5');
    if (sol5) sol5.style.display = 'block';
});

// Plot the lines for all questions using Plotly
window.addEventListener('DOMContentLoaded', function() {
    // Common axis limits and color
    const axisLimits = {
        x: [-10, 10],
        y: [-15, 35]
    };
    const lineColor = 'blue';

    // (all plotting code above is correct and should only appear once)

    // Question 1: y = 2x + 10
    const x1 = axisLimits.x;
    const y1 = x1.map(xi => 2 * xi + 10);
    const trace1 = {
        x: x1,
        y: y1,
        mode: 'lines',
        type: 'scatter',
        line: {color: lineColor}
    };
    const layout1 = {
        xaxis: {title: 'x', range: axisLimits.x},
        yaxis: {title: 'y', range: axisLimits.y},
        showlegend: false,
        margin: { t: 10 }
    };
    Plotly.newPlot('plot1', [trace1], layout1, {displayModeBar: false});

    // Question 2: x = 5 (vertical line)
    const y2 = [0, axisLimits.y[1]];
    const x2 = [5, 5];
    const trace2 = {
        x: x2,
        y: y2,
        mode: 'lines',
        type: 'scatter',
        line: {color: lineColor}
    };
    const layout2 = {
        xaxis: {title: 'x', range: axisLimits.x},
        yaxis: {title: 'y', range: axisLimits.y},
        showlegend: false,
        margin: { t: 10 }
    };
    Plotly.newPlot('plot2', [trace2], layout2, {displayModeBar: false});

    // Question 3: y = -2x + 5, passes through (1,3)
    const x3 = axisLimits.x;
    const y3 = x3.map(xi => -2 * xi + 5);
    const trace3 = {
        x: x3,
        y: y3,
        mode: 'lines',
        type: 'scatter',
        line: {color: lineColor}
    };
    const layout3 = {
        xaxis: {title: 'x', range: axisLimits.x},
        yaxis: {title: 'y', range: axisLimits.y},
        showlegend: false,
        margin: { t: 10 }
    };
    Plotly.newPlot('plot3', [trace3], layout3, {displayModeBar: false});

    // Question 4: line through (0,0) and (2,6), slope 3
    const x4 = [0, 2];
    const y4 = [0, 6];
    const trace4 = {
        x: x4,
        y: y4,
        mode: 'lines',
        type: 'scatter',
        line: {color: lineColor}
    };
    const layout4 = {
        xaxis: {title: 'x', range: axisLimits.x},
        yaxis: {title: 'y', range: axisLimits.y},
        showlegend: false,
        margin: { t: 10 }
    };
    Plotly.newPlot('plot4', [trace4], layout4, {displayModeBar: false});
    // Question 5: y = 2x + 3 (no point shown)
    const x5 = axisLimits.x;
    const y5 = x5.map(xi => 2 * xi + 3);
    const trace5 = {
        x: x5,
        y: y5,
        mode: 'lines',
        type: 'scatter',
        line: {color: lineColor},
        name: 'Line'
    };
    const layout5 = {
        xaxis: {title: 'x', range: axisLimits.x},
        yaxis: {title: 'y', range: axisLimits.y},
        showlegend: false,
        margin: { t: 10 }
    };
    Plotly.newPlot('plot5', [trace5], layout5, {displayModeBar: false});
});
