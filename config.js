/* ============================================================
   CLASSICOMM HOLDINGS LIMITED — SITE SETTINGS
   ------------------------------------------------------------
   This is the ONLY file you need to edit to change the website.
   1. Open this file in TextEdit (Format > Make Plain Text) or VS Code
   2. Change the text between the quotes  " "
   3. Save the file
   4. Refresh the page (Cmd + R) to preview, then publish (see GUIDE.md)

   Rules: keep the quotes " " and the commas , exactly as they are.
   To hide a section, set  show: false  for that section.
   ============================================================ */

window.SITE_CONFIG = {

  /* ---------- Company (from the commercial licence) ---------- */
  company: {
    name: "Classicomm Holdings",
    legalName: "Classicomm Holdings Limited",
    tagline: "Holding ownership of equity and non-equity assets.",
    location: "Abu Dhabi Global Market, United Arab Emirates",
    email: "info@classicommholdings.com",
  },

  /* ---------- Browser tab title and Google description ---------- */
  seo: {
    title: "Classicomm Holdings Limited | Abu Dhabi Global Market",
    description: "Classicomm Holdings Limited is a private company limited by shares incorporated in the Abu Dhabi Global Market (ADGM), United Arab Emirates.",
  },

  /* ---------- Colours ---------- */
  theme: {
    gold: "#c19a4a",
    goldDark: "#8f6a1d",
    goldLight: "#e6cf93",
    background: "#fdfbf6",
    backgroundAlt: "#f5eedd",
    heading: "#14213d",
    text: "#4b5268",
    dark: "#0f1a33",
  },

  /* ---------- Background pictures ----------
     Replace the files inside the "images" folder with your own photos
     (use the same file names), or change the paths below. */
  images: {
    hero: "images/hero.svg",         // skyline behind the first screen
    facade: "images/facade.svg",     // glass-panel pattern behind the Contact section
  },

  /* ---------- Top menu ---------- */
  menu: [
    { label: "About",     link: "#about" },
    { label: "Activities", link: "#focus" },
    { label: "Company",   link: "#registration" },
    { label: "Contact",   link: "#contact" },
  ],

  /* ---------- Hero (first screen) ---------- */
  hero: {
    eyebrow: "Abu Dhabi Global Market · United Arab Emirates",
    title: "Classicomm Holdings",
    subtitle: "A private company limited by shares, incorporated in the Abu Dhabi Global Market to hold equity and non-equity assets.",
    buttonText: "Contact Us",
    buttonLink: "#contact",
  },

  /* ---------- About ---------- */
  about: {
    show: true,
    heading: "About Us",
    paragraphs: [
      "Classicomm Holdings Limited is a private company limited by shares, incorporated in the Abu Dhabi Global Market (ADGM) in the United Arab Emirates.",
      "The company is licensed as a special purpose vehicle to hold ownership of equity and non-equity assets, and may incorporate wholly or partially owned subsidiaries outside ADGM.",
    ],
  },

  /* ---------- Licensed activities ---------- */
  focus: {
    show: true,
    heading: "Licensed Activities",
    intro: "The activities permitted under the company's commercial licence.",
    items: [
      { title: "Equity Ownership",   text: "Holding ownership of shares and other equity interests." },
      { title: "Non-Equity Assets",  text: "Holding ownership of assets other than equity interests." },
      { title: "Subsidiaries",       text: "Incorporating wholly or partially owned subsidiaries outside ADGM." },
    ],
  },

  /* ---------- Approach (hidden for a holding company) ---------- */
  approach: {
    show: false,
    heading: "Our Approach",
    items: [],
  },

  /* ---------- Company details (public registration information) ---------- */
  registration: {
    show: true,
    heading: "Company Details",
    rows: [
      { label: "Legal Name",         value: "Classicomm Holdings Limited" },
      { label: "Legal Form",         value: "Private Company Limited by Shares" },
      { label: "Registration No.",   value: "41428" },
      { label: "Jurisdiction",       value: "Abu Dhabi Global Market (ADGM), United Arab Emirates" },
      { label: "Registered Office",  value: "Cloud Desk D08, 11th Floor, Al Sarab Tower, ADGM Square, Al Maryah Island, Abu Dhabi, United Arab Emirates" },
      { label: "Business Activity",  value: "Special Purpose Vehicle holding ownership of equity and non-equity assets" },
      { label: "Incorporated",       value: "16 November 2026" },
    ],
  },

  /* ---------- Contact form ---------- */
  contact: {
    show: true,
    heading: "Contact",
    intro: "For general enquiries, please share a few details and we will respond.",
    maxWords: 2000,
    labels: {
      name: "Full Name",
      email: "Email Address",
      mobile: "Mobile Number",
      comments: "Comments",
      submit: "Send Enquiry",
    },
    required: { name: true, email: true, mobile: true, comments: false },
    successMessage: "Thank you. Your enquiry has been received and we will be in touch shortly.",
    errorMessage: "Sorry, something went wrong. Please try again, or write to us directly by email.",
    formEndpoint: "https://formspree.io/f/moedygwy",
  },

  /* ---------- Footer ---------- */
  footer: {
    note: "ADGM Registration No. 41428",
    showYear: true,
    /* Small print shown at the bottom. Have your legal adviser review this wording. */
    disclaimer: "This website is provided for general information only. It does not constitute an offer, invitation or solicitation of any kind, or financial, investment or legal advice.",
    links: [
      { label: "ADGM Registration Authority", link: "https://www.registration.adgm.com" },
    ],
  },
};
