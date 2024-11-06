import type { RootState } from "@/redux/store";

export const userSelector = (state: RootState) => state.user;
export const userRoleSelector = (state: RootState) => state.user.user?.role;
