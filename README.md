# Personal Portfolio

**Author**: Leju B 
**Date**: 08/08/2024

---

## **Overview**

This repository contains the code for my personal portfolio, created using React . The portfolio showcases my skills, projects, and experience. It is deployed using GitHub Pages for easy access and sharing.

## **Project Description**

The personal portfolio is designed to provide a comprehensive overview of my professional skills and achievements. It includes sections such as:

- **Home**: An introduction and overview of who I am.
- **About**: Details about my background, education, and interests.
- **Projects**: A showcase of projects I’ve worked on with descriptions and links.(Pending)
- **Contact**: Information on how to get in touch with me.

## **Tech Stack**

- **Frontend**: React
- **Deployment**: GitHub Pages


## **Deployment**

The portfolio is deployed using GitHub Pages. Here’s how the deployment is managed:

1. **Build the Project**:
   ```bash
   npm run build
   ```
   This creates a production-ready build of your React application.

2. **Deploy to GitHub Pages**:
   - Ensure that you have configured your `package.json` with the correct `homepage` field.
   - Use a deployment tool or script, like `gh-pages`, to deploy the build to GitHub Pages.

   ```bash
   npm install --save-dev gh-pages
   ```

   Add the following scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

   Deploy the application:
   ```bash
   npm run deploy
   ```

link: https://leju-b.github.io/my-Portfolio/
