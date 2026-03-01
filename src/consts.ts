import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Adam Atienza",
  DESCRIPTION: "Portfolio and blog of Adam Atienza, a Cybersecurity Specialist focusing on Defensive Operations and Threat Analysis.",
  AUTHOR: "Adam Atienza",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Resume Toggle
export const SHOW_RESUME = false
export const RESUME_HREF = "/resume.pdf"

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "adamatnza01@gmail.com",
    HREF: "mailto:adamatnza01@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "ItsAdam01",
    HREF: "https://github.com/ItsAdam01"
  },
]

