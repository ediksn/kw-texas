import { isFunction } from 'lodash'

const isPromise = (obj: any) => isFunction(obj?.finally)

export default isPromise
