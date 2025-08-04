---
title: "More Monuments"
description: "Website development and interactive mapping for moremonuments.org"
category: "Web Development"
status: "in-progress"
technologies: ["Starscape Digital Client", "Webflow", "React.js", "React-Leaflet", "Node.js", "Babel", "Webpack", "jsDelivr CDN"]
color: "var(--accent-bg)"
github: "https://github.com/brucestarlove/mm-map"
date: "2025-08-03"
---

# More Monuments

_Last updated: 3 August 2025_

Website development and interactive mapping work for moremonuments.org, an organization dedicated to creating and cataloging landmark monuments that celebrate the ambition and artistry of America.

## 🤝 My Role at moremonuments.org

In November 2024, I connected with Mo, the founder of moremonuments.org, through Twitter. Recognizing the project's mission and potential, I offered to help improve their website. This opportunity led me to dive deep into Webflow, where I quickly leveled up my skills to support the organization's needs.

### Contributions

- **Design & Development**: Updating and modernizing the site's design for clarity and accessibility
- **Content Management**: Adding new pages and sections to better showcase the organization's work
- **Copywriting**: Writing and editing copy to communicate the mission and impact
- **Information Architecture**: Directing the overall organization of information for a more intuitive user experience
- **Custom Development**: Building and embedding a custom interactive map in React.js for the Ecosystem page

## 🗺️ Interactive Map of Monuments & Ecosystem

### Overview

I designed and developed an interactive map for moremonuments.org that visualizes monuments and related ecosystem entities across the United States. The map is fully responsive, user-friendly, and seamlessly embedded within the organization's Webflow-powered site.

### Technical Architecture

To power the map, I architected a data pipeline that leverages a custom proxy server (mm-proxy). This server fetches structured data from the organization's Webflow CMS, transforms it as needed, and exposes it as JSON endpoints for both monuments and ecosystem entities.

The React-based map application (built with React-Leaflet) consumes these endpoints, dynamically rendering markers and popups based on the latest content in the CMS. This approach ensures that non-technical team members can update map data directly in Webflow, while the map itself remains fast, reliable, and easy to maintain.

### Deployment & Integration

The map bundle is deployed via CDN and embedded into the Webflow site, providing a seamless integration between custom React components and the no-code CMS.

## 🛠️ Technologies Used

- **Webflow CMS**: Content management and site hosting
- **React.js**: Interactive map component development
- **React-Leaflet**: Map rendering and interaction
- **Leaflet.js**: Core mapping library
- **Node.js & Express.js**: Custom proxy server for data pipeline
- **Webpack**: Module bundling and build process
- **jsDelivr CDN**: Map deployment and hosting

## 🎯 Key Features

- **Responsive Design**: Optimized for all device sizes
- **Real-time Data**: Map automatically updates when content is modified in Webflow CMS
- **User-friendly Interface**: Intuitive navigation and interaction patterns
- **Seamless Integration**: Custom React components embedded within no-code platform
- **Scalable Architecture**: Designed to handle growing amounts of monument and ecosystem data

## 🌟 Impact

This project demonstrates the power of combining no-code platforms with custom development to create sophisticated, data-driven experiences. The solution empowers the moremonuments.org team to manage content independently while providing visitors with an engaging, interactive way to explore the organization's important work.

## 🔗 Links

- [More Monuments Website](https://moremonuments.org)
- Interactive Map: Available on the Ecosystem page

_Contributing to meaningful projects that promote historical awareness and social justice._