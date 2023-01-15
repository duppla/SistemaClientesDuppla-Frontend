import React from "react";
import Logotipo from "../img/Duppla_Logotipo_V2.png"
import Simbolo from "../img/Duppla_Simbolo_V1.png"
import { Link } from "react-router-dom";
/*
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';


export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack>
  );
}
*/

function SingIn() {

    return (
        <div className=".container-fluid">
            <div className=" d-flex justify-content-center">
                <div className="container-sing">
                    <div className="img-logotipo">
                        <img src={Simbolo} className="rounded justify-content-center" alt="Simbolo duppla" width="60px" height="67px" />
                    </div>
                    <div className="img-simbolo">
                        <img src={Logotipo} className="rounded" alt="duppla" width="240px" height="88px" />
                    </div>
                    <div className="centrado-btn">
                        <button  litype="button" className="btn btn-primary btn-registro text-center" width="400px" height="52px" p-5>
                          <Link to='/login'>REGISTRO DE CONTRASEÑA</Link>  
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default SingIn;