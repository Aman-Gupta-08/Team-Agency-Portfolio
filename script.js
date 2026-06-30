// ==========================================================================
// 5. CONTACT FORM VALIDATION
// ==========================================================================

// Display validation error label
function displayInputError(inputId, inputElement, errorMessage) {
  const errorSpan = document.getElementById(inputId);
  if (!errorSpan) return;
  
  errorSpan.textContent = errorMessage;
  errorSpan.classList.add("visible");
  inputElement.classList.add("invalid-input");
  inputElement.classList.remove("valid-input");
}

// Remove validation error label
function removeInputError(inputId, inputElement) {
  const errorSpan = document.getElementById(inputId);
  if (!errorSpan) return;

  errorSpan.textContent = "";
  errorSpan.classList.remove("visible");
  inputElement.classList.remove("invalid-input");
  inputElement.classList.add("valid-input");
}

// Setup form validation listeners
function setupContactForm() {
  const form = document.getElementById("contact-form");
  const successModal = document.getElementById("success-modal");
  const closeModalBtn = document.getElementById("close-modal-btn");

  if (!form) return;

  // Retrieve input elements references
  const nameEl = document.getElementById("form-name");
  const emailEl = document.getElementById("form-email");
  const subjectEl = document.getElementById("form-subject");
  const messageEl = document.getElementById("form-message");

  // Helper validation logic function
  const validateFormFields = () => {
    let isValid = true;

    // Validate Name (Required)
    if (nameEl.value.trim() === "") {
      displayInputError("name-error", nameEl, "Full Name is required.");
      isValid = false;
    } else {
      removeInputError("name-error", nameEl);
    }

    // Validate Email Address (Required + Format match regex pattern)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailEl.value.trim() === "") {
      displayInputError("email-error", emailEl, "Email Address is required.");
      isValid = false;
    } else if (!emailPattern.test(emailEl.value.trim())) {
      displayInputError("email-error", emailEl, "Please enter a valid email address.");
      isValid = false;
    } else {
      removeInputError("email-error", emailEl);
    }

    // Validate Subject (Required)
    if (subjectEl.value.trim() === "") {
      displayInputError("subject-error", subjectEl, "Subject is required.");
      isValid = false;
    } else {
      removeInputError("subject-error", subjectEl);
    }

    // Validate Message (Min 20 characters length)
    const msgLength = messageEl.value.trim().length;
    if (messageEl.value.trim() === "") {
      displayInputError("message-error", messageEl, "Message is required.");
      isValid = false;
    } else if (msgLength < 20) {
      displayInputError("message-error", messageEl, `Message is too short. Min 20 characters (Current: ${msgLength}).`);
      isValid = false;
    } else {
      removeInputError("message-error", messageEl);
    }

    return isValid;
  };

  // Dynamic feedback: validate single inputs on blur (unfocus)
  nameEl.addEventListener("blur", () => {
    if (nameEl.value.trim() === "") displayInputError("name-error", nameEl, "Full Name is required.");
    else removeInputError("name-error", nameEl);
  });

  emailEl.addEventListener("blur", () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailEl.value.trim() === "") displayInputError("email-error", emailEl, "Email Address is required.");
    else if (!emailPattern.test(emailEl.value.trim())) displayInputError("email-error", emailEl, "Please enter a valid email.");
    else removeInputError("email-error", emailEl);
  });

  subjectEl.addEventListener("blur", () => {
    if (subjectEl.value.trim() === "") displayInputError("subject-error", subjectEl, "Subject is required.");
    else removeInputError("subject-error", subjectEl);
  });

  messageEl.addEventListener("blur", () => {
    if (messageEl.value.trim() === "") displayInputError("message-error", messageEl, "Message is required.");
    else if (messageEl.value.trim().length < 20) displayInputError("message-error", messageEl, "Message must be 20+ characters.");
    else removeInputError("message-error", messageEl);
  });

  // Handle form submit button press
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Stop page reload

    const isAllValid = validateFormFields();
    if (!isAllValid) return; // Prevent submission if forms have invalid values

    // Simulate sending message with a loader spinning feedback
    const submitBtn = document.getElementById("submit-btn");
    submitBtn.classList.add("submitting");
    submitBtn.disabled = true;

    setTimeout(() => {
      // Complete mock sending
      submitBtn.classList.remove("submitting");
      submitBtn.disabled = false;

      // Reset form variables and success popup modal display
      form.reset();
      
      // Remove green check highlights
      nameEl.classList.remove("valid-input");
      emailEl.classList.remove("valid-input");
      subjectEl.classList.remove("valid-input");
      messageEl.classList.remove("valid-input");

      // Show success modal popup
      successModal.classList.add("open");
      successModal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden"; // freeze page scroll
    }, 1500);
  });

  // Success Modal close handler triggers
  const closeModal = () => {
    successModal.classList.remove("open");
    successModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
  successModal.addEventListener("click", (e) => {
    if (e.target === successModal) closeModal();
  });
}
