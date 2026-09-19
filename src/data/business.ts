export const businessContact = {
  whatsappNumber: "8801792637781",
  whatsappDisplay: "+880 1792-637781",
  whatsappName: "nazmunsakib",
  defaultMessage:
    "Hi SWAG.bd, I'm interested in custom merchandise. I'd like to know about pricing and customization options.",
};

export function whatsappLink(message: string): string {
  return `https://wa.me/${businessContact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function quoteMessage(product?: string): string {
  return product
    ? `Hi SWAG.bd, I'm interested in ${product}. I'd like to get a quotation.`
    : businessContact.defaultMessage;
}