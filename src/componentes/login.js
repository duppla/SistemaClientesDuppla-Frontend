import React from "react";
import Logotipo from "../img/Duppla_Logotipo_V2.png"


function login() {
    return (
        <div className="login">
            <div className="text-center">
                <img src={Logotipo} className="rounded" alt="..." width="100px" />
            </div>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <label className="mdc-text-field mdc-text-field--outlined">
                <span className="mdc-notched-outline">
                    <span className="mdc-notched-outline__leading"></span>
                    <span className="mdc-notched-outline__notch">
                        <span className="mdc-floating-label" id="my-label-id">Your Name</span>
                    </span>
                    <span className="mdc-notched-outline__trailing"></span>
                </span>
                <input type="text" className="mdc-text-field__input" aria-labelledby="my-label-id" />
            </label>
            <label className="mdc-text-field mdc-text-field--filled">
                <span className="mdc-text-field__ripple"></span>
                <span className="mdc-floating-label" id="my-label-id">Hint text</span>
                <input className="mdc-text-field__input" type="text" aria-labelledby="my-label-id" />
                <span className="mdc-line-ripple"></span>
            </label>

        </div>
    );
}


export default login;