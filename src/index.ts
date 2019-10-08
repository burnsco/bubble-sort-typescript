import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'

const nubmersCollection = new NumbersCollection([1, 4, 1, -10, 1, 123, -15])
const sorter = new Sorter(nubmersCollection)
sorter.sort()
console.log(nubmersCollection.data)
