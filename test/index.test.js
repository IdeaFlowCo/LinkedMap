import { IndexedDoublyLinkedList } from '../build/index.js'
import { Map } from 'immutable'

const value1 = Map({id: 1, name: 'one'})
const value2 = Map({id: 2, name: 'two'})
const value3 = Map({id: 3, name: 'three'})
const value4 = Map({id: 4, name: 'four'})
const value5 = Map({id: 5, name: 'five'})

const addToList = (val, list) => list.push(val, val.get('id'))
let dlList = IndexedDoublyLinkedList()
dlList = addToList(value1, dlList)
dlList = addToList(value2, dlList)
dlList = addToList(value3, dlList)
dlList = addToList(value4, dlList)

console.log('dlList', dlList)
console.log('toString', dlList.toString())
console.log('map', dlList.map((val) => 'malcom')) 
console.log('forEach', dlList.forEach((val, k) => console.log(val.toJS(), k)))
for (var i of dlList) { console.log(i) }
console.log('get', dlList.get(1))
console.log('set', dlList.set(1, 'malcom'))
console.log('setIn', dlList.setIn([1], 'malcom2'))
console.log('update', dlList.update(2, (val) => val.get('name')))
console.log('updateIn', dlList.updateIn([2, 'name'], (val) => val + val))
console.log('clear', dlList.clear())
console.log('reduce', dlList.reduce((reduction, val) => reduction + val.get('name'), ''))
console.log('reduceRight', dlList.reduceRight((reduction, val) => reduction + val.get('name'), ''))
console.log('.of', IndexedDoublyLinkedList.of(1, 'a', 2, 'b', 3, 'c', 4, 'd'))
console.log('.toMap', dlList.toMap())
console.log('deleteFirst', dlList.delete(1).toJS())
console.log('deleteSecond', dlList.delete(2).toJS())
console.log('shift', dlList.shift().toJS())
console.log('pop', dlList.pop().toJS())
console.log('prepend', dlList.prepend(value5, 6))
console.log('unshift', dlList.unshift([[6, value5], [7, value4]]))
console.log('unshift', dlList.unshift({6: value5, 7: value4}))
console.log('get:default', dlList.get())
console.log('next', dlList.next().get())
console.log('next', dlList.next().next().get())
console.log('next', dlList.next().next().next().prev().get())
console.log('prev', dlList.next().prev().get())
console.log('moveTo', dlList.moveTo(4).get())
console.log('moveToStart', dlList.moveTo(4).moveToStart().get())
console.log('moveToEnd', dlList.moveToEnd().get())
console.log('insertAfter', dlList.insertAfter(1, value3, 7)._itemsById.toJS())
console.log('insertAfter', dlList.insertAfter(4, value5, 5).last())
console.log('insertAfter', dlList.insertAfter(3, value5, 5))
console.log('insertBefore', dlList.insertBefore(3, value5, 5)._itemsById.toJS())
console.log('insertBefore', dlList.insertBefore(1, value5, 5).first())
console.log('insertBefore', dlList.insertBefore(3, value5, 5))
console.log('swap', dlList.swap(1,2)._itemsById.toJS())
console.log('swap:first', dlList.swap(1,2).first())
console.log('swap:first', dlList.swap(1,3).first())
console.log('swap:first', dlList.swap(1,4).first())
console.log('swap:last', dlList.swap(1,4).last())
console.log('reverse', dlList.reverse())
console.log('values', dlList.values().next())
console.log('getBetween', dlList.getBetween(1,4))
console.log('getBetween', dlList.getBetween(2,4))
console.log('getBetween', dlList.getBetween(2,4, true))
console.log('getBetween', dlList.getBetween(2,4, true, true))
