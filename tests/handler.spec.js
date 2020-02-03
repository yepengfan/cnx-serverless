import { getDealers, getVehiclesByBac } from '../src/handler';
import { mockUtil } from './mocks';
import fixtures from './fixtures';

describe('Get dealers', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should be a function', () => {
    expect(typeof(getDealers)).toBe('function');
  });

  it('should return a list of dealers on success', async () => {
    mockUtil('roll', false);
    const res = await getDealers();
    expect(res).toEqual(fixtures.dealersRes);
  });

  it('should return error responses on failure', async () => {
    mockUtil('roll', true);
    const res = await getDealers();
    expect(res).toEqual(fixtures.errorRes);
  });
});

describe('Get vehicles by bac', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should be a function', () => {
    expect(typeof(getVehiclesByBac)).toBe('function');
  });

  it('should return a list of vehicles by a given bac on success', async () => {
    mockUtil('roll', false);
    const res = await getVehiclesByBac(fixtures.vehicleEvent);
    expect(res).toEqual(fixtures.vehiclesRes);
  });

  it('should only match bac and brand', async () => {
    mockUtil('roll', false);
    const res = await getVehiclesByBac(fixtures.filterVehicleEvent);
    expect(JSON.parse(res.body).length).toBe(0);
  });

  it('should return error responses on failure', async () => {
    mockUtil('roll', true);
    const res = await getVehiclesByBac(fixtures.vehicleEvent);
    expect(res).toEqual(fixtures.errorRes);
  });
});
