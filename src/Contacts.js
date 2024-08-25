/**
 * Contacts component - Renders the Contacts page.
 *
 * @return {JSX.Element} - The Contacts component.
 */
import React from "react";
function Contacts() {
  return (
    <div>
      <h1>Contact Manager</h1>
      {/* Render the Contacts component inside the parent div. */}
      <Contacts />
    </div>
  );
}

export default Contacts;
