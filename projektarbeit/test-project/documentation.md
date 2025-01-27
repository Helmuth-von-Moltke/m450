## Wahl der Testfälle (Komponententests)

### Todo Component
- **Normal Cases**:
  - Adding a todo: Make sure a valid item gets added to the list.
  - Deleting a todo: Check that items are removed properly.
  - Rendering: Confirm the todo list displays as expected.

- **Edge Cases**:
  - Adding empty or blank input: Shouldn’t add anything to the list.
  - Removing from an empty list: Shouldn’t cause any errors or crashes.

### Noting Component
- **Normal Cases**:
  - Adding a note: Ensure valid input adds the note correctly.
  - Deleting a note: Confirm it removes the right item.

- **Edge Cases**:
  - Adding empty or blank input: Shouldn’t allow anything to be added.
  - Removing a note that doesn’t exist: No errors or unexpected issues.

### Observable (Admin) Component
- **Normal Cases**:
  - Filtering users: Check that only users matching the filter are shown.
  - Rendering: Make sure the filtered list is displayed properly.
  - Viewing users: Verify navigation works when viewing user details.

- **Edge Cases**:
  - No users match the filter: Should show an empty list, not crash.
  - Extreme filters (e.g., 0 or 100): Should still behave logically.

---

## Einsatz Mocking Framework

Mocking was used where it made sense, avoiding anything unnecessary.

### Where Mocking Was Used
- **Router Service**: The Router was mocked in the Observable component to simulate navigation.
- **Behavior**: Checked that navigation methods were called with the correct arguments.
- **No unnecessary mocks**: Todo and Noting components didn’t need mocks, so none were added.

---

## Automatisierung des Testings (Ausführung)

### CI/CD Pipeline Overview
- A CI/CD pipeline was set up using **GitHub Actions**.
- The pipeline runs automatically on:
  - Pushes to the `main` branch.
  - Pull Requests targeting the `main` branch.

### Pipeline Steps
1. Fetches the latest code from the repository.
2. Sets up Node.js to run Angular tests.
3. Runs `npm install` to install project dependencies.
4. Executes `ng test` in headless mode to check all test cases.
5. Builds the app in production mode.

### Execution
- The pipeline is triggered by every commit or pull request.
- Tests run automatically to ensure the application is working properly.

---

## Automatisierung des Testings (Dokumentation)

Running `ng test` generates test logs and a report from Karma:

![karma documentation](karmadocumentation.jpg "Karma documentation")

---

## Reflexion über Code Reviews und TDD

### Code Reviews
I worked alone, so code reviews weren’t possible, but here’s how they could’ve helped:
- **Catch Mistakes**: A fresh set of eyes might spot issues I didn’t notice.
- **Improve Code Quality**: Suggestions could make the code cleaner and easier to maintain.
- **Knowledge Sharing**: In a team, reviews would help everyone understand the codebase better.
- **Consistency**: Reviews enforce standards, so the code stays consistent across the project.

### Test-Driven Development (TDD)
TDD works well in certain situations:
- **When It’s Useful**:
  - Important features: Writing tests first ensures critical functionality works properly.
  - Complex logic: Helps plan how the code should behave before writing it.
  - Incremental changes: Makes sure new features don’t break existing functionality.
- **When It’s Less Useful**:
  - Simple projects: Writing tests first can be overkill for basic functionality.
  - Prototypes: Slows things down when speed matters more than robustness.

### Lessons Learned
TDD was helpful for thinking through features like the Todo and Noting components and making sure edge cases were covered. Even without code reviews, it’s clear they’d improve the overall quality and catch issues faster.


