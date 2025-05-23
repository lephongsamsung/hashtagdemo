"use client"

const SupportPage = () => {
  // This function replaces any Hanoi address with the updated address.
  const updateAddress = (text: string) => {
    // Regular expression to find any text containing "Hà Nội" (case-insensitive).
    const hanoiAddressRegex = /(.*Hà Nội.*)/gi
    return text.replace(hanoiAddressRegex, "3 Trần Quý Kiên, Thạnh Mỹ Lợi, Thủ Đức")
  }

  // Example usage:
  const originalText = "Our office in Hà Nội is located at 123 ABC Street, Hà Nội."
  const updatedText = updateAddress(originalText)

  return (
    <div>
      <h1>Customer Support</h1>
      <p>Welcome to the customer support page. If you need assistance, please contact us.</p>
      <div>
        <p>Original Text: {originalText}</p>
        <p>Updated Text: {updatedText}</p>
      </div>
      {/* Add more support information here */}
    </div>
  )
}

export default SupportPage
