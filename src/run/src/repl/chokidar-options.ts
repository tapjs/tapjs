import { ChokidarOptions } from 'chokidar'

export const options: ChokidarOptions = {
  followSymlinks: true,
  atomic: true,
  ignorePermissionErrors: true,
  persistent: false,
}
