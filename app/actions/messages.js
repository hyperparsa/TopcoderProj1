import {randId} from './utils'
export let MMSI = 368000000
export const addMessage = (shipId,position,info)=>{
  const newMessageId=randId()
  MMSI++
  return ({
    type:'ADD_MESSAGE',
    newMessageId,
    shipId,
    position,
    info:{...info,mmsi:MMSI-1}
  })
}

export const updateMessage = (messageId,info) =>({
  type : "UPDATE_MESSAGE",
  messageId,
  info
})

export const deleteMessage = (messageId) => ({
  type: "DELETE_MESSAGE",
  messageId
})
