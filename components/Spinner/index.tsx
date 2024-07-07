import { MagnifyingGlass } from 'react-loader-spinner'

const Spinner = () => {
  return (
    <MagnifyingGlass
      visible={true}
      height="80"
      width="80"
      ariaLabel="magnifying-glass-loading"
      wrapperStyle={{}}
      wrapperClass="magnifying-glass-wrapper"
      glassColor="#FFFFFF"
      color="#20A9F7"
    />
  )
}

export default Spinner;
