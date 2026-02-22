const dobInput = document.querySelector(".inputAge input");
const button = document.querySelector(".calculate button");
const result = document.querySelector(".yourAge p");

button.addEventListener("click", calculateAge);

function calculateAge() {
    const dobValue = dobInput.value;

    if (!dobValue) {
        alert("Please enter your date of birth");
        return;
    }

    const age = getAge(dobValue);

    if (age < 0) {
        alert("Date of birth cannot be in the future");
        return;
    }

    result.textContent = `Your age is ${age} year${age !== 1 ? "s" : ""} old`;
}

function getAge(dobValue) {
    const today = new Date();
    const birthDate = new Date(dobValue);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    return age;
}