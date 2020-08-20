const enhancer = require('./enhancer.js');
// test away!

const {
    success,
    fail,
    repair,
    get,
  } = enhancer

describe("test the enhacer module", () => {
    describe("test the repair method", () => {
        it("accepts an item obj and returns the item with 100 durability", () => {
            const item = {
                durability: 30,
                enhancement: 5,
                name: 'Sword'
            }

            const itemTwo = {
                durability: 100,
                enhancement: 5,
                name: 'Sword'
            }

            const repairedItem = repair(item)
            expect(repairedItem.durability).toBe(100)
            expect(repairedItem).toEqual(itemTwo)
        })
    })
    describe("testing the success method", () => {
        it("returns the item with the enhacement level increased by 1", () => {
            const item = {
                durability: 30,
                enhancement: 5,
                name: 'Sword'
            }

            const itemTwo = {
                durability: 30,
                enhancement: 6,
                name: 'Sword'
            }

            const enhancedItem = success(item)
            expect(enhancedItem).toEqual(itemTwo)
        })
        it("doesn't enhance the item if the enhancement level is 20 already", () => {
            const item = {
                durability: 30,
                enhancement: 20,
                name: 'Sword'
            }

            const enhancedItem = success(item)
            expect(enhancedItem).toEqual(item)
        })
    })
    describe("testing the fail module", () => {
        it("the item's durability is reduced by 5 if the enhancement level is less than 15", () => {
            const item = {
                durability: 30,
                enhancement: 14,
                name: 'Sword'
            }

            const itemTwo = {
                durability: 25,
                enhancement: 14,
                name: 'Sword'
            }

            const enhancedItem = fail(item)
            expect(enhancedItem).toEqual(itemTwo)
        })
        it("the item's durability is reduced by 10 if the enhancement level is 15 or more", () => {
            const item = {
                durability: 30,
                enhancement: 15,
                name: 'Sword'
            }

            const itemTwo = {
                durability: 20,
                enhancement: 15,
                name: 'Sword'
            }

            const enhancedItem = fail(item)
            expect(enhancedItem).toEqual(itemTwo)
        })
        it("the item's durability is reduced by 10 if the enhancement level is 15 or more", () => {
            const item = {
                durability: 30,
                enhancement: 17,
                name: 'Sword'
            }

            const itemTwo = {
                durability: 20,
                enhancement: 16,
                name: 'Sword'
            }

            const enhancedItem = fail(item)
            expect(enhancedItem).toEqual(itemTwo)
        })
    })
})