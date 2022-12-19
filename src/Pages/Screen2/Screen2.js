import { useContext } from "react";

import EvaluatorOperatorInput from "../../Components/ExpressionEvaluator/components/evaluatorOperatorInput"
import ArithmeticContext from '../../Context/arithmetic.context'


const Screen2 = () => {
	  const { arithmetic, onArithmeticChange } = useContext(ArithmeticContext)

	  let weakCache;
	  const handleInputOperator = (value) => {
	  	weakCache = Array.from(arithmetic);
	  	weakCache[1] = value[0]
	  	weakCache[2] = value[1]
	    onArithmeticChange(weakCache);
	  };

	return <EvaluatorOperatorInput 
        computeArithmeticHandler={(value) => handleInputOperator(value)}
       />
}

export default Screen2;