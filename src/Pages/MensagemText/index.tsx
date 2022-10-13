import React, { useState } from "react";
import api from "../../hooks/Api/index";
import { Link } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
import { Container } from "./styles";

interface IData {
  number: number;
  message: string;
}

const MenssagemText: React.FC = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [numbe, SetNumbe] = useState("");

  function Submit() {
    api
      .post(
        "/send_message",
        { number: numbe, message: text },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "0uyw8haw86mzelmsug01yusrqb7raj",
          },
        }
      )
      .then((response) => console.log(response.data))
      .catch((err) => console.error(err));

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  return (
    <Container>
      <div className="titulo">
        <h1 className="titulo-two">
          Envio de <strong>menssagens</strong>
        </h1>
        <p className="titulo-tree"></p>
      </div>
      <div className="img-foto">
        <div>
          <div className="form">
            <form>
              <label>
                <h2>Adicione sua menssagem</h2>
                <input
                  type="number"
                  className="text-1"
                  placeholder="Adicione o seu numero"
                  name="number"
                  value={numbe}
                  onChange={(e) => {
                    SetNumbe(e.target.value);
                  }}
                />
                <input
                  type="text"
                  className="text"
                  placeholder="Adicione o sua menssagem"
                  name="name"
                  value={text}
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                />
              </label>
            </form>
            {loading ? (
              <ColorRing height={60} width={60} />
            ) : (
              <button onClick={Submit} disabled={loading} className="buttom">
                Enviar
              </button>
            )}

            <div className="img-foto1">
              <div className="img-foto2">
                <img className="img-foto3" alt="" src="p1.png" />
              </div>

              <div className="nome-whats1">
                <p className="nome-whats">{text}</p>
              </div>
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MenssagemText;
