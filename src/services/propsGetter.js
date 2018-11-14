const propsGetter = (propsName) => {
  return (props) => {
    if (Array.isArray(propsName)) {
      return propsName.reduce((acc, prop) => {
        acc[prop] = props[prop]
        return acc
      }, {})
    } else {
      return {
        [propsName]: props[propsName]
      }
    }
  }
}

export default propsGetter
