import { Config } from 'ziggy-js';

export type Banner = {
    id: number
    title: string
    img_url: string
    target_link_url: string
    target_links: TargetLinkKeys
    status: 'Draft' | 'Published'
    product_id: number
    user_id: number
    user: User
    published_at: string
    created_at: string
    updated_at: string
}

export type LedgerType = {
    id: number
    key?: number | string
    title: string
    firstname: string
    lastname: string
    name?: string
    birthdate: string
    avatar_url?: string
    created_at: string
    updated_at: string
}

export type LinkType = {
    id: number
    destination: string
    title: string
    slug: string
    user_id: number
    status: 'Draft' | 'Published'
    published_at: string
    created_at: string
    updated_at: string
}

type TargetLinkKeys = {
    [key: string]: string
}

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
    roles?: Role[];
    permissions?: any[];
}

export interface Role {
    id: number;
    name: string;
    guard_name: string;
    permissions?: any[]
    created_at: string;
    updated_at: string;
    pivot: RolePivot;
}

export interface RolePivot {
    model_id: number;
    model_type: string;
    role_id: number
}

export type Pagination = {
    pageSize: number
    current: number;
    total: number;
    page: number;
    lastPage: number;
}

type Flash = {
    message: string
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
    flash: Flash
};
