import App from "./App.tsx";
import { Olenka } from "./Olenka.tsx";
import FormPage from "./FormPage.tsx";

export enum APP_LINKS {
  HOME = "/olenka",
  OLENKA = "/olenka/reveal",
  FORM = "/olenka/form-test",
}

export const APP_ROUTES = [
  {
    path: APP_LINKS.HOME,
    component: App,
  },
  {
    path: APP_LINKS.OLENKA,
    component: Olenka,
  },  {
    path: APP_LINKS.FORM,
    component: FormPage,
  },
];
