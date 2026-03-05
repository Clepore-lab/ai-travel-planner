// TypeScript type definitions for Travel App

interface TripProfile {
    id: string;
    destination: string;
    days: number;
    travelStyle: string;
    travelers: number;
    accommodation: string;
    interests: string[];
    dietaryRestrictions: string;
    budgetPerDay: number;
    avoidances: string;
    createdAt: Date;
}

interface Activity {
    name: string;
    description: string;
    time: string;
    cost: number;
    type: "restaurant" | "attraction" | "activity";
    cuisine?: string;
    priceRange?: string;
}

interface DayItinerary {
    day: number;
    date: string;
    morningActivities: Activity[];
    afternoonActivities: Activity[];
    eveningActivities: Activity[];
    totalCost: number;
}

interface FullItinerary {
    id: string;
    tripProfile: TripProfile;
    days: DayItinerary[];
    totalCost: number;
    generatedAt: Date;
}

interface PackingItem {
    id: string;
    category: "Clothing" | "Documents" | "Tech" | "Toiletries" | "Extras";
    item: string;
    checked: boolean;
}

interface TravelTips {
    customsEtiquette: string;
    currencyTipping: string;
    safety: string;
    usefulPhrases: string[];
    emergencyContacts: string;
}