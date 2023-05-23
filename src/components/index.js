import {Component} from 'react'
import GetItems from './app.js'

class HistoryElement extends Component {
  state = {
    searchElement: '',
    historyList: initialHistoryList,
  }

  searchEngineStarted = event => {
    this.setState({
      searchElement: event.target.value,
    })
  }

  deleteHistory = id => {
    const {historyList} = this.state
    const filteredHistory = historyList.filter(each => each.id !== id)
    this.setState({
      historyList: filteredHistory,
    })
  }

  render() {
    const {initialHistoryList} = this.props
    const {searchElement} = this.state
    const searchedHistory = historyList.filter(eachItem => {
      const temSearch = searchElement.toLowerCase()
      const temEl = eachItem.title.toLowerCase()
      return temEl.includes(temSearch)
    })

    return (
      <div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
            />
            <input
              type="search"
              placeholder="search history"
              onChange={searchEngineStarted}
            />
          </div>
        </div>
        (searchedHistory.length>0?(
        <ul>
          (searchedHistory.map(eachItem)=>(
          <GetItems
            key={eachItem.id}
            historyDetails={eachItem}
            deleteHistory={this.deleteHistory}
          />
          ))
        </ul>
        ):
        <div>
          <p>There is no history to show</p>
        </div>
        )
      </div>
    )
  }
}
export default HistoryElement
