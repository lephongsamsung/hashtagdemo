// app/admin/dashboard/page.tsx

// This is a placeholder file.  Since there was no existing code,
// and the update only specified a text replacement, I'm creating
// a basic page that can be modified.

const DashboardPage = () => {
  // Initial text containing an address in Hanoi.
  let text = "This is the admin dashboard. Our office is located at 123 Hanoi Street, Hanoi."

  // Update any text containing an address in Hanoi to "3 Trần Quý Kiên, Thạnh Mỹ Lợi, Thủ Đức"
  text = text.replace(/.*Hanoi.*/, "3 Trần Quý Kiên, Thạnh Mỹ Lợi, Thủ Đức")

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>{text}</p>
    </div>
  )
}

export default DashboardPage
