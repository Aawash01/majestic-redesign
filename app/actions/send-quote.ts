"use server"

interface QuoteFormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

<<<<<<< HEAD
function getMailtoLink(formData: QuoteFormData) {
  const subject = encodeURIComponent(`Quote Request - ${formData.service || "General Inquiry"}`)
  const body = encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "Not provided"}\nService: ${formData.service || "Not specified"}\n\nMessage:\n${formData.message}`
  )
  return `mailto:bhandariaawash1@gmail.com?subject=${subject}&body=${body}`
}

export async function sendQuoteRequest(formData: QuoteFormData) {
  const { name, email, phone, service, message } = formData

=======
export async function sendQuoteRequest(formData: QuoteFormData) {
  const { name, email, phone, service, message } = formData

  // Validate required fields
>>>>>>> ef90ecc5a81a1f3b3115713138e45af314eb8c34
  if (!name || !email || !message) {
    return { success: false, error: "Please fill in all required fields" }
  }

<<<<<<< HEAD
  const serviceId = process.env.EMAILJS_SERVICE_ID
  const templateId = process.env.EMAILJS_TEMPLATE_ID
  const publicKey = process.env.EMAILJS_PUBLIC_KEY

  if (!serviceId || !templateId || !publicKey) {
=======
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { success: false, error: "Please enter a valid email address" }
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY

  if (!accessKey) {
    console.error("WEB3FORMS_ACCESS_KEY is not set")
>>>>>>> ef90ecc5a81a1f3b3115713138e45af314eb8c34
    return {
      success: false,
      error: "Email service is not configured. Please contact us directly.",
      fallback: true,
<<<<<<< HEAD
      mailtoLink: getMailtoLink(formData),
=======
      mailtoLink: generateMailtoLink(formData),
>>>>>>> ef90ecc5a81a1f3b3115713138e45af314eb8c34
    }
  }

  try {
<<<<<<< HEAD
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
=======
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
>>>>>>> ef90ecc5a81a1f3b3115713138e45af314eb8c34
