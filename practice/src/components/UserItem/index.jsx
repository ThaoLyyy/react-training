import { useState } from 'react'
import {
  StyleListItem,
  StyleItem,
  StyleImageWrapper,
  StyleImageItem,
  StyleIcon,
  StyleInforItem,
  StyleDetailInfor
} from './style'
import ConfirmModal from '../common/ConfirmModal'
import Button from '../common/Button'
import Modal from '../common/Modal'
import { useContext } from 'react'
import { useEffect } from 'react'
import { StoreContext } from '../../store'

const UserItem = ({ users }) => {
  const { deleteUser, updateUser } = useContext(StoreContext)
  const [selectedUpdateUserId, setSelectedUpdateUserId] = useState(null)
  const [selectedDelUserId, setSelectedDelUserId] = useState(null)

  useEffect(() => {
    handleClose()
  }, [])

  // Show DeleteModal
  const handleOpen = id => {
    setSelectedDelUserId(id)
  }
  /**Close modal*/
  const handleClose = () => {
    setSelectedUpdateUserId(null)
    setSelectedDelUserId(null)
  }
  /**Delete users*/
  const handleDelete = () => {
    deleteUser(selectedDelUserId)
    setSelectedDelUserId(null)
  }
  /**Update user*/
  const handleUpdate = user => {
    updateUser(user)
  }
  return (
    <StyleListItem>
      {users.map(user => (
        <StyleItem key={user.id}>
          <StyleImageWrapper>
            <StyleImageItem src={user.image} />
          </StyleImageWrapper>
          <StyleInforItem>
            <StyleDetailInfor>Username: {user.name} </StyleDetailInfor>
            <StyleDetailInfor>Phone: {user.phone}</StyleDetailInfor>
            <StyleDetailInfor>Email: {user.email}</StyleDetailInfor>
            <StyleDetailInfor>Address: {user.address}</StyleDetailInfor>
            <StyleIcon>
              <Button className="edit" icon="fas fa-edit" onClicked={() => setSelectedUpdateUserId(user)}></Button>
              <Button onClicked={() => handleOpen(user.id)} className="delete" icon="fas fa-trash-alt"></Button>
            </StyleIcon>
          </StyleInforItem>
        </StyleItem>
      ))}

      {/* show update modal */}
      {!!selectedUpdateUserId && (
        <Modal
          text="Edit Users"
          defaultValue={selectedUpdateUserId}
          OnIsUpdate={handleUpdate}
          onCloseModal={handleClose}
        />
      )}

      {/* show delete modal */}
      {!!selectedDelUserId && <ConfirmModal onDel={handleDelete} onCloseModal={handleClose} />}
    </StyleListItem>
  )
}
export default UserItem
