import { NextResponse } from 'next/server';
import { fetchContentFromDrive, GOOGLE_DRIVE_FILE_ID, DEMO_YAML_CONTENT } from '@/lib/fetchContent';
import { parseYaml } from '@/lib/parseYaml';

export const revalidate = 86400; // 24 hours

export async function GET() {
    try {
        let yamlText = '';

        // If the ID is still the placeholder, use the demo content
        if (GOOGLE_DRIVE_FILE_ID === '1-DUMMY_ID_REPLACE_ME') {
            console.log('Using demo content (Google Drive ID not set)');
            yamlText = DEMO_YAML_CONTENT;
        } else {
            try {
                yamlText = await fetchContentFromDrive(GOOGLE_DRIVE_FILE_ID);
            } catch (error) {
                console.error('Failed to fetch from Drive, falling back to demo content for safety:', error);
                yamlText = DEMO_YAML_CONTENT;
            }
        }

        const content = parseYaml(yamlText);
        return NextResponse.json(content);
    } catch (error) {
        console.error('Error in content API:', error);
        return NextResponse.json(
            { error: 'Failed to load content' },
            { status: 500 }
        );
    }
}
