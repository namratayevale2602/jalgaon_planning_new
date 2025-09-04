import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import * as api from "../services/api";

// Create separate stores for better organization
export const useTourismStore = create(
  persist(
    (set, get) => ({
      // Tourism Spots State
      tourismSpots: [],
      tourismSpotsLoading: false,
      tourismSpotsError: null,

      // Tourism Gallery State
      tourismGallery: [],
      tourismGalleryLoading: false,
      tourismGalleryError: null,

      // Tourism Spot Detail State (for individual spot caching)
      tourismSpotDetails: {},
      tourismSpotDetailLoading: false,
      tourismSpotDetailError: null,

      // Hydration state
      _hasHydrated: false,

      // Actions
      setHasHydrated: (status) => set({ _hasHydrated: status }),

      // Tourism Spots Actions
      fetchTourismSpots: async () => {
        if (!get()._hasHydrated) return;

        set({ tourismSpotsLoading: true, tourismSpotsError: null });

        try {
          const data = await api.tourismAPI();
          const spots = data.data || data;

          set({
            tourismSpots: spots,
            tourismSpotsLoading: false,
          });
          return spots;
        } catch (error) {
          set({
            tourismSpotsError: error.message,
            tourismSpotsLoading: false,
          });
          throw error;
        }
      },

      // Tourism Spot Detail Actions
      fetchTourismSpotDetail: async (slug) => {
        if (!get()._hasHydrated) return;

        set({ tourismSpotDetailLoading: true, tourismSpotDetailError: null });

        try {
          const data = await api.tourismSpotDetailAPI(slug);
          const spotDetail = data.data || data;

          // Cache the spot detail
          set((state) => ({
            tourismSpotDetails: {
              ...state.tourismSpotDetails,
              [slug]: spotDetail,
            },
            tourismSpotDetailLoading: false,
          }));

          return spotDetail;
        } catch (error) {
          set({
            tourismSpotDetailError: error.message,
            tourismSpotDetailLoading: false,
          });
          throw error;
        }
      },

      getTourismSpotBySlug: (slug) => {
        // First check in spots array
        const spotFromList = get().tourismSpots.find(
          (spot) => spot.slug === slug
        );
        if (spotFromList) return spotFromList;

        // Then check in cached details
        return get().tourismSpotDetails[slug] || null;
      },

      // Tourism Gallery Actions
      fetchTourismGallery: async (language = "en") => {
        if (!get()._hasHydrated) return;

        set({ tourismGalleryLoading: true, tourismGalleryError: null });

        try {
          const data = await api.tourismGalleryAPI(language);
          const gallery = data.data || data;

          set({
            tourismGallery: gallery,
            tourismGalleryLoading: false,
          });
          return gallery;
        } catch (error) {
          set({
            tourismGalleryError: error.message,
            tourismGalleryLoading: false,
          });
          throw error;
        }
      },

      // Clear errors
      clearTourismSpotsError: () => set({ tourismSpotsError: null }),
      clearTourismSpotDetailError: () => set({ tourismSpotDetailError: null }),
      clearTourismGalleryError: () => set({ tourismGalleryError: null }),
    }),
    {
      name: "tourism-storage",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        state.setHasHydrated(true);
      },
    }
  )
);

// Selector hooks for specific use cases
export const useTourismSpots = () =>
  useTourismStore((state) => state.tourismSpots);
export const useTourismSpotsLoading = () =>
  useTourismStore((state) => state.tourismSpotsLoading);
export const useTourismSpotsError = () =>
  useTourismStore((state) => state.tourismSpotsError);

export const useTourismGallery = () =>
  useTourismStore((state) => state.tourismGallery);
export const useTourismGalleryLoading = () =>
  useTourismStore((state) => state.tourismGalleryLoading);
export const useTourismGalleryError = () =>
  useTourismStore((state) => state.tourismGalleryError);

export const useTourismSpotDetail = (slug) =>
  useTourismStore(
    (state) =>
      state.tourismSpotDetails[slug] ||
      state.tourismSpots.find((spot) => spot.slug === slug)
  );
export const useTourismSpotDetailLoading = () =>
  useTourismStore((state) => state.tourismSpotDetailLoading);
export const useTourismSpotDetailError = () =>
  useTourismStore((state) => state.tourismSpotDetailError);

// Action hooks
export const useTourismActions = () =>
  useTourismStore((state) => ({
    fetchTourismSpots: state.fetchTourismSpots,
    fetchTourismSpotDetail: state.fetchTourismSpotDetail,
    fetchTourismGallery: state.fetchTourismGallery,
    clearTourismSpotsError: state.clearTourismSpotsError,
    clearTourismSpotDetailError: state.clearTourismSpotDetailError,
    clearTourismGalleryError: state.clearTourismGalleryError,
  }));

// Combined hook for tourism main page
export const useTourismMain = () => {
  const spots = useTourismSpots();
  const loading = useTourismSpotsLoading();
  const error = useTourismSpotsError();
  const { fetchTourismSpots } = useTourismActions();

  return { spots, loading, error, fetchTourismSpots };
};

// Combined hook for tourism detail page
export const useTourismDetail = (slug) => {
  const spot = useTourismSpotDetail(slug);
  const loading = useTourismSpotDetailLoading();
  const error = useTourismSpotDetailError();
  const { fetchTourismSpotDetail } = useTourismActions();

  return { spot, loading, error, fetchTourismSpotDetail };
};

// Combined hook for tourism gallery
export const useTourismGalleryPage = () => {
  const gallery = useTourismGallery();
  const loading = useTourismGalleryLoading();
  const error = useTourismGalleryError();
  const { fetchTourismGallery } = useTourismActions();

  return { gallery, loading, error, fetchTourismGallery };
};
