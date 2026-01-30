"use server"

interface QuoteFormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

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

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY

  if (!accessKey) {
    console.error("WEB3FORMS_ACCESS_KEY is not set")
    return {
      success: false,
      error: "Email service is not configured. Please contact us directly.",
      fallback: true,
      mailtoLink: generateMailtoLink(formData),
    }
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        from_name: "Majestic Painting Website",
        subject: `New Quote Request from ${name} - ${service || "General Inquiry"}`,
        name: name,
        email: email,
        phone: phone || "Not provided",
        service: service || "Not specified",
        message: message,
        replyto: email,
      }),
    })

    const result = await response.json()

    if (result.success) {
      return { success: true }
    } else {
      console.error("Web3Forms error:", result)
      return {
        success: false,
        error: result.message || "Failed to send message. Please try again.",
        fallback: true,
        mailtoLink: generateMailtoLink(formData),
      }
    }
  } catch (error) {
    console.error("Error sending quote request:", error)
    return {
      success: false,
      error: "Failed to send message. Please try again or use the email link below.",
      fallback: true,
      mailtoLink: generateMailtoLink(formData),
    }
  }
}

function generateMailtoLink(formData: QuoteFormData): string {
  const { name, email, phone, service, message } = formData
  const recipientEmail = "bhandariaawash1@gmail.com"
  const subject = encodeURIComponent(`Quote Request from ${name} - ${service || "General Inquiry"}`)
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nService: ${service || "Not specified"}\n\nMessage:\n${message}`
  )
  return `mailto:${recipientEmail}?subject=${subject}&body=${body}`
}

export async function getMailtoLink(formData: QuoteFormData) {
  return generateMailtoLink(formData)
}
