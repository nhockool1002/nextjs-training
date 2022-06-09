import FeedContent from "component/FeedContent"
import Sidebar from "component/Sidebar"
import styles from "styles/Feed.module.scss"
import { useSelector } from 'react-redux'
import VideoStream from 'component/Feed/VideoStream'

export default function Feed() {
  const counter = useSelector((state:any) => state.counter.count)
  return (
    <>
      <div className="container-fluid p-0 feed">
        <div className="row">
          <div className="col-md-3 col-sm-12">
            <Sidebar />
          </div>
          <div className="col-md-6 col-sm-12">
            <FeedContent />
            <VideoStream />
          </div>
          <div className="col-md-3 col-sm-12">
            User was click <span className={styles.counter}>{counter}</span> times
          </div>
        </div>
      </div>
    </>
  )
}
