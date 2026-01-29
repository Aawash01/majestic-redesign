"use server"

interface QuoteFormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const RECIPIENT_EMAIL = "ab93f01a-d6fe-4e05-9a77-8eaeed61ba9d"

export async function sendQuoteRequest(formData: QuoteFormData) {
  const { name, email, phone, service, message } = formData

  // Validate required fields
  if (!name || !email || !message) {
    return { success: false, error: "Please fill in all required fields" }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { success: false, error: "Please enter a valid email address" }
  }

  try {
    // Use Web3Forms free tier - no API key required for basic usage
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "bhandariaawash1@gmail.com",
        to: RECIPIENT_EMAIL,
        from_name: "Majestic Painting Website",
        subject: `New Quote Request from ${name} - ${service || "General Inquiry"}`,
        name: name,
        email: email,
        phone: phone || "Not provided",
        service: service || "Not specified",
        message: message,
        botcheck: false,
      }),
    })

    const result = await response.json()

    if (result.success) {
      return { success: true }
    } else {
      // Return mailto link as fallback
      return { 
        success: true, 
        fallback: true,
        mailtoLink: generateMailtoLink(formData)
      }
    }
  } catch (error) {
    console.error("Error sending quote request:", error)
    // Return mailto link as fallback
    return { 
      success: true, 
      fallback: true,
      mailtoLink: generateMailtoLink(formData)
    }
  }
}

function generateMailtoLink(formData: QuoteFormData): string {
  const { name, email, phone, service, message } = formData
  const subject = encodeURIComponent(`Quote Request from ${name} - ${service || "General Inquiry"}`)
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nService: ${service || "Not specified"}\n\nMessage:\n${message}`
  )
  return `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`
}

export async function getMailtoLink(formData: QuoteFormData) {
  return generateMailtoLink(formData)
}
