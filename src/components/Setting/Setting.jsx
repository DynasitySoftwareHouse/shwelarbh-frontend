import React from 'react'
import styles from './Setting.module.css'

function Setting() {
  return (
    <div className={styles.mainContainer}>
      <div className="flex justify-center">
        <div className="flex flex-col mt-56">
            {/* Profile */}
            <div>
              <a href="/setting/profile" className="btn bg-transparent m-5 w-72">Profile</a>
            </div>
            {/* Transition history */}
            <div>
              <a href="" className="btn bg-transparent m-5 w-72">Transition History</a>
            </div>
            {/* Language */}
            <div>
              <a href="" className="btn bg-transparent m-5 w-72">Language</a>
            </div>
            {/* Color Description */}
            <div>
              <a href="" className="btn bg-transparent m-5 w-72">Color Description</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Setting
