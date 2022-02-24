import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { LocalStorageConfig, localStorageSync } from 'ngrx-store-localstorage';
import { blogFeatureKey } from '../blogs/blog.reducer';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface State {}

export const reducers: ActionReducerMap<State> = {};

const localStorageSyncReducer = (
  reducer: ActionReducer<any>
): ActionReducer<any> => {
  return localStorageSync(LOCAL_STORAGE_SYNC_CONFIG)(reducer);
};

const LOCAL_STORAGE_SYNC_CONFIG: LocalStorageConfig = {
  keys: [blogFeatureKey],
  rehydrate: true,
  restoreDates: false,
  storageKeySerializer: (key: string) => `ionic-pd-app-${key}`,
};

export const metaReducers: MetaReducer<State>[] = [localStorageSyncReducer];
