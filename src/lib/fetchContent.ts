export const GOOGLE_DRIVE_FILE_ID = '1-DUMMY_ID_REPLACE_ME';

export async function fetchContentFromDrive(fileId: string): Promise<string> {
  const url = `https://docs.google.com/uc?export=download&id=${fileId}`;

  try {
    const response = await fetch(url, { cache: 'no-store' });

    if (!response.ok) {
      throw new Error(`Failed to fetch from Google Drive: ${response.statusText}`);
    }

    return await response.text();
  } catch (error) {
    console.error('Error fetching content:', error);
    throw error;
  }
}
