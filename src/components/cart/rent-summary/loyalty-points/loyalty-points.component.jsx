import React, { useState } from "react";
import { RUPEE_SYMBOL } from "../../../../constants/strings";
import { colors } from "../../../../constants/colors";

import { FaCheckSquare } from "react-icons/fa";
import { AiOutlineExclamationCircle } from "react-icons/ai";

import "./loyalty-points.styles.scss";

const LoyaltyPoints = ({ amount }) => {
  const [usePoints, setPoints] = useState(false);

  return (
    <div className='l-containr'>
      <div className="loyalty">
        <div className="points-selector">
          <FaCheckSquare
            onClick={() => setPoints(!usePoints)}
            opacity={usePoints ? 1 : 0.4}
            cursor="pointer"
            color={usePoints ? colors.TURQUOISE : colors.ARK_TWOD}
          />
          <p className="point">Loyalty Points</p>
          <AiOutlineExclamationCircle cursor="pointer" color="#FF5500" />
        </div>
        {usePoints && (
          <p className="price">
            - {RUPEE_SYMBOL} {amount}
          </p>
        )}
      </div>
      <span className="conditon">You can use max 200 points</span>
    </div>
  );
};

export default LoyaltyPoints;
