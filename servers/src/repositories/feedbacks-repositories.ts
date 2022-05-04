export interface FeedbackCreatedata {
    type: string;
    comment:string;
    screenshort?: string;
}
export interface Feedbacksrepositories {
    create: (data:FeedbackCreatedata) =>Promise<void>;
}