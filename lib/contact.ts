// -----------------------------------------------------------------------------
// Central contact configuration for Project GAJ.
// Update these values in ONE place to change them across the whole site.
// -----------------------------------------------------------------------------

// WhatsApp number in international format, digits only (e.g. "919812345678").
// Currently sourced from the WHATSAPP_NUMBER environment variable.
// Replace the fallback string when a permanent number is available.
export const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER ?? "918595089080"

// Temporary email placeholder — change this single constant later.
export const CONTACT_EMAIL = "hello@projectgaj.in"

// Replace with the Project GAJ LinkedIn URL when available.
export const LINKEDIN_URL = "#"

// Pre-filled WhatsApp message.
export const WHATSAPP_MESSAGE =
  "Hi, I came across Project GAJ and would like to know more."

/**
 * Builds a wa.me deep link with a URL-encoded pre-filled message.
 * Strips any non-digit characters from the configured number.
 */
export function getWhatsAppUrl(): string {
  const digits = WHATSAPP_NUMBER.replace(/\D/g, "")
  return `https://wa.me/${digits}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
}
