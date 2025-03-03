import { StateCreator } from "zustand";

type Notification = {
    text: string;
    error: boolean;
    show: boolean;
}

export type NotificationSliceType = {
    // Add your state properties here
    notifications: Notification
};

export const createNotificationSlice: StateCreator<NotificationSliceType> = (set,get) => ({
    // Add your state properties here
    notifications: {
        text: "",
        error: false,
        show: false
    }
});

