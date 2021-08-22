import React from 'react'
import styles from '../../styles/converterPageStyles/Converter.module.css'
import { useSelector } from 'react-redux'
import { fetchCurrentPrice, setInputValueFrom, setInputValueTo, setInputNumber, setOutputNumber } from '../../store/converterSlice'
import { useDispatch } from 'react-redux'
import { useForm, Controller } from "react-hook-form";
import ReactSelect from "react-select";




const Converter = ({themeValue, state, dispatch}) => {


    const {  control, formState: { errors } } = useForm();


    const onChange1 = (inputObj1) => {
        dispatch(setInputValueFrom(inputObj1.value))
        dispatch(fetchCurrentPrice({id: inputObj1.value, vsCurrency: state.inputValueTo}))
    }


    const onChange2 = (inputObj2) => {
        dispatch(setInputValueTo(inputObj2.value))
        dispatch(fetchCurrentPrice({id: state.inputValueFrom, vsCurrency: inputObj2.value}))        
    }

    
    const onChangeNumber = (event) => {
        dispatch(setInputNumber(event.target.value))
        dispatch(setOutputNumber())
    }


    const customStyles = {
        control: styles => (
            {   
                ...styles,
                backgroundColor: `${themeValue ? '#20222E' : 'white'}`,
                color: `${themeValue ? 'white' : 'black'}`,
            }
        ),
        option: (styles, { isDisabled, isFocused }) => {
            return {
                ...styles,
                cursor: isDisabled ? 'not-allowed' : 'default',
                color: isFocused ? `${themeValue ? '#20222E' : 'black'}` : 'default'
            }
        },
        menu: styles => (
            {
                ...styles,
                backgroundColor: `${themeValue ? '#20222E' : 'white'}`
            }
        ),
        placeholder: styles => (
            {
                ...styles,
                color: `${themeValue ? '#DFDFDF' : 'gray'}`
            }
        ), 
        singleValue: styles => (
            {
                ...styles,
                color: `${themeValue ? 'white' : 'black'}`,
            }
        )
    }


    return (
            <div className = {`${themeValue ? styles.wrapper__dark : styles.wrapper}`}>
                <div className = {styles.converter}>
                        <section className = {styles.input__amount}>
                                <div className = {styles.label}>Amount</div>
                                <input onChange = {onChangeNumber} type = 'number' pattern="\d*" className = {`${styles.input} ${themeValue && styles.input__dark}`}/>
                                {errors.age && (
                                    <p>You should input the number in range from 1 to 9999</p>
                                )}
                        </section>
                        <section className = {styles.selector__from}>
                            <div className = {styles.label}>From</div>
                            <Controller
                                name="ReactSelectFrom"
                                isClearable
                                control={control}
                                render={({ field }) => (
                                <ReactSelect
                                    {...field}
                                    styles = {customStyles}
                                    options={
                                        state.selectorDataFrom
                                    }
                                    onChange = { onChange1 }
                                />
                                )}
                            />
                        </section>
                        <section className = {styles.selector__to}>
                            <div className = {styles.label}>To</div>
                            <Controller
                                name="ReactSelectTo"
                                isClearable
                                control={control}
                                render={({ field }) => (
                                <ReactSelect
                                    {...field}
                                    styles = {customStyles}
                                    options = {
                                        state.selectorDataTo
                                    }
                                    onChange = { onChange2 }
                                />
                                )}
                            />
                        </section>
                        <section className = {styles.output__value}>
                            {state.outputNumber ? <div>{state.inputNumber} {state.inputValueFrom} = {state.outputNumber} {state.inputValueTo}</div> : null}
                        </section>
                </div>
            </div>
    )
}


export default Converter
