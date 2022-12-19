import React from "react";

function profile() {
    return (
        <div className="login">
            <label className="mdc-text-field mdc-text-field--outlined">
                <span className="mdc-notched-outline">
                    <span className="mdc-notched-outline__leading"></span>
                    <span className="mdc-notched-outline__notch">
                        <span className="mdc-floating-label" id="my-label-id">Your Name</span>
                    </span>
                    <span className="mdc-notched-outline__trailing"></span>
                </span>
                <input type="text" className="mdc-text-field__input" aria-labelledby="my-label-id"/>
            </label>

        </div>
    );
}


export default profile;