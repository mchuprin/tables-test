export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    tables: import("../../entities/Table/model/types").TableData[];
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        tables: import("../../entities/Table/model/types").TableData[];
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
//# sourceMappingURL=store.d.ts.map