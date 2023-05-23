const GetItems = props => {
  const {deleteHistory, historyDetails} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails
  const onDelete = () => {
    deleteHistory(id)
  }
  return (
    <li>
      <div>
        <p>{timeAccessed}</p>
        <img src={logoUrl} alt={title} />
        <a href={domainUrl} />
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        alt="delete"
      />
    </li>
  )
}
export default GetItems
