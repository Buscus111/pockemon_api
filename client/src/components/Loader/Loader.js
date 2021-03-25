import { Ring } from 'react-awesome-spinners'
import { useSelector } from 'react-redux'

const Loader = () => {
  const loader = useSelector(state => state.loader);
  return (
    loader && <Ring />
  );
}

export default Loader;
