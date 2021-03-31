import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import throttleReducer from './slices/ThrottleSlice';
import zoomReducer from '../state-management/slices/ZoomSlice';
import snapshotReducer from '../state-management/slices/SnapshotSlice';
import atomNetworkReducer from '../state-management/slices/AtomNetworkSlice';

const customizedPayloadAction = getDefaultMiddleware({
  serializableCheck: false,
});

export const store = configureStore({
  reducer: {
    zoom: zoomReducer,
    throttle: throttleReducer,
    snapshot: snapshotReducer,
    atomNetwork: atomNetworkReducer,
  },
  middleware: customizedPayloadAction,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
