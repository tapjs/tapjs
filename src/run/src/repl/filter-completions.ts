export const filterCompletions = (list: string[], input: string) => {
  const hits = list.filter(l => l.startsWith(input))
  return hits.length ? hits : list
}
