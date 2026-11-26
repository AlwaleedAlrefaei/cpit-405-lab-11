<?php
// Task 1: Store the table in an associative array.
$students = [
    ['Name' => 'Mohammad', 'Total' => 4],
    ['Name' => 'Fahad', 'Total' => 3.5]
];

// Task 2: Encode the array as JSON.
header('Content-Type: application/json; charset=utf-8');
echo json_encode($students);
