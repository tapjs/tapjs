import { WatchOptions } from 'chokidar'

export const options: WatchOptions = {
  disableGlobbing: true,
  followSymlinks: true,
  atomic: true,
  ignorePermissionErrors: true,
  useFsEvents: false,
  persistent: false,
}
