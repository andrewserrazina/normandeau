import { defineConfig } from "tinacms";

// Cloudflare Pages exposes the branch as CF_PAGES_BRANCH; other hosts vary.
const branch =
  process.env.TINA_BRANCH ||
  process.env.CF_PAGES_BRANCH ||
  process.env.HEAD ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  "main";

const ICON_OPTIONS = [
  "PenTool",
  "Type",
  "PlusSquare",
  "Sparkles",
  "Hammer",
  "Wrench",
];

const GALLERY_CATEGORY_OPTIONS = [
  "Upright",
  "Companion",
  "Flat",
  "Slant",
  "Custom",
  "Lettering",
  "Restoration",
];

/**
 * TinaCMS schema. Every collection here maps to a JSON file under
 * content/ that the site's src/data/*.ts files import directly at
 * build time — see README.md ("Editing content with TinaCMS").
 */
export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      {
        name: "siteSettings",
        label: "Site Settings",
        path: "content",
        format: "json",
        match: { include: "site-settings" },
        ui: {
          global: true,
          allowedActions: { create: false, delete: false },
        },
        fields: [
          { type: "string", name: "name", label: "Business Name", required: true },
          { type: "string", name: "tagline", label: "Tagline" },
          {
            type: "string",
            name: "description",
            label: "Site Description",
            ui: { component: "textarea" },
          },
          { type: "number", name: "familyOwnedSince", label: "Family Owned Since (year)" },
          {
            type: "string",
            name: "guarantee",
            label: "Guarantee Statement",
            ui: { component: "textarea" },
          },
          {
            type: "image",
            name: "heroImage",
            label: "Homepage Hero Photo",
          },
          { type: "string", name: "heroImageAlt", label: "Homepage Hero Photo Description (for accessibility)" },
          {
            type: "object",
            name: "contact",
            label: "Contact Information",
            fields: [
              { type: "string", name: "phoneDisplay", label: "Phone (display)" },
              { type: "string", name: "phoneHref", label: "Phone (tel: link, e.g. tel:+14135551234)" },
              { type: "string", name: "phoneAltDisplay", label: "Second Phone (display)" },
              { type: "string", name: "phoneAltHref", label: "Second Phone (tel: link)" },
              { type: "string", name: "email", label: "Email" },
              {
                type: "object",
                name: "address",
                label: "Address",
                fields: [
                  { type: "string", name: "line1", label: "Street Address" },
                  { type: "string", name: "line2", label: "Address Line 2" },
                  { type: "string", name: "city", label: "City" },
                  { type: "string", name: "state", label: "State (abbreviation)" },
                  { type: "string", name: "stateFull", label: "State (full name)" },
                  { type: "string", name: "zip", label: "ZIP Code" },
                  { type: "string", name: "country", label: "Country" },
                ],
              },
              {
                type: "object",
                name: "hours",
                label: "Business Hours",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.days }) },
                fields: [
                  { type: "string", name: "days", label: "Day(s)" },
                  { type: "string", name: "hours", label: "Hours" },
                ],
              },
              {
                type: "string",
                name: "appointmentNote",
                label: "Appointment Policy Note",
                ui: { component: "textarea" },
              },
            ],
          },
          {
            type: "object",
            name: "social",
            label: "Social Media Links",
            fields: [
              { type: "string", name: "facebook", label: "Facebook URL" },
              { type: "string", name: "instagram", label: "Instagram URL" },
            ],
          },
          {
            type: "object",
            name: "geo",
            label: "Map Coordinates",
            fields: [
              { type: "number", name: "latitude", label: "Latitude" },
              { type: "number", name: "longitude", label: "Longitude" },
            ],
          },
        ],
      },
      {
        name: "servicesFile",
        label: "Services",
        path: "content",
        format: "json",
        match: { include: "services" },
        ui: {
          global: true,
          allowedActions: { create: false, delete: false },
        },
        fields: [
          {
            type: "object",
            name: "services",
            label: "Services",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title }) },
            fields: [
              { type: "string", name: "slug", label: "Slug (used in the URL)", required: true },
              { type: "string", name: "title", label: "Title", required: true },
              { type: "string", name: "icon", label: "Icon", options: ICON_OPTIONS },
              {
                type: "string",
                name: "shortDescription",
                label: "Short Description (cards & previews)",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "heroDescription",
                label: "Full Description (service page hero)",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "whoItsFor",
                label: "Who It's For",
                ui: { component: "textarea" },
              },
              { type: "string", name: "process", label: "Process Steps", list: true },
              { type: "string", name: "considerations", label: "Considerations", list: true },
            ],
          },
        ],
      },
      {
        name: "memorialCategoriesFile",
        label: "Memorial Categories",
        path: "content",
        format: "json",
        match: { include: "memorial-categories" },
        ui: {
          global: true,
          allowedActions: { create: false, delete: false },
        },
        fields: [
          {
            type: "object",
            name: "memorialCategories",
            label: "Memorial Categories",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title }) },
            fields: [
              { type: "string", name: "slug", label: "Slug (used in the URL)", required: true },
              { type: "string", name: "title", label: "Title", required: true },
              {
                type: "string",
                name: "shortDescription",
                label: "Short Description",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "description",
                label: "Full Description",
                ui: { component: "textarea" },
              },
              { type: "string", name: "suitableFor", label: "Suitable Use Cases", list: true },
              { type: "string", name: "customization", label: "Customization Possibilities", list: true },
              { type: "image", name: "image", label: "Photo" },
              { type: "string", name: "imageAlt", label: "Photo Description (for accessibility)" },
            ],
          },
        ],
      },
      {
        name: "galleryItemsFile",
        label: "Gallery",
        path: "content",
        format: "json",
        match: { include: "gallery-items" },
        ui: {
          global: true,
          allowedActions: { create: false, delete: false },
        },
        fields: [
          {
            type: "object",
            name: "galleryItems",
            label: "Gallery Photos",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title }) },
            fields: [
              { type: "string", name: "id", label: "ID (unique, no spaces)", required: true },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "category", label: "Category", options: GALLERY_CATEGORY_OPTIONS },
              { type: "string", name: "caption", label: "Caption" },
              { type: "image", name: "image", label: "Photo" },
              { type: "string", name: "imageAlt", label: "Photo Description (for accessibility)" },
            ],
          },
        ],
      },
      {
        name: "faqsFile",
        label: "FAQ",
        path: "content",
        format: "json",
        match: { include: "faqs" },
        ui: {
          global: true,
          allowedActions: { create: false, delete: false },
        },
        fields: [
          {
            type: "object",
            name: "faqs",
            label: "Questions & Answers",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.question }) },
            fields: [
              { type: "string", name: "question", label: "Question", required: true },
              { type: "string", name: "answer", label: "Answer", ui: { component: "textarea" } },
            ],
          },
        ],
      },
      {
        name: "testimonialsFile",
        label: "Testimonials",
        path: "content",
        format: "json",
        match: { include: "testimonials" },
        ui: {
          global: true,
          allowedActions: { create: false, delete: false },
        },
        fields: [
          {
            type: "object",
            name: "testimonials",
            label: "Testimonials",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.attribution }) },
            fields: [
              { type: "string", name: "quote", label: "Quote", ui: { component: "textarea" } },
              { type: "string", name: "attribution", label: "Attribution" },
            ],
          },
        ],
      },
      {
        name: "serviceAreasFile",
        label: "Service Areas",
        path: "content",
        format: "json",
        match: { include: "service-areas" },
        ui: {
          global: true,
          allowedActions: { create: false, delete: false },
        },
        fields: [
          {
            type: "object",
            name: "serviceAreas",
            label: "Towns & Cities Served",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.name }) },
            fields: [
              { type: "string", name: "name", label: "Town/City Name" },
              { type: "string", name: "state", label: "State (abbreviation)" },
            ],
          },
          {
            type: "string",
            name: "serviceAreaStatement",
            label: "Service Area Statement",
            ui: { component: "textarea" },
          },
        ],
      },
      {
        name: "processStepsFile",
        label: "Our Process Steps",
        path: "content",
        format: "json",
        match: { include: "process-steps" },
        ui: {
          global: true,
          allowedActions: { create: false, delete: false },
        },
        fields: [
          {
            type: "object",
            name: "processSteps",
            label: "Process Steps",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title }) },
            fields: [
              { type: "string", name: "title", label: "Step Title" },
              {
                type: "string",
                name: "description",
                label: "Short Description",
                ui: { component: "textarea" },
              },
              { type: "string", name: "details", label: "Detailed Bullet Points", list: true },
            ],
          },
        ],
      },
    ],
  },
});
