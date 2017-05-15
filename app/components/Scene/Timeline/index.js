import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import toJs from 'utils/toJs'
import Slider from 'rc-slider'

import {setTime,changeDuration} from 'actions/'

import './Timeline.styl'

const numberOfLabels=13;

const minToHours = (min) => {
  const m = min % 60
  const h =(min-m)/60
  return (h<10?'0':'') + Math.floor(h) + ':' + (m<10?'0':'') + Math.floor(m)
}

const createLabels = (number,duration) => [...[...Array(number).keys()].map((x,i)=>minToHours(i*duration/number)),minToHours(duration)]

const Timeline = ({duration,  updateTime,updateDuration}) => {
  let durationInput

  const onSubmit = (e) =>{
      e.preventDefault()
     updateDuration(parseInt(durationInput.value))
   }
  return (
    <div className="timeline">
      <div className="top pure-g">
        <div className="pure-u-1-12">
          <span>TIMELINE</span>
        </div>
        <div className="pure-u-5-6 labels">
          {
            createLabels(numberOfLabels-1,duration).map((label,i)=>(
              <div key={i} className="pure-u" style={{width:(100/numberOfLabels)+'%',height:'100%'}}>
                <span>{label}</span>
              </div>
            ))
          }
        </div>
      </div>
      <div className="bottom">
        <div className="pure-u-1-12">
          <span></span>
        </div>
        <div className="pure-u-5-6">
          <div className="slider-container">
            <Slider max={duration} onChange={updateTime}/>
          </div>
        </div>
        <div className="pure-u-1-12">
          <form className="top-form duration-input" onSubmit={onSubmit}>
            <span>Duration(min): </span>
            <input defaultValue={duration} ref={el =>durationInput = el}  type="number"></input>
          </form>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    duration: state.timeline.get('duration'),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateTime:(newTime)=>{
      dispatch(setTime(newTime))
    },
    updateDuration:(newDuration)=>{
      console.log(newDuration)
      dispatch(changeDuration(newDuration))
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(toJs(Timeline))
