"use server"

interface QuoteFormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

function getMailtoLink(formData: QuoteFormData) {
  const subject = encodeURIComponent(`Quote Request - ${formData.service || "General Inquiry"}`)
  const body = encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "Not provided"}\nService: ${formData.service || "Not specified"}\n\nMessage:\n${formData.message}`
  )
  return `mailto:bhandariaawash1@gmail.com?subject=${subject}&body=${body}`
}

export async function sendQuoteRequest(formData: QuoteFormData) {
  const { name, email, phone, service, message } = formData

  if (!name || !email || !message) {
    return { success: false, error: "Please fill in all required fields" }
  }

  const serviceId = process.env.EMAILJS_SERVICE_ID
  const templateId = process.env.EMAILJS_TEMPLATE_ID
  const publicKey = process.env.EMAILJS_PUBLIC_KEY

  if (!serviceId || !templateId || !publicKey) {
    return {
      success: false,
      error: "Email service is not configured. Please contact us directly.",
      fallback: true,
      mailtoLink: getMailtoLink(formData),
    }
  }

  try {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          from_name: name,
          from_email: email,
          phone: phone || "Not provided",
          service: service || "Not specified",
          message: message,
          to_email: "bhandariaawash1@gmail.com",
        },
      }),
    })

    if (response.ok) {
      return { success: true }
    } else {
      return {
        success: false,
        error: "Failed to send message. Please try again.",
        fallback: true,
        mailtoLink: getMailtoLink(formData),
      }
    }
  } catch (error) {
    return {
      success: false,
      error: "Failed to send message. Please try again.",
      fallback: true,
      mailtoLink: getMailtoLink(formData),
    }
  }
}