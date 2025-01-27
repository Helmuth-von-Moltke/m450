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

A Mocking Framework was used where it made sense to simulate external dependencies and isolate components for testing.

### Where Mocking Was Used
- **Router Service**: Mocked the `Router` in the Observable (Admin) component tests to simulate navigation without actual route changes.
- **Behavior**: Verified that navigation methods were called with the correct arguments.
- **No unnecessary mocks**: Other components (e.g., Todo, Noting) didn’t require external dependencies, so mocking wasn’t applied unnecessarily.

### Summary
Mocking was applied meaningfully, focusing on areas where isolation was required to test behavior. No redundant or irrelevant mocks were introduced.
