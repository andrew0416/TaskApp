import React, {FC, useState} from 'react'
import { useTypeSelector } from '../../hooks/redux';
import SideForm from './SideForm/SideForm';
import { FiPlusCircle } from 'react-icons/fi';
import { addButton, addSection, boardItem, boardItemActive, container, title } from './BoardList.css';

type TBoardListProps = {
  activeBoardId: string; 
  setActiveBoardId: React.Dispatch<React.SetStateAction<string>>
}

const BoardList: FC<TBoardListProps> = ({
  activeBoardId: _,
  setActiveBoardId: __
}) => {

  const {boardArray} = useTypeSelector(state => state.boards);
  const [isFormOpen, setIsFormOpen] = useState(false)
  return (
    
    <div className={container}>
      <div className={title}>
        게시판:
      </div>
      {boardArray.map((board, index) => (
        <div key={board.boardId}>
          <div>
           {board.boardName}
          </div>
        </div>
      ))}
      <div className={addSection}>
           {
             isFormOpen ?
              <SideForm />
            :
            <FiPlusCircle className={addButton} onClick={() =>setIsFormOpen(!isFormOpen)}/>
           }
      </div>
    </div>
  )
}

export default BoardList