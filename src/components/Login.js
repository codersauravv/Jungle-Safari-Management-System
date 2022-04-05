import React from 'react'
import logo from './images/logoLion.jpg';
export default function Login() {
    return (
        <>
            <h1 className="txt" style={{color: "maroon" ,textAlign:"center"}}>Welcome to JungleSafari</h1>
            <div className="container ">

                <div className="row">
                    <div className="col">

                    </div>
                    <div className="col">


                        <form action="#">
                            <div  className="container my-4">
                                <img src={logo} className="center"
                                    style={{ display: "block", marginLeft: "auto", marginRight: "auto", borderRadius: "50%" }} width="200"
                                    height="200" alt=" Avatar" / >
                                    <br />
                            </div>

                            <div className="row mb-3">
                                <label for="inputEmail3" className="col-sm-2 col-form-label">username</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id="inputEmail3" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" id="inputPassword3" />
                                </div>
                            </div>


                                <div className="row mb-3">
                                    <div className="col-sm-10 offset-sm-2">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                                <label className="form-check-label" for="gridCheck1">
                                                    Remember password
                                                </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-grid">
                                <button type="submit" className="btn btn-primary">login in</button>
                            <h6 style={{textAlign: "center"}}>OR</h6>
                            <button type="submit" className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                    <div className="col">

                    </div>
                </div>
            </div>
      
    </>
  )
}
