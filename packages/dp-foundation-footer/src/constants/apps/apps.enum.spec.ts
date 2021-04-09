import { getApps, getAppFrom, AppsList, IApp } from './apps.enum';

describe('App enum', () => {
  const expectedArrayMock: IApp[] = getApps();

  it('values', () => {
    expect(AppsList.affirm.key).toEqual('affirm');
    expect(AppsList.um.key).toEqual('um');
  });

  it('getApps', () => {
    const result: IApp[] = getApps();
    expect(result).toHaveLength(5);
    expect(result).toEqual(expectedArrayMock);
  });

  describe('getAppFrom', () => {
    it('default', async () => {
      const result: IApp = getAppFrom('affirm');
      expect(result).toEqual(AppsList.affirm);
    });
    it('undefined', async () => {
      const result: IApp = getAppFrom('gm');
      expect(result).toBeUndefined();
    });
  });
});
