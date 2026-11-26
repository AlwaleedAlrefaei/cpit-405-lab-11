// Name: Alwaleed Alrefaei
// Student ID: 2345441
// CPIT-405 - Lab 11

// Task 3: Request PHP data using AJAX and log the JSON result.
document.getElementById('load').addEventListener('click', function () {
    const xhr = new XMLHttpRequest();
    const status = document.getElementById('status');
    const results = document.getElementById('results');
    xhr.open('GET', 'data.php', true);
    xhr.responseType = 'json';
    status.textContent = 'Loading...';

    xhr.onload = function () {
        if (xhr.status === 200 && Array.isArray(xhr.response)) {
            const students = xhr.response;
            console.log(students);
            console.table(students);
            results.replaceChildren();
            students.forEach(function (student) {
                const row = results.insertRow();
                row.insertCell().textContent = student.Name;
                row.insertCell().textContent = student.Total;
            });
            status.textContent = 'Data retrieved successfully. Check the console.';
        } else {
            status.textContent = 'Failed to retrieve data.';
            console.error('Request failed:', xhr.status);
        }
    };
    xhr.onerror = function () {
        status.textContent = 'Network error.';
        console.error('Network error.');
    };
    xhr.send();
});
