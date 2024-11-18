document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form elements
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
  
    // Check if name, email, and both quiz answers are provided
    if (name === '' || email === '' || !q1 || !q2) {
      alert('Please fill out all fields and answer all questions!');
      return;
    }
  
    alert('Thank you for completing the quiz!');
  });
  