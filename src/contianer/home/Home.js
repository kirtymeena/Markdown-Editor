import React, { useState } from 'react'
import { Button } from 'primereact/button';
import { Link } from "react-router-dom"
import { motion } from "framer-motion";

import { Dialog } from 'primereact/dialog';

function Home() {

    const [displayBasic, setDisplayBasic] = useState(false);
    const [position, setPosition] = useState('center');
    const onClick = (name, position) => {
        dialogFuncMap[`${name}`](true);

        if (position) {
            setPosition(position);
        }
    }
    const dialogFuncMap = {
        'displayBasic': setDisplayBasic,

    }
    const onHide = (name) => {
        dialogFuncMap[`${name}`](false);
    }

    const openRepo = () =>{
        window.open("https://github.com/kirtymeena/Markdown-Editor",'_blank')
    }
    const openMail = () =>{
        window.location='mailto:kirtymeena@gmail.com'
    }

    return (
        <div className='container home__wrapper'>
            <div className='home__layout'>

                <div className='home__center-text'>
                    <div className='home__heading'>
                        <motion.h1
                            initial={{ translateX: -1000 }}
                            animate={{ translateX: 0 }}
                            transition={{ duration: 0.7, type: 'spring' }}
                            className='letter-spacing'>
                            Welcome to Markdown
                        </motion.h1>
                        <motion.p className='impure-white'
                            initial={{ translateX: 1000 }}
                            animate={{ translateX: 0 }}
                            transition={{ duration: 0.7, type: 'spring' }}
                            style={{ marginTop: "1rem", fontWeight: "600" }}>Markdown is a lightweight markup language that you use to add formatting elements to plaintext text documents.</motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}

                    >
                        <Link to="/markdown-editor"><Button label="Go to editor" className="p-button-raised" style={{  marginRight: "2rem" }} /></Link>
                        <Button label="Markdown Rules" icon="pi pi-external-link" onClick={() => onClick('displayBasic')} />
                    </motion.div>
                </div>
                <div>
                    <Dialog header="Markdown Rules" visible={displayBasic} style={{ width: '50vw' }} onHide={() => onHide('displayBasic')}>
                        <h4>Heading - to create a heading add the # sign</h4>
                        <br />
                        <p>#heading 1</p>
                        <p>##heading 1</p>
                        <p>###heading 1</p>
                        <br />

                        <h4>Ordered List - add numbers and keep adding the list items</h4>
                        <br />
                        <p> 1. Write markdown in the markdown editor window.</p>
                        <p>2. See the rendered markdown in the preview window. </p>
                        <br />

                        <h4>Unordered List -  add hyphen(-) or * to create unordered list </h4>
                        <br />
                        <p> - Write markdown in the markdown editor window.</p>
                        <p> - Name and save the document to access again later. </p>
                        <br />

                        <h4>Line break -  add br tag for line break </h4>

                        <br />

                        <h4>Code block - add ``` ``` for code block</h4>
                        <br />
                        <p>
                            ```
                            content
                            ```
                        </p>
                    </Dialog>
                </div>
                <div>
                    <i className="pi pi-github github-icon" onClick={openRepo} style={{ 'fontSize': '1.8em',cursor:"pointer" }}></i>
                    <i className="pi pi-send" onClick={openMail} style={{ 'fontSize': '1.8em',cursor:"pointer",marginLeft:"2rem" }}></i>
                </div>
            </div>

        </div>
    )
}

export default Home