// TypeScript interface definitions

export interface TripProfile {
    destination: string;
    startDate: Date;
    endDate: Date;
    travelers: Traveler[];
}

export interface Traveler {
    name: string;
    age: number;
}

export interface Activity {
    name: string;
    location: string;
    startTime: Date;
    endTime: Date;
    description?: string;
}

export interface DayItinerary {
    date: Date;
    activities: Activity[];
}

export interface FullItinerary {
    tripProfile: TripProfile;
    dailyPlans: DayItinerary[];
}

export interface PackingItem {
    name: string;
    quantity: number;
    isPacked: boolean;
}

export interface TravelTips {
    tip: string;
    importance: "low" | "medium" | "high";
}