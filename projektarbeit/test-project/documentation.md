## Wahl der Testfälle (Komponententests)

### Todo Component
- **Normal Cases**:
  - Adding a todo: Check if valid input adds an item.
  - Deleting a todo: Ensure items are removed correctly.
  - Rendering: Verify the list displays properly.

- **Edge Cases**:
  - Adding empty/whitespace input: Should not add anything.
  - Removing from an empty list: Should not crash.

### Noting Component
- **Normal Cases**:
  - Adding a note: Valid input adds to the list.
  - Deleting a note: Removes the correct item.

- **Edge Cases**:
  - Adding empty/whitespace input: Should not add.
  - Removing nonexistent notes: No crash.

### Observable (Admin) Component
- **Normal Cases**:
  - Filtering users: Only matching users shown.
  - Rendering: Filtered list displays correctly.
  - Viewing users: Navigates to correct user details.

- **Edge Cases**:
  - No users match filter: Should show empty list.
  - Extreme filters (0, 100): Still logical results.


## Einsatz Mocking Framework

A Mocking Framework was used where it made sense to simulate external dependencies.

### Where Mocking Was Used
- **Router Service**: Mocked the Router in the Observable (Admin) component tests to simulate navigation.
- **Behavior**: Verified that navigation methods were called with the correct arguments.
- **No unnecessary mocks**: Other components (e.g., Todo, Noting) didn’t require external dependencies, so mocking wasn’t applied.

## Automatisierung des Testings (Ausführung)

### CI/CD Pipeline Overview
- A CI/CD pipeline was set up using **GitHub Actions**.
- The pipeline triggers automatically on:
  - Push events to the `main` branch.
  - Pull Requests targeting the `main` branch.

### Pipeline Steps
1. Fetches the latest code from the repository.
2. Configures Node.js environment to run Angular tests.
3. Runs `npm install` to set up the project.
4. Executes `ng test` in headless mode to verify all test cases.
5. Builds the application in production mode.

### Execution
- Every commit or pull request triggers the pipeline.
- Tests are run automatically.

