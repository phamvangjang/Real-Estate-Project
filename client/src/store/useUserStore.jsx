import { create } from "zustand"
import { persist, createJSONStogare } from 'zustand/middleware'


export const useUserStore = create(
    persist(
        (set, get) => ({
            token: null,
            current: null,
        }),
        {
            name: 'rest06',
            stogare: createJSONStogare(() => localStorage),
            //return object of state, want save
            partialize: (state) =>
                Object.fromEntries(
                    Object.entries(state).filter((el) => el[0] === 'token' || el[0] === 'current')
                ),
        }
    )
)
