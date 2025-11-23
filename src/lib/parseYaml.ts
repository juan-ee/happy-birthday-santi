import YAML from 'yaml';

export interface Artwork {
    title: string;
    url: string;
    description: string;
}

export interface Contact {
    email: string;
    instagram?: string;
    phone?: string;
}

export interface About {
    photoUrl: string;
    cvUrl: string;
    detailedBio: string;
}

export interface PortfolioContent {
    name: string;
    role: string;
    bio: string;
    about?: About;
    artworks: Artwork[];
    awards?: string[];
    contact: Contact;
}

export function parseYaml(yamlString: string): PortfolioContent {
    try {
        const parsed = YAML.parse(yamlString);

        // Basic validation could be added here
        if (!parsed.name || !parsed.artworks) {
            throw new Error('Invalid YAML structure: Missing required fields');
        }

        return parsed as PortfolioContent;
    } catch (error) {
        console.error('Error parsing YAML:', error);
        throw new Error('Failed to parse portfolio content');
    }
}
