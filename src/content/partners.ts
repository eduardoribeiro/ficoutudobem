export interface PartnersLogos {
    image: string;
    alt?: string;
    width?: number;
    quality?: number;
    link?: string;
};

export const partners: PartnersLogos[] = [
    {
        "image": "./images/parceiros/cenouratravel.png",
        "alt": "Cenoura Travel",
        "link": "#"
    },
    {
        "image": "./images/parceiros/casa-risa.png",
        "alt": "Casa Risa",
        "link": "https://www.casarisa.com/"
    },
    {
        "image": "./images/parceiros/makisushi.png",
        "alt": "MakiSushi",
        "link": "https://www.makisushi.pt/",
    },
]