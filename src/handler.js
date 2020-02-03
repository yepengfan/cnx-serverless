import dealers from '../data/dealers.json';
import vehicles from '../data/vehicles.json';
import Responses from './responses';
import Util from '../src/util';
import { find, filter } from 'lodash';

export async function getDealers() {
  try {
    return Util.roll() ? Responses.error() : Responses.success(dealers);
  } catch (err) {
    throw new Error(err);
  }
} 

export async function getVehiclesByBac(event) {
  try {
    const { bac } = event.pathParameters
    const { brand: make } = find(dealers, {bac: bac});
    const vehiclesPerBac = filter(vehicles, { bac, make, })

    return Util.roll() ? Responses.error() : Responses.success(vehiclesPerBac);
  } catch (err) {
    throw new Error(err);
  }
}
