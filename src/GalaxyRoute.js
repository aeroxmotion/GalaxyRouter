import { compileRouteRegex } from './utils.js'

export default class GalaxyRoute {

  /**
   * Route params
   *
   * @type {Object.<string>}
   */
  params = {}

  constructor (route) {
    this._def = route

    this.path = route.path
    this.element = route.element

    // Compile matcher
    this._matcher = compileRouteRegex(this.path)
  }

  match (path) {
    const matched = this._matcher.exec(path)

    if (matched) {
      this.params = { ...matched.groups }
    }

    return !!matched
  }
}
