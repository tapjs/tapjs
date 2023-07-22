// reduce duplicate entries out of an array
export const reduce = (list: string[]) =>
  list.reduce((list: string[], entry) => {
    if (entry !== list[list.length - 1]) list.push(entry)
    return list
  }, [])
