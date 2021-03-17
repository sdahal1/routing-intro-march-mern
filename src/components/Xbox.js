import React from 'react';
import styles from './Box.module.css';


const Xbox = (props) => {
    console.log('LOGGING PROPS HERE --->', props)
    // const {color, num } = props


    const createBoxes = (numOfBoxes)=>{
        var elements = []
        for(var i =0; i< numOfBoxes; i++){
            elements.push(<div key = {i} className={styles.box} style = {{backgroundColor: props.color}}></div>)
        }
        return elements
    }

    return (
        <div>
            {/* {if(isNaN("hello")){
                <h1>Stop playing games. We need a real number, this is important that we make these boxes</h1>
            }} */}
            {
            isNaN(props.num)? 
            <h1>Stop playing games. We need a real number, this is important that we make these boxes</h1>:
            <>
            <h1>Displaying {props.num} number of boxes</h1>
            {createBoxes(props.num)}
            </>
        
        }
            

        </div>
    );
};


export default Xbox;