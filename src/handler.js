import dealers from '../data/dealers.json';
import vehicles from '../data/vehicles.json';
import Responses from './responses';
import Util from '../src/util';
import { filter } from 'lodash';

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
    const vehiclesPerBac = filter(vehicles, {bac: bac})

    return Util.roll() ? Responses.error() : Responses.success(vehiclesPerBac);
  } catch (err) {
    throw new Error(err);
  }
}
