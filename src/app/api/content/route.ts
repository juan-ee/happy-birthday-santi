import { NextResponse } from 'next/server';
import { fetchContentFromDrive, GOOGLE_DRIVE_FILE_ID } from '@/lib/fetchContent';
import { parseYaml } from '@/lib/parseYaml';
import fs from 'fs';
import path from 'path';


export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
    try {
        let yamlText = '';

        const isDummy = (GOOGLE_DRIVE_FILE_ID as string) === '1-DUMMY_ID_REPLACE_ME';

        if (isDummy) {
            console.log('Using YAML file from /public (Google Drive ID not set)');

            // Resolve the absolute path to the file in /public
            const filePath = path.join(process.cwd(), 'public', 'profile_test.yml');

            yamlText = fs.readFileSync(filePath, 'utf8');
        } else {
            try {
                yamlText = await fetchContentFromDrive(GOOGLE_DRIVE_FILE_ID);
            } catch (error) {
                console.error(
                    'Failed to fetch from Drive, falling back to /public YAML:',
                    error
                );

                const fallbackPath = path.join(process.cwd(), 'public', 'profile_test.yml');
                yamlText = fs.readFileSync(fallbackPath, 'utf8');
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
