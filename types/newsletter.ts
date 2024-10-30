export type SubscriberType = "user" | "business";

export interface BusinessSubscriber {
  email: string;
  company_name: string;
  industry?: string;
  size?: string;
}

export interface UserSubscriber {
  email: string;
  name?: string;
  interests?: string[];
}
