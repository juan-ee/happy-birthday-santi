# Filmmaking Portfolio

This project is a cinematic filmmaking portfolio website built with Next.js 15, React 19, Tailwind CSS, and Framer Motion. Content is dynamically fetched from a Google Drive YAML file.

## Features Implemented

- **Cinematic UI**: Dark mode, neon accents, parallax effects, and smooth animations using Framer Motion.
- **Dynamic Content**: Content is fetched from a Google Drive YAML file via a Next.js API route.
- **Caching**: 
  - Server-side: API route revalidates every 24 hours.
  - Client-side: React Query caches content for 24 hours (`staleTime`).
- **Components**:
  - **Hero**: Parallax background and animated text.
  - **YouTube Player**: Custom player with cinematic hover effects.
  - **Artworks**: Vertical list with descriptions.
  - **Awards**: Grid layout with hover effects (conditional rendering).
  - **Contact**: Contact section with email and Instagram link.
  - **About**: Dedicated page with photo, detailed bio, and CV download.
  - **Navbar**: Floating navigation with active state animations.

## Configuration

### Google Drive Setup

1. **Create a YAML file** on Google Drive with the following structure:
   ```yaml
   name: "Your Name"
   bio: |
     Your short biography text here.
   
   about:
     photoUrl: "https://example.com/photo.jpg"
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
2. **Share the file**: Right-click > Share > General access > **Anyone with the link**.
3. **Get the File ID**: The ID is the long string in the URL (e.g., `https://drive.google.com/file/d/THIS_IS_THE_ID/view`).
4. **Update the Code**:
   - Open `src/lib/fetchContent.ts`
   - Replace `1-DUMMY_ID_REPLACE_ME` with your actual File ID.

### Deployment to Vercel

1. Push this code to a GitHub repository.
2. Go to [Vercel](https://vercel.com) and "Add New Project".
3. Import your repository.
4. The default settings for Next.js should work automatically.
5. Click **Deploy**.

## Future Improvements

- **Multi-filmmaker support**: Add a dynamic route `/[filmmakerId]` to fetch different YAML files.
- **Tag-based filtering**: Add tags to the YAML schema and filter artworks on the frontend.
- **Local Search**: Implement a client-side search for artworks.
- **Theme Toggle**: Although designed for dark mode, a light mode could be added via Tailwind's `dark:` classes.
