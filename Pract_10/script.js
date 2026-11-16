function takeValue(event) {
    if (event) event.preventDefault();

    let studentData = {
        studentId: document.getElementById("stId").value,
        name: document.getElementById("name").value,
        marks: document.getElementById("marks").value,
        department: document.getElementById("department").value
    };

    let jsonString = JSON.stringify(studentData, null, 4);
    console.log("JSON Data:", jsonString);

    let blob = new Blob([jsonString], { type: "text/plain" });
    let url = URL.createObjectURL(blob);
    let a = document.createElement("a");
    a.href = url;
    a.download = "student_details.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

document.getElementById("btn").addEventListener("click", takeValue);