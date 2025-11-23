export const GOOGLE_DRIVE_FILE_ID = '1iG9VOW0RcnWZGm3ypiJrzxg4l2QqzeBn';

export async function fetchContentFromDrive(fileId: string): Promise<string> {
  const url = `https://docs.google.com/uc?export=download&id=${fileId}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch from Google Drive: ${response.statusText}`);
    }

    return await response.text();
  } catch (error) {
    console.error('Error fetching content:', error);
    throw error;
  }
}

export const DEMO_YAML_CONTENT = `
name: "Santiago Gomez"
bio: |
  Santiago Gomez is a visionary filmmaker exploring the boundaries of visual storytelling.
  With a background in digital arts and cinematography, Santiago creates immersive experiences
  that challenge perception and evoke deep emotion.
  
  Based in Berlin, working globally.

artworks:
  - title: "Neon Dreams"
    url: "https://www.youtube.com/watch?v=LXb3EKWsInQ"
    description: "A cyberpunk journey through a rain-soaked metropolis, exploring themes of artificial consciousness."
  - title: "Silence of the Void"
    url: "https://www.youtube.com/watch?v=jNQXAC9IVRw"
    description: "An experimental short film shot entirely in zero-gravity simulation."
  - title: "Echoes"
    url: "https://www.youtube.com/watch?v=ScMzIvxBSi4"
    description: "A documentary about the last analog sound engineers in the digital age."

awards:
  - "Best Cinematography - Sundance 2024"
  - "Golden Bear Nominee - Berlinale 2023"
  - "Visionary Award - SXSW 2023"

contact:
  email: "santiago.gomez@example.com"
  instagram: "@santi_gomezr"
`;
