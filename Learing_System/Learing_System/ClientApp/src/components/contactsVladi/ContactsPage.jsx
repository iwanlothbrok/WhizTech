


import React, { useEffect } from 'react'

export default function ContactsPage() {
    useEffect(() => {
        console.log('zdr');
    }, [])
    return (
        <div className='text-white' >
            <h2 className='mb-5 mt-4 md-4 display-4 text-center text-white' >Контакти</h2>

            <div className="container ">
                <div className="row container-fluid justify-content-center align-items-center" >


                    <div className="col text-white">
                        <form className="mx-md-5">
                            <div className="row">
                                <div className="col-md-5 mb-1 pb-2">
                                    <label htmlFor="input-name" className="form-label">Име</label>
                                    <input
                                        type="text"
                                        className={`form-control form-control-lg is-invalid`}
                                        id="input-name"
                                        placeholder="Име"
                                        required
                                    />

                                </div>
                                <div className="col-md-7 mb-1 pb-3">
                                    <label htmlFor="input-email" className="form-label">Имейл</label>
                                    <input
                                        type="email"
                                        className={`form-control form-control-lg `}
                                        id="input-email"
                                        placeholder="Имейл"

                                    />

                                </div>
                            </div>



                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="btn btn-outline-secondary btn-lg text-white p-4 px-5 mt-2 mb-4 mx-auto"
                                    id="input-submit"
                                    style={{ borderRadius: '20px' }}
                                >
                                    Изпрати
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    )
}
