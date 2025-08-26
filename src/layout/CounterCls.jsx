import { Component } from 'react'

export default class CounterCls extends Component {

    constructor() {
        super()
        this.state = {
            counter: 0,
            name: ""
        }
    }
    render() {
        // state => data changes or updateion, mutable, internal 
        const inc = () => {
            this.setState({
                counter: this.state.counter + 1,
            })
        }

        const changeName = () => {
            this.setState({
                name: "world"
            })
        }

        const dec = () => {
            // if (this.state.counter > 0) {
            //     this.setState({
            //         counter: this.state.counter - 1
            //     })
            // }else{
            //      this.setState({
            //         counter: this.state.counter
            //     })
            // }

            this.setState({
                counter: this.state.counter > 0 ? this.state.counter - 1 : 0
            })

        }
        return (
            <>

                <div class=" text-center w-xl my-5 mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h2 className='text-2xl'>{this.state.counter}</h2>
                    <h2 className='text-2xl'>{this.state.name}</h2>

                    <button type='button' onClick={inc} className='bg-gray-800 px-5'>+</button>
                    <button type='button' onClick={dec} className='bg-red-800 px-5'>-</button>
                    <button onClick={changeName} type='button' className='bg-green-800 px-5'>change name</button>
                </div>

            </>
        )
    }
}
