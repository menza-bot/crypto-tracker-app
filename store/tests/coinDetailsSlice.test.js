import reducer, { setCurrentDaysAmount, changeCurrencyForDetailsPage, formatData } from '../coinDetailsSlice'


describe('reducers and extraReducers testing', () => {

    const fakeState = {
        currentDaysAmount: 1,
        currentCurrency: 'USD'
    }

    test('should handle current days amount', () => {
        expect(reducer(fakeState, setCurrentDaysAmount(7))).toEqual(
            {
                currentDaysAmount: 7,
                currentCurrency: 'USD'
            }
        )
    })

    test('duplicate', () => {
        expect(reducer(fakeState, setCurrentDaysAmount(14))).toEqual(
            {
                currentDaysAmount: 14,
                currentCurrency: 'USD'
            }
        )
    })

    test('should handle current currency', () => {
        expect(reducer(fakeState, changeCurrencyForDetailsPage('EUR'))).toEqual(
            {
                currentDaysAmount: 1,
                currentCurrency: 'EUR'
            }
        )
    }) 

})


describe('UNIX format data testing', () => {

    const inputData = [
        [
            1639409536246, 
            47545.33575679896
        ],
        [
            1639409959379,  //13 Dec - expected
            47506.71536141465   //uv: 47506.71536141465 - expected expected why are we so blind to see that the ones we hurt are you and me
        ],
        [
            1639429341644,  //14 Dec - expected
            46737.26217570353 //uv: 46737.26217570353 - expected
        ]
    ]

    const outputData = [
        {
            name: '13 Dec',
            uv: 47545.33575679896
        },
        {
            name: '13 Dec',
            uv: 47506.71536141465
        },
        {
            name: '14 Dec',
            uv: 46737.26217570353
        }
    ]

    test('testing output value of reformer function', () => {
        expect(formatData(inputData)).toEqual(
            outputData
        )
    })


})