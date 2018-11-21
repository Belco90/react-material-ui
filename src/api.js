import { fakeResults } from './fixtures';

class Api {
  readEntities() {
    return new Promise(resolve => setTimeout(resolve, 2000, fakeResults));
  }
}

export default new Api();
