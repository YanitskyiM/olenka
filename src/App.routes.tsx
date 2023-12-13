import App from "./App.tsx";
import {Olenka} from "./Olenka.tsx";


export enum APP_LINKS {
    HOME = "/olenka",
    OLENKA = "/olenka/reveal",
}

export const APP_ROUTES = [
    {
        path: APP_LINKS.HOME,
        component: App,
    },  {
        path: APP_LINKS.OLENKA,
        component: Olenka,
    },
]