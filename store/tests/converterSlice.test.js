import reducer, { setInputValueFrom, setInputValueTo, setInputNumber, setOutputNumber } from '../converterSlice'

describe('testing reducers in converterSlice', () => {

    test('should handle first input value', () => {

        const fakeState = {
            inputValueFrom: null
        }

        expect(reducer(fakeState, setInputValueFrom('usd'))).toEqual(
            {
                inputValueFrom: 'usd'
            }
        )
    })

    test('should handle second input value', () => {

        const fakeState = {
            inputValueTo: null
        }

        expect(reducer(fakeState, setInputValueTo('bitcoin'))).toEqual(
            {
                inputValueTo: 'bitcoin'
            }
        )
    })

    test('should handle input number', () => {

        const fakeState = {
            inputNumber: 0
        }

        expect(reducer(fakeState, setInputNumber(5))).toEqual(
            {
                inputNumber: 5
            }
        )
    })

    test('should display outputNumber', () => {

        const fakeState = {
            outputNumber: null
        }

        
    })
})