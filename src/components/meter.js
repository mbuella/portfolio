import React from "react"
import PropTypes from "prop-types"

const Meter = ({ rate }) => (
  <div class="meter-bg h-3 rounded-md bg-mbuella-gray-900 mt-2">
    <div class="meter h-full rounded-md bg-mbuella-fuchsia-700" style={{width: `${rate}%`}}>&nbsp;</div>
  </div>
)

export default Meter

Meter.propTypes = {
  rate: PropTypes.number
}

Meter.defaultProps = {
  rate: 0
}