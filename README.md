# Filmmaking Portfolio

This project is a cinematic filmmaking portfolio website built with Next.js 15, React 19, Tailwind CSS, and Framer Motion. Content is dynamically fetched from a Google Drive YAML file.

## Features Implemented

- **Cinematic UI**: Dark mode, neon accents, parallax effects, and smooth animations using Framer Motion.
- **Dynamic Content**: Content is fetched from a Google Drive YAML file via a Next.js API route.
- **Components**:
  - **Hero**: Parallax background and animated text.
  - **YouTube Player**: Custom player with cinematic hover effects.
  - **Artworks**: Vertical list with descriptions.
  - **Awards**: Grid layout with hover effects (conditional rendering).
  - **Contact**: Contact section with email and Instagram link.
  - **About**: Dedicated page with photo, detailed bio, and CV download.
  - **Navbar**: Floating navigation with active state animations.

## Configuration

### GitHub Setup

1. Create an account on [GitHub](https://github.com) if you don't have one already.
2. In the top-right corner, click on your profile picture and select **Repositories** from the dropdown menu.
3. On the Repositories page, click the green **New** button to create a new repository.
4. At the top of the page, click on the link labeled <u>Import a repository</u>.
5. In the "Your old repository's clone URL" field, paste the following URL:  
   `https://github.com/juan-ee/happy-birthday-santi`
6. Complete the other fields as needed, such as repository name, description, and visibility options.



### Google Drive Setup

1. **Create a YAML file** on Google Drive with the following structure:
   ```yaml
   name: "Your Name"
   role: "Your Role"
   bio: |
     Your short biography text here.
   
   about:
     photoUrl: "https://example.com/photo.jpg" # or update profile_photo.png
     cvUrl: "https://example.com/cv.pdf"
     detailedBio: |
       Your detailed biography text here.
       Can be multiple lines.

   artworks:
     - title: "Film Title"
       url: "https://www.youtube.com/watch?v=VIDEO_ID"
       description: "Description of the film."
   
   awards:
     - "Award Name 1"
     - "Award Name 2"
   
   contact:
     email: "your@email.com"
     instagram: "@yourhandle"
     phone: "+1234567890"
   ```
   You also have a sample file in [profile_test.yml](https://raw.githubusercontent.com/juan-ee/happy-birthday-santi/refs/heads/main/public/profile_test.yml) that you can download. Edit the file with the information you want to include.
2. **Share the file**: Right-click > Share > General access > **Anyone with the link**.
3. **Get the File ID**: The ID is the long string in the URL (e.g., `https://drive.google.com/file/d/THIS_IS_THE_ID/view`).
4. **Update the Code on Github**:
   - Open `src/lib/fetchContent.ts`
   - Replace `1-DUMMY_ID_REPLACE_ME` with your actual File ID.

**NOTE:** If you want to update the photo of your bio, either you upload overwrite the file `public/profile_photo.png` on Github, or provide a update the field `photoUrl` in the yml file you uploaded on Google Drive.

### Deployment to Vercel

1. Push this code to a GitHub repository.
2. Go to [Vercel](https://vercel.com) and "Add New Project".
3. Import your repository.
4. The default settings for Next.js should work automatically.
5. Click **Deploy**.

