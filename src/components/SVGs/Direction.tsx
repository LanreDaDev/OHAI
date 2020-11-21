import React from 'react'

interface DirectionProps {
direction?: string | undefined
style: object
}

export const Direction: React.FC<DirectionProps> = ({direction, style}) => {
return (<div style={style}>{direction === "North East" ? <NorthEast style={style} /> : direction === "North West" ? <NorthWest style={style} /> : direction === "South East" ? <SouthEast style={style} /> : direction === "South West" ? <SouthWest style={style} />: null}</div>);
}

const NorthEast: React.FC<DirectionProps> =({ style})=>{
  return(<svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="#009999" style={style}>
  <g id="North_East" data-name="North East" transform="translate(-1 -1)">
    <g id="Group_6" data-name="Group 6">
      <path id="Path_12" data-name="Path 12" d="M54,1H10a9.01,9.01,0,0,0-9,9V54a9.01,9.01,0,0,0,9,9H54a9.01,9.01,0,0,0,9-9V10A9.01,9.01,0,0,0,54,1ZM50.814,40.186a1,1,0,0,1-1.707.707l-5.929-5.929L27.621,50.521a1,1,0,0,1-1.414,0L13.479,37.793a1,1,0,0,1,0-1.414L29.035,20.822l-5.929-5.929a1,1,0,0,1,.707-1.707h26a1,1,0,0,1,1,1v26Z"/>
    </g>
  </g>
</svg>
)
}
const NorthWest: React.FC<DirectionProps> =({ style})=>{
  return(<svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62"  fill="#009999" style={style}>
  <g id="North_West" data-name="North West" transform="translate(-1 -1)">
    <g id="Group_7" data-name="Group 7">
      <path id="Path_13" data-name="Path 13" d="M54,1H10a9.01,9.01,0,0,0-9,9V54a9.01,9.01,0,0,0,9,9H54a9.01,9.01,0,0,0,9-9V10A9.01,9.01,0,0,0,54,1ZM50.521,37.793,37.792,50.521a1,1,0,0,1-1.414,0L20.822,34.965l-5.929,5.929a1,1,0,0,1-1.707-.707v-26a1,1,0,0,1,1-1h26a1,1,0,0,1,.707,1.707l-5.929,5.929L50.521,36.379a1,1,0,0,1,0,1.414Z"/>
    </g>
  </g>
</svg>

)
}

const SouthEast: React.FC<DirectionProps> =({ style})=>{
  return(<svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62"  fill="#009999" style={style}>
  <g id="South_East" data-name="South East" transform="translate(-1 -1)">
    <g id="Group_4" data-name="Group 4">
      <path id="Path_10" data-name="Path 10" d="M54,1H10a9.01,9.01,0,0,0-9,9V54a9.01,9.01,0,0,0,9,9H54a9.01,9.01,0,0,0,9-9V10A9.01,9.01,0,0,0,54,1ZM50.814,49.814a1,1,0,0,1-1,1h-26a1,1,0,0,1-.707-1.707l5.929-5.929L13.479,27.621a1,1,0,0,1,0-1.414L26.208,13.479a1,1,0,0,1,1.414,0L43.178,29.035l5.929-5.929a1,1,0,0,1,1.707.707v26Z"/>
    </g>
  </g>
</svg>


)
}

const SouthWest: React.FC<DirectionProps> =({ style})=>{
  return(<svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="#009999" style={style}>
  <g id="South_West" data-name="South West" transform="translate(-1 -1)">
    <g id="Group_5" data-name="Group 5">
      <path id="Path_11" data-name="Path 11" d="M54,1H10a9.01,9.01,0,0,0-9,9V54a9.01,9.01,0,0,0,9,9H54a9.01,9.01,0,0,0,9-9V10A9.01,9.01,0,0,0,54,1ZM50.521,27.621,34.964,43.177,40.785,49a1,1,0,0,1-.579,1.816H14.186a1,1,0,0,1-1-1v-26a1,1,0,0,1,1.707-.707l5.929,5.929L36.378,13.479a1,1,0,0,1,1.414,0L50.521,26.207a1,1,0,0,1,0,1.414Z"/>
    </g>
  </g>
</svg>


)
}