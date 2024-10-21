import { usePage } from "@inertiajs/react";
import { PageProps } from '@/types';

export const usePermission = () => {
    const { auth } = usePage<PageProps>().props;
    const isRole = (...roleNames: string[]): boolean => {
        const countCheck = roleNames.reduce((pre, roleName) => {
            const isEqual = (auth?.user?.roles || []).filter(item => item.name === roleName).length > 0
            return pre + (isEqual ? 1 : 0)
        }, 0);
        return countCheck === roleNames.length
    }
    const isPermission = (permissionName: string): boolean => {
        return (auth?.user?.permissions || []).filter(item => item.name === permissionName).length > 0
    }
    const isUser = (userId: number): boolean => auth?.user?.id === userId
    const isAuth: boolean = Boolean(auth.user)
    const isGuest: boolean = !Boolean(auth.user)

    return {
        user: auth.user,
        isRole,
        isPermission,
        isUser,
        isAuth,
        isGuest,
        roles: auth?.user?.roles?.map(item => item.name),
        permissions: (auth?.user?.permissions || []).map(item => item.name),
    }
}
