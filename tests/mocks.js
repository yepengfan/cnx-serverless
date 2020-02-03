import Util from '../src/util';

export function mockUtil(method, returnValue) {
  jest.spyOn(Util, method).mockReturnValue(returnValue);
}
