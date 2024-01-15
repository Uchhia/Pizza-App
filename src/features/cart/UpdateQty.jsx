import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import {
  deleteItemQuantity,
  getCurrentQuantityById,
  increaseItemQuantity,
} from './cartSlice';

function UpdateQty({ pizzaId, quantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
      {quantity}
      <Button
        type="round"
        onClick={() => dispatch(deleteItemQuantity(pizzaId))}
      >
        -
      </Button>
    </div>
  );
}

export default UpdateQty;
