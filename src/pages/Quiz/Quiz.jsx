import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Questions from '../../data/questions';
import './Quiz.css'

export default function Quiz() {
  const questions = Questions 
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [showPontuacao, setShowPontuacao] = useState(false);
  const [pontos, setPontos] = useState(0);

  const proximaPergunta = (correta) => {
    const nextQuestion = perguntaAtual + 1;

    if (correta){
      setPontos(pontos + 1);
    }

    nextQuestion < questions.length ? setPerguntaAtual(nextQuestion) : setShowPontuacao(true)
  }

  return (
    <div>
      {showPontuacao ? (
        <div className='pontuacao'>
          <span>Sua pontuação é {pontos} de {questions.length}</span>
          <Link className="link" to="/">Reiniciar</Link>
        </div>) : (
        <>
          <div className='infoPerguntas'>
            <div className="contagemPerguntas">
              <span>Pergunta {perguntaAtual + 1}/{questions.length}</span>
            </div >
            <div className="pergunta">{questions[perguntaAtual].pergunta}</div>
          </div >
          <div className="resposta">
            {questions[perguntaAtual].opcoesResposta.map((opcoesResposta) =>
              <div className="grupoResposta">
                <span>{opcoesResposta.alternativa}</span>
                <button onClick={() => proximaPergunta(opcoesResposta.correta)}>{opcoesResposta.resposta}</button>
              </div>)}
          </div>
        </>
      )}
    </div >
  );
}