export interface ContactInfo {
    name: string;
    company: string;
    title?: string;
    email: string;
    cell?: string;
    logoPath?: string;
}

export interface IndustrialProperty {
    id: string;
    title: string;
    slug: string;
    status: 'Available' | 'Under Contract' | 'Developed';
    type: 'Aerospace' | 'Advanced Manufacturing' | 'Logistics' | 'Flex-Space';

    // High-Level Specs
    acreage: number;
    maxBuildOutSqFt: number;
    zoning: string;

    // Media & Contacts
    photos: string[];
    contact: ContactInfo;
    broker?: ContactInfo;

    // The "Speed to Market" (De-Risking)
    shovelReadyStatus: 'Certified' | 'Preliminary' | 'Developed';
    dueDiligenceComplete: string[];

    // Utility Data (The "Power" Logic)
    utilities: {
        power: string;
        water: string;
        gas: string;
        fiber: string;
        sewer: string;
    };

    // Connectivity (The "Logistics" Hook)
    logistics: {
        runwayAccess: string;
        railAccess: boolean;
        highwayAccess: string;
    };

    // Financials (The "Found Money")
    incentives: {
        ftzStatus: boolean;
        tierStatus: string;
        taxNote: string;
    };

    description: string;
    coordinates: { lat: number; lng: number };
    dossierUrl: string;
}

const defaultContact: ContactInfo = {
    name: "Tim Moore",
    company: "NCGTP Economic Development Region",
    title: "Marketing Manager",
    email: "tim.moore@ncgtpedr.com",
    cell: "252-205-4029",
    logoPath: "https://admin.zoomprospector.com/photos/NCGLOBALTRANSPARK/42df49ee-aa66-4634-8049-ede9836ccd7e.jpg"
};

export const properties: IndustrialProperty[] = [
    {
        id: "site-7a",
        title: "Strategic Asset 7A: Runway-Adjacent Aerospace Pad",
        slug: "runway-adjacent-aerospace-7a",
        status: 'Available',
        type: 'Aerospace',
        acreage: 85.4,
        maxBuildOutSqFt: 1200000,
        zoning: "I-2 Heavy Industrial",
        photos: [
            "https://admin.zoomprospector.com/photos/NCGLOBALTRANSPARK/26f8ac1b-62bf-4566-b807-a6a1e7fbd94c.jpg",
            "https://admin.zoomprospector.com/photos/NCGLOBALTRANSPARK/eae6592f-3802-42a5-b07f-28de4c70bcf7.jpg"
        ],
        contact: defaultContact,
        broker: {
            name: "John Doe",
            company: "Strategic Realty Partners",
            title: "Senior Industrial Advisor",
            email: "john.doe@strategicrealty.com",
            cell: "919-555-0123"
        },
        shovelReadyStatus: 'Certified',
        dueDiligenceComplete: ['Phase 1 ESA', 'Geotechnical Study', 'Wetlands Delineation', 'Archaeological Review'],
        utilities: {
            power: "25kV Dual-Feed Reliability",
            water: "12-inch Main / High-Volume Capacity",
            gas: "6-inch High-Pressure Natural Gas",
            fiber: "Redundant Tier-1 Dark Fiber",
            sewer: "8-inch Gravity Main"
        },
        logistics: {
            runwayAccess: "Direct Taxiway Access to 11,500 Ft Runway",
            railAccess: true,
            highwayAccess: "Immediate Access to US-70 / Future I-42"
        },
        incentives: {
            ftzStatus: true,
            tierStatus: "Tier 1 (Highest Incentive Priority)",
            taxNote: "Qualifies for North Carolina JDIG and state-level infrastructure grants."
        },
        description: "Engineered for high-security aerospace manufacturing or large-scale MRO operations. Site 7A offers a unique 'Behind the Fence' security perimeter option with direct, heavy-load taxiway connectivity.",
        coordinates: { lat: 35.332, lng: -77.612 },
        dossierUrl: "/dossiers/site-7a-technical-package.pdf"
    },
    {
        id: "west-side-100",
        title: "GTP West Side: 100-Acre Advanced Manufacturing Hub",
        slug: "gtp-west-side-100",
        status: 'Available',
        type: 'Advanced Manufacturing',
        acreage: 100.0,
        maxBuildOutSqFt: 1500000,
        zoning: "I-2 Heavy Industrial",
        photos: [
            "https://admin.zoomprospector.com/photos/NCGLOBALTRANSPARK/7f786af6-4cf5-4072-ba18-c03086dd9cc8.jpg"
        ],
        contact: defaultContact,
        shovelReadyStatus: 'Certified',
        dueDiligenceComplete: ['Phase 1 ESA', 'Geotechnical Study', 'Wetlands Delineation'],
        utilities: {
            power: "Dual-Feed Electric Service",
            water: "12-inch High-Capacity Main",
            gas: "4-inch High-Pressure Gas Line",
            fiber: "Dark Fiber Ready",
            sewer: "8-inch Gravity sewer"
        },
        logistics: {
            runwayAccess: "0.5 miles to Air Cargo Apron",
            railAccess: false,
            highwayAccess: "I-42 Connectivity via Harvey Parkway"
        },
        incentives: {
            ftzStatus: true,
            tierStatus: "Tier 1",
            taxNote: "Available for Foreign Trade Zone #214 benefits."
        },
        description: "Large-scale advanced manufacturing pad with robust power infrastructure and excellent highway connectivity. Ideal for automotive or electronics assembly.",
        coordinates: { lat: 35.331, lng: -77.619 },
        dossierUrl: "/dossiers/west-side-100.pdf"
    },
    {
        id: "gtp-40-acre",
        title: "GTP 40: High-Efficiency Flex Development",
        slug: "gtp-40-acre",
        status: 'Available',
        type: 'Flex-Space',
        acreage: 40.0,
        maxBuildOutSqFt: 450000,
        zoning: "Light Industrial",
        photos: [
            "https://admin.zoomprospector.com/photos/NCGLOBALTRANSPARK/f0db4dde-657e-47b1-a839-64cf87a7fe73.jpg"
        ],
        contact: defaultContact,
        shovelReadyStatus: 'Preliminary',
        dueDiligenceComplete: ['Phase 1 ESA'],
        utilities: {
            power: "Standard Industrial 3-Phase",
            water: "8-inch Main",
            gas: "2-inch Medium-Pressure",
            fiber: "Broadband Available",
            sewer: "8-inch Main"
        },
        logistics: {
            runwayAccess: "1.2 miles to Air Cargo Apron",
            railAccess: false,
            highwayAccess: "Immediate Access to NC-58"
        },
        incentives: {
            ftzStatus: true,
            tierStatus: "Tier 1",
            taxNote: "Local property tax abatement eligible."
        },
        description: "A flexible 40-acre site designed for multi-tenant flex space or specialized distribution services.",
        coordinates: { lat: 35.325, lng: -77.605 },
        dossierUrl: "/dossiers/gtp-40.pdf"
    }
];