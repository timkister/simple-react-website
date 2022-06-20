import React, { useEffect } from "react";

import './Start.scss';

const Start = () => {

    async function init () {
        const node = document.querySelector("#type-text")
        
        await sleep(2000)
        node.innerText = ""
        await node.type('Hey, ')

        await node.type('there!')
        await sleep(2000)
        await node.delete('there!')
        await node.type('my name is Tim!')
    }
      
    const sleep = time => new Promise(resolve => setTimeout(resolve, time))
    
    class TypeAsync extends HTMLSpanElement {
        get typeInterval () {
            const randomMs = 100 * Math.random()
            return randomMs < 50 ? 10 : randomMs
        }
        
        async type (text) {
            for (let character of text) {
                this.innerText += character
                await sleep(this.typeInterval)
            }
        }
        
        async delete (text) {
            for (let character of text) {
                this.innerText = this.innerText.slice(0, this.innerText.length -1)
                await sleep(this.typeInterval)
            }
        }
    }
    
    customElements.define('type-async', TypeAsync, { extends: 'span' })
      
    useEffect(() => {
        init()
    })

    return (
        <div className="seite">
            <div className="title">
                <span is="type-async" id="type-text"></span>
                <span className="blinking-cursor">_</span>
            </div>
        </div>
    );
};

export default Start;