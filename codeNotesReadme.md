## Weekly Assignment Code Notes

### Overview

The application consists of two main components: `ContactList` and `ContactRow`.<br>
`ContactList` fetches and displays a list of contacts, allowing users to select one to see more details.<br>
`ContactRow` is responsible for rendering individual contact entries within the list.

### ContactRow Component

- **Purpose**: Renders a single row in the contacts table.
- **Props**:
  - `contact`: An object representing a contact, including properties like `name`, `email`, and `phone`.
  - `onClick`: A callback function that is triggered when the row is clicked. It receives the `contact.id` as an argument.
- **Functionality**:
  - The component returns a `<tr>` element that represents a table row. Each cell (`<td>`) within the row displays different pieces of information about the contact: name, email, and phone.
  - The `onClick` prop is used to attach a click event listener to the row. When the row is clicked, it triggers the `onClick` function passed down from the parent component (`ContactList`), sending the `contact.id` as an argument. This mechanism allows the `ContactList` component to update its state with the selected contact's ID.

### Integration with ContactList

- In the `ContactList` component, `ContactRow` is used within the `.map()` function to iterate over the `contacts` array and render a row for each contact.
- The `key` prop is assigned the unique `contact.id` to help React identify which items have changed, are added, or are removed.
- The `onClick` prop of `ContactRow` is connected to the `handleSelectContact` function in `ContactList`, enabling the selection of a contact and displaying its details.

### Complete Workflow

1. **Data Fetching**: On mount, `ContactList` fetches contact data from an external API and stores it in the `contacts` state.
2. **Rendering Contacts**: `ContactList` maps over the `contacts` array to create a `ContactRow` for each contact, passing the necessary props.
3. **User Interaction**: When a user clicks on a `ContactRow`, the `onClick` handler updates the `selectedContactId` state in `ContactList`, triggering a re-render.
4. **Displaying Selected Contact Details**: Based on the `selectedContactId`, `ContactList` finds and displays the detailed information of the selected contact below the table.

This setup demonstrates a typical pattern in React applications where child components receive data and callbacks as props from their parent components, facilitating communication between components and managing application state effectively.
