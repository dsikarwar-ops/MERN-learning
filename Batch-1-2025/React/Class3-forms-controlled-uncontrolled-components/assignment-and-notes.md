# 📚 React Forms & Controlled Components - Notes and Assignment

---

## 📝 Notes: React Forms, Controlled & Uncontrolled Components

### 1. Controlled Components

* Input values are controlled by React state.
* Value comes from `useState`.
* Updates via `onChange`.
* ✅ Advantages: easy validation, conditional UI updates.
* ⚠️ Disadvantages: more boilerplate.

### 2. Uncontrolled Components

* Input manages its own state; React does not track it.
* Use `ref` to access values.
* ✅ Advantages: Less code for simple forms.
* ⚠️ Disadvantages: Harder to validate dynamically.

### 3. Forwarding Refs

* Pre React 19: `forwardRef` is needed to pass ref to child component.
* React 19+: refs can be passed directly.

### 4. Form State Management

#### a) Individual State

* Each input field has its own `useState`.

#### b) Single Object State

* All input fields stored in a single state object.
* Recommended for large forms.

### 5. Custom Controlled Input

* Can track value changes with callbacks before and after state updates.

### 6. Best Practices

* Use controlled components for most forms.
* Uncontrolled components sparingly.
* Use single object state for large forms.
* Validate inputs on change and submit.
* Reset form after submission.
* Use semantic HTML and proper input types.

---

## 🏋️ Assignment: React Form Handling

### Objective:

Build a registration form demonstrating controlled & uncontrolled inputs, single object state, validations, and custom input callbacks.

### Requirements:

1. Form fields: Name, Last Name, Email, Phone, Age, Password.
2. Controlled inputs:

   * Individual state
   * Single object state
3. Uncontrolled component for Age using `ref`.
4. Custom input with callbacks.
5. Submit:

   * Prevent default
   * Console log values
   * Reset form
6. Validation:

   * Name/Last Name: required, min 2 chars
   * Email: valid format
   * Phone: numeric, 10 digits
   * Password: min 6 chars
7. Optional:

   * Disable submit until valid
   * Show errors

### Bonus:

* Dynamic form fields
* Transform input values
* Local storage persistence

---

## ✅ Todo App Exercise (Form with Multiple Inputs & Cards)

**Objective:** Build a todo list where each todo is a **form with multiple fields** and renders as a **card**.

### Requirements:

1. **Fields for each todo:**

   * Title (text)
   * Description (textarea)
   * Priority (select: Low, Medium, High)
2. Add new todo via **form submission**.
3. Display todos as **cards** with the fields visible.
4. Allow **remove** functionality for each card.
5. Controlled components for all fields.
6. Optional: Add **edit** functionality.

### Tips:

* Use controlled components for the form inputs.
* Map over `todos` to render each card.
* Optional: Style `.card` with CSS for better visibility.
* Can add validation for empty title or description.

---

**💡 Key Points:**

* Controlled forms allow validation and state management.
* Uncontrolled forms are simpler for direct DOM access.
* Reusable form components help organize large apps.
* Todo app practices handling multiple inputs, dynamic rendering, and state updates.
