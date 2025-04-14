import { createSlice } from "@reduxjs/toolkit";
import { IBoard } from "../../types";

type TBoardState = {
    modalActive: boolean;
    boardArray: IBoard[];

}

const initialState: TBoardState = {
    modalActive: false,
    boardArray: [
        {
            boardId: 'board-0',
            boardName: "첫 번째 게시물",
            lists: [
                {
                    listId: "list-0",
                    listName: "List 0",
                    tasks: [
                        {
                            taskId: "task-0",
                            taskName: "task 0",
                            taskDescription: "task description",
                            taskOwner: "UserName"
                        },{
                            taskId: "task-1",
                            taskName: "task 1",
                            taskDescription: "task description",
                            taskOwner: "UserName"
                        },
                    ]
                },{
                    listId: "list-1",
                    listName: "List 1",
                    tasks: [
                        {
                            taskId: "task-2",
                            taskName: "task 2",
                            taskDescription: "task description",
                            taskOwner: "UserName"
                        },{
                            taskId: "task-3",
                            taskName: "task 3",
                            taskDescription: "task description",
                            taskOwner: "UserName"
                        },
                    ]
                }
            ]
        }
    ]
}

const boardsSlice = createSlice({
    name:'boards',
    initialState,
    reducers: {

    }
})

export const boardsReducer = boardsSlice.reducer;