import { Banner } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

type BannerState = {
    isFetch: boolean;
    isLoading: boolean;
    error: any;
    keys: BannerKeys
    listIds: number[]
};

type BannerKeys = {
    [key: number]: Banner
}

const defaultReduxData = {
    isFetch: false,
    isLoading: false,
    error: null,
    keys: {},
    listIds: []
};

const initialState = defaultReduxData as BannerState;

export const banner = createSlice({
    name: "banner",
    initialState,
    reducers: {
        getBannerList: (state, action) => {
            const banners: Banner[] = action.payload || []
            let keys = {}
            banners.forEach((banner) => {
                keys[banner.id] = banner
            });
            state.keys = keys;
            state.listIds = banners.map((banner) => banner.id)
        },
        updateBannerById: (state, action) => {
            const banner: Banner = action.payload
            state.keys[banner.id] = banner;
        },
        removeBannerById: (state, action) => {
            const id: number = action.payload
            delete state.keys[id]
            state.listIds = state.listIds.filter(key => key !== id)
        },
    },
});

export const { getBannerList, updateBannerById, removeBannerById } = banner.actions;
export default banner.reducer;
