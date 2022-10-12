import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import { useState } from 'react';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button type='button' onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="Fechar Transação" />
      </button>

      <Container>
        <h2>Cadastrar Transação</h2>

        <input placeholder='Descrição' />
        <input type="number" placeholder='Valor' />

        <TransactionTypeContainer>
          <RadioBox 
            type='button'
            onClick={() => {setType('deposit');}}
            isActive={type ==='deposit'}
          > {/*inicio - botao de tipo do lancamento - entrada*/}
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span> 
          </RadioBox> {/*final - botao de tipo do lancamento - entrada*/}

          <RadioBox 
            type='button'
            onClick={() => {setType('withdraw');}}
            isActive={type ==='withdraw'}
          > {/*botao de tipo do lancamento - saida*/}
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox> {/*final - botao de tipo do lancamento - saida*/}
        </TransactionTypeContainer>

        <input placeholder='Categoria' />

        <button type="submit">Cadastrar</button>

      </Container>
    </Modal>
  )
}