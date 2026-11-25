/* ============================================================
   CLASSICOMM HOLDINGS — SITE SETTINGS
   ------------------------------------------------------------
   This is the ONLY file you need to edit to change the website.
   1. Open this file in any text editor (TextEdit in plain-text
      mode, VS Code, etc.)
   2. Change the text between the quotes  " "
   3. Save the file
   4. Refresh the website page in your browser (Cmd + R)

   Rules: keep the quotes " " and the commas , exactly as they are.
   Where is "Dubai" written? Search this file for it (Cmd + F):
   company.location, seo.title, seo.description, hero.eyebrow,
   hero.subtitle, about.paragraphs, footer.note. Change each one.

   To hide a section, set  show: false  for that section.
   ============================================================ */

window.SITE_CONFIG = {

  /* ---------- Company ---------- */
  company: {
    name: "Classicomm Holdings",
    legalName: "Classicomm Holdings",          // shown in the footer
    tagline: "Investing with Discipline. Building Lasting Value.",
    location: "Dubai, United Arab Emirates",
    email: "info@classicommholdings.com",
  },

  /* ---------- Browser tab title and Google description ---------- */
  seo: {
    title: "Classicomm Holdings | Investment Firm, Dubai",
    description: "Classicomm Holdings is a private investment firm based in Dubai, United Arab Emirates.",
  },

  /* ---------- Colours (change to restyle the whole site) ---------- */
  theme: {
    gold: "#c19a4a",         // decorative gold (lines, buttons)
    goldDark: "#8f6a1d",     // gold used for small text (darker = easier to read)
    goldLight: "#e6cf93",    // light gold
    background: "#fdfbf6",   // main page background (bright ivory)
    backgroundAlt: "#f5eedd",// alternate section background
    heading: "#14213d",      // headings, dark navy
    text: "#4b5268",         // body text
    dark: "#0f1a33",         // footer / dark button text
  },

  /* ---------- Top menu ---------- */
  menu: [
    { label: "About",     link: "#about" },
    { label: "What We Do", link: "#focus" },
    { label: "Approach",  link: "#approach" },
    { label: "Contact",   link: "#contact" },
  ],

  /* ---------- Hero (first screen) ---------- */
  hero: {
    eyebrow: "Dubai · United Arab Emirates",
    title: "Classicomm Holdings",
    subtitle: "A private investment firm based in Dubai, focused on patient capital, sound judgement and enduring partnerships.",
    buttonText: "Request Information",
    buttonLink: "#contact",
  },

  /* ---------- About ---------- */
  about: {
    show: true,
    heading: "About Us",
    paragraphs: [
      "Classicomm Holdings is a general investment firm headquartered in Dubai. We take a considered, long-term view of capital and look for opportunities where careful analysis and patience create lasting value.",
      "Our approach is rooted in integrity, transparency and a respect for the trust placed in us by our partners.",
    ],
  },

  /* ---------- What we do ---------- */
  focus: {
    show: true,
    heading: "What We Do",
    intro: "We invest across a range of sectors, guided by quality, resilience and long-term potential.",
    items: [
      { title: "Strategic Investments",  text: "Selective holdings in established and growing businesses with strong fundamentals." },
      { title: "Real Assets",            text: "Considered exposure to property and tangible assets that preserve and grow value." },
      { title: "Partnerships & Ventures", text: "Working alongside capable partners to build and support promising ventures." },
    ],
  },

  /* ---------- Approach / principles ---------- */
  approach: {
    show: true,
    heading: "Our Approach",
    items: [
      { title: "Integrity",   text: "We act with honesty and discretion in every relationship." },
      { title: "Patience",    text: "We invest for the long term and avoid short-term noise." },
      { title: "Diligence",   text: "Every decision rests on thorough research and clear thinking." },
    ],
  },

  /* ---------- Registration details (OPTIONAL) ----------
     Leave the list empty [] to hide this block.
     Example: { label: "Registration No.", value: "12345" }          */
  registration: {
    show: false,
    heading: "Company Details",
    rows: [
      // { label: "Legal Name", value: "Classicomm Holdings" },
      // { label: "Registered Office", value: "Your address here" },
    ],
  },

  /* ---------- Contact form ---------- */
  contact: {
    show: true,
    heading: "Get in Touch",
    intro: "If you would like to know more, please share a few details and we will respond personally.",
    maxWords: 2000,                       // maximum words allowed in Comments
    labels: {
      name: "Full Name",
      email: "Email Address",
      mobile: "Mobile Number",
      comments: "Comments",
      submit: "Send Request",
    },
    required: { name: true, email: true, mobile: true, comments: false },
    successMessage: "Thank you. Your request has been received and we will be in touch shortly.",
    errorMessage: "Sorry, something went wrong. Please try again, or write to us directly by email.",

    /* HOW THE FORM EMAIL IS SENT (see GUIDE.md, Step 2):
       Paste your Formspree address below, e.g.
       "https://formspree.io/f/abcdwxyz"
       Leave empty "" while testing: the form will then open the
       visitor's email app addressed to info@classicommholdings.com */
    formEndpoint: "https://formspree.io/f/moedygwy",
  },

  /* ---------- Footer ---------- */
  footer: {
    note: "Private investment firm · Dubai, UAE",
    showYear: true,
    /* Optional footer links. label = text shown, link = where it opens.
       Page section: "#contact"   Website: "https://example.com"   Email: "mailto:info@classicommholdings.com"
       Leave the list empty [] for no links. */
    links: [
      // { label: "Contact", link: "#contact" },
    ],
  },
};
