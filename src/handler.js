import dealers from '../data/dealers.json';
import vehicles from '../data/vehicles.json';
import Responses from './responses';
import Util from '../src/util';
import { find } from 'lodash';

export function getDealers () {
  try {
    return Util.roll() ? Responses.error() : Responses.success(dealers);
  } catch (err) {
    throw new Error(err);
  }
} 

export function getVehiclesByBac (event) {
  try {
    const { bac } = event.pathParameters
    const vehiclesPerBac = find(vehicles, {bac: bac})

    return Util.roll() ? Responses.error() : Responses.success(vehiclesPerBac);
  } catch (err) {
    throw new Error(err);
  }
}
