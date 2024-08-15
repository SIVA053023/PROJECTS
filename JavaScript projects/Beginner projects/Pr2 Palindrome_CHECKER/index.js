
const input = document.getElementById('input');

let One = () => {
    const check = input.value; // Trim spaces and convert to lowercase
    const reverse = check.split('').reverse().join(''); // Split into characters, reverse, then join back into a string

    if (check === reverse) {
        alert('This is a palindrome');
    } else {
        alert('This is not a palindrome');
    }
};

    
