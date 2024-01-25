function createStudent() {
    const studentId = document.getElementById('studentId').value;
    const studentName = document.getElementById('studentName').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    if (studentId.length === 6 &&
        studentName.trim() !== '' &&
        age >= 18 &&
        /^\d{10,11}$/.test(phone) &&
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {

        const studentInfo = `Thông tin sinh viên:
                            StudentId: ${studentId}
                            StudentName: ${studentName}
                            Age: ${age}
                            Phone: ${phone}
                            Email: ${email}`;

        document.getElementById('studentInfo').innerText = studentInfo;

        document.getElementById('studentForm').reset();
    } else {
      
        alert('Vui lòng kiểm tra lại dữ liệu nhập vào.');
    }
  }