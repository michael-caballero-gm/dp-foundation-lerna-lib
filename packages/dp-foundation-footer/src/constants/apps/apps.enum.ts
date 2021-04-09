export interface IApp {
  key: string;
  label: string;
  urlIcon: string;
  url: string;
}

interface AppEnum {
  [key: string]: IApp;
}

export const AppsList: AppEnum = {
  affirm: {
    key: 'affirm',
    label: 'Affirm',
    urlIcon: 'app_icon_affirm.png',
    url: '/auth/launch/affirm',
  },
  um: {
    key: 'um',
    label: 'User management',
    urlIcon: 'app_icon_um.png',
    url: '/auth/launch/eureka-math-navigator',
  },
  em: {
    key: 'em',
    label: 'Eureka Math Navigator',
    urlIcon: 'app_icon_em.png',
    url: '/auth/launch/in-sync',
  },
  ww: {
    key: 'ww',
    label: 'Wit & Wisdom Digital TE',
    urlIcon: 'app_icon_ww.png',
    url: '/auth/launch/inkling',
  },
  phd: {
    key: 'phd',
    label: 'PhD Science Digital TE',
    urlIcon: 'app_icon_phd.png',
    url: '/auth/launch/inkling',
  },
};

export function getApps(): IApp[] {
  return [AppsList.affirm, AppsList.um, AppsList.em, AppsList.ww, AppsList.phd];
}

export function getAppFrom(value: string): IApp | undefined {
  return getApps().find(app => app.key === value);
}
