import React, { useEffect, useState } from 'react'
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { marked } from 'marked';
import { InputTextarea } from 'primereact/inputtextarea';
import { useDispatch, useSelector } from 'react-redux';
import { deleteText, saveInput } from '../../redux/features/textSlice';
import { deleteFile, updateSave } from '../../redux/features/saveSlice';

function MarkdownArea() {
    const [text, setText] = useState('')
    const [openPreview, setOpenPreview] = useState(false)
    const saveState = useSelector(state=>state.saveState)
    const saveText = useSelector(state=>state.saveTextState)
    const dispatch = useDispatch()

    const renderText = () => {
        const __html = marked.parse(saveText.text.text === undefined || saveText.text.text === null? text : saveText.text.text , {
            sanitizer: true,
            gfm: true,
            pedantic: true,
            breaks: true,
            smartypants: true,
            xhtml: true,
            langPrefix: 'hljs language-'
        })
        return { __html: __html }
    }

    const TogglePreview = () => {
        setOpenPreview(!openPreview)
    }

  

    useEffect(() => {
      if(saveState.save && text!==''){
        console.log("dispatched")
        dispatch(saveInput({text:text}))
      }

      if(saveState.delete){
        setText('')
      }

      if(text==="" && saveState.save===false){
        dispatch(updateSave())
      }
    //   console.log(saveText.text.text, saveState)

    }, [text,saveText.text.text,saveState.save])

    return (
        <div className='markdown__layout'>
            <div className='markdown-sm'>
                <div className='navbar__brand-sm container'>
                    {
                        openPreview ?
                            <div>
                                <h2 className='letter-spacing impure-white '>PREVIEW</h2>

                            </div> :
                            <div>
                                <h2 className='letter-spacing impure-white '>MARKDOWN</h2>
                            </div>
                    }

                    <div>
                        <i className="pi pi-eye view" onClick={TogglePreview} style={{ fontSize: "1.2rem" }}></i>
                    </div>

                </div>
                <div className='markdown__sm-area '>
                    {
                        !openPreview ?

                            <div className='input__area'>
                                <InputTextarea autoResize  className='text-area-sm' value={saveState.save ? saveText.text.text:text} onChange={e => setText(e.target.value)} />

                            </div>
                            :
                            <div className='preview__area container' dangerouslySetInnerHTML={renderText()}>

                            </div>
                    }
                </div>
            </div>

            {/* large screen */}
            <div className='markdown-lg'>
                <Splitter stateKey={"mykey"} stateStorage={"local"} style={{ height: '100vh', backgroundColor: "#1C1B22" }}>
                    <SplitterPanel >
                        <div className='divider__heading'>
                            <p className='letter-spacing container'>Markdown</p>
                            <hr className='line' />
                        </div>
                        <InputTextarea autoResize className='text-area' value={saveText.text.text ?saveText.text.text:text} onChange={e => setText(e.target.value)} />
                    </SplitterPanel>
                    <SplitterPanel className='preview__area'>
                        <div className='divider__heading'>
                            <p className='letter-spacing container'>Preview</p>
                            <hr className='line' />
                        </div>
                        <div className='preview__text' contentEditable dangerouslySetInnerHTML={renderText()}>

                        </div>
                    </SplitterPanel>
                </Splitter>
            </div>
        </div>
    )
}

export default MarkdownArea