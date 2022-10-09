import {useState} from 'react';
import Modal from 'react-modal';

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyled } from "./styles/global";

Modal.setAppElement('#root'); // vincula o modal ao seu appElement (https://reactcommunity.org/react-modal/accessibility/)

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
         isOpen={isNewTransactionModalOpen}
         onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyled />
    </>
  );
}

export default App;
