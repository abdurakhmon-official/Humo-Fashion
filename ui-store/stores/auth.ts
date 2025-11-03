import type { AuthStoreShape } from "~/types";
import type { Users } from "~/types/user-model/Users";
import { useCommon } from "./common";
import { useService } from "~/composable/userServices";

export const useAuth = defineStore('auth', {
    state: (): AuthStoreShape => ({
        token: null,
        user: null
    }),
    getters: {
      isLoggedIn: (state) =>
        !!state.token && !!state.user,
      accessToken: (state) =>
        state.token,
      role: (state) => state.user?.role,
    },
    actions: {
        async setCreds(
            token: string,
            user: Users
        ) {
            this.token = token,
            this.user = user

            const common = useCommon()
            common.loadCommonData()
        },
        async setUser(user: Users) {
            if (!user) return 

            this.user = user
            await this.loadMe(true)
        },
        async loadMe(force = false) {

            if ((!force && this.isLoggedIn) || !this.isLoggedIn) return

            const services = useService()

            const {success, user} = await services.$authentication.loadMe()

            if (success) {
                this.user = user
            } else {
                this.clearUser()
            }
        },
        clearUser() {
            this.token = null
            this.user = null

            if (this.token === null && this.user === null) return true
            return false
        }
    },
    persist: true
})

if (import.meta.hot) {
    import.meta.hot.accept(
        acceptHMRUpdate(
            useAuth,
            import.meta.hot
        )
    )
}