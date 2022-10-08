import React, { useEffect, useState } from 'react'
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFile, updatefileName, updateSave } from '../../redux/features/saveSlice';
import { deleteText } from '../../redux/features/textSlice';

function Navbar() {
    const [documentName, setDocumentName] = useState('')
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    const changeSaveState = () => {
        dispatch(updateSave())
    }
    const HandleDelete = () => {
        dispatch(deleteFile())
        dispatch(deleteText({ text: undefined }))

    }
    const setFileName = (e) => {
        dispatch(updatefileName({ fileName: e.target.value }))
    }

    useEffect(() => {

    }, [state.save, state.saveState.fileName.fileName])

    return (
        <>
            {/* small screen */}
            <div className='navbar-sm '>

                <div className='file__name-sm container'>
                    <div>
                        <Inplace closable>
                            <InplaceDisplay>
                                <p><span style={{ padding: "0.7rem" }}> <i className="pi pi-file-edit" style={{ fontSize: "1.2rem" }}></i></span>{state.saveState.fileName.fileName || "welcome"}</p>
                            </InplaceDisplay>
                            <InplaceContent>

                                <InputText autoFocus value={state.saveState.fileName.fileName} onChange={(e) => setFileName(e)} className="p-inputtext-sm block mb-2" />
                            </InplaceContent>
                        </Inplace>
                    </div>
                    <div className='icons'>
                        <div>
                            <i className="pi pi-trash delete" style={{ fontSize: "1.2rem" }} onClick={() => HandleDelete()}></i>
                        </div>
                        <div className='save-icon'>
                            <div className='save-icon'>
                                <Button className="Click" icon="pi pi-save" onClick={() => changeSaveState()} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* large screen */}
            <div className='navbar-lg container'>
                <div className='navbar__brand'>
                    <div className='navbar__logo'>
                        <h3 className='letter-spacing impure-white'>MARKDOWN</h3>
                    </div>
                    <div className='vertical__line'>

                    </div>
                    <div className='file__name'>
                        <Inplace closable >
                            <InplaceDisplay>
                                <p><span style={{ padding: "0.7rem" }}> <i className="pi pi-file-edit" style={{ fontSize: "1.2rem" }}></i></span>{state.saveState.fileName.fileName || "welcome"}</p>
                            </InplaceDisplay>
                            <InplaceContent>
                                <InputText autoFocus value={state.saveState.fileName.fileName} onChange={(e) => setFileName(e)} />
                            </InplaceContent>
                        </Inplace>
                    </div>
                </div>
                <div className='navbar__links'>
                    <div>
                        <i className="pi pi-trash delete" style={{ fontSize: "1.2rem" }} onClick={() => HandleDelete()}></i>
                    </div>
                    <div className='save-icon'>
                        <Button className="Click" icon="pi pi-save" onClick={() => changeSaveState()} />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar